const puppeteer = require("puppeteer");
const autoScroll = require("../autoScrollFunction");
const getscraping = require("../zaraCtl");
const Url = require("../linksUrls");

exports.newWoman = async () => {
  const browser = await puppeteer.launch({ headless: true }); //headless true/false para visualizar el navegador

  const newWoman = Url.newWomanLink;

  try {
    const page = await browser.newPage();

    //====================PRENDAS NUEVAS - MUJER==========================
    await page.goto(newWoman, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 920, height: 1080 });
    await page.waitForTimeout(5000);
    await autoScroll(page);

    const enlacesNuevoM = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        "li > ul > li > div > div > a"
      );

      const links = [];
      for (let element of elements) {
        links.push(element.href);
      }
      return links;
    });

    const nuevoMujer = [];
    //let count = 5;

    for (let enlaceNuevoM of enlacesNuevoM) {
      try {
        await page.goto(enlaceNuevoM);
        await page.waitForTimeout(2000);
        await autoScroll(page); //Función que hace el scroll en la página

        const prendasNuevoMujer = await page.evaluate(() => {
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
          prenda.tag = "nuevo";
          prenda.descuento = "";
          prenda.categoria = "Mujer";
          prenda.marca = "Zara";
          prenda.talla = tallas;
          prenda.tallasAgotadas = tallaValidacion;
          prenda.color = document.querySelector('#main > article > div.product-detail-view__main > div > div.product-detail-info > p').textContent;
          prenda.color = prenda.color.split(' ')[1];
          prenda.color = prenda.color.toLowerCase();
          prenda.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;

          return prenda;
        });
        //count--;
        nuevoMujer.push(prendasNuevoMujer);
        //if(count === 0){                
          //break;
        //}
      } catch (error) {
        console.log(error.message);;
      }
    }
    console.log(nuevoMujer);
    await getscraping.getscraping(nuevoMujer);
    //====================PRENDAS NUEVAS - MUJER==========================
  } catch (err) {
    console.error(`error en el link = ${newWoman} - error = ${err.message}`);
  } finally {
    await browser.close();
  }
}