const Business = require("../domain/model/businessDao");
const avgPrice = require("./filtersScraping/AveragePrice");
const avgDiscount = require("./filtersScraping/AverageDiscount");
const avgNews = require("./filtersScraping/newProducts")


// info cards response
exports.cardsInfo = async (req, res) => {
    const filtro = req.body;
    //mes actual
    let date = new Date();
    let month = date.getMonth() - 1;

    // arreglo de mango y zara para los descuentos 
    let zm = [];

    let arr;
    let obj;
    let origin = '';
    let values = [];
    let value = [];
    let discounts = [];
    let discount = 0;
    let nuevos = 0;
    let descontinuados = 0;
    let currentMonthPrice = 0; // mes actual precio
    // variables para la diferencia entre mes actual y anterior
    let differencePrice = [];
    let differencePorcentage = [];
    let differenceNew = [];
    let differenceDiscontinued = [];
    let differenceSKU = [];

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (filtro.origin === undefined) {

        discounts = avgDiscount.averageDiscountMonthGeneral(arr); // calcula los promedios por mes x 2 años una marca
        

        values = avgPrice.averagePriceMonthGeneral(arr); // calcula el precio promedio por mes dos marcas 2 años
        zm[0] = values[month - 1];
        zm[1] =  values[month]; // valor actual de zara 
        zm[0] += values[month + 23];
        zm[1] += values[month + 24]; // valor actual de mango

        // newsCard = avgNews;
        origin = 'general';
        // cantidad de prendas nuevas

        nuevos = news(arr);

        // array de dos valores para setear la diferencia entre mes actual y anterior
        differencePrice =  percentageDifferencePrice(zm[1], zm[0]);
        differencePorcentage =  percentageDifferencesDiscount(discounts[month], discounts[month - 1]);


        
    } else if(filtro.origin === 'Zara'){
        origin = 'Zara';
        discounts = avgDiscount.averageDiscount(arr); // calcula los promedios por mes una marca 2 años
        value = avgPrice.averagePriceMonthOrigin(arr); // promedio precio de la marca seleccionada por mes 2 años
        // newsCard = avgNews;
        nuevos = news(arr);
        // valores de diferencia de porcentajes
        differencePrice =  percentageDifferencePrice(value[month], value[month - 1]);
        differencePorcentage =  percentageDifferencesDiscount(discounts[month], discounts[month - 1]);

    } else if(filtro.origin === 'Mango'){
        origin = 'Mango';
        discounts = avgDiscount.averageDiscount(arr); // calcula los promedios por mes
        value = avgPrice.averagePriceMonthOrigin(arr); // precio promedio por mes dos años una marca
        // newsCard = avgNews;
        nuevos = news(arr);
        differencePrice =  percentageDifferencePrice(value[month], value[month - 1]);
        differencePorcentage =  percentageDifferencesDiscount(discounts[month], discounts[month - 1]);
    }

    


    
    // respuesta para el frontend
    obj = {  
        sku:calculateSKU(arr),
        totalProductos: arr.length,
        precioPromedio: avgPrice.averagePriceYear(arr), // precio promedio de ambas marcas 
        discount:  avgDiscount.averageDiscountQuery(arr),  // guarda el descuento de toda la consulta
        origin,
        nuevos,
        discounts, // guarda el descuento por mes de la consulta
        values, // precio promedio una marca un año
        descontinuados,
        differencePrice, // porcentaje de diferencia
        differencePorcentage,
    }


    res.status(200).json({obj});
}
// fin info cards response



// precio promedio por los ultimos 2 años y descuento promedio (charts y tablas)
exports.averagePrice = async (req, res) => {
    const filtro = req.body;
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

    if (filtro.origin === undefined) {
        values = avgPrice.averagePriceMonthGeneral(arr);
        discounts = avgDiscount.averageDiscount(arr);
        origin = 'general';
        
    } else if(filtro.origin === 'Zara'){
        origin = 'Zara';
        values = avgPrice.averagePriceMonthOrigin(arr);

    } else if(filtro.origin === 'Mango'){
        origin = 'Mango';
        values = avgPrice.averagePriceMonthOrigin(arr);
    }


    
    // respuesta para el frontend
    obj = {  
        precioPromedio: avgPrice.averagePriceYear(arr),
        origin,
        values,
    }


    res.status(200).json({obj});
}

// descuento promedio
exports.averageDiscount = async (req, res) => {
    const filtro = req.body;
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

    if (filtro.origin === undefined) {
        discounts = avgDiscount.averageDiscountMonthGeneral(arr);
        origin = 'general';
        
    } else if(filtro.origin === 'Zara'){
        origin = 'Zara';
        values = avgPrice.averagePriceMonthOrigin(arr);
        discounts = avgDiscount.averageDiscount(arr);

    } else if(filtro.origin === 'Mango'){
        origin = 'Mango';
        values = avgPrice.averagePriceMonthOrigin(arr);
        discounts = avgDiscount.averageDiscount(arr);
    }

    // cantidad de prendas nuevas
    let nuevos = 0;
    arr.forEach(element => {
        if (element.tag === 'nuevo') {
            nuevos += 1;
        }
    });


    
    // respuesta para el frontend
    obj = {  
        sku:calculateSKU(arr),
        totalProductos: arr.length,
        precioPromedio: avgPrice.averagePriceYear(arr),
        origin,
        nuevos,
        values,
        discounts
    }


    res.status(200).json({obj});
}

// descuento promedio
exports.averageNews = async (req, res) => {
    const filtro = req.body;
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

    if (filtro.origin === undefined) {
        discounts = avgDiscount.averageDiscountMonthGeneral(arr);
        origin = 'general';
        
    } else if(filtro.origin === 'Zara'){
        origin = 'Zara';
        values = avgPrice.averagePriceMonthOrigin(arr);
        discounts = avgDiscount.averageDiscount(arr);

    } else if(filtro.origin === 'Mango'){
        origin = 'Mango';
        values = avgPrice.averagePriceMonthOrigin(arr);
        discounts = avgDiscount.averageDiscount(arr);
    }

    // cantidad de prendas nuevas
    let nuevos = 0;
    arr.forEach(element => {
        if (element.tag === 'nuevo') {
            nuevos += 1;
        }
    });


    
    // respuesta para el frontend
    obj = {  
        sku:calculateSKU(arr),
        totalProductos: arr.length,
        precioPromedio: avgPrice.averagePriceYear(arr),
        origin,
        nuevos,
        values,
        discounts
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
    if (current >= before) {
        difference[0] = 1;
        difference[1] =  parseFloat(Math.abs( ((before*100)/current)-100 ).toFixed(2));
        return difference;
    } else if (current < before) {
        difference[0] = 0;
        difference[1] =  parseFloat(Math.abs( ((current*100)/before)-100 ).toFixed(2));
        return difference;
    }

}

percentageDifferencesDiscount = (current, before) => {
    // 1 positive 0 negative
    let difference = [];
    if (current >= before) {
        difference[0] = 1;
        difference[1] =  parseFloat((current-before).toFixed(2));
        return difference;
    } else if (current < before) {
        difference[0] = 0;
        difference[1] =  parseFloat((before-current).toFixed(2));
        return difference;
    }

}