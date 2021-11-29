const Business = require("../../domain/model/businessDao");
const avgPrice = require("../filtersScraping/AveragePrice");
const avgDiscount = require("../filtersScraping/AverageDiscount");
const avgNews = require("../filtersScraping/newProducts")
const discontinued = require("../filtersScraping/discontinued")
const avgSKU = require("../filtersScraping/SKU");
const prendasInfo = require("../filtersScraping/prendasInfo");

organizarQueryTest = (query) => {
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
        console.log(query.fechaInicio);
        obj.fecha_consulta = {$gte: inicio, $lte: fin}
    }
    if(query.fechaInicio !== '' && query.fechaFin !== '') {
        obj.fecha_consulta = {$gte: query.fechaInicio, $lte: query.fechaFin}
    }


    if(query.composicion !== undefined && (typeof query.composicion === 'string')) {
            obj.material1 = query.composicion;

    } else if (query.composicion !== undefined && query.composicion.length > 1) {
        obj.material1 = {$in: query.composicion};
        
    }


    return obj;
}

// info cards response
exports.cardsInfoWeek = async (req, res) => {
    let filtro = req.query;
    filtro = organizarQueryTest(filtro);

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 

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
    let obj;
    let values = [];
    let discounts = [];
    let newsCounts = 0;
    let discontinuedCounts = 0;
    let skuCounts = 0;
    // variables para la diferencia entre mes actual y anterior
    let differencePrice = [];
    let differencePorcentage = [];
    let differenceNew = [];
    let differenceDiscontinued = [];
    let differenceSKU = [];
    let origin = '';
    let precioPromedio = 0;
    let discountinueds = '';
    let discount = 0;
    let nuevos = 0;

    

    try {
        arr = await Business.find(filtro,{"precio":1, "descuento": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1}, { allowDiskUse: true});
        // console.log("Total: ", arr.length);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }


    if (req.query.origin === undefined || Array.isArray(req.query.origin) ) {

        discounts = avgDiscount.averageDiscountMonthGeneral(arr); // calcula los promedios por mes x 2 años una marca
        dzm[0] = discounts[month - 1];
        dzm[1] = discounts[month];
        dzm[0] += discounts[month + 23];
        dzm[1] += discounts[month + 24];
        // descuento promedio mes actualizado
        

        if(discounts[month] === 0 || discounts[month + 24] === 0){
            discount = ((discounts[month] + discounts[month + 24])).toFixed(2);
            differencePorcentage =  percentageDifferencesDiscount(dzm[1], dzm[0]);
        } else {
            discount = ((discounts[month] + discounts[month + 24])/2).toFixed(2);
            differencePorcentage =  percentageDifferencesDiscount(dzm[1]/2, dzm[0]/2);
        }


        values = avgPrice.averagePriceMonthGeneral(arr); // calcula el precio promedio por mes dos marcas 2 años
        zm[0] = values[month - 1];
        zm[1] =  values[month]; // valor actual de zara 
        zm[0] += values[month + 23];
        zm[1] += values[month + 24]; // valor actual de mango
        if(values[month] === 0 || values[month + 24] === 0){
            precioPromedio = ((values[month] + values[month + 24])).toFixed();
        } else {
            precioPromedio = ((values[month] + values[month + 24])/2).toFixed();
        }


        newsCounts = avgNews.averageNewsMonthGeneral(arr); // calcula el precio promedio por mes dos marcas 2 años
        nzm[0] = newsCounts[month - 1];
        nzm[1] =  newsCounts[month]; // valor actual de zara 
        nzm[0] += newsCounts[month + 23];
        nzm[1] += newsCounts[month + 24]; // valor actual de mango
        nuevos = ((newsCounts[month] + newsCounts[month + 24]));

        discontinuedCounts = discontinued.averageDiscontinuedMonthGeneral(arr); // calcula el precio promedio por mes dos marcas 2 años
        ddzm[0] = discontinuedCounts[month - 1];
        ddzm[1] =  discontinuedCounts[month]; // valor actual de zara 
        ddzm[0] += discontinuedCounts[month + 23];
        ddzm[1] += discontinuedCounts[month + 24]; // valor actual de mango
        discontinueds = (discontinuedCounts[month] + discontinuedCounts[month + 24]);


        skuCounts = avgSKU.averageSKUMonthGeneral(arr); // calcula el precio promedio por mes dos marcas 2 años
        skuzm[0] = skuCounts[month - 1];
        skuzm[1] =  skuCounts[month]; // valor actual de zara 
        skuzm[0] += skuCounts[month + 23];
        skuzm[1] += skuCounts[month + 24]; // valor actual de mango
        sku = (skuCounts[month] + skuCounts[month + 24]) ;


        origin = 'general';        

        // array de dos valores para setear la diferencia entre mes actual y anterior
        differencePrice =  percentageDifferencePrice(zm[1], zm[0]);        
        differenceNew = percentageDifferencesnews(nzm[1], nzm[0]);
        differenceDiscontinued = percentageDifferencesDiscontinued(ddzm[1], ddzm[0]);
        differenceSKU = percentageDifferencesSku(skuzm[1], skuzm[0]);
        

    } else if(req.query.origin === 'Zara'){
        // console.log("entro a zara");
        origin = 'Zara';
        discounts = avgDiscount.averageDiscount(arr); // calcula los promedios por mes una marca 2 años
        values = avgPrice.averagePriceMonthOrigin(arr); // promedio precio de la marca seleccionada por mes 2 años
        precioPromedio = (values[month]).toFixed();
        newsCounts = avgNews.averageNewsMonthOrigin(arr); // promedio precio de la marca seleccionada por mes 2 años
        nuevos = (newsCounts[month]).toFixed();
        discontinuedCounts = discontinued.averageDiscontinuedMonthOrigin(arr); // discontinued
        discontinueds = (discontinuedCounts[month]).toFixed();
        skuCounts = avgSKU.averageSKUMonthOrigin(arr); // calcula el precio promedio por mes dos marcas 2 años
        sku = skuCounts[month];
        discount = discounts[month];
        
        // valores de diferencia de porcentajes
        dzm[0] = discounts[month - 1];
        dzm[1] = discounts[month];
        
        // valores de diferencia de nuevos
        ddzm[0] = discontinuedCounts[month - 1];
        ddzm[1] = discontinuedCounts[month];
        
        // valores de diferencia de nuevos
        nzm[0] = newsCounts[month - 1];
        nzm[1] = newsCounts[month];
        
        // valores de diferencia de sku
        skuzm[0] = skuCounts[month - 1];
        skuzm[1] = skuCounts[month];

        zm[0] = values[month - 1];
        zm[1] =  values[month]; // valor actual 

        differencePrice =  percentageDifferencePrice(zm[1], zm[0]);
        differencePorcentage =  percentageDifferencesDiscount(dzm[1], dzm[0]);
        differenceNew = percentageDifferencesnews(nzm[1], nzm[0]);
        differenceSKU = percentageDifferencesSku(skuzm[1], skuzm[0]);
        differenceDiscontinued = percentageDifferencesDiscontinued(ddzm[1], ddzm[0]);

    // } else if(filtro.origin === 'Mango'){
    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
        discounts = avgDiscount.averageDiscount(arr); // calcula los promedios por mes
        values = avgPrice.averagePriceMonthOrigin(arr); // precio promedio por mes dos años una marca
        precioPromedio = (values[month]).toFixed();
        newsCounts = avgNews.averageNewsMonthOrigin(arr); // nuevos de la marca seleccionada por mes 2 años
        nuevos = newsCounts[month];
        discontinuedCounts = discontinued.averageDiscontinuedMonthOrigin(arr); // discontinued
        discontinueds = discontinuedCounts[month];
        discount = discounts[month];
        skuCounts = avgSKU.averageSKUMonthOrigin(arr); // calcula el precio promedio por mes dos marcas 2 años
        sku = skuCounts[month];
        

        // valores de diferencia de porcentajes
        dzm[0] = discounts[month - 1];
        dzm[1] = discounts[month];

        // valores de diferencia de nuevos
        nzm[0] = newsCounts[month - 1];
        nzm[1] = newsCounts[month];

        // valores de diferencia de nuevos
        ddzm[0] = discontinuedCounts[month - 1];
        ddzm[1] = discontinuedCounts[month];

        // valores de diferencia de nuevos
        skuzm[0] = skuCounts[month - 1];
        skuzm[1] = skuCounts[month];

        zm[0] = values[month - 1];
        zm[1] =  values[month]; // valor actual de zara 

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
        discontinueds,
        differencePrice, // porcentaje de diferencia
        differencePorcentage,
        differenceNew,
        differenceSKU,
        differenceDiscontinued
    }


    res.status(200).json({obj});
}