const Business = require("../../../domain/model/businessDao");
const moment = require("moment");




exports.rangoFechaSemanaCards = () => {
    let obj = {};
    let startdate = moment().format("YYYY-MM-DD");
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
        totalDiscount += parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    });

    if(totalDiscount !== 0){
        return (totalDiscount/arr.length);
    } 
    return 0;
}

exports.averagePriceWeek = arr => {
    totalPrice = 0;
    arr.forEach(element => {
        if (element.descuento === null) {
        totalPrice += element.precio;
        } else if (element.descuento !== null) {
        totalPrice += element.descuento;
        }
    });

    if(totalPrice !== 0){
        return (totalPrice/arr.length);
    } 
    return 0;
}

exports.averageSKUWeek = arr => {
    totalSKU = 0;
    arr.forEach(element => {
        totalSKU += element.numeroTallas;
    });
    return totalSKU;
}

exports.copyArray = array => {
    let copy = [];
    for ( var i = 0; i < array.length; i++ ) {
        if (array[i].estado === "descontinuado") {
            continue
        }else {
            copy[ i ] = array[ i ];
        }
     }

     return copy;
}

exports.copyArrayDiscontinued = array => {
    let copy = [];
    for ( var i = 0; i < array.length; i++ ) {
        copy[ i ] = array[ i ];
     }

     return copy;
}
