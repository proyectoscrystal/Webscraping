
exports.cardsPrendas = (arr) => {
    // en el arreglo response, primeros cuatro datos de mujer, despues los de hombre y por ultimo los kids
    // datos primero cantidad nuevos, descontinuados, promocion, totalsku
    let category = ['Mujer','Hombre','Niño','Niña']
    let women = [];
    let men = [];
    let kids = [];

    women = infoCards(arr, category[0])
    men = infoCards(arr, category[1])
    kids = infoCardsKids(arr, category)


    
    return women.concat(men).concat(kids);


}

infoCards = (arr, category) => {
    let response = [];

    let cantidadNuevos = arr.filter( element =>  element.categoria === category &&  element.estado === 'nuevo');

    let cantidadDescontinuados = arr.filter( element =>  element.categoria === category &&  element.estado === 'descontinuado');

    let cantidadPromotion = arr.filter( element =>  element.categoria === category &&  element.estado === 'promocion');

    let cantidadSku = 0; 
    arr.forEach(element => {
        if (element.categoria === category) {
            cantidadSku += element.numeroTallas;
        }
    });

    if(cantidadNuevos.length !== 0){
        response.push(cantidadNuevos.length);
    }else {
        response.push(0);
    }

    if(cantidadDescontinuados.length !== 0){
        response.push(cantidadDescontinuados.length);
    }else {
        response.push(0);
    }

    if(cantidadPromotion.length !== 0){
        response.push(cantidadPromotion.length);
    }else {
        response.push(0);
    }

    response.push(cantidadSku);

    return response;

}

infoCardsKids = (arr, category) => {
    let response = [];

    let cantidadNuevos = arr.filter( element =>  element.categoria === category[2] || element.categoria === category[3]  &&  element.estado === 'nuevo');

    let cantidadDescontinuados = arr.filter( element =>  element.categoria === category[2] || element.categoria === category[3] &&  element.estado === 'descontinuado');

    let cantidadPromotion = arr.filter( element =>  element.categoria === category[2] || element.categoria === category[3] &&  element.estado === 'promocion');

    let cantidadSku = 0; 
    arr.forEach(element => {
        if (element.categoria === category[2] || element.categoria === category[3]) {
            cantidadSku += element.numeroTallas;
        }
    });

    if(cantidadNuevos.length !== 0){
        response.push(cantidadNuevos.length);
    }else {
        response.push(0);
    }

    if(cantidadDescontinuados.length !== 0){
        response.push(cantidadDescontinuados.length);
    }else {
        response.push(0);
    }

    if(cantidadPromotion.length !== 0){
        response.push(cantidadPromotion.length);
    }else {
        response.push(0);
    }

    response.push(cantidadSku);

    return response;

}