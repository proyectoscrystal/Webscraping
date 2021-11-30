const Business = require("../../domain/model/businessDao");

const coloresRGB = require("./../../utils/index");

organizarQueryfilter1 = (query) => {
    let obj = {};
    let inn = [];


    if(query.categoria !== undefined) {
        obj.categoria = {$in: query.categoria};
    }
    if(query.subCategoria !== undefined){
        obj.subCategoria = {$in: query.subCategoria};
    }
    if(query.tipoPrenda !== undefined){
        obj.tipoPrenda = {$in: query.tipoPrenda};
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
exports.colorGeneralChart = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryfilter1(filtro);
    filtro.discontinued = false;

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


    porcentajesCategoriaColors = GeneralColorChart(arr);
    
    // respuesta para el frontend
    obj = {  
       porcentajesCategoriaColors
    }


    res.status(200).json({obj});
}


let GeneralColorChart = (arr) => {
    obj = {};

    // areglos para extraer el color de los charts
    let colores = [];
    let coloresRGB = [];
    let coloresCount = [];

    // objeto que contiene los colores en letra y las cantidades colores.colores y colores.cantidades
    colores = coloresFrecuentes(arr);

    // colores en rgb 
    coloresRGB = coloresToRGB(colores.colores);

    // console.log(coloresRGB);
    // console.log(`color: ${colorExterior} - rgb: ${rgbExterior}`);



    // construyendo el objeto respuesta
    obj.colores =  colores.colores;
    obj.coloresCount = colores.cantidades;
    obj.coloresRGB = coloresRGB;
   
    // fin calcular porcentajes sku de las categorias



    return obj;
}

// metodo para calcular la frecuencia y colores de sku vista general colores pie chart
exports.colorGeneralChartMateriales = async (req, res) => {
    let filtro = req.query;
    
    filtro = organizarQueryfilter1(filtro);
    filtro.discontinued = false;

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


    porcentajesCategoriaColors = GeneralColorChart(arr);
    
    // respuesta para el frontend
    obj = {  
       porcentajesCategoriaColors
    }


    res.status(200).json({obj});
}

// metodos usados por el chart y info categoria
let coloresFrecuentes = (arr) => {
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
    // se crea en arreglo con objetos color-cantidad
    let arrayColorCantidad = [];
    arrayColorCantidad = arrayColoresSub.map((e,index) => {
        let obj = {};
        obj.color = arrayColoresSub[index];
        obj.cantidad = arrayCountsSub[index];
        // console.log(`color ${arrayColoresSub[index]} - cantidad ${arrayCountsSub[index]}`);
        return obj;
    })
    // determinar los colores y cantidadees de mayor frecuencia 
    arrayColorCantidad = bubble(arrayColorCantidad);
    // console.log(arrayColorCantidad);
    // conformar los arreglos con los colores y sus cantidades
    let arrayColores = [];
    let arrayCantidades = [];
    arrayColorCantidad.forEach((e,index) => {
        arrayColores.push(e.color);
        arrayCantidades.push(e.cantidad);
    });
    // prueba para ver los colores y cantidades
    // arrayCantidades.forEach((e,index) => {
    //     console.log(`${arrayColores[index]} ${arrayCantidades[index]}`);

    // })
    
    let obj = {};
    obj.colores = arrayColores;
    obj.cantidades = arrayCantidades;
    

    // retorna el color que mas se presenta 
    return obj;



}

let coloresToRGB = color => {
    let RGB = [];
    for (let i = 0; i < coloresRGB.colorSinRepetir.length; i++) {
        // console.log(`sub: ${coloresRGB.subCategoria[i]} - tipo: ${coloresRGB.tipoPrenda[i]}`);
        for (let j = 0; j < coloresRGB.colorSinRepetir.length; j++) {
            if (color[i] === coloresRGB.colorSinRepetir[j]) {
                RGB.push(coloresRGB.colorRGB[j]);
              }             
        }     
      }

      return RGB;
}

let bubble = (arr) => {
    var len = arr.length;
  
    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){ // this was missing
      if (arr[j].cantidad < arr[j + 1].cantidad) {
        // swap
        var tempC = arr[j].color;
        var temp = arr[j].cantidad;

        arr[j].color = arr[j+1].color;
        arr[j].cantidad = arr[j+1].cantidad;

        arr[j + 1].color = tempC;
        arr[j + 1].cantidad = temp;
      }
     }
    }
    if(arr.length > 10) {
        let removed = arr.splice(10);
    } else {
        let removed = arr.splice(arr.length);
    }



    return arr;
  }

