const categoriaHombre = require("./Zara/menCategory");
const manDiscount = require("./Zara/manDiscount");
const NewMan = require("./Zara/newMan");
const womanDiscount = require("./Zara/womanDiscount");
const womanCategory = require("./Zara/womanCategory");
const newWoman = require("./Zara/newWoman");
const babyBoyCategory = require("./Zara/zaraKids/babyBoy/babyBoyCategory");
const babyBoyDiscount = require("./Zara/zaraKids/babyBoy/babyBoyDiscount");
const babyBoyNew = require("./Zara/zaraKids/babyBoy/babyBoyNew");
const babyGirlCategory = require("./Zara/zaraKids/babyGirl/babyGirlCategory");
const babyGirlDiscount = require("./Zara/zaraKids/babyGirl/babyGirlDiscount");
const babyGirlNew = require("./Zara/zaraKids/babyGirl/babyGirlNew");
const boyCategory = require("./Zara/zaraKids/boy/boyCategory");
const boyDiscount = require("./Zara/zaraKids/boy/boyDiscount");
const boyNew = require("./Zara/zaraKids/boy/boyNew");
const girlCategory = require("./Zara/zaraKids/girl/girlCategory");
const girlDiscount = require("./Zara/zaraKids/girl/girlDiscount");
const girlNew = require("./Zara/zaraKids/girl/girlNew");
const miniKids = require("./Zara/zaraKids/miniKids");
const miniKidsNew = require("./Zara/zaraKids/miniKidsNew");

// arreglo con las subcategorias

const verificarSub = require("../utils/index");

const imageToBase64 = require("image-to-base64");
const axios = require("axios");
const https = require("https");
const saveImage = require("./scrapingSaveDB");

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

exports.getScrapingZara = async (req, res) => {
  await categoriaHombre.categoriaHombre();
  await manDiscount.manDiscount();
  await NewMan.newMan();
  await womanCategory.womanCategory();
  await newWoman.newWoman();
  await womanDiscount.descuentoMujer();
  await babyBoyNew.babyBoyNew();
  await babyBoyCategory.babyBoyCategory();
  await babyBoyDiscount.babyBoyDiscount();
  await babyGirlCategory.babyGirlCategory();
  await babyGirlDiscount.babyGirlDiscount();
  await babyGirlNew.babyGirlNew();
  await boyCategory.boyCategory();
  await boyDiscount.boyDiscount();  
  await boyNew.boyNew();
  await girlCategory.girlCategory();
  await girlDiscount.girlDiscount();
  await girlNew.girlNew();
  await miniKidsNew.miniKidsNew(); 
  await miniKids.miniKids();
};

exports.getCategoriaHombre = (req, res) => {
  res.json({ mensaje: "se esta ejecutando hombre categoria" });
  categoriaHombre.categoriaHombre();
};

exports.getManDiscount = (req, res) => {
  res.json({ mensaje: "se esta ejecutando descuento hombre" });
  manDiscount.manDiscount();
};

exports.getNewMan = (req, res) => {
  res.json({ mensaje: "se esta ejecutando cat nuevo hombre" });
  NewMan.newMan();
};

exports.getDescuentoMujer = (req, res) => {
  res.json({ mensaje: "se esta ejecutando womanDiscount" });
  womanDiscount.descuentoMujer();
};

exports.getWomanCategory = (req, res) => {
  res.json({ mensaje: "se esta ejecutando womanCategory" });
  womanCategory.womanCategory();
};

exports.getNewWoman = (req, res) => {
  res.json({ mensaje: "se esta ejecutando newWoman" });
  newWoman.newWoman();
};

// metodos para el scraping kid
exports.getBabyBoyCategory = (req, res) => {
  res.json({mensaje: "se esta ejecutando BabyBoyCategory"});
  babyBoyCategory.babyBoyCategory();
  
};

exports.getBabyBoyDiscount = (req, res) => {
  res.json({mensaje: "se esta ejecutando BabyBoyDiscount"});
  babyBoyDiscount.babyBoyDiscount();
  
};

exports.getBabyBoyNew = (req, res) => {
  res.json({mensaje: "se esta ejecutando BabyBoyNew"});
  babyBoyNew.babyBoyNew();
  
};

exports.getBabyGirlCategory = (req, res) => {
  res.json({mensaje: "se esta ejecutando BabyGirlCategory"});
  babyGirlCategory.babyGirlCategory();  
};

exports.getBabyGirlDiscount = (req, res) => {
  res.json({mensaje: "se esta ejecutando BabyGirlDiscount"});
  babyGirlDiscount.babyGirlDiscount();  
};

exports.getBabyGirlNew = (req, res) => {
  res.json({mensaje: "se esta ejecutando BabyGirlNew"});
  babyGirlNew.babyGirlNew();  
};

exports.getBoyCategory = (req, res) => {
  res.json({mensaje: "se esta ejecutando BoyCategory"});
  boyCategory.boyCategory();
};

exports.getBoyDiscount = (req, res) => {
  res.json({mensaje: "se esta ejecutando boyDiscount"});
  boyDiscount.boyDiscount();
};

exports.getBoyNew = (req, res) => {
  res.json({mensaje: "se esta ejecutando boyNew"});
  boyNew.boyNew(); 
};

exports.getGirlCategory = (req, res) => {
  res.json({mensaje: "se esta ejecutando GirlCategory"});
  girlCategory.girlCategory(); 
};

exports.getGirlDiscount = (req, res) => {
  res.json({mensaje: "se esta ejecutando GirlDiscount"});
  girlDiscount.girlDiscount(); 
};

exports.getGirlNew = (req, res) => {
  res.json({mensaje: "se esta ejecutando GirlNew"});
  girlNew.girlNew(); 
};

exports.getMiniKidsNew = (req, res) => {
  res.json({mensaje: "se esta ejecutando miniKidsNews"});
  miniKidsNew.miniKidsNew(); 
};

exports.getMiniKids = (req, res) => {
  res.json({mensaje: "se esta ejecutando GirlNew"});
  miniKids.miniKids();
};



// metodo para procesar y guardar la info del scraping 
exports.getscraping = async (arreglo) => {
  // console.log(arreglo);

  // se formatean los datos descuento y precio, para llevarlos a la db
  for (let i = 0; i < arreglo.length; i++) {
    let { precio, enlaceImagen, descuento, talla, tag, tipoPrenda, color } = arreglo[i];

    // esperar validacion de parte de camilo, saber si se puede implementar en zara
    let tallasAux = [];
      let tallasAgotadas = [];
      talla.forEach(element => {
        if (element.length > 3) {
          tallasAgotadas.push(element.split(' ')[0])
        } else {
          tallasAux.push(element)
        }        
      });
      talla = tallasAux;

    let subCategoria = '';
    if(arreglo[i].tipoPrenda === undefined) {
      return ; 
    } else {
      // convertir en minusculas
      tipoPrenda = tipoPrenda.trim().toLowerCase();

      
      subCategoria = setSubCategory(tipoPrenda);
      // fin funcion para setear subCategoria
    }

    // funcion para homologar el color
    color = setColor(color);

    // obtener el estado
    let estado = saveImage.getState(tag, descuento);
    // console.log(estado);

    precio = parseInt(precio.split(" ")[0].split(".").join(""), 10);
    if (descuento !== "") {
      descuento = parseInt(descuento.split(" ")[0].split(".").join(""), 10);
    }

    // se extrae el numero de tallas
    const numeroTallas = talla.length;
    // console.log(numeroTallas);

    

    // se genera el base64 de la imagen que se obtiene de la url
    let base64F = await imageToBase64(enlaceImagen)
      .then((response) => {
        // return `data:image/jpeg;base64,${response}`;
        return response;
      })
      .catch((error) => {
        console.log(error);
      });

    let newObject = {
      ...arreglo[i],
      precio,
      descuento,
      year: year(),
      quarter: quarter(),
      use: "Exterior",
      origin: "Zara",
      base64: base64F,
      action: "prendas",
      user: "612d470390cb5641a0311cf3",
      numeroTallas,
      estado,
      tipoPrenda,
      subCategoria,
      color,
      talla,
      tallasAgotadas
    };

    sendImgsModel(newObject);
  }
};

let year = () => {
  let date = new Date();
  let Year = date.getFullYear();
  return Year;
};

let quarter = () => {
  var date = new Date();
  var month = date.getMonth() + 1;
  if (month >= 3 && month <= 6) {
    return "Q1";
  } else if (month >= 7 && month <= 9) {
    return "Q2";
  } else if (month >= 10 && month <= 12) {
    return "Q3";
  } else if (month >= 1 && month <= 2) {
    return "Q4";
  }
};

let setSubCategory = (tipoPrenda) => {
  for (let index = 0; index < verificarSub.subCategoria.length; index++) {
    // console.log(`sub: ${verificarSub.subCategoria[index]} - tipo: ${verificarSub.tipoPrenda[index]}`);
    if (tipoPrenda === verificarSub.tipoPrenda[index]) {
      return  verificarSub.subCategoria[index]
    }      
  }
  return tipoPrenda;
}

let setColor = (color) => {
  for (let index = 0; index < verificarSub.colorSinHomologar.length; index++) {
    // console.log(`sub: ${verificarSub.subCategoria[index]} - tipo: ${verificarSub.tipoPrenda[index]}`);

    if (color === verificarSub.colorSinHomologar[index]) {
      return  verificarSub.colorHomologado[index]
    }      
  }
  return color;
}

let sendImgsModel = async (data) => {
  // console.log(data.imageName +
  // 'probando desde zaractol');
  saveImage.saveImagesDB(data);

  // instance.get(process.env.MODELO_GENERAL).catch(() => {
  //   console.log("General");
  // });

  // saveImage.saveImagesDB(respuesta);

  // const agent = new https.Agent({
  //   rejectUnauthorized: false,
  // });

  // const general = {
  //   method: "post",
  //   url: process.env.MODELO_GENERAL,
  //   httpsAgent: agent,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data,
  // };

  // await axios(general)
  //   .then((response) => {
  //     const respuesta = response.data;
  //     // console.log('desde response.data');
  //     // console.log(respuesta);
  //     respuesta.precio = data.precio;
  //     respuesta.descuento = data.descuento;
  //     respuesta.caracteristicas = data.caracteristicas;
  //     respuesta.categoria = data.categoria;
  //     respuesta.tag = data.tag;
  //     respuesta.numeroTallas = data.numeroTallas;
  //     respuesta.enlaceImagen = data.enlaceImagen;
  //     respuesta.talla = data.talla;
  //     respuesta.materiales = data.materiales;
  //     respuesta.color = data.color;
  //     respuesta.estado = data.estado;
  //     respuesta.enlaceImagen = data.enlaceImagen;

  //     // console.log("Datos enviados al modelo de prendas generales");
  //     saveImage.sendDataSup(data);
  //     saveImage.saveImagesDB(respuesta);

  //     if (
  //       data.gender === "hjovenes" ||
  //       data.gender === "hjunior" ||
  //       data.gender === "hniños" ||
  //       data.gender === "huniversitarios"
  //     ) {
  //       // console.log("Datos enviados al modelo de prendas inferiores");
  //       sendDataInf(data);
  //     }
  //   })
  //   .catch((error) => {
  //     console.log('error en el sendImageModel ZaraCtl');
  //   });
};
