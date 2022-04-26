exports.averageSKUMonthOrigin = (arr) => {
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
  
        if (year === currentYear && element.discontinued === false) {
          if (mes === "Jan")  return eneZ += element.numeroTallas; 
          if (mes === "Feb")  return febZ += element.numeroTallas;
          if (mes === "Mar")  return marZ += element.numeroTallas;
          if (mes === "Apr")  return abrZ += element.numeroTallas;
          if (mes === "May")  return mayZ += element.numeroTallas;
          if (mes === "Jun")  return junZ += element.numeroTallas;
          if (mes === "Jul")  return julZ += element.numeroTallas;
          if (mes === "Aug")  return agosZ += element.numeroTallas;
          if (mes === "Sep")  return sepZ += element.numeroTallas;
          if (mes === "Oct")  return octZ += element.numeroTallas;
          if (mes === "Nov")  return novZ += element.numeroTallas;
          if (mes === "Dec")  return dicZ += element.numeroTallas;
        }
  
        if (year === lastYear && element.discontinued === false) {
          if (mes === "Jan") return ene += element.numeroTallas;
          if (mes === "Feb") return feb += element.numeroTallas;
          if (mes === "Mar") return mar += element.numeroTallas;
          if (mes === "Apr") return abr += element.numeroTallas;
          if (mes === "May") return may += element.numeroTallas;
          if (mes === "Jun") return jun += element.numeroTallas;
          if (mes === "Jul") return jul += element.numeroTallas;
          if (mes === "Aug") return agos += element.numeroTallas;
          if (mes === "Sep") return sep += element.numeroTallas;
          if (mes === "Oct") return oct += element.numeroTallas;
          if (mes === "Nov") return nov += element.numeroTallas;
          if (mes === "Dec") return dic += element.numeroTallas;
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


exports.averageSKUMonthGeneral = (arr) => {
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

    // variables mango
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
  
    // variables Gef
    let eneG = 0;
    let febG = 0;
    let marG = 0;
    let abrG = 0;
    let mayG = 0;
    let junG = 0;
    let julG = 0;
    let agosG = 0;
    let sepG = 0;
    let octG = 0;
    let novG = 0;
    let dicG = 0;
  
    let ene3 = 0;
    let feb3 = 0;
    let mar3 = 0;
    let abr3 = 0;
    let may3 = 0;
    let jun3 = 0;
    let jul3 = 0;
    let agos3 = 0;
    let sep3 = 0;
    let oct3 = 0;
    let nov3 = 0;
    let dic3 = 0;
  
    
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
  
        if (year === currentYear && element.origin == 'Zara' && element.discontinued === false) {
          if (mes === "Jan") return eneZ += element.numeroTallas;
          if (mes === "Feb") return febZ += element.numeroTallas;
          if (mes === "Mar") return marZ += element.numeroTallas;
          if (mes === "Apr") return abrZ += element.numeroTallas;
          if (mes === "May") return mayZ += element.numeroTallas;
          if (mes === "Jun") return junZ += element.numeroTallas;
          if (mes === "Jul") return julZ += element.numeroTallas;
          if (mes === "Aug") return agosZ += element.numeroTallas;
          if (mes === "Sep") return sepZ += element.numeroTallas;
          if (mes === "Oct") return octZ += element.numeroTallas;
          if (mes === "Nov") return novZ += element.numeroTallas;
          if (mes === "Dec") return dicZ += element.numeroTallas;
        }
  
        if (year === lastYear  && element.origin == 'Zara' && element.discontinued === false) {
          if (mes === "Jan") return ene += element.numeroTallas;
          if (mes === "Feb") return feb += element.numeroTallas;
          if (mes === "Mar") return mar += element.numeroTallas;
          if (mes === "Apr") return abr += element.numeroTallas;
          if (mes === "May") return may += element.numeroTallas;
          if (mes === "Jun") return jun += element.numeroTallas;
          if (mes === "Jul") return jul += element.numeroTallas;
          if (mes === "Aug") return agos += element.numeroTallas;
          if (mes === "Sep") return sep += element.numeroTallas;
          if (mes === "Oct") return oct += element.numeroTallas;
          if (mes === "Nov") return nov += element.numeroTallas;
          if (mes === "Dec") return dic += element.numeroTallas;
          
        }

        if (year === currentYear && element.origin == 'Mango' && element.discontinued === false) {
            if (mes === "Jan") return enem += element.numeroTallas;
            if (mes === "Feb") return febm += element.numeroTallas;
            if (mes === "Mar") return marm += element.numeroTallas;
            if (mes === "Apr") return abrm += element.numeroTallas;
            if (mes === "May") return maym += element.numeroTallas;
            if (mes === "Jun") return junm += element.numeroTallas;
            if (mes === "Jul") return julm += element.numeroTallas;
            if (mes === "Aug") return agosm += element.numeroTallas;
            if (mes === "Sep") return sepm += element.numeroTallas;
            if (mes === "Oct") return octm += element.numeroTallas;
            if (mes === "Nov") return novm += element.numeroTallas;
            if (mes === "Dec") return dicm += element.numeroTallas;
          }
    
          if (year === lastYear  && element.origin == 'Mango' && element.discontinued === false) {
            if (mes === "Jan") return ene2 += element.numeroTallas;
            if (mes === "Feb") return feb2 += element.numeroTallas;
            if (mes === "Mar") return mar2 += element.numeroTallas;
            if (mes === "Apr") return abr2 += element.numeroTallas;
            if (mes === "May") return may2 += element.numeroTallas;
            if (mes === "Jun") return jun2 += element.numeroTallas;
            if (mes === "Jul") return jul2 += element.numeroTallas;
            if (mes === "Aug") return agos2 += element.numeroTallas;
            if (mes === "Sep") return sep2 += element.numeroTallas;
            if (mes === "Oct") return oct2 += element.numeroTallas;
            if (mes === "Nov") return nov2 += element.numeroTallas;
            if (mes === "Dec") return dic2 += element.numeroTallas;
          }

        if (year === currentYear && element.origin == 'Gef' && element.discontinued === false) {
            if (mes === "Jan") return eneG += element.numeroTallas;
            if (mes === "Feb") return febG += element.numeroTallas;
            if (mes === "Mar") return marG += element.numeroTallas;
            if (mes === "Apr") return abrG += element.numeroTallas;
            if (mes === "May") return mayG += element.numeroTallas;
            if (mes === "Jun") return junG += element.numeroTallas;
            if (mes === "Jul") return julG += element.numeroTallas;
            if (mes === "Aug") return agosG += element.numeroTallas;
            if (mes === "Sep") return sepG += element.numeroTallas;
            if (mes === "Oct") return octG += element.numeroTallas;
            if (mes === "Nov") return novG += element.numeroTallas;
            if (mes === "Dec") return dicG += element.numeroTallas;
          }
    
          if (year === lastYear  && element.origin == 'Gef' && element.discontinued === false) {
            if (mes === "Jan") return ene3 += element.numeroTallas;
            if (mes === "Feb") return feb3 += element.numeroTallas;
            if (mes === "Mar") return mar3 += element.numeroTallas;
            if (mes === "Apr") return abr3 += element.numeroTallas;
            if (mes === "May") return may3 += element.numeroTallas;
            if (mes === "Jun") return jun3 += element.numeroTallas;
            if (mes === "Jul") return jul3 += element.numeroTallas;
            if (mes === "Aug") return agos3 += element.numeroTallas;
            if (mes === "Sep") return sep3 += element.numeroTallas;
            if (mes === "Oct") return oct3 += element.numeroTallas;
            if (mes === "Nov") return nov3 += element.numeroTallas;
            if (mes === "Dec") return dic3 += element.numeroTallas;
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

    // datos de Gef desde la posicion [48] a la [71]
  
    valuesZ[48] = eneG;
    valuesZ[49] = febG;
    valuesZ[50] = marG;
    valuesZ[51] = abrG;
    valuesZ[52] = mayG;
    valuesZ[53] = junG;
    valuesZ[54] = julG;
    valuesZ[55] = agosG;
    valuesZ[56] = sepG;
    valuesZ[57] = octG;
    valuesZ[58] = novG;
    valuesZ[59] = dicG;
  
    // valores del año anterior Gef
    valuesZ[60] = ene3;
    valuesZ[61] = feb3;
    valuesZ[62] = mar3;
    valuesZ[63] = abr3;
    valuesZ[64] = may3;
    valuesZ[65] = jun3;
    valuesZ[66] = jul3;
    valuesZ[67] = agos3;
    valuesZ[68] = sep3;
    valuesZ[69] = oct3;
    valuesZ[70] = nov3;
    valuesZ[71] = dic3;
  
    return valuesZ;
  
  };