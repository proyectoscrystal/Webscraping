// array descuentos promedio ambas marcas por dos años 

exports.averagePriceWeekGeneral = (arr) => {
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
          if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento === null) {
            ene1_7.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
            ene1_7.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento === null) {
            ene8_14.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,0,8).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
            ene8_14.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento === null) {
            ene15_21.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
            ene15_21.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento === null) {
            ene22_31.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
            ene22_31.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento === null) {
            feb1_11.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
            feb1_11.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento === null) {
            feb12_18.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
            feb12_18.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento === null) {
            feb19_25.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
            feb19_25.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento === null) {
            feb26_29.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
            feb26_29.push(element.descuento);
            return;
          }

          if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento === null) {
            mar1_11.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
            mar1_11.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento === null) {
            mar12_18.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
            mar12_18.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento === null) {
            mar19_25.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
            mar19_25.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento === null) {
            mar26_31.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
            mar26_31.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento === null) {
            abr1_8.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,8,23).getTime()  && element.descuento !== null) {
            abr1_8.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento === null) {
            abr9_15.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,3,9).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
            abr9_15.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento === null) {
            abr16_22.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
            abr16_22.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento === null) {
            abr23_30.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
            abr23_30.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento === null) {
            may1_6.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
            may1_6.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento === null) {
            may7_13.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
            may7_13.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento === null) {
            may14_20.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
            may14_20.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento === null) {
            may21_31.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
            may21_31.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento === null) {
            jun1_10.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
            jun1_10.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento === null) {
            jun11_17.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
            jun11_17.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento === null) {
            jun18_24.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
            jun18_24.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento === null) {
            jun25_30.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
            jun25_30.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento === null) {
            jul1_8.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
            ene1_7.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento === null) {
            jul9_15.push(element.precio);
            return;
          }else if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
            jul9_15.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento === null) {
            jul16_22.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
            jul16_22.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento === null) {
            jul23_31.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
            jul23_31.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento === null) {
            ago1_5.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
            ago1_5.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento === null) {
            ago6_12.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
            ago6_12.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento === null) {
            ago13_19.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
            ago13_19.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento === null) {
            ago20_26.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
            ago20_26.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento === null) {
            ago27_31.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
            ago27_31.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento === null) {
            sep1_9.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
            sep1_9.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento === null) {
            sep10_16.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
            sep10_16.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento === null) {
            sep17_23.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
            sep17_23.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento === null) {
            sep24_30.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
            sep24_30.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento === null) {
            oct1_7.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
            oct1_7.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento === null) {
            oct8_14.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
            oct8_14.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento === null) {
            oct15_21.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
            oct15_21.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento === null) {
            oct22_31.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
            oct22_31.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento === null) {
            nov1_5.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
            nov1_5.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento === null) {
            nov6_11.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
            nov6_11.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento === null) {
            nov12_18.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
            nov12_18.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento === null) {
            nov19_25.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
            nov19_25.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento === null) {
            nov26_30.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
            nov26_30.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento === null) {
            dic1_9.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
            dic1_9.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento === null) {
            dic10_17.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
            dic10_17.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento === null) {
            dic18_24.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
            dic18_24.push(element.descuento);
            return;
          }
          if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento === null) {
            dic25_31.push(element.precio);
            return;
          } else if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
            dic25_31.push(element.descuento);
            return;
          }

        }
        
  
        if (year === lastYear && element.origin == 'Zara') {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento === null) {
              Zene1_7.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
              Zene1_7.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento === null) {
              Zene8_14.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,0,8).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
              Zene8_14.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento === null) {
              Zene15_21.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
              Zene15_21.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento === null) {
              Zene22_31.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
              Zene22_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento === null) {
              Zfeb1_11.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
              Zfeb1_11.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento === null) {
              Zfeb12_18.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
              Zfeb12_18.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento === null) {
              Zfeb19_25.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
              Zfeb19_25.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento === null) {
              Zfeb26_29.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
              Zfeb26_29.push(element.descuento);
              return;
            }
  
            if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento === null) {
              Zmar1_11.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
              Zmar1_11.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento === null) {
              Zmar12_18.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
              Zmar12_18.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento === null) {
              Zmar19_25.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
              Zmar19_25.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento === null) {
              Zmar26_31.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
              Zmar26_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento === null) {
              Zabr1_8.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,8,23).getTime()  && element.descuento !== null) {
              Zabr1_8.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento === null) {
              Zabr9_15.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,9).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
              Zabr9_15.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento === null) {
              Zabr16_22.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
              Zabr16_22.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento === null) {
              Zabr23_30.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
              Zabr23_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento === null) {
              Zmay1_6.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
              Zmay1_6.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento === null) {
              Zmay7_13.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
              Zmay7_13.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento === null) {
              Zmay14_20.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
              Zmay14_20.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento === null) {
              Zmay21_31.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
              Zmay21_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento === null) {
              Zjun1_10.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
              Zjun1_10.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento === null) {
              Zjun11_17.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
              Zjun11_17.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento === null) {
              Zjun18_24.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
              Zjun18_24.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento === null) {
              Zjun25_30.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
              Zjun25_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento === null) {
              Zjul1_8.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
              Zene1_7.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento === null) {
              Zjul9_15.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
              Zjul9_15.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento === null) {
              Zjul16_22.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
              Zjul16_22.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento === null) {
              Zjul23_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
              Zjul23_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento === null) {
              Zago1_5.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
              Zago1_5.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento === null) {
              Zago6_12.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
              Zago6_12.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento === null) {
              Zago13_19.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
              Zago13_19.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento === null) {
              Zago20_26.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
              Zago20_26.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento === null) {
              Zago27_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
              Zago27_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento === null) {
              Zsep1_9.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
              Zsep1_9.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento === null) {
              Zsep10_16.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
              Zsep10_16.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento === null) {
              Zsep17_23.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
              Zsep17_23.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento === null) {
              Zsep24_30.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
              Zsep24_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento === null) {
              Zoct1_7.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
              Zoct1_7.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento === null) {
              Zoct8_14.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
              Zoct8_14.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento === null) {
              Zoct15_21.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
              Zoct15_21.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento === null) {
              Zoct22_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
              Zoct22_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento === null) {
              Znov1_5.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
              Znov1_5.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento === null) {
              Znov6_11.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
              Znov6_11.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento === null) {
              Znov12_18.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
              Znov12_18.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento === null) {
              Znov19_25.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
              Znov19_25.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento === null) {
              Znov26_30.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
              Znov26_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento === null) {
              Zdic1_9.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
              Zdic1_9.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento === null) {
              Zdic10_17.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
              Zdic10_17.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento === null) {
              Zdic18_24.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
              Zdic18_24.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento === null) {
              Zdic25_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
              Zdic25_31.push(element.descuento);
              return;
            }
  
          }
        // termina zara semanas
        // empieza mango semanas

        if (year === currentYear && element.origin == 'Mango') {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento === null) {
              mene1_7.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
              mene1_7.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento === null) {
              mene8_14.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,0,8).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
              mene8_14.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento === null) {
              mene15_21.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
              mene15_21.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento === null) {
              mene22_31.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
              mene22_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento === null) {
              mfeb1_11.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
              mfeb1_11.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento === null) {
              mfeb12_18.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
              mfeb12_18.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento === null) {
              mfeb19_25.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
              mfeb19_25.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento === null) {
              mfeb26_29.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
              mfeb26_29.push(element.descuento);
              return;
            }
  
            if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento === null) {
              mmar1_11.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
              mmar1_11.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento === null) {
              mmar12_18.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
              mmar12_18.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento === null) {
              mmar19_25.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
              mmar19_25.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento === null) {
              mmar26_31.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
              mmar26_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento === null) {
              mabr1_8.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,8,23).getTime()  && element.descuento !== null) {
              mabr1_8.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento === null) {
              mabr9_15.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,9).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
              mabr9_15.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento === null) {
              mabr16_22.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
              mabr16_22.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento === null) {
              mabr23_30.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
              mabr23_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento === null) {
              mmay1_6.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
              mmay1_6.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento === null) {
              mmay7_13.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
              mmay7_13.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento === null) {
              mmay14_20.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
              mmay14_20.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento === null) {
              mmay21_31.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
              mmay21_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento === null) {
              mjun1_10.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
              mjun1_10.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento === null) {
              mjun11_17.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
              mjun11_17.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento === null) {
              mjun18_24.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
              mjun18_24.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento === null) {
              mjun25_30.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
              mjun25_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento === null) {
              mjul1_8.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
              mene1_7.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento === null) {
              mjul9_15.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
              mjul9_15.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento === null) {
              mjul16_22.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
              mjul16_22.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento === null) {
              mjul23_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
              mjul23_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento === null) {
              mago1_5.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
              mago1_5.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento === null) {
              mago6_12.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
              mago6_12.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento === null) {
              mago13_19.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
              mago13_19.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento === null) {
              mago20_26.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
              mago20_26.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento === null) {
              mago27_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
              mago27_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento === null) {
              msep1_9.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
              msep1_9.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento === null) {
              msep10_16.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
              msep10_16.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento === null) {
              msep17_23.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
              msep17_23.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento === null) {
              msep24_30.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
              msep24_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento === null) {
              moct1_7.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
              moct1_7.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento === null) {
              moct8_14.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
              moct8_14.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento === null) {
              moct15_21.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
              moct15_21.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento === null) {
              moct22_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
              moct22_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento === null) {
              mnov1_5.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
              mnov1_5.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento === null) {
              mnov6_11.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
              mnov6_11.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento === null) {
              mnov12_18.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
              mnov12_18.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento === null) {
              mnov19_25.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
              mnov19_25.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento === null) {
              mnov26_30.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
              mnov26_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento === null) {
              mdic1_9.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
              mdic1_9.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento === null) {
              mdic10_17.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
              mdic10_17.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento === null) {
              mdic18_24.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
              mdic18_24.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento === null) {
              mdic25_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
              mdic25_31.push(element.descuento);
              return;
            }
  
          }

          // mango semanas año anterior
    
          if (year === lastYear && element.origin == 'Mango') {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento === null) {
              lmene1_7.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
              lmene1_7.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento === null) {
              lmene8_14.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,0,8).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
              lmene8_14.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento === null) {
              lmene15_21.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
              lmene15_21.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento === null) {
              lmene22_31.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
              lmene22_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento === null) {
              lmfeb1_11.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
              lmfeb1_11.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento === null) {
              lmfeb12_18.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
              lmfeb12_18.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento === null) {
              lmfeb19_25.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
              lmfeb19_25.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento === null) {
              lmfeb26_29.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
              lmfeb26_29.push(element.descuento);
              return;
            }
  
            if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento === null) {
              lmmar1_11.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
              lmmar1_11.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento === null) {
              lmmar12_18.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
              lmmar12_18.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento === null) {
              lmmar19_25.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
              lmmar19_25.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento === null) {
              lmmar26_31.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
              lmmar26_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento === null) {
              lmabr1_8.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,8,23).getTime()  && element.descuento !== null) {
              lmabr1_8.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento === null) {
              lmabr9_15.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,9).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
              lmabr9_15.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento === null) {
              lmabr16_22.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
              lmabr16_22.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento === null) {
              lmabr23_30.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
              lmabr23_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento === null) {
              lmmay1_6.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
              lmmay1_6.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento === null) {
              lmmay7_13.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
              lmmay7_13.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento === null) {
              lmmay14_20.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
              lmmay14_20.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento === null) {
              lmmay21_31.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
              lmmay21_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento === null) {
              lmjun1_10.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
              lmjun1_10.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento === null) {
              lmjun11_17.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
              lmjun11_17.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento === null) {
              lmjun18_24.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
              lmjun18_24.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento === null) {
              lmjun25_30.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
              lmjun25_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento === null) {
              lmjul1_8.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
              lmene1_7.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento === null) {
              lmjul9_15.push(element.precio);
              return;
            }else if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
              lmjul9_15.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento === null) {
              lmjul16_22.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
              lmjul16_22.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento === null) {
              lmjul23_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
              lmjul23_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento === null) {
              lmago1_5.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
              lmago1_5.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento === null) {
              lmago6_12.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
              lmago6_12.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento === null) {
              lmago13_19.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
              lmago13_19.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento === null) {
              lmago20_26.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
              lmago20_26.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento === null) {
              lmago27_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
              lmago27_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento === null) {
              lmsep1_9.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
              lmsep1_9.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento === null) {
              lmsep10_16.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
              lmsep10_16.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento === null) {
              lmsep17_23.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
              lmsep17_23.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento === null) {
              lmsep24_30.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
              lmsep24_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento === null) {
              lmoct1_7.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
              lmoct1_7.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento === null) {
              lmoct8_14.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
              lmoct8_14.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento === null) {
              lmoct15_21.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
              lmoct15_21.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento === null) {
              lmoct22_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
              lmoct22_31.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento === null) {
              lmnov1_5.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
              lmnov1_5.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento === null) {
              lmnov6_11.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
              lmnov6_11.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento === null) {
              lmnov12_18.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
              lmnov12_18.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento === null) {
              lmnov19_25.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
              lmnov19_25.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento === null) {
              lmnov26_30.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
              lmnov26_30.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento === null) {
              lmdic1_9.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
              lmdic1_9.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento === null) {
              lmdic10_17.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
              lmdic10_17.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento === null) {
              lmdic18_24.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
              lmdic18_24.push(element.descuento);
              return;
            }
            if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento === null) {
              lmdic25_31.push(element.precio);
              return;
            } else if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
              lmdic25_31.push(element.descuento);
              return;
            }
  
          }



      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    // // descuento año actual zara
    weeksActualYearZara[0] = setAveragePriceMonth(ene1_7);
    weeksActualYearZara[1] = setAveragePriceMonth(ene8_14);
    weeksActualYearZara[2] = setAveragePriceMonth(ene15_21);
    weeksActualYearZara[3] = setAveragePriceMonth(ene22_31);
    weeksActualYearZara[4] = setAveragePriceMonth(feb1_11);
    weeksActualYearZara[5] = setAveragePriceMonth(feb12_18);
    weeksActualYearZara[6] = setAveragePriceMonth(feb19_25);
    weeksActualYearZara[7] = setAveragePriceMonth(feb26_29);
    weeksActualYearZara[8] = setAveragePriceMonth(mar1_11);
    weeksActualYearZara[9] = setAveragePriceMonth(mar12_18);
    weeksActualYearZara[10] = setAveragePriceMonth(mar19_25);
    weeksActualYearZara[11] = setAveragePriceMonth(mar26_31);
    weeksActualYearZara[12] = setAveragePriceMonth(abr1_8);
    weeksActualYearZara[13] = setAveragePriceMonth(abr9_15);
    weeksActualYearZara[14] = setAveragePriceMonth(abr16_22);
    weeksActualYearZara[15] = setAveragePriceMonth(abr23_30);
    weeksActualYearZara[16] = setAveragePriceMonth(may1_6);
    weeksActualYearZara[17] = setAveragePriceMonth(may7_13);
    weeksActualYearZara[18] = setAveragePriceMonth(may14_20);
    weeksActualYearZara[19] = setAveragePriceMonth(may21_31);
    weeksActualYearZara[20] = setAveragePriceMonth(jun1_10);
    weeksActualYearZara[21] = setAveragePriceMonth(jun11_17);
    weeksActualYearZara[22] = setAveragePriceMonth(jun18_24);
    weeksActualYearZara[23] = setAveragePriceMonth(jun25_30);
    weeksActualYearZara[24] = setAveragePriceMonth(jul1_8);
    weeksActualYearZara[25] = setAveragePriceMonth(jul9_15);
    weeksActualYearZara[26] = setAveragePriceMonth(jul16_22);
    weeksActualYearZara[27] = setAveragePriceMonth(jul23_31);
    weeksActualYearZara[28] = setAveragePriceMonth(ago1_5);
    weeksActualYearZara[29] = setAveragePriceMonth(ago6_12);
    weeksActualYearZara[30] = setAveragePriceMonth(ago13_19);
    weeksActualYearZara[31] = setAveragePriceMonth(ago20_26);
    weeksActualYearZara[32] = setAveragePriceMonth(ago27_31);
    weeksActualYearZara[33] = setAveragePriceMonth(sep1_9);
    weeksActualYearZara[34] = setAveragePriceMonth(sep10_16);
    weeksActualYearZara[35] = setAveragePriceMonth(sep17_23);
    weeksActualYearZara[36] = setAveragePriceMonth(sep24_30);
    weeksActualYearZara[37] = setAveragePriceMonth(oct1_7);
    weeksActualYearZara[38] = setAveragePriceMonth(oct8_14);
    weeksActualYearZara[39] = setAveragePriceMonth(oct15_21);
    weeksActualYearZara[40] = setAveragePriceMonth(oct22_31);
    weeksActualYearZara[41] = setAveragePriceMonth(nov1_5);
    weeksActualYearZara[42] = setAveragePriceMonth(nov6_11);
    weeksActualYearZara[43] = setAveragePriceMonth(nov12_18);
    weeksActualYearZara[44] = setAveragePriceMonth(nov19_25);
    weeksActualYearZara[45] = setAveragePriceMonth(nov26_30);
    weeksActualYearZara[46] = setAveragePriceMonth(dic1_9);
    weeksActualYearZara[47] = setAveragePriceMonth(dic10_17);
    weeksActualYearZara[48] = setAveragePriceMonth(dic18_24);
    weeksActualYearZara[49] = setAveragePriceMonth(dic25_31);
  
    // // descuento año anterior zara
    weeksLastYearZara[0] = setAveragePriceMonth(Zene1_7);
    weeksLastYearZara[1] = setAveragePriceMonth(Zene8_14);
    weeksLastYearZara[2] = setAveragePriceMonth(Zene15_21);
    weeksLastYearZara[3] = setAveragePriceMonth(Zene22_31);
    weeksLastYearZara[4] = setAveragePriceMonth(Zfeb1_11);
    weeksLastYearZara[5] = setAveragePriceMonth(Zfeb12_18);
    weeksLastYearZara[6] = setAveragePriceMonth(Zfeb19_25);
    weeksLastYearZara[7] = setAveragePriceMonth(Zfeb26_29);
    weeksLastYearZara[8] = setAveragePriceMonth(Zmar1_11);
    weeksLastYearZara[9] = setAveragePriceMonth(Zmar12_18);
    weeksLastYearZara[10] = setAveragePriceMonth(Zmar19_25);
    weeksLastYearZara[11] = setAveragePriceMonth(Zmar26_31);
    weeksLastYearZara[12] = setAveragePriceMonth(Zabr1_8);
    weeksLastYearZara[13] = setAveragePriceMonth(Zabr9_15);
    weeksLastYearZara[14] = setAveragePriceMonth(Zabr16_22);
    weeksLastYearZara[15] = setAveragePriceMonth(Zabr23_30);
    weeksLastYearZara[16] = setAveragePriceMonth(Zmay1_6);
    weeksLastYearZara[17] = setAveragePriceMonth(Zmay7_13);
    weeksLastYearZara[18] = setAveragePriceMonth(Zmay14_20);
    weeksLastYearZara[19] = setAveragePriceMonth(Zmay21_31);
    weeksLastYearZara[20] = setAveragePriceMonth(Zjun1_10);
    weeksLastYearZara[21] = setAveragePriceMonth(Zjun11_17);
    weeksLastYearZara[22] = setAveragePriceMonth(Zjun18_24);
    weeksLastYearZara[23] = setAveragePriceMonth(Zjun25_30);
    weeksLastYearZara[24] = setAveragePriceMonth(Zjul1_8);
    weeksLastYearZara[25] = setAveragePriceMonth(Zjul9_15);
    weeksLastYearZara[26] = setAveragePriceMonth(Zjul16_22);
    weeksLastYearZara[27] = setAveragePriceMonth(Zjul23_31);
    weeksLastYearZara[28] = setAveragePriceMonth(Zago1_5);
    weeksLastYearZara[29] = setAveragePriceMonth(Zago6_12);
    weeksLastYearZara[30] = setAveragePriceMonth(Zago13_19);
    weeksLastYearZara[31] = setAveragePriceMonth(Zago20_26);
    weeksLastYearZara[32] = setAveragePriceMonth(Zago27_31);
    weeksLastYearZara[33] = setAveragePriceMonth(Zsep1_9);
    weeksLastYearZara[34] = setAveragePriceMonth(Zsep10_16);
    weeksLastYearZara[35] = setAveragePriceMonth(Zsep17_23);
    weeksLastYearZara[36] = setAveragePriceMonth(Zsep24_30);
    weeksLastYearZara[37] = setAveragePriceMonth(Zoct1_7);
    weeksLastYearZara[38] = setAveragePriceMonth(Zoct8_14);
    weeksLastYearZara[39] = setAveragePriceMonth(Zoct15_21);
    weeksLastYearZara[40] = setAveragePriceMonth(Zoct22_31);
    weeksLastYearZara[41] = setAveragePriceMonth(Znov1_5);
    weeksLastYearZara[42] = setAveragePriceMonth(Znov6_11);
    weeksLastYearZara[43] = setAveragePriceMonth(Znov12_18);
    weeksLastYearZara[44] = setAveragePriceMonth(Znov19_25);
    weeksLastYearZara[45] = setAveragePriceMonth(Znov26_30);
    weeksLastYearZara[46] = setAveragePriceMonth(Zdic1_9);
    weeksLastYearZara[47] = setAveragePriceMonth(Zdic10_17);
    weeksLastYearZara[48] = setAveragePriceMonth(Zdic18_24);
    weeksLastYearZara[49] = setAveragePriceMonth(Zdic25_31);

    //  descuento año actual mango
    weeksActualYearMango[0] = setAveragePriceMonth(mene1_7);
    weeksActualYearMango[1] = setAveragePriceMonth(mene8_14);
    weeksActualYearMango[2] = setAveragePriceMonth(mene15_21);
    weeksActualYearMango[3] = setAveragePriceMonth(mene22_31);
    weeksActualYearMango[4] = setAveragePriceMonth(mfeb1_11);
    weeksActualYearMango[5] = setAveragePriceMonth(mfeb12_18);
    weeksActualYearMango[6] = setAveragePriceMonth(mfeb19_25);
    weeksActualYearMango[7] = setAveragePriceMonth(mfeb26_29);
    weeksActualYearMango[8] = setAveragePriceMonth(mmar1_11);
    weeksActualYearMango[9] = setAveragePriceMonth(mmar12_18);
    weeksActualYearMango[10] = setAveragePriceMonth(mmar19_25);
    weeksActualYearMango[11] = setAveragePriceMonth(mmar26_31);
    weeksActualYearMango[12] = setAveragePriceMonth(mabr1_8);
    weeksActualYearMango[13] = setAveragePriceMonth(mabr9_15);
    weeksActualYearMango[14] = setAveragePriceMonth(mabr16_22);
    weeksActualYearMango[15] = setAveragePriceMonth(mabr23_30);
    weeksActualYearMango[16] = setAveragePriceMonth(mmay1_6);
    weeksActualYearMango[17] = setAveragePriceMonth(mmay7_13);
    weeksActualYearMango[18] = setAveragePriceMonth(mmay14_20);
    weeksActualYearMango[19] = setAveragePriceMonth(mmay21_31);
    weeksActualYearMango[20] = setAveragePriceMonth(mjun1_10);
    weeksActualYearMango[21] = setAveragePriceMonth(mjun11_17);
    weeksActualYearMango[22] = setAveragePriceMonth(mjun18_24);
    weeksActualYearMango[23] = setAveragePriceMonth(mjun25_30);
    weeksActualYearMango[24] = setAveragePriceMonth(mjul1_8);
    weeksActualYearMango[25] = setAveragePriceMonth(mjul9_15);
    weeksActualYearMango[26] = setAveragePriceMonth(mjul16_22);
    weeksActualYearMango[27] = setAveragePriceMonth(mjul23_31);
    weeksActualYearMango[28] = setAveragePriceMonth(mago1_5);
    weeksActualYearMango[29] = setAveragePriceMonth(mago6_12);
    weeksActualYearMango[30] = setAveragePriceMonth(mago13_19);
    weeksActualYearMango[31] = setAveragePriceMonth(mago20_26);
    weeksActualYearMango[32] = setAveragePriceMonth(mago27_31);
    weeksActualYearMango[33] = setAveragePriceMonth(msep1_9);
    weeksActualYearMango[34] = setAveragePriceMonth(msep10_16);
    weeksActualYearMango[35] = setAveragePriceMonth(msep17_23);
    weeksActualYearMango[36] = setAveragePriceMonth(msep24_30);
    weeksActualYearMango[37] = setAveragePriceMonth(moct1_7);
    weeksActualYearMango[38] = setAveragePriceMonth(moct8_14);
    weeksActualYearMango[39] = setAveragePriceMonth(moct15_21);
    weeksActualYearMango[40] = setAveragePriceMonth(moct22_31);
    weeksActualYearMango[41] = setAveragePriceMonth(mnov1_5);
    weeksActualYearMango[42] = setAveragePriceMonth(mnov6_11);
    weeksActualYearMango[43] = setAveragePriceMonth(mnov12_18);
    weeksActualYearMango[44] = setAveragePriceMonth(mnov19_25);
    weeksActualYearMango[45] = setAveragePriceMonth(mnov26_30);
    weeksActualYearMango[46] = setAveragePriceMonth(mdic1_9);
    weeksActualYearMango[47] = setAveragePriceMonth(mdic10_17);
    weeksActualYearMango[48] = setAveragePriceMonth(mdic18_24);
    weeksActualYearMango[49] = setAveragePriceMonth(mdic25_31);

    //  descuento semana año anterior mango
    weeksLastYearMango[0] = setAveragePriceMonth(lmene1_7);
    weeksLastYearMango[1] = setAveragePriceMonth(lmene8_14);
    weeksLastYearMango[2] = setAveragePriceMonth(lmene15_21);
    weeksLastYearMango[3] = setAveragePriceMonth(lmene22_31);
    weeksLastYearMango[4] = setAveragePriceMonth(lmfeb1_11);
    weeksLastYearMango[5] = setAveragePriceMonth(lmfeb12_18);
    weeksLastYearMango[6] = setAveragePriceMonth(lmfeb19_25);
    weeksLastYearMango[7] = setAveragePriceMonth(lmfeb26_29);
    weeksLastYearMango[8] = setAveragePriceMonth(lmmar1_11);
    weeksLastYearMango[9] = setAveragePriceMonth(lmmar12_18);
    weeksLastYearMango[10] = setAveragePriceMonth(lmmar19_25);
    weeksLastYearMango[11] = setAveragePriceMonth(lmmar26_31);
    weeksLastYearMango[12] = setAveragePriceMonth(lmabr1_8);
    weeksLastYearMango[13] = setAveragePriceMonth(lmabr9_15);
    weeksLastYearMango[14] = setAveragePriceMonth(lmabr16_22);
    weeksLastYearMango[15] = setAveragePriceMonth(lmabr23_30);
    weeksLastYearMango[16] = setAveragePriceMonth(lmmay1_6);
    weeksLastYearMango[17] = setAveragePriceMonth(lmmay7_13);
    weeksLastYearMango[18] = setAveragePriceMonth(lmmay14_20);
    weeksLastYearMango[19] = setAveragePriceMonth(lmmay21_31);
    weeksLastYearMango[20] = setAveragePriceMonth(lmjun1_10);
    weeksLastYearMango[21] = setAveragePriceMonth(lmjun11_17);
    weeksLastYearMango[22] = setAveragePriceMonth(lmjun18_24);
    weeksLastYearMango[23] = setAveragePriceMonth(lmjun25_30);
    weeksLastYearMango[24] = setAveragePriceMonth(lmjul1_8);
    weeksLastYearMango[25] = setAveragePriceMonth(lmjul9_15);
    weeksLastYearMango[26] = setAveragePriceMonth(lmjul16_22);
    weeksLastYearMango[27] = setAveragePriceMonth(lmjul23_31);
    weeksLastYearMango[28] = setAveragePriceMonth(lmago1_5);
    weeksLastYearMango[29] = setAveragePriceMonth(lmago6_12);
    weeksLastYearMango[30] = setAveragePriceMonth(lmago13_19);
    weeksLastYearMango[31] = setAveragePriceMonth(lmago20_26);
    weeksLastYearMango[32] = setAveragePriceMonth(lmago27_31);
    weeksLastYearMango[33] = setAveragePriceMonth(lmsep1_9);
    weeksLastYearMango[34] = setAveragePriceMonth(lmsep10_16);
    weeksLastYearMango[35] = setAveragePriceMonth(lmsep17_23);
    weeksLastYearMango[36] = setAveragePriceMonth(lmsep24_30);
    weeksLastYearMango[37] = setAveragePriceMonth(lmoct1_7);
    weeksLastYearMango[38] = setAveragePriceMonth(lmoct8_14);
    weeksLastYearMango[39] = setAveragePriceMonth(lmoct15_21);
    weeksLastYearMango[40] = setAveragePriceMonth(lmoct22_31);
    weeksLastYearMango[41] = setAveragePriceMonth(lmnov1_5);
    weeksLastYearMango[42] = setAveragePriceMonth(lmnov6_11);
    weeksLastYearMango[43] = setAveragePriceMonth(lmnov12_18);
    weeksLastYearMango[44] = setAveragePriceMonth(lmnov19_25);
    weeksLastYearMango[45] = setAveragePriceMonth(lmnov26_30);
    weeksLastYearMango[46] = setAveragePriceMonth(lmdic1_9);
    weeksLastYearMango[47] = setAveragePriceMonth(lmdic10_17);
    weeksLastYearMango[48] = setAveragePriceMonth(lmdic18_24);
    weeksLastYearMango[49] = setAveragePriceMonth(lmdic25_31);  

    obj.weeksZaraActual = weeksActualYearZara;
    obj.weeksZaraBefore = weeksLastYearZara;
    obj.weeksMangoActual = weeksActualYearMango;
    obj.weeksMangoBefore = weeksLastYearMango;
    
  
    return obj;
  
  };

  
  // array de descuentos promedio por marca y dos años
  exports.averagePriceWeekOrigin = arr => {
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
    
            if (year === currentYear) {
                if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento === null) {
                  ene1_7.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
                  ene1_7.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento === null) {
                  ene8_14.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,0,8).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
                  ene8_14.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento === null) {
                  ene15_21.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
                  ene15_21.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento === null) {
                  ene22_31.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
                  ene22_31.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento === null) {
                  feb1_11.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
                  feb1_11.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento === null) {
                  feb12_18.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
                  feb12_18.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento === null) {
                  feb19_25.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
                  feb19_25.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento === null) {
                  feb26_29.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
                  feb26_29.push(element.descuento);
                  return;
                }
      
                if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento === null) {
                  mar1_11.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
                  mar1_11.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento === null) {
                  mar12_18.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
                  mar12_18.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento === null) {
                  mar19_25.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
                  mar19_25.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento === null) {
                  mar26_31.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
                  mar26_31.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento === null) {
                  abr1_8.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,8,23).getTime()  && element.descuento !== null) {
                  abr1_8.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento === null) {
                  abr9_15.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,3,9).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
                  abr9_15.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento === null) {
                  abr16_22.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
                  abr16_22.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento === null) {
                  abr23_30.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
                  abr23_30.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento === null) {
                  may1_6.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
                  may1_6.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento === null) {
                  may7_13.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
                  may7_13.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento === null) {
                  may14_20.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
                  may14_20.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento === null) {
                  may21_31.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
                  may21_31.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento === null) {
                  jun1_10.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
                  jun1_10.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento === null) {
                  jun11_17.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
                  jun11_17.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento === null) {
                  jun18_24.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
                  jun18_24.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento === null) {
                  jun25_30.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
                  jun25_30.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento === null) {
                  jul1_8.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
                  ene1_7.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento === null) {
                  jul9_15.push(element.precio);
                  return;
                }else if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
                  jul9_15.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento === null) {
                  jul16_22.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
                  jul16_22.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento === null) {
                  jul23_31.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
                  jul23_31.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento === null) {
                  ago1_5.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
                  ago1_5.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento === null) {
                  ago6_12.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
                  ago6_12.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento === null) {
                  ago13_19.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
                  ago13_19.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento === null) {
                  ago20_26.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
                  ago20_26.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento === null) {
                  ago27_31.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
                  ago27_31.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento === null) {
                  sep1_9.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
                  sep1_9.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento === null) {
                  sep10_16.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
                  sep10_16.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento === null) {
                  sep17_23.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
                  sep17_23.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento === null) {
                  sep24_30.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
                  sep24_30.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento === null) {
                  oct1_7.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
                  oct1_7.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento === null) {
                  oct8_14.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
                  oct8_14.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento === null) {
                  oct15_21.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
                  oct15_21.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento === null) {
                  oct22_31.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
                  oct22_31.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento === null) {
                  nov1_5.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
                  nov1_5.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento === null) {
                  nov6_11.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
                  nov6_11.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento === null) {
                  nov12_18.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
                  nov12_18.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento === null) {
                  nov19_25.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
                  nov19_25.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento === null) {
                  nov26_30.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
                  nov26_30.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento === null) {
                  dic1_9.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
                  dic1_9.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento === null) {
                  dic10_17.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
                  dic10_17.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento === null) {
                  dic18_24.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
                  dic18_24.push(element.descuento);
                  return;
                }
                if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento === null) {
                  dic25_31.push(element.precio);
                  return;
                } else if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
                  dic25_31.push(element.descuento);
                  return;
                }
      
              }
    
            if (year === lastYear) {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento === null) {
                Zene1_7.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime()  && element.descuento !== null) {
                Zene1_7.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento === null) {
                Zene8_14.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,0,8).getTime() && fecha <= new Date(currentYear,0,14,23).getTime()  && element.descuento !== null) {
                Zene8_14.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento === null) {
                Zene15_21.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime()  && element.descuento !== null) {
                Zene15_21.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento === null) {
                Zene22_31.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime()  && element.descuento !== null) {
                Zene22_31.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento === null) {
                Zfeb1_11.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,1,1).getTime() && fecha <= new Date(currentYear,1,11,23).getTime()  && element.descuento !== null) {
                Zfeb1_11.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento === null) {
                Zfeb12_18.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime()  && element.descuento !== null) {
                Zfeb12_18.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento === null) {
                Zfeb19_25.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime()  && element.descuento !== null) {
                Zfeb19_25.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento === null) {
                Zfeb26_29.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime()  && element.descuento !== null) {
                Zfeb26_29.push(element.descuento);
                return;
            }
    
            if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento === null) {
                Zmar1_11.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,2,1).getTime() && fecha <= new Date(currentYear,2,11,23).getTime()  && element.descuento !== null) {
                Zmar1_11.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento === null) {
                Zmar12_18.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime()  && element.descuento !== null) {
                Zmar12_18.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento === null) {
                Zmar19_25.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime()  && element.descuento !== null) {
                Zmar19_25.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento === null) {
                Zmar26_31.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime()  && element.descuento !== null) {
                Zmar26_31.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime()  && element.descuento === null) {
                Zabr1_8.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,8,23).getTime()  && element.descuento !== null) {
                Zabr1_8.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento === null) {
                Zabr9_15.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,3,9).getTime() && fecha <= new Date(currentYear,3,15,23).getTime()  && element.descuento !== null) {
                Zabr9_15.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento === null) {
                Zabr16_22.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime()  && element.descuento !== null) {
                Zabr16_22.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento === null) {
                Zabr23_30.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime()  && element.descuento !== null) {
                Zabr23_30.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento === null) {
                Zmay1_6.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,4,1).getTime() && fecha <= new Date(currentYear,4,6,23).getTime()  && element.descuento !== null) {
                Zmay1_6.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento === null) {
                Zmay7_13.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,4,7).getTime() && fecha <= new Date(currentYear,4,13,23).getTime()  && element.descuento !== null) {
                Zmay7_13.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento === null) {
                Zmay14_20.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime()  && element.descuento !== null) {
                Zmay14_20.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento === null) {
                Zmay21_31.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime()  && element.descuento !== null) {
                Zmay21_31.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento === null) {
                Zjun1_10.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime()  && element.descuento !== null) {
                Zjun1_10.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento === null) {
                Zjun11_17.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime()  && element.descuento !== null) {
                Zjun11_17.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento === null) {
                Zjun18_24.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime()  && element.descuento !== null) {
                Zjun18_24.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento === null) {
                Zjun25_30.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime()  && element.descuento !== null) {
                Zjun25_30.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento === null) {
                Zjul1_8.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime()  && element.descuento !== null) {
                Zene1_7.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento === null) {
                Zjul9_15.push(element.precio);
                return;
            }else if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime()  && element.descuento !== null) {
                Zjul9_15.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento === null) {
                Zjul16_22.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime()  && element.descuento !== null) {
                Zjul16_22.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento === null) {
                Zjul23_31.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime()  && element.descuento !== null) {
                Zjul23_31.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento === null) {
                Zago1_5.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime()  && element.descuento !== null) {
                Zago1_5.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento === null) {
                Zago6_12.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime()  && element.descuento !== null) {
                Zago6_12.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento === null) {
                Zago13_19.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime()  && element.descuento !== null) {
                Zago13_19.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento === null) {
                Zago20_26.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime()  && element.descuento !== null) {
                Zago20_26.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento === null) {
                Zago27_31.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime()  && element.descuento !== null) {
                Zago27_31.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento === null) {
                Zsep1_9.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime()  && element.descuento !== null) {
                Zsep1_9.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento === null) {
                Zsep10_16.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime()  && element.descuento !== null) {
                Zsep10_16.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento === null) {
                Zsep17_23.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime()  && element.descuento !== null) {
                Zsep17_23.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento === null) {
                Zsep24_30.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime()  && element.descuento !== null) {
                Zsep24_30.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento === null) {
                Zoct1_7.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime()  && element.descuento !== null) {
                Zoct1_7.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento === null) {
                Zoct8_14.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime()  && element.descuento !== null) {
                Zoct8_14.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento === null) {
                Zoct15_21.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime()  && element.descuento !== null) {
                Zoct15_21.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento === null) {
                Zoct22_31.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime()  && element.descuento !== null) {
                Zoct22_31.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento === null) {
                Znov1_5.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime()  && element.descuento !== null) {
                Znov1_5.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento === null) {
                Znov6_11.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime()  && element.descuento !== null) {
                Znov6_11.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento === null) {
                Znov12_18.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime()  && element.descuento !== null) {
                Znov12_18.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento === null) {
                Znov19_25.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime()  && element.descuento !== null) {
                Znov19_25.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento === null) {
                Znov26_30.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime()  && element.descuento !== null) {
                Znov26_30.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento === null) {
                Zdic1_9.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime()  && element.descuento !== null) {
                Zdic1_9.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento === null) {
                Zdic10_17.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime()  && element.descuento !== null) {
                Zdic10_17.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento === null) {
                Zdic18_24.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime()  && element.descuento !== null) {
                Zdic18_24.push(element.descuento);
                return;
            }
            if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento === null) {
                Zdic25_31.push(element.precio);
                return;
            } else if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime()  && element.descuento !== null) {
                Zdic25_31.push(element.descuento);
                return;
            }
    
            }

        }); // fin del ciclo que guarda los precios de cada mes
      } catch (error) {
        console.log(error);
      }
    
    weeksActualYear[0] = setAveragePriceMonth(ene1_7);
    weeksActualYear[1] = setAveragePriceMonth(ene8_14);
    weeksActualYear[2] = setAveragePriceMonth(ene15_21);
    weeksActualYear[3] = setAveragePriceMonth(ene22_31);
    weeksActualYear[4] = setAveragePriceMonth(feb1_11);
    weeksActualYear[5] = setAveragePriceMonth(feb12_18);
    weeksActualYear[6] = setAveragePriceMonth(feb19_25);
    weeksActualYear[7] = setAveragePriceMonth(feb26_29);
    weeksActualYear[8] = setAveragePriceMonth(mar1_11);
    weeksActualYear[9] = setAveragePriceMonth(mar12_18);
    weeksActualYear[10] = setAveragePriceMonth(mar19_25);
    weeksActualYear[11] = setAveragePriceMonth(mar26_31);
    weeksActualYear[12] = setAveragePriceMonth(abr1_8);
    weeksActualYear[13] = setAveragePriceMonth(abr9_15);
    weeksActualYear[14] = setAveragePriceMonth(abr16_22);
    weeksActualYear[15] = setAveragePriceMonth(abr23_30);
    weeksActualYear[16] = setAveragePriceMonth(may1_6);
    weeksActualYear[17] = setAveragePriceMonth(may7_13);
    weeksActualYear[18] = setAveragePriceMonth(may14_20);
    weeksActualYear[19] = setAveragePriceMonth(may21_31);
    weeksActualYear[20] = setAveragePriceMonth(jun1_10);
    weeksActualYear[21] = setAveragePriceMonth(jun11_17);
    weeksActualYear[22] = setAveragePriceMonth(jun18_24);
    weeksActualYear[23] = setAveragePriceMonth(jun25_30);
    weeksActualYear[24] = setAveragePriceMonth(jul1_8);
    weeksActualYear[25] = setAveragePriceMonth(jul9_15);
    weeksActualYear[26] = setAveragePriceMonth(jul16_22);
    weeksActualYear[27] = setAveragePriceMonth(jul23_31);
    weeksActualYear[28] = setAveragePriceMonth(ago1_5);
    weeksActualYear[29] = setAveragePriceMonth(ago6_12);
    weeksActualYear[30] = setAveragePriceMonth(ago13_19);
    weeksActualYear[31] = setAveragePriceMonth(ago20_26);
    weeksActualYear[32] = setAveragePriceMonth(ago27_31);
    weeksActualYear[33] = setAveragePriceMonth(sep1_9);
    weeksActualYear[34] = setAveragePriceMonth(sep10_16);
    weeksActualYear[35] = setAveragePriceMonth(sep17_23);
    weeksActualYear[36] = setAveragePriceMonth(sep24_30);
    weeksActualYear[37] = setAveragePriceMonth(oct1_7);
    weeksActualYear[38] = setAveragePriceMonth(oct8_14);
    weeksActualYear[39] = setAveragePriceMonth(oct15_21);
    weeksActualYear[40] = setAveragePriceMonth(oct22_31);
    weeksActualYear[41] = setAveragePriceMonth(nov1_5);
    weeksActualYear[42] = setAveragePriceMonth(nov6_11);
    weeksActualYear[43] = setAveragePriceMonth(nov12_18);
    weeksActualYear[44] = setAveragePriceMonth(nov19_25);
    weeksActualYear[45] = setAveragePriceMonth(nov26_30);
    weeksActualYear[46] = setAveragePriceMonth(dic1_9);
    weeksActualYear[47] = setAveragePriceMonth(dic10_17);
    weeksActualYear[48] = setAveragePriceMonth(dic18_24);
    weeksActualYear[49] = setAveragePriceMonth(dic25_31);
  
    // // descuento año anterior 
    weeksLastYear[0] = setAveragePriceMonth(Zene1_7);
    weeksLastYear[1] = setAveragePriceMonth(Zene8_14);
    weeksLastYear[2] = setAveragePriceMonth(Zene15_21);
    weeksLastYear[3] = setAveragePriceMonth(Zene22_31);
    weeksLastYear[4] = setAveragePriceMonth(Zfeb1_11);
    weeksLastYear[5] = setAveragePriceMonth(Zfeb12_18);
    weeksLastYear[6] = setAveragePriceMonth(Zfeb19_25);
    weeksLastYear[7] = setAveragePriceMonth(Zfeb26_29);
    weeksLastYear[8] = setAveragePriceMonth(Zmar1_11);
    weeksLastYear[9] = setAveragePriceMonth(Zmar12_18);
    weeksLastYear[10] = setAveragePriceMonth(Zmar19_25);
    weeksLastYear[11] = setAveragePriceMonth(Zmar26_31);
    weeksLastYear[12] = setAveragePriceMonth(Zabr1_8);
    weeksLastYear[13] = setAveragePriceMonth(Zabr9_15);
    weeksLastYear[14] = setAveragePriceMonth(Zabr16_22);
    weeksLastYear[15] = setAveragePriceMonth(Zabr23_30);
    weeksLastYear[16] = setAveragePriceMonth(Zmay1_6);
    weeksLastYear[17] = setAveragePriceMonth(Zmay7_13);
    weeksLastYear[18] = setAveragePriceMonth(Zmay14_20);
    weeksLastYear[19] = setAveragePriceMonth(Zmay21_31);
    weeksLastYear[20] = setAveragePriceMonth(Zjun1_10);
    weeksLastYear[21] = setAveragePriceMonth(Zjun11_17);
    weeksLastYear[22] = setAveragePriceMonth(Zjun18_24);
    weeksLastYear[23] = setAveragePriceMonth(Zjun25_30);
    weeksLastYear[24] = setAveragePriceMonth(Zjul1_8);
    weeksLastYear[25] = setAveragePriceMonth(Zjul9_15);
    weeksLastYear[26] = setAveragePriceMonth(Zjul16_22);
    weeksLastYear[27] = setAveragePriceMonth(Zjul23_31);
    weeksLastYear[28] = setAveragePriceMonth(Zago1_5);
    weeksLastYear[29] = setAveragePriceMonth(Zago6_12);
    weeksLastYear[30] = setAveragePriceMonth(Zago13_19);
    weeksLastYear[31] = setAveragePriceMonth(Zago20_26);
    weeksLastYear[32] = setAveragePriceMonth(Zago27_31);
    weeksLastYear[33] = setAveragePriceMonth(Zsep1_9);
    weeksLastYear[34] = setAveragePriceMonth(Zsep10_16);
    weeksLastYear[35] = setAveragePriceMonth(Zsep17_23);
    weeksLastYear[36] = setAveragePriceMonth(Zsep24_30);
    weeksLastYear[37] = setAveragePriceMonth(Zoct1_7);
    weeksLastYear[38] = setAveragePriceMonth(Zoct8_14);
    weeksLastYear[39] = setAveragePriceMonth(Zoct15_21);
    weeksLastYear[40] = setAveragePriceMonth(Zoct22_31);
    weeksLastYear[41] = setAveragePriceMonth(Znov1_5);
    weeksLastYear[42] = setAveragePriceMonth(Znov6_11);
    weeksLastYear[43] = setAveragePriceMonth(Znov12_18);
    weeksLastYear[44] = setAveragePriceMonth(Znov19_25);
    weeksLastYear[45] = setAveragePriceMonth(Znov26_30);
    weeksLastYear[46] = setAveragePriceMonth(Zdic1_9);
    weeksLastYear[47] = setAveragePriceMonth(Zdic10_17);
    weeksLastYear[48] = setAveragePriceMonth(Zdic18_24);
    weeksLastYear[49] = setAveragePriceMonth(Zdic25_31);
    
    obj.weeksActualYear = weeksActualYear;
    obj.weeksLastYear = weeksLastYear;


      return obj;
    };
    
    // metodo para sacar el promedio
let setAveragePriceMonth = (month) => {
    let value = 0;
    if (month.length === 0) {
      return value;
    }
    month.forEach((element) => {
      value += element;
    });
    return (value = parseFloat((value / month.length).toFixed(2)));
  };