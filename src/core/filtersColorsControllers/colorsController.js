const Business = require("../../domain/model/businessDao");

const coloresRGB = require("./../../utils/index");


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

// metodo para calcular la frecuencia y colores de sku vista general colores pie chart
exports.colorGeneralCategory = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryfilter1(filtro);
    console.log(filtro);

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


    porcentajesCategoriaColors = SKUGeneralCategory(arr);
    
    // respuesta para el frontend
    obj = {  
       porcentajesCategoriaColors
    }


    res.status(200).json({obj});
}
// fin info cards response


let SKUGeneralCategory = (arr) => {
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

    // areglos para extraer el color de CATEGORIAS
    arrayMujer = [];
    arrayHombre = [];
    arrayKids = [];
    arrayExterior = [];
    arrayInterior = [];
    arrayCalzado = [];
    arrayAccesorios = [];

    // calculando el porcentaje de las categorias
    arr.forEach( element => {
        if(element.categoria === "Mujer") {
            mujer += element.numeroTallas;
            arrayMujer.push(element);

        } else if(element.categoria === "Hombre") {
            hombre += element.numeroTallas;
            arrayHombre.push(element);
        } else if(element.categoria === "Niño" || element.categoria === "Niña") {
            kids += element.numeroTallas;
            arrayKids.push(element);
        }

        if(element.subCategoria === "ropa exterior") {
            exterior += element.numeroTallas;
            arrayExterior.push(element);

        } else if(element.subCategoria === "ropa interior") {
            interior += element.numeroTallas;
            arrayInterior.push(element);
        } else if(element.subCategoria === "calzado") {
            calzado += element.numeroTallas;
            arrayCalzado.push(element);
        } else if(element.subCategoria === "accesorios") {
            accesorios += element.numeroTallas;
            arrayAccesorios.push(element);
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

    // colores por categoria y subcategorias
    let colorMujer;
    let colorHombre;
    let colorKids;
    let colorExterior;
    let colorInterior;
    let colorCalzado;
    let colorAccesorios;

    colorMujer = colorFrecuente(arrayMujer);
    colorHombre = colorFrecuente(arrayHombre);
    colorKids = colorFrecuente(arrayKids);
    colorExterior = colorFrecuente(arrayExterior);
    colorInterior = colorFrecuente(arrayInterior);
    colorCalzado = colorFrecuente(arrayCalzado);
    colorAccesorios = colorFrecuente(arrayAccesorios);

    // colores en rgb 
    let rgbMujer = colorToRGB(colorMujer);
    let rgbHombre = colorToRGB(colorHombre);
    let rgbKids = colorToRGB(colorKids);
    let rgbExterior = colorToRGB(colorExterior);
    let rgbInterior = colorToRGB(colorInterior);
    let rgbCalzado = colorToRGB(colorCalzado);
    let rgbAccesorios = colorToRGB(colorAccesorios);

    let arrayColoresCategoria = [rgbHombre,rgbMujer,rgbKids]
    // console.log(arrayColoresCategoria);
    // console.log(`color: ${colorExterior} - rgb: ${rgbExterior}`);



    // construyendo el objeto respuesta
    obj.total = total;
    // porcentajes vista general seccion categorias
    obj.mujerPorcentageSKU = mujer; 
    obj.hombrePorcentageSKU = hombre; 
    obj.kidsPorcentageSKU = kids; 
    // cantidades en seccion subcategoria
    obj.exterior = exterior; 
    obj.interior = interior; 
    obj.calzado = calzado; 
    obj.accesorios = accesorios; 
    // porcentajes en seccion subcategorias
    obj.exteriorPorcentaje = exteriorPorcentaje; 
    obj.interiorPorcentaje = interiorPorcentaje; 
    obj.calzadoPorcentaje = calzadoPorcentaje; 
    obj.accesoriosPorcentaje = accesoriosPorcentaje;
    // colores frecuentes tanto en categorias como en subcategorias vista general colores 
    // llevados a su equivalente en rgb
    obj.colorMujer = colorMujer; 
    obj.colorHombre = colorHombre; 
    obj.colorKids = colorKids; 
    obj.colorExterior = colorExterior; 
    obj.colorInterior = colorInterior; 
    obj.colorCalzado = colorCalzado; 
    obj.colorAccesorios = colorAccesorios; 
    obj.rgbColoresCategoria = arrayColoresCategoria; 
    obj.rgbExterior = rgbExterior; 
    obj.rgbInterior = rgbInterior; 
    obj.rgbCalzado = rgbCalzado; 
    obj.rgbAccesorios = rgbAccesorios; 
    // fin calcular porcentajes sku de las categorias



    return obj;
}

// respuesta a la peticion desde vista mujer colores
exports.colorMujerCategory = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryfilter1(filtro);
    // console.log(filtro);

    //mes actual
    let date = new Date();
    let month = date.getMonth(); 


    let arr;
    let obj;
    let porcentajesCategoriaColors;

    try {
        arr = await Business.find(filtro,{"base64":1,"precio":1, "descuento": 1, "origin":1, "color":1, "categoria":1, "subCategoria": 1, "use":1,"estado":1, "createdAt":1, "numeroTallas":1, "tipoPrenda": 1, "tag": 1});
        // console.log(arr.length);
    } catch (error) {
        console.log("no se obtuvo respuesta");
        return res.json({mensaje: 1}); // 1 quiere decir que no hubieron coincidencias para la busqueda
    }


    porcentajesCategoriaColors = SKUMujerCategory(arr);
    
    // respuesta para el frontend
    obj = {  
       porcentajesCategoriaColors
    }


    res.status(200).json({obj});
}

let SKUMujerCategory = (arr) => {
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

    // areglos para extraer el color de CATEGORIAS
    arrayMujer = [];
    arrayHombre = [];
    arrayKids = [];
    arrayExterior = [];
    arrayInterior = [];
    arrayCalzado = [];
    arrayAccesorios = [];

    // calculando el porcentaje de las categorias
    arr.forEach( element => {
        if(element.categoria === "Mujer") {
            mujer += element.numeroTallas;
            arrayMujer.push(element);

        } else if(element.categoria === "Hombre") {
            hombre += element.numeroTallas;
            arrayHombre.push(element);
        } else if(element.categoria === "Niño" || element.categoria === "Niña") {
            kids += element.numeroTallas;
            arrayKids.push(element);
        }

        if(element.subCategoria === "ropa exterior") {
            exterior += element.numeroTallas;
            arrayExterior.push(element);

        } else if(element.subCategoria === "ropa interior") {
            interior += element.numeroTallas;
            arrayInterior.push(element);
        } else if(element.subCategoria === "calzado") {
            calzado += element.numeroTallas;
            arrayCalzado.push(element);
        } else if(element.subCategoria === "accesorios") {
            accesorios += element.numeroTallas;
            arrayAccesorios.push(element);
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

    // colores por categoria y subcategorias
    let colorMujer;
    let colorHombre;
    let colorKids;
    let colorExterior;
    let colorInterior;
    let colorCalzado;
    let colorAccesorios;

    colorMujer = colorFrecuente(arrayMujer);
    colorHombre = colorFrecuente(arrayHombre);
    colorKids = colorFrecuente(arrayKids);
    colorExterior = colorFrecuente(arrayExterior);
    colorInterior = colorFrecuente(arrayInterior);
    colorCalzado = colorFrecuente(arrayCalzado);
    colorAccesorios = colorFrecuente(arrayAccesorios);

    // colores en rgb 
    let rgbMujer = colorToRGB(colorMujer);
    let rgbHombre = colorToRGB(colorHombre);
    let rgbKids = colorToRGB(colorKids);
    let rgbExterior = colorToRGB(colorExterior);
    let rgbInterior = colorToRGB(colorInterior);
    let rgbCalzado = colorToRGB(colorCalzado);
    let rgbAccesorios = colorToRGB(colorAccesorios);

    let arrayColoresCategoria = [rgbHombre,rgbMujer,rgbKids]
    // console.log(arrayColoresCategoria);
    // console.log(`color: ${colorExterior} - rgb: ${rgbExterior}`);



    // construyendo el objeto respuesta
    obj.total = total;
    // porcentajes vista general seccion categorias
    obj.mujerPorcentageSKU = mujer; 
    obj.hombrePorcentageSKU = hombre; 
    obj.kidsPorcentageSKU = kids; 
    // cantidades en seccion subcategoria
    obj.exterior = exterior; 
    obj.interior = interior; 
    obj.calzado = calzado; 
    obj.accesorios = accesorios; 
    // porcentajes en seccion subcategorias
    obj.exteriorPorcentaje = exteriorPorcentaje; 
    obj.interiorPorcentaje = interiorPorcentaje; 
    obj.calzadoPorcentaje = calzadoPorcentaje; 
    obj.accesoriosPorcentaje = accesoriosPorcentaje;
    // colores frecuentes tanto en categorias como en subcategorias vista general colores 
    // llevados a su equivalente en rgb
    obj.colorMujer = colorMujer; 
    obj.colorHombre = colorHombre; 
    obj.colorKids = colorKids; 
    obj.colorExterior = colorExterior; 
    obj.colorInterior = colorInterior; 
    obj.colorCalzado = colorCalzado; 
    obj.colorAccesorios = colorAccesorios; 
    obj.rgbColoresCategoria = arrayColoresCategoria; 
    obj.rgbExterior = rgbExterior; 
    obj.rgbInterior = rgbInterior; 
    obj.rgbCalzado = rgbCalzado; 
    obj.rgbAccesorios = rgbAccesorios; 
    // fin calcular porcentajes sku de las categorias



    return obj;
}

let colorFrecuente = (arr) => {
    // metodo para saber el color que mas se repite para subcategoria
    let arrayColoresSub = [];
    let arrayCountsSub = [];

    // ser crea un arreglo con todos los colores
    for (let i = 0; i < arr.length; i++) {
            arrayColoresSub.push(arr[i].color);
    }
    // se eliminan los repetidos
    arrayColoresSub = [...new Set(arrayColoresSub)];
    //se inicializa el array count con la cantidad de colores existente
    arrayColoresSub.forEach((element, index) => {
        arrayCountsSub[index] = 0;
    })
    // se llena el array countsSub con la cantidad de repeticiones por color
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arrayColoresSub.length; j++) {
            if (arr[i].color === arrayColoresSub[j]) {
                arrayCountsSub[j] += 1;
            }
        }
    }
    // arrayColoresSub.forEach((e,index) => {
    //     console.log(`color ${arrayColoresSub[index]} - cantidad ${arrayCountsSub[index]} `);
    // })
    // determinar el color de mayor frecuencia 
    let mayor = 0;
    let indice = 0;

    arrayColoresSub.forEach((element, index) => {
        if (arrayCountsSub[index] > mayor)
        {
            mayor = arrayCountsSub[index];
            
            indice = index;
        };

    })
    

    // retorna el color que mas se presenta 
    return arrayColoresSub[indice];



}

let colorToRGB = color => {
    for (let i = 0; i < coloresRGB.colorSinRepetir.length; i++) {
        // console.log(`sub: ${coloresRGB.subCategoria[i]} - tipo: ${coloresRGB.tipoPrenda[i]}`);
        if (color === coloresRGB.colorSinRepetir[i]) {
          return  coloresRGB.colorRGB[i]
        }      
      }
      return color;
}


