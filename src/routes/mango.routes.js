const mangoCtl = require("../core/mangoCtl");
const scrapingCtl = require("../core/scrapingCtl");



module.exports = (router) => {

    // complete scraping from Mango
    router.get('/m_scraping', mangoCtl.getScrapingMango);
    
    // woman scraping routes
    router.get('/m_womanCategory', mangoCtl.getWomanCategory);
    router.get('/m_womanDiscount', mangoCtl.getWomanDiscount);
    router.get('/m_womanNew', mangoCtl.getWomanNew);

    // man scraping routes
    router.get('/m_menCategory',mangoCtl.getMenCategory);
    router.get('/m_menDiscount',mangoCtl.getMenDiscount);
    router.get('/m_menNew',mangoCtl.getMenNew);

    // babyBoy routes
    router.get('/m_babyBoyCategory',mangoCtl.getBabyBoyCategory);
    router.get('/m_babyBoyDiscount',mangoCtl.getBabyBoyDiscount);
    router.get('/m_babyBoyNew',mangoCtl.getBabyBoyNew);

    // babyGirls routes
    router.get('/m_babyGirlCategory',mangoCtl.getBabyGirlCategory);
    router.get('/m_babyGirlNew',mangoCtl.getBabyGirlNew);

    // Boy routes
    router.get('/m_boyCategory',mangoCtl.getBoyCategory);
    router.get('/m_boyDiscount',mangoCtl.getBoyDiscount);
    router.get('/m_boyNew',mangoCtl.getBoyNew);

    // girls routes
    router.get('/m_girlCategory',mangoCtl.getGirlCategory);
    router.get('/m_girlDiscount',mangoCtl.getGirlDiscount);
    router.get('/m_girlNew',mangoCtl.getGirlNew);

    // miniKids routes
    router.get('/m_miniKids',mangoCtl.getMiniKids);
    router.get('/m_miniKidsNew',mangoCtl.getMiniKidsNew);


    // respuestas a solicitudes desde el front
    router.get('/m_averagePrice',scrapingCtl.averagePrice);

}
