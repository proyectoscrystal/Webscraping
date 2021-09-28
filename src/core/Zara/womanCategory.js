const puppeteer = require("puppeteer");
const autoScroll = require("../autoScrollFunction");
const getscraping = require("../zaraCtl");

exports.womanCategory = async () => {
  const browser = await puppeteer.launch({ headless: false }); //headless true/false para visualizar el navegador
  try {
    const page = await browser.newPage();

    const prendasMujer = []; //Se crea un array para guardar los productos extraidos

    // let count = 5;

    //====================CATEGORIAS MUJER===========================
    await page.goto("https://www.zara.com/co/es/woman-editorial-6-mkt1102.html?v1=1883903"); //Se especifica el enlace para categoría de mujer
    await page.setViewport({ width: 920, height: 1080 }); //Tamaño de la página
    await page.waitForTimeout(5000); //Tiempo para cargar la página completa

    //Se obtienen los enlaces de las categorías
    const enlacesmujer = await page.evaluate(() => {
      const elements = document.querySelectorAll("#sidebar > div > nav > div > ul > li > ul > li > ul > .layout-categories-category--level-3 > a");

      const linksmujer = [];
      for (let element of elements) {
        linksmujer.push(element.href);
      }
      return linksmujer;
    });

    //Se crea un for el cual llevará todo el proceso
    for (let enlacemujer of enlacesmujer) {
      try {

        await page.goto(enlacemujer, { waitUntil: "domcontentloaded" });

      } catch (error) {
        console.log("No se ha encontrado un enlace");
      }
      console.log("Ingresando a: " + enlacemujer);

      await autoScroll(page); //Función que hace el scroll en la página

      //Se obtienen los enlaces de los productos
      const enlacesproductosmujer = await page.evaluate(() => {
        const elements = document.querySelectorAll('#main > article > .product-groups > section > ul > li > ul > li:nth-child(1) > div > div > a');

        const productosmujer = [];
        for (let element of elements) {
          productosmujer.push(element.href);
        }
        return productosmujer;
      });

      //Se obtiene el nombre del tipo de prenda
      let nombrecategoria = await page.evaluate(() => document.querySelector("#theme-app > div > div > footer > div > div:nth-child(2) > div > nav > ol > li:nth-child(4) > a > span").textContent);

      //Se crea un for dentro del otro for para entrar a cada enlace de los productos
      for (let enlaceproductomujer of enlacesproductosmujer) {
        try {
          await page.goto(enlaceproductomujer);
          await autoScroll(page);

          //Se evalua cada enlace del cual se extrae el categoria, nombre, precio y caracteristicas
          const prendamujer = await page.evaluate(() => {
            const currentURL = window.location.href;

            const tmp = {};
            tmp.enlaceProducto = currentURL;
            tmp.imageName = document.querySelector("#main > article > .product-detail-view__main > div > .product-detail-info > h1").textContent;
            tmp.precio = document.querySelector(".price__amount > span").textContent;
            tmp.caracteristicas = document.querySelector("#main > article > div > div > div > .product-detail-description > div > div > div > p").textContent;
            tmp.caracteristicas = tmp.caracteristicas.split("."); // probando para separar por caracteristicas
            tmp.caracteristicas.pop();
            tmp.enlaceImagen = document.querySelector("#main > article > div > div > section > ul > li > button > div > div > picture > img").src;
            tmp.gender = 'Mujer';
            tmp.marca = 'Zara';
            tmp.descuento = "";
            tmp.tag = "";            
            tmp.talla = Array.from(document.querySelectorAll('.product-detail-size-selector > div > ul > li > div > div > span'), xTallas => xTallas.textContent);
            tmp.color = document.querySelector('#main > article > .product-detail-view__main > div > div > p').textContent;
            tmp.color = tmp.color.split(' ')[1];
            tmp.color = tmp.color.toLowerCase();
            tmp.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;              
            
            return tmp;
          });

          // count--;
          prendasMujer.push(prendamujer); //Se guardan las prendas en la constante prendasMujer
          // if(count === 0){                
          //   break;
          // }

        } catch (error) {
          //console.error(error.message);
        }
      }

      prendasMujer.forEach((dato) => {dato.categoria = nombrecategoria});

      // console.log(prendasMujer);

      // if (count === 0) {
      //   break;
      // }
    }

    getscraping.getscraping(prendasMujer);

    
    //====================CATEGORIAS MUJER===========================

  } catch (err) {
    //console.error(err.message);
  } finally {
    await browser.close();
  }
};
