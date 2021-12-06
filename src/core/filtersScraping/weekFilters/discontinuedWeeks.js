// array descuentos promedio ambas marcas por dos años 

exports.averageDiscontinuedWeekGeneral = (arr) => {
    let obj = {}; // objeto que contiene los arrays con los valores por semana
    // arreglos para descuentos promedio zara año actual por semana
    let ene1_7 = 0;
    let ene8_14 = 0;
    let ene15_21 = 0;
    let ene22_31 = 0;
    let feb1_11 = 0;
    let feb12_18 = 0;
    let feb19_25 = 0;
    let feb26_29 = 0;
    let mar1_11 = 0;
    let mar12_18 = 0;
    let mar19_25 = 0;
    let mar26_31 = 0;
    let abr1_8 = 0;
    let abr9_15 = 0;
    let abr16_22 = 0;
    let abr23_30 = 0;
    let may1_6 = 0;
    let may7_13 = 0;
    let may14_20 = 0;
    let may21_31 = 0;
    let jun1_10 = 0;
    let jun11_17 = 0;
    let jun18_24 = 0;
    let jun25_30 = 0;
    let jul1_8 = 0;
    let jul9_15 = 0;
    let jul16_22 = 0;
    let jul23_31 = 0;
    let ago1_5 = 0;
    let ago6_12 = 0;
    let ago13_19 = 0;
    let ago20_26 = 0;
    let ago27_31 = 0;
    let sep1_9 = 0;
    let sep10_16 = 0;
    let sep17_23 = 0;
    let sep24_30 = 0;
    let oct1_7 = 0;
    let oct8_14 = 0;
    let oct15_21 = 0;
    let oct22_31 = 0;
    let nov1_5 = 0;
    let nov6_11 = 0;
    let nov12_18 = 0;
    let nov19_25 = 0;
    let nov26_30 = 0;
    let dic1_9 = 0;
    let dic10_17 = 0;
    let dic18_24 = 0;
    let dic25_31 = 0;
    
  
    let weeksActualYearZara = [];
    let weeksLastYearZara = [];
  
    // arreglos para descuentos promedio zara por semana año anterior
    let Zene1_7 = 0;
    let Zene8_14 = 0;
    let Zene15_21 = 0;
    let Zene22_31 = 0;
    let Zfeb1_11 = 0;
    let Zfeb12_18 = 0;
    let Zfeb19_25 = 0;
    let Zfeb26_29 = 0;
    let Zmar1_11 = 0;
    let Zmar12_18 = 0;
    let Zmar19_25 = 0;
    let Zmar26_31 = 0;
    let Zabr1_8 = 0;
    let Zabr9_15 = 0;
    let Zabr16_22 = 0;
    let Zabr23_30 = 0;
    let Zmay1_6 = 0;
    let Zmay7_13 = 0;
    let Zmay14_20 = 0;
    let Zmay21_31 = 0;
    let Zjun1_10 = 0;
    let Zjun11_17 = 0;
    let Zjun18_24 = 0;
    let Zjun25_30 = 0;
    let Zjul1_8 = 0;
    let Zjul9_15 = 0;
    let Zjul16_22 = 0;
    let Zjul23_31 = 0;
    let Zago1_5 = 0;
    let Zago6_12 = 0;
    let Zago13_19 = 0;
    let Zago20_26 = 0;
    let Zago27_31 = 0;
    let Zsep1_9 = 0;
    let Zsep10_16 = 0;
    let Zsep17_23 = 0;
    let Zsep24_30 = 0;
    let Zoct1_7 = 0;
    let Zoct8_14 = 0;
    let Zoct15_21 = 0;
    let Zoct22_31 = 0;
    let Znov1_5 = 0;
    let Znov6_11 = 0;
    let Znov12_18 = 0;
    let Znov19_25 = 0;
    let Znov26_30 = 0;
    let Zdic1_9 = 0;
    let Zdic10_17 = 0;
    let Zdic18_24 = 0;
    let Zdic25_31 = 0;

    // // datos de mango 
  
    let mene1_7 = 0;
    let mene8_14 = 0;
    let mene15_21 = 0;
    let mene22_31 = 0;
    let mfeb1_11 = 0;
    let mfeb12_18 = 0;
    let mfeb19_25 = 0;
    let mfeb26_29 = 0;
    let mmar1_11 = 0;
    let mmar12_18 = 0;
    let mmar19_25 = 0;
    let mmar26_31 = 0;
    let mabr1_8 = 0;
    let mabr9_15 = 0;
    let mabr16_22 = 0;
    let mabr23_30 = 0;
    let mmay1_6 = 0;
    let mmay7_13 = 0;
    let mmay14_20 = 0;
    let mmay21_31 = 0;
    let mjun1_10 = 0;
    let mjun11_17 = 0;
    let mjun18_24 = 0;
    let mjun25_30 = 0;
    let mjul1_8 = 0;
    let mjul9_15 = 0;
    let mjul16_22 = 0;
    let mjul23_31 = 0;
    let mago1_5 = 0;
    let mago6_12 = 0;
    let mago13_19 = 0;
    let mago20_26 = 0;
    let mago27_31 = 0;
    let msep1_9 = 0;
    let msep10_16 = 0;
    let msep17_23 = 0;
    let msep24_30 = 0;
    let moct1_7 = 0;
    let moct8_14 = 0;
    let moct15_21 = 0;
    let moct22_31 = 0;
    let mnov1_5 = 0;
    let mnov6_11 = 0;
    let mnov12_18 = 0;
    let mnov19_25 = 0;
    let mnov26_30 = 0;
    let mdic1_9 = 0;
    let mdic10_17 = 0;
    let mdic18_24 = 0;
    let mdic25_31 = 0;
    
  
    let weeksActualYearMango = [];
    let weeksLastYearMango = [];
  
    // arreglos para descuentos promedio zara por semana año anterior
    let lmene1_7 = 0;
    let lmene8_14 = 0;
    let lmene15_21 = 0;
    let lmene22_31 = 0;
    let lmfeb1_11 = 0;
    let lmfeb12_18 = 0;
    let lmfeb19_25 = 0;
    let lmfeb26_29 = 0;
    let lmmar1_11 = 0;
    let lmmar12_18 = 0;
    let lmmar19_25 = 0;
    let lmmar26_31 = 0;
    let lmabr1_8 = 0;
    let lmabr9_15 = 0;
    let lmabr16_22 = 0;
    let lmabr23_30 = 0;
    let lmmay1_6 = 0;
    let lmmay7_13 = 0;
    let lmmay14_20 = 0;
    let lmmay21_31 = 0;
    let lmjun1_10 = 0;
    let lmjun11_17 = 0;
    let lmjun18_24 = 0;
    let lmjun25_30 = 0;
    let lmjul1_8 = 0;
    let lmjul9_15 = 0;
    let lmjul16_22 = 0;
    let lmjul23_31 = 0;
    let lmago1_5 = 0;
    let lmago6_12 = 0;
    let lmago13_19 = 0;
    let lmago20_26 = 0;
    let lmago27_31 = 0;
    let lmsep1_9 = 0;
    let lmsep10_16 = 0;
    let lmsep17_23 = 0;
    let lmsep24_30 = 0;
    let lmoct1_7 = 0;
    let lmoct8_14 = 0;
    let lmoct15_21 = 0;
    let lmoct22_31 = 0;
    let lmnov1_5 = 0;
    let lmnov6_11 = 0;
    let lmnov12_18 = 0;
    let lmnov19_25 = 0;
    let lmnov26_30 = 0;
    let lmdic1_9 = 0;
    let lmdic10_17 = 0;
    let lmdic18_24 = 0;
    let lmdic25_31 = 0;
    
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
          if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime() && element.estado === "descontinuado") {
            ene1_7++;
            return;
          } 
          if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime() && element.estado === "descontinuado") {
            ene8_14++;
            return;
          }
          if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime() && element.estado === "descontinuado") {
            ene15_21++;
            return;
          }
          if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime() && element.estado === "descontinuado") {
            ene22_31++;
            return;
          }
          if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime() && element.estado === "descontinuado") {
            feb1_11++;
            return;
          }
          if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            feb12_18++;
            return;
          }
          if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            feb19_25++;
            return;
          }
          if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            feb26_29++;
            return;
          }
          if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            mar1_11++;
            return;
          }
          if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            mar12_18++;
            return;
          }
          if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            mar19_25++;
            return;
          }
          if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            mar26_31++;
            return;
          }
          if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            abr1_8++;
            return;
          }
          if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            abr9_15++;
            return;
          }
          if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            abr16_22++;
            return;
          }
          if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            abr23_30++;
            return;
          }
          if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            may1_6++;
            return;
          }
          if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            may7_13++;
            return;
          }
          if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            may14_20++;
            return;
          }
          if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            may21_31++;
            return;
          }
          if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            jun1_10++;
            return;
          }
          if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            jun11_17++;
            return;
          }
          if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            jun18_24++;
            return;
          }
          if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            jun25_30++;
            return;
          }
          if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            jul1_8++;
            return;
          }
          if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            jul9_15++;
            return;
          }
          if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            jul16_22++;
            return;
          }
          if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            jul23_31++;
            return;
          }
          if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            ago1_5++;
            return;
          }
          if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            ago6_12++;
            return;
          }
          if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            ago13_19++;
            return;
          }
          if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            ago20_26++;
            return;
          }
          if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            ago27_31++;
            return;
          }
          if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            sep1_9++;
            return;
          }
          if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            sep10_16++;
            return;
          }
          if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            sep17_23++;
            return;
          }
          if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            sep24_30++;
            return;
          }
          if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            oct1_7++;
            return;
          }
          if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            oct8_14++;
            return;
          }
          if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            oct15_21++;
            return;
          }
          if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            oct22_31++;
            return;
          }
          if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            nov1_5++;
            return;
          }
          if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            nov6_11++;
            return;
          }
          if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            nov12_18++;
            return;
          }
          if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            nov19_25++;
            return;
          }
          if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            nov26_30++;
            return;
          }
          if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            dic1_9++;
            return;
          }
          if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            dic10_17++;
            return;
          }
          if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            dic18_24++;
            return;
          }
          if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime() && element.estado === "descontinuado") {
            
            
            
  
            dic25_31++;
            return;
          }

        }
        
  
        if (year === lastYear && element.origin === 'Zara') {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zene1_7++;
                return;
              } 
              if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zene8_14++;
                return;
              }
              if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zene15_21++;
                return;
              }
              if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zene22_31++;
                return;
              }
              if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zfeb1_11++;
                return;
              }
              if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zfeb12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zfeb19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zfeb26_29++;
                return;
              }
              if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmar1_11++;
                return;
              }
              if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmar12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmar19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmar26_31++;
                return;
              }
              if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zabr1_8++;
                return;
              }
              if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zabr9_15++;
                return;
              }
              if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zabr16_22++;
                return;
              }
              if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zabr23_30++;
                return;
              }
              if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmay1_6++;
                return;
              }
              if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmay7_13++;
                return;
              }
              if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmay14_20++;
                return;
              }
              if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmay21_31++;
                return;
              }
              if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjun1_10++;
                return;
              }
              if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjun11_17++;
                return;
              }
              if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjun18_24++;
                return;
              }
              if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjun25_30++;
                return;
              }
              if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjul1_8++;
                return;
              }
              if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjul9_15++;
                return;
              }
              if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjul16_22++;
                return;
              }
              if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjul23_31++;
                return;
              }
              if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zago1_5++;
                return;
              }
              if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zago6_12++;
                return;
              }
              if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zago13_19++;
                return;
              }
              if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zago20_26++;
                return;
              }
              if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zago27_31++;
                return;
              }
              if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zsep1_9++;
                return;
              }
              if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zsep10_16++;
                return;
              }
              if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zsep17_23++;
                return;
              }
              if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zsep24_30++;
                return;
              }
              if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zoct1_7++;
                return;
              }
              if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zoct8_14++;
                return;
              }
              if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zoct15_21++;
                return;
              }
              if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zoct22_31++;
                return;
              }
              if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Znov1_5++;
                return;
              }
              if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Znov6_11++;
                return;
              }
              if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Znov12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Znov19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Znov26_30++;
                return;
              }
              if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zdic1_9++;
                return;
              }
              if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zdic10_17++;
                return;
              }
              if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zdic18_24++;
                return;
              }
              if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zdic25_31++;
                return;
              }
        }
        // termina zara semanas
        // empieza mango semanas

        if (year === currentYear && element.origin == 'Mango') {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mene1_7++;
                return;
              } 
              if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mene8_14++;
                return;
              }
              if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mene15_21++;
                return;
              }
              if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mene22_31++;
                return;
              }
              if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mfeb1_11++;
                return;
              }
              if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mfeb12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mfeb19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mfeb26_29++;
                return;
              }
              if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mmar1_11++;
                return;
              }
              if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mmar12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mmar19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mmar26_31++;
                return;
              }
              if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mabr1_8++;
                return;
              }
              if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mabr9_15++;
                return;
              }
              if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mabr16_22++;
                return;
              }
              if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mabr23_30++;
                return;
              }
              if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mmay1_6++;
                return;
              }
              if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mmay7_13++;
                return;
              }
              if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mmay14_20++;
                return;
              }
              if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mmay21_31++;
                return;
              }
              if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mjun1_10++;
                return;
              }
              if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mjun11_17++;
                return;
              }
              if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mjun18_24++;
                return;
              }
              if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mjun25_30++;
                return;
              }
              if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mjul1_8++;
                return;
              }
              if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mjul9_15++;
                return;
              }
              if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mjul16_22++;
                return;
              }
              if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mjul23_31++;
                return;
              }
              if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mago1_5++;
                return;
              }
              if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mago6_12++;
                return;
              }
              if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mago13_19++;
                return;
              }
              if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mago20_26++;
                return;
              }
              if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mago27_31++;
                return;
              }
              if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                msep1_9++;
                return;
              }
              if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                msep10_16++;
                return;
              }
              if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                msep17_23++;
                return;
              }
              if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                msep24_30++;
                return;
              }
              if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                moct1_7++;
                return;
              }
              if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                moct8_14++;
                return;
              }
              if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                moct15_21++;
                return;
              }
              if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                moct22_31++;
                return;
              }
              if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mnov1_5++;
                return;
              }
              if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mnov6_11++;
                return;
              }
              if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mnov12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mnov19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mnov26_30++;
                return;
              }
              if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mdic1_9++;
                return;
              }
              if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mdic10_17++;
                return;
              }
              if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mdic18_24++;
                return;
              }
              if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mdic25_31++;
                return;
              }
          }

          // mango semanas año anterior
    
          if (year === lastYear && element.origin === 'Mango') {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmene1_7++;
                return;
              } 
              if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmene8_14++;
                return;
              }
              if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmene15_21++;
                return;
              }
              if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmene22_31++;
                return;
              }
              if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmfeb1_11++;
                return;
              }
              if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmfeb12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmfeb19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmfeb26_29++;
                return;
              }
              if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmmar1_11++;
                return;
              }
              if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmmar12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmmar19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmmar26_31++;
                return;
              }
              if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmabr1_8++;
                return;
              }
              if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                lmabr9_15++;
                return;
              }
              if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime() && element.estado === "descontinuado") {
                lmabr16_22++;
                return;
              }
              if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime() && element.estado === "descontinuado") {
                lmabr23_30++;
                return;
              }
              if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime() && element.estado === "descontinuado") {
                lmmay1_6++;
                return;
              }
              if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime() && element.estado === "descontinuado") {
                lmmay7_13++;
                return;
              }
              if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime() && element.estado === "descontinuado") {
                lmmay14_20++;
                return;
              }
              if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime() && element.estado === "descontinuado") {
                lmmay21_31++;
                return;
              }
              if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime() && element.estado === "descontinuado") {
                lmjun1_10++;
                return;
              }
              if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime() && element.estado === "descontinuado") {
                lmjun11_17++;
                return;
              }
              if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime() && element.estado === "descontinuado") {
                lmjun18_24++;
                return;
              }
              if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime() && element.estado === "descontinuado") {
                lmjun25_30++;
                return;
              }
              if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime() && element.estado === "descontinuado") {
                lmjul1_8++;
                return;
              }
              if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime() && element.estado === "descontinuado") {
                lmjul9_15++;
                return;
              }
              if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime() && element.estado === "descontinuado") {
                lmjul16_22++;
                return;
              }
              if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime() && element.estado === "descontinuado") {
                lmjul23_31++;
                return;
              }
              if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime() && element.estado === "descontinuado") {
                lmago1_5++;
                return;
              }
              if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime() && element.estado === "descontinuado") {
                lmago6_12++;
                return;
              }
              if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime() && element.estado === "descontinuado") {
                lmago13_19++;
                return;
              }
              if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime() && element.estado === "descontinuado") {
                lmago20_26++;
                return;
              }
              if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime() && element.estado === "descontinuado") {
                lmago27_31++;
                return;
              }
              if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime() && element.estado === "descontinuado") {
                lmsep1_9++;
                return;
              }
              if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime() && element.estado === "descontinuado") {
                lmsep10_16++;
                return;
              }
              if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime() && element.estado === "descontinuado") {
                lmsep17_23++;
                return;
              }
              if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime() && element.estado === "descontinuado") {
                lmsep24_30++;
                return;
              }
              if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime() && element.estado === "descontinuado") {
                lmoct1_7++;
                return;
              }
              if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime() && element.estado === "descontinuado") {
                lmoct8_14++;
                return;
              }
              if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime() && element.estado === "descontinuado") {
                lmoct15_21++;
                return;
              }
              if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime() && element.estado === "descontinuado") {
                lmoct22_31++;
                return;
              }
              if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime() && element.estado === "descontinuado") {
                lmnov1_5++;
                return;
              }
              if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime() && element.estado === "descontinuado") {
                lmnov6_11++;
                return;
              }
              if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime() && element.estado === "descontinuado") {
                lmnov12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime() && element.estado === "descontinuado") {
                lmnov19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime() && element.estado === "descontinuado") {
                lmnov26_30++;
                return;
              }
              if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime() && element.estado === "descontinuado") {
                lmdic1_9++;
                return;
              }
              if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime() && element.estado === "descontinuado") {
                lmdic10_17++;
                return;
              }
              if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime() && element.estado === "descontinuado") {
                lmdic18_24++;
                return;
              }
              if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime() && element.estado === "descontinuado") {
                lmdic25_31++;
                return;
              }
          }



      }); // fin del ciclo que guarda los precios de cada mes
    } catch (error) {
      console.log(error);
    }
  
    // // descuento año actual zara
    weeksActualYearZara[0] = ene1_7;
    weeksActualYearZara[1] = ene8_14;
    weeksActualYearZara[2] = ene15_21;
    weeksActualYearZara[3] = ene22_31;
    weeksActualYearZara[4] = feb1_11;
    weeksActualYearZara[5] = feb12_18;
    weeksActualYearZara[6] = feb19_25;
    weeksActualYearZara[7] = feb26_29;
    weeksActualYearZara[8] = mar1_11;
    weeksActualYearZara[9] = mar12_18;
    weeksActualYearZara[10] = mar19_25;
    weeksActualYearZara[11] = mar26_31;
    weeksActualYearZara[12] = abr1_8;
    weeksActualYearZara[13] = abr9_15;
    weeksActualYearZara[14] = abr16_22;
    weeksActualYearZara[15] = abr23_30;
    weeksActualYearZara[16] = may1_6;
    weeksActualYearZara[17] = may7_13;
    weeksActualYearZara[18] = may14_20;
    weeksActualYearZara[19] = may21_31;
    weeksActualYearZara[20] = jun1_10;
    weeksActualYearZara[21] = jun11_17;
    weeksActualYearZara[22] = jun18_24;
    weeksActualYearZara[23] = jun25_30;
    weeksActualYearZara[24] = jul1_8;
    weeksActualYearZara[25] = jul9_15;
    weeksActualYearZara[26] = jul16_22;
    weeksActualYearZara[27] = jul23_31;
    weeksActualYearZara[28] = ago1_5;
    weeksActualYearZara[29] = ago6_12;
    weeksActualYearZara[30] = ago13_19;
    weeksActualYearZara[31] = ago20_26;
    weeksActualYearZara[32] = ago27_31;
    weeksActualYearZara[33] = sep1_9;
    weeksActualYearZara[34] = sep10_16;
    weeksActualYearZara[35] = sep17_23;
    weeksActualYearZara[36] = sep24_30;
    weeksActualYearZara[37] = oct1_7;
    weeksActualYearZara[38] = oct8_14;
    weeksActualYearZara[39] = oct15_21;
    weeksActualYearZara[40] = oct22_31;
    weeksActualYearZara[41] = nov1_5;
    weeksActualYearZara[42] = nov6_11;
    weeksActualYearZara[43] = nov12_18;
    weeksActualYearZara[44] = nov19_25;
    weeksActualYearZara[45] = nov26_30;
    weeksActualYearZara[46] = dic1_9;
    weeksActualYearZara[47] = dic10_17;
    weeksActualYearZara[48] = dic18_24;
    weeksActualYearZara[49] = dic25_31;
  
    // // descuento año anterior zara
    weeksLastYearZara[0] = Zene1_7;
    weeksLastYearZara[1] = Zene8_14;
    weeksLastYearZara[2] = Zene15_21;
    weeksLastYearZara[3] = Zene22_31;
    weeksLastYearZara[4] = Zfeb1_11;
    weeksLastYearZara[5] = Zfeb12_18;
    weeksLastYearZara[6] = Zfeb19_25;
    weeksLastYearZara[7] = Zfeb26_29;
    weeksLastYearZara[8] = Zmar1_11;
    weeksLastYearZara[9] = Zmar12_18;
    weeksLastYearZara[10] = Zmar19_25;
    weeksLastYearZara[11] = Zmar26_31;
    weeksLastYearZara[12] = Zabr1_8;
    weeksLastYearZara[13] = Zabr9_15;
    weeksLastYearZara[14] = Zabr16_22;
    weeksLastYearZara[15] = Zabr23_30;
    weeksLastYearZara[16] = Zmay1_6;
    weeksLastYearZara[17] = Zmay7_13;
    weeksLastYearZara[18] = Zmay14_20;
    weeksLastYearZara[19] = Zmay21_31;
    weeksLastYearZara[20] = Zjun1_10;
    weeksLastYearZara[21] = Zjun11_17;
    weeksLastYearZara[22] = Zjun18_24;
    weeksLastYearZara[23] = Zjun25_30;
    weeksLastYearZara[24] = Zjul1_8;
    weeksLastYearZara[25] = Zjul9_15;
    weeksLastYearZara[26] = Zjul16_22;
    weeksLastYearZara[27] = Zjul23_31;
    weeksLastYearZara[28] = Zago1_5;
    weeksLastYearZara[29] = Zago6_12;
    weeksLastYearZara[30] = Zago13_19;
    weeksLastYearZara[31] = Zago20_26;
    weeksLastYearZara[32] = Zago27_31;
    weeksLastYearZara[33] = Zsep1_9;
    weeksLastYearZara[34] = Zsep10_16;
    weeksLastYearZara[35] = Zsep17_23;
    weeksLastYearZara[36] = Zsep24_30;
    weeksLastYearZara[37] = Zoct1_7;
    weeksLastYearZara[38] = Zoct8_14;
    weeksLastYearZara[39] = Zoct15_21;
    weeksLastYearZara[40] = Zoct22_31;
    weeksLastYearZara[41] = Znov1_5;
    weeksLastYearZara[42] = Znov6_11;
    weeksLastYearZara[43] = Znov12_18;
    weeksLastYearZara[44] = Znov19_25;
    weeksLastYearZara[45] = Znov26_30;
    weeksLastYearZara[46] = Zdic1_9;
    weeksLastYearZara[47] = Zdic10_17;
    weeksLastYearZara[48] = Zdic18_24;
    weeksLastYearZara[49] = Zdic25_31;

    //  descuento año actual mango
    weeksActualYearMango[0] = mene1_7;
    weeksActualYearMango[1] = mene8_14;
    weeksActualYearMango[2] = mene15_21;
    weeksActualYearMango[3] = mene22_31;
    weeksActualYearMango[4] = mfeb1_11;
    weeksActualYearMango[5] = mfeb12_18;
    weeksActualYearMango[6] = mfeb19_25;
    weeksActualYearMango[7] = mfeb26_29;
    weeksActualYearMango[8] = mmar1_11;
    weeksActualYearMango[9] = mmar12_18;
    weeksActualYearMango[10] = mmar19_25;
    weeksActualYearMango[11] = mmar26_31;
    weeksActualYearMango[12] = mabr1_8;
    weeksActualYearMango[13] = mabr9_15;
    weeksActualYearMango[14] = mabr16_22;
    weeksActualYearMango[15] = mabr23_30;
    weeksActualYearMango[16] = mmay1_6;
    weeksActualYearMango[17] = mmay7_13;
    weeksActualYearMango[18] = mmay14_20;
    weeksActualYearMango[19] = mmay21_31;
    weeksActualYearMango[20] = mjun1_10;
    weeksActualYearMango[21] = mjun11_17;
    weeksActualYearMango[22] = mjun18_24;
    weeksActualYearMango[23] = mjun25_30;
    weeksActualYearMango[24] = mjul1_8;
    weeksActualYearMango[25] = mjul9_15;
    weeksActualYearMango[26] = mjul16_22;
    weeksActualYearMango[27] = mjul23_31;
    weeksActualYearMango[28] = mago1_5;
    weeksActualYearMango[29] = mago6_12;
    weeksActualYearMango[30] = mago13_19;
    weeksActualYearMango[31] = mago20_26;
    weeksActualYearMango[32] = mago27_31;
    weeksActualYearMango[33] = msep1_9;
    weeksActualYearMango[34] = msep10_16;
    weeksActualYearMango[35] = msep17_23;
    weeksActualYearMango[36] = msep24_30;
    weeksActualYearMango[37] = moct1_7;
    weeksActualYearMango[38] = moct8_14;
    weeksActualYearMango[39] = moct15_21;
    weeksActualYearMango[40] = moct22_31;
    weeksActualYearMango[41] = mnov1_5;
    weeksActualYearMango[42] = mnov6_11;
    weeksActualYearMango[43] = mnov12_18;
    weeksActualYearMango[44] = mnov19_25;
    weeksActualYearMango[45] = mnov26_30;
    weeksActualYearMango[46] = mdic1_9;
    weeksActualYearMango[47] = mdic10_17;
    weeksActualYearMango[48] = mdic18_24;
    weeksActualYearMango[49] = mdic25_31;

    //  descuento semana año anterior mango
    weeksLastYearMango[0] = lmene1_7;
    weeksLastYearMango[1] = lmene8_14;
    weeksLastYearMango[2] = lmene15_21;
    weeksLastYearMango[3] = lmene22_31;
    weeksLastYearMango[4] = lmfeb1_11;
    weeksLastYearMango[5] = lmfeb12_18;
    weeksLastYearMango[6] = lmfeb19_25;
    weeksLastYearMango[7] = lmfeb26_29;
    weeksLastYearMango[8] = lmmar1_11;
    weeksLastYearMango[9] = lmmar12_18;
    weeksLastYearMango[10] = lmmar19_25;
    weeksLastYearMango[11] = lmmar26_31;
    weeksLastYearMango[12] = lmabr1_8;
    weeksLastYearMango[13] = lmabr9_15;
    weeksLastYearMango[14] = lmabr16_22;
    weeksLastYearMango[15] = lmabr23_30;
    weeksLastYearMango[16] = lmmay1_6;
    weeksLastYearMango[17] = lmmay7_13;
    weeksLastYearMango[18] = lmmay14_20;
    weeksLastYearMango[19] = lmmay21_31;
    weeksLastYearMango[20] = lmjun1_10;
    weeksLastYearMango[21] = lmjun11_17;
    weeksLastYearMango[22] = lmjun18_24;
    weeksLastYearMango[23] = lmjun25_30;
    weeksLastYearMango[24] = lmjul1_8;
    weeksLastYearMango[25] = lmjul9_15;
    weeksLastYearMango[26] = lmjul16_22;
    weeksLastYearMango[27] = lmjul23_31;
    weeksLastYearMango[28] = lmago1_5;
    weeksLastYearMango[29] = lmago6_12;
    weeksLastYearMango[30] = lmago13_19;
    weeksLastYearMango[31] = lmago20_26;
    weeksLastYearMango[32] = lmago27_31;
    weeksLastYearMango[33] = lmsep1_9;
    weeksLastYearMango[34] = lmsep10_16;
    weeksLastYearMango[35] = lmsep17_23;
    weeksLastYearMango[36] = lmsep24_30;
    weeksLastYearMango[37] = lmoct1_7;
    weeksLastYearMango[38] = lmoct8_14;
    weeksLastYearMango[39] = lmoct15_21;
    weeksLastYearMango[40] = lmoct22_31;
    weeksLastYearMango[41] = lmnov1_5;
    weeksLastYearMango[42] = lmnov6_11;
    weeksLastYearMango[43] = lmnov12_18;
    weeksLastYearMango[44] = lmnov19_25;
    weeksLastYearMango[45] = lmnov26_30;
    weeksLastYearMango[46] = lmdic1_9;
    weeksLastYearMango[47] = lmdic10_17;
    weeksLastYearMango[48] = lmdic18_24;
    weeksLastYearMango[49] = lmdic25_31;  

    obj.weeksZaraActual = weeksActualYearZara;
    obj.weeksZaraBefore = weeksLastYearZara;
    obj.weeksMangoActual = weeksActualYearMango;
    obj.weeksMangoBefore = weeksLastYearMango;
    
  
    return obj;
  
  };

  
  // array de descuentos promedio por marca y dos años
  exports.averageDiscontinuedWeekOrigin = arr => {
    let obj = {}; // objeto que contiene los arrays con los valores por semana
    // arreglos para descuentos promedio zara año actual por semana
    let ene1_7 = 0;
    let ene8_14 = 0;
    let ene15_21 = 0;
    let ene22_31 = 0;
    let feb1_11 = 0;
    let feb12_18 = 0;
    let feb19_25 = 0;
    let feb26_29 = 0;
    let mar1_11 = 0;
    let mar12_18 = 0;
    let mar19_25 = 0;
    let mar26_31 = 0;
    let abr1_8 = 0;
    let abr9_15 = 0;
    let abr16_22 = 0;
    let abr23_30 = 0;
    let may1_6 = 0;
    let may7_13 = 0;
    let may14_20 = 0;
    let may21_31 = 0;
    let jun1_10 = 0;
    let jun11_17 = 0;
    let jun18_24 = 0;
    let jun25_30 = 0;
    let jul1_8 = 0;
    let jul9_15 = 0;
    let jul16_22 = 0;
    let jul23_31 = 0;
    let ago1_5 = 0;
    let ago6_12 = 0;
    let ago13_19 = 0;
    let ago20_26 = 0;
    let ago27_31 = 0;
    let sep1_9 = 0;
    let sep10_16 = 0;
    let sep17_23 = 0;
    let sep24_30 = 0;
    let oct1_7 = 0;
    let oct8_14 = 0;
    let oct15_21 = 0;
    let oct22_31 = 0;
    let nov1_5 = 0;
    let nov6_11 = 0;
    let nov12_18 = 0;
    let nov19_25 = 0;
    let nov26_30 = 0;
    let dic1_9 = 0;
    let dic10_17 = 0;
    let dic18_24 = 0;
    let dic25_31 = 0;
    
  
    let weeksActualYear = [];
    let weeksLastYear = [];
  
    // arreglos para descuentos promedio zara por semana año anterior
    let Zene1_7 = 0;
    let Zene8_14 = 0;
    let Zene15_21 = 0;
    let Zene22_31 = 0;
    let Zfeb1_11 = 0;
    let Zfeb12_18 = 0;
    let Zfeb19_25 = 0;
    let Zfeb26_29 = 0;
    let Zmar1_11 = 0;
    let Zmar12_18 = 0;
    let Zmar19_25 = 0;
    let Zmar26_31 = 0;
    let Zabr1_8 = 0;
    let Zabr9_15 = 0;
    let Zabr16_22 = 0;
    let Zabr23_30 = 0;
    let Zmay1_6 = 0;
    let Zmay7_13 = 0;
    let Zmay14_20 = 0;
    let Zmay21_31 = 0;
    let Zjun1_10 = 0;
    let Zjun11_17 = 0;
    let Zjun18_24 = 0;
    let Zjun25_30 = 0;
    let Zjul1_8 = 0;
    let Zjul9_15 = 0;
    let Zjul16_22 = 0;
    let Zjul23_31 = 0;
    let Zago1_5 = 0;
    let Zago6_12 = 0;
    let Zago13_19 = 0;
    let Zago20_26 = 0;
    let Zago27_31 = 0;
    let Zsep1_9 = 0;
    let Zsep10_16 = 0;
    let Zsep17_23 = 0;
    let Zsep24_30 = 0;
    let Zoct1_7 = 0;
    let Zoct8_14 = 0;
    let Zoct15_21 = 0;
    let Zoct22_31 = 0;
    let Znov1_5 = 0;
    let Znov6_11 = 0;
    let Znov12_18 = 0;
    let Znov19_25 = 0;
    let Znov26_30 = 0;
    let Zdic1_9 = 0;
    let Zdic10_17 = 0;
    let Zdic18_24 = 0;
    let Zdic25_31 = 0;
    
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
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                ene1_7++;
                return;
              } 
              if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                ene8_14++;
                return;
              }
              if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                ene15_21++;
                return;
              }
              if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                ene22_31++;
                return;
              }
              if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                feb1_11++;
                return;
              }
              if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                feb12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                feb19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                feb26_29++;
                return;
              }
              if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mar1_11++;
                return;
              }
              if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mar12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mar19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                mar26_31++;
                return;
              }
              if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                abr1_8++;
                return;
              }
              if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                abr9_15++;
                return;
              }
              if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                abr16_22++;
                return;
              }
              if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                abr23_30++;
                return;
              }
              if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                may1_6++;
                return;
              }
              if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                may7_13++;
                return;
              }
              if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                may14_20++;
                return;
              }
              if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                may21_31++;
                return;
              }
              if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                jun1_10++;
                return;
              }
              if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                jun11_17++;
                return;
              }
              if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                jun18_24++;
                return;
              }
              if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                jun25_30++;
                return;
              }
              if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                jul1_8++;
                return;
              }
              if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                jul9_15++;
                return;
              }
              if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                jul16_22++;
                return;
              }
              if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                jul23_31++;
                return;
              }
              if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                ago1_5++;
                return;
              }
              if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                ago6_12++;
                return;
              }
              if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                ago13_19++;
                return;
              }
              if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                ago20_26++;
                return;
              }
              if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                ago27_31++;
                return;
              }
              if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                sep1_9++;
                return;
              }
              if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                sep10_16++;
                return;
              }
              if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                sep17_23++;
                return;
              }
              if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                sep24_30++;
                return;
              }
              if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                oct1_7++;
                return;
              }
              if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                oct8_14++;
                return;
              }
              if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                oct15_21++;
                return;
              }
              if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                oct22_31++;
                return;
              }
              if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                nov1_5++;
                return;
              }
              if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                nov6_11++;
                return;
              }
              if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                nov12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                nov19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                nov26_30++;
                return;
              }
              if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                dic1_9++;
                return;
              }
              if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                dic10_17++;
                return;
              }
              if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                dic18_24++;
                return;
              }
              if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                dic25_31++;
                return;
              }
          }
    
          if (year === lastYear) {
            if (fecha >= new Date(currentYear,0,1).getTime() && fecha <= new Date(currentYear,0,7,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zene1_7++;
                return;
              } 
              if (fecha >= new Date(currentYear,0,08).getTime() && fecha <= new Date(currentYear,0,14,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zene8_14++;
                return;
              }
              if (fecha >= new Date(currentYear,0,15).getTime() && fecha <= new Date(currentYear,0,21,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zene15_21++;
                return;
              }
              if (fecha >= new Date(currentYear,0,22).getTime() && fecha <= new Date(currentYear,0,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zene22_31++;
                return;
              }
              if (fecha >= new Date(currentYear,1,01).getTime() && fecha <= new Date(currentYear,1,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zfeb1_11++;
                return;
              }
              if (fecha >= new Date(currentYear,1,12).getTime() && fecha <= new Date(currentYear,1,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zfeb12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,1,19).getTime() && fecha <= new Date(currentYear,1,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zfeb19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,1,26).getTime() && fecha <= new Date(currentYear,1,29,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zfeb26_29++;
                return;
              }
              if (fecha >= new Date(currentYear,2,01).getTime() && fecha <= new Date(currentYear,2,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmar1_11++;
                return;
              }
              if (fecha >= new Date(currentYear,2,12).getTime() && fecha <= new Date(currentYear,2,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmar12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,2,19).getTime() && fecha <= new Date(currentYear,2,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmar19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,2,26).getTime() && fecha <= new Date(currentYear,2,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmar26_31++;
                return;
              }
              if (fecha >= new Date(currentYear,3,1).getTime() && fecha <= new Date(currentYear,3,08,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zabr1_8++;
                return;
              }
              if (fecha >= new Date(currentYear,3,09).getTime() && fecha <= new Date(currentYear,3,15,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zabr9_15++;
                return;
              }
              if (fecha >= new Date(currentYear,3,16).getTime() && fecha <= new Date(currentYear,3,22,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zabr16_22++;
                return;
              }
              if (fecha >= new Date(currentYear,3,23).getTime() && fecha <= new Date(currentYear,3,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zabr23_30++;
                return;
              }
              if (fecha >= new Date(currentYear,4,01).getTime() && fecha <= new Date(currentYear,4,6,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmay1_6++;
                return;
              }
              if (fecha >= new Date(currentYear,4,07).getTime() && fecha <= new Date(currentYear,4,13,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmay7_13++;
                return;
              }
              if (fecha >= new Date(currentYear,4,14).getTime() && fecha <= new Date(currentYear,4,20,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmay14_20++;
                return;
              }
              if (fecha >= new Date(currentYear,4,21).getTime() && fecha <= new Date(currentYear,4,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zmay21_31++;
                return;
              }
              if (fecha >= new Date(currentYear,5,1).getTime() && fecha <= new Date(currentYear,5,10,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjun1_10++;
                return;
              }
              if (fecha >= new Date(currentYear,5,11).getTime() && fecha <= new Date(currentYear,5,17,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjun11_17++;
                return;
              }
              if (fecha >= new Date(currentYear,5,18).getTime() && fecha <= new Date(currentYear,5,24,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjun18_24++;
                return;
              }
              if (fecha >= new Date(currentYear,5,25).getTime() && fecha <= new Date(currentYear,5,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjun25_30++;
                return;
              }
              if (fecha >= new Date(currentYear,6,1).getTime() && fecha <= new Date(currentYear,6,8,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjul1_8++;
                return;
              }
              if (fecha >= new Date(currentYear,6,9).getTime() && fecha <= new Date(currentYear,6,15,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjul9_15++;
                return;
              }
              if (fecha >= new Date(currentYear,6,16).getTime() && fecha <= new Date(currentYear,6,22,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjul16_22++;
                return;
              }
              if (fecha >= new Date(currentYear,6,23).getTime() && fecha <= new Date(currentYear,6,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zjul23_31++;
                return;
              }
              if (fecha >= new Date(currentYear,7,1).getTime() && fecha <= new Date(currentYear,7,5,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zago1_5++;
                return;
              }
              if (fecha >= new Date(currentYear,7,6).getTime() && fecha <= new Date(currentYear,7,12,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zago6_12++;
                return;
              }
              if (fecha >= new Date(currentYear,7,13).getTime() && fecha <= new Date(currentYear,7,19,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zago13_19++;
                return;
              }
              if (fecha >= new Date(currentYear,7,20).getTime() && fecha <= new Date(currentYear,7,26,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zago20_26++;
                return;
              }
              if (fecha >= new Date(currentYear,7,27).getTime() && fecha <= new Date(currentYear,7,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zago27_31++;
                return;
              }
              if (fecha >= new Date(currentYear,8,1).getTime() && fecha <= new Date(currentYear,8,9,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zsep1_9++;
                return;
              }
              if (fecha >= new Date(currentYear,8,10).getTime() && fecha <= new Date(currentYear,8,16,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zsep10_16++;
                return;
              }
              if (fecha >= new Date(currentYear,8,17).getTime() && fecha <= new Date(currentYear,8,23,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zsep17_23++;
                return;
              }
              if (fecha >= new Date(currentYear,8,24).getTime() && fecha <= new Date(currentYear,8,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zsep24_30++;
                return;
              }
              if (fecha >= new Date(currentYear,9,1).getTime() && fecha <= new Date(currentYear,9,7,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zoct1_7++;
                return;
              }
              if (fecha >= new Date(currentYear,9,8).getTime() && fecha <= new Date(currentYear,9,14,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zoct8_14++;
                return;
              }
              if (fecha >= new Date(currentYear,9,15).getTime() && fecha <= new Date(currentYear,9,21,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zoct15_21++;
                return;
              }
              if (fecha >= new Date(currentYear,9,22).getTime() && fecha <= new Date(currentYear,9,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zoct22_31++;
                return;
              }
              if (fecha >= new Date(currentYear,10,1).getTime() && fecha <= new Date(currentYear,10,5,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Znov1_5++;
                return;
              }
              if (fecha >= new Date(currentYear,10,6).getTime() && fecha <= new Date(currentYear,10,11,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Znov6_11++;
                return;
              }
              if (fecha >= new Date(currentYear,10,12).getTime() && fecha <= new Date(currentYear,10,18,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Znov12_18++;
                return;
              }
              if (fecha >= new Date(currentYear,10,19).getTime() && fecha <= new Date(currentYear,10,25,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Znov19_25++;
                return;
              }
              if (fecha >= new Date(currentYear,10,26).getTime() && fecha <= new Date(currentYear,10,30,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Znov26_30++;
                return;
              }
              if (fecha >= new Date(currentYear,11,1).getTime() && fecha <= new Date(currentYear,11,9,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zdic1_9++;
                return;
              }
              if (fecha >= new Date(currentYear,11,10).getTime() && fecha <= new Date(currentYear,11,17,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zdic10_17++;
                return;
              }
              if (fecha >= new Date(currentYear,11,18).getTime() && fecha <= new Date(currentYear,11,24,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zdic18_24++;
                return;
              }
              if (fecha >= new Date(currentYear,11,25).getTime() && fecha <= new Date(currentYear,11,31,23).getTime() && element.estado === "descontinuado") {
                
                
                
      
                Zdic25_31++;
                return;
              }
          }
        }); // fin del ciclo que guarda los precios de cada mes
      } catch (error) {
        console.log(error);
      }
    
    weeksActualYear[0] = ene1_7;
    weeksActualYear[1] = ene8_14;
    weeksActualYear[2] = ene15_21;
    weeksActualYear[3] = ene22_31;
    weeksActualYear[4] = feb1_11;
    weeksActualYear[5] = feb12_18;
    weeksActualYear[6] = feb19_25;
    weeksActualYear[7] = feb26_29;
    weeksActualYear[8] = mar1_11;
    weeksActualYear[9] = mar12_18;
    weeksActualYear[10] = mar19_25;
    weeksActualYear[11] = mar26_31;
    weeksActualYear[12] = abr1_8;
    weeksActualYear[13] = abr9_15;
    weeksActualYear[14] = abr16_22;
    weeksActualYear[15] = abr23_30;
    weeksActualYear[16] = may1_6;
    weeksActualYear[17] = may7_13;
    weeksActualYear[18] = may14_20;
    weeksActualYear[19] = may21_31;
    weeksActualYear[20] = jun1_10;
    weeksActualYear[21] = jun11_17;
    weeksActualYear[22] = jun18_24;
    weeksActualYear[23] = jun25_30;
    weeksActualYear[24] = jul1_8;
    weeksActualYear[25] = jul9_15;
    weeksActualYear[26] = jul16_22;
    weeksActualYear[27] = jul23_31;
    weeksActualYear[28] = ago1_5;
    weeksActualYear[29] = ago6_12;
    weeksActualYear[30] = ago13_19;
    weeksActualYear[31] = ago20_26;
    weeksActualYear[32] = ago27_31;
    weeksActualYear[33] = sep1_9;
    weeksActualYear[34] = sep10_16;
    weeksActualYear[35] = sep17_23;
    weeksActualYear[36] = sep24_30;
    weeksActualYear[37] = oct1_7;
    weeksActualYear[38] = oct8_14;
    weeksActualYear[39] = oct15_21;
    weeksActualYear[40] = oct22_31;
    weeksActualYear[41] = nov1_5;
    weeksActualYear[42] = nov6_11;
    weeksActualYear[43] = nov12_18;
    weeksActualYear[44] = nov19_25;
    weeksActualYear[45] = nov26_30;
    weeksActualYear[46] = dic1_9;
    weeksActualYear[47] = dic10_17;
    weeksActualYear[48] = dic18_24;
    weeksActualYear[49] = dic25_31;
  
    // // descuento año anterior 
    weeksLastYear[0] = Zene1_7;
    weeksLastYear[1] = Zene8_14;
    weeksLastYear[2] = Zene15_21;
    weeksLastYear[3] = Zene22_31;
    weeksLastYear[4] = Zfeb1_11;
    weeksLastYear[5] = Zfeb12_18;
    weeksLastYear[6] = Zfeb19_25;
    weeksLastYear[7] = Zfeb26_29;
    weeksLastYear[8] = Zmar1_11;
    weeksLastYear[9] = Zmar12_18;
    weeksLastYear[10] = Zmar19_25;
    weeksLastYear[11] = Zmar26_31;
    weeksLastYear[12] = Zabr1_8;
    weeksLastYear[13] = Zabr9_15;
    weeksLastYear[14] = Zabr16_22;
    weeksLastYear[15] = Zabr23_30;
    weeksLastYear[16] = Zmay1_6;
    weeksLastYear[17] = Zmay7_13;
    weeksLastYear[18] = Zmay14_20;
    weeksLastYear[19] = Zmay21_31;
    weeksLastYear[20] = Zjun1_10;
    weeksLastYear[21] = Zjun11_17;
    weeksLastYear[22] = Zjun18_24;
    weeksLastYear[23] = Zjun25_30;
    weeksLastYear[24] = Zjul1_8;
    weeksLastYear[25] = Zjul9_15;
    weeksLastYear[26] = Zjul16_22;
    weeksLastYear[27] = Zjul23_31;
    weeksLastYear[28] = Zago1_5;
    weeksLastYear[29] = Zago6_12;
    weeksLastYear[30] = Zago13_19;
    weeksLastYear[31] = Zago20_26;
    weeksLastYear[32] = Zago27_31;
    weeksLastYear[33] = Zsep1_9;
    weeksLastYear[34] = Zsep10_16;
    weeksLastYear[35] = Zsep17_23;
    weeksLastYear[36] = Zsep24_30;
    weeksLastYear[37] = Zoct1_7;
    weeksLastYear[38] = Zoct8_14;
    weeksLastYear[39] = Zoct15_21;
    weeksLastYear[40] = Zoct22_31;
    weeksLastYear[41] = Znov1_5;
    weeksLastYear[42] = Znov6_11;
    weeksLastYear[43] = Znov12_18;
    weeksLastYear[44] = Znov19_25;
    weeksLastYear[45] = Znov26_30;
    weeksLastYear[46] = Zdic1_9;
    weeksLastYear[47] = Zdic10_17;
    weeksLastYear[48] = Zdic18_24;
    weeksLastYear[49] = Zdic25_31;
    
    obj.weeksActualYear = weeksActualYear;
    obj.weeksLastYear = weeksLastYear;


      return obj;
    };
  