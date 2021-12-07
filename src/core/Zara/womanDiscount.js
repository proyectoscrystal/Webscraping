const puppeteer = require("puppeteer");
const autoScroll = require("../autoScrollFunction");
const getscraping = require("../zaraCtl");
const Url = require("../linksUrls");

exports.descuentoMujer = async () => {
  const browser = await puppeteer.launch({ headless: true }); //headless true/false para visualizar el navegador

  const womanDiscount = Url.womanDiscountLink;

  try {
    const page = await browser.newPage();

    //====================PRENDAS EN DESCUENTO - MUJER==========================
    await page.goto(womanDiscount, { waitUntil: "networkidle2", args: ['--no-sandbox'] });
    await page.setViewport({ width: 920, height: 1080 });
    await page.waitForTimeout(5000);
    await autoScroll(page);

    const enlacesRebajasM = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "li > ul > li > div > div > a"
      );

      const links = [];
      for (let element of elements) {
        links.push(element.href);
      }
      return links;
    });

    const rebajasMujer = [];
    //let count = 5;

    for (let enlaceRebajasM of enlacesRebajasM) {
      try { // se usa el try, catch para 
          
        await page.goto(enlaceRebajasM, { waitUntil: "networkidle2" });
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const prendasRebajaMujer = await page.evaluate(() => {
          const currentURL = window.location.href;

          var tallas = Array.from(document.querySelectorAll('.product-detail-size-selector > div > ul > li > div > div > span'), xTallas => xTallas.textContent);
          var tallaDisabled = Array.from(document.querySelectorAll('.product-detail-size-selector__size-list-item[disabled]'), TallasDisabled => TallasDisabled.textContent);
          if(tallaDisabled !== null) {
            tallaDisabledVal = tallaDisabled;
          }
          var tallaValidacion = tallaDisabledVal;

          const prenda = {};
          prenda.enlaceProducto = currentURL;
          prenda.tipoPrenda = document.querySelector("title").textContent;
          prenda.imageName = document.querySelector(
            "#main > article > .product-detail-view__main > div > .product-detail-info > h1"
          ).textContent;
          prenda.precio = document.querySelector(
            "#main > article > div > div > div > div > div > span > .price__amount--old"
          ).textContent;
          prenda.descuento = document.querySelector(
            "#main > article > div > div > div > div > div > span > span > span > span"
          ).textContent;
          prenda.tag = 'descuento';
          prenda.caracteristicas = document.querySelector(
            "#main > article > div > div > div > .product-detail-description > div > div > div > p"
          ).textContent;
          prenda.caracteristicas = prenda.caracteristicas.split("."); // probando para separar por caracteristicas
          prenda.caracteristicas.pop(); 

          prenda.enlaceImagen = document.querySelector(
            "#main > article > div > div > section > ul > li > button > div > div > picture > img"
          ).src;
          prenda.categoria = 'Mujer';
          prenda.marca = 'Zara';
          prenda.talla = tallas;
          prenda.tallasAgotadas = tallaValidacion;
          prenda.color = document.querySelector('#main > article > .product-detail-view__main > .product-detail-view__side-bar > .product-detail-info > .product-detail-color-selector > p').textContent;
          prenda.color = prenda.color.split(' ')[1];
          prenda.color = prenda.color.toLowerCase();
          prenda.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;          

          return prenda;
        });
        //count--;
        rebajasMujer.push(prendasRebajaMujer);
        //if(count === 0){
          //break;
        //}
      } catch (error) {
        //console.log(error.message);
      }
    } 

    //console.log(rebajasMujer)
    await getscraping.getscraping(rebajasMujer);

    //====================PRENDAS EN DESCUENTO - MUJER==========================
  } catch (err) {
    console.error(`error en el link = ${womanDiscount} - error = ${err.message}`);
  } finally {
    await browser.close();
  }
}
