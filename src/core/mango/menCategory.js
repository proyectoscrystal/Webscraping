const puppeteer = require("puppeteer");
const autoScroll = require("../autoScrollFunction");
const getScraping = require("../mangoCtl");
const Url = require("../linksUrls");

exports.menCategory = async () => {
  const browser = await puppeteer.launch({ headless: true }); //headless true/false para visualizar el navegador

  const menCategory = Url.menCategoryLinkMango;

  try {
    const page = await browser.newPage();

    const prendasHombre = [];

    //====================CATEGORIAS HOMBRE===========================
    await page.goto(menCategory, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 920, height: 1080 });
    await page.waitForTimeout(5000);

    const enlaceshombre = await page.evaluate(() => {
      const elements = document.querySelectorAll("#header > .menu-component > .section-detail-container > div > ul:nth-child(2) > li > a");
      const linkshombre = [];
      for (let element of elements) {
        linkshombre.push(element.href);
      }
      return linkshombre;
    });
    //console.log(enlaceshombre);

    for (let enlacehombre of enlaceshombre) {
      try {

        await page.goto(enlacehombre);

      } catch (error) {
        console.log("No se ha encontrado un enlace");
      }
      console.log("Ingresando a: " + enlacehombre);

      await page.waitForTimeout(5000);
      await autoScroll(page);

      const enlacesproductoshombre = await page.evaluate(() => {
        const elements = document.querySelectorAll(".yoqzg > a");

        const productoshombre = [];
        for (let element of elements) {
          productoshombre.push(element.href);
        }
        return productoshombre;
      });
      //console.log(enlacesproductoshombre);

      // let count = 5;

      for (let enlaceproductohombre of enlacesproductoshombre) {
        try {
          await page.goto(enlaceproductohombre);
          await autoScroll(page);
        
          const prendaHombre = await page.evaluate(() => {
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
            prenda.categoria = "Hombre";
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
          prendasHombre.push(prendaHombre);
          // if (count === 0) {
          //   break;
          // }
        } catch (error) {
          //console.log(error.message);
        }
      }
      // console.log(prendasHombre);
      await getScraping.getscraping(prendasHombre);

      // if (count === 0) {
      //   break;
      // }
    }

    //====================CATEGORIAS HOMBRE===========================
  } catch (err) {
    console.error(`error en el link = ${menCategory} - error = ${err.message}`);
  } finally {
    await browser.close();
  }
};
