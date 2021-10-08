// metodo para calcular el precio promedio de ambas marcas (cuando no hay filtro)
exports.averagePriceYear = (arr) => {
  let precioPromedio = 0;
  arr.forEach((element) => {
    let { precio, descuento } = element;
    if (descuento !== null) {
      precioPromedio += descuento;
    } else {
      precioPromedio += precio;
    }
  });
  if (precioPromedio === 0) {
    return precioPromedio;
  } else {
    return parseInt((precioPromedio / arr.length).toFixed());
  }
};

// metodo para filtrar por ambas marcas mango y zara por terminar
exports.averagePriceMonthGeneral = (arr) => {
  let eneZ = [];
  let febZ = [];
  let marZ = [];
  let abrZ = [];
  let mayZ = [];
  let junZ = [];
  let julZ = [];
  let agosZ = [];
  let sepZ = [];
  let octZ = [];
  let novZ = [];
  let dicZ = [];

  let valuesZ = [];

  let ene = [];
  let feb = [];
  let mar = [];
  let abr = [];
  let may = [];
  let jun = [];
  let jul = [];
  let agos = [];
  let sep = [];
  let oct = [];
  let nov = [];
  let dic = [];

  
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
        if (mes === "Jan" && element.descuento === null) {
          // estructura interna del if
          return eneZ.push(element.precio);
        } else if (mes === "Jan" && element.descuento !== null) {
          eneZ.push(element.descuento);
        }
        if (mes === "Feb" && element.descuento === null) {
          // estructura interna del if
          return febZ.push(element.precio);
        } else if (mes === "Feb" && element.descuento !== null) {
          febZ.push(element.descuento);
        }
        if (mes === "Mar" && element.descuento === null) {
          // estructura interna del if
          return marZ.push(element.precio);
        } else if (mes === "Mar" && element.descuento !== null) {
          marZ.push(element.descuento);
        }
        if (mes === "Apr" && element.descuento === null) {
          // estructura interna del if
          return abrZ.push(element.precio);
        } else if (mes === "Apr" && element.descuento !== null) {
          abrZ.push(element.descuento);
        }
        if (mes === "May" && element.descuento === null) {
          // estructura interna del if
          return mayZ.push(element.precio);
        } else if (mes === "May" && element.descuento !== null) {
          mayZ.push(element.descuento);
        }
        if (mes === "Jun" && element.descuento === null) {
          // estructura interna del if
          return junZ.push(element.precio);
        } else if (mes === "Jun" && element.descuento !== null) {
          junZ.push(element.descuento);
        }
        if (mes === "Jul" && element.descuento === null) {
          // estructura interna del if
          return julZ.push(element.precio);
        } else if (mes === "Jul" && element.descuento !== null) {
          julZ.push(element.descuento);
        }
        if (mes === "Aug" && element.descuento === null) {
          // estructura interna del if
          return agosZ.push(element.precio);
        } else if (mes === "Aug" && element.descuento !== null) {
          agosZ.push(element.descuento);
        }
        if (mes === "Sep" && element.descuento === null) {
          // estructura interna del if
          return sepZ.push(element.precio);
        } else if (mes === "Sep" && element.descuento !== null) {
          sepZ.push(element.descuento);
        }
        if (mes === "Oct" && element.descuento === null) {
          // estructura interna del if
          return octZ.push(element.precio);
        } else if (mes === "Oct" && element.descuento !== null) {
          octZ.push(element.descuento);
        }
        if (mes === "Nov" && element.descuento === null) {
          // estructura interna del if
          return novZ.push(element.precio);
        } else if (mes === "Nov" && element.descuento !== null) {
          novZ.push(element.descuento);
        }
        if (mes === "Dec" && element.descuento === null) {
          // estructura interna del if
          return dicZ.push(element.precio);
        } else if (mes === "Dec" && element.descuento !== null) {
          dicZ.push(element.descuento);
        }
      }

      if (year === lastYear  && element.origin == 'Zara') {
        if (mes === "Jan" && element.descuento === null) {
          // estructura interna del if
          return ene.push(element.precio);
        } else if (mes === "Jan" && element.descuento !== null) {
          ene.push(element.descuento);
        }
        if (mes === "Feb" && element.descuento === null) {
          // estructura interna del if
          return feb.push(element.precio);
        } else if (mes === "Feb" && element.descuento !== null) {
          feb.push(element.descuento);
        }
        if (mes === "Mar" && element.descuento === null) {
          // estructura interna del if
          return mar.push(element.precio);
        } else if (mes === "Mar" && element.descuento !== null) {
          mar.push(element.descuento);
        }
        if (mes === "Apr" && element.descuento === null) {
          // estructura interna del if
          return abr.push(element.precio);
        } else if (mes === "Apr" && element.descuento !== null) {
          abr.push(element.descuento);
        }
        if (mes === "May" && element.descuento === null) {
          // estructura interna del if
          return may.push(element.precio);
        } else if (mes === "May" && element.descuento !== null) {
          may.push(element.descuento);
        }
        if (mes === "Jun" && element.descuento === null) {
          // estructura interna del if
          return jun.push(element.precio);
        } else if (mes === "Jun" && element.descuento !== null) {
          jun.push(element.descuento);
        }
        if (mes === "Jul" && element.descuento === null) {
          // estructura interna del if
          return jul.push(element.precio);
        } else if (mes === "Jul" && element.descuento !== null) {
          jul.push(element.descuento);
        }
        if (mes === "Aug" && element.descuento === null) {
          // estructura interna del if
          return agos.push(element.precio);
        } else if (mes === "Aug" && element.descuento !== null) {
          agos.push(element.descuento);
        }
        if (mes === "Sep" && element.descuento === null) {
          // estructura interna del if
          return sep.push(element.precio);
        } else if (mes === "Sep" && element.descuento !== null) {
          sep.push(element.descuento);
        }
        if (mes === "Oct" && element.descuento === null) {
          // estructura interna del if
          return oct.push(element.precio);
        } else if (mes === "Oct" && element.descuento !== null) {
          oct.push(element.descuento);
        }
        if (mes === "Nov" && element.descuento === null) {
          // estructura interna del if
          return nov.push(element.precio);
        } else if (mes === "Nov" && element.descuento !== null) {
          nov.push(element.descuento);
        }
        if (mes === "Dec" && element.descuento === null) {
          // estructura interna del if
          return dic.push(element.precio);
        } else if (mes === "Dec" && element.descuento !== null) {
          dic.push(element.descuento);
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  valuesZ[0] = setAveragePriceMonth(eneZ);
  valuesZ[1] = setAveragePriceMonth(febZ);
  valuesZ[2] = setAveragePriceMonth(marZ);
  valuesZ[3] = setAveragePriceMonth(abrZ);
  valuesZ[4] = setAveragePriceMonth(mayZ);
  valuesZ[5] = setAveragePriceMonth(junZ);
  valuesZ[6] = setAveragePriceMonth(julZ);
  valuesZ[7] = setAveragePriceMonth(agosZ);
  valuesZ[8] = setAveragePriceMonth(sepZ);
  valuesZ[9] = setAveragePriceMonth(octZ);
  valuesZ[10] = setAveragePriceMonth(novZ);
  valuesZ[11] = setAveragePriceMonth(dicZ);

  valuesZ[12] = setAveragePriceMonth(ene);
  valuesZ[13] = setAveragePriceMonth(feb);
  valuesZ[14] = setAveragePriceMonth(mar);
  valuesZ[15] = setAveragePriceMonth(abr);
  valuesZ[16] = setAveragePriceMonth(may);
  valuesZ[17] = setAveragePriceMonth(jun);
  valuesZ[18] = setAveragePriceMonth(jul);
  valuesZ[19] = setAveragePriceMonth(agos);
  valuesZ[20] = setAveragePriceMonth(sep);
  valuesZ[21] = setAveragePriceMonth(oct);
  valuesZ[22] = setAveragePriceMonth(nov);
  valuesZ[23] = setAveragePriceMonth(dic);

  

  // datos de mango desde la posicion [24] a la [47]

  let enem = [];
  let febm = [];
  let marm = [];
  let abrm = [];
  let maym = [];
  let junm = [];
  let julm = [];
  let agosm = [];
  let sepm = [];
  let octm = [];
  let novm = [];
  let dicm = [];

  let ene2 = [];
  let feb2 = [];
  let mar2 = [];
  let abr2 = [];
  let may2 = [];
  let jun2 = [];
  let jul2 = [];
  let agos2 = [];
  let sep2 = [];
  let oct2 = [];
  let nov2 = [];
  let dic2 = [];

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
        if (mes === "Jan" && element.descuento === null) {
          // estructura interna del if
          return enem.push(element.precio);
        } else if (mes === "Jan" && element.descuento !== null) {
          enem.push(element.descuento);
        }
        if (mes === "Feb" && element.descuento === null) {
          // estructura interna del if
          return febm.push(element.precio);
        } else if (mes === "Feb" && element.descuento !== null) {
          febm.push(element.descuento);
        }
        if (mes === "Mar" && element.descuento === null) {
          // estructura interna del if
          return marm.push(element.precio);
        } else if (mes === "Mar" && element.descuento !== null) {
          marm.push(element.descuento);
        }
        if (mes === "Apr" && element.descuento === null) {
          // estructura interna del if
          return abrm.push(element.precio);
        } else if (mes === "Apr" && element.descuento !== null) {
          abrm.push(element.descuento);
        }
        if (mes === "May" && element.descuento === null) {
          // estructura interna del if
          return maym.push(element.precio);
        } else if (mes === "May" && element.descuento !== null) {
          maym.push(element.descuento);
        }
        if (mes === "Jun" && element.descuento === null) {
          // estructura interna del if
          return junm.push(element.precio);
        } else if (mes === "Jun" && element.descuento !== null) {
          junm.push(element.descuento);
        }
        if (mes === "Jul" && element.descuento === null) {
          // estructura interna del if
          return julm.push(element.precio);
        } else if (mes === "Jul" && element.descuento !== null) {
          julm.push(element.descuento);
        }
        if (mes === "Aug" && element.descuento === null) {
          // estructura interna del if
          return agosm.push(element.precio);
        } else if (mes === "Aug" && element.descuento !== null) {
          agosm.push(element.descuento);
        }
        if (mes === "Sep" && element.descuento === null) {
          // estructura interna del if
          return sepm.push(element.precio);
        } else if (mes === "Sep" && element.descuento !== null) {
          sepm.push(element.descuento);
        }
        if (mes === "Oct" && element.descuento === null) {
          // estructura interna del if
          return octm.push(element.precio);
        } else if (mes === "Oct" && element.descuento !== null) {
          octm.push(element.descuento);
        }
        if (mes === "Nov" && element.descuento === null) {
          // estructura interna del if
          return novm.push(element.precio);
        } else if (mes === "Nov" && element.descuento !== null) {
          novm.push(element.descuento);
        }
        if (mes === "Dec" && element.descuento === null) {
          // estructura interna del if
          return dicm.push(element.precio);
        } else if (mes === "Dec" && element.descuento !== null) {
          dicm.push(element.descuento);
        }
      }

      if (year === lastYear  && element.origin == 'Mango') {
        if (mes === "Jan" && element.descuento === null) {
          // estructura interna del if
          return ene2.push(element.precio);
        } else if (mes === "Jan" && element.descuento !== null) {
          ene2.push(element.descuento);
        }
        if (mes === "Feb" && element.descuento === null) {
          // estructura interna del if
          return feb2.push(element.precio);
        } else if (mes === "Feb" && element.descuento !== null) {
          feb2.push(element.descuento);
        }
        if (mes === "Mar" && element.descuento === null) {
          // estructura interna del if
          return mar2.push(element.precio);
        } else if (mes === "Mar" && element.descuento !== null) {
          mar2.push(element.descuento);
        }
        if (mes === "Apr" && element.descuento === null) {
          // estructura interna del if
          return abr2.push(element.precio);
        } else if (mes === "Apr" && element.descuento !== null) {
          abr2.push(element.descuento);
        }
        if (mes === "May" && element.descuento === null) {
          // estructura interna del if
          return may2.push(element.precio);
        } else if (mes === "May" && element.descuento !== null) {
          may2.push(element.descuento);
        }
        if (mes === "Jun" && element.descuento === null) {
          // estructura interna del if
          return jun2.push(element.precio);
        } else if (mes === "Jun" && element.descuento !== null) {
          jun2.push(element.descuento);
        }
        if (mes === "Jul" && element.descuento === null) {
          // estructura interna del if
          return jul2.push(element.precio);
        } else if (mes === "Jul" && element.descuento !== null) {
          jul2.push(element.descuento);
        }
        if (mes === "Aug" && element.descuento === null) {
          // estructura interna del if
          return agos2.push(element.precio);
        } else if (mes === "Aug" && element.descuento !== null) {
          agos2.push(element.descuento);
        }
        if (mes === "Sep" && element.descuento === null) {
          // estructura interna del if
          return sep2.push(element.precio);
        } else if (mes === "Sep" && element.descuento !== null) {
          sep2.push(element.descuento);
        }
        if (mes === "Oct" && element.descuento === null) {
          // estructura interna del if
          return oct2.push(element.precio);
        } else if (mes === "Oct" && element.descuento !== null) {
          oct2.push(element.descuento);
        }
        if (mes === "Nov" && element.descuento === null) {
          // estructura interna del if
          return nov2.push(element.precio);
        } else if (mes === "Nov" && element.descuento !== null) {
          nov2.push(element.descuento);
        }
        if (mes === "Dec" && element.descuento === null) {
          // estructura interna del if
          return dic2.push(element.precio);
        } else if (mes === "Dec" && element.descuento !== null) {
          dic2.push(element.descuento);
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  valuesZ[24] = setAveragePriceMonth(enem);
  valuesZ[25] = setAveragePriceMonth(febm);
  valuesZ[26] = setAveragePriceMonth(marm);
  valuesZ[27] = setAveragePriceMonth(abrm);
  valuesZ[28] = setAveragePriceMonth(maym);
  valuesZ[29] = setAveragePriceMonth(junm);
  valuesZ[30] = setAveragePriceMonth(julm);
  valuesZ[31] = setAveragePriceMonth(agosm);
  valuesZ[32] = setAveragePriceMonth(sepm);
  valuesZ[33] = setAveragePriceMonth(octm);
  valuesZ[34] = setAveragePriceMonth(novm);
  valuesZ[35] = setAveragePriceMonth(dicm);

  // valores del año anterior mango
  valuesZ[36] = setAveragePriceMonth(ene2);
  valuesZ[37] = setAveragePriceMonth(feb2);
  valuesZ[38] = setAveragePriceMonth(mar2);
  valuesZ[39] = setAveragePriceMonth(abr2);
  valuesZ[40] = setAveragePriceMonth(may2);
  valuesZ[41] = setAveragePriceMonth(jun2);
  valuesZ[42] = setAveragePriceMonth(jul2);
  valuesZ[43] = setAveragePriceMonth(agos2);
  valuesZ[44] = setAveragePriceMonth(sep2);
  valuesZ[45] = setAveragePriceMonth(oct2);
  valuesZ[46] = setAveragePriceMonth(nov2);
  valuesZ[47] = setAveragePriceMonth(dic2);
  valuesZ[48] = currentMonth;

  return valuesZ;

};

// metodo para filtrar por mango o zara
exports.averagePriceMonthOrigin = (arr) => {
  let eneZ = [];
  let febZ = [];
  let marZ = [];
  let abrZ = [];
  let mayZ = [];
  let junZ = [];
  let julZ = [];
  let agosZ = [];
  let sepZ = [];
  let octZ = [];
  let novZ = [];
  let dicZ = [];

  let valuesZ = [];

  let ene = [];
  let feb = [];
  let mar = [];
  let abr = [];
  let may = [];
  let jun = [];
  let jul = [];
  let agos = [];
  let sep = [];
  let oct = [];
  let nov = [];
  let dic = [];

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

      if (year === currentYear) {
        if (mes === "Jan" && element.descuento === null) {
          // estructura interna del if
          return eneZ.push(element.precio);
        } else if (mes === "Jan" && element.descuento !== null) {
          eneZ.push(element.descuento);
        }
        if (mes === "Feb" && element.descuento === null) {
          // estructura interna del if
          return febZ.push(element.precio);
        } else if (mes === "Feb" && element.descuento !== null) {
          febZ.push(element.descuento);
        }
        if (mes === "Mar" && element.descuento === null) {
          // estructura interna del if
          return marZ.push(element.precio);
        } else if (mes === "Mar" && element.descuento !== null) {
          marZ.push(element.descuento);
        }
        if (mes === "Apr" && element.descuento === null) {
          // estructura interna del if
          return abrZ.push(element.precio);
        } else if (mes === "Apr" && element.descuento !== null) {
          abrZ.push(element.descuento);
        }
        if (mes === "May" && element.descuento === null) {
          // estructura interna del if
          return mayZ.push(element.precio);
        } else if (mes === "May" && element.descuento !== null) {
          mayZ.push(element.descuento);
        }
        if (mes === "Jun" && element.descuento === null) {
          // estructura interna del if
          return junZ.push(element.precio);
        } else if (mes === "Jun" && element.descuento !== null) {
          junZ.push(element.descuento);
        }
        if (mes === "Jul" && element.descuento === null) {
          // estructura interna del if
          return julZ.push(element.precio);
        } else if (mes === "Jul" && element.descuento !== null) {
          julZ.push(element.descuento);
        }
        if (mes === "Aug" && element.descuento === null) {
          // estructura interna del if
          return agosZ.push(element.precio);
        } else if (mes === "Aug" && element.descuento !== null) {
          agosZ.push(element.descuento);
        }
        if (mes === "Sep" && element.descuento === null) {
          // estructura interna del if
          return sepZ.push(element.precio);
        } else if (mes === "Sep" && element.descuento !== null) {
          sepZ.push(element.descuento);
        }
        if (mes === "Oct" && element.descuento === null) {
          // estructura interna del if
          return octZ.push(element.precio);
        } else if (mes === "Oct" && element.descuento !== null) {
          octZ.push(element.descuento);
        }
        if (mes === "Nov" && element.descuento === null) {
          // estructura interna del if
          return novZ.push(element.precio);
        } else if (mes === "Nov" && element.descuento !== null) {
          novZ.push(element.descuento);
        }
        if (mes === "Dec" && element.descuento === null) {
          // estructura interna del if
          return dicZ.push(element.precio);
        } else if (mes === "Dec" && element.descuento !== null) {
          dicZ.push(element.descuento);
        }
      }

      if (year === lastYear) {
        if (mes === "Jan" && element.descuento === null) {
          // estructura interna del if
          return ene.push(element.precio);
        } else if (mes === "Jan" && element.descuento !== null) {
          ene.push(element.descuento);
        }
        if (mes === "Feb" && element.descuento === null) {
          // estructura interna del if
          return feb.push(element.precio);
        } else if (mes === "Feb" && element.descuento !== null) {
          feb.push(element.descuento);
        }
        if (mes === "Mar" && element.descuento === null) {
          // estructura interna del if
          return mar.push(element.precio);
        } else if (mes === "Mar" && element.descuento !== null) {
          mar.push(element.descuento);
        }
        if (mes === "Apr" && element.descuento === null) {
          // estructura interna del if
          return abr.push(element.precio);
        } else if (mes === "Apr" && element.descuento !== null) {
          abr.push(element.descuento);
        }
        if (mes === "May" && element.descuento === null) {
          // estructura interna del if
          return may.push(element.precio);
        } else if (mes === "May" && element.descuento !== null) {
          may.push(element.descuento);
        }
        if (mes === "Jun" && element.descuento === null) {
          // estructura interna del if
          return jun.push(element.precio);
        } else if (mes === "Jun" && element.descuento !== null) {
          jun.push(element.descuento);
        }
        if (mes === "Jul" && element.descuento === null) {
          // estructura interna del if
          return jul.push(element.precio);
        } else if (mes === "Jul" && element.descuento !== null) {
          jul.push(element.descuento);
        }
        if (mes === "Aug" && element.descuento === null) {
          // estructura interna del if
          return agos.push(element.precio);
        } else if (mes === "Aug" && element.descuento !== null) {
          agos.push(element.descuento);
        }
        if (mes === "Sep" && element.descuento === null) {
          // estructura interna del if
          return sep.push(element.precio);
        } else if (mes === "Sep" && element.descuento !== null) {
          sep.push(element.descuento);
        }
        if (mes === "Oct" && element.descuento === null) {
          // estructura interna del if
          return oct.push(element.precio);
        } else if (mes === "Oct" && element.descuento !== null) {
          oct.push(element.descuento);
        }
        if (mes === "Nov" && element.descuento === null) {
          // estructura interna del if
          return nov.push(element.precio);
        } else if (mes === "Nov" && element.descuento !== null) {
          nov.push(element.descuento);
        }
        if (mes === "Dec" && element.descuento === null) {
          // estructura interna del if
          return dic.push(element.precio);
        } else if (mes === "Dec" && element.descuento !== null) {
          dic.push(element.descuento);
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  valuesZ[0] = setAveragePriceMonth(eneZ);
  valuesZ[1] = setAveragePriceMonth(febZ);
  valuesZ[2] = setAveragePriceMonth(marZ);
  valuesZ[3] = setAveragePriceMonth(abrZ);
  valuesZ[4] = setAveragePriceMonth(mayZ);
  valuesZ[5] = setAveragePriceMonth(junZ);
  valuesZ[6] = setAveragePriceMonth(julZ);
  valuesZ[7] = setAveragePriceMonth(agosZ);
  valuesZ[8] = setAveragePriceMonth(sepZ);
  valuesZ[9] = setAveragePriceMonth(octZ);
  valuesZ[10] = setAveragePriceMonth(novZ);
  valuesZ[11] = setAveragePriceMonth(dicZ);

  valuesZ[12] = setAveragePriceMonth(ene);
  valuesZ[13] = setAveragePriceMonth(feb);
  valuesZ[14] = setAveragePriceMonth(mar);
  valuesZ[15] = setAveragePriceMonth(abr);
  valuesZ[16] = setAveragePriceMonth(may);
  valuesZ[17] = setAveragePriceMonth(jun);
  valuesZ[18] = setAveragePriceMonth(jul);
  valuesZ[19] = setAveragePriceMonth(agos);
  valuesZ[20] = setAveragePriceMonth(sep);
  valuesZ[21] = setAveragePriceMonth(oct);
  valuesZ[22] = setAveragePriceMonth(nov);
  valuesZ[23] = setAveragePriceMonth(dic);
  valuesZ[24] = currentMonth; // mes actual

  return valuesZ;
};

// metodo para sacar el promedio
setAveragePriceMonth = (month) => {
  let value = 0;
  if (month.length === 0) {
    return value;
  }
  month.forEach((element) => {
    value += element;
  });
  return (value = parseFloat((value / month.length).toFixed(2)));
};
