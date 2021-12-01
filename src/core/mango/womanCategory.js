const puppeteer = require("puppeteer");
const autoScroll = require("../autoScrollFunction");
const getScraping = require("../mangoCtl");
const Url = require("../linksUrls");

exports.womanCategory = async () => {
  const browser = await puppeteer.launch({ headless: true }); //headless true/false para visualizar el navegador

  const womanCategory = Url.womanCategoryLinkMango;
  
  try {
    const page = await browser.newPage();

    const prendasMujer = [];

    //====================CATEGORIAS MUJER===========================
    await page.goto(womanCategory, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 920, height: 1080 });
    await page.waitForTimeout(5000);

    const enlacesmujer = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "#header > .menu-component > .section-detail-container > div > ul:nth-child(2) > li > a"
      );
      const linksmujer = [];
      for (let element of elements) {
        linksmujer.push(element.href);
      }
      return linksmujer;
    });
    //console.log(enlacesmujer);

    for (let enlacemujer of enlacesmujer) {
      try {
        
        await page.goto(enlacemujer);

      } catch (error) {
        console.log("No se ha encontrado un enlace");
      }
      console.log("Ingresando a: " + enlacemujer);

      await page.waitForTimeout(5000);
      await autoScroll(page);

      const enlacesproductosmujer = await page.evaluate(() => {
        const elements = document.querySelectorAll(".yoqzg > a");

        const productosmujer = [];
        for (let element of elements) {
          productosmujer.push(element.href);
        }
        return productosmujer;
      });
      //console.log(enlacesproductosmujer);
      // let count = 5;

      for (let enlaceproductomujer of enlacesproductosmujer) {
        await page.goto(enlaceproductomujer);
        await page.waitForTimeout(2000);
        await autoScroll(page);

        try {
          const prendaMujer = await page.evaluate(() => {
            const currentURL = window.location.href;
            const http = 'https:';
            const prenda = {};
            prenda.enlaceProducto = currentURL;
            prenda.tipoPrenda = document.querySelector(
              "#app > main > div > .product-info > div > div:nth-child(1) > ol > li:nth-child(2) > a > span"
            ).textContent;
            prenda.imageName = document.querySelector(
              "#app > main > div > div > div > div > .product-name"
            ).textContent;
            prenda.precio = document.querySelector(
              "#app > main > div > div > div > div > .product-sale"
            ).textContent;
            prenda.caracteristicas = document.querySelector(
              "#app > main > div > div.product-info > div > div > p"
            ).textContent;
            prenda.caracteristicas = prenda.caracteristicas.split("."); // probando para separar por caracteristicas
            prenda.caracteristicas.pop();
            prenda.enlaceImagen = http;
            prenda.enlaceImagen += document.querySelector(
              "#renderedImages > ul > li > div > img"
            ).src;
            prenda.categoria = "Mujer";
            prenda.marca = "Mango";
            prenda.tag = "";
            prenda.descuento = "";
            prenda.talla = Array.from(document.querySelectorAll('#sizeSelector > div > span'), xTallas => xTallas.textContent);
            prenda.color = document.querySelector('#app > main > div > div > div > div.colors-info > span').textContent;
            prenda.color = prenda.color.split(' ')[0];
            prenda.color = prenda.color.toLowerCase();
            prenda.materiales = document.querySelector('#app > main > div > .product-info > div > div > div > p').textContent;

            return prenda;
          });
          // count--;
          prendasMujer.push(prendaMujer);
          // if (count === 0) {
          //   break;
          // }
        } catch (error) {
          //console.log(error.message);
        }
      }
      // console.log(prendasMujer);
      
      // if (count === 0) {
      //   break;
      // }
    }
    await getScraping.getscraping(prendasMujer);
    //====================CATEGORIAS MUJER===========================
  } catch (err) {
    console.error(`error en el link = ${womanCategory} - error = ${err.message}`);
  } finally {
    await browser.close();
  }
};
