
// array descuentos promedio ambas marcas por dos años 
exports.averageDiscountMonthGeneral = (arr) => {
  // arreglos para descuentos promedio zara año actual
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

  // arreglos para descuentos promedio zara año anterior
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
  // let count = 1;

  try {

    arr.forEach((element) => {
      let currentYear = date.getFullYear();
      let lastYear = date.getFullYear() - 1;
      let fecha = element.createdAt + ""; // funcion para obtener la fecha
      let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
      let year = parseInt(fecha.split(" ")[3]);

      if (year === currentYear && element.origin == 'Zara' && element.discontinued === false && isNaN(element.descuento) === false) {
        if (mes === 'Jan' && element.descuento !== null) {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          eneZ.push(discount);
          return;
        } 
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          febZ.push(discount);
          return;
        }
         if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          marZ.push(discount);
          return;
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abrZ.push(discount);
          return;
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mayZ.push(discount);
          return;
        }
        if(mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          junZ.push(discount);
          return;
        }
        if(mes === 'Jul' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          julZ.push(discount);
          return;
        }
        if(mes === 'Aug' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agosZ.push(discount);
          return;
        }
        if(mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sepZ.push(discount);
          return;
        }
        if(mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          octZ.push(discount);
          return;
        }
        if(mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          novZ.push(discount);
          return;
        }
        if(mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dicZ.push(discount);
          return;
        }
      }
      

      if (year === lastYear && element.origin === 'Zara' && element.discontinued === false && isNaN(element.descuento) === false) {
        if(mes === 'Jan' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          ene.push(discount);
          return;
        }
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          feb.push(discount);
          return;
        }
        if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mar.push(discount);
          return;
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abr.push(discount);
          return;
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          may.push(discount);
          return;
        }
        if (mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jun.push(discount);
          return;
        }
        if (mes === 'Jul' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jul.push(discount);
          return;
        }
        if (mes === 'Aug' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agos.push(discount);
          return;
        }
        if (mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sep.push(discount);
          return;
        }
        if (mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          oct.push(discount);
          return;
        }
        if (mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          nov.push(discount);
          return;
        }
        if (mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dic.push(discount);
          return;
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  // descuento año actual zara
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

  // descuento año anterior zara
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

      if (year === currentYear && element.origin == 'Mango' && element.discontinued === false) {
        if (mes === 'Jan' && element.descuento !== null && isNaN(element.descuento) === false) {
          // estructura interna del if
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          return enem.push(discount);
        } 
        if(mes === 'Feb' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          febm.push(discount);
        }
         if(mes === 'Mar' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          marm.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abrm.push(discount);
        }
        if(mes === 'May' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          maym.push(discount);
        }
        if(mes === 'Jun' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          junm.push(discount);
        }
        if(mes === 'Jul' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          julZ.push(discount);
        }
        if(mes === 'Aug' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agosm.push(discount);
        }
        if(mes === 'Sep' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sepm.push(discount);
        }
        if(mes === 'Oct' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          octm.push(discount);
        }
        if(mes === 'Nov' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));          
          novm.push(discount);
        }
        if(mes === 'Dec' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dicm.push(discount);
        }
      }

      if (year === lastYear && element.origin === 'Mango' && element.discontinued === false) {
        if(mes === 'Jan' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          ene2.push(discount);
        }
        if(mes === 'Feb' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          feb2.push(discount);
        }
        if(mes === 'Mar' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mar2.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abr2.push(discount);
        }
        if(mes === 'May' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          may2.push(discount);
        }
        if (mes === 'Jun' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jun2.push(discount);
        }
        if (mes === 'Jul' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jul2.push(discount);
        }
        if (mes === 'Aug' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agos2.push(discount);
        }
        if (mes === 'Sep' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sep2.push(discount);
        }
        if (mes === 'Oct' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          oct2.push(discount);
        }
        if (mes === 'Nov' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          nov2.push(discount);
        }
        if (mes === 'Dec' && element.descuento !== null && isNaN(element.descuento) === false)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dic2.push(discount);
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

  // datos de Gef desde la posicion [48] a la [71]

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

  // let count = 1;

  try {
    arr.forEach((element) => {
      let date = new Date();
      let currentYear = date.getFullYear();
      let lastYear = date.getFullYear() - 1;
      let fecha = element.createdAt + ""; // funcion para obtener la fecha
      let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
      let year = parseInt(fecha.split(" ")[3]);

      if (year === currentYear && element.origin == 'Gef' && element.discontinued === false) {
        if (mes === 'Jan' && element.descuento !== null) {
          // estructura interna del if
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          return eneG.push(discount);
        } 
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          febG.push(discount);
        }
         if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          marG.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abrG.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mayG.push(discount);
        }
        if(mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          junG.push(discount);
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
          agosG.push(discount);
        }
        if(mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sepG.push(discount);
        }
        if(mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          octG.push(discount);
        }
        if(mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));          
          novG.push(discount);
        }
        if(mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dicG.push(discount);
        }
      }

      if (year === lastYear && element.origin === 'Gef' && element.discontinued === false) {
        if(mes === 'Jan' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          ene3.push(discount);
        }
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          feb3.push(discount);
        }
        if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mar3.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abr3.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          may3.push(discount);
        }
        if (mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jun3.push(discount);
        }
        if (mes === 'Jul' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jul3.push(discount);
        }
        if (mes === 'Aug' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agos3.push(discount);
        }
        if (mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sep3.push(discount);
        }
        if (mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          oct3.push(discount);
        }
        if (mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          nov3.push(discount);
        }
        if (mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dic3.push(discount);
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  valuesZ[48] = setAverageDiscount(eneG);
  valuesZ[49] = setAverageDiscount(febG);
  valuesZ[50] = setAverageDiscount(marG);
  valuesZ[51] = setAverageDiscount(abrG);
  valuesZ[52] = setAverageDiscount(mayG);
  valuesZ[53] = setAverageDiscount(junG);
  valuesZ[54] = setAverageDiscount(julG);
  valuesZ[55] = setAverageDiscount(agosG);
  valuesZ[56] = setAverageDiscount(sepG);
  valuesZ[57] = setAverageDiscount(octG);  
  valuesZ[58] = setAverageDiscount(novG);
  valuesZ[59] = setAverageDiscount(dicG);

  // valores del año anterior Gef
  valuesZ[60] = setAverageDiscount(ene3);
  valuesZ[61] = setAverageDiscount(feb3);
  valuesZ[62] = setAverageDiscount(mar3);
  valuesZ[63] = setAverageDiscount(abr3);
  valuesZ[64] = setAverageDiscount(may3);
  valuesZ[65] = setAverageDiscount(jun3);
  valuesZ[66] = setAverageDiscount(jul3);
  valuesZ[67] = setAverageDiscount(agos3);
  valuesZ[68] = setAverageDiscount(sep3);
  valuesZ[69] = setAverageDiscount(oct3);
  valuesZ[70] = setAverageDiscount(nov3);
  valuesZ[71] = setAverageDiscount(dic3);

  // datos de Punto Blanco desde la posicion [72] a la [95]

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

  // let count = 1;

  try {
    arr.forEach((element) => {
      let date = new Date();
      let currentYear = date.getFullYear();
      let lastYear = date.getFullYear() - 1;
      let fecha = element.createdAt + ""; // funcion para obtener la fecha
      let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
      let year = parseInt(fecha.split(" ")[3]);

      if (year === currentYear && element.origin == 'Punto blanco' && element.discontinued === false) {
        if (mes === 'Jan' && element.descuento !== null) {
          // estructura interna del if
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          return enePB.push(discount);
        } 
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          febPB.push(discount);
        }
         if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          marPB.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abrPB.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mayPB.push(discount);
        }
        if(mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          junPB.push(discount);
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
          agosPB.push(discount);
        }
        if(mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sepPB.push(discount);
        }
        if(mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          octPB.push(discount);
        }
        if(mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));          
          novPB.push(discount);
        }
        if(mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dicPB.push(discount);
        }
      }

      if (year === lastYear && element.origin === 'Punto blanco' && element.discontinued === false) {
        if(mes === 'Jan' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          ene4.push(discount);
        }
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          feb4.push(discount);
        }
        if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mar4.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abr4.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          may4.push(discount);
        }
        if (mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jun4.push(discount);
        }
        if (mes === 'Jul' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jul4.push(discount);
        }
        if (mes === 'Aug' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agos4.push(discount);
        }
        if (mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sep4.push(discount);
        }
        if (mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          oct4.push(discount);
        }
        if (mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          nov4.push(discount);
        }
        if (mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dic4.push(discount);
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  valuesZ[72] = setAverageDiscount(enePB);
  valuesZ[73] = setAverageDiscount(febPB);
  valuesZ[74] = setAverageDiscount(marPB);
  valuesZ[75] = setAverageDiscount(abrPB);
  valuesZ[76] = setAverageDiscount(mayPB);
  valuesZ[77] = setAverageDiscount(junPB);
  valuesZ[78] = setAverageDiscount(julPB);
  valuesZ[79] = setAverageDiscount(agosPB);
  valuesZ[80] = setAverageDiscount(sepPB);
  valuesZ[81] = setAverageDiscount(octPB);  
  valuesZ[82] = setAverageDiscount(novPB);
  valuesZ[83] = setAverageDiscount(dicPB);

  // valores del año anterior Punto blanco
  valuesZ[84] = setAverageDiscount(ene4);
  valuesZ[85] = setAverageDiscount(feb4);
  valuesZ[86] = setAverageDiscount(mar4);
  valuesZ[87] = setAverageDiscount(abr4);
  valuesZ[88] = setAverageDiscount(may4);
  valuesZ[89] = setAverageDiscount(jun4);
  valuesZ[90] = setAverageDiscount(jul4);
  valuesZ[91] = setAverageDiscount(agos4);
  valuesZ[92] = setAverageDiscount(sep4);
  valuesZ[93] = setAverageDiscount(oct4);
  valuesZ[94] = setAverageDiscount(nov4);
  valuesZ[95] = setAverageDiscount(dic4);


  // datos de Baby fresh desde la posicion [96] a la [119]

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

  // let count = 1;

  try {
    arr.forEach((element) => {
      let date = new Date();
      let currentYear = date.getFullYear();
      let lastYear = date.getFullYear() - 1;
      let fecha = element.createdAt + ""; // funcion para obtener la fecha
      let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
      let year = parseInt(fecha.split(" ")[3]);

      if (year === currentYear && element.origin == 'Baby fresh' && element.discontinued === false) {
        if (mes === 'Jan' && element.descuento !== null) {
          // estructura interna del if
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          return eneBF.push(discount);
        } 
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          febBF.push(discount);
        }
         if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          marBF.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abrBF.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mayBF.push(discount);
        }
        if(mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          junBF.push(discount);
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
          agosBF.push(discount);
        }
        if(mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sepBF.push(discount);
        }
        if(mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          octBF.push(discount);
        }
        if(mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));          
          novBF.push(discount);
        }
        if(mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dicBF.push(discount);
        }
      }

      if (year === lastYear && element.origin === 'Baby fresh' && element.discontinued === false) {
        if(mes === 'Jan' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          ene5.push(discount);
        }
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          feb5.push(discount);
        }
        if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mar5.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abr5.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          may5.push(discount);
        }
        if (mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jun5.push(discount);
        }
        if (mes === 'Jul' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jul5.push(discount);
        }
        if (mes === 'Aug' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agos5.push(discount);
        }
        if (mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sep5.push(discount);
        }
        if (mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          oct5.push(discount);
        }
        if (mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          nov5.push(discount);
        }
        if (mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dic5.push(discount);
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  valuesZ[96] = setAverageDiscount(eneBF);
  valuesZ[97] = setAverageDiscount(febBF);
  valuesZ[98] = setAverageDiscount(marBF);
  valuesZ[99] = setAverageDiscount(abrBF);
  valuesZ[100] = setAverageDiscount(mayBF);
  valuesZ[101] = setAverageDiscount(junBF);
  valuesZ[102] = setAverageDiscount(julBF);
  valuesZ[103] = setAverageDiscount(agosBF);
  valuesZ[104] = setAverageDiscount(sepBF);
  valuesZ[105] = setAverageDiscount(octBF);  
  valuesZ[106] = setAverageDiscount(novBF);
  valuesZ[107] = setAverageDiscount(dicBF);

  // valores del año anterior Baby fresh
  valuesZ[108] = setAverageDiscount(ene5);
  valuesZ[109] = setAverageDiscount(feb5);
  valuesZ[110] = setAverageDiscount(mar5);
  valuesZ[111] = setAverageDiscount(abr5);
  valuesZ[112] = setAverageDiscount(may5);
  valuesZ[113] = setAverageDiscount(jun5);
  valuesZ[114] = setAverageDiscount(jul5);
  valuesZ[115] = setAverageDiscount(agos5);
  valuesZ[116] = setAverageDiscount(sep5);
  valuesZ[117] = setAverageDiscount(oct5);
  valuesZ[118] = setAverageDiscount(nov5);
  valuesZ[119] = setAverageDiscount(dic5);

  // datos de Baby fresh desde la posicion [120] a la [143]

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

  // let count = 1;

  try {
    arr.forEach((element) => {
      let date = new Date();
      let currentYear = date.getFullYear();
      let lastYear = date.getFullYear() - 1;
      let fecha = element.createdAt + ""; // funcion para obtener la fecha
      let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
      let year = parseInt(fecha.split(" ")[3]);

      if (year === currentYear && element.origin == 'Galax' && element.discontinued === false) {
        if (mes === 'Jan' && element.descuento !== null) {
          // estructura interna del if
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          return eneGA.push(discount);
        } 
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          febGA.push(discount);
        }
         if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));

          marGA.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abrGA.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mayGA.push(discount);
        }
        if(mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          junGA.push(discount);
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
          agosGA.push(discount);
        }
        if(mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sepGA.push(discount);
        }
        if(mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          octGA.push(discount);
        }
        if(mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));          
          novGA.push(discount);
        }
        if(mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dicGA.push(discount);
        }
      }

      if (year === lastYear && element.origin === 'Galax' && element.discontinued === false) {
        if(mes === 'Jan' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          ene6.push(discount);
        }
        if(mes === 'Feb' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          feb6.push(discount);
        }
        if(mes === 'Mar' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          mar6.push(discount);
        }
        if(mes === 'Apr' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          abr6.push(discount);
        }
        if(mes === 'May' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          may6.push(discount);
        }
        if (mes === 'Jun' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jun6.push(discount);
        }
        if (mes === 'Jul' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          jul6.push(discount);
        }
        if (mes === 'Aug' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          agos6.push(discount);
        }
        if (mes === 'Sep' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          sep6.push(discount);
        }
        if (mes === 'Oct' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          oct6.push(discount);
        }
        if (mes === 'Nov' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          nov6.push(discount);
        }
        if (mes === 'Dec' && element.descuento !== null)  {
          let { precio, descuento} = element;
          let discount = 0;
          discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
          dic6.push(discount);
        }
      }
    }); // fin del ciclo que guarda los precios de cada mes
  } catch (error) {
    console.log(error);
  }

  valuesZ[120] = setAverageDiscount(eneGA);
  valuesZ[121] = setAverageDiscount(febGA);
  valuesZ[122] = setAverageDiscount(marGA);
  valuesZ[123] = setAverageDiscount(abrGA);
  valuesZ[124] = setAverageDiscount(mayGA);
  valuesZ[125] = setAverageDiscount(junGA);
  valuesZ[126] = setAverageDiscount(julGA);
  valuesZ[127] = setAverageDiscount(agosGA);
  valuesZ[128] = setAverageDiscount(sepGA);
  valuesZ[129] = setAverageDiscount(octGA);  
  valuesZ[130] = setAverageDiscount(novGA);
  valuesZ[131] = setAverageDiscount(dicGA);

  // valores del año anterior Baby fresh
  valuesZ[132] = setAverageDiscount(ene6);
  valuesZ[133] = setAverageDiscount(feb6);
  valuesZ[134] = setAverageDiscount(mar6);
  valuesZ[135] = setAverageDiscount(abr6);
  valuesZ[136] = setAverageDiscount(may6);
  valuesZ[137] = setAverageDiscount(jun6);
  valuesZ[138] = setAverageDiscount(jul6);
  valuesZ[139] = setAverageDiscount(agos6);
  valuesZ[140] = setAverageDiscount(sep6);
  valuesZ[141] = setAverageDiscount(oct6);
  valuesZ[142] = setAverageDiscount(nov6);
  valuesZ[143] = setAverageDiscount(dic6);

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
  
        if (year === currentYear && element.discontinued === false) {
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
  
        if (year === lastYear && element.discontinued === false) {
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
  let setAverageDiscount = (arr) => {
    let descuentoPromedio = 0;
    arr.forEach((element) => {
        descuentoPromedio += element
        // console.log(descuentoPromedio);
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
