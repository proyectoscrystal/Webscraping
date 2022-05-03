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

// metodo para filtrar por marca
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

  // precios zara
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
          return eneZ.push(element.descuento);
        }
        if (mes === "Feb" && element.descuento === null) {
          // estructura interna del if
          return febZ.push(element.precio);
        } else if (mes === "Feb" && element.descuento !== null) {
          return febZ.push(element.descuento);
        }
        if (mes === "Mar" && element.descuento === null) {
          // estructura interna del if
          return marZ.push(element.precio);
        } else if (mes === "Mar" && element.descuento !== null) {
          return marZ.push(element.descuento);
        }
        if (mes === "Apr" && element.descuento === null) {
          // estructura interna del if
          return abrZ.push(element.precio);
        } else if (mes === "Apr" && element.descuento !== null) {
          return abrZ.push(element.descuento);
        }
        if (mes === "May" && element.descuento === null) {
          // estructura interna del if
          return mayZ.push(element.precio);
        } else if (mes === "May" && element.descuento !== null) {
          return mayZ.push(element.descuento);
        }
        if (mes === "Jun" && element.descuento === null) {
          // estructura interna del if
          return junZ.push(element.precio);
        } else if (mes === "Jun" && element.descuento !== null) {
          return junZ.push(element.descuento);
        }
        if (mes === "Jul" && element.descuento === null) {
          // estructura interna del if
          return julZ.push(element.precio);
        } else if (mes === "Jul" && element.descuento !== null) {
          return julZ.push(element.descuento);
        }
        if (mes === "Aug" && element.descuento === null) {
          // estructura interna del if
          return agosZ.push(element.precio);
        } else if (mes === "Aug" && element.descuento !== null) {
          return agosZ.push(element.descuento);
        }
        if (mes === "Sep" && element.descuento === null) {
          // estructura interna del if
          return sepZ.push(element.precio);
        } else if (mes === "Sep" && element.descuento !== null) {
          return sepZ.push(element.descuento);
        }
        if (mes === "Oct" && element.descuento === null) {
          // estructura interna del if
          return octZ.push(element.precio);
        } else if (mes === "Oct" && element.descuento !== null) {
          return octZ.push(element.descuento);
        }
        if (mes === "Nov" && element.descuento === null) {
          // estructura interna del if
          return novZ.push(element.precio);
        } else if (mes === "Nov" && element.descuento !== null) {
          return novZ.push(element.descuento);
        }
        if (mes === "Dec" && element.descuento === null) {
          // estructura interna del if
          return dicZ.push(element.precio);
        } else if (mes === "Dec" && element.descuento !== null) {
          return dicZ.push(element.descuento);
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

  // precios mango

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

  // datos de mango desde la posicion [48] a la [47]

  let eneG = [];
  let febG = [];
  let marG = [];
  let abrG = [];
  let mayG = [];
  let junG = [];
  let julG = [];
  let agosG = [];
  let sepG = [];
  let octG = [];
  let novG = [];
  let dicG = [];

  let ene3 = [];
  let feb3 = [];
  let mar3 = [];
  let abr3 = [];
  let may3 = [];
  let jun3 = [];
  let jul3 = [];
  let agos3 = [];
  let sep3 = [];
  let oct3 = [];
  let nov3 = [];
  let dic3 = [];

  // precios Gef;

  try {
    arr.forEach((element) => {
      let date = new Date();
      let currentYear = date.getFullYear();
      let lastYear = date.getFullYear() - 1;
      let fecha = element.createdAt + ""; // funcion para obtener la fecha
      let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
      let year = parseInt(fecha.split(" ")[3]);

      if (year === currentYear && element.origin == 'Gef' && element.precio !== undefined) {
        if (mes === "Jan" && element.descuento === null) {
          // estructura interna del if
          return eneG.push(element.precio);
        } else if (mes === "Jan" && element.descuento !== null) {
          eneG.push(element.descuento);
        }
        if (mes === "Feb" && element.descuento === null) {
          // estructura interna del if
          return febG.push(element.precio);
        } else if (mes === "Feb" && element.descuento !== null) {
          febG.push(element.descuento);
        }
        if (mes === "Mar" && element.descuento === null) {
          // estructura interna del if
          return marG.push(element.precio);
        } else if (mes === "Mar" && element.descuento !== null) {
          marG.push(element.descuento);
        }
        if (mes === "Apr" && element.descuento === null) {
          // estructura interna del if
          return abrG.push(element.precio);
        } else if (mes === "Apr" && element.descuento !== null) {
          abrG.push(element.descuento);
        }
        if (mes === "May" && element.descuento === null) {
          // estructura interna del if
          return mayG.push(element.precio);
        } else if (mes === "May" && element.descuento !== null) {
          mayG.push(element.descuento);
        }
        if (mes === "Jun" && element.descuento === null) {
          // estructura interna del if
          return junG.push(element.precio);
        } else if (mes === "Jun" && element.descuento !== null) {
          junG.push(element.descuento);
        }
        if (mes === "Jul" && element.descuento === null) {
          // estructura interna del if
          return julG.push(element.precio);
        } else if (mes === "Jul" && element.descuento !== null) {
          julG.push(element.descuento);
        }
        if (mes === "Aug" && element.descuento === null) {
          // estructura interna del if
          return agosG.push(element.precio);
        } else if (mes === "Aug" && element.descuento !== null) {
          agosG.push(element.descuento);
        }
        if (mes === "Sep" && element.descuento === null) {
          // estructura interna del if
          return sepG.push(element.precio);
        } else if (mes === "Sep" && element.descuento !== null) {
          sepG.push(element.descuento);
        }
        if (mes === "Oct" && element.descuento === null) {
          // estructura interna del if
          return octG.push(element.precio);
        } else if (mes === "Oct" && element.descuento !== null) {
          octG.push(element.descuento);
        }
        if (mes === "Nov" && element.descuento === null) {
          // estructura interna del if
          return novG.push(element.precio);
        } else if (mes === "Nov" && element.descuento !== null) {
          novG.push(element.descuento);
        }
        if (mes === "Dec" && element.descuento === null) {
          // estructura interna del if
          return dicG.push(element.precio);
        } else if (mes === "Dec" && element.descuento !== null) {
          dicG.push(element.descuento);
        }
      }

      if (year === lastYear  && element.origin == 'Gef' && element.precio !== undefined) {
        if (mes === "Jan" && element.descuento === null) {
          // estructura interna del if
          return ene3.push(element.precio);
        } else if (mes === "Jan" && element.descuento !== null) {
          ene3.push(element.descuento);
        }
        if (mes === "Feb" && element.descuento === null) {
          // estructura interna del if
          return feb3.push(element.precio);
        } else if (mes === "Feb" && element.descuento !== null) {
          feb3.push(element.descuento);
        }
        if (mes === "Mar" && element.descuento === null) {
          // estructura interna del if
          return mar3.push(element.precio);
        } else if (mes === "Mar" && element.descuento !== null) {
          mar3.push(element.descuento);
        }
        if (mes === "Apr" && element.descuento === null) {
          // estructura interna del if
          return abr3.push(element.precio);
        } else if (mes === "Apr" && element.descuento !== null) {
          abr3.push(element.descuento);
        }
        if (mes === "May" && element.descuento === null) {
          // estructura interna del if
          return may3.push(element.precio);
        } else if (mes === "May" && element.descuento !== null) {
          may3.push(element.descuento);
        }
        if (mes === "Jun" && element.descuento === null) {
          // estructura interna del if
          return jun3.push(element.precio);
        } else if (mes === "Jun" && element.descuento !== null) {
          jun3.push(element.descuento);
        }
        if (mes === "Jul" && element.descuento === null) {
          // estructura interna del if
          return jul3.push(element.precio);
        } else if (mes === "Jul" && element.descuento !== null) {
          jul3.push(element.descuento);
        }
        if (mes === "Aug" && element.descuento === null) {
          // estructura interna del if
          return agos3.push(element.precio);
        } else if (mes === "Aug" && element.descuento !== null) {
          agos3.push(element.descuento);
        }
        if (mes === "Sep" && element.descuento === null) {
          // estructura interna del if
          return sep3.push(element.precio);
        } else if (mes === "Sep" && element.descuento !== null) {
          sep3.push(element.descuento);
        }
        if (mes === "Oct" && element.descuento === null) {
          // estructura interna del if
          return oct3.push(element.precio);
        } else if (mes === "Oct" && element.descuento !== null) {
          oct3.push(element.descuento);
        }
        if (mes === "Nov" && element.descuento === null) {
          // estructura interna del if
          return nov3.push(element.precio);
        } else if (mes === "Nov" && element.descuento !== null) {
          nov3.push(element.descuento);
        }
        if (mes === "Dec" && element.descuento === null) {
          // estructura interna del if
          return dic3.push(element.precio);
        } else if (mes === "Dec" && element.descuento !== null) {
          dic3.push(element.descuento);
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  valuesZ[48] = setAveragePriceMonth(eneG);
  valuesZ[49] = setAveragePriceMonth(febG);
  valuesZ[50] = setAveragePriceMonth(marG);
  valuesZ[51] = setAveragePriceMonth(abrG);
  valuesZ[52] = setAveragePriceMonth(mayG);
  valuesZ[53] = setAveragePriceMonth(junG);
  valuesZ[54] = setAveragePriceMonth(julG);
  valuesZ[55] = setAveragePriceMonth(agosG);
  valuesZ[56] = setAveragePriceMonth(sepG);
  valuesZ[57] = setAveragePriceMonth(octG);
  valuesZ[58] = setAveragePriceMonth(novG);
  valuesZ[59] = setAveragePriceMonth(dicG);

  // valores del año anterior GEf
  valuesZ[60] = setAveragePriceMonth(ene3);
  valuesZ[61] = setAveragePriceMonth(feb3);
  valuesZ[62] = setAveragePriceMonth(mar3);
  valuesZ[63] = setAveragePriceMonth(abr3);
  valuesZ[64] = setAveragePriceMonth(may3);
  valuesZ[65] = setAveragePriceMonth(jun3);
  valuesZ[66] = setAveragePriceMonth(jul3);
  valuesZ[67] = setAveragePriceMonth(agos3);
  valuesZ[68] = setAveragePriceMonth(sep3);
  valuesZ[69] = setAveragePriceMonth(oct3);
  valuesZ[70] = setAveragePriceMonth(nov3);
  valuesZ[71] = setAveragePriceMonth(dic3);

   // datos de Punto Blanco desde la posicion [48] a la [71]

   let enePB = [];
   let febPB = [];
   let marPB = [];
   let abrPB = [];
   let mayPB = [];
   let junPB = [];
   let julPB = [];
   let agosPB = [];
   let sepPB = [];
   let octPB = [];
   let novPB = [];
   let dicPB = [];
 
   let ene4 = [];
   let feb4 = [];
   let mar4 = [];
   let abr4 = [];
   let may4 = [];
   let jun4 = [];
   let jul4 = [];
   let agos4 = [];
   let sep4 = [];
   let oct4 = [];
   let nov4 = [];
   let dic4 = [];
 
   // precios punto blanco;
 
   try {
     arr.forEach((element) => {
       let date = new Date();
       let currentYear = date.getFullYear();
       let lastYear = date.getFullYear() - 1;
       let fecha = element.createdAt + ""; // funcion para obtener la fecha
       let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
       let year = parseInt(fecha.split(" ")[3]);
 
       if (year === currentYear && element.origin == 'Punto blanco' && element.precio !== undefined) {
         if (mes === "Jan" && element.descuento === null) {
           // estructura interna del if
           return enePB.push(element.precio);
         } else if (mes === "Jan" && element.descuento !== null) {
           enePB.push(element.descuento);
         }
         if (mes === "Feb" && element.descuento === null) {
           // estructura interna del if
           return febPB.push(element.precio);
         } else if (mes === "Feb" && element.descuento !== null) {
           febPB.push(element.descuento);
         }
         if (mes === "Mar" && element.descuento === null) {
           // estructura interna del if
           return marPB.push(element.precio);
         } else if (mes === "Mar" && element.descuento !== null) {
           marPB.push(element.descuento);
         }
         if (mes === "Apr" && element.descuento === null) {
           // estructura interna del if
           return abrPB.push(element.precio);
         } else if (mes === "Apr" && element.descuento !== null) {
           abrPB.push(element.descuento);
         }
         if (mes === "May" && element.descuento === null) {
           // estructura interna del if
           return mayPB.push(element.precio);
         } else if (mes === "May" && element.descuento !== null) {
           mayPB.push(element.descuento);
         }
         if (mes === "Jun" && element.descuento === null) {
           // estructura interna del if
           return junPB.push(element.precio);
         } else if (mes === "Jun" && element.descuento !== null) {
           junPB.push(element.descuento);
         }
         if (mes === "Jul" && element.descuento === null) {
           // estructura interna del if
           return julPB.push(element.precio);
         } else if (mes === "Jul" && element.descuento !== null) {
           julPB.push(element.descuento);
         }
         if (mes === "Aug" && element.descuento === null) {
           // estructura interna del if
           return agosPB.push(element.precio);
         } else if (mes === "Aug" && element.descuento !== null) {
           agosPB.push(element.descuento);
         }
         if (mes === "Sep" && element.descuento === null) {
           // estructura interna del if
           return sepPB.push(element.precio);
         } else if (mes === "Sep" && element.descuento !== null) {
           sepPB.push(element.descuento);
         }
         if (mes === "Oct" && element.descuento === null) {
           // estructura interna del if
           return octPB.push(element.precio);
         } else if (mes === "Oct" && element.descuento !== null) {
           octPB.push(element.descuento);
         }
         if (mes === "Nov" && element.descuento === null) {
           // estructura interna del if
           return novPB.push(element.precio);
         } else if (mes === "Nov" && element.descuento !== null) {
           novPB.push(element.descuento);
         }
         if (mes === "Dec" && element.descuento === null) {
           // estructura interna del if
           return dicPB.push(element.precio);
         } else if (mes === "Dec" && element.descuento !== null) {
           dicPB.push(element.descuento);
         }
       }
 
       if (year === lastYear  && element.origin == 'Punto blanco' && element.precio !== undefined) {
         if (mes === "Jan" && element.descuento === null) {
           // estructura interna del if
           return ene4.push(element.precio);
         } else if (mes === "Jan" && element.descuento !== null) {
           ene4.push(element.descuento);
         }
         if (mes === "Feb" && element.descuento === null) {
           // estructura interna del if
           return feb4.push(element.precio);
         } else if (mes === "Feb" && element.descuento !== null) {
           feb4.push(element.descuento);
         }
         if (mes === "Mar" && element.descuento === null) {
           // estructura interna del if
           return mar4.push(element.precio);
         } else if (mes === "Mar" && element.descuento !== null) {
           mar4.push(element.descuento);
         }
         if (mes === "Apr" && element.descuento === null) {
           // estructura interna del if
           return abr4.push(element.precio);
         } else if (mes === "Apr" && element.descuento !== null) {
           abr4.push(element.descuento);
         }
         if (mes === "May" && element.descuento === null) {
           // estructura interna del if
           return may4.push(element.precio);
         } else if (mes === "May" && element.descuento !== null) {
           may4.push(element.descuento);
         }
         if (mes === "Jun" && element.descuento === null) {
           // estructura interna del if
           return jun4.push(element.precio);
         } else if (mes === "Jun" && element.descuento !== null) {
           jun4.push(element.descuento);
         }
         if (mes === "Jul" && element.descuento === null) {
           // estructura interna del if
           return jul4.push(element.precio);
         } else if (mes === "Jul" && element.descuento !== null) {
           jul4.push(element.descuento);
         }
         if (mes === "Aug" && element.descuento === null) {
           // estructura interna del if
           return agos4.push(element.precio);
         } else if (mes === "Aug" && element.descuento !== null) {
           agos4.push(element.descuento);
         }
         if (mes === "Sep" && element.descuento === null) {
           // estructura interna del if
           return sep4.push(element.precio);
         } else if (mes === "Sep" && element.descuento !== null) {
           sep4.push(element.descuento);
         }
         if (mes === "Oct" && element.descuento === null) {
           // estructura interna del if
           return oct4.push(element.precio);
         } else if (mes === "Oct" && element.descuento !== null) {
           oct4.push(element.descuento);
         }
         if (mes === "Nov" && element.descuento === null) {
           // estructura interna del if
           return nov4.push(element.precio);
         } else if (mes === "Nov" && element.descuento !== null) {
           nov4.push(element.descuento);
         }
         if (mes === "Dec" && element.descuento === null) {
           // estructura interna del if
           return dic4.push(element.precio);
         } else if (mes === "Dec" && element.descuento !== null) {
           dic4.push(element.descuento);
         }
       }
     }); // fin del ciclo que guarda los precios de cada mes
   } catch (error) {
     console.log(error);
   }
 
   valuesZ[72] = setAveragePriceMonth(enePB);
   valuesZ[73] = setAveragePriceMonth(febPB);
   valuesZ[74] = setAveragePriceMonth(marPB);
   valuesZ[75] = setAveragePriceMonth(abrPB);
   valuesZ[76] = setAveragePriceMonth(mayPB);
   valuesZ[77] = setAveragePriceMonth(junPB);
   valuesZ[78] = setAveragePriceMonth(julPB);
   valuesZ[79] = setAveragePriceMonth(agosPB);
   valuesZ[80] = setAveragePriceMonth(sepPB);
   valuesZ[81] = setAveragePriceMonth(octPB);
   valuesZ[82] = setAveragePriceMonth(novPB);
   valuesZ[83] = setAveragePriceMonth(dicPB);
 
   // valores del año anterior Punto blanco
   valuesZ[84] = setAveragePriceMonth(ene4);
   valuesZ[85] = setAveragePriceMonth(feb4);
   valuesZ[86] = setAveragePriceMonth(mar4);
   valuesZ[87] = setAveragePriceMonth(abr4);
   valuesZ[88] = setAveragePriceMonth(may4);
   valuesZ[89] = setAveragePriceMonth(jun4);
   valuesZ[90] = setAveragePriceMonth(jul4);
   valuesZ[91] = setAveragePriceMonth(agos4);
   valuesZ[92] = setAveragePriceMonth(sep4);
   valuesZ[93] = setAveragePriceMonth(oct4);
   valuesZ[94] = setAveragePriceMonth(nov4);
   valuesZ[95] = setAveragePriceMonth(dic4);
 
   // datos de Baby Fresh desde la posicion [96] a la [119]

   let eneBF = [];
   let febBF = [];
   let marBF = [];
   let abrBF = [];
   let mayBF = [];
   let junBF = [];
   let julBF = [];
   let agosBF = [];
   let sepBF = [];
   let octBF = [];
   let novBF = [];
   let dicBF = [];
 
   let ene5 = [];
   let feb5 = [];
   let mar5 = [];
   let abr5 = [];
   let may5 = [];
   let jun5 = [];
   let jul5 = [];
   let agos5 = [];
   let sep5 = [];
   let oct5 = [];
   let nov5 = [];
   let dic5 = [];
 
 
   try {
     arr.forEach((element) => {
       let date = new Date();
       let currentYear = date.getFullYear();
       let lastYear = date.getFullYear() - 1;
       let fecha = element.createdAt + ""; // funcion para obtener la fecha
       let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
       let year = parseInt(fecha.split(" ")[3]);
 
       if (year === currentYear && element.origin == 'Baby fresh' && element.precio !== undefined) {
         if (mes === "Jan" && element.descuento === null) {
           // estructura interna del if
           return eneBF.push(element.precio);
         } else if (mes === "Jan" && element.descuento !== null) {
           eneBF.push(element.descuento);
         }
         if (mes === "Feb" && element.descuento === null) {
           // estructura interna del if
           return febBF.push(element.precio);
         } else if (mes === "Feb" && element.descuento !== null) {
           febBF.push(element.descuento);
         }
         if (mes === "Mar" && element.descuento === null) {
           // estructura interna del if
           return marBF.push(element.precio);
         } else if (mes === "Mar" && element.descuento !== null) {
           marBF.push(element.descuento);
         }
         if (mes === "Apr" && element.descuento === null) {
           // estructura interna del if
           return abrBF.push(element.precio);
         } else if (mes === "Apr" && element.descuento !== null) {
           abrBF.push(element.descuento);
         }
         if (mes === "May" && element.descuento === null) {
           // estructura interna del if
           return mayBF.push(element.precio);
         } else if (mes === "May" && element.descuento !== null) {
           mayBF.push(element.descuento);
         }
         if (mes === "Jun" && element.descuento === null) {
           // estructura interna del if
           return junBF.push(element.precio);
         } else if (mes === "Jun" && element.descuento !== null) {
           junBF.push(element.descuento);
         }
         if (mes === "Jul" && element.descuento === null) {
           // estructura interna del if
           return julBF.push(element.precio);
         } else if (mes === "Jul" && element.descuento !== null) {
           julBF.push(element.descuento);
         }
         if (mes === "Aug" && element.descuento === null) {
           // estructura interna del if
           return agosBF.push(element.precio);
         } else if (mes === "Aug" && element.descuento !== null) {
           agosBF.push(element.descuento);
         }
         if (mes === "Sep" && element.descuento === null) {
           // estructura interna del if
           return sepBF.push(element.precio);
         } else if (mes === "Sep" && element.descuento !== null) {
           sepBF.push(element.descuento);
         }
         if (mes === "Oct" && element.descuento === null) {
           // estructura interna del if
           return octBF.push(element.precio);
         } else if (mes === "Oct" && element.descuento !== null) {
           octBF.push(element.descuento);
         }
         if (mes === "Nov" && element.descuento === null) {
           // estructura interna del if
           return novBF.push(element.precio);
         } else if (mes === "Nov" && element.descuento !== null) {
           novBF.push(element.descuento);
         }
         if (mes === "Dec" && element.descuento === null) {
           // estructura interna del if
           return dicBF.push(element.precio);
         } else if (mes === "Dec" && element.descuento !== null) {
           dicBF.push(element.descuento);
         }
       }
 
       if (year === lastYear  && element.origin == 'Baby fresh' && element.precio !== undefined) {
         if (mes === "Jan" && element.descuento === null) {
           // estructura interna del if
           return ene5.push(element.precio);
         } else if (mes === "Jan" && element.descuento !== null) {
           ene5.push(element.descuento);
         }
         if (mes === "Feb" && element.descuento === null) {
           // estructura interna del if
           return feb5.push(element.precio);
         } else if (mes === "Feb" && element.descuento !== null) {
           feb5.push(element.descuento);
         }
         if (mes === "Mar" && element.descuento === null) {
           // estructura interna del if
           return mar5.push(element.precio);
         } else if (mes === "Mar" && element.descuento !== null) {
           mar5.push(element.descuento);
         }
         if (mes === "Apr" && element.descuento === null) {
           // estructura interna del if
           return abr5.push(element.precio);
         } else if (mes === "Apr" && element.descuento !== null) {
           abr5.push(element.descuento);
         }
         if (mes === "May" && element.descuento === null) {
           // estructura interna del if
           return may5.push(element.precio);
         } else if (mes === "May" && element.descuento !== null) {
           may5.push(element.descuento);
         }
         if (mes === "Jun" && element.descuento === null) {
           // estructura interna del if
           return jun5.push(element.precio);
         } else if (mes === "Jun" && element.descuento !== null) {
           jun5.push(element.descuento);
         }
         if (mes === "Jul" && element.descuento === null) {
           // estructura interna del if
           return jul5.push(element.precio);
         } else if (mes === "Jul" && element.descuento !== null) {
           jul5.push(element.descuento);
         }
         if (mes === "Aug" && element.descuento === null) {
           // estructura interna del if
           return agos5.push(element.precio);
         } else if (mes === "Aug" && element.descuento !== null) {
           agos5.push(element.descuento);
         }
         if (mes === "Sep" && element.descuento === null) {
           // estructura interna del if
           return sep5.push(element.precio);
         } else if (mes === "Sep" && element.descuento !== null) {
           sep5.push(element.descuento);
         }
         if (mes === "Oct" && element.descuento === null) {
           // estructura interna del if
           return oct5.push(element.precio);
         } else if (mes === "Oct" && element.descuento !== null) {
           oct5.push(element.descuento);
         }
         if (mes === "Nov" && element.descuento === null) {
           // estructura interna del if
           return nov5.push(element.precio);
         } else if (mes === "Nov" && element.descuento !== null) {
           nov5.push(element.descuento);
         }
         if (mes === "Dec" && element.descuento === null) {
           // estructura interna del if
           return dic5.push(element.precio);
         } else if (mes === "Dec" && element.descuento !== null) {
           dic5.push(element.descuento);
         }
       }
     }); // fin del ciclo que guarda los precios de cada mes
   } catch (error) {
     console.log(error);
   }
 
   valuesZ[96] = setAveragePriceMonth(eneBF);
   valuesZ[97] = setAveragePriceMonth(febBF);
   valuesZ[98] = setAveragePriceMonth(marBF);
   valuesZ[99] = setAveragePriceMonth(abrBF);
   valuesZ[100] = setAveragePriceMonth(mayBF);
   valuesZ[101] = setAveragePriceMonth(junBF);
   valuesZ[102] = setAveragePriceMonth(julBF);
   valuesZ[103] = setAveragePriceMonth(agosBF);
   valuesZ[104] = setAveragePriceMonth(sepBF);
   valuesZ[105] = setAveragePriceMonth(octBF);
   valuesZ[106] = setAveragePriceMonth(novBF);
   valuesZ[107] = setAveragePriceMonth(dicBF);
 
   // valores del año anterior Baby Fresh
   valuesZ[108] = setAveragePriceMonth(ene5);
   valuesZ[109] = setAveragePriceMonth(feb5);
   valuesZ[110] = setAveragePriceMonth(mar5);
   valuesZ[111] = setAveragePriceMonth(abr5);
   valuesZ[112] = setAveragePriceMonth(may5);
   valuesZ[113] = setAveragePriceMonth(jun5);
   valuesZ[114] = setAveragePriceMonth(jul5);
   valuesZ[115] = setAveragePriceMonth(agos5);
   valuesZ[116] = setAveragePriceMonth(sep5);
   valuesZ[117] = setAveragePriceMonth(oct5);
   valuesZ[118] = setAveragePriceMonth(nov5);
   valuesZ[119] = setAveragePriceMonth(dic5);

    // datos de Galax desde la posicion [96] a la [119]

    let eneGA = [];
    let febGA = [];
    let marGA = [];
    let abrGA = [];
    let mayGA = [];
    let junGA = [];
    let julGA = [];
    let agosGA = [];
    let sepGA = [];
    let octGA = [];
    let novGA = [];
    let dicGA = [];
  
    let ene6 = [];
    let feb6 = [];
    let mar6 = [];
    let abr6 = [];
    let may6 = [];
    let jun6 = [];
    let jul6 = [];
    let agos6 = [];
    let sep6 = [];
    let oct6 = [];
    let nov6 = [];
    let dic6 = [];
  
  
    try {
      arr.forEach((element) => {
        let date = new Date();
        let currentYear = date.getFullYear();
        let lastYear = date.getFullYear() - 1;
        let fecha = element.createdAt + ""; // funcion para obtener la fecha
        let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
        let year = parseInt(fecha.split(" ")[3]);
  
        if (year === currentYear && element.origin == 'Galax' && element.precio !== undefined) {
          if (mes === "Jan" && element.descuento === null) {
            // estructura interna del if
            return eneGA.push(element.precio);
          } else if (mes === "Jan" && element.descuento !== null) {
            eneGA.push(element.descuento);
          }
          if (mes === "Feb" && element.descuento === null) {
            // estructura interna del if
            return febGA.push(element.precio);
          } else if (mes === "Feb" && element.descuento !== null) {
            febGA.push(element.descuento);
          }
          if (mes === "Mar" && element.descuento === null) {
            // estructura interna del if
            return marGA.push(element.precio);
          } else if (mes === "Mar" && element.descuento !== null) {
            marGA.push(element.descuento);
          }
          if (mes === "Apr" && element.descuento === null) {
            // estructura interna del if
            return abrGA.push(element.precio);
          } else if (mes === "Apr" && element.descuento !== null) {
            abrGA.push(element.descuento);
          }
          if (mes === "May" && element.descuento === null) {
            // estructura interna del if
            return mayGA.push(element.precio);
          } else if (mes === "May" && element.descuento !== null) {
            mayGA.push(element.descuento);
          }
          if (mes === "Jun" && element.descuento === null) {
            // estructura interna del if
            return junGA.push(element.precio);
          } else if (mes === "Jun" && element.descuento !== null) {
            junGA.push(element.descuento);
          }
          if (mes === "Jul" && element.descuento === null) {
            // estructura interna del if
            return julGA.push(element.precio);
          } else if (mes === "Jul" && element.descuento !== null) {
            julGA.push(element.descuento);
          }
          if (mes === "Aug" && element.descuento === null) {
            // estructura interna del if
            return agosGA.push(element.precio);
          } else if (mes === "Aug" && element.descuento !== null) {
            agosGA.push(element.descuento);
          }
          if (mes === "Sep" && element.descuento === null) {
            // estructura interna del if
            return sepGA.push(element.precio);
          } else if (mes === "Sep" && element.descuento !== null) {
            sepGA.push(element.descuento);
          }
          if (mes === "Oct" && element.descuento === null) {
            // estructura interna del if
            return octGA.push(element.precio);
          } else if (mes === "Oct" && element.descuento !== null) {
            octGA.push(element.descuento);
          }
          if (mes === "Nov" && element.descuento === null) {
            // estructura interna del if
            return novGA.push(element.precio);
          } else if (mes === "Nov" && element.descuento !== null) {
            novGA.push(element.descuento);
          }
          if (mes === "Dec" && element.descuento === null) {
            // estructura interna del if
            return dicGA.push(element.precio);
          } else if (mes === "Dec" && element.descuento !== null) {
            dicGA.push(element.descuento);
          }
        }
  
        if (year === lastYear  && element.origin == 'Galax' && element.precio !== undefined) {
          if (mes === "Jan" && element.descuento === null) {
            // estructura interna del if
            return ene6.push(element.precio);
          } else if (mes === "Jan" && element.descuento !== null) {
            ene6.push(element.descuento);
          }
          if (mes === "Feb" && element.descuento === null) {
            // estructura interna del if
            return feb6.push(element.precio);
          } else if (mes === "Feb" && element.descuento !== null) {
            feb6.push(element.descuento);
          }
          if (mes === "Mar" && element.descuento === null) {
            // estructura interna del if
            return mar6.push(element.precio);
          } else if (mes === "Mar" && element.descuento !== null) {
            mar6.push(element.descuento);
          }
          if (mes === "Apr" && element.descuento === null) {
            // estructura interna del if
            return abr6.push(element.precio);
          } else if (mes === "Apr" && element.descuento !== null) {
            abr6.push(element.descuento);
          }
          if (mes === "May" && element.descuento === null) {
            // estructura interna del if
            return may6.push(element.precio);
          } else if (mes === "May" && element.descuento !== null) {
            may6.push(element.descuento);
          }
          if (mes === "Jun" && element.descuento === null) {
            // estructura interna del if
            return jun6.push(element.precio);
          } else if (mes === "Jun" && element.descuento !== null) {
            jun6.push(element.descuento);
          }
          if (mes === "Jul" && element.descuento === null) {
            // estructura interna del if
            return jul6.push(element.precio);
          } else if (mes === "Jul" && element.descuento !== null) {
            jul6.push(element.descuento);
          }
          if (mes === "Aug" && element.descuento === null) {
            // estructura interna del if
            return agos6.push(element.precio);
          } else if (mes === "Aug" && element.descuento !== null) {
            agos6.push(element.descuento);
          }
          if (mes === "Sep" && element.descuento === null) {
            // estructura interna del if
            return sep6.push(element.precio);
          } else if (mes === "Sep" && element.descuento !== null) {
            sep6.push(element.descuento);
          }
          if (mes === "Oct" && element.descuento === null) {
            // estructura interna del if
            return oct6.push(element.precio);
          } else if (mes === "Oct" && element.descuento !== null) {
            oct6.push(element.descuento);
          }
          if (mes === "Nov" && element.descuento === null) {
            // estructura interna del if
            return nov6.push(element.precio);
          } else if (mes === "Nov" && element.descuento !== null) {
            nov6.push(element.descuento);
          }
          if (mes === "Dec" && element.descuento === null) {
            // estructura interna del if
            return dic6.push(element.precio);
          } else if (mes === "Dec" && element.descuento !== null) {
            dic6.push(element.descuento);
          }
        }
      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    valuesZ[120] = setAveragePriceMonth(eneGA);
    valuesZ[121] = setAveragePriceMonth(febGA);
    valuesZ[122] = setAveragePriceMonth(marGA);
    valuesZ[123] = setAveragePriceMonth(abrGA);
    valuesZ[124] = setAveragePriceMonth(mayGA);
    valuesZ[125] = setAveragePriceMonth(junGA);
    valuesZ[126] = setAveragePriceMonth(julGA);
    valuesZ[127] = setAveragePriceMonth(agosGA);
    valuesZ[128] = setAveragePriceMonth(sepGA);
    valuesZ[129] = setAveragePriceMonth(octGA);
    valuesZ[130] = setAveragePriceMonth(novGA);
    valuesZ[131] = setAveragePriceMonth(dicGA);
  
    // valores del año anterior Baby Fresh
    valuesZ[132] = setAveragePriceMonth(ene6);
    valuesZ[133] = setAveragePriceMonth(feb6);
    valuesZ[134] = setAveragePriceMonth(mar6);
    valuesZ[135] = setAveragePriceMonth(abr6);
    valuesZ[136] = setAveragePriceMonth(may6);
    valuesZ[137] = setAveragePriceMonth(jun6);
    valuesZ[138] = setAveragePriceMonth(jul6);
    valuesZ[139] = setAveragePriceMonth(agos6);
    valuesZ[140] = setAveragePriceMonth(sep6);
    valuesZ[141] = setAveragePriceMonth(oct6);
    valuesZ[142] = setAveragePriceMonth(nov6);
    valuesZ[143] = setAveragePriceMonth(dic6);

  return valuesZ;

};

// metodo para filtrar por mango o zara array de precios promedios por mes
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
