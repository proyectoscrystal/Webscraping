const puppeteer = require("puppeteer");
const autoScroll = require("../zara");
const getScraping = require("../zaraCtl");

exports.manDiscount = async () => {
  const browser = await puppeteer.launch({ headless: false }); //headless true/false para visualizar el navegador
  try {
    const page = await browser.newPage();

    //====================PRENDAS EN DESCUENTO - HOMBRE==========================
    await page.goto(
      "https://www.zara.com/co/es/hombre-precios-especiales-l806.html?v1=1865130",
      { waitUntil: "networkidle2" }
    );
    await page.setViewport({ width: 920, height: 1080 });
    await autoScroll(page);

    const enlacesRebajasH = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "#main > article > div > section > ul > li > ul > li > div > div > div > a"
      );

      const links = [];
      for (let element of elements) {
        links.push(element.href);
      }
      return links;
    });

    const rebajasHombre = [];
    let count = 2;

    for (let enlaceRebajasH of enlacesRebajasH) {
      try {
        await page.goto(enlaceRebajasH, { waitUntil: "networkidle2" });
        await autoScroll(page);

        const prendasRebajaHombre = await page.evaluate(() => {
          const currentURL = window.location.href;

          const tmp = {};
          tmp.enlaceProducto = currentURL;
          tmp.categoria = document.querySelector("title").textContent;
          tmp.imageName = document.querySelector(
            "#main > article > .product-detail-view__main > div > .product-detail-info > h1" // cambiar nombrePrenda -> imageName
          ).textContent;
          tmp.precio = document.querySelector(
            "#main > article > div > div > div > div > div > span > .price__amount--old"
          ).textContent;
          tmp.descuento = document.querySelector(
            "#main > article > div > div > div > div > div > span > span > span > span"
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
          tmp.tag = "";
          tmp.talla = Array.from(document.querySelectorAll('.product-detail-size-selector > div > ul > li > div > div > span'), xTallas => xTallas.textContent);
          tmp.color = document.querySelector('#main > article > .product-detail-view__main > div > div > p').textContent;
          tmp.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;          

          return tmp;
        });
        count--;
        rebajasHombre.push(prendasRebajaHombre);
        if (count === 0) {
          break;
        }
      } catch (error) {
        console.log(error);
      }
    }
    getScraping.getscraping(rebajasHombre);
    // console.log(rebajasHombre);
    //====================PRENDAS EN DESCUENTO - HOMBRE==========================
  } catch (err) {
    console.error(err.message);
  } finally {
    await browser.close();
  }
};
