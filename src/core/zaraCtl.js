const categoriaHombre = require("./Zara/menCategory");
const manDiscount = require("./Zara/manDiscount");
const NewMan = require("./Zara/newMan");
const descuentoMujer = require("./Zara/descuentoMujer");
const womanCategory = require("./Zara/womanCategory");
const newWoman = require("./Zara/newWoman");
const Business = require("../domain/model/businessDao");
const imageToBase64 = require("image-to-base64");
// const business = require("./business");

exports.getScraping = async (req, res) => {
  res.json({ mensaje: "se esta ejecutando scrapingCompleteWoman" });
  await categoriaHombre.categoriaHombre();
  await manDiscount.manDiscount();
  await NewMan.newMan();
  await womanCategory.womanCategory();
  await newWoman.newWoman();
  await descuentoMujer.descuentoMujer();
};

exports.getCategoriaHombre = (req, res) => {
  res.json({ mensaje: "se esta ejecutando" });
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
  descuentoMujer.descuentoMujer();
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
  for (let i = 0; i < arreglo.length; i++) {
    let { precio, enlaceImagen, descuento } = arreglo[i];
    precio = parseInt(precio.split(" ")[0].split(".").join(""), 10);
    if (descuento !== "") {
      descuento = parseInt(descuento.split(" ")[0].split(".").join(""), 10);
    }

    // console.log(getImageToBase64(enlaceImagen));

    let base64 = await imageToBase64(enlaceImagen)
      .then((response) => {
        return `data:image/jpeg;base64,${response}`;
      })
      .catch((error) => {
        console.log(error);
      });

    let newObject = {
      ...arreglo[i],
      imageName: enlaceImagen,
      precio,
      descuento,
      year: year(),
      quarter: quarter(),
      use: 'exterior',
      origin: 'Zara',
      base64,
      action: 'prendas',
    };

    // business.sendImgsModel(newObject);

    await Business.create(newObject, (err) => {
      if (err && err.code === 11000) {
        console.log("Imagen ya existe");
      } else {
        console.log("Imagen guardada en bd");
      }
    });
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
