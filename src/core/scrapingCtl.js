const Business = require("../domain/model/businessDao");
const avgPrice = require("./filtersScraping/AveragePrice");


exports.averagePrice = async (req, res) => {
    const filtro = req.body;
    let arr;

    // ver que valores llegan desde el front
    // console.log(filtro);

    arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "imageName": 1, "origin":1, "color":1, "categoria":1,"caracteristicas":1, "use":1,"estado":1, "createdAt":1, "talla":1, "numeroTallas":1, "tipoPrenda": 1});

    
    // respuesta para el frontend
    let obj = {  
        sku:calculateSKU(arr),
        totalProductos: arr.length,
        precioPromedio: avgPrice.averagePriceYear(arr)
    }


    res.status(200).json({obj});
}



let calculateSKU = (arr) => {
    let totalSKU = 0;
    arr.forEach(element => {
        totalSKU += element.numeroTallas;
    });
    return totalSKU;
}