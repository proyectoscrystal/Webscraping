const Business = require("../domain/model/businessDao");
const avgPrice = require("./filtersScraping/AveragePrice");


exports.averagePrice = async (req, res) => {
    const filtro = req.body;
    let arr;
    let obj;
    let values = [];
    let origin = '';

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1});
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: "no hubo respuesta para los criterios de busqueda"});
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


    
    // respuesta para el frontend
    obj = {  
        sku:calculateSKU(arr),
        totalProductos: arr.length,
        precioPromedio: avgPrice.averagePriceYear(arr),
        origin,
        values,
    }


    res.status(200).json({obj});
}



let calculateSKU = (arr) => {
    let totalSKU = 0;
    arr.forEach(element => {totalSKU += element.numeroTallas;});
    return totalSKU;
}