// scraping categorias zara
// const categoriaHombre = require("./Zara/menCategory");
// const manDiscount = require("./Zara/manDiscount");
// const NewMan = require("./Zara/newMan");
// const womanDiscount = require("./Zara/womanDiscount");
// const womanCategory = require("./Zara/womanCategory");
// const newWoman = require("./Zara/newWoman");
// // scraping categorias mango
// const menCategory = require('./Mango/menCategory');
// const menDiscount = require('./Mango/menDiscounts');
// const menNew = require('./Mango/menNew');
// const womanCategoryMango = require('./Mango/womanCategory');
// const womanDiscounts = require('./Mango/womanDiscounts');
// const womanNew = require('./Mango/womanNew');

const mangoScraping = require('./mangoCtl');

const zaraScraping = require('./zaraCtl');


exports.Scraping = async (req, res) => {

    await mangoScraping.getScrapingMango();

    await zaraScraping.getScrapingZara();

    // await manDiscount.manDiscount();
    // await NewMan.newMan();
    // await womanDiscount.descuentoMujer();
    // await newWoman.newWoman();
    // await menDiscount.menDiscount();
    // await menNew.menNew();
    // await womanDiscounts.womanDiscount();
    // await womanNew.womanNew();
    // await womanCategory.womanCategory();
    // await menCategory.menCategory();
    // await womanCategoryMango.womanCategory();
    // await categoriaHombre.categoriaHombre();
    

}

