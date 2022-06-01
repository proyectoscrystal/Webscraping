exports.averageDiscontinuedMonthOrigin = (arr) => {
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
          if (mes === "Jan" && element.estado === "descontinuado") return eneZ++; 
          if (mes === "Feb" && element.estado === "descontinuado") return febZ++;
          if (mes === "Mar" && element.estado === "descontinuado") return marZ++;
          if (mes === "Apr" && element.estado === "descontinuado") return abrZ++;
          if (mes === "May" && element.estado === "descontinuado") return mayZ++;
          if (mes === "Jun" && element.estado === "descontinuado") return junZ++;
          if (mes === "Jul" && element.estado === "descontinuado") return julZ++;
          if (mes === "Aug" && element.estado === "descontinuado") return agosZ++;
          if (mes === "Sep" && element.estado === "descontinuado") return sepZ++;
          if (mes === "Oct" && element.estado === "descontinuado") return octZ++;
          if (mes === "Nov" && element.estado === "descontinuado") return novZ++;
          if (mes === "Dec" && element.estado === "descontinuado") return dicZ++;
        }
  
        if (year === lastYear) {
          if (mes === "Jan" && element.estado === "descontinuado") return ene++;
          if (mes === "Feb" && element.estado === "descontinuado") return feb++;
          if (mes === "Mar" && element.estado === "descontinuado") return mar++;
          if (mes === "Apr" && element.estado === "descontinuado") return abr++;
          if (mes === "May" && element.estado === "descontinuado") return may++;
          if (mes === "Jun" && element.estado === "descontinuado") return jun++;
          if (mes === "Jul" && element.estado === "descontinuado") return jul++;
          if (mes === "Aug" && element.estado === "descontinuado") return agos++;
          if (mes === "Sep" && element.estado === "descontinuado") return sep++;
          if (mes === "Oct" && element.estado === "descontinuado") return oct++;
          if (mes === "Nov" && element.estado === "descontinuado") return nov++;
          if (mes === "Dec" && element.estado === "descontinuado") return dic++;
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


exports.averageDiscontinuedMonthGeneral = (arr) => {
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
          if (mes === "Jan" && element.estado === "descontinuado") return eneZ++;
          if (mes === "Feb" && element.estado === "descontinuado") return febZ++;
          if (mes === "Mar" && element.estado === "descontinuado") return marZ++;
          if (mes === "Apr" && element.estado === "descontinuado") return abrZ++;
          if (mes === "May" && element.estado === "descontinuado") return mayZ++;
          if (mes === "Jun" && element.estado === "descontinuado") return junZ++;
          if (mes === "Jul" && element.estado === "descontinuado") return julZ++;
          if (mes === "Aug" && element.estado === "descontinuado") return agosZ++;
          if (mes === "Sep" && element.estado === "descontinuado") return sepZ++;
          if (mes === "Oct" && element.estado === "descontinuado") return octZ++;
          if (mes === "Nov" && element.estado === "descontinuado") return novZ++;
          if (mes === "Dec" && element.estado === "descontinuado") return dicZ++;
        }
  
        if (year === lastYear  && element.origin == 'Zara') {
          if (mes === "Jan" && element.estado === "descontinuado") return ene++;
          if (mes === "Feb" && element.estado === "descontinuado") return feb++;
          if (mes === "Mar" && element.estado === "descontinuado") return mar++;
          if (mes === "Apr" && element.estado === "descontinuado") return abr++;
          if (mes === "May" && element.estado === "descontinuado") return may++;
          if (mes === "Jun" && element.estado === "descontinuado") return jun++;
          if (mes === "Jul" && element.estado === "descontinuado") return jul++;
          if (mes === "Aug" && element.estado === "descontinuado") return agos++;
          if (mes === "Sep" && element.estado === "descontinuado") return sep++;
          if (mes === "Oct" && element.estado === "descontinuado") return oct++;
          if (mes === "Nov" && element.estado === "descontinuado") return nov++;
          if (mes === "Dec" && element.estado === "descontinuado") return dic++;
          
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
          if (mes === "Jan" && element.estado === "descontinuado") return enem++;
          if (mes === "Feb" && element.estado === "descontinuado") return febm++;
          if (mes === "Mar" && element.estado === "descontinuado") return marm++;
          if (mes === "Apr" && element.estado === "descontinuado") return abrm++;
          if (mes === "May" && element.estado === "descontinuado") return maym++;
          if (mes === "Jun" && element.estado === "descontinuado") return junm++;
          if (mes === "Jul" && element.estado === "descontinuado") return julm++;
          if (mes === "Aug" && element.estado === "descontinuado") return agosm++;
          if (mes === "Sep" && element.estado === "descontinuado") return sepm++;
          if (mes === "Oct" && element.estado === "descontinuado") return octm++;
          if (mes === "Nov" && element.estado === "descontinuado") return novm++;
          if (mes === "Dec" && element.estado === "descontinuado") return dicm++;
        }
  
        if (year === lastYear  && element.origin == 'Mango') {
          if (mes === "Jan" && element.estado === "descontinuado") return ene2++;
          if (mes === "Feb" && element.estado === "descontinuado") return feb2++;
          if (mes === "Mar" && element.estado === "descontinuado") return mar2++;
          if (mes === "Apr" && element.estado === "descontinuado") return abr2++;
          if (mes === "May" && element.estado === "descontinuado") return may2++;
          if (mes === "Jun" && element.estado === "descontinuado") return jun2++;
          if (mes === "Jul" && element.estado === "descontinuado") return jul2++;
          if (mes === "Aug" && element.estado === "descontinuado") return agos2++;
          if (mes === "Sep" && element.estado === "descontinuado") return sep2++;
          if (mes === "Oct" && element.estado === "descontinuado") return oct2++;
          if (mes === "Nov" && element.estado === "descontinuado") return nov2++;
          if (mes === "Dec" && element.estado === "descontinuado") return dic2++;
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


    // datos de Gef desde la posicion [48] a la [71]
  
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
  
    // let count = 1;
  
    try {
      arr.forEach((element) => {
        let date = new Date();
        let currentYear = date.getFullYear();
        let lastYear = date.getFullYear() - 1;
        let fecha = element.createdAt + ""; // funcion para obtener la fecha
        let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
        let year = parseInt(fecha.split(" ")[3]);
  
        if (year === currentYear && element.origin == 'Gef') {
          if (mes === "Jan" && element.estado === "descontinuado") return eneG++;
          if (mes === "Feb" && element.estado === "descontinuado") return febG++;
          if (mes === "Mar" && element.estado === "descontinuado") return marG++;
          if (mes === "Apr" && element.estado === "descontinuado") return abrG++;
          if (mes === "May" && element.estado === "descontinuado") return mayG++;
          if (mes === "Jun" && element.estado === "descontinuado") return junG++;
          if (mes === "Jul" && element.estado === "descontinuado") return julG++;
          if (mes === "Aug" && element.estado === "descontinuado") return agosG++;
          if (mes === "Sep" && element.estado === "descontinuado") return sepG++;
          if (mes === "Oct" && element.estado === "descontinuado") return octG++;
          if (mes === "Nov" && element.estado === "descontinuado") return novG++;
          if (mes === "Dec" && element.estado === "descontinuado") return dicG++;
        }
  
        if (year === lastYear  && element.origin == 'Gef') {
          if (mes === "Jan" && element.estado === "descontinuado") return ene3++;
          if (mes === "Feb" && element.estado === "descontinuado") return feb3++;
          if (mes === "Mar" && element.estado === "descontinuado") return mar3++;
          if (mes === "Apr" && element.estado === "descontinuado") return abr3++;
          if (mes === "May" && element.estado === "descontinuado") return may3++;
          if (mes === "Jun" && element.estado === "descontinuado") return jun3++;
          if (mes === "Jul" && element.estado === "descontinuado") return jul3++;
          if (mes === "Aug" && element.estado === "descontinuado") return agos3++;
          if (mes === "Sep" && element.estado === "descontinuado") return sep3++;
          if (mes === "Oct" && element.estado === "descontinuado") return oct3++;
          if (mes === "Nov" && element.estado === "descontinuado") return nov3++;
          if (mes === "Dec" && element.estado === "descontinuado") return dic3++;
        }
      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
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

    // datos de punto blanco desde la posicion [72] a la [95]
  
    let enePB = 0;
    let febPB = 0;
    let marPB = 0;
    let abrPB = 0;
    let mayPB = 0;
    let junPB = 0;
    let julPB = 0;
    let agosPB = 0;
    let sepPB = 0;
    let octPB = 0;
    let novPB = 0;
    let dicPB = 0;
  
    let ene4 = 0;
    let feb4 = 0;
    let mar4 = 0;
    let abr4 = 0;
    let may4 = 0;
    let jun4 = 0;
    let jul4 = 0;
    let agos4 = 0;
    let sep4 = 0;
    let oct4 = 0;
    let nov4 = 0;
    let dic4 = 0;
  
    // let count = 1;
  
    try {
      arr.forEach((element) => {
        let date = new Date();
        let currentYear = date.getFullYear();
        let lastYear = date.getFullYear() - 1;
        let fecha = element.createdAt + ""; // funcion para obtener la fecha
        let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
        let year = parseInt(fecha.split(" ")[3]);
  
        if (year === currentYear && element.origin == 'Punto blanco') {
          if (mes === "Jan" && element.estado === "descontinuado") return enePB++;
          if (mes === "Feb" && element.estado === "descontinuado") return febPB++;
          if (mes === "Mar" && element.estado === "descontinuado") return marPB++;
          if (mes === "Apr" && element.estado === "descontinuado") return abrPB++;
          if (mes === "May" && element.estado === "descontinuado") return mayPB++;
          if (mes === "Jun" && element.estado === "descontinuado") return junPB++;
          if (mes === "Jul" && element.estado === "descontinuado") return julPB++;
          if (mes === "Aug" && element.estado === "descontinuado") return agosPB++;
          if (mes === "Sep" && element.estado === "descontinuado") return sepPB++;
          if (mes === "Oct" && element.estado === "descontinuado") return octPB++;
          if (mes === "Nov" && element.estado === "descontinuado") return novPB++;
          if (mes === "Dec" && element.estado === "descontinuado") return dicPB++;
        }
  
        if (year === lastYear  && element.origin == 'Punto blanco') {
          if (mes === "Jan" && element.estado === "descontinuado") return ene4++;
          if (mes === "Feb" && element.estado === "descontinuado") return feb4++;
          if (mes === "Mar" && element.estado === "descontinuado") return mar4++;
          if (mes === "Apr" && element.estado === "descontinuado") return abr4++;
          if (mes === "May" && element.estado === "descontinuado") return may4++;
          if (mes === "Jun" && element.estado === "descontinuado") return jun4++;
          if (mes === "Jul" && element.estado === "descontinuado") return jul4++;
          if (mes === "Aug" && element.estado === "descontinuado") return agos4++;
          if (mes === "Sep" && element.estado === "descontinuado") return sep4++;
          if (mes === "Oct" && element.estado === "descontinuado") return oct4++;
          if (mes === "Nov" && element.estado === "descontinuado") return nov4++;
          if (mes === "Dec" && element.estado === "descontinuado") return dic4++;
        }
      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    valuesZ[72] = enePB;
    valuesZ[73] = febPB;
    valuesZ[74] = marPB;
    valuesZ[75] = abrPB;
    valuesZ[76] = mayPB;
    valuesZ[77] = junPB;
    valuesZ[78] = julPB;
    valuesZ[79] = agosPB;
    valuesZ[80] = sepPB;
    valuesZ[81] = octPB;
    valuesZ[82] = novPB;
    valuesZ[83] = dicPB;
  
    // valores del año anterior punto blanco
    valuesZ[84] = ene4;
    valuesZ[85] = feb4;
    valuesZ[86] = mar4;
    valuesZ[87] = abr4;
    valuesZ[88] = may4;
    valuesZ[89] = jun4;
    valuesZ[90] = jul4;
    valuesZ[91] = agos4;
    valuesZ[92] = sep4;
    valuesZ[93] = oct4;
    valuesZ[94] = nov4;
    valuesZ[95] = dic4;


    // datos de Baby fresh desde la posicion [96] a la [119]
  
    let eneBF = 0;
    let febBF = 0;
    let marBF = 0;
    let abrBF = 0;
    let mayBF = 0;
    let junBF = 0;
    let julBF = 0;
    let agosBF = 0;
    let sepBF = 0;
    let octBF = 0;
    let novBF = 0;
    let dicBF = 0;
  
    let ene5 = 0;
    let feb5 = 0;
    let mar5 = 0;
    let abr5 = 0;
    let may5 = 0;
    let jun5 = 0;
    let jul5 = 0;
    let agos5 = 0;
    let sep5 = 0;
    let oct5 = 0;
    let nov5 = 0;
    let dic5 = 0;
  
    // let count = 1;
  
    try {
      arr.forEach((element) => {
        let date = new Date();
        let currentYear = date.getFullYear();
        let lastYear = date.getFullYear() - 1;
        let fecha = element.createdAt + ""; // funcion para obtener la fecha
        let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
        let year = parseInt(fecha.split(" ")[3]);
  
        if (year === currentYear && element.origin == 'Baby fresh') {
          if (mes === "Jan" && element.estado === "descontinuado") return eneBF++;
          if (mes === "Feb" && element.estado === "descontinuado") return febBF++;
          if (mes === "Mar" && element.estado === "descontinuado") return marBF++;
          if (mes === "Apr" && element.estado === "descontinuado") return abrBF++;
          if (mes === "May" && element.estado === "descontinuado") return mayBF++;
          if (mes === "Jun" && element.estado === "descontinuado") return junBF++;
          if (mes === "Jul" && element.estado === "descontinuado") return julBF++;
          if (mes === "Aug" && element.estado === "descontinuado") return agosBF++;
          if (mes === "Sep" && element.estado === "descontinuado") return sepBF++;
          if (mes === "Oct" && element.estado === "descontinuado") return octBF++;
          if (mes === "Nov" && element.estado === "descontinuado") return novBF++;
          if (mes === "Dec" && element.estado === "descontinuado") return dicBF++;
        }
  
        if (year === lastYear  && element.origin == 'Baby fresh') {
          if (mes === "Jan" && element.estado === "descontinuado") return ene5++;
          if (mes === "Feb" && element.estado === "descontinuado") return feb5++;
          if (mes === "Mar" && element.estado === "descontinuado") return mar5++;
          if (mes === "Apr" && element.estado === "descontinuado") return abr5++;
          if (mes === "May" && element.estado === "descontinuado") return may5++;
          if (mes === "Jun" && element.estado === "descontinuado") return jun5++;
          if (mes === "Jul" && element.estado === "descontinuado") return jul5++;
          if (mes === "Aug" && element.estado === "descontinuado") return agos5++;
          if (mes === "Sep" && element.estado === "descontinuado") return sep5++;
          if (mes === "Oct" && element.estado === "descontinuado") return oct5++;
          if (mes === "Nov" && element.estado === "descontinuado") return nov5++;
          if (mes === "Dec" && element.estado === "descontinuado") return dic5++;
        }
      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    valuesZ[96] = eneBF;
    valuesZ[97] = febBF;
    valuesZ[98] = marBF;
    valuesZ[99] = abrBF;
    valuesZ[100] = mayBF;
    valuesZ[101] = junBF;
    valuesZ[102] = julBF;
    valuesZ[103] = agosBF;
    valuesZ[104] = sepBF;
    valuesZ[105] = octBF;
    valuesZ[106] = novBF;
    valuesZ[107] = dicBF;
  
    // valores del año anterior Baby fresh
    valuesZ[108] = ene5;
    valuesZ[109] = feb5;
    valuesZ[110] = mar5;
    valuesZ[111] = abr5;
    valuesZ[112] = may5;
    valuesZ[113] = jun5;
    valuesZ[114] = jul5;
    valuesZ[115] = agos5;
    valuesZ[116] = sep5;
    valuesZ[117] = oct5;
    valuesZ[118] = nov5;
    valuesZ[119] = dic5;


    // datos de Galax desde la posicion [120] a la [143]
  
    let eneGA = 0;
    let febGA = 0;
    let marGA = 0;
    let abrGA = 0;
    let mayGA = 0;
    let junGA = 0;
    let julGA = 0;
    let agosGA = 0;
    let sepGA = 0;
    let octGA = 0;
    let novGA = 0;
    let dicGA = 0;
  
    let ene6 = 0;
    let feb6 = 0;
    let mar6 = 0;
    let abr6 = 0;
    let may6 = 0;
    let jun6 = 0;
    let jul6 = 0;
    let agos6 = 0;
    let sep6 = 0;
    let oct6 = 0;
    let nov6 = 0;
    let dic6 = 0;
  
    // let count = 1;
  
    try {
      arr.forEach((element) => {
        let date = new Date();
        let currentYear = date.getFullYear();
        let lastYear = date.getFullYear() - 1;
        let fecha = element.createdAt + ""; // funcion para obtener la fecha
        let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
        let year = parseInt(fecha.split(" ")[3]);
  
        if (year === currentYear && element.origin == 'Galax') {
          if (mes === "Jan" && element.estado === "descontinuado") return eneGA++;
          if (mes === "Feb" && element.estado === "descontinuado") return febGA++;
          if (mes === "Mar" && element.estado === "descontinuado") return marGA++;
          if (mes === "Apr" && element.estado === "descontinuado") return abrGA++;
          if (mes === "May" && element.estado === "descontinuado") return mayGA++;
          if (mes === "Jun" && element.estado === "descontinuado") return junGA++;
          if (mes === "Jul" && element.estado === "descontinuado") return julGA++;
          if (mes === "Aug" && element.estado === "descontinuado") return agosGA++;
          if (mes === "Sep" && element.estado === "descontinuado") return sepGA++;
          if (mes === "Oct" && element.estado === "descontinuado") return octGA++;
          if (mes === "Nov" && element.estado === "descontinuado") return novGA++;
          if (mes === "Dec" && element.estado === "descontinuado") return dicGA++;
        }
  
        if (year === lastYear  && element.origin == 'Galax') {
          if (mes === "Jan" && element.estado === "descontinuado") return ene6++;
          if (mes === "Feb" && element.estado === "descontinuado") return feb6++;
          if (mes === "Mar" && element.estado === "descontinuado") return mar6++;
          if (mes === "Apr" && element.estado === "descontinuado") return abr6++;
          if (mes === "May" && element.estado === "descontinuado") return may6++;
          if (mes === "Jun" && element.estado === "descontinuado") return jun6++;
          if (mes === "Jul" && element.estado === "descontinuado") return jul6++;
          if (mes === "Aug" && element.estado === "descontinuado") return agos6++;
          if (mes === "Sep" && element.estado === "descontinuado") return sep6++;
          if (mes === "Oct" && element.estado === "descontinuado") return oct6++;
          if (mes === "Nov" && element.estado === "descontinuado") return nov6++;
          if (mes === "Dec" && element.estado === "descontinuado") return dic6++;
        }
      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    valuesZ[120] = eneGA;
    valuesZ[121] = febGA;
    valuesZ[122] = marGA;
    valuesZ[123] = abrGA;
    valuesZ[124] = mayGA;
    valuesZ[125] = junGA;
    valuesZ[126] = julGA;
    valuesZ[127] = agosGA;
    valuesZ[128] = sepGA;
    valuesZ[129] = octGA;
    valuesZ[130] = novGA;
    valuesZ[131] = dicGA;
  
    // valores del año anterior Galax
    valuesZ[132] = ene6;
    valuesZ[133] = feb6;
    valuesZ[134] = mar6;
    valuesZ[135] = abr6;
    valuesZ[136] = may6;
    valuesZ[137] = jun6;
    valuesZ[138] = jul6;
    valuesZ[139] = agos6;
    valuesZ[140] = sep6;
    valuesZ[141] = oct6;
    valuesZ[142] = nov6;
    valuesZ[143] = dic6;

  
    return valuesZ;
  
  };