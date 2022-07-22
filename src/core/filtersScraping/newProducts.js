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

    // datos de Gef desde la posicion [48] a la [59]
    // datos de Gef año anterior desde la posicion [60] a la [71]
  
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
  
        if (year === currentYear && element.origin === 'Gef') {
          if (mes === "Jan" && element.tag === "nuevo") return eneG++;
          if (mes === "Feb" && element.tag === "nuevo") return febG++;
          if (mes === "Mar" && element.tag === "nuevo") return marG++;
          if (mes === "Apr" && element.tag === "nuevo") return abrG++;
          if (mes === "May" && element.tag === "nuevo") return mayG++;
          if (mes === "Jun" && element.tag === "nuevo") return junG++;
          if (mes === "Jul" && element.tag === "nuevo") return julG++;
          if (mes === "Aug" && element.tag === "nuevo") return agosG++;
          if (mes === "Sep" && element.tag === "nuevo") return sepG++;
          if (mes === "Oct" && element.tag === "nuevo") return octG++;
          if (mes === "Nov" && element.tag === "nuevo") return novG++;
          if (mes === "Dec" && element.tag === "nuevo") return dicG++;
        }
  
        if (year === lastYear  && element.origin === 'Gef') {
          if (mes === "Jan" && element.tag === "nuevo") return ene3++;
          if (mes === "Feb" && element.tag === "nuevo") return feb3++;
          if (mes === "Mar" && element.tag === "nuevo") return mar3++;
          if (mes === "Apr" && element.tag === "nuevo") return abr3++;
          if (mes === "May" && element.tag === "nuevo") return may3++;
          if (mes === "Jun" && element.tag === "nuevo") return jun3++;
          if (mes === "Jul" && element.tag === "nuevo") return jul3++;
          if (mes === "Aug" && element.tag === "nuevo") return agos3++;
          if (mes === "Sep" && element.tag === "nuevo") return sep3++;
          if (mes === "Oct" && element.tag === "nuevo") return oct3++;
          if (mes === "Nov" && element.tag === "nuevo") return nov3++;
          if (mes === "Dec" && element.tag === "nuevo") return dic3++;
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
    valuesZ[68] = oct3;
    valuesZ[70] = nov3;
    valuesZ[71] = dic3;

    // nuevos para punto blanco
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
  
        if (year === currentYear && element.origin === 'Punto blanco') {
          if (mes === "Jan" && element.tag === "nuevo") return enePB++;
          if (mes === "Feb" && element.tag === "nuevo") return febPB++;
          if (mes === "Mar" && element.tag === "nuevo") return marPB++;
          if (mes === "Apr" && element.tag === "nuevo") return abrPB++;
          if (mes === "May" && element.tag === "nuevo") return mayPB++;
          if (mes === "Jun" && element.tag === "nuevo") return junPB++;
          if (mes === "Jul" && element.tag === "nuevo") return julPB++;
          if (mes === "Aug" && element.tag === "nuevo") return agosPB++;
          if (mes === "Sep" && element.tag === "nuevo") return sepPB++;
          if (mes === "Oct" && element.tag === "nuevo") return octPB++;
          if (mes === "Nov" && element.tag === "nuevo") return novPB++;
          if (mes === "Dec" && element.tag === "nuevo") return dicPB++;
        }
  
        if (year === lastYear  && element.origin === 'Punto blanco') {
          if (mes === "Jan" && element.tag === "nuevo") return ene4++;
          if (mes === "Feb" && element.tag === "nuevo") return feb4++;
          if (mes === "Mar" && element.tag === "nuevo") return mar4++;
          if (mes === "Apr" && element.tag === "nuevo") return abr4++;
          if (mes === "May" && element.tag === "nuevo") return may4++;
          if (mes === "Jun" && element.tag === "nuevo") return jun4++;
          if (mes === "Jul" && element.tag === "nuevo") return jul4++;
          if (mes === "Aug" && element.tag === "nuevo") return agos4++;
          if (mes === "Sep" && element.tag === "nuevo") return sep4++;
          if (mes === "Oct" && element.tag === "nuevo") return oct4++;
          if (mes === "Nov" && element.tag === "nuevo") return nov4++;
          if (mes === "Dec" && element.tag === "nuevo") return dic4++;
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
  
    // valores del año anterior Punto blanco
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

     // nuevos para Baby fresh
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
   
         if (year === currentYear && element.origin === 'Baby fresh') {
           if (mes === "Jan" && element.tag === "nuevo") return eneBF++;
           if (mes === "Feb" && element.tag === "nuevo") return febBF++;
           if (mes === "Mar" && element.tag === "nuevo") return marBF++;
           if (mes === "Apr" && element.tag === "nuevo") return abrBF++;
           if (mes === "May" && element.tag === "nuevo") return mayBF++;
           if (mes === "Jun" && element.tag === "nuevo") return junBF++;
           if (mes === "Jul" && element.tag === "nuevo") return julBF++;
           if (mes === "Aug" && element.tag === "nuevo") return agosBF++;
           if (mes === "Sep" && element.tag === "nuevo") return sepBF++;
           if (mes === "Oct" && element.tag === "nuevo") return octBF++;
           if (mes === "Nov" && element.tag === "nuevo") return novBF++;
           if (mes === "Dec" && element.tag === "nuevo") return dicBF++;
         }
   
         if (year === lastYear  && element.origin === 'Baby fresh') {
           if (mes === "Jan" && element.tag === "nuevo") return ene5++;
           if (mes === "Feb" && element.tag === "nuevo") return feb5++;
           if (mes === "Mar" && element.tag === "nuevo") return mar5++;
           if (mes === "Apr" && element.tag === "nuevo") return abr5++;
           if (mes === "May" && element.tag === "nuevo") return may5++;
           if (mes === "Jun" && element.tag === "nuevo") return jun5++;
           if (mes === "Jul" && element.tag === "nuevo") return jul5++;
           if (mes === "Aug" && element.tag === "nuevo") return agos5++;
           if (mes === "Sep" && element.tag === "nuevo") return sep5++;
           if (mes === "Oct" && element.tag === "nuevo") return oct5++;
           if (mes === "Nov" && element.tag === "nuevo") return nov5++;
           if (mes === "Dec" && element.tag === "nuevo") return dic5++;
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
 

     // nuevos para Baby fresh
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
   
         if (year === currentYear && element.origin === 'Galax') {
           if (mes === "Jan" && element.tag === "nuevo") return eneGA++;
           if (mes === "Feb" && element.tag === "nuevo") return febGA++;
           if (mes === "Mar" && element.tag === "nuevo") return marGA++;
           if (mes === "Apr" && element.tag === "nuevo") return abrGA++;
           if (mes === "May" && element.tag === "nuevo") return mayGA++;
           if (mes === "Jun" && element.tag === "nuevo") return junGA++;
           if (mes === "Jul" && element.tag === "nuevo") return julGA++;
           if (mes === "Aug" && element.tag === "nuevo") return agosGA++;
           if (mes === "Sep" && element.tag === "nuevo") return sepGA++;
           if (mes === "Oct" && element.tag === "nuevo") return octGA++;
           if (mes === "Nov" && element.tag === "nuevo") return novGA++;
           if (mes === "Dec" && element.tag === "nuevo") return dicGA++;
         }
   
         if (year === lastYear  && element.origin === 'Galax') {
           if (mes === "Jan" && element.tag === "nuevo") return ene6++;
           if (mes === "Feb" && element.tag === "nuevo") return feb6++;
           if (mes === "Mar" && element.tag === "nuevo") return mar6++;
           if (mes === "Apr" && element.tag === "nuevo") return abr6++;
           if (mes === "May" && element.tag === "nuevo") return may6++;
           if (mes === "Jun" && element.tag === "nuevo") return jun6++;
           if (mes === "Jul" && element.tag === "nuevo") return jul6++;
           if (mes === "Aug" && element.tag === "nuevo") return agos6++;
           if (mes === "Sep" && element.tag === "nuevo") return sep6++;
           if (mes === "Oct" && element.tag === "nuevo") return oct6++;
           if (mes === "Nov" && element.tag === "nuevo") return nov6++;
           if (mes === "Dec" && element.tag === "nuevo") return dic6++;
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