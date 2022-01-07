const Business = require("../domain/model/businessDao");
const avgPrice = require("./filtersScraping/AveragePrice");
const avgDiscount = require("./filtersScraping/AverageDiscount");
const avgNews = require("./filtersScraping/newProducts")
const discontinued = require("./filtersScraping/discontinued")
const avgSKU = require("./filtersScraping/SKU");
const prendasInfo = require("./filtersScraping/prendasInfo");
const { copyArrayDiscontinued } = require("./filtersScraping/weekFilters/weekFilter");

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
    }

    if(query.composicion !== undefined && (typeof query.composicion === 'string')) {
        obj.material1 = query.composicion;
    } else if (query.composicion !== undefined && query.composicion.length > 1) {
        obj.material1 = {$in: query.composicion};
        
    }


    return obj;
}

let queryGroupBy = (query) => {
    let obj = {};

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

    // if(query.fechaInicio !== "" && query.fechaFin === "") {
    //     let inicio = query.fechaInicio + "T00:00:00.000Z";
    //     let fin = query.fechaInicio + "T23:59:59.999Z";
    //     obj.fecha_consulta = {$gte: inicio, $lte: fin}
    // }else if(query.fechaInicio !== '' && query.fechaFin !== "") {
    //     obj.fecha_consulta = {$gte: query.fechaInicio, $lte: query.fechaFin}
    // }

    if(query.composicion !== undefined && (typeof query.composicion === 'string')) {
        obj.material1 = query.composicion;
    } else if (query.composicion !== undefined && query.composicion.length > 1) {
        obj.material1 = {$in: query.composicion};
        
    }


    return obj;
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
        arr = await Business.find(filtro,{"precio":1, "descuento": 1,  "origin":1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tag": 1, "discontinued":1}, { allowDiskUse: true});
        // probando nuevo filtro
        // console.log("Total: ", arr.length);
    } catch (error) {
        console.log(error);
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    // arreglo sin los descontinuados
    arr2 = copyArray(arr);



    if (req.query.origin === undefined || Array.isArray(req.query.origin) ) {

        discounts = avgDiscount.averageDiscountMonthGeneral(arr2); // calcula los promedios por mes x 2 años una marca
        let flag = false;
        dzm[0] = discounts[lastMonth];
        dzm[1] = discounts[month];
        if(dzm[1] === 0) flag = true;
        dzm[0] += discounts[month + 23];
        dzm[1] += discounts[month + 24];
        if(discounts[month + 24] === 0) flag = true;
        if(!flag === true) {
            dzm[1] = (dzm[1]/2);
            dzm[0] = (dzm[0]/2);
        } 
        // descuento promedio mes actualizado
        

        if(discounts[month] === 0 || discounts[month + 24] === 0){
            discount = ((discounts[month] + discounts[month + 24])).toFixed(2);
            differencePorcentage =  percentageDifferencesDiscount(dzm[1], dzm[0]);
        } else {
            discount = ((discounts[month] + discounts[month + 24])/2).toFixed(2);
            differencePorcentage =  percentageDifferencesDiscount(dzm[1], dzm[0]);
        }


        values = avgPrice.averagePriceMonthGeneral(arr2); // calcula el precio promedio por mes dos marcas 2 años
        zm[0] = values[lastMonth];
        zm[1] =  values[month]; // valor actual de zara 
        zm[0] += values[month + 23];
        zm[1] += values[month + 24]; // valor actual de mango
        if(values[month] === 0 || values[month + 24] === 0){
            precioPromedio = ((values[month] + values[month + 24])).toFixed();
            differencePrice =  percentageDifferencePrice(zm[1], zm[0]);
        } else {
            precioPromedio = ((values[month] + values[month + 24])/2).toFixed();
            differencePrice =  percentageDifferencePrice(zm[1]/2, zm[0]/2);
        }


        newsCounts = avgNews.averageNewsMonthGeneral(arr2); // calcula el precio promedio por mes dos marcas 2 años
        nzm[0] = newsCounts[lastMonth];
        nzm[1] =  newsCounts[month]; // valor actual de zara 
        nzm[0] += newsCounts[month + 23];
        nzm[1] += newsCounts[month + 24]; // valor actual de mango
        nuevos = ((newsCounts[month] + newsCounts[month + 24]));

        discontinuedCounts = discontinued.averageDiscontinuedMonthGeneral(arr); // calcula el precio promedio por mes dos marcas 2 años
        ddzm[0] = discontinuedCounts[lastMonth];
        ddzm[1] =  discontinuedCounts[month]; // valor actual de zara 
        ddzm[0] += discontinuedCounts[month + 23];
        ddzm[1] += discontinuedCounts[month + 24]; // valor actual de mango
        discontinueds = (ddzm[1] + ddzm[0]);


        skuCounts = avgSKU.averageSKUMonthGeneral(arr2); // calcula el precio promedio por mes dos marcas 2 años
        skuzm[0] = skuCounts[lastMonth];
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
        dzm[0] = discounts[lastMonth];
        dzm[1] = discounts[month];

        // valores de diferencia de nuevos
        nzm[0] = newsCounts[lastMonth];
        nzm[1] = newsCounts[month];

        // valores de diferencia de nuevos
        ddzm[0] = discontinuedCounts[lastMonth];
        ddzm[1] = discontinuedCounts[month];

        // valores de diferencia de nuevos
        skuzm[0] = skuCounts[lastMonth];
        skuzm[1] = skuCounts[month];

        zm[0] = values[lastMonth];
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
// fin info cards response


// precio promedio por los ultimos 2 años y descuento promedio (charts)
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
        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        values = avgPrice.averagePriceMonthOrigin(arr);

    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
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

// descontinuados chart
exports.averageDiscount = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.descuento = {$ne: null};
    filtro.discontinued = false;
    // console.log(filtro);
    
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
        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        values = avgDiscount.averageDiscount(arr);

    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
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
    // console.log(filtro);
    
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
        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        values = discontinued.averageDiscontinuedMonthOrigin(arr);

    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
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
        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        values = avgNews.averageNewsMonthOrigin(arr);

    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
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
        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        values = avgSKU.averageSKUMonthOrigin(arr);

    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
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
    let filtro4 = req.query;
    let filtro2 = queryGroupBy(filtro4);

    filtro2.discontinued = false;

    let arr3 = [];
    let obj;

    try {

        arr3 = await Business.aggregate([
            {
                '$match': 
                    filtro2
            }, {
                '$group': {
                    '_id': {'categoria':'$categoria','subCategoria':'$subCategoria', 'tipoPrenda':'$tipoPrenda'},
                    'precioPromedio': {
                    $avg: '$precio'
                    }
                }
            }, {
                $sort:{"precioPromedio":-1}
            }
            ]);
    } catch (error) {
        console.log(error);
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    arr3 = arr3.map(element => {
        if(element.precioPromedio !== null) element.precioPromedio = element.precioPromedio.toFixed();

        return element;
    });



    // respuesta para el frontend
    obj = { 
        arr3
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
        arr = await Business.find(filtro,{"precio":1, "descuento": 1, "origin":1, "categoria":1, "subCategoria": 1,"estado":1, "createdAt":1, "tipoPrenda": 1, "base64": 1, "color":1, "talla":1, "tallasAgotadas":1});

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

        valuesDiscount = avgDiscount.averageDiscountMonthGeneral(arr);

        if(valuesDiscount[month] === 0 || valuesDiscount[month + 24] === 0){
            descuentoPromedio = ((valuesDiscount[month] + valuesDiscount[month + 24])).toFixed(2);
        } else {
            descuentoPromedio = ((valuesDiscount[month] + valuesDiscount[month + 24])/2).toFixed(2);
        }

        
    } else if(req.query.origin === 'Zara'){
        values = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = values[month];
        precioPromedioAnterior = values[lastMonth];

        valuesDiscount = avgDiscount.averageDiscount(arr);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = valuesDiscount[month].toFixed(2);
        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencePrice(precioPromedio, precioPromedioAnterior);

    } else if(req.query.origin === 'Mango'){
        values = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = values[month];
        precioPromedioAnterior = values[lastMonth];

        valuesDiscount = avgDiscount.averageDiscount(arr);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = valuesDiscount[month].toFixed(2);
        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencePrice(precioPromedio, precioPromedioAnterior);
    }

    precioPromedio = precioPromedio.toFixed();


    // respuesta para el frontend
    obj = {
        arr,
        precioPromedio,
        differences,
        descuentoPromedio
    }


    res.status(200).json({obj});
}

// table info descontinuados
exports.tableDiscountinuedInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = queryGroupBy(filtro);
    filtro.estado = {$eq: "descontinuado"};

    // let arr;
    let arr2;
    let obj;
    // let values = [];
    // let origin = '';
    // let descontinuados = 0;
    // let descuentoPromedioAnterior = 0;
    // let differences = [];
    // let ddzm = []; 

    //mes actual
    // let date = new Date();
    // let month = date.getMonth(); 
    // let lastMonth;
    // if(month === 0){
    //     lastMonth = 11;
    // } else {
    //     lastMonth = month - 1;
    // }

    try {
        // arr = await Business.find(filtro,{"origin":1,"estado":1, "createdAt":1, "tipoPrenda": 1, "categoria":1, "subCategoria":1});

        arr2 = await Business.aggregate([
            {
                '$match': 
                    filtro
            }, {
                '$group': {
                    '_id': {'categoria':'$categoria','subCategoria':'$subCategoria', 'tipoPrenda':'$tipoPrenda'},
                    'descontinuados': {
                    $sum: 1
                    }
                }
            }, {
                $sort:{"descontinuados":-1}
            }
            ]);
        // console.log(arr.length);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }


    // if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
    //     discontinuedCounts = discontinued.averageDiscontinuedMonthGeneral(arr);

    //     ddzm[0] = discontinuedCounts[lastMonth];
    //     ddzm[1] =  discontinuedCounts[month]; // valor actual de zara 
    //     ddzm[0] += discontinuedCounts[month + 23];
    //     ddzm[1] += discontinuedCounts[month + 24]; // valor actual de mango

    //     descontinuados = discontinuedCounts[month] + discontinuedCounts[month + 24];        
    //     origin = 'general';
        
    //     // determinar la diferencia porcentual en los precios
    //     differences = percentageDifferencesDiscount(ddzm[1], ddzm[0]);


        
    // } else if(req.query.origin === 'Zara'){
    //     origin = 'Zara';
    //     discontinuedCounts = discontinued.averageDiscontinuedMonthOrigin(arr);
    //     descontinuados = discontinuedCounts[month];

    //     // valores de diferencia de descontinuados
    //     ddzm[0] = discontinuedCounts[lastMonth];
    //     ddzm[1] = discontinuedCounts[month];

    //     // determinar la diferencia porcentual en los descuentos
    //     differences = percentageDifferencesDiscontinued(ddzm[1], ddzm[0]);

    // } else if(req.query.origin === 'Mango'){
    //     discontinuedCounts = avgDiscount.averageDiscount(arr);
        
    //     descontinuados = discontinuedCounts[month];
    //     // obtener descuentos promedio mes actual y anterior 
    //     ddzm[0] = discontinuedCounts[lastMonth];
    //     ddzm[1] = discontinuedCounts[month];;
    //     // determinar la diferencia porcentual en los descuentos
    //     differences = percentageDifferencesDiscontinued(ddzm[1], ddzm[0]);
    // }

    // respuesta para el frontend
    obj = { 
        arr2
        // arr,
        // descontinuados,
        // differences
    }


    res.status(200).json({obj});
}

// table info descuentos
exports.tableDiscountInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = queryGroupBy(filtro);
    filtro.estado = "promocion";
    filtro.discontinued = false;
    filtro.porcentajeDescuento = {$ne: undefined};
    

    // let arr;
    let arr2;
    let obj;
    // let values = [];
    // let origin = '';
    // let descuentoPromedio = 0;
    // let descuentoPromedioAnterior = 0;
    // let differences = [];
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
        // arr = await Business.find(filtro,{"precio":1, "descuento": 1, "origin":1,  "categoria":1, "subCategoria": 1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1, "discontinued":1});

        arr2 = await Business.aggregate([
            {
                '$match': 
                    filtro
            }, {
                '$group': {
                    '_id': {'categoria':'$categoria','subCategoria':'$subCategoria', 'tipoPrenda':'$tipoPrenda'},
                    'porcentajeDescuento': {
                    $avg: '$porcentajeDescuento'
                    }
                }
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

    // if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
    //     values = avgDiscount.averageDiscountMonthGeneral(arr);
    //     // console.log(values);
        
    //     // obtener precios promedio mes actual y anterior 


    //     if(values[month] === 0 || values[month + 24] === 0){
    //         descuentoPromedio = ((values[month] + values[month + 24])).toFixed(2);
    //         descuentoPromedioAnterior = ((values[lastMonth] + values[month + 23])).toFixed(2);
    //     } else {
    //         descuentoPromedio = ((values[month] + values[month + 24])/2).toFixed(2);
    //         descuentoPromedioAnterior = ((values[lastMonth] + values[month + 23])).toFixed(2);
    //     }
        
    //     // determinar la diferencia porcentual en los descuentos
    //     differences = percentageDifferencesDiscount(descuentoPromedio, descuentoPromedioAnterior);


        
    // } else if(req.query.origin === 'Zara'){
    //     values = avgDiscount.averageDiscount(arr);
    //     // obtener precios promedio mes actual y anterior 
    //     descuentoPromedio = values[month];
    //     descuentoPromedioAnterior = values[lastMonth];
    //     // determinar la diferencia porcentual en los descuentos
    //     differences = percentageDifferencesDiscount(descuentoPromedio, descuentoPromedioAnterior);

    // } else if(req.query.origin === 'Mango'){
    //     values = avgDiscount.averageDiscount(arr);
    //     // console.log(values);
    //     // obtener descuentos promedio mes actual y anterior 
    //     descuentoPromedio = values[month];
    //     descuentoPromedioAnterior = values[lastMonth];
    //     // determinar la diferencia porcentual en los descuentos
    //     differences = percentageDifferencesDiscount(descuentoPromedio, descuentoPromedioAnterior);
    // }


    // respuesta para el frontend
    obj = { 
        arr2
        // arr,
        // descuentoPromedio,
        // differences
    }


    res.status(200).json({obj});
}

exports.tableNewsInfo = async (req, res) => {
    let filtro = req.query;
    
    // filtro = organizarQuery(filtro);
    filtro = queryGroupBy(filtro);
    filtro.estado = "nuevo";
    filtro.discontinued = false;
    
    let arr;
    let arr2;
    let obj;
    // let values = [];
    // let origin = '';
    // let nuevosPromedio = 0;
    // let nuevosPromedioAnterior = 0;
    // let differences = [];

    //mes actual
    // let date = new Date();
    // let month = date.getMonth(); 
    // let lastMonth;
    // if(month === 0){
    //     lastMonth = 11;
    // } else {
    //     lastMonth = month - 1;
    // }

    try {
        arr2 = await Business.aggregate([
            {
                '$match': 
                    filtro
            }, {
                '$group': {
                    '_id': {'categoria':'$categoria','subCategoria':'$subCategoria', 'tipoPrenda':'$tipoPrenda'},
                    'nuevos': {
                    $sum: 1
                    }
                }
            }, {
                $sort:{"nuevos":-1}
            }
            ]);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    // if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
    //     values = avgNews.averageNewsMonthGeneral(arr);
    //     // obtener precios promedio mes actual y anterior 
    //     nuevosPromedio = (values[month] + values[month + 24]);
    //     nuevosPromedioAnterior = (values[lastMonth] + values[month + 23]);
    //     // determinar la diferencia porcentual en los precios
    //     differences = percentageDifferencesnews(nuevosPromedio, nuevosPromedioAnterior);


        
    // } else if(req.query.origin === 'Zara'){
    //     values = avgNews.averageNewsMonthOrigin(arr);
    //     // obtener precios promedio mes actual y anterior 
    //     nuevosPromedio = values[month];
    //     nuevosPromedioAnterior = values[lastMonth];
    //     // determinar la diferencia porcentual en los nuevoss
    //     differences = percentageDifferencesnews(nuevosPromedio, nuevosPromedioAnterior);

    // } else if(req.query.origin === 'Mango'){
    //     values = avgNews.averageNewsMonthOrigin(arr);
    //     // obtener descuentos promedio mes actual y anterior 
    //     nuevosPromedio = values[month];
    //     nuevosPromedioAnterior = values[lastMonth];
    //     // determinar la diferencia porcentual en los nuevoss
    //     differences = percentageDifferencesnews(nuevosPromedio, nuevosPromedioAnterior);
    // }


    // respuesta para el frontend
    obj = { 
        arr2
        // arr,
        // nuevosPromedio,
        // differences
    }


    res.status(200).json({obj});
}

exports.tableSKUInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.discontinued = false;
    let arr;
    let obj;
    let values = [];
    let valuesPrice = [];
    let origin = '';
    let SKU = 0;
    let SKUAnterior = 0;
    let differences = [];
    let precioPromedio = 0;
    let valuesNuevos = 0;
    let nuevosPromedio = 0;
    let descuentoPromedio = 0;
    let valuesDiscount = 0;
    let tasaFrescura = 0;

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
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1, "discontinued": 1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgSKU.averageSKUMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 
        SKU = (values[month] + values[month + 24]);
        SKUAnterior = (values[lastMonth] + values[month + 23]);

        valuesPrice = avgPrice.averagePriceMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 
        if(valuesPrice[month] === 0 || valuesPrice[month + 24] === 0){
            precioPromedio = ((valuesPrice[month] + valuesPrice[month + 24])).toFixed();
        } else {
            precioPromedio = ((valuesPrice[month] + valuesPrice[month + 24])/2).toFixed();
        }

        valuesNuevos = avgNews.averageNewsMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 
        nuevosPromedio = (valuesNuevos[month] + valuesNuevos[month + 24]);

        valuesDiscount = avgDiscount.averageDiscountMonthGeneral(arr);
        // console.log(values);
        // obtener precios promedio mes actual y anterior 
        if(valuesDiscount[month] === 0 || valuesDiscount[month + 24] === 0){
            descuentoPromedio = ((valuesDiscount[month] + valuesDiscount[month + 24])).toFixed(2);
        } else {
            descuentoPromedio = ((valuesDiscount[month] + valuesDiscount[month + 24])/2).toFixed(2);
        }

        // obtener tasa de tasaFrescura
        tasaFrescura = (nuevosPromedio/arr.length).toFixed(2);


        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencesSku(SKU, SKUAnterior);

        
    } else if(req.query.origin === 'Zara'){
        values = avgSKU.averageSKUMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        SKU = values[month];
        SKUAnterior = values[lastMonth];

        valuesPrice = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = valuesPrice[month].toFixed();

        valuesNuevos = avgNews.averageNewsMonthOrigin(arr);
        // obtener descuentos promedio mes actual y anterior 
        nuevosPromedio = valuesNuevos[month];

        valuesDiscount = avgDiscount.averageDiscount(arr);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = valuesDiscount[month].toFixed(2);

        // obtener tasa de tasaFrescura
        tasaFrescura = (nuevosPromedio/arr.length).toFixed(2);

        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencesSku(SKU, SKUAnterior);

    } else if(req.query.origin === 'Mango'){
        values = avgSKU.averageSKUMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        SKU = values[month];
        SKUAnterior = values[lastMonth];

        valuesPrice = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = valuesPrice[month].toFixed();

        valuesNuevos = avgNews.averageNewsMonthOrigin(arr);
        // obtener descuentos promedio mes actual y anterior 
        nuevosPromedio = valuesNuevos[month];

        valuesDiscount = avgDiscount.averageDiscount(arr);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = valuesDiscount[month].toFixed(2);

        // obtener tasa de tasaFrescura
        tasaFrescura = (nuevosPromedio/arr.length).toFixed(2);

        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencesSku(SKU, SKUAnterior);
    }


    // respuesta para el frontend
    obj = { 
        arr,
        SKU,
        differences,
        precioPromedio,
        nuevosPromedio,
        descuentoPromedio,
        tasaFrescura
    }


    res.status(200).json({obj});
}

// cards prendas 
exports.prendasInfo = async (req, res) => {
    let filtro = req.query;
    
    // TODO: organizar desde el .ts para enviar fecha y cambiar a organizarQueryTest
    filtro = organizarQueryPrenda(filtro);
    console.log(filtro);

    //mes actual
    let date = new Date();
    let month = date.getMonth();
    
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
percentageDifferencePrice = (current, before) => {
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
    } else {
        difference[0] = 0;
        difference[1] = 0;
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