const mangoCtl = require("../core/mangoCtl");



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
}
