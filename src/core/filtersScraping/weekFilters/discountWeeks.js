// array descuentos promedio ambas marcas por dos años 
exports.averageDiscountWeekGeneral = (arr) => {
    // arreglos para descuentos promedio zara año actual por semana
    let ene1_7 = [];
    let ene8_14 = [];
    let ene15_21 = [];
    let ene22_31 = [];
    let feb1_11 = [];
    let feb12_18 = [];
    let feb19_25 = [];
    let feb26_29 = [];
    let mar1_11 = [];
    let mar12_18 = [];
    let mar19_25 = [];
    let mar26_31 = [];
    let abr1_8 = [];
    let abr9_15 = [];
    let abr16_22 = [];
    let abr23_30 = [];
    let may1_6 = [];
    let may7_13 = [];
    let may14_20 = [];
    let may21_31 = [];
    let jun1_10 = [];
    let jun11_17 = [];
    let jun18_24 = [];
    let jun25_30 = [];
    let jul1_8 = [];
    let jul9_15 = [];
    let jul16_22 = [];
    let jul23_31 = [];
    let ago1_5 = [];
    let ago6_12 = [];
    let ago13_19 = [];
    let ago20_26 = [];
    let ago27_31 = [];
    let sep1_9 = [];
    let sep10_16 = [];
    let sep17_23 = [];
    let sep24_30 = [];
    let oct1_7 = [];
    let oct8_14 = [];
    let oct15_21 = [];
    let oct22_31 = [];
    let nov1_5 = [];
    let nov6_11 = [];
    let nov12_18 = [];
    let nov19_25 = [];
    let nov26_30 = [];
    let dic1_9 = [];
    let dic10_17 = [];
    let dic18_24 = [];
    let dic25_31 = [];
    
  
    let weeksActualYear = [];
    let weeksLastYear = [];
  
    // arreglos para descuentos promedio zara por semana año anterior
    let Zene1_7 = [];
    let Zene8_14 = [];
    let Zene15_21 = [];
    let Zene22_28 = [];
    let Zene29_31 = [];
    let Zfeb1_11 = [];
    let Zfeb12_18 = [];
    let Zfeb19_25 = [];
    let Zfeb26_29 = [];
    let Zmar1_11 = [];
    let Zmar12_18 = [];
    let Zmar19_25 = [];
    let Zmar26_31 = [];
    let Zabr1_8 = [];
    let Zabr8_15 = [];
    let Zabr16_22 = [];
    let Zabr23_30 = [];
    let Zmay1_6 = [];
    let Zmay7_13 = [];
    let Zmay14_20 = [];
    let Zmay21_27 = [];
    let Zmay28_31 = [];
    let Zjun1_10 = [];
    let Zjun11_17 = [];
    let Zjun18_24 = [];
    let Zjun25_30 = [];
    let Zjul1_8 = [];
    let Zjul9_15 = [];
    let Zjul16_22 = [];
    let Zjul23_31 = [];
    let Zago1_5 = [];
    let Zago6_12 = [];
    let Zago13_19 = [];
    let Zago20_26 = [];
    let Zago27_31 = [];
    let Zsep1_9 = [];
    let Zsep10_16 = [];
    let Zsep17_23 = [];
    let Zsep24_30 = [];
    let Zoct1_7 = [];
    let Zoct8_14 = [];
    let Zoct15_21 = [];
    let Zoct22_31 = [];
    let Znov1_5 = [];
    let Znov6_11 = [];
    let Znov12_18 = [];
    let Znov19_25 = [];
    let Znov26_30 = [];
    let Zdic1_9 = [];
    let Zdic10_17 = [];
    let Zdic18_24 = [];
    let Zdic25_31 = [];
  
    
    let date = new Date();
    // let count = 1;
  
    try {
  
      arr.forEach((element) => {
        let currentYear = date.getFullYear();
        let year = (element.createdAt);
        year = parseInt(((year.toISOString()).split("T")[0]).split("-")[0]);
        
        console.log(year)
        let lastYear = currentYear - 1;
        let fecha = (element.createdAt).getTime(); // funcion para obtener la fecha
  
        if (year === currentYear && element.origin == 'Zara') {
          if (fecha >= new Date(currentYear,0,01).getTime() && fecha <= new Date(currentYear,0,07,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            ene1_7.push(discount);
            return;
          } 
          if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            ene8_14.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            ene15_21.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            ene22_31.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            feb1_11.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            feb12_18.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            feb19_25.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            feb26_29.push(discount);
            return;
          }

          
          console.log("entro al if")

        }
        
  
    //     if (year === lastYear && element.origin === 'Zara' && element.discontinued === false) {
    //       if(mes === 'Jan' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         ene.push(discount);
    //         return;
    //       }
    //       if(mes === 'Feb' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         feb.push(discount);
    //         return;
    //       }
    //       if(mes === 'Mar' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         mar.push(discount);
    //         return;
    //       }
    //       if(mes === 'Apr' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         abr.push(discount);
    //         return;
    //       }
    //       if(mes === 'May' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         may.push(discount);
    //         return;
    //       }
    //       if (mes === 'Jun' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         jun.push(discount);
    //         return;
    //       }
    //       if (mes === 'Jul' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         jul.push(discount);
    //         return;
    //       }
    //       if (mes === 'Aug' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         agos.push(discount);
    //         return;
    //       }
    //       if (mes === 'Sep' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         sep.push(discount);
    //         return;
    //       }
    //       if (mes === 'Oct' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         oct.push(discount);
    //         return;
    //       }
    //       if (mes === 'Nov' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         nov.push(discount);
    //         return;
    //       }
    //       if (mes === 'Dec' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         dic.push(discount);
    //         return;
    //       }
    //     }
      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    // // descuento año actual zara
    // valuesZ[0] = setAverageDiscount(eneZ);
    // valuesZ[1] = setAverageDiscount(febZ);
    // valuesZ[2] = setAverageDiscount(marZ);
    // valuesZ[3] = setAverageDiscount(abrZ);
    // valuesZ[4] = setAverageDiscount(mayZ);
    // valuesZ[5] = setAverageDiscount(junZ);
    // valuesZ[6] = setAverageDiscount(julZ);
    // valuesZ[7] = setAverageDiscount(agosZ);
    // valuesZ[8] = setAverageDiscount(sepZ);
    // valuesZ[9] = setAverageDiscount(octZ);
    // valuesZ[10] = setAverageDiscount(novZ);
    // valuesZ[11] = setAverageDiscount(dicZ);
  
    // // descuento año anterior zara
    // valuesZ[12] = setAverageDiscount(ene);
    // valuesZ[13] = setAverageDiscount(feb);
    // valuesZ[14] = setAverageDiscount(mar);
    // valuesZ[15] = setAverageDiscount(abr);
    // valuesZ[16] = setAverageDiscount(may);
    // valuesZ[17] = setAverageDiscount(jun);
    // valuesZ[18] = setAverageDiscount(jul);
    // valuesZ[19] = setAverageDiscount(agos);
    // valuesZ[20] = setAverageDiscount(sep);
    // valuesZ[21] = setAverageDiscount(oct);
    // valuesZ[22] = setAverageDiscount(nov);
    // valuesZ[23] = setAverageDiscount(dic);
  
    
  
    // // datos de mango desde la posicion [24] a la [47]
  
    // let enem = [];
    // let febm = [];
    // let marm = [];
    // let abrm = [];
    // let maym = [];
    // let junm = [];
    // let julm = [];
    // let agosm = [];
    // let sepm = [];
    // let octm = [];
    // let novm = [];
    // let dicm = [];
  
    // let ene2 = [];
    // let feb2 = [];
    // let mar2 = [];
    // let abr2 = [];
    // let may2 = [];
    // let jun2 = [];
    // let jul2 = [];
    // let agos2 = [];
    // let sep2 = [];
    // let oct2 = [];
    // let nov2 = [];
    // let dic2 = [];
  
    // let count = 1;
  
    // try {
    //   arr.forEach((element) => {
    //     let date = new Date();
    //     let currentYear = date.getFullYear();
    //     let lastYear = date.getFullYear() - 1;
    //     let fecha = element.createdAt + ""; // funcion para obtener la fecha
    //     let mes = fecha.split(" ")[1]; // funcion para obtener el mes como numero
    //     let year = parseInt(fecha.split(" ")[3]);
  
    //     if (year === currentYear && element.origin == 'Mango' && element.discontinued === false) {
    //       if (mes === 'Jan' && element.descuento !== null) {
    //         // estructura interna del if
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
    //         return enem.push(discount);
    //       } 
    //       if(mes === 'Feb' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
    //         febm.push(discount);
    //       }
    //        if(mes === 'Mar' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
    //         marm.push(discount);
    //       }
    //       if(mes === 'Apr' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         abrm.push(discount);
    //       }
    //       if(mes === 'May' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         maym.push(discount);
    //       }
    //       if(mes === 'Jun' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         junm.push(discount);
    //       }
    //       if(mes === 'Jul' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         julZ.push(discount);
    //       }
    //       if(mes === 'Aug' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         agosm.push(discount);
    //       }
    //       if(mes === 'Sep' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         sepm.push(discount);
    //       }
    //       if(mes === 'Oct' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         octm.push(discount);
    //       }
    //       if(mes === 'Nov' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));          
    //         novm.push(discount);
    //       }
    //       if(mes === 'Dec' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         dicm.push(discount);
    //       }
    //     }
  
    //     if (year === lastYear && element.origin === 'Mango' && element.discontinued === false) {
    //       if(mes === 'Jan' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         ene2.push(discount);
    //       }
    //       if(mes === 'Feb' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         feb2.push(discount);
    //       }
    //       if(mes === 'Mar' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         mar2.push(discount);
    //       }
    //       if(mes === 'Apr' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         abr2.push(discount);
    //       }
    //       if(mes === 'May' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         may2.push(discount);
    //       }
    //       if (mes === 'Jun' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         jun2.push(discount);
    //       }
    //       if (mes === 'Jul' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         jul2.push(discount);
    //       }
    //       if (mes === 'Aug' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         agos2.push(discount);
    //       }
    //       if (mes === 'Sep' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         sep2.push(discount);
    //       }
    //       if (mes === 'Oct' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         oct2.push(discount);
    //       }
    //       if (mes === 'Nov' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         nov2.push(discount);
    //       }
    //       if (mes === 'Dec' && element.descuento !== null)  {
    //         let { precio, descuento} = element;
    //         let discount = 0;
    //         discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
    //         dic2.push(discount);
    //       }
    //     }
    //   }); // fin del ciclo que guarda los precios de cada mes
    // } catch (error) {
    //   console.log(error);
    // }
  
    // valuesZ[24] = setAverageDiscount(enem);
    // valuesZ[25] = setAverageDiscount(febm);
    // valuesZ[26] = setAverageDiscount(marm);
    // valuesZ[27] = setAverageDiscount(abrm);
    // valuesZ[28] = setAverageDiscount(maym);
    // valuesZ[29] = setAverageDiscount(junm);
    // valuesZ[30] = setAverageDiscount(julm);
    // valuesZ[31] = setAverageDiscount(agosm);
    // valuesZ[32] = setAverageDiscount(sepm);
    // valuesZ[33] = setAverageDiscount(octm);  
    // valuesZ[34] = setAverageDiscount(novm);
    // valuesZ[35] = setAverageDiscount(dicm);
  
    // // valores del año anterior mango
    // valuesZ[36] = setAverageDiscount(ene2);
    // valuesZ[37] = setAverageDiscount(feb2);
    // valuesZ[38] = setAverageDiscount(mar2);
    // valuesZ[39] = setAverageDiscount(abr2);
    // valuesZ[40] = setAverageDiscount(may2);
    // valuesZ[41] = setAverageDiscount(jun2);
    // valuesZ[42] = setAverageDiscount(jul2);
    // valuesZ[43] = setAverageDiscount(agos2);
    // valuesZ[44] = setAverageDiscount(sep2);
    // valuesZ[45] = setAverageDiscount(oct2);
    // valuesZ[46] = setAverageDiscount(nov2);
    // valuesZ[47] = setAverageDiscount(dic2);
  
    // console.log(oct2);
  
    // return valuesZ;
  
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
    setAverageDiscount = (arr) => {
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
  