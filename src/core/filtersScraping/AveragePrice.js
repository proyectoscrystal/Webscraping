const { object } = require("into-stream");

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
  return parseInt((precioPromedio / arr.length).toFixed());
};

// metodo para filtrar por ambas marcas mango y zara
exports.averagePriceMonthGeneral = arr => {
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

  // let count = 1;

  try {
    arr.forEach( element => {
      let date = new Date();
      let currentYear = date.getFullYear();
      let lastYear = date.getFullYear() - 1;
      let fecha = element.createdAt + ''; // funcion para obtener la fecha
      let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero      
      let year = parseInt(fecha.split(" ")[3]);
      
        
      

      if (year === currentYear) {
        if (mes === 'Jan' && element.descuento === null) {
          // estructura interna del if
          return eneZ.push(element.precio);
        } else if(mes === 'Jan' && element.descuento !== null) {
          eneZ.push(element.descuento);
        }
        if (mes === 'Feb' && element.descuento === null) {
          // estructura interna del if
          return febZ.push(element.precio);
        } else if(mes === 'Feb' && element.descuento !== null)  {
          febZ.push(element.descuento);
        }
        if (mes === 'Mar' && element.descuento === null) {
          // estructura interna del if
          return marZ.push(element.precio);
        } else if(mes === 'Mar' && element.descuento !== null)  {
          marZ.push(element.descuento);
        }
        if (mes === 'Apr' && element.descuento === null) {
          // estructura interna del if
          return abrZ.push(element.precio);
        } else if(mes === 'Apr' && element.descuento !== null)  {
          abrZ.push(element.descuento);
        }
        if (mes === 'May' && element.descuento === null) {
          // estructura interna del if
          return mayZ.push(element.precio);
        } else if(mes === 'May' && element.descuento !== null)  {
          mayZ.push(element.descuento);
        }
        if (mes === 'Jun' && element.descuento === null) {
          // estructura interna del if
          return junZ.push(element.precio);
        } else if(mes === 'Jun' && element.descuento !== null)  {
          junZ.push(element.descuento);
        }
        if (mes === 'Jul' && element.descuento === null) {
          // estructura interna del if
          return julZ.push(element.precio);
        } else if(mes === 'Jul' && element.descuento !== null)  {
          julZ.push(element.descuento);
        }
        if (mes === 'Aug' && element.descuento === null) {
          // estructura interna del if
          return agosZ.push(element.precio);
        } else if(mes === 'Aug' && element.descuento !== null)  {
          agosZ.push(element.descuento);
        }
        if (mes === 'Sep' && element.descuento === null) {
          // estructura interna del if
          return sepZ.push(element.precio);
        } else if(mes === 'Sep' && element.descuento !== null)  {
          sepZ.push(element.descuento);
        }
        if (mes === 'Oct' && element.descuento === null) {
          // estructura interna del if
          return octZ.push(element.precio);
        } else if(mes === 'Oct' && element.descuento !== null)  {
          octZ.push(element.descuento);
        }
        if (mes === 'Nov' && element.descuento === null) {
          // estructura interna del if
          return novZ.push(element.precio);
        } else if(mes === 'Nov' && element.descuento !== null)  {
          novZ.push(element.descuento);
        }
        if (mes === 'Dec' && element.descuento === null) {
          // estructura interna del if
          return dicZ.push(element.precio);
        } else if(mes === 'Dec' && element.descuento !== null)  {
          dicZ.push(element.descuento);
        }
      }

      if (year === lastYear) {
        if (mes === 'Jan' && element.descuento === null) {
          // estructura interna del if
          return ene.push(element.precio);
        } else if(mes === 'Jan' && element.descuento !== null)  {
          ene.push(element.descuento);
        }
        if (mes === 'Feb' && element.descuento === null) {
          // estructura interna del if
          return feb.push(element.precio);
        } else if(mes === 'Feb' && element.descuento !== null)  {
          feb.push(element.descuento);
        }
        if (mes === 'Mar' && element.descuento === null) {
          // estructura interna del if
          return mar.push(element.precio);
        } else if(mes === 'Mar' && element.descuento !== null)  {
          mar.push(element.descuento);
        }
        if (mes === 'Apr' && element.descuento === null) {
          // estructura interna del if
          return abr.push(element.precio);
        } else if(mes === 'Apr' && element.descuento !== null)  {
          abr.push(element.descuento);
        }
        if (mes === 'May' && element.descuento === null) {
          // estructura interna del if
          return  may.push(element.precio);
        } else if(mes === 'May' && element.descuento !== null)  {
          may.push(element.descuento);
        }
        if (mes === 'Jun' && element.descuento === null) {
          // estructura interna del if
          return jun.push(element.precio);
        } else if(mes === 'Jun' && element.descuento !== null)  {
          jun.push(element.descuento);
        }
        if (mes === 'Jul' && element.descuento === null) {
          // estructura interna del if
          return jul.push(element.precio);
        } else if(mes === 'Jul' && element.descuento !== null)  {
          jul.push(element.descuento);
        }
        if (mes === 'Aug' && element.descuento === null) {
          // estructura interna del if
          return agos.push(element.precio);
        } else if(mes === 'Aug' && element.descuento !== null)  {
          agos.push(element.descuento);
        }
        if (mes === 'Sep' && element.descuento === null) {
          // estructura interna del if
          return sep.push(element.precio);
        } else if(mes === 'Sep' && element.descuento !== null)  {
          sep.push(element.descuento);
        }
        if (mes === 'Oct' && element.descuento === null) {
          // estructura interna del if
          return oct.push(element.precio);
        } else if(mes === 'Oct' && element.descuento !== null)  {
          oct.push(element.descuento);
        }
        if (mes === 'Nov' && element.descuento === null) {
          // estructura interna del if
          return nov.push(element.precio);
        } else if(mes === 'Nov' && element.descuento !== null)  {
          nov.push(element.descuento);
        }
        if (mes === 'Dec' && element.descuento === null) {
          // estructura interna del if
          return dic.push(element.precio);
        } else if(mes === 'Dec' && element.descuento !== null)  {
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

// metodo para filtrar por mango o zara
exports.averagePriceMonthOrigin = arr => {
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

  // let count = 1;

  try {
    arr.forEach( element => {
      let date = new Date();
      let currentYear = date.getFullYear();
      let lastYear = date.getFullYear() - 1;
      let fecha = element.createdAt + ''; // funcion para obtener la fecha
      let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero      
      let year = parseInt(fecha.split(" ")[3]);
      
        
      

      if (year === currentYear) {
        if (mes === 'Jan' && element.descuento === null) {
          // estructura interna del if
          return eneZ.push(element.precio);
        } else if(mes === 'Jan' && element.descuento !== null) {
          eneZ.push(element.descuento);
        }
        if (mes === 'Feb' && element.descuento === null) {
          // estructura interna del if
          return febZ.push(element.precio);
        } else if(mes === 'Feb' && element.descuento !== null)  {
          febZ.push(element.descuento);
        }
        if (mes === 'Mar' && element.descuento === null) {
          // estructura interna del if
          return marZ.push(element.precio);
        } else if(mes === 'Mar' && element.descuento !== null)  {
          marZ.push(element.descuento);
        }
        if (mes === 'Apr' && element.descuento === null) {
          // estructura interna del if
          return abrZ.push(element.precio);
        } else if(mes === 'Apr' && element.descuento !== null)  {
          abrZ.push(element.descuento);
        }
        if (mes === 'May' && element.descuento === null) {
          // estructura interna del if
          return mayZ.push(element.precio);
        } else if(mes === 'May' && element.descuento !== null)  {
          mayZ.push(element.descuento);
        }
        if (mes === 'Jun' && element.descuento === null) {
          // estructura interna del if
          return junZ.push(element.precio);
        } else if(mes === 'Jun' && element.descuento !== null)  {
          junZ.push(element.descuento);
        }
        if (mes === 'Jul' && element.descuento === null) {
          // estructura interna del if
          return julZ.push(element.precio);
        } else if(mes === 'Jul' && element.descuento !== null)  {
          julZ.push(element.descuento);
        }
        if (mes === 'Aug' && element.descuento === null) {
          // estructura interna del if
          return agosZ.push(element.precio);
        } else if(mes === 'Aug' && element.descuento !== null)  {
          agosZ.push(element.descuento);
        }
        if (mes === 'Sep' && element.descuento === null) {
          // estructura interna del if
          return sepZ.push(element.precio);
        } else if(mes === 'Sep' && element.descuento !== null)  {
          sepZ.push(element.descuento);
        }
        if (mes === 'Oct' && element.descuento === null) {
          // estructura interna del if
          return octZ.push(element.precio);
        } else if(mes === 'Oct' && element.descuento !== null)  {
          octZ.push(element.descuento);
        }
        if (mes === 'Nov' && element.descuento === null) {
          // estructura interna del if
          return novZ.push(element.precio);
        } else if(mes === 'Nov' && element.descuento !== null)  {
          novZ.push(element.descuento);
        }
        if (mes === 'Dec' && element.descuento === null) {
          // estructura interna del if
          return dicZ.push(element.precio);
        } else if(mes === 'Dec' && element.descuento !== null)  {
          dicZ.push(element.descuento);
        }
      }

      if (year === lastYear) {
        if (mes === 'Jan' && element.descuento === null) {
          // estructura interna del if
          return ene.push(element.precio);
        } else if(mes === 'Jan' && element.descuento !== null)  {
          ene.push(element.descuento);
        }
        if (mes === 'Feb' && element.descuento === null) {
          // estructura interna del if
          return feb.push(element.precio);
        } else if(mes === 'Feb' && element.descuento !== null)  {
          feb.push(element.descuento);
        }
        if (mes === 'Mar' && element.descuento === null) {
          // estructura interna del if
          return mar.push(element.precio);
        } else if(mes === 'Mar' && element.descuento !== null)  {
          mar.push(element.descuento);
        }
        if (mes === 'Apr' && element.descuento === null) {
          // estructura interna del if
          return abr.push(element.precio);
        } else if(mes === 'Apr' && element.descuento !== null)  {
          abr.push(element.descuento);
        }
        if (mes === 'May' && element.descuento === null) {
          // estructura interna del if
          return  may.push(element.precio);
        } else if(mes === 'May' && element.descuento !== null)  {
          may.push(element.descuento);
        }
        if (mes === 'Jun' && element.descuento === null) {
          // estructura interna del if
          return jun.push(element.precio);
        } else if(mes === 'Jun' && element.descuento !== null)  {
          jun.push(element.descuento);
        }
        if (mes === 'Jul' && element.descuento === null) {
          // estructura interna del if
          return jul.push(element.precio);
        } else if(mes === 'Jul' && element.descuento !== null)  {
          jul.push(element.descuento);
        }
        if (mes === 'Aug' && element.descuento === null) {
          // estructura interna del if
          return agos.push(element.precio);
        } else if(mes === 'Aug' && element.descuento !== null)  {
          agos.push(element.descuento);
        }
        if (mes === 'Sep' && element.descuento === null) {
          // estructura interna del if
          return sep.push(element.precio);
        } else if(mes === 'Sep' && element.descuento !== null)  {
          sep.push(element.descuento);
        }
        if (mes === 'Oct' && element.descuento === null) {
          // estructura interna del if
          return oct.push(element.precio);
        } else if(mes === 'Oct' && element.descuento !== null)  {
          oct.push(element.descuento);
        }
        if (mes === 'Nov' && element.descuento === null) {
          // estructura interna del if
          return nov.push(element.precio);
        } else if(mes === 'Nov' && element.descuento !== null)  {
          nov.push(element.descuento);
        }
        if (mes === 'Dec' && element.descuento === null) {
          // estructura interna del if
          return dic.push(element.precio);
        } else if(mes === 'Dec' && element.descuento !== null)  {
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

  return valuesZ;
};