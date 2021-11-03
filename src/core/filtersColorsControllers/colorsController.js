const Business = require("../../domain/model/businessDao");

// const avgPrice = require("./filtersScraping/AveragePrice");
// const avgDiscount = require("./filtersScraping/AverageDiscount");
// const avgNews = require("./filtersScraping/newProducts")
// const avgSKU = require("./filtersScraping/SKU");
// const prendasInfo = require("./filtersScraping/prendasInfo");

organizarQueryfilter1 = (query) => {
    let obj = {};
    let inn = [];

    if(query.origin !== undefined) {
        obj.origin = {$in: query.origin};
    }
    if(query.sku !== ''){
        obj.estado = {$ne: "descontinuados"};
    }
    if(query.discount !== ''){
        obj.descuento = {$ne: null};
    }
    if(query.new !== ''){
        obj.estado = {$eq: "nuevo"};
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


    return obj;
}

// info cards response
exports.colorGeneralCategory = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryfilter1(filtro);
    // console.log(filtro);

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 


    let arr;
    let obj;
    let porcentajesCategoriaColors;
    let discounts = [];
    let descontinuados = 0;
    let newsCounts = 0;
    let skuCounts = 0;
    // variables para la diferencia entre mes actual y anterior
    let categorias = ["Hombre","Mujer","Kids"];
    let differencePorcentage = [];
    let differenceNew = [];
    let differenceDiscontinued = [];
    let differenceSKU = [];
    let origin = '';
    let precioPromedio = '';
    let discount = 0;

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "origin":1, "color":1, "categoria":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1});
        // console.log(arr.length);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }


    porcentajesCategoriaColors = SKUporcentage(arr);
    


    // if (req.query.origin === undefined || Array.isArray(req.query.origin) ) {
    //     origin = "General";
    // } else if(req.query.origin === 'Zara'){
    //     origin = "Zara";

    // } else if(req.query.origin === 'Mango'){
    //     origin = "Mango";
    // }



    
    // respuesta para el frontend
    obj = {  
       categorias,
       porcentajesCategoriaColors
    }


    res.status(200).json({obj});
}
// fin info cards response

// metodo para calcular la frecuencia de sku
let SKUporcentage = (arr) => {
    obj = {};
    let mujer = 0;
    let mujerPorcentage = 0; 
    let hombre = 0;
    let hombrePorcentage = 0;
    let kids = 0;
    let kidsPorcentage = 0;
    colors = [];
    countColors = [];
    total = 0;

    arr.forEach( element => {
        if(element.categoria === "Mujer") {
            mujer += element.numeroTallas;

        } else if(element.categoria === "Hombre") {
            hombre += element.numeroTallas;
        } else if(element.categoria === "Niño" || element.categoria === "Niña") {
            kids += element.numeroTallas;
        }
    });
    total = (mujer + kids + hombre);
    



    obj.total = total;
    obj.mujerSKU = mujer; 
    obj.hombreSKU = hombre; 
    obj.kidsSKU = kids; 


    return obj;
}
