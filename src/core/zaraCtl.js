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
const Business = require("../domain/model/businessDao");

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
  let arregloMaster = [];

  // se formatean los datos descuento y precio, para llevarlos a la db
  for (let i = 0; i < arreglo.length; i++) {
    let { precio, enlaceImagen, descuento, talla, tag, tipoPrenda, color, tallasAgotadas, materiales } = arreglo[i];

    let discontinued = false;


    let material1 = "";
    let material2 = "";
    let material3 = "";
    let material4 = "";
    let material5 = "";
    let material6 = "";
    let material7 = "";
    let porcentaje1 = "";
    let porcentaje2 = "";
    let porcentaje3 = "";
    let porcentaje4 = "";
    let porcentaje5 = "";
    let porcentaje6 = "";
    let porcentaje7 = "";

    // procesamiento del campo materiales

    materiales = estraerMateriales(materiales);

    for(var j = 0; j < materiales.length; j++) {
      switch(j) {
      case 0: 
       porcentaje1 = materiales[j].split(" ")[0];
        material1 = materiales[j].split(" ")[1];
        
        break;
      case 1: 
       porcentaje2 = materiales[j].split(" ")[0];
        material2 = materiales[j].split(" ")[1];
       
        break;
      case 2: 
       porcentaje3 = materiales[j].split(" ")[0];
        material3 = materiales[j].split(" ")[1];
       
        break
      case 3: 
       porcentaje4 = materiales[j].split(" ")[0];
        material4 = materiales[j].split(" ")[1];
       
        break
      case 4: 
       porcentaje5 = materiales[j].split(" ")[0];
        material5 = materiales[j].split(" ")[1];
       
        break
      case 5: 
       porcentaje6 = materiales[j].split(" ")[0];
        material6 = materiales[j].split(" ")[1];
       
        break
      case 6: 
       porcentaje7 = materiales[j].split(" ")[0];
        material7 = materiales[j].split(" ")[1];
        
        break
      default: 
        break
        
      }
    }
    // fin de implementacion de materiales


    // implementacion tallas agotadas zaractol
    if (tallasAgotadas.length !== 0) {
      let tallasAgotadasAux = [];
      tallasAgotadas.forEach(element => {
          tallasAgotadasAux.push(element.split(' ')[0])
      });

      tallasAgotadas = tallasAgotadasAux;

      talla = tallasSinAgotados(talla, tallasAgotadas);
    }

    tipoPrenda = tipoPrenda.trim();
    tipoPrenda = saveImage.homologarTipoPrenda(tipoPrenda);


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
    let estado = '';
    estado = saveImage.getState(tag, descuento);
    // console.log(estado);

    precio = parseInt(precio.split(" ")[0].split(".").join(""), 10);
    if (descuento !== "") {
      descuento = parseInt(descuento.split(" ")[0].split(".").join(""), 10);
    }

    // se extrae el numero de tallas
    let numeroTallas = talla.length;
    if(tallasAgotadas.length !== 0) numeroTallas += tallasAgotadas.length;
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
      tallasAgotadas,
      material1,
      material2,
      material3,
      material4,
      material5,
      material6,
      material7,
      porcentaje1,
      porcentaje2,
      porcentaje3,
      porcentaje4,
      porcentaje5,
      porcentaje6,
      porcentaje7,
      discontinued
    };
    
    arregloMaster.push(newObject);
    
    await saveImage.saveImagesDB(newObject);
    
    // TODO: recordar cambiar apenas el scraping se realice para verificar los descontinuados
    // sendImgsModel(newObject);
  }

  console.log(arregloMaster.length);
  await descontinuados(arregloMaster);


  
};

let tallasSinAgotados = (talla, tallasAgotadas) => {
  for(var i=0;i<talla.length;i++)
  {
    for(var j=0;j<talla.length;j++)
    {
      if(talla[i]==tallasAgotadas[j])
        talla.splice(i,1);
    }
  }

  return talla;
}

let estraerMateriales = (materiales) => {
  materiales = materiales.split("·");
    for(i = 0; i < materiales.length; i ++) {
      materiales[i] = materiales[i].trim();
    }

  return materiales;
}

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
    if (tipoPrenda === verificarSub.tipoPrendaHomologada[index]) {
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

let descontinuados = async arreglo => {
  let inBD = await Business.find({"estado":arreglo[0].estado, "categoria": arreglo[0].categoria, "origin": arreglo[0].origin}).distinct("enlaceImagen");

  // console.log(inBD);

  inBD.forEach( async element => {

    let registros = await Business.find({"enlaceImagen":element});

    if(registros.length === 1 && !registros[0].discontinued) {

      await compareDBToScraper(registros[0],arreglo);
    } else {
      let registroReciente = registros.sort((a,b) =>  new Date(b.createdAt) - new Date(a.createdAt))[0];
      if(!registroReciente.discontinued) await compareDBToScraper(registroReciente,arreglo);      
    }

  })

}

let compareDBToScraper = async (elementDB, dataScraper) => {
  let found = dataScraper.some(element => element.enlaceImagen === elementDB.enlaceImagen);

  if(found) {
    // console.log(`El elemento ${elementDB.enlaceImagen} existe en el scraper`);
    return;
  };

  // console.log(`Descontinuando el documento ${elementDB.enlaceImagen} en la bd`);

  // actualizar el campo de discontinued a true y actualizamos el elementDB en la DB
  // console.log(elementDB);
  elementDB.discontinued = true;
  let updated = await Business.findOneAndUpdate({_id: elementDB._id}, elementDB,{
    new: true
  });

  // console.log(updated);

  // actualizamos el campo estado de elementDB a descontinuado, y creamos un nuevo objeto
  // console.log("creando elemento descontinuado");
  elementDB.estado = 'descontinuado';
  delete elementDB._id;
  delete elementDB.createdAt;
  delete elementDB.updatedAt;
  delete elementDB.fecha_consulta; 

  let newObject = {

    precio: elementDB.precio,
    descuento: elementDB.descuento,
    year: elementDB.year,
    quarter: elementDB.quarter,
    use: elementDB.use,
    origin: elementDB.origin,
    base64: elementDB.base64,
    action: elementDB.action,
    user: elementDB.user,
    numeroTallas: elementDB.numeroTallas,
    estado: elementDB.estado,
    tipoPrenda: elementDB.tipoPrenda,
    subCategoria: elementDB.subCategoria,
    color: elementDB.color,
    talla: elementDB.talla,
    tallasAgotadas: elementDB.tallasAgotadas,
    material1: elementDB.material1,
    material2: elementDB.material2,
    material3: elementDB.material3,
    material4: elementDB.material4,
    material5: elementDB.material5,
    material6: elementDB.material6,
    material7: elementDB.material7,
    porcentaje1: elementDB.porcentaje1,
    porcentaje2: elementDB.porcentaje2,
    porcentaje3: elementDB.porcentaje3,
    porcentaje4: elementDB.porcentaje4,
    porcentaje5: elementDB.porcentaje5,
    porcentaje6: elementDB.porcentaje6,
    porcentaje7: elementDB.porcentaje7,
    discontinued: elementDB.discontinued,
  };

  await Business.create(newObject, (err) => {
    if (err && err.code === 11000) {
      console.log("Imagen ya existe");
    } else {
      console.log("Imagen guardada en bd");
    }
  });

  
}

// let sendImgsModel = async (data) => {
//   // console.log(data.imageName +
//   // 'probando desde zaractol');
//   saveImage.saveImagesDB(data);

 
// };
