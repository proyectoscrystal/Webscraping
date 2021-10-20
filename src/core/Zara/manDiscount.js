const puppeteer = require("puppeteer");
const autoScroll = require("../autoScrollFunction");
const getScraping = require("../zaraCtl");
const Url = require("../linksUrls");

exports.manDiscount = async () => {
  const browser = await puppeteer.launch({ headless: false }); //headless true/false para visualizar el navegador

  const manDiscount = Url.manDiscountLink;

  try {
    const page = await browser.newPage();

    //====================PRENDAS EN DESCUENTO - HOMBRE==========================
    await page.goto(manDiscount, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 920, height: 1080 });
    await page.waitForTimeout(5000);
    await autoScroll(page);

    const enlacesRebajasH = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "#main > article > .product-groups > section > ul > li > div > div > div > a"
      );

      const links = [];
      for (let element of elements) {
        links.push(element.href);
      }
      return links;
    });

    const rebajasHombre = [];
    // let count = 2;

    for (let enlaceRebajasH of enlacesRebajasH) {
      try {
        await page.goto(enlaceRebajasH, { waitUntil: "networkidle2" });
        await autoScroll(page);

        const prendasRebajaHombre = await page.evaluate(() => {  
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
            "#main > article > .product-detail-view__main > div > .product-detail-info > h1" // cambiar nombrePrenda -> imageName
          ).textContent;
          prenda.precio = document.querySelector(
            "#main > article > div > div > div > div > div > span > .price__amount--old"
          ).textContent;
          prenda.descuento = document.querySelector(
            "#main > article > div > div > div > div > div > span > span > span > span"
          ).textContent;
          prenda.caracteristicas = document.querySelector(
            "#main > article > div > div > div > .product-detail-description > div > div > div > p"
          ).textContent;
          prenda.caracteristicas = prenda.caracteristicas.split("."); // probando para separar por caracteristicas
          prenda.caracteristicas.pop(); 
          prenda.enlaceImagen = document.querySelector(
            "#main > article > div > div > section > ul > li > button > div > div > picture > img"
          ).src;
          prenda.categoria = "Hombre"; 
          prenda.marca = "Zara";
          prenda.tag = "descuento";
          prenda.talla = tallas;
          prenda.tallasAgotadas = tallaValidacion;
          prenda.color = document.querySelector('#main > article > .product-detail-view__main > div > div > p').textContent;
          prenda.color = prenda.color.split(' ')[1];
          prenda.color = prenda.color.toLowerCase();
          prenda.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;         

          return prenda;
        });
        // count--;
        rebajasHombre.push(prendasRebajaHombre);
        // if (count === 0) {
        //   break;
        // }
      } catch (error) {
        //console.log(error.message);
      }
    }
    getScraping.getscraping(rebajasHombre);
    // console.log(rebajasHombre);
    //====================PRENDAS EN DESCUENTO - HOMBRE==========================
  } catch (err) {
    //console.error(err.message);
  } finally {
    await browser.close();
  }
};
