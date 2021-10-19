const zaraCtl = require('../core/zaraCtl');

module.exports = (router) => {

    // scraping completo de Zara
    router.get('/scraping_1', zaraCtl.getScrapingZara);

    // rutas para extraer zara mujer
    router.get('/womanCategory', zaraCtl.getWomanCategory);
    router.get('/womanDiscount', zaraCtl.getDescuentoMujer);
    router.get('/womanNew', zaraCtl.getNewWoman);

    // rutas para extraer zara hombre
    router.get('/manCategory', zaraCtl.getCategoriaHombre);
    router.get('/manDiscount', zaraCtl.getManDiscount);
    router.get('/newMan', zaraCtl.getNewMan);

    // rutas para extrar zara babys
    router.get('/babyBoyCategory', zaraCtl.getBabyBoyCategory);   
    router.get('/babyBoyDiscount', zaraCtl.getBabyBoyDiscount);   
    router.get('/babyBoyNew', zaraCtl.getBabyBoyNew);   
    router.get('/babyGirlCategory', zaraCtl.getBabyGirlCategory);   
    router.get('/babyGirlDiscount', zaraCtl.getBabyGirlDiscount);   
    router.get('/babyGirlNew', zaraCtl.getBabyGirlNew); 
    
    // rutas para extraer zara boys
    router.get('/boyCategory', zaraCtl.getBoyCategory); 
    router.get('/boyDiscount', zaraCtl.getBoyDiscount); 
    router.get('/boyNew', zaraCtl.getBoyNew); 
    
    // rutas para extraer zara girls
    router.get('/girlCategory', zaraCtl.getGirlCategory); 
    router.get('/girlDiscount', zaraCtl.getGirlDiscount); 
    router.get('/girlNew', zaraCtl.getGirlNew); 

    //rutas para extraer zara minikids
    router.get('/miniKidsNew', zaraCtl.getMiniKidsNew); 
    router.get('/miniKids', zaraCtl.getMiniKids); 


}
