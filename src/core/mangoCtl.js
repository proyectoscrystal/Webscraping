const menCategory = require('./Mango/menCategory');
const menDiscount = require('./Mango/menDiscounts');
const menNew = require('./Mango/menNew');
const womanCategory = require('./Mango/womanCategory');
const womanDiscounts = require('./Mango/womanDiscounts');
const womanNew = require('./Mango/womanNew');
const imageToBase64 = require("image-to-base64");
const axios = require('axios');
const https = require("https");
const saveImage = require("./scrapingSaveDB");

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

exports.getScrapingMango = async (req, res) => {
  res.json({mensaje: "scraping completo de Mango"});
  await menCategory.menCategory();
  await menDiscount.menDiscount();
  await menNew.menNew();
  await womanCategory.womanCategory();
  await womanDiscounts.womanDiscount();
  await womanNew.womanNew();
}

exports.getMenCategory = (req, res) => {
    res.json({mensaje: "conectando desde mangoMenCategory"});
    menCategory.menCategory();
} 

exports.getMenDiscount = (req, res) => {
    res.json({mensaje: "conectando desde mangoMenDiscount"});
    menDiscount.menDiscount();
}

exports.getMenNew = (req, res) => {
  res.json({mensaje: "conectado desde mango new men"});
  menNew.menNew();
}

exports.getWomanCategory = (req, res) => {
  res.json({mensaje: "conectado desde mango woman category"});
  womanCategory.womanCategory();
}

exports.getWomanDiscount = (req, res) => {
  res.json({mensaje: "conectado desde mango woman discount"});
  womanDiscounts.womanDiscount();
}

exports.getWomanNew = (req, res) => {
  res.json({mensaje: "conectado desde mango woman new"});
  womanNew.womanNew();
}



// catching data from scraping

exports.getscraping = async (arreglo) => {
    // console.log(arreglo);
    // se formatean los datos descuento, tallas y precio, para llevarlos a la db
    for (let i = 0; i < arreglo.length; i++) {
      let { precio, enlaceImagen, descuento, talla, tag } = arreglo[i];

       // obtener el estado
    let estado = saveImage.getState(tag, descuento);
    console.log(estado);

      precio = parseInt(precio.substring(1).split(".").join(""), 10);
      if (descuento !== "") {
        descuento = parseInt(descuento.substring(1).split(".").join(""), 10);
      }

      // se extrae el numero de tallas 
      const numeroTallas = talla.length;
      console.log(numeroTallas);

     


      // se genera el base64 de la imagen que se obtiene de la url
      let base64 = await imageToBase64(enlaceImagen)
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
        use: 'Exterior',
        origin: 'Mango',
        base64,
        action: 'prendas',
        user: "612d470390cb5641a0311cf3",
        numeroTallas,
      };

      sendImgsModel(newObject);

    }
  };
  // end catching data from scraping


  // metodo para calcular el año actual
  let year = () => {
    let date = new Date();
    let Year = date.getFullYear();
    return Year;
  };
  
  // funcion para determinar el Quarter
  let quarter = () => {
    var date = new Date();
    var month = date.getMonth() + 1;
    if(month >= 3 && month <= 6){
      return 'Q1';
    } else if(month >= 7 && month <= 9){
      return 'Q2';
    } else if(month >= 10 && month <= 12){
      return 'Q3';
    } else if(month >= 1 && month <= 2){
      return 'Q4';
    }
  
  };


  // envio de la informacion obtenida del scraping para el modelo cognitivo
  let sendImgsModel = (data) => {
  
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
        // se anexan los campos que el modelo no enviaba 
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
        console.log(error);
      });
  };
  
  
  