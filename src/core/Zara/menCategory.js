const puppeteer = require("puppeteer");
const autoScroll = require("../autoScrollFunction");
const getScraping = require("../zaraCtl");
const Url = require("../linksUrls");
const fs = require("fs");

exports.categoriaHombre = async () => {

  var fecha = new Date();
  var fechaObj = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "long"
  };
  let horaInicioZara = fecha.toLocaleDateString("es", fechaObj);
  fs.writeFile("horaInicioZara.txt", horaInicioZara, (err) => {
    if (err) throw err;
    console.log("Hora guardada!");
  });

      const browser = await puppeteer.launch(
        { 
            headless: true,
            args: ["--no-sandbox"]
         }
        ); //headless true/false para visualizar el navegador

  const menCategory = Url.menCategoryLink;

  try {
    const page = await browser.newPage();

    const prendasHombre = []; //Se crea un array para guardar los productos extraidos

    //let count = 5;

    //====================CATEGORIAS HOMBRE==========================
    await page.goto(menCategory, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 920, height: 1080 }); //Tamaño de la página
    await page.waitForTimeout(5000);

    //Se obtienen los enlaces de los tipos de prenda
    const enlaceshombre = await page.evaluate(() => {
      const elements = document.querySelectorAll("#sidebar > div > nav > div > ul > .layout-categories-category--level-1 > ul > .layout-categories-category--level-2 > ul > li > a");

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

        await page.goto(enlacehombre, { waitUntil: "domcontentloaded" });

      } catch (error) {
        console.log("No se ha encontrado un enlace");
      }
      console.log("Ingresando a: " + enlacehombre);

      await page.waitForTimeout(5000);
      await autoScroll(page); //Función que hace el scroll en la página

      //Se obtienen los enlaces de los productos
      const enlacesproductoshombre = await page.evaluate(() => {
        const elements = document.querySelectorAll("li > ul > li > div > div > a");

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
          await page.waitForTimeout(2000);
          await autoScroll(page);

          //Se evalua cada enlace del cual se extrae el categoria, nombre, precio y caracteristicas
          const prendahombre = await page.evaluate(() => {
            const currentURL = window.location.href;

            var tallas = Array.from(document.querySelectorAll('.product-detail-size-selector > div > ul > li > div > div > span'), xTallas => xTallas.textContent);
            var tallaDisabled = Array.from(document.querySelectorAll('.product-detail-size-selector__size-list-item--is-disabled'), TallasDisabled => TallasDisabled.textContent);
            if (tallaDisabled !== null) {
              tallaDisabledVal = tallaDisabled;
            }
            var tallaValidacion = tallaDisabledVal;

            const prenda = {};
            prenda.enlaceProducto = currentURL;
            prenda.imageName = document.querySelector("#main > article > .product-detail-view__main > div > .product-detail-info > h1").textContent;
            prenda.precio = document.querySelector(".price__amount > span").textContent;
            prenda.caracteristicas = document.querySelector("#main > article > div > div > div > .product-detail-description > div > div > div > p").textContent;
            prenda.caracteristicas = prenda.caracteristicas.split("."); // probando para separar por caracteristicas
            prenda.caracteristicas.pop();
            prenda.enlaceImagen = document.querySelector("#main > article > div > div > section > ul > li > button > div > div > picture > img").src;
            prenda.categoria = "Hombre";
            prenda.marca = "Zara";
            prenda.descuento = "";
            prenda.tag = "";
            prenda.talla = tallas;
            prenda.tallasAgotadas = tallaValidacion;
            prenda.color = document.querySelector('#main > article > .product-detail-view__main > .product-detail-view__side-bar > .product-detail-info > .product-detail-color-selector > p').textContent;
            prenda.color = prenda.color.split(' ')[1];
            prenda.color = prenda.color.toLowerCase();
            prenda.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;

            return prenda;
          });

          //count--;
          prendasHombre.push(prendahombre); //Se guardan las prendas en la constante prendasHombre
          //if (count === 0) {
          //break;
          //}

        } catch (error) {
          //console.error(error);
        }
      }

      prendasHombre.forEach((dato) => { dato.tipoPrenda = nombrecategoria });

      console.log(prendasHombre);
      await getScraping.getscraping(prendasHombre);
    }

    //====================CATEGORIAS HOMBRE==========================

  } catch (err) {
    console.error(`error en el link = ${menCategory} - error = ${err.message}`);
    //console.error(err);
  } finally {
    await browser.close();
  }
};
