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
      console.log("Features actualizadas");
    });
  };

  // save images
exports.saveImagesDB = async (data) => {
    // console.log('from saveImagesDB' );
    // console.log(data);
    // console.log("Almacenando imagen en DB...");
  
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
  
      const imageData = {
        imageName: data.imageName,
        prendasGenerales: prendaGenLower,
        hexColors: data.hexColors,
        principalColors: colorPpalLower,
        pantoneColors: data.pantoneColors,
        colores,
        prendaColor: prendaColorLower,
        base64: `data:image/jpeg;base64,${data.base_64}`,
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
        caracteristicas: data.caracteristicas
      };
    //   console.log('desde imageData');
    //   console.log(imageData);
  
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


  exports.sendDataSup = (data) => {
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