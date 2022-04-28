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
  
    // variables Punto blanco
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
    
    // variables Baby fresh
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
    
    
    // variables Galax
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

        if (year === currentYear && element.origin == 'Punto blanco' && element.discontinued === false) {
            if (mes === "Jan") return enePB += element.numeroTallas;
            if (mes === "Feb") return febPB += element.numeroTallas;
            if (mes === "Mar") return marPB += element.numeroTallas;
            if (mes === "Apr") return abrPB += element.numeroTallas;
            if (mes === "May") return mayPB += element.numeroTallas;
            if (mes === "Jun") return junPB += element.numeroTallas;
            if (mes === "Jul") return julPB += element.numeroTallas;
            if (mes === "Aug") return agosPB += element.numeroTallas;
            if (mes === "Sep") return sepPB += element.numeroTallas;
            if (mes === "Oct") return octPB += element.numeroTallas;
            if (mes === "Nov") return novPB += element.numeroTallas;
            if (mes === "Dec") return dicPB += element.numeroTallas;
          }
    
          if (year === lastYear  && element.origin == 'Punto blanco' && element.discontinued === false) {
            if (mes === "Jan") return ene4 += element.numeroTallas;
            if (mes === "Feb") return feb4 += element.numeroTallas;
            if (mes === "Mar") return mar4 += element.numeroTallas;
            if (mes === "Apr") return abr4 += element.numeroTallas;
            if (mes === "May") return may4 += element.numeroTallas;
            if (mes === "Jun") return jun4 += element.numeroTallas;
            if (mes === "Jul") return jul4 += element.numeroTallas;
            if (mes === "Aug") return agos4 += element.numeroTallas;
            if (mes === "Sep") return sep4 += element.numeroTallas;
            if (mes === "Oct") return oct4 += element.numeroTallas;
            if (mes === "Nov") return nov4 += element.numeroTallas;
            if (mes === "Dec") return dic4 += element.numeroTallas;
          }

        if (year === currentYear && element.origin == 'Baby fresh' && element.discontinued === false) {
            if (mes === "Jan") return eneBF += element.numeroTallas;
            if (mes === "Feb") return febBF += element.numeroTallas;
            if (mes === "Mar") return marBF += element.numeroTallas;
            if (mes === "Apr") return abrBF += element.numeroTallas;
            if (mes === "May") return mayBF += element.numeroTallas;
            if (mes === "Jun") return junBF += element.numeroTallas;
            if (mes === "Jul") return julBF += element.numeroTallas;
            if (mes === "Aug") return agosBF += element.numeroTallas;
            if (mes === "Sep") return sepBF += element.numeroTallas;
            if (mes === "Oct") return octBF += element.numeroTallas;
            if (mes === "Nov") return novBF += element.numeroTallas;
            if (mes === "Dec") return dicBF += element.numeroTallas;
          }
    
          if (year === lastYear  && element.origin == 'Baby fresh' && element.discontinued === false) {
            if (mes === "Jan") return ene5 += element.numeroTallas;
            if (mes === "Feb") return feb5 += element.numeroTallas;
            if (mes === "Mar") return mar5 += element.numeroTallas;
            if (mes === "Apr") return abr5 += element.numeroTallas;
            if (mes === "May") return may5 += element.numeroTallas;
            if (mes === "Jun") return jun5 += element.numeroTallas;
            if (mes === "Jul") return jul5 += element.numeroTallas;
            if (mes === "Aug") return agos5 += element.numeroTallas;
            if (mes === "Sep") return sep5 += element.numeroTallas;
            if (mes === "Oct") return oct5 += element.numeroTallas;
            if (mes === "Nov") return nov5 += element.numeroTallas;
            if (mes === "Dec") return dic5 += element.numeroTallas;
          }

          if (year === currentYear && element.origin == 'Galax' && element.discontinued === false) {
            if (mes === "Jan") return eneGA += element.numeroTallas;
            if (mes === "Feb") return febGA += element.numeroTallas;
            if (mes === "Mar") return marGA += element.numeroTallas;
            if (mes === "Apr") return abrGA += element.numeroTallas;
            if (mes === "May") return mayGA += element.numeroTallas;
            if (mes === "Jun") return junGA += element.numeroTallas;
            if (mes === "Jul") return julGA += element.numeroTallas;
            if (mes === "Aug") return agosGA += element.numeroTallas;
            if (mes === "Sep") return sepGA += element.numeroTallas;
            if (mes === "Oct") return octGA += element.numeroTallas;
            if (mes === "Nov") return novGA += element.numeroTallas;
            if (mes === "Dec") return dicGA += element.numeroTallas;
          }
    
          if (year === lastYear  && element.origin == 'Galax' && element.discontinued === false) {
            if (mes === "Jan") return ene6 += element.numeroTallas;
            if (mes === "Feb") return feb6 += element.numeroTallas;
            if (mes === "Mar") return mar6 += element.numeroTallas;
            if (mes === "Apr") return abr6 += element.numeroTallas;
            if (mes === "May") return may6 += element.numeroTallas;
            if (mes === "Jun") return jun6 += element.numeroTallas;
            if (mes === "Jul") return jul6 += element.numeroTallas;
            if (mes === "Aug") return agos6 += element.numeroTallas;
            if (mes === "Sep") return sep6 += element.numeroTallas;
            if (mes === "Oct") return oct6 += element.numeroTallas;
            if (mes === "Nov") return nov6 += element.numeroTallas;
            if (mes === "Dec") return dic6 += element.numeroTallas;
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

    // datos de punto blanco desde la posicion [72] a la [95]
  
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

    // datos de Baby fresh desde la posicion [96] a la [107]
  
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