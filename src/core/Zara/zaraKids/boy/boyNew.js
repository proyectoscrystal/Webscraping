const puppeteer = require('puppeteer');
const autoScroll = require("../../../autoScrollFunction");
const getScraping = require("../../../zaraCtl");

exports.boyNew = async () => {
    const browser = await puppeteer.launch({headless: false});

    try {
        const page = await browser.newPage();

        //====================PRENDAS NUEVAS - NIÑO | 6-14 AÑOS==========================
        const nuevoBoy = [];
        //let count = 2;

        await page.goto("https://www.zara.com/co/es/ninos-nino-novedades-l228.html?v1=1887605");
        await page.setViewport( {width: 920, height: 1080} );
        await autoScroll(page);
        //await page.waitForTimeout(5000);

        const enlaces = await page.evaluate(() => {
            const elements = document.querySelectorAll("#main > article > div > section > ul > li > ul > li > div > div > div > a");

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
                await autoScroll(page);

                const prendas = await page.evaluate(() => {
                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.tipoPrenda = document.querySelector("title").textContent;
                    prenda.imageName = document.querySelector("#main > article > .product-detail-view__main > div > .product-detail-info > h1").textContent;
                    prenda.precio = document.querySelector("#main > article > div > div > div > .product-detail-info__price > div > span > span > span > span").textContent;
                    prenda.caracteristicas = document.querySelector("#main > article > div > div > div > .product-detail-description > div > div > div > p").textContent;
                    prenda.caracteristicas = prenda.caracteristicas.split(".");
                    prenda.caracteristicas.pop();
                    prenda.enlaceImagen = document.querySelector("#main > article > div > div > section > ul > li > button > div > div > picture > img").src;
                    prenda.categoria = "Niño";
                    prenda.marca = "Zara";
                    prenda.descuento = "";
                    prenda.tag = "Nuevo";
                    prenda.talla = Array.from(document.querySelectorAll('.product-detail-size-selector > div > ul > li > div > div > span'), xTallas => xTallas.textContent);
                    prenda.color = document.querySelector('#main > article > .product-detail-view__main > div > div > p').textContent;
                    prenda.color = prenda.color.split(' ')[1];
                    prenda.color = prenda.color.toLowerCase();
                    prenda.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;

                    return prenda;
                });

                //count--;
                nuevoBoy.push(prendas);
                //if (count === 0) {
                    //break;
                //}

            } catch (error) {
                //console.log(error.message);
            }
        }
        //console.log(nuevoBoy);
        getScraping.getscraping(nuevoBoy);
        //====================PRENDAS NUEVAS - NIÑO | 6-14 AÑOS==========================

    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
};