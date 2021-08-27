const zaraCtl = require('../core/zaraCtl')

module.exports = (router) => {

    // rutas para extraer 
    router.get('/scraping_1', zaraCtl.getScraping);
    router.get('/descuentoMujer', zaraCtl.getDescuentoMujer);
    router.get('/womanCategory', zaraCtl.getWomanCategory);
    router.get('/newWoman', zaraCtl.getNewWoman);
    router.get('/categoriaHombre', zaraCtl.getCategoriaHombre);
    router.get('/manDiscount', zaraCtl.getManDiscount);
    router.get('/newMan', zaraCtl.getNewMan);
}
