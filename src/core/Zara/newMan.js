const puppeteer = require("puppeteer");
const autoScroll = require("../autoScrollFunction");
const getScraping = require("../zaraCtl");

exports.newMan = async () => {
  const browser = await puppeteer.launch({ headless: false }); //headless true/false para visualizar el navegador
  try {
    const page = await browser.newPage();

    //====================PRENDAS NUEVAS - HOMBRE==========================
    await page.goto(
      "https://www.zara.com/co/es/hombre-nuevo-l711.html?v1=1886951"
    );
    await page.setViewport({ width: 920, height: 1080 });
    await page.waitForTimeout(5000);
    await autoScroll(page);

    const enlacesNuevoH = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "#main > article > div > section > ul > li > ul > li > div > div > div > a"
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
        await autoScroll(page); //Función que hace el scroll en la página

        const prendasNuevoHombre = await page.evaluate(() => {
          const currentURL = window.location.href;

          const tmp = {};
          tmp.enlaceProducto = currentURL;
          tmp.categoria = document.querySelector("title").textContent;
          tmp.imageName = document.querySelector(
            "#main > article > .product-detail-view__main > div > .product-detail-info > h1"
          ).textContent;
          tmp.precio = document.querySelector(
            "#main > article > div > div > div > .product-detail-info__price > div > span > span > span > span"
          ).textContent;
          tmp.caracteristicas = document.querySelector(
            "#main > article > div > div > div > .product-detail-description > div > div > div > p"
          ).textContent;
          tmp.caracteristicas = tmp.caracteristicas.split("."); // probando para separar por caracteristicas
          tmp.caracteristicas.pop();
          tmp.enlaceImagen = document.querySelector(
            "#main > article > div > div > section > ul > li > button > div > div > picture > img"
          ).src;
          tmp.gender = "Hombre";
          tmp.marca = "Zara";
          tmp.descuento = "";
          tmp.tag = "Nuevo";
          tmp.talla = Array.from(document.querySelectorAll('.product-detail-size-selector > div > ul > li > div > div > span'), xTallas => xTallas.textContent);
          tmp.color = document.querySelector('#main > article > .product-detail-view__main > div > div > p').textContent;
          tmp.color = tmp.color.split(' ')[1];
          tmp.color = tmp.color.toLowerCase();
          tmp.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;

          return tmp;
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
    getScraping.getscraping(nuevoHombre);
    //====================PRENDAS NUEVAS - HOMBRE==========================
  } catch (err) {
    console.error(err.message);
  } finally {
    await browser.close();
  }
};
