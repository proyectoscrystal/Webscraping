const Business = require("../../../domain/model/businessDao");



exports.rangoFechaSemanaCards = () => {
    let obj = {};
    var date = new Date();
    let day = parseInt(date.getDay()); // 0-6 dia de la semana
    let dayTemp = day;
    var fecha = date.toISOString(); // fecha en format 2021-11-29T17:39:30.482Z
    let fechaFormat = fecha.split("T")[0]; // fecha format aaaa-mm-dd 
    let actualYear = parseInt(fechaFormat.split("-")[0]); // valor del mes actual
    let mesActual = parseInt(fechaFormat.split("-")[1]); // valor del mes actual
    let mesDia = parseInt(fechaFormat.split("-")[2]); // valor del dia del mes


        obj.actualWeekFinal = `${actualYear}-${mesActual}-${mesDia}`; // fecha final o actual de la semana en curso
    let prueba = 1;

    if(day === 0) {
    obj.actualWeekInicio = `${actualYear}-${mesActual}-${mesDia}`;
    
    } else if(day !== 0){
        for(let i = dayTemp; i >= 0; i--){
    
        mesDia--;
        day--;
        
        if(mesDia === 0){
        mesDia = 28;
        mesActual--;
        }
        
        if(dayTemp === 0){
            
        }
        
        }
    }
}


