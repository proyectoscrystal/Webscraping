const puppeteer = require("puppeteer");
const autoScroll = require("../zara");
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
    await autoScroll(page);

    const enlacesNuevoH = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "#main > article > div > .product-grid > ul > li > ul > li > div > div > a"
      );

      const links = [];
      for (let element of elements) {
        links.push(element.href);
      }
      return links;
    });

    const nuevoHombre = [];
    // let count = 2;

    for (let enlaceNuevoH of enlacesNuevoH) {
      try {
        await page.goto(enlaceNuevoH);
        //await page.waitForTimeout(1000);

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
          tmp.tag = "nuevo";
          return tmp;
        });
        // count--;
        nuevoHombre.push(prendasNuevoHombre);
        // if (count === 0) {
        //   break;
        // }
      } catch (error) {
        console.log(error);
      }
    }
    // console.log(nuevoHombre);
    getScraping.getscraping(nuevoHombre);
    //====================PRENDAS NUEVAS - HOMBRE==========================
  } catch (err) {
    console.error(err.message);
  } finally {
    await browser.close();
  }
};
