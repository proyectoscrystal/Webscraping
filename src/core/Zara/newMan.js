const puppeteer = require("puppeteer");
const autoScroll = require("../autoScrollFunction");
const getScraping = require("../zaraCtl");
const Url = require("../linksUrls");

exports.newMan = async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] }); //headless true/false para visualizar el navegador

  const newMan = Url.menCategoryLink;

  try {
    const page = await browser.newPage();

    //====================PRENDAS NUEVAS - HOMBRE==========================
    await page.goto(newMan, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 920, height: 1080 });
    await page.waitForTimeout(5000);
    await autoScroll(page);

    const enlacesNuevoH = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "li > ul > li > div > div > a"
      );

      const links = [];
      for (let element of elements) {
        links.push(element.href);
      }
      return links;
    });

    const nuevoHombre = [];
    // let count = 5;

    for (let enlaceNuevoH of enlacesNuevoH) {
      try {
        await page.goto(enlaceNuevoH);
        await page.waitForTimeout(2000);
        await autoScroll(page); //Función que hace el scroll en la página

        const prendasNuevoHombre = await page.evaluate(() => {
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
            "#main > article > div > div > div > .product-detail-info__price > div > span > span > span > span"
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
          prenda.descuento = "";
          prenda.tag = "nuevo";
          prenda.talla = tallas;
          prenda.tallasAgotadas = tallaValidacion;
          prenda.color = document.querySelector('#main > article > .product-detail-view__main > .product-detail-view__side-bar > .product-detail-info > .product-detail-color-selector > p').textContent;
          prenda.color = prenda.color.split(' ')[1];
          prenda.color = prenda.color.toLowerCase();
          prenda.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;

          return prenda;
        });
        // count--;
        nuevoHombre.push(prendasNuevoHombre);
        // if (count === 0) {
        //   break;
        // }
      } catch (error) {
        //console.log(error.message);
      }
    }
    //console.log(nuevoHombre);
    await getScraping.getscraping(nuevoHombre);
    //====================PRENDAS NUEVAS - HOMBRE==========================
  } catch (err) {
    console.error(`error en el link = ${newMan} - error = ${err.message}`);
  } finally {
    await browser.close();
  }
};
