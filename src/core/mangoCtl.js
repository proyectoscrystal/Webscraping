const menCategory = require('./mango/menCategory');
const menDiscount = require('./mango/menDiscounts');
const menNew = require('./mango/menNew');
const womanCategory = require('./mango/womanCategory');
const womanDiscounts = require('./mango/womanDiscounts');
const womanNew = require('./mango/womanNew');
const babyBoyCategory = require('./mango/mangoKids/babyBoy/babyBoyCategory');
const babyBoyDiscount = require('./mango/mangoKids/babyBoy/babyBoyDiscount');
const babyBoyNew = require('./mango/mangoKids/babyBoy/babyBoyNew');
const boyCategory = require('./mango/mangoKids/boy/boyCategory');
const boyDiscount = require('./mango/mangoKids/boy/boyDiscount');
const boyNew = require('./mango/mangoKids/boy/boyNew');
const girlCategory = require('./mango/mangoKids/girl/girlCategory');
const girlDiscount = require('./mango/mangoKids/girl/girlDiscount');
const girlNew = require('./mango/mangoKids/girl/girlNew');
const babyGirlCategory = require('./mango/mangoKids/babyGirl/babyGirlCategory');
const babyGirlNew = require('./mango/mangoKids/babyGirl/babyGirlNew');
const miniKids = require('./mango/mangoKids/miniKids');
const miniKidsNew = require('./mango/mangoKids/miniKidsNew');
const imageToBase64 = require("image-to-base64");
const axios = require('axios');
const https = require("https");
const saveImage = require("./scrapingSaveDB");
const Business = require("../domain/model/businessDao");

// arreglo con las subcategorias
const verificarSub = require("../utils/index");

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

exports.getScrapingMango = async (req, res) => {
  await menNew.menNew();
  await menDiscount.menDiscount();
  await menCategory.menCategory();
  await womanNew.womanNew();
  await womanDiscounts.womanDiscount();
  await womanCategory.womanCategory();
  await babyBoyNew.babyBoyNew();
  await babyBoyDiscount.babyBoyDiscount();
  await babyBoyCategory.babyBoyCategory();
  await boyNew.boyNew();
  await boyDiscount.boyDiscount();
  await boyCategory.boyCategory();
  await girlNew.girlNew();
  await girlDiscount.girlDiscount();
  await girlCategory.girlCategory();
  await babyGirlNew.babyGirlNew();
  await babyGirlCategory.babyGirlCategory();
  await miniKids.miniKids();
  await miniKidsNew.miniKidsNew();
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

exports.getBabyBoyCategory = (req, res) => {
  res.json({mensaje: "conectado desde mango babyboycategory"});
  babyBoyCategory.babyBoyCategory();
}

exports.getBabyBoyDiscount = (req, res) => {
  res.json({mensaje: "conectado desde mango babyboy discount"});
  babyBoyDiscount.babyBoyDiscount();
}

exports.getBabyBoyNew = (req, res) => {
  res.json({mensaje: "conectado desde mango babyBoy new"});
  babyBoyNew.babyBoyNew();
}

exports.getBabyGirlCategory = (req, res) => {
  res.json({mensaje: "conectado desde mango babyGirlcategory"});
  babyGirlCategory.babyGirlCategory();
}

exports.getBabyGirlNew = (req, res) => {
  res.json({mensaje: "conectado desde mango babyGirl new"});
  babyGirlNew.babyGirlNew();
}

exports.getBoyCategory = (req, res) => {
  res.json({mensaje: "conectado desde mango boycategory"});
  boyCategory.boyCategory();
}

exports.getBoyDiscount = (req, res) => {
  res.json({mensaje: "conectado desde mango boy discount"});
  boyDiscount.boyDiscount();
}

exports.getBoyNew = (req, res) => {
  res.json({mensaje: "conectado desde mango Boy new"});
  boyNew.boyNew();
}

exports.getGirlCategory = (req, res) => {
  res.json({mensaje: "conectado desde mango girlcategory"});
  girlCategory.girlCategory();
}

exports.getGirlDiscount = (req, res) => {
  res.json({mensaje: "conectado desde mango girl discount"});
  girlDiscount.girlDiscount();
}

exports.getGirlNew = (req, res) => {
  res.json({mensaje: "conectado desde mango girl new"});
  girlNew.girlNew();
}

exports.getMiniKids = (req, res) => {
  res.json({mensaje: "conectado desde mango miniKids"});
  miniKids.miniKids();
}

exports.getMiniKidsNew = (req, res) => {
  res.json({mensaje: "conectado desde mango miniKids new"});
  miniKidsNew.miniKidsNew();
}



// catching data from scraping

exports.getscraping = async (arreglo) => {
  console.log(arreglo.length);
  let arregloMaster = [];
  
    // se formatean los datos descuento, tallas y precio, para llevarlos a la db
    for (let i = 0; i < arreglo.length; i++) {
      let { precio, enlaceImagen, descuento, talla, tag, tipoPrenda, color,materiales } = arreglo[i];

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
          porcentaje1 = materiales[j].split("  ")[0];
          material1 = materiales[j].split("  ")[1];
          material1 = saveImage.homologarMaterial(material1);
          
          break;
        case 1: 
         porcentaje2 = materiales[j].split("  ")[0];
          material2 = materiales[j].split("  ")[1];
          material2 = saveImage.homologarMaterial(material2);
         
          break;
        case 2: 
         porcentaje3 = materiales[j].split("  ")[0];
         material3 = materiales[j].split("  ")[1];
         material3 = saveImage.homologarMaterial(material3);

          break
        case 3: 
         porcentaje4 = materiales[j].split("  ")[0];
         material4 = materiales[j].split("  ")[1];
         material4 = saveImage.homologarMaterial(material4);
         
          break
        case 4: 
         porcentaje5 = materiales[j].split("  ")[0];
         material5 = materiales[j].split("  ")[1];
         material5 = saveImage.homologarMaterial(material5);
         
          break
        case 5: 
         porcentaje6 = materiales[j].split("  ")[0];
         material6 = materiales[j].split("  ")[1];
         material6 = saveImage.homologarMaterial(material6);
         
          break
        case 6: 
         porcentaje7 = materiales[j].split("  ")[0];
         material7 = materiales[j].split("  ")[1];
         material7 = saveImage.homologarMaterial(material7);

          break
          
        default: 
          break
          
        }
      }
      
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

      tipoPrenda = tipoPrenda.trim();
      tipoPrenda = saveImage.homologarTipoPrenda(tipoPrenda);

      let subCategoria = '';
      
        // convertir en minusculas
        tipoPrenda = tipoPrenda.trim().toLowerCase();  
        
        subCategoria = setSubCategory(tipoPrenda);
        // fin funcion para setear subCategoria

        // funcion para homologar el color
        color = setColor(color);
      

       // obtener el estado
      let estado = '';
      estado = saveImage.getState(tag, descuento);
      // console.log(estado);

      precio = parseInt(precio.substring(1).split(".").join(""), 10);
      if (descuento !== "") {
        descuento = parseInt(descuento.substring(1).split(".").join(""), 10);
      }

      // se extrae el numero de tallas 
      let numeroTallas = talla.length;
      if(tallasAgotadas.length !== 0) numeroTallas += tallasAgotadas.length;

     


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
      };
      arregloMaster.push(newObject);


      await saveImage.saveImagesDB(newObject);
      

    }

    await descontinuados(arregloMaster);
  };
  // end catching data from scraping

  // metodo para extraer los materiales y sus porcentajes
  let estraerMateriales = (materiales) => {
    materiales = materiales.split(": ").splice(1,1);
    materiales = materiales[0].split(".").splice(0,1);
    materiales = materiales[0].split(",");

    return materiales;
  }

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

  let setSubCategory = (tipoPrenda) => {
    for (let index = 0; index < verificarSub.subCategoria.length; index++) {
      // console.log(`sub: ${verificarSub.subCategoria[index]} - tipo: ${verificarSub.tipoPrenda[index]}`);
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
      categoria: elementDB.categoria,
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


  // envio de la informacion obtenida del scraping para el modelo cognitivo
  
  
  
  