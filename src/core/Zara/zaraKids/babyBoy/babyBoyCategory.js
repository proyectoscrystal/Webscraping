const puppeteer = require('puppeteer');
const autoScroll = require("../../../autoScrollFunction");
const getScraping = require("../../../zaraCtl");
const Url = require("../../../linksUrls");

exports.babyBoyCategory = async () => {
    const browser = await puppeteer.launch( {headless: false} );

    const babyBoyCategory = Url.babyBoyCategoryLink;

    try {
        const page = await browser.newPage();

        //====================CATEGORIAS BEBE NIÑO | 6 MESES - 5 AÑOS===========================
        const prendasBabyBoy = [];
        // let count = 2;

        await page.goto(babyBoyCategory, { waitUntil: "networkidle2" });
        await page.setViewport( {width: 920, height: 1080} );
        await page.waitForTimeout(5000);

        const enlaces = await page.evaluate(() => {
            const elements = document.querySelectorAll("#sidebar > div > nav > div > ul > .layout-categories-category--level-1 > ul > .layout-categories-category--level-2 > ul > li > a");

            const links = [];
            for (let element of elements) {
                links.push(element.href);
            }
            return links;
        });
        //console.log(enlaces);

        for (let enlace of enlaces) {
            try {

                await page.goto(enlace);

            } catch (error) {
                console.log("No se ha encontrado un enlace");
            }
            console.log("Ingresando a: " + enlace);

            await page.waitForTimeout(5000);
            await autoScroll(page); 

            const enlacesproductos = await page.evaluate(() => {
                const elements = document.querySelectorAll("li > ul > li > div > div > a");

                const productos = [];
                for (let element of elements) {
                    productos.push(element.href);
                }
                return productos;
            });

            //Se obtiene el nombre del tipo de prenda
            let nombrecategoria = await page.evaluate(() => document.querySelector("#theme-app > div > div > footer > div > div:nth-child(2) > div > nav > ol > li:nth-child(4) > a > span").textContent);

            for (let enlaceproducto of enlacesproductos) {
                try {
                    await page.goto(enlaceproducto);
                    await autoScroll(page);
                    //await page.waitForTimeout(2000);

                    const prendas = await page.evaluate(() => {
                        const currentURL = window.location.href;

                        var tallas = Array.from(document.querySelectorAll('.product-detail-size-selector > div > ul > li > div > div > span'), xTallas => xTallas.textContent);
                        var tallaDisabled = Array.from(document.querySelectorAll('.product-detail-size-selector__size-list-item[disabled]'), TallasDisabled => TallasDisabled.textContent);
                        if(tallaDisabled !== null) {
                          tallaDisabledVal = tallaDisabled;
                        }
                        var tallaValidacion = tallaDisabledVal;

                        const prenda = {};
                        prenda.enlaceProducto = currentURL;
                        prenda.imageName = document.querySelector("#main > article > .product-detail-view__main > div > .product-detail-info > h1").textContent;
                        prenda.precio = document.querySelector(".price__amount > span").textContent;
                        prenda.caracteristicas = document.querySelector("#main > article > div > div > div > .product-detail-description > div > div > div > p").textContent;
                        prenda.caracteristicas = prenda.caracteristicas.split(".");
                        prenda.caracteristicas.pop();
                        prenda.enlaceImagen = document.querySelector("#main > article > div > div > section > ul > li > button > div > div > picture > img").src;
                        prenda.categoria = "Niño";
                        prenda.marca = "Zara";
                        prenda.descuento = "";
                        prenda.tag = "";
                        prenda.talla = tallas;
                        prenda.tallasAgotadas = tallaValidacion;
                        prenda.color = document.querySelector('#main > article > .product-detail-view__main > div > div > p').textContent;
                        prenda.color = prenda.color.split(' ')[1];
                        prenda.color = prenda.color.toLowerCase();
                        prenda.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;

                        return prenda;
                    });

                    //count--;
                    prendasBabyBoy.push(prendas);
                    //if (count === 0) {
                        //break;
                    //}

                } catch (error) {
                    //console.error(error.message);
                }
            }

            prendasBabyBoy.forEach((dato) => {dato.tipoPrenda = nombrecategoria});

            //console.log(prendasBabyBoy);
            getScraping.getscraping(prendasBabyBoy);
        }
        //====================CATEGORIAS BEBE NIÑO | 6 MESES - 5 AÑOS===========================

    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
};