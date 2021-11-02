const Business = require("../domain/model/businessDao");
const avgPrice = require("./filtersScraping/AveragePrice");
const avgDiscount = require("./filtersScraping/AverageDiscount");
const avgNews = require("./filtersScraping/newProducts")
const avgSKU = require("./filtersScraping/SKU");
const prendasInfo = require("./filtersScraping/prendasInfo");

organizarQueryTest = (query) => {
    let obj = {};
    let inn = [];

    // console.log(query);

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
        obj.fecha_consulta = {$eq: query.fechaInicio}
    }
    if(query.fechaInicio !== undefined && query.fechaFin !== undefined) {
        obj.fecha_consulta = {$gte: query.fechaInicio, $lte: query.fechaFin}
    }
    return obj;
}

// info cards response
exports.cardsInfo = async (req, res) => {
    let filtro = req.query;
    console.log(filtro);
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
    // arreglo de mango y zara para los SKU
    let skuzm = [];

    let arr;
    let obj;
    let values = [];
    let discounts = [];
    let descontinuados = 0;
    let newsCounts = 0;
    let skuCounts = 0;
    // variables para la diferencia entre mes actual y anterior
    let differencePrice = [];
    let differencePorcentage = [];
    let differenceNew = [];
    let differenceDiscontinued = [];
    let differenceSKU = [];
    let origin = '';
    let precioPromedio = '';
    let discount = 0;

    

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1});
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
        discount = ((discounts[month] + discounts[month + 24])/2).toFixed(2);


        values = avgPrice.averagePriceMonthGeneral(arr); // calcula el precio promedio por mes dos marcas 2 años
        zm[0] = values[month - 1];
        zm[1] =  values[month]; // valor actual de zara 
        zm[0] += values[month + 23];
        zm[1] += values[month + 24]; // valor actual de mango
        precioPromedio = ((values[month] + values[month + 24]) / 2).toFixed(2);


        newsCounts = avgNews.averageNewsMonthGeneral(arr); // calcula el precio promedio por mes dos marcas 2 años
        nzm[0] = newsCounts[month - 1];
        nzm[1] =  newsCounts[month]; // valor actual de zara 
        nzm[0] += newsCounts[month + 23];
        nzm[1] += newsCounts[month + 24]; // valor actual de mango


        skuCounts = avgSKU.averageSKUMonthGeneral(arr); // calcula el precio promedio por mes dos marcas 2 años
        skuzm[0] = skuCounts[month - 1];
        skuzm[1] =  skuCounts[month]; // valor actual de zara 
        skuzm[0] += skuCounts[month + 23];
        skuzm[1] += skuCounts[month + 24]; // valor actual de mango


        origin = 'general';        

        // array de dos valores para setear la diferencia entre mes actual y anterior
        differencePrice =  percentageDifferencePrice(zm[1], zm[0]);
        differencePorcentage =  percentageDifferencesDiscount(dzm[1]/2, dzm[0]/2);
        differenceNew = percentageDifferencesnews(nzm[1], nzm[0]);
        differenceSKU = percentageDifferencesSku(skuzm[1], skuzm[0]);
        
    // } else if(filtro.origin === 'Zara'){
    } else if(req.query.origin === 'Zara'){
        // console.log("entro a zara");
        origin = 'Zara';
        discounts = avgDiscount.averageDiscount(arr); // calcula los promedios por mes una marca 2 años
        values = avgPrice.averagePriceMonthOrigin(arr); // promedio precio de la marca seleccionada por mes 2 años
        precioPromedio = values[month];
        newsCounts = avgNews.averageNewsMonthOrigin(arr); // promedio precio de la marca seleccionada por mes 2 años
        skuCounts = avgSKU.averageSKUMonthOrigin(arr); // calcula el precio promedio por mes dos marcas 2 años
        discount = discounts[month];
        
        // valores de diferencia de porcentajes
        dzm[0] = discounts[month - 1];
        dzm[1] = discounts[month];
        
        // valores de diferencia de nuevos
        nzm[0] = newsCounts[month - 1];
        nzm[1] = newsCounts[month];
        
        // valores de diferencia de nuevos
        skuzm[0] = skuCounts[month - 1];
        skuzm[1] = skuCounts[month];

        zm[0] = values[month - 1];
        zm[1] =  values[month]; // valor actual 

        differencePrice =  percentageDifferencePrice(zm[1], zm[0]);
        differencePorcentage =  percentageDifferencesDiscount(dzm[1], dzm[0]);
        differenceNew = percentageDifferencesnews(nzm[1], nzm[0]);
        differenceSKU = percentageDifferencesSku(skuzm[1], skuzm[0]);

    // } else if(filtro.origin === 'Mango'){
    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
        discounts = avgDiscount.averageDiscount(arr); // calcula los promedios por mes
        values = avgPrice.averagePriceMonthOrigin(arr); // precio promedio por mes dos años una marca
        precioPromedio = values[month];
        newsCounts = avgNews.averageNewsMonthOrigin(arr); // promedio precio de la marca seleccionada por mes 2 años
        skuCounts = avgSKU.averageSKUMonthOrigin(arr); // calcula el precio promedio por mes dos marcas 2 años
        discount = discounts[month];
        

        // valores de diferencia de porcentajes
        dzm[0] = discounts[month - 1];
        dzm[1] = discounts[month];

        // valores de diferencia de nuevos
        nzm[0] = newsCounts[month - 1];
        nzm[1] = newsCounts[month];

        // valores de diferencia de nuevos
        skuzm[0] = skuCounts[month - 1];
        skuzm[1] = skuCounts[month];

        zm[0] = values[month - 1];
        zm[1] =  values[month]; // valor actual de zara 

        differencePrice =  percentageDifferencePrice(zm[1], zm[0]);
        differencePorcentage =  percentageDifferencesDiscount(dzm[1], dzm[0]);
        differenceNew = percentageDifferencesnews(nzm[1], nzm[0]);
        differenceSKU = percentageDifferencesSku(skuzm[1], skuzm[0]);
    }

    
    // respuesta para el frontend
    obj = {  
        sku:calculateSKU(arr),
        totalProductos: arr.length,
        precioPromedio, // precio promedio de ambas marcas 
        nuevos : news(arr),
        origin,
        discount,
        discounts, // guarda el descuento
        values, // precio promedio 
        newsCounts, // nuevos 
        skuCounts,
        descontinuados,
        differencePrice, // porcentaje de diferencia
        differencePorcentage,
        differenceNew,
        differenceSKU
    }


    res.status(200).json({obj});
}
// fin info cards response


// precio promedio por los ultimos 2 años y descuento promedio (charts)
exports.averagePrice = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryTest(filtro);
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

// descuento promedio
exports.averageDiscount = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryTest(filtro);
    filtro.descuento = {$ne: null};
    // console.log(filtro);
    
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

// nuevos charts
exports.averageNews = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryTest(filtro);
    filtro.estado = {$eq: "nuevo"};
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

// fin average news


// average SKU chart
exports.averageSKU = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryTest(filtro);
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

// para las tablas de la vista categoria prenda
exports.tableCategoryInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryTest(filtro);
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


exports.tablePriceInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryTest(filtro);
    let arr;
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

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "tallasAgotadas":1, "tipoPrenda": 1, "tag": 1}).limit(300);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin) ){
        values = avgPrice.averagePriceMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = (values[month] + values[month + 24]);
        precioPromedioAnterior = (values[month - 1] + values[month + 23]);

        valuesDiscount = avgDiscount.averageDiscountMonthGeneral(arr);
        // console.log(values);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = ((valuesDiscount[month] + valuesDiscount[month + 24])/2);
        
        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencePrice(precioPromedio, precioPromedioAnterior);

        
    } else if(req.query.origin === 'Zara'){
        values = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = values[month];
        precioPromedioAnterior = values[month - 1];

        valuesDiscount = avgDiscount.averageDiscount(arr);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = valuesDiscount[month];
        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencePrice(precioPromedio, precioPromedioAnterior);

    } else if(req.query.origin === 'Mango'){
        values = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = values[month];
        precioPromedioAnterior = values[month - 1];

        valuesDiscount = avgDiscount.averageDiscount(arr);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = valuesDiscount[month];
        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencePrice(precioPromedio, precioPromedioAnterior);
    }


    // respuesta para el frontend
    obj = { 
        arr,
        precioPromedio,
        differences,
        descuentoPromedio
    }


    res.status(200).json({obj});
}

// table info
exports.tableDiscountInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryTest(filtro);
    filtro.descuento = {$ne: null};

    let arr;
    let obj;
    let values = [];
    let origin = '';
    let descuentoPromedio = 0;
    let descuentoPromedioAnterior = 0;
    let differences = [];

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1}).limit(500);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgDiscount.averageDiscountMonthGeneral(arr);
        // console.log(values);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = ((values[month] + values[month + 24])/2);
        descuentoPromedioAnterior = ((values[month - 1] + values[month + 23])/2);
        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencesDiscount(descuentoPromedio, descuentoPromedioAnterior);


        
    } else if(req.query.origin === 'Zara'){
        values = avgDiscount.averageDiscount(arr);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = values[month];
        descuentoPromedioAnterior = values[month - 1];
        // determinar la diferencia porcentual en los descuentos
        differences = percentageDifferencesDiscount(descuentoPromedio, descuentoPromedioAnterior);

    } else if(req.query.origin === 'Mango'){
        values = avgDiscount.averageDiscount(arr);
        // console.log(values);
        // obtener descuentos promedio mes actual y anterior 
        descuentoPromedio = values[month];
        descuentoPromedioAnterior = values[month - 1];
        // determinar la diferencia porcentual en los descuentos
        differences = percentageDifferencesDiscount(descuentoPromedio, descuentoPromedioAnterior);
    }


    // respuesta para el frontend
    obj = { 
        arr,
        descuentoPromedio,
        differences
    }


    res.status(200).json({obj});
}

exports.tableNewsInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryTest(filtro);
    filtro.estado = {$eq: "nuevo"};
    
    let arr;
    let obj;
    let values = [];
    let origin = '';
    let nuevosPromedio = 0;
    let nuevosPromedioAnterior = 0;
    let differences = [];

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 

    try {
        arr = await Business.find(filtro,{"precio":1,"origin":1, "descuento": 1,"categoria":1,"subCategoria": 1,"createdAt":1, "tipoPrenda": 1, "tag": 1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgNews.averageNewsMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 
        nuevosPromedio = (values[month] + values[month + 24]);
        nuevosPromedioAnterior = (values[month - 1] + values[month + 23]);
        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencesnews(nuevosPromedio, nuevosPromedioAnterior);


        
    } else if(req.query.origin === 'Zara'){
        values = avgNews.averageNewsMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        nuevosPromedio = values[month];
        nuevosPromedioAnterior = values[month - 1];
        // determinar la diferencia porcentual en los nuevoss
        differences = percentageDifferencesnews(nuevosPromedio, nuevosPromedioAnterior);

    } else if(req.query.origin === 'Mango'){
        values = avgNews.averageNewsMonthOrigin(arr);
        // obtener descuentos promedio mes actual y anterior 
        nuevosPromedio = values[month];
        nuevosPromedioAnterior = values[month - 1];
        // determinar la diferencia porcentual en los nuevoss
        differences = percentageDifferencesnews(nuevosPromedio, nuevosPromedioAnterior);
    }


    // respuesta para el frontend
    obj = { 
        arr,
        nuevosPromedio,
        differences
    }


    res.status(200).json({obj});
}

exports.tableSKUInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryTest(filtro);
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

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgSKU.averageSKUMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 
        SKU = (values[month] + values[month + 24]);
        SKUAnterior = (values[month - 1] + values[month + 23]);

        valuesPrice = avgPrice.averagePriceMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = (valuesPrice[month] + valuesPrice[month + 24]).toFixed(2);

        valuesNuevos = avgNews.averageNewsMonthGeneral(arr);
        // obtener precios promedio mes actual y anterior 
        nuevosPromedio = (valuesNuevos[month] + valuesNuevos[month + 24]);

        valuesDiscount = avgDiscount.averageDiscountMonthGeneral(arr);
        // console.log(values);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = ((valuesDiscount[month] + valuesDiscount[month + 24])/2).toFixed(2);

        // obtener tasa de tasaFrescura
        tasaFrescura = (nuevosPromedio/arr.length).toFixed(2);


        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencesSku(SKU, SKUAnterior);

        
    } else if(req.query.origin === 'Zara'){
        values = avgSKU.averageSKUMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        SKU = values[month];
        SKUAnterior = values[month - 1];

        valuesPrice = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = valuesPrice[month].toFixed(2);

        valuesNuevos = avgNews.averageNewsMonthOrigin(arr);
        // obtener descuentos promedio mes actual y anterior 
        nuevosPromedio = valuesNuevos[month];

        valuesDiscount = avgDiscount.averageDiscount(arr);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = valuesDiscount[month];

        // obtener tasa de tasaFrescura
        tasaFrescura = (nuevosPromedio/arr.length).toFixed(2);

        // determinar la diferencia porcentual en los precios
        differences = percentageDifferencesSku(SKU, SKUAnterior);

    } else if(req.query.origin === 'Mango'){
        values = avgSKU.averageSKUMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        SKU = values[month];
        SKUAnterior = values[month - 1];

        valuesPrice = avgPrice.averagePriceMonthOrigin(arr);
        // obtener precios promedio mes actual y anterior 
        precioPromedio = valuesPrice[month].toFixed(2);

        valuesNuevos = avgNews.averageNewsMonthOrigin(arr);
        // obtener descuentos promedio mes actual y anterior 
        nuevosPromedio = valuesNuevos[month];

        valuesDiscount = avgDiscount.averageDiscount(arr);
        // obtener precios promedio mes actual y anterior 
        descuentoPromedio = valuesDiscount[month];

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

exports.prendasInfo = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryTest(filtro);

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

percentageDifferencesDiscount = (current, before) => {
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

organizarQuery = (query) => {
    let obj = {};
    if(query.origin !== ''){
        obj.origin = query.origin;
    }
    if(query.categoria !== ''){
        obj.categoria = query.categoria; 
    }
    if(query.subCategoria !== ''){
        obj.subCategoria = query.subCategoria;
    }
    if(query.tipoPrenda !== ''){
        obj.tipoPrenda = query.tipoPrenda; 
    }
    if(query.color !== ''){
        obj.color = query.color; 
    }


    return obj;
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

