const Business = require("../domain/model/businessDao");
const avgPrice = require("./filtersScraping/AveragePrice");
const avgDiscount = require("./filtersScraping/AverageDiscount");


// info cards response
exports.cardsInfo = async (req, res) => {
    const filtro = req.body;
    let arr;
    let obj;
    let origin = '';
    let values = '';
    let discounts = [];
    let discount = 0;
    let nuevos = 0;
    let descontinuados = 0;
    let monthPrice = 0; // mes actual de precio promedio

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }

    if (filtro.origin === undefined) {
        discounts = avgDiscount.averageDiscount(arr); // calcula los promedios por mes
        discount = avgDiscount.averageDiscountQuery(arr); // calcula el promedio de la peticion
        values = avgPrice.averagePriceMonthGeneral(arr); // calcula el precio promedio por mes dos marcas
        origin = 'general';
        // cantidad de prendas nuevas
        nuevos = news(arr);
        
    } else if(filtro.origin === 'Zara'){
        origin = 'Zara';
        discounts = avgDiscount.averageDiscount(arr); // calcula los promedios por mes
        discount = avgDiscount.averageDiscountQuery(arr);
        values = avgPrice.averagePriceMonthOrigin(arr);
        nuevos = news(arr);

    } else if(filtro.origin === 'Mango'){
        origin = 'Mango';
        discounts = avgDiscount.averageDiscount(arr); // calcula los promedios por mes
        discount = avgDiscount.averageDiscountQuery(arr);
        values = avgPrice.averagePriceMonthOrigin(arr);
        nuevos = news(arr);
        monthPrice = values[values.length - 1];
    }

    
    console.log(monthPrice);

    
    // respuesta para el frontend
    obj = {  
        sku:calculateSKU(arr),
        totalProductos: arr.length,
        precioPromedio: avgPrice.averagePriceYear(arr), // precio promedio de ambas marcas
        origin,
        nuevos,
        discounts, // guarda el descuento por mes de la consulta
        discount, // guarda el descuento de toda la consulta
        values, // precios promedios
        descontinuados,
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
        values = avgPrice.averagePriceMonthGeneral(arr);
        discounts = avgDiscount.averageDiscount(arr);
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
