const Business = require("../domain/model/businessDao");
const avgPrice = require("./filtersScraping/AveragePrice");
const avgDiscount = require("./filtersScraping/AverageDiscount");
const avgNews = require("./filtersScraping/newProducts")
const discontinued = require("./filtersScraping/discontinued")
const avgSKU = require("./filtersScraping/SKU");
const prendasInfo = require("./filtersScraping/prendasInfo");
const { copyArrayDiscontinued } = require("./filtersScraping/weekFilters/weekFilter");

let objsize = (obj) => 
    {
    let size = 0, key;
  
    for (key in obj)
        {
       if (obj.hasOwnProperty(key))
         size++;
             }
  
    return size;
  
    };

let organizarQueryTest = (query) => {
    let obj = {};


    if(query.origin !== undefined) {
        obj.origin = {$in: query.origin};
    }
    if(query.categoria !== undefined){
        obj.categoria = {$in: query.categoria};
    }
    if(query.subCategoria !== undefined){
        obj.subCategoria = {$in: query.subCategoria};
    }
    if(query.tipoPrenda !== undefined){
        obj.tipoPrenda = {$in: query.tipoPrenda};
    }
    if(query.color !== undefined){
        obj.color = {$in: query.color};
    }
    if(query.fechaInicio !== '' && query.fechaFin === '') {
        let inicio = query.fechaInicio + "T00:00:00.000Z";
        let fin = query.fechaInicio + "T23:59:59.999Z";
        obj.fecha_consulta = {$gte: inicio, $lte: fin}
    } else if(query.fechaInicio !== "" && query.fechaFin !== "") {
        obj.fecha_consulta = {$gte: query.fechaInicio, $lte: query.fechaFin}
    }
    


    if(query.composicion !== undefined && (typeof query.composicion === 'string')) {
            obj.material1 = query.composicion;

    } else if (query.composicion !== undefined && query.composicion.length > 1) {
        obj.material1 = {$in: query.composicion};
        
    }


    return obj;
}

organizarQuery = (query) => {
    let obj = {};


    if(query.origin !== undefined) {
        obj.origin = {$in: query.origin};
    }
    if(query.categoria !== undefined){
        obj.categoria = {$in: query.categoria};
    }
    if(query.subCategoria !== undefined){
        obj.subCategoria = {$in: query.subCategoria};
    }
    if(query.tipoPrenda !== undefined){
        obj.tipoPrenda = {$in: query.tipoPrenda};
    }
    if(query.color !== undefined){
        obj.color = {$in: query.color};
    }
    if(query.composicion !== undefined && (typeof query.composicion === 'string')) {
        obj.material1 = query.composicion;
    } else if (query.composicion !== undefined && query.composicion.length > 1) {
        obj.material1 = {$in: query.composicion};
        
    }


    return obj;
}

// metodo para organizar query de vista prendas en categorias, 
let organizarQueryPrenda = (query) => {
    let obj = {};


    if(query.origin !== undefined) {
        obj.origin = {$in: query.origin};
    }
    if(query.categoria !== undefined){
        obj.categoria = {$in: query.categoria};
    }
    if(query.subCategoria !== undefined){
        obj.subCategoria = {$in: query.subCategoria};
    }
    if(query.tipoPrenda !== undefined){
        obj.tipoPrenda = {$in: query.tipoPrenda};
    }
    if(query.color !== undefined){
        obj.color = {$in: query.color};
    }

    if(query.fechaInicio !== "" && query.fechaFin === "") {
        let inicio = query.fechaInicio + "T00:00:00.000Z";
        let fin = query.fechaInicio + "T23:59:59.999Z";
        obj.fecha_consulta = {$gte: inicio, $lte: fin}
    }else if(query.fechaInicio !== '' && query.fechaFin !== "") {
        obj.fecha_consulta = {$gte: query.fechaInicio, $lte: query.fechaFin}
    } else {
        let fecha = new Date();
        obj.createdAt = {$gte :  new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-01T00:00:00.000Z`), $lte : new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-31T23:59:35.835Z`)}
    }

    if(query.composicion !== undefined && (typeof query.composicion === 'string')) {
        obj.material1 = query.composicion;
    } else if (query.composicion !== undefined && query.composicion.length > 1) {
        obj.material1 = {$in: query.composicion};
        
    }


    return obj;
}

// create match for table in prendas view 
let queryGroupBy = (query) => {
    let obj = {};


    if ( objsize(query) <= 3 && (query.allCategory === 'true' || query.allSubCategory === 'true' || query.allTipoPrenda === 'true') ) return obj;


    if(query.origin !== undefined && Array.isArray(query.origin)) {
        obj.origin = {$in: query.origin};
    } else if(query.origin !== undefined) {
        obj.origin = query.origin;
    }
    if(query.categoria !== undefined && Array.isArray(query.categoria)){
        obj.categoria = {$in: query.categoria};
    } else if(query.categoria !== undefined) {
        obj.categoria = query.categoria;
    }
    if(query.subCategoria !== undefined && Array.isArray(query.subCategoria)){
        obj.subCategoria = {$in: query.subCategoria};
    } else if(query.subCategoria !== undefined) {
        obj.subCategoria = query.subCategoria;
    }
    if(query.tipoPrenda !== undefined && Array.isArray(query.tipoPrenda)){
        obj.tipoPrenda = {$in: query.tipoPrenda};
    } else if(query.tipoPrenda !== undefined) {
        obj.tipoPrenda = query.tipoPrenda;
    }
    if(query.color !== undefined && Array.isArray(query.color)){
        obj.color = {$in: query.color};
    } else if(query.color !== undefined) {
        obj.color = query.color;
    }

    if(query.composicion !== undefined && (typeof query.composicion === 'string')) {
        obj.material1 = query.composicion;
    } else if (query.composicion !== undefined && query.composicion.length > 1) {
        obj.material1 = {$in: query.composicion};
        
    }

    


    return obj;
}

// create match for table in prendas view 
let queryGroupBysku = (query) => {
    let obj = {};


    if ( objsize(query) <= 3 && (query.allCategory === 'true' || query.allSubCategory === 'true' || query.allTipoPrenda === 'true') ) return obj;



    if(query.origin !== undefined && Array.isArray(query.origin)) {
        obj.origin = {$in: query.origin};
    } else if(query.origin !== undefined) {
        obj.origin = query.origin;
    }
    if(query.categoria !== undefined && Array.isArray(query.categoria)){
        obj.categoria = {$in: query.categoria};
    } else if(query.categoria !== undefined) {
        obj.categoria = query.categoria;
    }
    if(query.subCategoria !== undefined && Array.isArray(query.subCategoria)){
        obj.subCategoria = {$in: query.subCategoria};
    } else if(query.subCategoria !== undefined) {
        obj.subCategoria = query.subCategoria;
    }
    if(query.tipoPrenda !== undefined && Array.isArray(query.tipoPrenda)){
        obj.tipoPrenda = {$in: query.tipoPrenda};
    } else if(query.tipoPrenda !== undefined) {
        obj.tipoPrenda = query.tipoPrenda;
    }
    if(query.color !== undefined && Array.isArray(query.color)){
        obj.color = {$in: query.color};
    } else if(query.color !== undefined) {
        obj.color = query.color;
    }

    // fecha para las tablas para poder mostrar la info del mes actual o la fecha especificada
    if(query.fechaInicio !== "" && query.fechaFin === "") {
        let inicio = query.fechaInicio + "T00:00:00.000Z";
        let fin = query.fechaInicio + "T23:59:59.999Z";
        obj.fecha_consulta = {$gte: inicio, $lte: fin}
    }else if(query.fechaInicio !== '' && query.fechaFin !== "") {
        obj.fecha_consulta = {$gte: query.fechaInicio, $lte: query.fechaFin}
    } else {
        let fecha = new Date();
        obj.createdAt = {$gte :  new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-01T00:00:00.000Z`), $lte : new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-31T23:59:35.835Z`)}
    }

    if(query.composicion !== undefined && (typeof query.composicion === 'string')) {
        obj.material1 = query.composicion;
    } else if (query.composicion !== undefined && query.composicion.length > 1) {
        obj.material1 = {$in: query.composicion};
        
    }

    


    return obj;
}

// filtro para crear el group de precios promedio
let generateGroupPrice = (query) => {
    let group = {}

    if (query.allCategory === 'true' && query.allSubCategory === 'true' && query.allTipoPrenda === 'true') {
        group = {
            '_id': { 'todos':'$__v'},
            'precioPromedio': {
            $avg: '$precio'
            }
        }
    } else if (query.allTipoPrenda === 'true' && query.allSubCategory === 'true') {
        group = {
            '_id': { 'categoria':'$categoria'},
            'precioPromedio': {
            $avg: '$precio'
            }
        }
    } else if (query.allTipoPrenda === 'true' && query.allCategory === 'true') {
        group = {
            '_id': { 'subCategoria':'$subCategoria'},
            'precioPromedio': {
            $avg: '$precio'
            }
        }
    } else if (query.allSubCategory === 'true' && query.allCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda'},
            'precioPromedio': {
            $avg: '$precio'
            }
        }
    } else if (query.allCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda','subCategoria':'$subCategoria'},
            'precioPromedio': {
            $avg: '$precio'
            }
        }
    } else if (query.allSubCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda','categoria':'$categoria'},
            'precioPromedio': {
            $avg: '$precio'
            }
        }
    } else if (query.allTipoPrenda === 'true') {
        group = {
            '_id': { 'categoria':'$categoria','subCategoria':'$subCategoria'},
            'precioPromedio': {
            $avg: '$precio'
            }
        }
    } else {
        group = {
            '_id': {'categoria':'$categoria','subCategoria':'$subCategoria', 'tipoPrenda':'$tipoPrenda'},
            'precioPromedio': {
            $avg: '$precio'
            }
        }
    }


    return group
}

// filtro para crear el group de descuento promedio
let generateGroupDiscount = (query) => {
    let group = {}

    if (query.allCategory === 'true' && query.allSubCategory === 'true' && query.allTipoPrenda === 'true') {
        group = {
            '_id': { 'todos':'$__v'},
            'porcentajeDescuento': {
            $avg: '$porcentajeDescuento'
            }
        }
    } else if (query.allTipoPrenda === 'true' && query.allSubCategory === 'true') {
        group = {
            '_id': { 'categoria':'$categoria'},
            'porcentajeDescuento': {
            $avg: '$porcentajeDescuento'
            }
        }
    } else if (query.allTipoPrenda === 'true' && query.allCategory === 'true') {
        group = {
            '_id': { 'subCategoria':'$subCategoria'},
            'porcentajeDescuento': {
            $avg: '$porcentajeDescuento'
            }
        }
    } else if (query.allSubCategory === 'true' && query.allCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda'},
            'porcentajeDescuento': {
            $avg: '$porcentajeDescuento'
            }
        }
    } else if (query.allCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda','subCategoria':'$subCategoria'},
            'porcentajeDescuento': {
            $avg: '$porcentajeDescuento'
            }
        }
    } else if (query.allSubCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda','categoria':'$categoria'},
            'porcentajeDescuento': {
            $avg: '$porcentajeDescuento'
            }
        }
    } else if (query.allTipoPrenda === 'true') {
        group = {
                '_id': { 'categoria':'$categoria','subCategoria':'$subCategoria'},
                'porcentajeDescuento': {
                $avg: '$procentajeDescuento'
            }
        }
    } else {
        group = {
            '_id': {'categoria':'$categoria','subCategoria':'$subCategoria', 'tipoPrenda':'$tipoPrenda'},
            'porcentajeDescuento': {
            $avg: '$porcentajeDescuento'
            }
        }
    }


    return group
}

// filtro para crear el group de nuevos promedio
let generateGroupNews = (query) => {
    let group = {}

    if (query.allCategory === 'true' && query.allSubCategory === 'true' && query.allTipoPrenda === 'true') {
        group = {
            '_id': { 'todos':'$__v'},
            'nuevos': {
            $sum: 1
            }
        }
    } else if (query.allTipoPrenda === 'true' && query.allSubCategory === 'true') {
        group = {
            '_id': { 'categoria':'$categoria'},
            'nuevos': {
            $sum: 1
            }
        }
    } else if (query.allTipoPrenda === 'true' && query.allCategory === 'true') {
        group = {
            '_id': { 'subCategoria':'$subCategoria'},
            'nuevos': {
            $sum: 1
            }
        }
    } else if (query.allSubCategory === 'true' && query.allCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda'},
            'nuevos': {
            $sum: 1
            }
        }
    } else if (query.allCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda','subCategoria':'$subCategoria'},
            'nuevos': {
            $sum: 1
            }
        }
    } else if (query.allSubCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda','categoria':'$categoria'},
            'nuevos': {
            $sum: 1
            }
        }
    } else if (query.allTipoPrenda === 'true') {
        group = {
                '_id': { 'categoria':'$categoria','subCategoria':'$subCategoria'},
                'nuevos': {
                $sum: 1
            }
        }
    } else {
        group = {
            '_id': {'categoria':'$categoria','subCategoria':'$subCategoria', 'tipoPrenda':'$tipoPrenda'},
            'nuevos': {
            $sum: 1
            }
        }
    }


    return group
}

// filtro para crear el group de descontinuados promedio
let generateGroupDiscontinued = (query) => {
    let group = {}

    if (query.allCategory === 'true' && query.allSubCategory === 'true' && query.allTipoPrenda === 'true') {
        group = {
            '_id': { 'todos':'$__v'},
            'descontinuados': {
            $sum: 1
            }
        }
    } else if (query.allTipoPrenda === 'true' && query.allSubCategory === 'true') {
        group = {
            '_id': { 'categoria':'$categoria'},
            'descontinuados': {
            $sum: 1
            }
        }
    } else if (query.allTipoPrenda === 'true' && query.allCategory === 'true') {
        group = {
            '_id': { 'subCategoria':'$subCategoria'},
            'descontinuados': {
            $sum: 1
            }
        }
    } else if (query.allSubCategory === 'true' && query.allCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda'},
            'descontinuados': {
            $sum: 1
            }
        }
    } else if (query.allCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda','subCategoria':'$subCategoria'},
            'descontinuados': {
            $sum: 1
            }
        }
    } else if (query.allSubCategory === 'true') {
        group = {
            '_id': { 'tipoPrenda':'$tipoPrenda','categoria':'$categoria'},
            'descontinuados': {
            $sum: 1
            }
        }
    } else if (query.allTipoPrenda === 'true') {
        group = {
                '_id': { 'categoria':'$categoria','subCategoria':'$subCategoria'},
                'descontinuados': {
                $sum: 1
            }
        }
    } else {
        group = {
            '_id': {'categoria':'$categoria','subCategoria':'$subCategoria', 'tipoPrenda':'$tipoPrenda'},
            'descontinuados': {
            $sum: 1
            }
        }
    }


    return group
}

// filtro para crear el group de table sku
let generateGroupSKU = (query) => {
    let group = {}


    if (query.allCategory === 'true' && query.allSubCategory === 'true' && query.allTipoPrenda === 'true') {
        group = {
            '_id': {
              'todos': "$__v"
            }, 
            'nuevos': {
              '$sum': '$nuevos'
            }, 
            'SKU': {
              '$sum': '$numeroTallas'
            }, 
            'precioPromedio': {
              '$avg': '$precio'
            }, 
            'porcentajeDescuento': {
              '$avg': '$porcentajeDescuento'
            }
          }
    } else if (query.allTipoPrenda === 'true' && query.allSubCategory === 'true') {
        group = {
            '_id': { 
              'categoria': '$categoria'
            }, 
            'nuevos': {
              '$sum': '$nuevos'
            }, 
            'SKU': {
              '$sum': '$numeroTallas'
            }, 
            'precioPromedio': {
              '$avg': '$precio'
            }, 
            'porcentajeDescuento': {
              '$avg': '$porcentajeDescuento'
            }
          }
    } else if (query.allTipoPrenda === 'true' && query.allCategory === 'true') {
        group = {
            '_id': {
              'subCategoria': '$subCategoria'
            }, 
            'nuevos': {
              '$sum': '$nuevos'
            }, 
            'SKU': {
              '$sum': '$numeroTallas'
            }, 
            'precioPromedio': {
              '$avg': '$precio'
            }, 
            'porcentajeDescuento': {
              '$avg': '$porcentajeDescuento'
            }
          }
    } else if (query.allSubCategory === 'true' && query.allCategory === 'true') {
        group = {
            '_id': {
              'tipoPrenda': '$tipoPrenda'
            }, 
            'nuevos': {
              '$sum': '$nuevos'
            }, 
            'SKU': {
              '$sum': '$numeroTallas'
            }, 
            'precioPromedio': {
              '$avg': '$precio'
            }, 
            'porcentajeDescuento': {
              '$avg': '$porcentajeDescuento'
            }
          }
    } else if (query.allCategory === 'true') {
        group = {
            '_id': {
              'tipoPrenda': '$tipoPrenda', 
              'subCategoria': '$subCategoria'
            }, 
            'nuevos': {
              '$sum': '$nuevos'
            }, 
            'SKU': {
              '$sum': '$numeroTallas'
            }, 
            'precioPromedio': {
              '$avg': '$precio'
            }, 
            'porcentajeDescuento': {
              '$avg': '$porcentajeDescuento'
            }
          }
    } else if (query.allSubCategory === 'true') {
        group = {
            '_id': {
              'tipoPrenda': '$tipoPrenda', 
              'categoria': '$categoria',
            }, 
            'nuevos': {
              '$sum': '$nuevos'
            }, 
            'SKU': {
              '$sum': '$numeroTallas'
            }, 
            'precioPromedio': {
              '$avg': '$precio'
            }, 
            'porcentajeDescuento': {
              '$avg': '$porcentajeDescuento'
            }
          }
    } else if (query.allTipoPrenda === 'true') {
        group = {
            '_id': { 
              'categoria': '$categoria', 
              'subCategoria': '$subCategoria'
            }, 
            'nuevos': {
              '$sum': '$nuevos'
            }, 
            'SKU': {
              '$sum': '$numeroTallas'
            }, 
            'precioPromedio': {
              '$avg': '$precio'
            }, 
            'porcentajeDescuento': {
              '$avg': '$porcentajeDescuento'
            }
          }
    } else {
        group = {
            '_id': {
              'tipoPrenda': '$tipoPrenda', 
              'categoria': '$categoria', 
              'subCategoria': '$subCategoria'
            }, 
            'nuevos': {
              '$sum': '$nuevos'
            }, 
            'SKU': {
              '$sum': '$numeroTallas'
            }, 
            'precioPromedio': {
              '$avg': '$precio'
            }, 
            'porcentajeDescuento': {
              '$avg': '$porcentajeDescuento'
            }
          }
    }


    return group
}

// info cards response
exports.cardsInfo = async (req, res) => {
    let filtro = req.query;
    filtro = organizarQueryTest(filtro);


    //mes actual
    let date = new Date();
    let month = date.getMonth(); 
    let lastMonth;
    if(month === 0){
        lastMonth = 11;
    } else {
        lastMonth = month - 1;
    }

    // arreglo de mango y zara para los precios 
    let zm = [];
    // arreglo de mango y zara para los descuentos
    let dzm = [];
    // arreglo de mango y zara para los nuevos
    let nzm = [];
    // arreglo de mango y zara para los descontinuados
    let ddzm = [];
    // arreglo de mango y zara para los SKU
    let skuzm = [];

    let arr;
    let arr2;
    let arr3;
    let obj;
    let values = [];
    let discounts = [];
    let newsCounts = 0;
    let discontinuedCounts = 0;
    let skuCounts = 0;
    // variables para la diferencia entre mes actual y anterior
    let differencePrice = [0,0];
    let differencePorcentage = [0,0];
    let differenceNew = [0,0];
    let differenceDiscontinued = [0,0];
    let differenceSKU = [0,0];
    let origin = '';
    let precioPromedio = 0;
    let discountinueds = '';
    let discount = 0;
    let nuevos = 0;


    try {
        arr = await Business.find(filtro,{"precio":1, "descuento": 1,  "origin":1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tag": 1, "discontinued":1}, { allowDiskUse: true});
        // probando nuevo filtro
    } catch (error) {
        console.log(error);
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    // arreglo sin los descontinuados
    arr2 = copyArray(arr);



    if (req.query.origin === undefined || Array.isArray(req.query.origin) ) {

        discounts = avgDiscount.averageDiscountMonthGeneral(arr2); // calcula los promedios por mes x 2 años una marca
        
        // zara
        dzm[0] = discounts[lastMonth];
        dzm[1] = discounts[month];
        // mango
        dzm[0] += discounts[month + 23];
        dzm[1] += discounts[month + 24];
        // descuentos Gef
        dzm[0] += discounts[month + 47];
        dzm[1] += discounts[month + 48];
        // descuentos Punto blanco
        dzm[0] += discounts[month + 71];
        dzm[1] += discounts[month + 72];
        // descuentos Baby fresh
        dzm[0] += discounts[month + 95];
        dzm[1] += discounts[month + 96];
        // // descuentos Galax
        dzm[0] += discounts[month + 119];
        dzm[1] += discounts[month + 120];
        

        let countD = 0;
        if(discounts[month] !== 0) countD += 1;
        if(discounts[month + 24] !== 0) countD += 1;
        if(discounts[month + 48] !== 0) countD += 1;  
        if(discounts[month + 72] !== 0) countD += 1;  
        if(discounts[month + 96] !== 0) countD += 1;  
        if(discounts[month + 120] !== 0) countD += 1;  
        // descuento promedio mes actualizado
        
        if(countD !== 0) {
            discount = (dzm[1]/countD).toFixed(2);
            differencePorcentage =  percentageDifferencesDiscount(dzm[1]/countD, dzm[0]/countD);
        } else {
            let countLM = 0;
            if(discounts[lastMonth] !== 0) countLM += 1;
            if(discounts[month + 23] !== 0) countLM += 1;
            if(discounts[month + 47] !== 0) countLM += 1;  
            if(discounts[month + 71] !== 0) countLM += 1;  
            if(discounts[month + 95] !== 0) countLM += 1;  
            if(discounts[month + 119] !== 0) countLM += 1; 
            differencePorcentage =  percentageDifferencesDiscount(dzm[1]/countLM, dzm[0]/countLM);
            discount = dzm[1];
        }


        values = avgPrice.averagePriceMonthGeneral(arr2); // calcula el precio promedio por mes dos marcas 2 años
        zm[0] = values[lastMonth];
        zm[1] =  values[month]; // valor actual de zara 
        zm[0] += values[month + 23];
        zm[1] += values[month + 24]; // valor actual de mango
        // valores de Gef
        zm[0] += values[month + 47];
        zm[1] += values[month + 48];
        // valores de Punto blanco
        zm[0] += values[month + 71];
        zm[1] += values[month + 72];
        // valores de baby fresh
        zm[0] += values[month + 95];
        zm[1] += values[month + 96];
        // valores de Galax
        zm[0] += values[month + 119];
        zm[1] += values[month + 120];
        let countM = 0;
        // contando si hay valores en las marcas
        if(values[month] !== 0 || values[month] === 0) countM += 1;
        if(values[month + 24] !== 0 || values[month + 24] === 0) countM += 1;
        if(values[month + 48] !== 0 || values[month + 48] === 0) countM += 1;            
        if(values[month + 72] !== 0 || values[month + 72] === 0) countM += 1;            
        if(values[month + 96] !== 0 || values[month + 96] === 0) countM += 1;            
        if(values[month + 120] !== 0 || values[month + 120] === 0) countM += 1;            
        
        let countM2 = 0;
        if(values[lastMonth] !== 0 || values[lastMonth] === 0) countM2 += 1;
        if(values[month + 23] !== 0 || values[month + 23] === 0) countM2 += 1;
        if(values[month + 47] !== 0 || values[month + 47] === 0) countM2 += 1;            
        if(values[month + 71] !== 0 || values[month + 71] === 0) countM2 += 1;            
        if(values[month + 95] !== 0 || values[month + 95] === 0) countM2 += 1;            
        if(values[month + 119] !== 0 || values[month + 119] === 0) countM2 += 1;            

   
        if(countM !== 0 && countM2 !== 0) {
            precioPromedio = ((zm[1])/countM).toFixed();
            differencePrice =  percentageDifferencePrice(zm[1]/countM, zm[0]/countM2);
        } else {
            let countlm = 0;
            if(values[lastMonth] !== 0) countlm += 1;
            if(values[month + 23] !== 0) countlm += 1;
            if(values[month + 47] !== 0) countlm += 1;            
            if(values[month + 71] !== 0) countlm += 1;            
            if(values[month + 95] !== 0) countlm += 1;            
            if(values[month + 119] !== 0) countlm += 1;
            if(countlm === 0) countlm = 1;
            precioPromedio = ((zm[1])).toFixed();
            differencePrice =  percentageDifferencePrice(zm[1]/countlm, zm[0]/countlm);
            
        }


        newsCounts = avgNews.averageNewsMonthGeneral(arr2); // calcula productos nuevos promedio por mes dos marcas 2 años
        nzm[0] = newsCounts[lastMonth];
        nzm[1] =  newsCounts[month]; // valor actual de zara 
        nzm[0] += newsCounts[month + 23];
        nzm[1] += newsCounts[month + 24]; // valor actual de mango
        nzm[0] += newsCounts[month + 47];
        nzm[1] += newsCounts[month + 48]; // valor actual de Gef
        nzm[0] += newsCounts[month + 71];
        nzm[1] += newsCounts[month + 72]; // valor actual de Punto blanco
        nzm[0] += newsCounts[month + 95];
        nzm[1] += newsCounts[month + 96]; // valor actual de baby fresh
        nzm[0] += newsCounts[month + 119];
        nzm[1] += newsCounts[month + 120]; // valor actual de Galax
        nuevos = ((nzm[1]));

        discontinuedCounts = discontinued.averageDiscontinuedMonthGeneral(arr); // calcula los descontinuados promedio por mes dos marcas 2 años
        ddzm[0] = discontinuedCounts[lastMonth];
        ddzm[1] =  discontinuedCounts[month]; // valor actual de zara 
        ddzm[0] += discontinuedCounts[month + 23];
        ddzm[1] += discontinuedCounts[month + 24]; // valor actual de mango
        ddzm[0] += discontinuedCounts[month + 47];
        ddzm[1] += discontinuedCounts[month + 48]; // valor actual de Gef
        ddzm[0] += discontinuedCounts[month + 71];
        ddzm[1] += discontinuedCounts[month + 72]; // valor actual de Punto blanco
        ddzm[0] += discontinuedCounts[month + 95];
        ddzm[1] += discontinuedCounts[month + 96]; // valor actual de Baby fresh
        ddzm[0] += discontinuedCounts[month + 119];
        ddzm[1] += discontinuedCounts[month + 120]; // valor actual de Galax
        discontinueds = (ddzm[1]);


        skuCounts = avgSKU.averageSKUMonthGeneral(arr2); // calcula el precio promedio por mes dos marcas 2 años
        skuzm[0] = skuCounts[lastMonth];
        skuzm[1] =  skuCounts[month]; // valor actual de zara 
        skuzm[0] += skuCounts[month + 23];
        skuzm[1] += skuCounts[month + 24]; // valor actual de mango
        skuzm[0] += skuCounts[month + 47];
        skuzm[1] += skuCounts[month + 48]; // valor actual de Gef
        skuzm[0] += skuCounts[month + 71];
        skuzm[1] += skuCounts[month + 72]; // valor actual de Punto blanco
        skuzm[0] += skuCounts[month + 95];
        skuzm[1] += skuCounts[month + 96]; // valor actual de Baby fresh
        skuzm[0] += skuCounts[month + 119];
        skuzm[1] += skuCounts[month + 120]; // valor actual de Galax
        sku = (skuzm[1]) ;


        origin = 'general';        

        // array de dos valores para setear la diferencia entre mes actual y anterior    
        differenceNew = percentageDifferencesnews(nzm[1], nzm[0]);
        differenceDiscontinued = percentageDifferencesDiscontinued(ddzm[1], ddzm[0]);
        differenceSKU = percentageDifferencesSku(skuzm[1], skuzm[0]);
        

    } else {
        origin = req.query.origin;
        discounts = avgDiscount.averageDiscount(arr2); // calcula los promedios por mes una marca 2 años
        values = avgPrice.averagePriceMonthOrigin(arr2); // promedio precio de la marca seleccionada por mes 2 años
        precioPromedio = (values[month]).toFixed();
        newsCounts = avgNews.averageNewsMonthOrigin(arr2); // promedio precio de la marca seleccionada por mes 2 años
        console.log(newsCounts);
        nuevos = (newsCounts[month]).toFixed();
        discontinuedCounts = discontinued.averageDiscontinuedMonthOrigin(arr); // discontinued
        discontinueds = (discontinuedCounts[month]).toFixed();
        skuCounts = avgSKU.averageSKUMonthOrigin(arr2); // calcula el precio promedio por mes dos marcas 2 años
        sku = skuCounts[month];
        discount = discounts[month];
        
        // valores de diferencia de porcentajes
        dzm[0] = discounts[lastMonth];
        dzm[1] = discounts[month];
        
        // valores de diferencia de nuevos
        ddzm[0] = discontinuedCounts[lastMonth];
        ddzm[1] = discontinuedCounts[month];
        
        // valores de diferencia de nuevos
        nzm[0] = newsCounts[lastMonth];
        nzm[1] = newsCounts[month];
        
        // valores de diferencia de sku
        skuzm[0] = skuCounts[lastMonth];
        skuzm[1] = skuCounts[month];

        zm[0] = values[lastMonth];
        zm[1] =  values[month]; // valor actual 

        differencePrice =  percentageDifferencePrice(zm[1], zm[0]);
        differencePorcentage =  percentageDifferencesDiscount(dzm[1], dzm[0]);
        differenceNew = percentageDifferencesnews(nzm[1], nzm[0]);
        differenceSKU = percentageDifferencesSku(skuzm[1], skuzm[0]);
        differenceDiscontinued = percentageDifferencesDiscontinued(ddzm[1], ddzm[0]);

    } 

    
    // respuesta para el frontend
    obj = {  
        sku,
        precioPromedio, // precio promedio de ambas marcas 
        nuevos,
        origin,
        discount,
        discounts, // guarda el descuento
        values, // precio promedio 
        newsCounts, // nuevos 
        skuCounts,
        discontinueds, // porcentaje de diferencia
        differencePorcentage,
        differenceNew,
        differenceSKU,
        differenceDiscontinued,
        differencePrice
    }



    res.status(200).json({obj});
}
// fin info cards response


// precio promedio por los ultimos 2 años (charts)
exports.averagePrice = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.discontinued = false;
    let arr;
    let obj;
    let values = [];
    let origin = '';

    try {
        arr = await Business.find(filtro,{"precio":1, "descuento": 1, "origin":1, "createdAt":1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin) ){
        values = avgPrice.averagePriceMonthGeneral(arr);
        origin = 'general';
        
    } else {
        origin = req.query.origin;
        values = avgPrice.averagePriceMonthOrigin(arr);
    }

    months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    
    // respuesta para el frontend
    obj = {  
        origin,
        values,
        months,
    }


    res.status(200).json({obj});
}

// descuentos chart
exports.averageDiscount = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.descuento = {$ne: null};
    filtro.discontinued = false;
    
    let arr;
    let obj;
    let values = [];
    let origin = '';

    try {
        arr = await Business.find(filtro,{"precio":1, "descuento": 1, "origin":1,"estado":1, "createdAt":1, "discontinued":1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgDiscount.averageDiscountMonthGeneral(arr);        
        origin = 'general';
        
    } else {
        origin = req.query.origin;
        values = avgDiscount.averageDiscount(arr);

    }

    months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    

    
    // respuesta para el frontend
    obj = {       
        origin,
        values,
        months
    }


    res.status(200).json({obj});
}

// descontinuados chart
exports.averageDiscountinued = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.estado = {$eq: "descontinuado"};
    
    let arr;
    let obj;
    let values = [];
    let origin = '';

    try {
        arr = await Business.find(filtro,{"origin":1,"estado":1, "createdAt":1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = discontinued.averageDiscontinuedMonthGeneral(arr);        
        origin = 'general';
        
    } else {
        origin = req.query.origin;
        values = discontinued.averageDiscontinuedMonthOrigin(arr);

    } 

    months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    

    
    // respuesta para el frontend
    obj = {       
        origin,
        values,
        months
    }


    res.status(200).json({obj});
}

// nuevos charts
exports.averageNews = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.estado = {$eq: "nuevo"};
    filtro.discontinued = false;
    let arr;
    let obj;
    let values = [];
    let origin = '';

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgNews.averageNewsMonthGeneral(arr);
        origin = 'general';
        
    } else {
        origin = req.query.origin;
        values = avgNews.averageNewsMonthOrigin(arr);
    } 

    // cantidad de prendas nuevas
    let nuevos = 0;
    arr.forEach(element => {
        if (element.tag === 'nuevo') {
            nuevos += 1;
        }
    });

    months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    
    // respuesta para el frontend
    obj = {
        origin,
        nuevos,
        months,
        values
    }


    res.status(200).json({obj});
}


// average SKU chart
exports.averageSKU = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.discontinued = false;
    let arr;
    let obj;
    let values = [];
    let origin = '';

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1, "discontinued": 1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgSKU.averageSKUMonthGeneral(arr);        
        origin = 'general';
        
    } else {
        origin = req.query.origin;
        values = avgSKU.averageSKUMonthOrigin(arr);

    } 

    months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    
    // respuesta para el frontend
    obj = {  
        origin,
        values,
        months
    }


    res.status(200).json({obj});
}

// fin charts

// para las tablas de la vista productos prendas
exports.tableCategoryInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.discontinued = false;
    let arr;
    let obj;
    let values = [];

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (filtro.origin === undefined) {
        values = avgPrice.averagePriceMonthGeneral(arr);
        origin = 'general';
        
    } else if(filtro.origin === 'Zara'){
        origin = 'Zara';
        values = avgPrice.averagePriceMonthOrigin(arr);

    } else if(filtro.origin === 'Mango'){
        origin = 'Mango';
        values = avgPrice.averagePriceMonthOrigin(arr);
    }

    months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];


    
    // respuesta para el frontend
    obj = {  
        precioPromedio: avgPrice.averagePriceYear(arr),
        origin,
        values,
        months,
    }


    res.status(200).json({obj});
}

// respuesta para la table precios promedio
exports.tablePriceInfo = async (req, res) => {
    const fecha = new Date();
    let filtro4 = req.query;
    let filtro2 = queryGroupBy(filtro4);
    let group = generateGroupPrice(filtro4);
    filtro2.discontinued = false;
    filtro2.createdAt = { $gte :  new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-01T00:00:00.000Z`), $lte : new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-31T23:59:35.835Z`) };
    // console.log(filtro2)
    let arr3 = [];
    let arr2 = [];
    let arr = [];
    let zm = [];
    let obj;
    let differences = [];
    let precioPromedio = 0;

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 
    let lastMonth;
    if(month === 0){
        lastMonth = 11;
    } else {
        lastMonth = month - 1;
    }

    try {
        arr = await Business.find(filtro2,{"precio":1, "descuento": 1, "origin":1,"createdAt":1, "discontinued":1});

        arr2 = await Business.aggregate([
            {
                '$match': 
                    filtro2
            }, {
                '$group': 
                    group
            }, {
                $sort:{"precioPromedio":-1}
            }
            ]);
    } catch (error) {
        console.log(error);
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    

    arr3 = arr2.filter(element => {
        if(element.precioPromedio !== null && (element._id.categoria !== null && element._id.subCategoria !== null && element._id.tipoPrenda !== null ) ) element.precioPromedio = element.precioPromedio.toFixed();

        return element;
    });


    if (req.query.origin === undefined || Array.isArray(req.query.origin) ){
        values = avgPrice.averagePriceMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 
        

        zm[0] = values[lastMonth];
        zm[1] =  values[month]; // valor actual de zara 
        zm[0] += values[month + 23];
        zm[1] += values[month + 24]; // valor actual de mango
        // valores de Gef
        zm[0] += values[month + 47];
        zm[1] += values[month + 48];
        // valores de Punto blanco
        zm[0] += values[month + 71];
        zm[1] += values[month + 72];
        // valores de baby fresh
        zm[0] += values[month + 95];
        zm[1] += values[month + 96];
        // valores de Galax
        zm[0] += values[month + 119];
        zm[1] += values[month + 120];

        let countM = 0;
        // contando si hay valores en las marcas
        if(values[month] !== 0) countM += 1;
        if(values[month + 24] !== 0) countM += 1;
        if(values[month + 48] !== 0) countM += 1;            
        if(values[month + 72] !== 0) countM += 1;            
        if(values[month + 96] !== 0) countM += 1;            
        if(values[month + 120] !== 0) countM += 1;            
        
        let countM2 = 0;
        if(values[lastMonth] !== 0) countM2 += 1;
        if(values[month + 23] !== 0) countM2 += 1;
        if(values[month + 47] !== 0) countM2 += 1;            
        if(values[month + 71] !== 0) countM2 += 1;            
        if(values[month + 95] !== 0) countM2 += 1;            
        if(values[month + 119] !== 0) countM2 += 1; 
        if(countM2 === 0) countM2++;           
        
   
        if(countM !== 0) {
            precioPromedio = ((zm[1])/countM).toFixed();
            differences =  percentageDifferencePrice(zm[1]/countM, zm[0]/countM2);
            
        } else {
            let countlm
            if(values[lastMonth] !== 0) countlm += 1;
            if(values[month + 23] !== 0) countlm += 1;
            if(values[month + 47] !== 0) countlm += 1;            
            if(values[month + 71] !== 0) countlm += 1;            
            if(values[month + 95] !== 0) countlm += 1;            
            if(values[month + 119] !== 0) countlm += 1;
            precioPromedio = ((zm[1])).toFixed();
            differences =  percentageDifferencePrice(zm[1]/countlm, zm[0]/countlm);
            
        }

        
    } else if(req.query.origin !== undefined || !Array.isArray(req.query.origin)){
        values = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = values[month];
        precioPromedioAnterior = values[lastMonth];

        differences = percentageDifferencePrice(precioPromedio, precioPromedioAnterior);

    } else {
        differences[0] = 0;
        differences[1] = 0;
    }


    // respuesta para el frontend
    obj = { 
        arr3,
        differences
    }


    res.status(200).json({obj});
}

// respuesta para la table 2 productos prendas
exports.tablePrendasInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.discontinued = false;

    let arr;
    let arr3 = [];
    let obj;
    let values = [];
    let origin = '';
    let precioPromedio = 0;
    let precioPromedioAnterior = 0;
    let differences = [];
    let valuesDiscount = [];
    let descuentoPromedio = 0;

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 
    let lastMonth;
    if(month === 0){
        lastMonth = 11;
    } else {
        lastMonth = month - 1;
    }

    try {
        arr = await Business.find(filtro,{"precio":1, "descuento": 1, "origin":1, "categoria":1, "subCategoria": 1,"estado":1, "createdAt":1, "tipoPrenda": 1, "base64": 1, "color":1, "talla":1, "tallasAgotadas":1, "porcentajeDescuento": 1});

    } catch (error) {
        console.log(error);
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin) ){
        values = avgPrice.averagePriceMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 

        if(values[month] === 0 || values[month + 24] === 0){
            precioPromedio = ((values[month] + values[month + 24]));
            precioPromedioAnterior = (values[lastMonth] + values[month + 23]);
        } else {
            precioPromedio = ((values[month] + values[month + 24])/2);
            precioPromedioAnterior = ((values[lastMonth] + values[month + 23])/2);
        }

        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencePrice(precioPromedio, precioPromedioAnterior);


        
    } else if(req.query.origin === 'Zara'){
        values = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = values[month];
        precioPromedioAnterior = values[lastMonth];

    } else if(req.query.origin === 'Mango'){
        values = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = values[month];
        precioPromedioAnterior = values[lastMonth];
    }

    precioPromedio = precioPromedio.toFixed();


    // respuesta para el frontend
    obj = {
        arr,
    }


    res.status(200).json({obj});
}

// table info descontinuados
exports.tableDiscountinuedInfo = async (req, res) => {
    let filtro = req.query;
    let filtro2 = req.query;

    let group = generateGroupDiscontinued(filtro2);
    
    filtro = queryGroupBy(filtro);
    filtro.estado = {$eq: "descontinuado"};
    let fecha = new Date();
    filtro.createdAt = { $gte :  new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-01T00:00:00.000Z`), $lte : new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-31T23:59:35.835Z`) };
    
    filtro2 = queryGroupBy(filtro2);
    filtro2.estado = {$eq: "descontinuado"};

    let arr;
    let arr2;
    let obj;
    let differences = [];
    let ddzm = []; 

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 
    let lastMonth;
    if(month === 0){
        lastMonth = 11;
    } else {
        lastMonth = month - 1;
    }

    try {
        arr = await Business.find(filtro2,{"origin":1,"estado":1, "createdAt":1, "tipoPrenda": 1, "categoria":1, "subCategoria":1});

        arr2 = await Business.aggregate([
            {
                '$match': 
                    filtro
            }, {
                '$group': 
                    group
            }, {
                $sort:{"descontinuados":-1}
            }
            ]);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }


    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        discontinuedCounts = discontinued.averageDiscontinuedMonthGeneral(arr);

        ddzm[0] = discontinuedCounts[lastMonth];
        ddzm[1] =  discontinuedCounts[month]; // valor actual de zara 
        ddzm[0] += discontinuedCounts[month + 23];
        ddzm[1] += discontinuedCounts[month + 24]; // valor actual de mango    
        
        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencesDiscount(ddzm[1], ddzm[0]);


        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        discontinuedCounts = discontinued.averageDiscontinuedMonthOrigin(arr);

        // valores de diferencia de descontinuados
        ddzm[0] = discontinuedCounts[lastMonth];
        ddzm[1] = discontinuedCounts[month];

        // determinar la diferencia porcentual en los descuentos
        differences = percentageDifferencesDiscontinued(ddzm[1], ddzm[0]);

    } else if(req.query.origin === 'Mango'){
        discontinuedCounts = avgDiscount.averageDiscount(arr);
        
        // obtener descuentos promedio mes actual y anterior 
        ddzm[0] = discontinuedCounts[lastMonth];
        ddzm[1] = discontinuedCounts[month];;
        // determinar la diferencia porcentual en los descuentos
        differences = percentageDifferencesDiscontinued(ddzm[1], ddzm[0]);
    } else {
        differences[0] = 0;
        differences[1] = 0;
    }

    // respuesta para el frontend
    obj = { 
        arr2,
        differences
    }


    res.status(200).json({obj});
}

// table info descuentos
exports.tableDiscountInfo = async (req, res) => {
    let filtro = req.query;
    let filtro2 = req.query;
    const fecha = new Date();
    
    let filtro1 = organizarQuery(req.query);
    filtro1.discontinued = false;

    filtro = queryGroupBy(filtro);
    filtro.estado = "promocion";
    filtro.discontinued = false;
    filtro.createdAt = { $gte :  new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-01T00:00:00.000Z`), $lte : new Date(`${fecha.getFullYear()}-0${(fecha.getMonth()+1)}-31T23:59:35.835Z`) };

    let group = generateGroupDiscount(filtro2);
    

    // let arr;
    let arr2;
    let obj;
    let values = [];
    let differences = [];
    // let flag = false;

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 
    let lastMonth;
    if(month === 0){
        lastMonth = 11;
    } else {
        lastMonth = month - 1;
    }

    try {
        arr = await Business.find(filtro1,{"precio":1, "descuento": 1, "origin":1,  "categoria":1, "subCategoria": 1, "createdAt":1, "discontinued":1});

        arr2 = await Business.aggregate([
            {
                '$match': 
                    filtro
            }, {
                '$group': 
                group
            }, {
                $sort:{"porcentajeDescuento":-1}
            }
            ]);

    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }
    

    arr2 = arr2.map(element => {
        if(element.porcentajeDescuento !== null) element.porcentajeDescuento = element.porcentajeDescuento.toFixed(2);


        return element;
    });

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgDiscount.averageDiscountMonthGeneral(arr);
        
        // obtener precios promedio mes actual y anterior 

        if(values[month] === 0 || values[month + 24] === 0){
            descuentoPromedio = ((values[month] + values[month + 24])).toFixed(2);
            descuentoPromedioAnterior = ((values[lastMonth] + values[month + 23])).toFixed(2);
        } else {
            descuentoPromedio = ((values[month] + values[month + 24])/2).toFixed(2);
            descuentoPromedioAnterior = ((values[lastMonth] + values[month + 23])).toFixed(2);
        }
        // determinar la diferencia porcentual en los descuentos
        differences = percentageDifferencesDiscount(descuentoPromedio, descuentoPromedioAnterior);


        
    } else if(req.query.origin === 'Zara'){
        values = avgDiscount.averageDiscount(arr);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = values[month];
        descuentoPromedioAnterior = values[lastMonth];
        // determinar la diferencia porcentual en los descuentos
        differences = percentageDifferencesDiscount(descuentoPromedio, descuentoPromedioAnterior);

    } else if(req.query.origin === 'Mango'){
        values = avgDiscount.averageDiscount(arr);
        // obtener descuentos promedio mes actual y anterior 
        descuentoPromedio = values[month];
        descuentoPromedioAnterior = values[lastMonth];
        // determinar la diferencia porcentual en los descuentos
        differences = percentageDifferencesDiscount(descuentoPromedio, descuentoPromedioAnterior);
    } else {
        differences[0] = 0;
        differences[1] = 0;
    }


    // respuesta para el frontend
    obj = { 
        arr2,
        differences
        // arr,
        // descuentoPromedio,
    }


    res.status(200).json({obj});
}

// table news 
exports.tableNewsInfo = async (req, res) => {
    let filtro = req.query;
    let filtro2 = req.query;
    const fecha = new Date();

    // creando el group en funcion del filtro
    let group = generateGroupNews(filtro);
    // creando el contenido del match para el query
    filtro = queryGroupBy(filtro);
    filtro.estado = "nuevo";
    filtro.discontinued = false;
    filtro.createdAt = { $gte :  new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-01T00:00:00.000Z`), $lte : new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-31T23:59:35.835Z`) };
    
    // datos para la diferencia
    filtro2 = organizarQuery(filtro2);
    filtro2.estado = "nuevo";
    filtro2.discontinued = false;

    let arr;
    let arr2;
    let obj;
    let differences = [];

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 
    let lastMonth;
    if(month === 0){
        lastMonth = 11;
    } else {
        lastMonth = month - 1;
    }

    try {
        arr = await Business.find(filtro2,{"precio":1, "descuento": 1,  "origin":1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tag": 1, "discontinued":1});


        arr2 = await Business.aggregate([
            {
                '$match': 
                    filtro                    
            }, {
                '$group': 
                    group
            }, {
                $sort:{"nuevos":-1}
            }
            ]);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }


    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgNews.averageNewsMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 
        nuevosPromedio = (values[month] + values[month + 24]);
        nuevosPromedioAnterior = (values[lastMonth] + values[month + 23]);
        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencesnews(nuevosPromedio, nuevosPromedioAnterior);
        
    } else if(req.query.origin === 'Zara'){
        values = avgNews.averageNewsMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        nuevosPromedio = values[month];
        nuevosPromedioAnterior = values[lastMonth];
        // determinar la diferencia porcentual en los nuevoss
        differences = percentageDifferencesnews(nuevosPromedio, nuevosPromedioAnterior);

    } else if(req.query.origin === 'Mango'){
        values = avgNews.averageNewsMonthOrigin(arr);
        // obtener descuentos promedio mes actual y anterior 
        nuevosPromedio = values[month];
        nuevosPromedioAnterior = values[lastMonth];
        // determinar la diferencia porcentual en los nuevoss
        differences = percentageDifferencesnews(nuevosPromedio, nuevosPromedioAnterior);
    } else {
        differences[0] = 0;
        differences[1] = 0;
    }


    // respuesta para el frontend
    obj = { 
        arr2,
        differences
        // arr,
        // nuevosPromedio,
    }


    res.status(200).json({obj});
}

// table sku info in prendas section
exports.tableSKUInfo = async (req, res) => {
    let filtro = req.query;
    let filtro2 = req.query;
    let fecha = new Date();

    let group = generateGroupSKU(filtro2);
    
    filtro = organizarQuery(filtro);
    filtro2 = queryGroupBy(filtro2);
    filtro.discontinued = false;
    filtro2.discontinued = false;
    filtro2.createdAt = { $gte :  new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-01T00:00:00.000Z`), $lte : new Date(`${fecha.getFullYear()}-0${fecha.getMonth() + 1}-31T23:59:35.835Z`) };

    let arr;
    let arr2;
    let obj;

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 
    let lastMonth;
    if(month === 0){
        lastMonth = 11;
    } else {
        lastMonth = month - 1;
    }

    try {
        arr = await Business.find(filtro,{"precio":1});

        arr2 = await Business.aggregate([
            {
              '$match': 
                filtro2
              
            }, {
              '$project': {
                'porcentajeDescuento': '$porcentajeDescuento', 
                'numeroTallas': '$numeroTallas', 
                'precio': '$precio', 
                'categoria': '$categoria', 
                'subCategoria': '$subCategoria', 
                'tipoPrenda': '$tipoPrenda', 
                'nuevos': {
                  '$cond': {
                    'if': {
                      '$eq': [
                        '$estado', 'nuevo'
                      ]
                    }, 
                    'then': {
                      '$sum': 1
                    }, 
                    'else': {
                      '$sum': 0
                    }
                  }
                }
              }
            }, {
              '$group': 
                group
            }, {
              '$sort': {
                'SKU': -1
              }
            }
          ]);

    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    
    let totalElements = arr.length;
    arr2 = arr2.map(element => {
        if(element.precioPromedio !== null) {
            element.precioPromedio = (element.precioPromedio).toFixed();
        }
        if(element.porcentajeDescuento !== null) {
            element.porcentajeDescuento = (element.porcentajeDescuento).toFixed(2);
        }

        element.tasaFrescura = (element.nuevos/totalElements).toFixed(3); 

        return element;
    });


    // respuesta para el frontend
    obj = { 
        arr2
    }


    res.status(200).json({obj});
}

// table principal in prendas section
exports.tablePrendasInfo2 = async (req, res) => {
    let filtro = req.query;
    let filtro2 = req.query;
    

    let group = generateGroupSKU(filtro2);

    filtro = organizarQuery(filtro);
    filtro2 = queryGroupBysku(filtro2);

    let arr;
    let arr2;
    let obj;

    try {
        arr = await Business.find(filtro,{"precio":1});

        arr2 = await Business.aggregate([
            {
              '$match': 
                filtro2
              
            }, {
              '$project': {
                'porcentajeDescuento': '$porcentajeDescuento', 
                'numeroTallas': '$numeroTallas', 
                'precio': '$precio', 
                'categoria': '$categoria', 
                'subCategoria': '$subCategoria', 
                'tipoPrenda': '$tipoPrenda', 
                'nuevos': {
                  '$cond': {
                    'if': {
                      '$eq': [
                        '$estado', 'nuevo'
                      ]
                    }, 
                    'then': {
                      '$sum': 1
                    }, 
                    'else': {
                      '$sum': 0
                    }
                  }
                }
              }
            }, {
              '$group': 
                group
            }, {
              '$sort': {
                'SKU': -1
              }
            }
          ]);

    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    
    let totalElements = arr.length;
    arr2 = arr2.map(element => {
        if(element.porcentajeDescuento !== null) {
        element.porcentajeDescuento = (element.porcentajeDescuento).toFixed(2);

        element.precioPromedio = (element.precioPromedio).toFixed();
        }

        element.tasaFrescura = (element.nuevos/totalElements).toFixed(3); 

        return element;
    });


    // respuesta para el frontend
    obj = { 
        arr2
    }


    res.status(200).json({obj});
}

// cards prendas info categorias
exports.prendasInfo = async (req, res) => {
    let filtro = req.query;
    

    filtro = organizarQueryPrenda(filtro);
    
    try {
        arr = await Business.find(filtro,{"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    values = prendasInfo.cardsPrendas(arr);


    // respuesta para el frontend
    obj = {
        newWomen: values[0],
        discontinuedWomen: values[1],
        promotionWomen: values[2],
        totalskuWomen: values[3],
        newMen: values[4],
        discontinuedMen: values[5],
        promotionMen: values[6],
        totalskuMen: values[7],
        newKids: values[8],
        discontinuedKids: values[9],
        promotionKids: values[10],
        totalskuKids: values[11],
    }


    res.status(200).json({obj});

}

let calculateSKU = (arr) => {
    let totalSKU = 0;
    arr.forEach(element => {totalSKU += element.numeroTallas});
    return totalSKU;
}

news = arr => {
    let nuevos = 0;
    arr.forEach(element => {
        if (element.tag === 'nuevo') {
            nuevos += 1;
        }
    });
    return nuevos
}

// se calcula el porcentaje de diferencia entre mes actual y anterior
let percentageDifferencePrice = (current, before) => {
    // 1 positive 0 negative
    let difference = [];
    if (current >= before  && current !== 0) {
        difference[0] = 1;
        difference[1] =  parseFloat(Math.abs( (((before*100)/current)-100) ).toFixed(2));
        return difference;
    } else if (current < before) {
        difference[0] = 0;
        difference[1] =  parseFloat(Math.abs( ((current*100)/before)-100 ).toFixed(2));
        return difference;
    } 

}

percentageDifferencesnews = (current, before) => {
    // 1 positive 0 negative
    let difference = [];
    if (current >= before && current !== 0) {
        difference[0] = 1;
        difference[1] =  parseInt((current-before));
        return difference;
    } else if (current < before) {
        difference[0] = 0;
        difference[1] =  parseInt((before-current));
        return difference;
    } else {
        difference[0] = 0;
        difference[1] = 0;
        return difference;
    }

}

percentageDifferencesDiscontinued = (current, before) => {
    // 1 positive 0 negative
    let difference = [];
    if (current >= before && current !== 0) {
        difference[0] = 1;
        difference[1] =  parseInt((current-before));
        return difference;
    } else if (current < before) {
        difference[0] = 0;
        difference[1] =  parseInt((before-current));
        return difference;
    } else {
        difference[0] = 0;
        difference[1] = 0;
        return difference;
    }

}

let percentageDifferencesDiscount = (current, before) => {
    // 1 positive 0 negative
    let difference = [];
    if (current >= before && current !== 0) {
        difference[0] = 1;
        difference[1] =  parseFloat((current-before).toFixed(2));
        return difference;
    } else if (current < before) {
        difference[0] = 0;
        difference[1] =  parseFloat((before-current).toFixed(2));
        return difference;
    } else {
        difference[0] = 0;
        difference[1] = 0;
        return difference;
    }

}

percentageDifferencesSku = (current, before) => {
    // 1 positive 0 negative
    let difference = [];
    if (current >= before && current !== 0) {
        difference[0] = 1;
        difference[1] =  parseInt((current-before));
        return difference;
    } else if (current < before) {
        difference[0] = 0;
        difference[1] =  parseInt((before-current));
        return difference;
    } else {
        difference[0] = 0;
        difference[1] = 0;
        return difference;
    }

}


let copyArray = array => {
    let copy = [];
    for ( var i = 0; i < array.length; i++ ) {
        if (array[i].discontinued === false) {
            copy.push(array[ i ]);
        }
     }

     return copy;
}