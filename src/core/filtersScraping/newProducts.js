exports.averageNewsMonthOrigin = (arr) => {
    let eneZ = 0;
    let febZ = 0;
    let marZ = 0;
    let abrZ = 0;
    let mayZ = 0;
    let junZ = 0;
    let julZ = 0;
    let agosZ = 0;
    let sepZ = 0;
    let octZ = 0;
    let novZ = 0;
    let dicZ = 0;
  
    let valuesZ = [];
  
    let ene = 0;
    let feb = 0;
    let mar = 0;
    let abr = 0;
    let may = 0;
    let jun = 0;
    let jul = 0;
    let agos = 0;
    let sep = 0;
    let oct = 0;
    let nov = 0;
    let dic = 0;
  
    let date = new Date();
    let currentMonth = date.getMonth() - 1;  
    // let count = 1;
  
    try {
      arr.forEach((element) => {        
        let currentYear = date.getFullYear();
        let lastYear = date.getFullYear() - 1;
        let fecha = element.createdAt + ""; // funcion para obtener la fecha
        let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
        let year = parseInt(fecha.split(" ")[3]);
        // console.log(year);
  
        if (year === currentYear) {
          if (mes === "Jan" && element.tag === "nuevo") return eneZ++; 
          if (mes === "Feb" && element.tag === "nuevo") return febZ++;
          if (mes === "Mar" && element.tag === "nuevo") return marZ++;
          if (mes === "Apr" && element.tag === "nuevo") return abrZ++;
          if (mes === "May" && element.tag === "nuevo") return mayZ++;
          if (mes === "Jun" && element.tag === "nuevo") return junZ++;
          if (mes === "Jul" && element.tag === "nuevo") return julZ++;
          if (mes === "Aug" && element.tag === "nuevo") return agosZ++;
          if (mes === "Sep" && element.tag === "nuevo") return sepZ++;
          if (mes === "Oct" && element.tag === "nuevo") return octZ++;
          if (mes === "Nov" && element.tag === "nuevo") return novZ++;
          if (mes === "Dec" && element.tag === "nuevo") return dicZ++;
        }
  
        if (year === lastYear) {
          if (mes === "Jan" && element.tag === "nuevo") return ene++;
          if (mes === "Feb" && element.tag === "nuevo") return feb++;
          if (mes === "Mar" && element.tag === "nuevo") return mar++;
          if (mes === "Apr" && element.tag === "nuevo") return abr++;
          if (mes === "May" && element.tag === "nuevo") return may++;
          if (mes === "Jun" && element.tag === "nuevo") return jun++;
          if (mes === "Jul" && element.tag === "nuevo") return jul++;
          if (mes === "Aug" && element.tag === "nuevo") return agos++;
          if (mes === "Sep" && element.tag === "nuevo") return sep++;
          if (mes === "Oct" && element.tag === "nuevo") return oct++;
          if (mes === "Nov" && element.tag === "nuevo") return nov++;
          if (mes === "Dec" && element.tag === "nuevo") return dic++;
        }
      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    valuesZ[0] = eneZ;
    valuesZ[1] = febZ;
    valuesZ[2] = marZ;
    valuesZ[3] = abrZ;
    valuesZ[4] = mayZ;
    valuesZ[5] = junZ;
    valuesZ[6] = julZ;
    valuesZ[7] = agosZ;
    valuesZ[8] = sepZ;
    valuesZ[9] = octZ;
    valuesZ[10] = novZ;
    valuesZ[11] = dicZ;
  
    valuesZ[12] = ene;
    valuesZ[13] = feb;
    valuesZ[14] = mar;
    valuesZ[15] = abr;
    valuesZ[16] = may;
    valuesZ[17] = jun;
    valuesZ[18] = jul;
    valuesZ[19] = agos;
    valuesZ[20] = sep;
    valuesZ[21] = oct;
    valuesZ[22] = nov;
    valuesZ[23] = dic;
    valuesZ[24] = currentMonth; // mes actual
  
    return valuesZ;
}


exports.averageNewsMonthGeneral = (arr) => {
    let eneZ = 0;
    let febZ = 0;
    let marZ = 0;
    let abrZ = 0;
    let mayZ = 0;
    let junZ = 0;
    let julZ = 0;
    let agosZ = 0;
    let sepZ = 0;
    let octZ = 0;
    let novZ = 0;
    let dicZ = 0;
  
    let valuesZ = [];
  
    let ene = 0;
    let feb = 0;
    let mar = 0;
    let abr = 0;
    let may = 0;
    let jun = 0;
    let jul = 0;
    let agos = 0;
    let sep = 0;
    let oct = 0;
    let nov = 0;
    let dic = 0;
  
    
    let date = new Date();
    let currentMonth = date.getMonth() - 1;
    // let count = 1;
  
    try {
      arr.forEach((element) => {
        let currentYear = date.getFullYear();
        let lastYear = date.getFullYear() - 1;
        let fecha = element.createdAt + ""; // funcion para obtener la fecha
        let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
        let year = parseInt(fecha.split(" ")[3]);
  
        if (year === currentYear && element.origin == 'Zara') {
          if (mes === "Jan" && element.tag === "nuevo") return eneZ++;
          if (mes === "Feb" && element.tag === "nuevo") return febZ++;
          if (mes === "Mar" && element.tag === "nuevo") return marZ++;
          if (mes === "Apr" && element.tag === "nuevo") return abrZ++;
          if (mes === "May" && element.tag === "nuevo") return mayZ++;
          if (mes === "Jun" && element.tag === "nuevo") return junZ++;
          if (mes === "Jul" && element.tag === "nuevo") return julZ++;
          if (mes === "Aug" && element.tag === "nuevo") return agosZ++;
          if (mes === "Sep" && element.tag === "nuevo") return sepZ++;
          if (mes === "Oct" && element.tag === "nuevo") return octZ++;
          if (mes === "Nov" && element.tag === "nuevo") return novZ++;
          if (mes === "Dec" && element.tag === "nuevo") return dicZ++;
        }
  
        if (year === lastYear  && element.origin == 'Zara') {
          if (mes === "Jan" && element.tag === "nuevo") return ene++;
          if (mes === "Feb" && element.tag === "nuevo") return feb++;
          if (mes === "Mar" && element.tag === "nuevo") return mar++;
          if (mes === "Apr" && element.tag === "nuevo") return abr++;
          if (mes === "May" && element.tag === "nuevo") return may++;
          if (mes === "Jun" && element.tag === "nuevo") return jun++;
          if (mes === "Jul" && element.tag === "nuevo") return jul++;
          if (mes === "Aug" && element.tag === "nuevo") return agos++;
          if (mes === "Sep" && element.tag === "nuevo") return sep++;
          if (mes === "Oct" && element.tag === "nuevo") return oct++;
          if (mes === "Nov" && element.tag === "nuevo") return nov++;
          if (mes === "Dec" && element.tag === "nuevo") return dic++;
          
        }
      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    valuesZ[0] = eneZ;
    valuesZ[1] = febZ;
    valuesZ[2] = marZ;
    valuesZ[3] = abrZ;
    valuesZ[4] = mayZ;
    valuesZ[5] = junZ;
    valuesZ[6] = julZ;
    valuesZ[7] = agosZ;
    valuesZ[8] = sepZ;
    valuesZ[9] = octZ;
    valuesZ[10] = novZ;
    valuesZ[11] = dicZ;
  
    valuesZ[12] = ene;
    valuesZ[13] = feb;
    valuesZ[14] = mar;
    valuesZ[15] = abr;
    valuesZ[16] = may;
    valuesZ[17] = jun;
    valuesZ[18] = jul;
    valuesZ[19] = agos;
    valuesZ[20] = sep;
    valuesZ[21] = oct;
    valuesZ[22] = nov;
    valuesZ[23] = dic;
  
    // datos de mango desde la posicion [24] a la [47]
  
    let enem = 0;
    let febm = 0;
    let marm = 0;
    let abrm = 0;
    let maym = 0;
    let junm = 0;
    let julm = 0;
    let agosm = 0;
    let sepm = 0;
    let octm = 0;
    let novm = 0;
    let dicm = 0;
  
    let ene2 = 0;
    let feb2 = 0;
    let mar2 = 0;
    let abr2 = 0;
    let may2 = 0;
    let jun2 = 0;
    let jul2 = 0;
    let agos2 = 0;
    let sep2 = 0;
    let oct2 = 0;
    let nov2 = 0;
    let dic2 = 0;
  
    // let count = 1;
  
    try {
      arr.forEach((element) => {
        let date = new Date();
        let currentYear = date.getFullYear();
        let lastYear = date.getFullYear() - 1;
        let fecha = element.createdAt + ""; // funcion para obtener la fecha
        let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
        let year = parseInt(fecha.split(" ")[3]);
  
        if (year === currentYear && element.origin == 'Mango') {
          if (mes === "Jan" && element.tag === "nuevo") return enem++;
          if (mes === "Feb" && element.tag === "nuevo") return febm++;
          if (mes === "Mar" && element.tag === "nuevo") return marm++;
          if (mes === "Apr" && element.tag === "nuevo") return abrm++;
          if (mes === "May" && element.tag === "nuevo") return maym++;
          if (mes === "Jun" && element.tag === "nuevo") return junm++;
          if (mes === "Jul" && element.tag === "nuevo") return julm++;
          if (mes === "Aug" && element.tag === "nuevo") return agosm++;
          if (mes === "Sep" && element.tag === "nuevo") return sepm++;
          if (mes === "Oct" && element.tag === "nuevo") return octm++;
          if (mes === "Nov" && element.tag === "nuevo") return novm++;
          if (mes === "Dec" && element.tag === "nuevo") return dicm++;
        }
  
        if (year === lastYear  && element.origin == 'Mango') {
          if (mes === "Jan" && element.tag === "nuevo") return ene2++;
          if (mes === "Feb" && element.tag === "nuevo") return feb2++;
          if (mes === "Mar" && element.tag === "nuevo") return mar2++;
          if (mes === "Apr" && element.tag === "nuevo") return abr2++;
          if (mes === "May" && element.tag === "nuevo") return may2++;
          if (mes === "Jun" && element.tag === "nuevo") return jun2++;
          if (mes === "Jul" && element.tag === "nuevo") return jul2++;
          if (mes === "Aug" && element.tag === "nuevo") return agos2++;
          if (mes === "Sep" && element.tag === "nuevo") return sep2++;
          if (mes === "Oct" && element.tag === "nuevo") return oct2++;
          if (mes === "Nov" && element.tag === "nuevo") return nov2++;
          if (mes === "Dec" && element.tag === "nuevo") return dic2++;
        }
      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    valuesZ[24] = enem;
    valuesZ[25] = febm;
    valuesZ[26] = marm;
    valuesZ[27] = abrm;
    valuesZ[28] = maym;
    valuesZ[29] = junm;
    valuesZ[30] = julm;
    valuesZ[31] = agosm;
    valuesZ[32] = sepm;
    valuesZ[33] = octm;
    valuesZ[34] = novm;
    valuesZ[35] = dicm;
  
    // valores del año anterior mango
    valuesZ[36] = ene2;
    valuesZ[37] = feb2;
    valuesZ[38] = mar2;
    valuesZ[39] = abr2;
    valuesZ[40] = may2;
    valuesZ[41] = jun2;
    valuesZ[42] = jul2;
    valuesZ[43] = agos2;
    valuesZ[44] = sep2;
    valuesZ[45] = oct2;
    valuesZ[46] = nov2;
    valuesZ[47] = dic2;
    valuesZ[48] = currentMonth;

    
  
    return valuesZ;
  
  };