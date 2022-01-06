const Business = require("../../../domain/model/businessDao");
const moment = require("moment");




exports.rangoFechaSemanaCards = () => {
    let obj = {};
    let startdate = moment().add(1, 'days');
    startdate = startdate.format("YYYY-MM-DD");
    let startActualWeek = moment();
    let lastWeekDay = moment();
    startActualWeek = startActualWeek.subtract(7, "days"); // fecha 7 dias antes
    startActualWeek = startActualWeek.format("YYYY-MM-DD");
    lastWeekDay = lastWeekDay.subtract(15, "days"); // fecha 15 dias antes
    lastWeekDay = lastWeekDay.format("YYYY-MM-DD");    
        
    obj.fechaActual = startdate;
    obj.fechaInicio = startActualWeek;
    obj.fechaAnterior = lastWeekDay;

    return obj;

}


exports.averageDiscountWeek = arr => {
    totalDiscount = 0;
    arr.forEach(element => {
        let { precio, descuento} = element;
        totalDiscount += parseFloat(Math.abs( ((descuento*100)/precio)-100 ));
    });

    if(totalDiscount !== 0){
        return (totalDiscount/arr.length);
    } 
    return 0;
}

exports.averagePriceWeek = arr => {
    let priceTotal = 0;
    arr.forEach(element => {
        if(element.descuento === null && (element.origin === "Zara" || element.origin === "Mango")){
            priceTotal += element.precio; 
              
        } else if (element.descuento !== null && (element.origin === "Zara" || element.origin === "Mango")){
            priceTotal += element.descuento;
        }
    });
    

    if(priceTotal !== 0){
        return (priceTotal/arr.length);
    } 
    return 0;
}

exports.averageSKUWeek = arr => {
    totalSKU = 0;
    arr.forEach(element => {
        let { numeroTallas } = element;
        totalSKU += numeroTallas;
    });
    return totalSKU;
}

exports.copyArray = array => {
    let copy = [];
    for ( var i = 0; i < array.length; i++ ) {
        if (array[i].discontinued === false && array[i].discontinued !== undefined) {
            copy.push(array[i]);
        }
     }

     return copy;
}

exports.copyArraySKU = array => {
    let copy = [];
    for ( var i = 0; i < array.length; i++ ) {
        if (array[i].discontinued === false && (array[i].origin === "Zara" || array[i].origin === "Mango") ) {
            copy.push(array[i]);
        }
     }

     return copy;
}

exports.copyArrayNew = array => {
    let copy = [];
    for ( var i = 0; i < array.length; i++ ) {
        if (array[i].estado === "nuevo") {
            copy.push(array[i]);
        }
     }

     return copy;
}

exports.copyArrayPromocion = array => {
    let copy = [];
    for ( var i = 0; i < array.length; i++ ) {
        if (array[i].estado === "promocion") {
            copy.push(array[ i ]);
        }
     }

     return copy;
}

exports.copyArrayDiscontinued = array => {
    let copy = 0;
    for ( var i = 0; i < array.length; i++ ) {
        if (array[i].estado === "descontinuado" && array[i].discontinued !== undefined) {
            copy++;
        }
     }

     return copy;
}
