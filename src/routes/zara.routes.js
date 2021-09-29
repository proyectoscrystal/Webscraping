const zaraCtl = require('../core/zaraCtl')

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
}
