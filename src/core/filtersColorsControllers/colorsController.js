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
    let coloresGeneral;

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "origin":1, "color":1, "categoria":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1});
        // console.log(arr.length);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }


    porcentajesCategoriaColors = SKUporcentage(arr);



    
    // respuesta para el frontend
    obj = {  
       porcentajesCategoriaColors
    }


    res.status(200).json({obj});
}
// fin info cards response

// metodo para calcular la frecuencia de sku
let SKUporcentage = (arr) => {
    obj = {};
    let mujer = 0;
    let hombre = 0;
    let kids = 0;
    let exterior = 0; 
    let interior = 0;
    let calzado = 0;
    let accesorios = 0;
    let exteriorPorcentaje = 0; 
    let interiorPorcentaje = 0;
    let calzadoPorcentaje = 0;
    let accesoriosPorcentaje = 0;
    colors = [];
    countColors = [];
    total = 0;
    totalsku = 0;

    // calculando el porcentaje de las categorias
    arr.forEach( element => {
        if(element.categoria === "Mujer") {
            mujer += element.numeroTallas;

        } else if(element.categoria === "Hombre") {
            hombre += element.numeroTallas;
        } else if(element.categoria === "Niño" || element.categoria === "Niña") {
            kids += element.numeroTallas;
        }

        if(element.subCategoria === "ropa exterior") {
            exterior += element.numeroTallas;

        } else if(element.subCategoria === "ropa interior") {
            interior += element.numeroTallas;
        } else if(element.subCategoria === "calzado") {
            calzado += element.numeroTallas;
        } else if(element.subCategoria === "accesorios") {
            accesorios += element.numeroTallas;
        }


    });
    total = (mujer + kids + hombre);
    totalsku = (exterior + interior + calzado + accesorios);
    
    // porcentajes de categorias
    mujer = parseFloat(Math.abs( (((mujer*100)/total)) ).toFixed(2));
    hombre = parseFloat(Math.abs( (((hombre*100)/total)) ).toFixed(2));
    kids = parseFloat(Math.abs( (((kids*100)/total)) ).toFixed(2));

    // porcentajes de subcategoria y totalesku
    exteriorPorcentaje = parseFloat(Math.abs( (((exterior*100)/totalsku)) ).toFixed(2));
    interiorPorcentaje = parseFloat(Math.abs( (((interior*100)/totalsku)) ).toFixed(2));
    calzadoPorcentaje = parseFloat(Math.abs( (((calzado*100)/totalsku)) ).toFixed(2));
    accesoriosPorcentaje = parseFloat(Math.abs( (((accesorios*100)/totalsku)) ).toFixed(2));

    obj.total = total;
    obj.mujerPorcentageSKU = mujer; 
    obj.hombrePorcentageSKU = hombre; 
    obj.kidsPorcentageSKU = kids; 
    obj.exterior = exterior; 
    obj.interior = interior; 
    obj.calzado = calzado; 
    obj.accesorios = accesorios; 
    obj.exteriorPorcentaje = exteriorPorcentaje; 
    obj.interiorPorcentaje = interiorPorcentaje; 
    obj.calzadoPorcentaje = calzadoPorcentaje; 
    obj.accesoriosPorcentaje = accesoriosPorcentaje; 
    // fin calcular porcentajes sku de las categorias

    // 


    return obj;
}
