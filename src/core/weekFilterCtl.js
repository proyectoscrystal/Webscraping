const Business = require("../domain/model/businessDao");
const avgPrice = require("./filtersScraping/weekFilters/priceWeeks");
const avgDiscountWeek = require("./filtersScraping/weekFilters/discountWeeks");
const avgNewsWeek = require("./filtersScraping/weekFilters/newsWeeks");
const discontinued = require("./filtersScraping/weekFilters/discontinuedWeeks")
const avgSKU = require("./filtersScraping/weekFilters/skuWeeks");
const cardsInfo = require("./filtersScraping/weekFilters/weekFilter");

organizarQueryTest = (query,fechaI,fechaF) => {
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

    obj.fecha_consulta = {$gte: fechaI, $lt: fechaF}


    return obj;
}

organizarQueryTest2 = (query,fechaI,fechaF) => {
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

    obj.fecha_consulta = {$gte: fechaI, $lte: fechaF}


    return obj;
}

// info cards response
exports.cardsInfoWeek = async (req, res) => {
    let filtro = req.query;
    let filtro2 = req.query;

    const {fechaActual, fechaInicio, fechaAnterior} = cardsInfo.rangoFechaSemanaCards();
    // implementar funcion para sacar el rango de fechas
    filtro = organizarQueryTest2(filtro,fechaInicio,fechaActual); 
    
    filtro2 = organizarQueryTest(filtro2,fechaAnterior,fechaInicio);
    


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
    let array;
    let array2;

    let arr;
    let arr2;
    let arrNews;
    let arrNews2;
    let arrSKU;
    let arrSKU2;
    let arrPrice;
    let arrPrice2;
    let obj;
    let values = 0;
    let values2 = 0;
    let discounts = 0;
    let discounts2 = 0;
    let newsCounts = 0;
    let newsCounts2 = 0;
    let discontinuedCounts = 0;
    let discontinuedCounts2 = 0;
    let skuCounts = 0;
    let skuCounts2 = 0;
    // variables para la diferencia entre mes actual y anterior
    let differencePrice = [];
    let differencePorcentage = [];
    let differenceNew = [];
    let differenceDiscontinued = [];
    let differenceSKU = [];
    let origin = '';
    let precioPromedio = 0;
    let discontinueds = 0;
    let discount = 0;
    let nuevos = 0;

    

    try {
        array = await Business.find(filtro,{"precio":1, "descuento": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1}, { allowDiskUse: true});
        // console.log("Total actual: ", array.length);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    try {
        array2 = await Business.find(filtro2,{"precio":1, "descuento": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1}, { allowDiskUse: true});
        // console.log("Total: ", array2.length);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    arr = cardsInfo.copyArray(array);
    arr2 = cardsInfo.copyArray(array2);

    // semana actual descuento
    arr = arr.filter((element) => {
        return element.descuento !== null;
    })
    // semana anterior descuento
    arr2 = arr2.filter((element) => {
        return element.descuento !== null;
    })
    discounts = cardsInfo.averageDiscountWeek(arr); // descuento semana actual y anterior
    discounts2 = cardsInfo.averageDiscountWeek(arr2); // descuento semana actual y anterior
    dzm[0] = discounts2;
    dzm[1] = discounts;

    // descuento promedio semana
    if(discounts === 0 || discounts2 === 0){
        discount = ((discounts + discounts2)).toFixed(2);
        differencePorcentage =  percentageDifferencesDiscount(dzm[1], dzm[0]);
    } else {
        discount = ((discounts + discounts2)/2).toFixed(2);
        differencePorcentage =  percentageDifferencesDiscount(dzm[1]/2, dzm[0]/2);
    }

    // precios cards
    arrPrice = cardsInfo.copyArray(array);
    arrPrice2 = cardsInfo.copyArray(array2);

    values = cardsInfo.averagePriceWeek(arrPrice); 
    values2 = cardsInfo.averagePriceWeek(arrPrice2); 
    zm[0] = values2;
    zm[1] =  values; 
    if(values === 0 || values2 === 0){
        precioPromedio = ((values + values2)).toFixed();
        differencePrice =  percentageDifferencePrice(zm[1], zm[0]); 
    } else {
        precioPromedio = ((values + values2)/2).toFixed();
        differencePrice =  percentageDifferencePrice(zm[1]/2, zm[0]/2); 
    }

    // semana actual nuevos
    arrNews = cardsInfo.copyArray(array);
    arrNews2 = cardsInfo.copyArray(array2)
    console.log(arrNews.length);
    console.log(arrNews2.length);

    arrNews = arrNews.filter((element) => {
        return element.estado === "nuevo";
    })
    // semana anterior nuevos
    arrNews2 = arrNews2.filter((element) => {
        return element.estado === "nuevo";
    })

    nzm[0] = arrNews2.length;
    nzm[1] =  arrNews.length; 

    nuevos = ((arrNews.length + arrNews2.length));
    differenceNew = percentageDifferencesnews(nzm[1], nzm[0]);

    // descontinuedos
    let arrDiscontinued = cardsInfo.copyArrayDiscontinued(array);
    let arrDiscontinued2 = cardsInfo.copyArrayDiscontinued(array2)
    

    // semana actual descontinuados
    arrDiscontinued = arrDiscontinued.filter((element) => {
        return element.estado === "descontinuado";
    })
    // semana anterior descontinuados
    arrDiscontinued2 = arrDiscontinued2.filter((element) => {
        return element.estado === "descontinuado";
    })

    
    ddzm[0] = arrDiscontinued2.length;
    ddzm[1] =  arrDiscontinued.length;
    discontinueds = (arrDiscontinued.length + arrDiscontinued2.length);
    differenceDiscontinued = percentageDifferencesDiscontinued(ddzm[1], ddzm[0]);

    // metodo para los sku por semana

    arrSKU = cardsInfo.copyArray(array);
    arrSKU2 = cardsInfo.copyArray(array2)


    skuCounts = cardsInfo.averageSKUWeek(arrSKU); 
    skuCounts2 = cardsInfo.averageSKUWeek(arrSKU2); 
    skuzm[0] = skuCounts2;
    skuzm[1] =  skuCounts;
    sku = (skuCounts + skuCounts2) ;
    differenceSKU = percentageDifferencesSku(skuzm[1], skuzm[0]);


    origin = 'general';
        

    

    
    // respuesta para el frontend
    obj = {  
        sku,
        precioPromedio, // precio promedio de ambas marcas 
        nuevos,
        origin,
        discount,
        discontinueds,
        differencePrice, // porcentaje de diferencia
        differencePorcentage,
        differenceNew,
        differenceSKU,
        differenceDiscontinued
    }


    res.status(200).json({obj});
}

// info charts week


// precio promedio por los ultimos 2 años y descuento promedio (charts)
exports.averagePriceWeek = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
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

    if (req.query.origin === undefined || Array.isArray(req.query.origin) ){
        values = avgPrice.averagePriceWeekGeneral(arr);
        origin = 'general';
        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        values = avgPrice.averagePriceWeekOrigin(arr);

    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
        values = avgPrice.averagePriceWeekOrigin(arr);
    }

    let weeks = ['Ene 1-7','Ene 8-14','Ene 15-21','Ene 22-31','Feb 1-11','Feb 12-18','Feb 19-25','Feb 26-29','Mar 1-11','Mar 12-18','Mar 19-25','Mar 26-31','Abr 1-8','Abr 9-15','Abr 16-22','Abr 26-31','May 1-6','May 7-13','May 14-20','May 21-31','Jun 1-10','Jun 11-17','Jun 18-24','Jun 25-30','Jul 1-8','Jul 9-15','Jul 16-22','Jul 23-31','Ago 1-5','Ago 6-12','Ago 13-19','Ago 20-26','Ago 27-31','Sep 1-9','Sep 10-16','Sep 17-23','Sep 24-30','Oct 1-7','Oct 8-14','Oct 15-21','Oct 22-31','Nov 1-5','Nov 6-11','Nov 12-18','Nov 19-25','Nov 26-30','Dic 1-9','Dic 10-17','Dic 18-24','Dic 25-31'];

    
    
    // respuesta para el frontend
    obj = {  
        origin,
        values,
        weeks,
    }


    res.status(200).json({obj});
}

// descuentos chart por semana
exports.averageDiscountWeek = async (req, res) => {
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
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1, "discontinued":1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgDiscountWeek.averageDiscountWeekGeneral(arr);        
        origin = 'general';
        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        values = avgDiscountWeek.averageDiscountWeeks(arr);

    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
        values = avgDiscountWeek.averageDiscountWeeks(arr);
    }

    let weeks = ['Ene 1-7','Ene 8-14','Ene 15-21','Ene 22-31','Feb 1-11','Feb 12-18','Feb 19-25','Feb 26-29','Mar 1-11','Mar 12-18','Mar 19-25','Mar 26-31','Abr 1-8','Abr 9-15','Abr 16-22','Abr 26-31','May 1-6','May 7-13','May 14-20','May 21-31','Jun 1-10','Jun 11-17','Jun 18-24','Jun 25-30','Jul 1-8','Jul 9-15','Jul 16-22','Jul 23-31','Ago 1-5','Ago 6-12','Ago 13-19','Ago 20-26','Ago 27-31','Sep 1-9','Sep 10-16','Sep 17-23','Sep 24-30','Oct 1-7','Oct 8-14','Oct 15-21','Oct 22-31','Nov 1-5','Nov 6-11','Nov 12-18','Nov 19-25','Nov 26-30','Dic 1-9','Dic 10-17','Dic 18-24','Dic 25-31'];

    

    
    // respuesta para el frontend
    obj = {       
        origin,
        values,
        weeks
    }


    res.status(200).json({obj});
}

// nuevos chart por semana
exports.averageNewWeek = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.estado = {$eq: "nuevo"};
    filtro.discontinued = false;
    // console.log(filtro);
    
    let arr;
    let obj;
    let values = [];
    let origin = '';

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1, "discontinued":1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (req.query.origin === undefined || Array.isArray(req.query.origin)) {
        values = avgNewsWeek.averageNewsWeekGeneral(arr);        
        origin = 'general';
        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        values = avgNewsWeek.averageNewsWeeks(arr);

    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
        values = avgNewsWeek.averageNewsWeeks(arr);
    }

    let weeks = ['Ene 1-7','Ene 8-14','Ene 15-21','Ene 22-31','Feb 1-11','Feb 12-18','Feb 19-25','Feb 26-29','Mar 1-11','Mar 12-18','Mar 19-25','Mar 26-31','Abr 1-8','Abr 9-15','Abr 16-22','Abr 26-31','May 1-6','May 7-13','May 14-20','May 21-31','Jun 1-10','Jun 11-17','Jun 18-24','Jun 25-30','Jul 1-8','Jul 9-15','Jul 16-22','Jul 23-31','Ago 1-5','Ago 6-12','Ago 13-19','Ago 20-26','Ago 27-31','Sep 1-9','Sep 10-16','Sep 17-23','Sep 24-30','Oct 1-7','Oct 8-14','Oct 15-21','Oct 22-31','Nov 1-5','Nov 6-11','Nov 12-18','Nov 19-25','Nov 26-30','Dic 1-9','Dic 10-17','Dic 18-24','Dic 25-31'];

    

    
    // respuesta para el frontend
    obj = {       
        origin,
        values,
        weeks
    }


    res.status(200).json({obj});
}

// descontinuados chart
exports.averageDiscontinuedWeek = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQuery(filtro);
    filtro.estado = {$eq: "descontinuado"};
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
        values = discontinued.averageDiscontinuedWeekGeneral(arr);        
        origin = 'general';
        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        values = discontinued.averageDiscontinuedWeekOrigin(arr);

    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
        values = discontinued.averageDiscontinuedWeekOrigin(arr);
    }

    let weeks = ['Ene 1-7','Ene 8-14','Ene 15-21','Ene 22-31','Feb 1-11','Feb 12-18','Feb 19-25','Feb 26-29','Mar 1-11','Mar 12-18','Mar 19-25','Mar 26-31','Abr 1-8','Abr 9-15','Abr 16-22','Abr 26-31','May 1-6','May 7-13','May 14-20','May 21-31','Jun 1-10','Jun 11-17','Jun 18-24','Jun 25-30','Jul 1-8','Jul 9-15','Jul 16-22','Jul 23-31','Ago 1-5','Ago 6-12','Ago 13-19','Ago 20-26','Ago 27-31','Sep 1-9','Sep 10-16','Sep 17-23','Sep 24-30','Oct 1-7','Oct 8-14','Oct 15-21','Oct 22-31','Nov 1-5','Nov 6-11','Nov 12-18','Nov 19-25','Nov 26-30','Dic 1-9','Dic 10-17','Dic 18-24','Dic 25-31'];

    

    
    // respuesta para el frontend
    obj = {       
        origin,
        values,
        weeks
    }


    res.status(200).json({obj});
}

// average SKU chart
exports.averageSKUWeek = async (req, res) => {
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
        values = avgSKU.averageSKUWeekGeneral(arr);        
        origin = 'general';
        
    } else if(req.query.origin === 'Zara'){
        origin = 'Zara';
        values = avgSKU.averageSKUWeeks(arr);

    } else if(req.query.origin === 'Mango'){
        origin = 'Mango';
        values = avgSKU.averageSKUWeeks(arr);
    }

    let weeks = ['Ene 1-7','Ene 8-14','Ene 15-21','Ene 22-31','Feb 1-11','Feb 12-18','Feb 19-25','Feb 26-29','Mar 1-11','Mar 12-18','Mar 19-25','Mar 26-31','Abr 1-8','Abr 9-15','Abr 16-22','Abr 26-31','May 1-6','May 7-13','May 14-20','May 21-31','Jun 1-10','Jun 11-17','Jun 18-24','Jun 25-30','Jul 1-8','Jul 9-15','Jul 16-22','Jul 23-31','Ago 1-5','Ago 6-12','Ago 13-19','Ago 20-26','Ago 27-31','Sep 1-9','Sep 10-16','Sep 17-23','Sep 24-30','Oct 1-7','Oct 8-14','Oct 15-21','Oct 22-31','Nov 1-5','Nov 6-11','Nov 12-18','Nov 19-25','Nov 26-30','Dic 1-9','Dic 10-17','Dic 18-24','Dic 25-31'];
    
    // respuesta para el frontend
    obj = {  
        origin,
        values,
        weeks
    }


    res.status(200).json({obj});
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
    } else {
        difference[0] = 0;
        difference[1] = 0;
        return difference;
    }

}

let percentageDifferencesnews = (current, before) => {
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

let percentageDifferencesDiscontinued = (current, before) => {
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

let percentageDifferencesSku = (current, before) => {
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