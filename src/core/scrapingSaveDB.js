const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline,
} = require("@azure/storage-blob");

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


const axios = require("axios");
const https = require("https");
const Business = require("../domain/model/businessDao");

const instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });


let updateImagesDB = async (data) => {
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
      // console.log("Features actualizadas");
    });
  };

  // save images
exports.saveImagesDB = async (data) => {
    // console.log('from saveImagesDB' );
    // console.log(data);
    // console.log("Almacenando imagen en DB...");

    // trasformar la base 64 en buffer

    let blobName = data.imageName
    const base64 = data.base64; // con el modelo es base_64
  
    const buffer = Buffer.from(base64, "base64");
  
    const stream = getStream(buffer);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  
    // fin trasformar la base 64 en buffer 
  
    // Pasar a minusculas todas las prendas generales
    // const prendaGenLower = [];
    // data.prendasGenerales.forEach((prenda) => {
    //   prendaGenLower.push(prenda.toLowerCase());
    // });
  
    // const prendaColorLower = [];
    // let prendaColor = {};
    // data.prendaColor.forEach((prenda) => {
    //   const colorLower = prenda.ppal.toLowerCase();
    //   const prendaLower = prenda.prenda.toLowerCase();
  
    //   prendaColor = {
    //     ppal: colorLower,
    //     prenda: prendaLower,
    //   };
  
    //   prendaColorLower.push(prendaColor);
    //   for (let j = 0; j < prendaColorLower.length; j++) {
    //     prendaColor.hexaColor = data.hexColors[j];
    //     prendaColor.pantoneColor = data.pantoneColors[j];
    //   }
    // });
  
    // const colorPpalLower = [];
    // data.principalColors.forEach((color) => {
    //   colorPpalLower.push(color.toLowerCase());
    // });
  
    // const colores = [];
    // data.colores.forEach((color) => {
    //   const ppalColor = color.ppal.toLowerCase();
    //   const arrayNew = {
    //     ppal: ppalColor,
    //     hexa: color.hexa,
    //   };
  
    //   colores.push(arrayNew);
    // });
  
    try {
      // mandar el buffer al blogstorage

      await blockBlobClient.uploadStream(
        stream,
        uploadOptions.bufferSize,
        uploadOptions.maxBuffers,
        { blobHTTPHeaders: { blobContentType: "image/jpeg" } }
      );
  
      let blobImage = containerClient.getBlobClient(blobName);
  
      let url = blobImage.url;  
      

      // fin mandar el buffer al blogStorage
  
      const imageData = {
        imageName: data.imageName,
        // prendasGenerales: prendaGenLower,
        // hexColors: data.hexColors,
        // principalColors: colorPpalLower,
        // pantoneColors: data.pantoneColors,
        // colores,
        // prendaColor: prendaColorLower,
        base64: url,
        year: data.year,
        gender: data.gender,
        origin: data.origin,
        quarter: data.quarter,
        use: data.use,
        user: data.user,
        categoria: data.categoria,
        precio: data.precio,
        tag: data.tag,
        descuento: data.descuento,
        caracteristicas: data.caracteristicas,
        talla: data.talla,
        color: data.color,
        materiales: data.materiales,
        numeroTallas: data.numeroTallas,
        estado: data.estado,
        enlaceImagen: data.enlaceImagen,
        tipoPrenda: data.tipoPrenda,
      };
      // console.log(imageData);
  
      await Business.create(imageData, (err) => {
        if (err && err.code === 11000) {
          console.log("Imagen ya existe");
        } else {
          console.log("Imagen guardada en bd");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };


  exports.sendDataSup = async (data) => {
    instance.get(process.env.MODELO_SUPERIOR).catch(() => {
      // console.log('Superior')
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
  
    await axios(superior)
      .then((responseSup) => {
        // console.log("Datos enviados al modelo de prendas superiores");
        updateImagesDB(responseSup.data);
      })
      .catch((error) => {
        console.log("Error superior: ");
      });
  };


  exports.getState = (tag, descuento) => {
    if (tag === 'nuevo') {
      return state = tag;
    } else if (tag === '' && descuento === '') {
      return state = 'normal';
    } else {
      return state = 'promocion';
    }
  }