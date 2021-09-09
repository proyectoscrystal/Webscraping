const puppeteer = require("puppeteer");
const autoScroll = require("../zara");
const getscraping = require("../zaraCtl");

exports.newWoman =async () => {
  const browser = await puppeteer.launch({ headless: false }); //headless true/false para visualizar el navegador
  try {
    const page = await browser.newPage();

    //====================PRENDAS NUEVAS - MUJER==========================
    await page.goto(
      "https://www.zara.com/co/es/mujer-nuevo-l1180.html?v1=1881787"
    );
    await page.setViewport({ width: 920, height: 1080 });
    await autoScroll(page);

    const enlacesNuevoM = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "#main > article > div > section > ul > li > ul > li > div > div > div > a"
      );

      const links = [];
      for (let element of elements) {
        links.push(element.href);
      }
      return links;
    });

    const nuevoMujer = [];
    // let count = 2;

    for (let enlaceNuevoM of enlacesNuevoM) {
      try {
        await page.goto(enlaceNuevoM);
        await autoScroll(page); //Función que hace el scroll en la página

        const prendasNuevoMujer = await page.evaluate(() => {
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
          tmp.features = document.querySelector(
            "#main > article > div > div > div > .product-detail-description > div > div > div > p"
          ).textContent;
          tmp.caracteristicas = tmp.caracteristicas.split("."); // probando para separar por caracteristicas
          tmp.caracteristicas.pop();

          tmp.enlaceImagen = document.querySelector(
            "#main > article > div > div > section > ul > li > button > div > div > picture > img"
          ).src;
          tmp.tag = "nuevo";
          tmp.descuento = "";
          tmp.gender = "Mujer";
          tmp.marca = "Zara";
          tmp.talla = Array.from(document.querySelectorAll('.product-detail-size-selector > div > ul > li > div > div > span'), xTallas => xTallas.textContent);
          tmp.color = document.querySelector('#main > article > .product-detail-view__main > div > div > p').textContent;
          tmp.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;

          return tmp;
        });
        // count--;
        nuevoMujer.push(prendasNuevoMujer);
        // if(count === 0){                
        //     break;
        // }
      } catch (error) {
        console.log(error);
      }
    }
    getscraping.getscraping(nuevoMujer);
    // console.log(nuevoMujer);
    //====================PRENDAS NUEVAS - MUJER==========================
  } catch (err) {
    console.error(err.message);
  } finally {
    await browser.close();
  }
}