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
    weeksLastYearZara[0] = setAverageDiscount(ene1_7);
    weeksLastYearZara[1] = setAverageDiscount(ene8_14);
    weeksLastYearZara[2] = setAverageDiscount(ene15_21);
    weeksLastYearZara[3] = setAverageDiscount(ene22_31);
    weeksLastYearZara[4] = setAverageDiscount(feb1_11);
    weeksLastYearZara[5] = setAverageDiscount(feb12_18);
    weeksLastYearZara[6] = setAverageDiscount(feb19_25);
    weeksLastYearZara[7] = setAverageDiscount(feb26_29);
    weeksLastYearZara[8] = setAverageDiscount(mar1_11);
    weeksLastYearZara[9] = setAverageDiscount(mar12_18);
    weeksLastYearZara[10] = setAverageDiscount(mar19_25);
    weeksLastYearZara[11] = setAverageDiscount(mar26_31);
    weeksLastYearZara[12] = setAverageDiscount(abr1_8);
    weeksLastYearZara[13] = setAverageDiscount(abr9_15);
    weeksLastYearZara[14] = setAverageDiscount(abr16_22);
    weeksLastYearZara[15] = setAverageDiscount(abr23_30);
    weeksLastYearZara[16] = setAverageDiscount(may1_6);
    weeksLastYearZara[17] = setAverageDiscount(may7_13);
    weeksLastYearZara[18] = setAverageDiscount(may14_20);
    weeksLastYearZara[19] = setAverageDiscount(may21_31);
    weeksLastYearZara[20] = setAverageDiscount(jun1_10);
    weeksLastYearZara[21] = setAverageDiscount(jun11_17);
    weeksLastYearZara[22] = setAverageDiscount(jun18_24);
    weeksLastYearZara[23] = setAverageDiscount(jun25_30);
    weeksLastYearZara[24] = setAverageDiscount(jul1_8);
    weeksLastYearZara[25] = setAverageDiscount(jul9_15);
    weeksLastYearZara[26] = setAverageDiscount(jul16_22);
    weeksLastYearZara[27] = setAverageDiscount(jul23_31);
    weeksLastYearZara[28] = setAverageDiscount(ago1_5);
    weeksLastYearZara[29] = setAverageDiscount(ago6_12);
    weeksLastYearZara[30] = setAverageDiscount(ago13_19);
    weeksLastYearZara[31] = setAverageDiscount(ago20_26);
    weeksLastYearZara[32] = setAverageDiscount(ago27_31);
    weeksLastYearZara[33] = setAverageDiscount(sep1_9);
    weeksLastYearZara[34] = setAverageDiscount(sep10_16);
    weeksLastYearZara[35] = setAverageDiscount(sep17_23);
    weeksLastYearZara[36] = setAverageDiscount(sep24_30);
    weeksLastYearZara[37] = setAverageDiscount(oct1_7);
    weeksLastYearZara[38] = setAverageDiscount(oct8_14);
    weeksLastYearZara[39] = setAverageDiscount(oct15_21);
    weeksLastYearZara[40] = setAverageDiscount(oct22_31);
    weeksLastYearZara[41] = setAverageDiscount(nov1_5);
    weeksLastYearZara[42] = setAverageDiscount(nov6_11);
    weeksLastYearZara[43] = setAverageDiscount(nov12_18);
    weeksLastYearZara[44] = setAverageDiscount(nov19_25);
    weeksLastYearZara[45] = setAverageDiscount(nov26_30);
    weeksLastYearZara[46] = setAverageDiscount(dic1_9);
    weeksLastYearZara[47] = setAverageDiscount(dic10_17);
    weeksLastYearZara[48] = setAverageDiscount(dic18_24);
    weeksLastYearZara[49] = setAverageDiscount(dic25_31);
  
    
  
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
  