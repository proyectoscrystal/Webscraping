const categoriaHombre = require("./Zara/menCategory");
const manDiscount = require("./Zara/manDiscount");
const NewMan = require("./Zara/newMan");
const womanDiscount = require("./Zara/womanDiscount");
const womanCategory = require("./Zara/womanCategory");
const newWoman = require("./Zara/newWoman");
const imageToBase64 = require("image-to-base64");
const axios = require("axios");
const https = require("https");
const saveImage = require("./scrapingSaveDB");

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

exports.getScraping = async (req, res) => {
  res.json({ mensaje: "se esta ejecutando scrapingCompleteWoman" });
  await categoriaHombre.categoriaHombre();
  await manDiscount.manDiscount();
  await NewMan.newMan();
  await womanCategory.womanCategory();
  await newWoman.newWoman();
  await womanDiscount.descuentoMujer();
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
  res.json({ mensaje: "se esta ejecutando" });
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

exports.getscraping = async (arreglo) => {
  // console.log(arreglo);

  // se formatean los datos descuento y precio, para llevarlos a la db
  for (let i = 0; i < arreglo.length; i++) {
    let { precio, enlaceImagen, descuento, talla, tag } = arreglo[i];

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

let sendImgsModel = (data) => {
  // console.log(data.imageName +
  // 'probando desde zaractol');

  instance.get(process.env.MODELO_GENERAL).catch(() => {
    console.log("General");
  });

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
      // console.log('desde response.data');
      // console.log(respuesta);
      respuesta.precio = data.precio;
      respuesta.descuento = data.descuento;
      respuesta.caracteristicas = data.caracteristicas;
      respuesta.categoria = data.categoria;
      respuesta.tag = data.tag;
      respuesta.numeroTallas = data.numeroTallas;
      respuesta.enlaceImagen = data.enlaceImagen;
      respuesta.talla = data.talla;
      respuesta.materiales = data.materiales;
      respuesta.color = data.color;
      respuesta.estado = data.estado;

      // console.log("Datos enviados al modelo de prendas generales");
      saveImage.sendDataSup(data);
      saveImage.saveImagesDB(respuesta);

      if (
        data.gender === "hjovenes" ||
        data.gender === "hjunior" ||
        data.gender === "hniños" ||
        data.gender === "huniversitarios"
      ) {
        // console.log("Datos enviados al modelo de prendas inferiores");
        sendDataInf(data);
      }
    })
    .catch((error) => {
      console.log('error en el sendImageModel ZaraCtl');
    });
};
