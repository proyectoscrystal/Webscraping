const scrapingCtl = require("../core/scrapingCtl");
const weekCtl = require("../core/weekFilterCtl");
const colorsController = require("../core/filtersColorsControllers/colorsController");
const barchartsController = require("../core/filtersColorsControllers/barChartsController");

module.exports = (router) => {


    // respuestas a solicitudes desde el front
    router.get('/m_averagePrice',scrapingCtl.averagePrice);
    router.get('/m_infoCards',scrapingCtl.cardsInfo);
    router.get('/m_averageDiscount',scrapingCtl.averageDiscount);
    router.get('/m_averageDiscountinued',scrapingCtl.averageDiscountinued);
    router.get('/m_averageNews',scrapingCtl.averageNews);
    router.get('/m_averageSKU',scrapingCtl.averageSKU);
    router.get('/m_prendasInfo',scrapingCtl.prendasInfo);

    // rutas para las tablas
    router.get('/m_tablePriceInfo',scrapingCtl.tablePriceInfo);
    router.get('/m_tablePrendasInfo',scrapingCtl.tablePrendasInfo);
    router.get('/m_tablePrendasInfo2',scrapingCtl.tablePrendasInfo2);
    router.get('/m_tableDiscountInfo',scrapingCtl.tableDiscountInfo);
    router.get('/m_tableDiscountinuedInfo',scrapingCtl.tableDiscountinuedInfo);
    router.get('/m_tableNewsInfo',scrapingCtl.tableNewsInfo);
    router.get('/m_tableSKUInfo',scrapingCtl.tableSKUInfo);

    // rutas para responder a peticiones de vista colores
    router.get('/m_infoCategoryColors',colorsController.colorGeneralCategory); 
    router.get('/m_infoCategoryMujerColors',colorsController.colorMujerCategory); 
    router.get('/m_infoCategoryHombreColors',colorsController.colorHombreCategory); 
    router.get('/m_infoCategoryKidsColors',colorsController.colorKidsCategory); 
    // para los barcharts de vista colores
    router.get('/m_infoGeneralColors',barchartsController.colorGeneralChart); 
    router.get('/m_infoGeneralColorsMateriales',barchartsController.colorGeneralChartMateriales); 
    // rutas para los filtros por semana en los charts
    router.get('/m_averageDiscountWeek',weekCtl.averageDiscountWeek); 
    router.get('/m_averageNewWeek',weekCtl.averageNewWeek); 
    router.get('/m_averageDiscontinuedWeek',weekCtl.averageDiscontinuedWeek); 
    router.get('/m_averagePriceWeek',weekCtl.averagePriceWeek); 
    router.get('/m_averageSKUWeek',weekCtl.averageSKUWeek); 
    // ruta para las cards por semana
    router.get('/m_infoCardsWeek',weekCtl.cardsInfoWeek); 


}
