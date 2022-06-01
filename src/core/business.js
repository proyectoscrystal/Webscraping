const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline,
} = require("@azure/storage-blob");

const fs = require("fs");
const mongoose = require("mongoose");
const axios = require("axios");
const https = require("https");
const getStream = require("into-stream");

const containerName = process.env.CONTAINER_NAME;

const ONE_MEGABYTE = 1024 * 1024;
const uploadOptions = { bufferSize: 4 * ONE_MEGABYTE, maxBuffers: 20 };

const sharedKeyCredential = new StorageSharedKeyCredential(
  process.env.AZURE_STORAGE_ACCOUNT_NAME,
  process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY
);
const pipeline = newPipeline(sharedKeyCredential);

const blobServiceClient = new BlobServiceClient(
  `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
  pipeline
);

const getBlobName = (originalName) => {
  // Use a random number to generate a unique file name,
  // removing "0." from the start of the string.
  const identifier = Math.random().toString().replace(/0\./, "");
  return `${identifier}-${originalName}`;
};


let filterText = require("./filtros");

const { ObjectId } = mongoose.Types;
const Business = require("../domain/model/businessDao");

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const agent = new https.Agent({
  rejectUnauthorized: false,
});

/**
 *
 * @param {data}: Respuesta del modelo que filtra
 * * Nuevo filtro por imagen
 */

let sendData;
const consultaFiltro = async (data) => {
  const prendaGenLower = [];

  // Pasar a misnusculas todas las prendas generales
  data.prendasGenerales.forEach((prenda) => {
    prendaGenLower.push(prenda.toLowerCase());
  });

  const consulta = await Business.aggregate([
    {
      $match: {
        $or: [
          {
            prendasGenerales: {
              $in: prendaGenLower,
            },
          },
          {
            hexColors: {
              $in: data.hexColors,
            },
          },
          {
            principalColors: {
              $in: data.principalColors,
            },
          },
          {
            pantoneColors: {
              $in: data.pantoneColors,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "usuario",
      },
    },
  ]);

  sendData = {
    consulta,
    hexColor: data.hexColors,
    principalColors: data.principalColors,
    pantoneColors: data.pantoneColors,
    prendaGenLower,
  };
};

exports.sendFilter = async (req, res) => {
  console.log("Mostrando imágenes filtradas por foto");
  res.send(sendData);
};

exports.filtroImagen = async (req, res) => {
  const data = req.body;
  console.log("Enviando imagen para filtrar");

  const filtro = {
    method: "post",
    url: process.env.MODELO_FILTRO,
    httpsAgent: agent,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  axios(filtro)
    .then(async (response) => {
      const consulta = response.data;

      const resp = await consultaFiltro(consulta);
      console.log(resp);
    })
    .catch((error) => {
      res.send({
        status: 500,
        msg: "Error en el filtro",
      });
    });
};

/*
 * Obtener todas las imágenes
 */
exports.getImages = async (request, res) => {
  const q = {};
  if (request.query.year !== undefined) {
    q.year = request.query.year;
  }
  if (request.query.gender !== undefined) {
    q.gender = request.query.gender;
  }
  if (request.query.type !== undefined) {
    q.type = request.query.type;
  }
  if (request.query.use !== undefined) {
    q.use = request.query.use;
  }
  if (request.query.quarter !== undefined) {
    q.quarter = request.query.quarter;
  }
  if (request.query.origin !== undefined) {
    q.origin = request.query.origin;
  }
  if (request.query.features !== undefined) {
    q.features = {
      $in: request.query.features,
    };
  }

  request.user_id = request.user_id.trim();

  const consulta = await Business.aggregate([
    {
      $match: {
        $or:[{discontinued:false},{discontinued:undefined} ]
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "usuario",
      },
    },
  ]).sort({
    _id: -1,
  });
  res.send(consulta);
};

/*
 * Obtener una solo imagen
 */

exports.getImage = async (request, response) => {
  const data = request.params;
  const consulta = await Business.aggregate([
    {
      $match: {
        _id: ObjectId(data.id),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "usuario",
      },
    },
  ]);

  response.status(200).send(consulta);
};

/*
 * Eliminar imagen
 */
exports.deleteImage = async (request, response) => {
  const query = {
    imageName: request.body.name,
  };

  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(query.imageName);

  Business.deleteImage(query, async (err) => {
    if (err) return response.status(500).send("Server error");

    await blockBlobClient.delete();

    return response.send({
      message: "Imagen eliminada",
    });
  });
};

/*
 * Eliminar Prenda general
 */
exports.deletePrendaGen = (request, response) => {
  console.log("Eliminando prenda general");

  const query = {
    imageName: request.body.name,
  };

  const params = {
    prendasGenerales: [request.body.feature],
  };

  Business.getByName(query, params, (err, image) => {
    if (err) return response.status(500).send("Server error");
    return response.send(image);
  });
};

/**
 * * Eliminar prenda color
 */
exports.deletePrendaColor = async (req, res) => {
  console.log("Eliminar prenda color");

  const id = {
    imageName: req.body.imageName,
  };

  const data = req.body.prenda;

  const prendaColor = {
    ppal: data.ppal,
    prenda: data.prenda,
    hexaColor: data.hexaColor,
    pantoneColor: data.pantoneColor,
  };

  const queryDelete = {
    $pullAll: {
      prendaColor: [prendaColor],
    },
  };

  await Business.findOneAndUpdate(id, queryDelete);

  Business.getByName(id, prendaColor, (err, image) => {
    if (err) return res.status(500).send("Server error");
    return res.send(image);
  });
};

/**
 * * Eliminar color
 */

exports.deleteColor = async (req, res) => {
  const query = {
    imageName: req.body.imageName,
  };

  console.log("Eliminar color");

  const params = {
    principalColors: [req.body.principalColors],
  };

  await Business.getByName(query, params, (err, image) => {
    if (err) return res.status(500).send("server error");
    return res.send(image);
  });
};

/*
 * Eliminar features
 */
exports.deleteFeature = (request, response) => {
  console.log("Eliminando features");

  const query = {
    imageName: request.body.name,
  };

  const params = {
    features: [request.body.feature],
  };

  Business.getByName(query, params, (err, image) => {
    if (err) return response.status(500).send("Server error");
    return response.send(image);
  });
};

/**
 ** Eliminar prenda inferior
 */

exports.deleteInferior = async (req, res) => {
  console.log("Eliminando Prenda inferior");

  const query = {
    imageName: req.body.name,
  };

  const params = {
    prendasInferiores: [req.body.prenda],
  };

  await Business.getByName(query, params, (err, image) => {
    if (err) return res.status(500).send("server error");
    return res.send(image);
  });
};

/*
 * Agregar característica
 */
exports.updateFeature = (request, response) => {
  console.log("Agregar característica");
  const id = {
    imageName: request.body.imageName,
  };
  Business.findOneAndUpdate(
    id,
    {
      $push: {
        features: request.body.feature,
      },
    },
    (err) => {
      if (err) return response.status(500).send("Server error");
      return response.send({
        message: "Característica agregada",
      });
    }
  );
};

/*
 * Agregar prenda general
 */
exports.updatePrendaGen = (request, response) => {
  console.log("Agregar prenda general");
  const id = {
    imageName: request.body.imageName,
  };
  Business.findOneAndUpdate(
    id,
    {
      $push: {
        prendasGenerales: request.body.feature,
      },
    },
    (err) => {
      if (err) return response.status(500).send("Server error");
      return response.send({
        message: "Característica agregada",
      });
    }
  );
};

/**
 * * Agregar prendas inferiores
 */

exports.updatePrendaInf = async (req, res) => {
  console.log("Agregar prendas inferiores");

  const id = {
    imageName: req.body.imageName,
  };

  const consulta = await Business.findOne(id);

  Business.findOneAndUpdate(
    id,
    {
      $push: {
        prendasInferiores: req.body.prenda,
      },
    },
    (err) => {
      if (err) return res.status(500).send("server error");
      return res.send({
        message: "Prenda inferior agregada",
      });
    }
  );
};

/*
 * Actualizar Colores
 */

exports.updateColor = (request, response) => {
  const id = {
    imageName: request.body.imageName,
  };

  Business.findOneAndUpdate(
    id,
    {
      $push: {
        principalColors: request.body.principalColors,
      },
    },
    (err) => {
      if (err) return response.status(500).send("server error");
      return response.send({
        message: "Color agregado",
      });
    }
  );
};

/**
 ** Actualizar información de la imagen
 */

exports.updateInfo = async (req, res) => {
  console.log("Actualizar información");

  const prendaColorGen = [];
  const { imageName } = req.body;
  const { prenda } = req.body;
  const { ppal } = req.body;
  const { pantoneColor } = req.body;
  const { hexaColorSelect } = req.body;

  const id = {
    imageName,
  };

  const prendaColor = {
    ppal,
    prenda,
    hexaColor: hexaColorSelect,
    pantoneColor,
  };

  prendaColorGen.push(prendaColor);

  Business.findOneAndUpdate(
    id,
    {
      $push: {
        prendaColor: prendaColorGen,
      },
    },
    (err) => {
      if (err) return res.status(500).send("server error");
      return res.send({
        message: "Info actualizada",
      });
    }
  );
};

// metodo para estructurar el filtro de imagenes
let queryStructure = (query) => {
  let obj = {};



  if(query.year !== undefined && Array.isArray(query.year)) {
      obj.year = {$in: query.year};
  } else if(query.year !== undefined) {
      obj.year = query.year;
  }
  if(query.origin !== undefined && Array.isArray(query.origin)) {
      obj.origin = {$in: query.origin};
  } else if(query.origin !== undefined) {
      obj.origin = query.origin;
  }
  if(query.subCategoria !== undefined && Array.isArray(query.subCategoria)){
    obj.subCategoria = {$in: query.subCategoria};
    obj.use = {$in: query.use};
  } else if(query.subCategoria !== undefined) {
    obj.subCategoria = query.subCategoria ,
    obj.use = query.use
  }
  if(query.tipoPrenda !== undefined && Array.isArray(query.tipoPrenda)){
    obj.tipoPrenda = {$in: query.tipoPrenda};
  } else if(query.tipoPrenda !== undefined) {
    obj.tipoPrenda = query.tipoPrenda;
  }
  if(query.categoria !== undefined && Array.isArray(query.categoria)){
      obj.$or = [{'categoria' : {$in: query.categoria} },
        {'gender' : {$in: query.gender}} ]
    } else if(query.categoria !== undefined) {
      obj.$or = [{'gender' : query.gender},  
        {'categoria' : query.categoria}]
  }
  
  
  if(query.color !== undefined && Array.isArray(query.color)){
      obj.color = {$in: query.color};
  } else if(query.color !== undefined) {
      obj.color = query.color;
  }

  if(query.quarter !== undefined && Array.isArray(query.quarter)){
    obj.quarter = {$in: query.quarter};
  } else if(query.quarter !== undefined) {
      obj.quarter = query.quarter;
  }
  


  return obj;
}

/*
 * Filtrar imágenes, desde inicio
 */
exports.getImagesFilter = async (request, response) => {
  const { query } = request;
  console.log(query);

  const q = {};
  const queryArray = [];

  // let filtro = queryStructure(query);
  // console.log(filtro);

  if (query.year !== undefined) {
    q.year = query.year;

    if (typeof query.year !== "object") {
      const queryDB = {
        year: {
          $in: [query.year],
        },
      };
      queryArray.push(queryDB);
    } else {
      const queryDB = {
        year: {
          $in : query.year
        }
        
      };
      queryArray.push(queryDB);
    }
  }

  if (query.quarter !== undefined) {
    q.quarter = query.quarter;

    if (typeof query.quarter !== "object") {
      const queryDB = {
        quarter: {
          $in: [query.quarter],
        },
      };
      queryArray.push(queryDB);
    } else {
      const queryDB = {
        quarter: {
          $in: query.quarter,
        },
      };
      queryArray.push(queryDB);
    }
  }

  if (query.gender !== undefined) {
    if (typeof query.gender !== "object") {
      const queryDB = {
        gender: {
          $in: [query.gender],
        },
      };
      queryArray.push(queryDB);
      const queryDB2 = {
        categoria: {
          $in: [query.categoria],
        },
      };
      queryArray.push(queryDB2);
    } else {
      const queryDB = {
        gender: {
          $in: query.gender,
        },
      };
      queryArray.push(queryDB);
      const queryDB2 = {
        categoria: {
          $in: query.categoria,
        },
      };
      queryArray.push(queryDB2);
    }
  }

  if (query.use !== undefined) {
    if (typeof query.use !== "object") {
      const queryDB = {
        use: {
          $in: [query.use],
        },
      };
      queryArray.push(queryDB);
      const queryDB2 = {
        subCategoria: {
          $in: [query.subCategoria],
        },
      };
      queryArray.push(queryDB2);
    } else {
      const queryDB = {
        use: {
          $in: query.use,
        },
      };
      queryArray.push(queryDB);
      const queryDB2 = {
        subCategoria: {
          $in: query.subCategoria,
        },
      };
      queryArray.push(queryDB2);
    }
  }

  if (query.origin !== undefined) {
    if (typeof query.origin !== "object") {
      const queryDB = {
        origin: {
          $in: [query.origin],
        },
      };
      queryArray.push(queryDB);
    } else {
      const queryDB = {
        origin: {
          $in: query.origin,
        },
      };
      queryArray.push(queryDB);
    }
  }

  if (query.feature !== undefined) {
    
    if (typeof query.feature !== "object") {
      const queryDB = {
        prendasGenerales: {
          $in: [query.feature],
        }
      };
      queryArray.push(queryDB);
      const queryDB2 = {
        tipoPrenda: {
          $in: [query.tipoPrenda],
        }
      };
      queryArray.push(queryDB2);

    } else {
      const queryDB = {
        prendasGenerales: {
          $in: query.feature,
        }
      };
      queryArray.push(queryDB);
      const queryDB2 = {
        tipoPrenda: {
          $in: query.tipoPrenda,
        }
      };
      queryArray.push(queryDB2);

    }
  } 

  if (query.color !== undefined) {
    if (typeof query.color !== "object") {
      if (query.color.charAt(0) === "#") {
        const queryDB = {
          hexColors: {
            $in: [query.color],
          },
        };
        queryArray.push(queryDB);
        const queryDB2 = {
          color: {
            $in: [query.color2],
          },
        };
        queryArray.push(queryDB2);
      } else {
        const queryDB = {
          principalColors: {
            $in: [query.color],
          },
        };
        queryArray.push(queryDB);
        const queryDB2 = {
          color: {
            $in: [query.color2],
          },
        };
        queryArray.push(queryDB2);
      }
    } else {
      const queryDB = {
        hexColors: {
          $in: query.color,
        },
      };
      queryArray.push(queryDB);
      const queryDB2 = {
        color: {
          $in: query.color2,
        },
      };
      queryArray.push(queryDB2);
    }
  }

  if (query.user !== undefined) {
    if (typeof query.user !== "object") {
      const queryDB = {
        usuario: {
          $elemMatch: {
            $or: [
              {
                username: query.user,
              },
            ],
          },
        },
      };
      queryArray.push(queryDB);
    } else {
      const queryDB = {
        usuario: {
          $elemMatch: {
            $or: [
              {
                username: query.user,
              },
            ],
          },
        },
      };
      queryArray.push(queryDB);
    }
  }

  // console.log(queryArray);
  // testiar la estructura del filtro final

  if (queryArray.length > 0) {
    let consulta = await Business.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "usuario",
        },
      },
      {
        $match: {
          $or: queryArray
        }
      },
    ]).limit(10000);

    // $or: queryArray,  esta en el match forma anterior
    consulta = consulta.filter((element) => {
      if (element.discontinued === false || element.discontinued === undefined)
        return element;
    })

    response.send(consulta);
  } else {
    /**
     * * Si desmarca todos los filtros, se consulta todas la imágenes nuevamente
     */
    console.log("Mostrar todas las imágenes");
    const consulta = await Business.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "usuario",
        },
      },
      {
        $match: {
          $or:[{discontinued:false},{discontinued:undefined} ]
        },
      },
    ]).sort({
      _id: -1,
    }).limit(10000);
    response.send(consulta);
  }
};

/*
 * Función para almacenar imágenes
 */

const saveImagesDB = async (data) => {
  console.log("Almacenando imagen en DB...");

  // let blobName = getBlobName(data.imageName);
  let blobName = data.imageName
  const base64 = data.base_64;

  const buffer = Buffer.from(base64, "base64");

  const stream = getStream(buffer);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  // Pasar a minusculas todas las prendas generales
  const prendaGenLower = [];
  data.prendasGenerales.forEach((prenda) => {
    prendaGenLower.push(prenda.toLowerCase());
  });

  const prendaColorLower = [];
  let prendaColor = {};
  data.prendaColor.forEach((prenda) => {
    const colorLower = prenda.ppal.toLowerCase();
    const prendaLower = prenda.prenda.toLowerCase();

    prendaColor = {
      ppal: colorLower,
      prenda: prendaLower,
    };

    prendaColorLower.push(prendaColor);
    for (let j = 0; j < prendaColorLower.length; j++) {
      prendaColor.hexaColor = data.hexColors[j];
      prendaColor.pantoneColor = data.pantoneColors[j];
    }
  });

  const colorPpalLower = [];
  data.principalColors.forEach((color) => {
    colorPpalLower.push(color.toLowerCase());
  });

  const colores = [];
  data.colores.forEach((color) => {
    const ppalColor = color.ppal.toLowerCase();
    const arrayNew = {
      ppal: ppalColor,
      hexa: color.hexa,
    };

    colores.push(arrayNew);
  });

  try {
    await blockBlobClient.uploadStream(
      stream,
      uploadOptions.bufferSize,
      uploadOptions.maxBuffers,
      { blobHTTPHeaders: { blobContentType: "image/jpeg" } }
    );

    let blobImage = containerClient.getBlobClient(blobName);

    let url = blobImage.url;

    const imageData = {
      imageName: blobName,
      prendasGenerales: prendaGenLower,
      hexColors: data.hexColors,
      principalColors: colorPpalLower,
      pantoneColors: data.pantoneColors,
      colores,
      prendaColor: prendaColorLower,
      base64: url,
      year: data.year,
      gender: data.gender,
      origin: data.origin,
      quarter: data.quarter,
      use: data.use,
      user: data.user,
      categoria: data.categoria,
      nombre: data.nombre,
      precio: data.precio,
      caracteristicas: data.caracteristicas
    };

    await Business.create(imageData, (err) => {
      if (err && err.code === 11000) {
        console.log("Imagen ya existe");
      } else {
        console.log("Imagen guardada en bd");
      }
    });
  } catch (error) {
    res.status(502);
  }
};

/*
 * Función para almacenar los features en la base de datos
 */

const updateImagesDB = async (data) => {
  const imageName = {
    imageName: data.imageName,
  };

  // Pasar a minusculas las features

  const featureToLower = [];

  data.features.forEach((feature) => {
    featureToLower.push(feature.toLowerCase());
  });

  // Filtrar features repetidas
  // eslint-disable-next-line no-inner-declarations
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const featureUnique = featureToLower.filter(onlyUnique);

  const updateFeature = {
    $set: {
      features: featureUnique,
    },
  };

  await Business.findOneAndUpdate(imageName, updateFeature, (err) => {
    if (err) {
      console.log("No se ha podido actualizar el documento");
    }
    console.log("Features actualizadas");
  });
};

/*
 * Función para almacenar las prendas inferiores en la base de datos
 */

const updateImagesInfDB = async (data) => {
  const imageName = {
    imageName: data.imageName,
  };

  const prendasInfLowerCase = [];
  data.prendasInferiores.forEach((prenda) => {
    prendasInfLowerCase.push(prenda.toLowerCase());
  });

  const updatePrendaInferior = {
    $set: {
      prendasInferiores: prendasInfLowerCase,
    },
  };

  await Business.findOneAndUpdate(imageName, updatePrendaInferior, (err) => {
    if (err) {
      console.log("No se ha actualizado el documento");
    }
    console.log("Prendas inferiores actualizadas");
  });
};

/*
 * Función para enviar imágenes al modelo superior
 */

const sendDataSup = (data) => {
  instance.get(process.env.MODELO_SUPERIOR).catch(() => {
    console.log('Superior')
  })

  const superior = {
    method: "post",
    url: process.env.MODELO_SUPERIOR,
    httpsAgent: agent,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  axios(superior)
    .then((responseSup) => {
      console.log("Datos enviados al modelo de prendas superiores");
      updateImagesDB(responseSup.data);
    })
    .catch((error) => {
      console.log("Error superior: ", error);
    });
};

/**
 ** Función para enviar imágenes al prendas inferiores
 */

const sendDataInf = (data) => {
  instance.get(process.env.MODELO_INFERIOR).catch(() => {
    console.log('Inferior')
  })

  const inferior = {
    method: "post",
    url: process.env.MODELO_INFERIOR,
    httpsAgent: agent,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  axios(inferior).then((responseInf) => {
    updateImagesInfDB(responseInf.data);
  });
};

/*
 * Función para enviar imágenes al modelo general
 */

exports.sendImgsModel = (req, res) => {
  const data = req.body;
  // console.log(data.imageName + 
  //   'probando desde zaractol');

  instance.get(process.env.MODELO_GENERAL).catch(() => {
    console.log('General')
  })

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const general = {
    method: "post",
    url: process.env.MODELO_GENERAL,
    httpsAgent: agent,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  axios(general)
    .then((response) => {
      const respuesta = response.data;

      console.log("Datos enviados al modelo de prendas generales");
      sendDataSup(data);
      saveImagesDB(respuesta);

      if (
        data.gender === "hjovenes" ||
        data.gender === "hjunior" ||
        data.gender === "hniños" ||
        data.gender === "huniversitarios"
      ) {
        console.log("Datos enviados al modelo de prendas inferiores");
        sendDataInf(data);
      }

      res.send({
        status: 200,
        msg: "Imagénes enviadas al modelo",
      });
    })
    .catch((error) => {
      return res.status(500).send("Ha ocurrido un error en el módelo");
    });
};

/**
 ** Filtro por texto
 */
exports.filterText = async (req, res) => {
  console.log("Filtro texto");
  const { text } = req.body;
  const arrayText = text.split(" ");

  const arrayTextLower = [];
  arrayText.forEach((item) => {
    const textLowerCase = item.toLowerCase();

    arrayTextLower.push(textLowerCase);
  });

  let textoFiltro = await filterText.filterByUser(arrayTextLower);

  return res.status(200).send(textoFiltro);
};
