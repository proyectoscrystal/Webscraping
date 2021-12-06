// array descuentos promedio ambas marcas por dos años 

exports.averageDiscountWeekGeneral = (arr) => {
    let obj = {}; // objeto que contiene los arrays con los valores por semana
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
    
  
    let weeksActualYearZara = [];
    let weeksLastYearZara = [];
  
    // arreglos para descuentos promedio zara por semana año anterior
    let Zene1_7 = [];
    let Zene8_14 = [];
    let Zene15_21 = [];
    let Zene22_31 = [];
    let Zfeb1_11 = [];
    let Zfeb12_18 = [];
    let Zfeb19_25 = [];
    let Zfeb26_29 = [];
    let Zmar1_11 = [];
    let Zmar12_18 = [];
    let Zmar19_25 = [];
    let Zmar26_31 = [];
    let Zabr1_8 = [];
    let Zabr9_15 = [];
    let Zabr16_22 = [];
    let Zabr23_30 = [];
    let Zmay1_6 = [];
    let Zmay7_13 = [];
    let Zmay14_20 = [];
    let Zmay21_31 = [];
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

    // // datos de mango 
  
    let mene1_7 = [];
    let mene8_14 = [];
    let mene15_21 = [];
    let mene22_31 = [];
    let mfeb1_11 = [];
    let mfeb12_18 = [];
    let mfeb19_25 = [];
    let mfeb26_29 = [];
    let mmar1_11 = [];
    let mmar12_18 = [];
    let mmar19_25 = [];
    let mmar26_31 = [];
    let mabr1_8 = [];
    let mabr9_15 = [];
    let mabr16_22 = [];
    let mabr23_30 = [];
    let mmay1_6 = [];
    let mmay7_13 = [];
    let mmay14_20 = [];
    let mmay21_31 = [];
    let mjun1_10 = [];
    let mjun11_17 = [];
    let mjun18_24 = [];
    let mjun25_30 = [];
    let mjul1_8 = [];
    let mjul9_15 = [];
    let mjul16_22 = [];
    let mjul23_31 = [];
    let mago1_5 = [];
    let mago6_12 = [];
    let mago13_19 = [];
    let mago20_26 = [];
    let mago27_31 = [];
    let msep1_9 = [];
    let msep10_16 = [];
    let msep17_23 = [];
    let msep24_30 = [];
    let moct1_7 = [];
    let moct8_14 = [];
    let moct15_21 = [];
    let moct22_31 = [];
    let mnov1_5 = [];
    let mnov6_11 = [];
    let mnov12_18 = [];
    let mnov19_25 = [];
    let mnov26_30 = [];
    let mdic1_9 = [];
    let mdic10_17 = [];
    let mdic18_24 = [];
    let mdic25_31 = [];
    
  
    let weeksActualYearMango = [];
    let weeksLastYearMango = [];
  
    // arreglos para descuentos promedio zara por semana año anterior
    let lmene1_7 = [];
    let lmene8_14 = [];
    let lmene15_21 = [];
    let lmene22_31 = [];
    let lmfeb1_11 = [];
    let lmfeb12_18 = [];
    let lmfeb19_25 = [];
    let lmfeb26_29 = [];
    let lmmar1_11 = [];
    let lmmar12_18 = [];
    let lmmar19_25 = [];
    let lmmar26_31 = [];
    let lmabr1_8 = [];
    let lmabr9_15 = [];
    let lmabr16_22 = [];
    let lmabr23_30 = [];
    let lmmay1_6 = [];
    let lmmay7_13 = [];
    let lmmay14_20 = [];
    let lmmay21_31 = [];
    let lmjun1_10 = [];
    let lmjun11_17 = [];
    let lmjun18_24 = [];
    let lmjun25_30 = [];
    let lmjul1_8 = [];
    let lmjul9_15 = [];
    let lmjul16_22 = [];
    let lmjul23_31 = [];
    let lmago1_5 = [];
    let lmago6_12 = [];
    let lmago13_19 = [];
    let lmago20_26 = [];
    let lmago27_31 = [];
    let lmsep1_9 = [];
    let lmsep10_16 = [];
    let lmsep17_23 = [];
    let lmsep24_30 = [];
    let lmoct1_7 = [];
    let lmoct8_14 = [];
    let lmoct15_21 = [];
    let lmoct22_31 = [];
    let lmnov1_5 = [];
    let lmnov6_11 = [];
    let lmnov12_18 = [];
    let lmnov19_25 = [];
    let lmnov26_30 = [];
    let lmdic1_9 = [];
    let lmdic10_17 = [];
    let lmdic18_24 = [];
    let lmdic25_31 = [];
    
    let date = new Date();
    // let count = 1;
  
    try {
  
      arr.forEach((element) => {
        let currentYear = date.getFullYear();
        let year = (element.createdAt);
        year = parseInt(((year.toISOString()).split("T")[0]).split("-")[0]);
        let lastYear = currentYear - 1;
        let fecha = (element.createdAt).getTime(); // funcion para obtener la fecha
  
        if (year === currentYear && element.origin == 'Zara') {
          if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
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
          if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            mar1_11.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            mar12_18.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            mar19_25.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            mar26_31.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            abr1_8.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            abr9_15.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            abr16_22.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            abr23_30.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            may1_6.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            may7_13.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            may14_20.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            may21_31.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            jun1_10.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            jun11_17.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            jun18_24.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            jun25_30.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            jul1_8.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            jul9_15.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            jul16_22.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            jul23_31.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            ago1_5.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            ago6_12.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            ago13_19.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            ago20_26.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            ago27_31.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            sep1_9.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            sep10_16.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            sep17_23.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            sep24_30.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            oct1_7.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            oct8_14.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            oct15_21.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            oct22_31.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            nov1_5.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            nov6_11.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            nov12_18.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            nov19_25.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            nov26_30.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            dic1_9.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            dic10_17.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            dic18_24.push(discount);
            return;
          }
          if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
            let { precio, descuento} = element;
            let discount = 0;
            discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
  
            dic25_31.push(discount);
            return;
          }

        }
        
  
        if (year === lastYear && element.origin === 'Zara' && element.discontinued === false) {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zene1_7.push(discount);
                return;
              } 
              if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zene8_14.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zene15_21.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zene22_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zfeb1_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zfeb12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zfeb19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zfeb26_29.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmar1_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmar12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmar19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmar26_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zabr1_8.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zabr9_15.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zabr16_22.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zabr23_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmay1_6.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmay7_13.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmay14_20.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmay21_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjun1_10.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjun11_17.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjun18_24.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjun25_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjul1_8.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjul9_15.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjul16_22.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjul23_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zago1_5.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zago6_12.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zago13_19.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zago20_26.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zago27_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zsep1_9.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zsep10_16.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zsep17_23.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zsep24_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zoct1_7.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zoct8_14.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zoct15_21.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zoct22_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Znov1_5.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Znov6_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Znov12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Znov19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Znov26_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zdic1_9.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zdic10_17.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zdic18_24.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zdic25_31.push(discount);
                return;
              }
        }
        // termina zara semanas
        // empieza mango semanas

        if (year === currentYear && element.origin == 'Mango' && element.discontinued === false) {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mene1_7.push(discount);
                return;
              } 
              if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mene8_14.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mene15_21.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mene22_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mfeb1_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mfeb12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mfeb19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mfeb26_29.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mmar1_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mmar12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mmar19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mmar26_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mabr1_8.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mabr9_15.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mabr16_22.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mabr23_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mmay1_6.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mmay7_13.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mmay14_20.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mmay21_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mjun1_10.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mjun11_17.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mjun18_24.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mjun25_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mjul1_8.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mjul9_15.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mjul16_22.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mjul23_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mago1_5.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mago6_12.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mago13_19.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mago20_26.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mago27_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                msep1_9.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                msep10_16.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                msep17_23.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                msep24_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                moct1_7.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                moct8_14.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                moct15_21.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                moct22_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mnov1_5.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mnov6_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mnov12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mnov19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mnov26_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mdic1_9.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mdic10_17.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mdic18_24.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mdic25_31.push(discount);
                return;
              }
          }

          // mango semanas año anterior
    
          if (year === lastYear && element.origin === 'Mango' && element.discontinued === false) {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmene1_7.push(discount);
                return;
              } 
              if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmene8_14.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmene15_21.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmene22_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmfeb1_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmfeb12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmfeb19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmfeb26_29.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmmar1_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmmar12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmmar19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmmar26_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmabr1_8.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmabr9_15.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmabr16_22.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmabr23_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmmay1_6.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmmay7_13.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmmay14_20.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmmay21_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmjun1_10.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmjun11_17.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmjun18_24.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmjun25_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmjul1_8.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmjul9_15.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmjul16_22.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmjul23_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmago1_5.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmago6_12.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmago13_19.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmago20_26.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmago27_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmsep1_9.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmsep10_16.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmsep17_23.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmsep24_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmoct1_7.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmoct8_14.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmoct15_21.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmoct22_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmnov1_5.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmnov6_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmnov12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmnov19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmnov26_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmdic1_9.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmdic10_17.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmdic18_24.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                lmdic25_31.push(discount);
                return;
              }
          }



      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    // // descuento año actual zara
    weeksActualYearZara[0] = setAverageDiscount(ene1_7);
    weeksActualYearZara[1] = setAverageDiscount(ene8_14);
    weeksActualYearZara[2] = setAverageDiscount(ene15_21);
    weeksActualYearZara[3] = setAverageDiscount(ene22_31);
    weeksActualYearZara[4] = setAverageDiscount(feb1_11);
    weeksActualYearZara[5] = setAverageDiscount(feb12_18);
    weeksActualYearZara[6] = setAverageDiscount(feb19_25);
    weeksActualYearZara[7] = setAverageDiscount(feb26_29);
    weeksActualYearZara[8] = setAverageDiscount(mar1_11);
    weeksActualYearZara[9] = setAverageDiscount(mar12_18);
    weeksActualYearZara[10] = setAverageDiscount(mar19_25);
    weeksActualYearZara[11] = setAverageDiscount(mar26_31);
    weeksActualYearZara[12] = setAverageDiscount(abr1_8);
    weeksActualYearZara[13] = setAverageDiscount(abr9_15);
    weeksActualYearZara[14] = setAverageDiscount(abr16_22);
    weeksActualYearZara[15] = setAverageDiscount(abr23_30);
    weeksActualYearZara[16] = setAverageDiscount(may1_6);
    weeksActualYearZara[17] = setAverageDiscount(may7_13);
    weeksActualYearZara[18] = setAverageDiscount(may14_20);
    weeksActualYearZara[19] = setAverageDiscount(may21_31);
    weeksActualYearZara[20] = setAverageDiscount(jun1_10);
    weeksActualYearZara[21] = setAverageDiscount(jun11_17);
    weeksActualYearZara[22] = setAverageDiscount(jun18_24);
    weeksActualYearZara[23] = setAverageDiscount(jun25_30);
    weeksActualYearZara[24] = setAverageDiscount(jul1_8);
    weeksActualYearZara[25] = setAverageDiscount(jul9_15);
    weeksActualYearZara[26] = setAverageDiscount(jul16_22);
    weeksActualYearZara[27] = setAverageDiscount(jul23_31);
    weeksActualYearZara[28] = setAverageDiscount(ago1_5);
    weeksActualYearZara[29] = setAverageDiscount(ago6_12);
    weeksActualYearZara[30] = setAverageDiscount(ago13_19);
    weeksActualYearZara[31] = setAverageDiscount(ago20_26);
    weeksActualYearZara[32] = setAverageDiscount(ago27_31);
    weeksActualYearZara[33] = setAverageDiscount(sep1_9);
    weeksActualYearZara[34] = setAverageDiscount(sep10_16);
    weeksActualYearZara[35] = setAverageDiscount(sep17_23);
    weeksActualYearZara[36] = setAverageDiscount(sep24_30);
    weeksActualYearZara[37] = setAverageDiscount(oct1_7);
    weeksActualYearZara[38] = setAverageDiscount(oct8_14);
    weeksActualYearZara[39] = setAverageDiscount(oct15_21);
    weeksActualYearZara[40] = setAverageDiscount(oct22_31);
    weeksActualYearZara[41] = setAverageDiscount(nov1_5);
    weeksActualYearZara[42] = setAverageDiscount(nov6_11);
    weeksActualYearZara[43] = setAverageDiscount(nov12_18);
    weeksActualYearZara[44] = setAverageDiscount(nov19_25);
    weeksActualYearZara[45] = setAverageDiscount(nov26_30);
    weeksActualYearZara[46] = setAverageDiscount(dic1_9);
    weeksActualYearZara[47] = setAverageDiscount(dic10_17);
    weeksActualYearZara[48] = setAverageDiscount(dic18_24);
    weeksActualYearZara[49] = setAverageDiscount(dic25_31);
  
    // // descuento año anterior zara
    weeksLastYearZara[0] = setAverageDiscount(Zene1_7);
    weeksLastYearZara[1] = setAverageDiscount(Zene8_14);
    weeksLastYearZara[2] = setAverageDiscount(Zene15_21);
    weeksLastYearZara[3] = setAverageDiscount(Zene22_31);
    weeksLastYearZara[4] = setAverageDiscount(Zfeb1_11);
    weeksLastYearZara[5] = setAverageDiscount(Zfeb12_18);
    weeksLastYearZara[6] = setAverageDiscount(Zfeb19_25);
    weeksLastYearZara[7] = setAverageDiscount(Zfeb26_29);
    weeksLastYearZara[8] = setAverageDiscount(Zmar1_11);
    weeksLastYearZara[9] = setAverageDiscount(Zmar12_18);
    weeksLastYearZara[10] = setAverageDiscount(Zmar19_25);
    weeksLastYearZara[11] = setAverageDiscount(Zmar26_31);
    weeksLastYearZara[12] = setAverageDiscount(Zabr1_8);
    weeksLastYearZara[13] = setAverageDiscount(Zabr9_15);
    weeksLastYearZara[14] = setAverageDiscount(Zabr16_22);
    weeksLastYearZara[15] = setAverageDiscount(Zabr23_30);
    weeksLastYearZara[16] = setAverageDiscount(Zmay1_6);
    weeksLastYearZara[17] = setAverageDiscount(Zmay7_13);
    weeksLastYearZara[18] = setAverageDiscount(Zmay14_20);
    weeksLastYearZara[19] = setAverageDiscount(Zmay21_31);
    weeksLastYearZara[20] = setAverageDiscount(Zjun1_10);
    weeksLastYearZara[21] = setAverageDiscount(Zjun11_17);
    weeksLastYearZara[22] = setAverageDiscount(Zjun18_24);
    weeksLastYearZara[23] = setAverageDiscount(Zjun25_30);
    weeksLastYearZara[24] = setAverageDiscount(Zjul1_8);
    weeksLastYearZara[25] = setAverageDiscount(Zjul9_15);
    weeksLastYearZara[26] = setAverageDiscount(Zjul16_22);
    weeksLastYearZara[27] = setAverageDiscount(Zjul23_31);
    weeksLastYearZara[28] = setAverageDiscount(Zago1_5);
    weeksLastYearZara[29] = setAverageDiscount(Zago6_12);
    weeksLastYearZara[30] = setAverageDiscount(Zago13_19);
    weeksLastYearZara[31] = setAverageDiscount(Zago20_26);
    weeksLastYearZara[32] = setAverageDiscount(Zago27_31);
    weeksLastYearZara[33] = setAverageDiscount(Zsep1_9);
    weeksLastYearZara[34] = setAverageDiscount(Zsep10_16);
    weeksLastYearZara[35] = setAverageDiscount(Zsep17_23);
    weeksLastYearZara[36] = setAverageDiscount(Zsep24_30);
    weeksLastYearZara[37] = setAverageDiscount(Zoct1_7);
    weeksLastYearZara[38] = setAverageDiscount(Zoct8_14);
    weeksLastYearZara[39] = setAverageDiscount(Zoct15_21);
    weeksLastYearZara[40] = setAverageDiscount(Zoct22_31);
    weeksLastYearZara[41] = setAverageDiscount(Znov1_5);
    weeksLastYearZara[42] = setAverageDiscount(Znov6_11);
    weeksLastYearZara[43] = setAverageDiscount(Znov12_18);
    weeksLastYearZara[44] = setAverageDiscount(Znov19_25);
    weeksLastYearZara[45] = setAverageDiscount(Znov26_30);
    weeksLastYearZara[46] = setAverageDiscount(Zdic1_9);
    weeksLastYearZara[47] = setAverageDiscount(Zdic10_17);
    weeksLastYearZara[48] = setAverageDiscount(Zdic18_24);
    weeksLastYearZara[49] = setAverageDiscount(Zdic25_31);

    //  descuento año actual mango
    weeksActualYearMango[0] = setAverageDiscount(mene1_7);
    weeksActualYearMango[1] = setAverageDiscount(mene8_14);
    weeksActualYearMango[2] = setAverageDiscount(mene15_21);
    weeksActualYearMango[3] = setAverageDiscount(mene22_31);
    weeksActualYearMango[4] = setAverageDiscount(mfeb1_11);
    weeksActualYearMango[5] = setAverageDiscount(mfeb12_18);
    weeksActualYearMango[6] = setAverageDiscount(mfeb19_25);
    weeksActualYearMango[7] = setAverageDiscount(mfeb26_29);
    weeksActualYearMango[8] = setAverageDiscount(mmar1_11);
    weeksActualYearMango[9] = setAverageDiscount(mmar12_18);
    weeksActualYearMango[10] = setAverageDiscount(mmar19_25);
    weeksActualYearMango[11] = setAverageDiscount(mmar26_31);
    weeksActualYearMango[12] = setAverageDiscount(mabr1_8);
    weeksActualYearMango[13] = setAverageDiscount(mabr9_15);
    weeksActualYearMango[14] = setAverageDiscount(mabr16_22);
    weeksActualYearMango[15] = setAverageDiscount(mabr23_30);
    weeksActualYearMango[16] = setAverageDiscount(mmay1_6);
    weeksActualYearMango[17] = setAverageDiscount(mmay7_13);
    weeksActualYearMango[18] = setAverageDiscount(mmay14_20);
    weeksActualYearMango[19] = setAverageDiscount(mmay21_31);
    weeksActualYearMango[20] = setAverageDiscount(mjun1_10);
    weeksActualYearMango[21] = setAverageDiscount(mjun11_17);
    weeksActualYearMango[22] = setAverageDiscount(mjun18_24);
    weeksActualYearMango[23] = setAverageDiscount(mjun25_30);
    weeksActualYearMango[24] = setAverageDiscount(mjul1_8);
    weeksActualYearMango[25] = setAverageDiscount(mjul9_15);
    weeksActualYearMango[26] = setAverageDiscount(mjul16_22);
    weeksActualYearMango[27] = setAverageDiscount(mjul23_31);
    weeksActualYearMango[28] = setAverageDiscount(mago1_5);
    weeksActualYearMango[29] = setAverageDiscount(mago6_12);
    weeksActualYearMango[30] = setAverageDiscount(mago13_19);
    weeksActualYearMango[31] = setAverageDiscount(mago20_26);
    weeksActualYearMango[32] = setAverageDiscount(mago27_31);
    weeksActualYearMango[33] = setAverageDiscount(msep1_9);
    weeksActualYearMango[34] = setAverageDiscount(msep10_16);
    weeksActualYearMango[35] = setAverageDiscount(msep17_23);
    weeksActualYearMango[36] = setAverageDiscount(msep24_30);
    weeksActualYearMango[37] = setAverageDiscount(moct1_7);
    weeksActualYearMango[38] = setAverageDiscount(moct8_14);
    weeksActualYearMango[39] = setAverageDiscount(moct15_21);
    weeksActualYearMango[40] = setAverageDiscount(moct22_31);
    weeksActualYearMango[41] = setAverageDiscount(mnov1_5);
    weeksActualYearMango[42] = setAverageDiscount(mnov6_11);
    weeksActualYearMango[43] = setAverageDiscount(mnov12_18);
    weeksActualYearMango[44] = setAverageDiscount(mnov19_25);
    weeksActualYearMango[45] = setAverageDiscount(mnov26_30);
    weeksActualYearMango[46] = setAverageDiscount(mdic1_9);
    weeksActualYearMango[47] = setAverageDiscount(mdic10_17);
    weeksActualYearMango[48] = setAverageDiscount(mdic18_24);
    weeksActualYearMango[49] = setAverageDiscount(mdic25_31);

    //  descuento semana año anterior mango
    weeksLastYearMango[0] = setAverageDiscount(lmene1_7);
    weeksLastYearMango[1] = setAverageDiscount(lmene8_14);
    weeksLastYearMango[2] = setAverageDiscount(lmene15_21);
    weeksLastYearMango[3] = setAverageDiscount(lmene22_31);
    weeksLastYearMango[4] = setAverageDiscount(lmfeb1_11);
    weeksLastYearMango[5] = setAverageDiscount(lmfeb12_18);
    weeksLastYearMango[6] = setAverageDiscount(lmfeb19_25);
    weeksLastYearMango[7] = setAverageDiscount(lmfeb26_29);
    weeksLastYearMango[8] = setAverageDiscount(lmmar1_11);
    weeksLastYearMango[9] = setAverageDiscount(lmmar12_18);
    weeksLastYearMango[10] = setAverageDiscount(lmmar19_25);
    weeksLastYearMango[11] = setAverageDiscount(lmmar26_31);
    weeksLastYearMango[12] = setAverageDiscount(lmabr1_8);
    weeksLastYearMango[13] = setAverageDiscount(lmabr9_15);
    weeksLastYearMango[14] = setAverageDiscount(lmabr16_22);
    weeksLastYearMango[15] = setAverageDiscount(lmabr23_30);
    weeksLastYearMango[16] = setAverageDiscount(lmmay1_6);
    weeksLastYearMango[17] = setAverageDiscount(lmmay7_13);
    weeksLastYearMango[18] = setAverageDiscount(lmmay14_20);
    weeksLastYearMango[19] = setAverageDiscount(lmmay21_31);
    weeksLastYearMango[20] = setAverageDiscount(lmjun1_10);
    weeksLastYearMango[21] = setAverageDiscount(lmjun11_17);
    weeksLastYearMango[22] = setAverageDiscount(lmjun18_24);
    weeksLastYearMango[23] = setAverageDiscount(lmjun25_30);
    weeksLastYearMango[24] = setAverageDiscount(lmjul1_8);
    weeksLastYearMango[25] = setAverageDiscount(lmjul9_15);
    weeksLastYearMango[26] = setAverageDiscount(lmjul16_22);
    weeksLastYearMango[27] = setAverageDiscount(lmjul23_31);
    weeksLastYearMango[28] = setAverageDiscount(lmago1_5);
    weeksLastYearMango[29] = setAverageDiscount(lmago6_12);
    weeksLastYearMango[30] = setAverageDiscount(lmago13_19);
    weeksLastYearMango[31] = setAverageDiscount(lmago20_26);
    weeksLastYearMango[32] = setAverageDiscount(lmago27_31);
    weeksLastYearMango[33] = setAverageDiscount(lmsep1_9);
    weeksLastYearMango[34] = setAverageDiscount(lmsep10_16);
    weeksLastYearMango[35] = setAverageDiscount(lmsep17_23);
    weeksLastYearMango[36] = setAverageDiscount(lmsep24_30);
    weeksLastYearMango[37] = setAverageDiscount(lmoct1_7);
    weeksLastYearMango[38] = setAverageDiscount(lmoct8_14);
    weeksLastYearMango[39] = setAverageDiscount(lmoct15_21);
    weeksLastYearMango[40] = setAverageDiscount(lmoct22_31);
    weeksLastYearMango[41] = setAverageDiscount(lmnov1_5);
    weeksLastYearMango[42] = setAverageDiscount(lmnov6_11);
    weeksLastYearMango[43] = setAverageDiscount(lmnov12_18);
    weeksLastYearMango[44] = setAverageDiscount(lmnov19_25);
    weeksLastYearMango[45] = setAverageDiscount(lmnov26_30);
    weeksLastYearMango[46] = setAverageDiscount(lmdic1_9);
    weeksLastYearMango[47] = setAverageDiscount(lmdic10_17);
    weeksLastYearMango[48] = setAverageDiscount(lmdic18_24);
    weeksLastYearMango[49] = setAverageDiscount(lmdic25_31);  

    obj.weeksZaraActual = weeksActualYearZara;
    obj.weeksZaraBefore = weeksLastYearZara;
    obj.weeksMangoActual = weeksActualYearMango;
    obj.weeksMangoBefore = weeksLastYearMango;
    
  
    return obj;
  
  };

  
  // array de descuentos promedio por marca y dos años
  exports.averageDiscountWeeks = arr => {
    let obj = {}; // objeto que contiene los arrays con los valores por semana
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
    let Zene22_31 = [];
    let Zfeb1_11 = [];
    let Zfeb12_18 = [];
    let Zfeb19_25 = [];
    let Zfeb26_29 = [];
    let Zmar1_11 = [];
    let Zmar12_18 = [];
    let Zmar19_25 = [];
    let Zmar26_31 = [];
    let Zabr1_8 = [];
    let Zabr9_15 = [];
    let Zabr16_22 = [];
    let Zabr23_30 = [];
    let Zmay1_6 = [];
    let Zmay7_13 = [];
    let Zmay14_20 = [];
    let Zmay21_31 = [];
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
    
      // let count = 1;
      
    let date = new Date();
    
      try {
        arr.forEach( element => {
            let currentYear = date.getFullYear();
            let year = (element.createdAt);
            fechaDoc = (year.toISOString()).split("T")[0];
            year = parseInt(((year.toISOString()).split("T")[0]).split("-")[0]);
            let lastYear = currentYear - 1;
            let fecha = (element.createdAt).getTime(); // funcion para obtener la fecha
    
          if (year === currentYear && element.discontinued === false) {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
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
              if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mar1_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mar12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mar19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                mar26_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                abr1_8.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                abr9_15.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                abr16_22.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                abr23_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                may1_6.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                may7_13.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                may14_20.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                may21_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                jun1_10.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                jun11_17.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                jun18_24.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                jun25_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                jul1_8.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                jul9_15.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                jul16_22.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                jul23_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                ago1_5.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                ago6_12.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                ago13_19.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                ago20_26.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                ago27_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                sep1_9.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                sep10_16.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                sep17_23.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                sep24_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                oct1_7.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                oct8_14.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                oct15_21.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                oct22_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                nov1_5.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                nov6_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                nov12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                nov19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                nov26_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                dic1_9.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                dic10_17.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                dic18_24.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                dic25_31.push(discount);
                return;
              }
          }
    
          if (year === lastYear && element.discontinued === false) {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zene1_7.push(discount);
                return;
              } 
              if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zene8_14.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zene15_21.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zene22_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zfeb1_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zfeb12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zfeb19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zfeb26_29.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmar1_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmar12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmar19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmar26_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zabr1_8.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zabr9_15.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zabr16_22.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zabr23_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmay1_6.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmay7_13.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmay14_20.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zmay21_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjun1_10.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjun11_17.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjun18_24.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjun25_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjul1_8.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjul9_15.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjul16_22.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zjul23_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zago1_5.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zago6_12.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zago13_19.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zago20_26.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zago27_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zsep1_9.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zsep10_16.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zsep17_23.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zsep24_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zoct1_7.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zoct8_14.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zoct15_21.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zoct22_31.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Znov1_5.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Znov6_11.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Znov12_18.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Znov19_25.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Znov26_30.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zdic1_9.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zdic10_17.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zdic18_24.push(discount);
                return;
              }
              if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
                let { precio, descuento} = element;
                let discount = 0;
                discount = parseFloat(Math.abs( ((descuento*100)/precio)-100 ).toFixed(2));
      
                Zdic25_31.push(discount);
                return;
              }
          }
        }); // fin del ciclo que guarda los precios de cada mes
      } catch (error) {
        console.log(error);
      }
    
    weeksActualYear[0] = setAverageDiscount(ene1_7);
    weeksActualYear[1] = setAverageDiscount(ene8_14);
    weeksActualYear[2] = setAverageDiscount(ene15_21);
    weeksActualYear[3] = setAverageDiscount(ene22_31);
    weeksActualYear[4] = setAverageDiscount(feb1_11);
    weeksActualYear[5] = setAverageDiscount(feb12_18);
    weeksActualYear[6] = setAverageDiscount(feb19_25);
    weeksActualYear[7] = setAverageDiscount(feb26_29);
    weeksActualYear[8] = setAverageDiscount(mar1_11);
    weeksActualYear[9] = setAverageDiscount(mar12_18);
    weeksActualYear[10] = setAverageDiscount(mar19_25);
    weeksActualYear[11] = setAverageDiscount(mar26_31);
    weeksActualYear[12] = setAverageDiscount(abr1_8);
    weeksActualYear[13] = setAverageDiscount(abr9_15);
    weeksActualYear[14] = setAverageDiscount(abr16_22);
    weeksActualYear[15] = setAverageDiscount(abr23_30);
    weeksActualYear[16] = setAverageDiscount(may1_6);
    weeksActualYear[17] = setAverageDiscount(may7_13);
    weeksActualYear[18] = setAverageDiscount(may14_20);
    weeksActualYear[19] = setAverageDiscount(may21_31);
    weeksActualYear[20] = setAverageDiscount(jun1_10);
    weeksActualYear[21] = setAverageDiscount(jun11_17);
    weeksActualYear[22] = setAverageDiscount(jun18_24);
    weeksActualYear[23] = setAverageDiscount(jun25_30);
    weeksActualYear[24] = setAverageDiscount(jul1_8);
    weeksActualYear[25] = setAverageDiscount(jul9_15);
    weeksActualYear[26] = setAverageDiscount(jul16_22);
    weeksActualYear[27] = setAverageDiscount(jul23_31);
    weeksActualYear[28] = setAverageDiscount(ago1_5);
    weeksActualYear[29] = setAverageDiscount(ago6_12);
    weeksActualYear[30] = setAverageDiscount(ago13_19);
    weeksActualYear[31] = setAverageDiscount(ago20_26);
    weeksActualYear[32] = setAverageDiscount(ago27_31);
    weeksActualYear[33] = setAverageDiscount(sep1_9);
    weeksActualYear[34] = setAverageDiscount(sep10_16);
    weeksActualYear[35] = setAverageDiscount(sep17_23);
    weeksActualYear[36] = setAverageDiscount(sep24_30);
    weeksActualYear[37] = setAverageDiscount(oct1_7);
    weeksActualYear[38] = setAverageDiscount(oct8_14);
    weeksActualYear[39] = setAverageDiscount(oct15_21);
    weeksActualYear[40] = setAverageDiscount(oct22_31);
    weeksActualYear[41] = setAverageDiscount(nov1_5);
    weeksActualYear[42] = setAverageDiscount(nov6_11);
    weeksActualYear[43] = setAverageDiscount(nov12_18);
    weeksActualYear[44] = setAverageDiscount(nov19_25);
    weeksActualYear[45] = setAverageDiscount(nov26_30);
    weeksActualYear[46] = setAverageDiscount(dic1_9);
    weeksActualYear[47] = setAverageDiscount(dic10_17);
    weeksActualYear[48] = setAverageDiscount(dic18_24);
    weeksActualYear[49] = setAverageDiscount(dic25_31);
  
    // // descuento año anterior 
    weeksLastYear[0] = setAverageDiscount(Zene1_7);
    weeksLastYear[1] = setAverageDiscount(Zene8_14);
    weeksLastYear[2] = setAverageDiscount(Zene15_21);
    weeksLastYear[3] = setAverageDiscount(Zene22_31);
    weeksLastYear[4] = setAverageDiscount(Zfeb1_11);
    weeksLastYear[5] = setAverageDiscount(Zfeb12_18);
    weeksLastYear[6] = setAverageDiscount(Zfeb19_25);
    weeksLastYear[7] = setAverageDiscount(Zfeb26_29);
    weeksLastYear[8] = setAverageDiscount(Zmar1_11);
    weeksLastYear[9] = setAverageDiscount(Zmar12_18);
    weeksLastYear[10] = setAverageDiscount(Zmar19_25);
    weeksLastYear[11] = setAverageDiscount(Zmar26_31);
    weeksLastYear[12] = setAverageDiscount(Zabr1_8);
    weeksLastYear[13] = setAverageDiscount(Zabr9_15);
    weeksLastYear[14] = setAverageDiscount(Zabr16_22);
    weeksLastYear[15] = setAverageDiscount(Zabr23_30);
    weeksLastYear[16] = setAverageDiscount(Zmay1_6);
    weeksLastYear[17] = setAverageDiscount(Zmay7_13);
    weeksLastYear[18] = setAverageDiscount(Zmay14_20);
    weeksLastYear[19] = setAverageDiscount(Zmay21_31);
    weeksLastYear[20] = setAverageDiscount(Zjun1_10);
    weeksLastYear[21] = setAverageDiscount(Zjun11_17);
    weeksLastYear[22] = setAverageDiscount(Zjun18_24);
    weeksLastYear[23] = setAverageDiscount(Zjun25_30);
    weeksLastYear[24] = setAverageDiscount(Zjul1_8);
    weeksLastYear[25] = setAverageDiscount(Zjul9_15);
    weeksLastYear[26] = setAverageDiscount(Zjul16_22);
    weeksLastYear[27] = setAverageDiscount(Zjul23_31);
    weeksLastYear[28] = setAverageDiscount(Zago1_5);
    weeksLastYear[29] = setAverageDiscount(Zago6_12);
    weeksLastYear[30] = setAverageDiscount(Zago13_19);
    weeksLastYear[31] = setAverageDiscount(Zago20_26);
    weeksLastYear[32] = setAverageDiscount(Zago27_31);
    weeksLastYear[33] = setAverageDiscount(Zsep1_9);
    weeksLastYear[34] = setAverageDiscount(Zsep10_16);
    weeksLastYear[35] = setAverageDiscount(Zsep17_23);
    weeksLastYear[36] = setAverageDiscount(Zsep24_30);
    weeksLastYear[37] = setAverageDiscount(Zoct1_7);
    weeksLastYear[38] = setAverageDiscount(Zoct8_14);
    weeksLastYear[39] = setAverageDiscount(Zoct15_21);
    weeksLastYear[40] = setAverageDiscount(Zoct22_31);
    weeksLastYear[41] = setAverageDiscount(Znov1_5);
    weeksLastYear[42] = setAverageDiscount(Znov6_11);
    weeksLastYear[43] = setAverageDiscount(Znov12_18);
    weeksLastYear[44] = setAverageDiscount(Znov19_25);
    weeksLastYear[45] = setAverageDiscount(Znov26_30);
    weeksLastYear[46] = setAverageDiscount(Zdic1_9);
    weeksLastYear[47] = setAverageDiscount(Zdic10_17);
    weeksLastYear[48] = setAverageDiscount(Zdic18_24);
    weeksLastYear[49] = setAverageDiscount(Zdic25_31);
    
    obj.weeksActualYear = weeksActualYear;
    obj.weeksLastYear = weeksLastYear;


      return obj;
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
  