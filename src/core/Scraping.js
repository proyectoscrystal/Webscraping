// scraping categorias zara
const categoriaHombre = require("./Zara/menCategory");
const manDiscount = require("./Zara/manDiscount");
const NewMan = require("./Zara/newMan");
const womanDiscount = require("./Zara/womanDiscount");
const womanCategory = require("./Zara/womanCategory");
const newWoman = require("./Zara/newWoman");
// scraping categorias mango
const menCategory = require('./Mango/menCategory');
const menDiscount = require('./Mango/menDiscounts');
const menNew = require('./Mango/menNew');
const womanCategoryMango = require('./Mango/womanCategory');
const womanDiscounts = require('./Mango/womanDiscounts');
const womanNew = require('./Mango/womanNew');


exports.Scraping = async (req, res) => {
    res.json({mensaje: "se ejecuta el scraping completo"});
    await categoriaHombre.categoriaHombre();
    await manDiscount.manDiscount();
    await NewMan.newMan();
    await womanCategory.womanCategory();
    await newWoman.newWoman();
    await womanDiscount.descuentoMujer();

    await menCategory.menCategory();
    await menDiscount.menDiscount();
    await menNew.menNew();
    await womanCategoryMango.womanCategory();
    await womanDiscounts.womanDiscount();
    await womanNew.womanNew();

    mensaje();

}


let mensaje = () => {
    console.log("se completo correctamente el scraping");
}