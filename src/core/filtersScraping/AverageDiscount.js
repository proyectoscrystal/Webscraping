
// array descuentos promedio ambas marcas por dos años 
exports.averageDiscountMonthGeneral = (arr) => {
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
        if (mes === 'Jan' && element.descuento !== null) {
          // estructura interna del if
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          return eneZ.push(discount);
        } 
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          febZ.push(discount);
        }
         if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          marZ.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abrZ.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mayZ.push(discount);
        }
        if(mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          junZ.push(discount);
        }
        if(mes === 'Jul' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          julZ.push(discount);
        }
        if(mes === 'Aug' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agosZ.push(discount);
        }
        if(mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sepZ.push(discount);
        }
        if(mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          octZ.push(discount);
        }
        if(mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          novZ.push(discount);
        }
        if(mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dicZ.push(discount);
        }
      }

      if (year === lastYear && element.origin === 'Zara') {
        if(mes === 'Jan' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          ene.push(discount);
        }
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          feb.push(discount);
        }
        if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mar.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abr.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          may.push(discount);
        }
        if (mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jun.push(discount);
        }
        if (mes === 'Jul' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jul.push(discount);
        }
        if (mes === 'Aug' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agos.push(discount);
        }
        if (mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sep.push(discount);
        }
        if (mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          oct.push(discount);
        }
        if (mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          nov.push(discount);
        }
        if (mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dic.push(discount);
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  valuesZ[0] = setAverageDiscount(eneZ);
  valuesZ[1] = setAverageDiscount(febZ);
  valuesZ[2] = setAverageDiscount(marZ);
  valuesZ[3] = setAverageDiscount(abrZ);
  valuesZ[4] = setAverageDiscount(mayZ);
  valuesZ[5] = setAverageDiscount(junZ);
  valuesZ[6] = setAverageDiscount(julZ);
  valuesZ[7] = setAverageDiscount(agosZ);
  valuesZ[8] = setAverageDiscount(sepZ);
  valuesZ[9] = setAverageDiscount(octZ);
  valuesZ[10] = setAverageDiscount(novZ);
  valuesZ[11] = setAverageDiscount(dicZ);

  valuesZ[12] = setAverageDiscount(ene);
  valuesZ[13] = setAverageDiscount(feb);
  valuesZ[14] = setAverageDiscount(mar);
  valuesZ[15] = setAverageDiscount(abr);
  valuesZ[16] = setAverageDiscount(may);
  valuesZ[17] = setAverageDiscount(jun);
  valuesZ[18] = setAverageDiscount(jul);
  valuesZ[19] = setAverageDiscount(agos);
  valuesZ[20] = setAverageDiscount(sep);
  valuesZ[21] = setAverageDiscount(oct);
  valuesZ[22] = setAverageDiscount(nov);
  valuesZ[23] = setAverageDiscount(dic);

  

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
        if (mes === 'Jan' && element.descuento !== null) {
          // estructura interna del if
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          return eneZ.push(discount);
        } 
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          febZ.push(discount);
        }
         if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          marZ.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abrZ.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mayZ.push(discount);
        }
        if(mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          junZ.push(discount);
        }
        if(mes === 'Jul' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          julZ.push(discount);
        }
        if(mes === 'Aug' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agosZ.push(discount);
        }
        if(mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sepZ.push(discount);
        }
        if(mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          octZ.push(discount);
        }
        if(mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          novZ.push(discount);
        }
        if(mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dicZ.push(discount);
        }
      }

      if (year === lastYear && element.origin === 'Mango') {
        if(mes === 'Jan' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          ene.push(discount);
        }
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          feb.push(discount);
        }
        if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mar.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abr.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          may.push(discount);
        }
        if (mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jun.push(discount);
        }
        if (mes === 'Jul' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jul.push(discount);
        }
        if (mes === 'Aug' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agos.push(discount);
        }
        if (mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sep.push(discount);
        }
        if (mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          oct.push(discount);
        }
        if (mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          nov.push(discount);
        }
        if (mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dic.push(discount);
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  valuesZ[24] = setAverageDiscount(enem);
  valuesZ[25] = setAverageDiscount(febm);
  valuesZ[26] = setAverageDiscount(marm);
  valuesZ[27] = setAverageDiscount(abrm);
  valuesZ[28] = setAverageDiscount(maym);
  valuesZ[29] = setAverageDiscount(junm);
  valuesZ[30] = setAverageDiscount(julm);
  valuesZ[31] = setAverageDiscount(agosm);
  valuesZ[32] = setAverageDiscount(sepm);
  valuesZ[33] = setAverageDiscount(octm);
  valuesZ[34] = setAverageDiscount(novm);
  valuesZ[35] = setAverageDiscount(dicm);

  // valores del año anterior mango
  valuesZ[36] = setAverageDiscount(ene2);
  valuesZ[37] = setAverageDiscount(feb2);
  valuesZ[38] = setAverageDiscount(mar2);
  valuesZ[39] = setAverageDiscount(abr2);
  valuesZ[40] = setAverageDiscount(may2);
  valuesZ[41] = setAverageDiscount(jun2);
  valuesZ[42] = setAverageDiscount(jul2);
  valuesZ[43] = setAverageDiscount(agos2);
  valuesZ[44] = setAverageDiscount(sep2);
  valuesZ[45] = setAverageDiscount(oct2);
  valuesZ[46] = setAverageDiscount(nov2);
  valuesZ[47] = setAverageDiscount(dic2);
  valuesZ[48] = currentMonth;

  return valuesZ;

};


// array de descuentos promedio por marca y dos años
exports.averageDiscount = arr => {
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
        let currentMonth = date.getMonth() - 1;
        let lastYear = date.getFullYear() - 1;
        let fecha = element.createdAt + ''; // funcion para obtener la fecha
        let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero      
        let year = parseInt(fecha.split(" ")[3]);
        
          
        
  
        if (year === currentYear) {
          if (mes === 'Jan' && element.descuento !== null) {
            // estructura interna del if
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

            return eneZ.push(discount);
          } 
          if(mes === 'Feb' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

            febZ.push(discount);
          }
           if(mes === 'Mar' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

            marZ.push(discount);
          }
          if(mes === 'Apr' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            abrZ.push(discount);
          }
          if(mes === 'May' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            mayZ.push(discount);
          }
          if(mes === 'Jun' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            junZ.push(discount);
          }
          if(mes === 'Jul' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            julZ.push(discount);
          }
          if(mes === 'Aug' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            agosZ.push(discount);
          }
          if(mes === 'Sep' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            sepZ.push(discount);
          }
          if(mes === 'Oct' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            octZ.push(discount);
          }
          if(mes === 'Nov' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            novZ.push(discount);
          }
          if(mes === 'Dec' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            dicZ.push(discount);
          }
        }
  
        if (year === lastYear) {
          if(mes === 'Jan' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            ene.push(discount);
          }
          if(mes === 'Feb' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            feb.push(discount);
          }
          if(mes === 'Mar' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            mar.push(discount);
          }
          if(mes === 'Apr' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            abr.push(discount);
          }
          if(mes === 'May' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            may.push(discount);
          }
          if (mes === 'Jun' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            jun.push(discount);
          }
          if (mes === 'Jul' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            jul.push(discount);
          }
          if (mes === 'Aug' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            agos.push(discount);
          }
          if (mes === 'Sep' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            sep.push(discount);
          }
          if (mes === 'Oct' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            oct.push(discount);
          }
          if (mes === 'Nov' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            nov.push(discount);
          }
          if (mes === 'Dec' && element.descuento !== null)  {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
            dic.push(discount);
          }
        }
      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    valuesZ[0] = setAverageDiscount(eneZ);
    valuesZ[1] = setAverageDiscount(febZ);
    valuesZ[2] = setAverageDiscount(marZ);
    valuesZ[3] = setAverageDiscount(abrZ);
    valuesZ[4] = setAverageDiscount(mayZ);
    valuesZ[5] = setAverageDiscount(junZ);
    valuesZ[6] = setAverageDiscount(julZ);
    valuesZ[7] = setAverageDiscount(agosZ);
    valuesZ[8] = setAverageDiscount(sepZ);
    valuesZ[9] = setAverageDiscount(octZ);
    valuesZ[10] = setAverageDiscount(novZ);
    valuesZ[11] = setAverageDiscount(dicZ);
  
    valuesZ[12] = setAverageDiscount(ene);
    valuesZ[13] = setAverageDiscount(feb);
    valuesZ[14] = setAverageDiscount(mar);
    valuesZ[15] = setAverageDiscount(abr);
    valuesZ[16] = setAverageDiscount(may);
    valuesZ[17] = setAverageDiscount(jun);
    valuesZ[18] = setAverageDiscount(jul);
    valuesZ[19] = setAverageDiscount(agos);
    valuesZ[20] = setAverageDiscount(sep);
    valuesZ[21] = setAverageDiscount(oct);
    valuesZ[22] = setAverageDiscount(nov);
    valuesZ[23] = setAverageDiscount(dic);
  
    return valuesZ;
  };
  
  // metodo para sacar el promedio
  setAverageDiscount = (arr) => {
    let descuentoPromedio = 0;
    arr.forEach((element) => {
        descuentoPromedio += element
    });
    if (descuentoPromedio === 0) {
        return descuentoPromedio
    } else {
        return parseFloat((descuentoPromedio / arr.length).toFixed(2));
    }
  };

  

  // metodo para setear el descuento total mango y zara sin filtro
  exports.averageDiscountQuery = (arr) => {
    let descuentoPromedio = 0;
    let totalProductosDescuento = 0;
    arr.forEach((element) => {
      let { precio, descuento } = element;
      if (descuento !== null) {
        totalProductosDescuento++;
        descuentoPromedio += parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
        // console.log(descuentoPromedio);
      } 

    });

    if (descuentoPromedio === 0) {
        return descuentoPromedio
    } else {
        // console.log(parseInt((descuentoPromedio / arr.length).toFixed()));
        return parseFloat((descuentoPromedio / totalProductosDescuento).toFixed(2));
    }

  };
