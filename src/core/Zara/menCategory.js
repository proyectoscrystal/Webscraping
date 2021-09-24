const puppeteer = require("puppeteer");
const autoScroll = require("../zara");
const getScraping = require("../zaraCtl");

exports.categoriaHombre = async () => {
  const browser = await puppeteer.launch({ headless: false }); //headless true/false para visualizar el navegador
  try {
    const page = await browser.newPage();
    
    const prendasHombre = []; //Se crea un array para guardar los productos extraidos

    let count = 1;

    //====================CATEGORIAS HOMBRE==========================
    await page.goto("https://www.zara.com/co/es/man-editorial-1-l629.html?v1=1945312"); //Se especifica el enlace para categoría de hombre
    await page.setViewport({ width: 920, height: 1080 }); //Tamaño de la página
    await page.waitForSelector("#sidebar > div > nav > div > ul > li > ul > li > ul > .layout-categories-category--level-3 > a");

    //Se obtienen los enlaces de los tipos de prenda
    const enlaceshombre = await page.evaluate(() => {
      const elements = document.querySelectorAll("#sidebar > div > nav > div > ul > li > ul > li > ul > .layout-categories-category--level-3 > a");

      const linkshombre = [];
      for (let element of elements) {
        linkshombre.push(element.href);
      }
      return linkshombre;
    });
    console.log(enlaceshombre);

    //Se crea un for el cual llevará todo el proceso
    for (let enlacehombre of enlaceshombre) {
      try {

        await page.goto(enlacehombre);

      } catch (error) {
        console.log("No se ha encontrado un enlace");
      }
      console.log("Ingresando a: " + enlacehombre);

      await page.waitForTimeout(2000); //Tiempo para cargar la página completa
      //await autoScroll(page); //Función que hace el scroll en la página

      //Se obtienen los enlaces de los productos
      const enlacesproductoshombre = await page.evaluate(() => {
        const elements = document.querySelectorAll("#main > article > div > section > ul > li > ul > li > div > div > div > a");

        const productoshombre = [];
        for (let element of elements) {
          productoshombre.push(element.href);
        }
        return productoshombre;
      });

      //Se obtiene el nombre del tipo de prenda
      let nombrecategoria = await page.evaluate(() => document.querySelector("#theme-app > div > div > footer > div > div:nth-child(2) > div > nav > ol > li:nth-child(4) > a > span").textContent);

      //Se crea un for dentro del otro for para entrar a cada enlace de los productos
      for (let enlaceproductohombre of enlacesproductoshombre) {
        try {
          await page.goto(enlaceproductohombre);
          //await autoScroll(page);

          //Se evalua cada enlace del cual se extrae el categoria, nombre, precio y caracteristicas
          const prendahombre = await page.evaluate(() => {
            const currentURL = window.location.href;

            const tmp = {};
            tmp.enlaceProducto = currentURL;
            tmp.imageName = document.querySelector("#main > article > .product-detail-view__main > div > .product-detail-info > h1").textContent;
            tmp.precio = document.querySelector(".price__amount > span").textContent;
            tmp.caracteristicas = document.querySelector("#main > article > div > div > div > .product-detail-description > div > div > div > p").textContent;
            tmp.caracteristicas = tmp.caracteristicas.split("."); // probando para separar por caracteristicas
            tmp.caracteristicas.pop();
            tmp.enlaceImagen = document.querySelector("#main > article > div > div > section > ul > li > button > div > div > picture > img").src;
            tmp.gender = "Hombre";
            tmp.marca = "Zara";
            tmp.descuento = "";
            tmp.tag = "";
            tmp.talla = Array.from(document.querySelectorAll('.product-detail-size-selector > div > ul > li > div > div > span'), xTallas => xTallas.textContent);
            tmp.color = document.querySelector('#main > article > .product-detail-view__main > div > div > p').textContent;
            tmp.color = tmp.color.split(' ')[1];
            tmp.color = tmp.color.toLowerCase();
            tmp.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;            

            return tmp;
          });

          count--;
          prendasHombre.push(prendahombre); //Se guardan las prendas en la constante prendasHombre
          if (count === 0) {
            break;
          }

        } catch (error) {
          //console.error(error.message);
        }
      }

      prendasHombre.forEach((dato) => {dato.categoria = nombrecategoria});

      console.log(prendasHombre);
    }

    //getScraping.getscraping(prendasHombre);
    //====================CATEGORIAS HOMBRE==========================

  } catch (err) {
    console.error(err.message);
  } finally {
    await browser.close();
  }
};
