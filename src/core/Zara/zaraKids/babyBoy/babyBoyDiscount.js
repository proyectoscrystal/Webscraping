const puppeteer = require('puppeteer');
const autoScroll = require("../../../autoScrollFunction");
const getScraping = require("../../../zaraCtl");
const Url = require("../../../linksUrls");

exports.babyBoyDiscount = async () => {
    const browser = await puppeteer.launch({headless: false});

    const babyBoyDiscount = Url.babyBoyDiscountLink;

    try {
        const page = await browser.newPage();

        //====================PRENDAS DESCUENTO - BEBE NIÑO | 6 MESES - 5 AÑOS==========================
        const rebajasBabyBoy = [];
        //let count = 2;

        await page.goto(babyBoyDiscount, { waitUntil: "networkidle2" });
        await page.setViewport({width: 920,height: 1080});
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

        for (let enlace of enlaces) {
            try { 

                await page.goto(enlace);
                await autoScroll(page);

                const prendas = await page.evaluate(() => {
                    const currentURL = window.location.href;

                    var tallas = Array.from(document.querySelectorAll('.product-detail-size-selector > div > ul > li > div > div > span'), xTallas => xTallas.textContent);
                    var tallaDisabled = Array.from(document.querySelectorAll('.product-detail-size-selector__size-list-item[disabled]'), TallasDisabled => TallasDisabled.textContent);
                    if(tallaDisabled !== null) {
                      tallaDisabledVal = tallaDisabled;
                    }
                    var tallaValidacion = tallaDisabledVal;

                    const prendas = {};
                    prendas.enlaceProducto = currentURL;
                    prendas.tipoPrenda = document.querySelector("title").textContent;
                    prendas.imageName = document.querySelector("#main > article > .product-detail-view__main > div > .product-detail-info > h1").textContent;
                    prendas.precio = document.querySelector("#main > article > div > div > div > div > div > span > .price__amount--old").textContent;
                    prendas.descuento = document.querySelector("#main > article > div > div > div > div > div > span > span > span > span").textContent;
                    prendas.tag = '';
                    prendas.caracteristicas = document.querySelector("#main > article > div > div > div > .product-detail-description > div > div > div > p").textContent;
                    prendas.caracteristicas = prendas.caracteristicas.split("."); // probando para separar por caracteristicas
                    prendas.caracteristicas.pop();
                    prendas.enlaceImagen = document.querySelector("#main > article > div > div > section > ul > li > button > div > div > picture > img").src;
                    prendas.categoria = 'Niño';
                    prendas.marca = 'Zara';
                    prenda.talla = tallas;
                    prenda.tallasAgotadas = tallaValidacion;
                    prendas.color = document.querySelector('#main > article > .product-detail-view__main > div > div > p').textContent;
                    prendas.color = prendas.color.split(' ')[1];
                    prendas.color = prendas.color.toLowerCase();
                    prendas.materiales = document.querySelector('#main > article > div.product-detail-view__main > div.product-detail-view__main-content > div > div > div > div > div > div > div:nth-child(6) > span > span').textContent;

                    return prendas;
                });
                //count--;
                rebajasBabyBoy.push(prendas);
                //if(count === 0){
                    //break;
                //}
            } catch (error) {
                //console.log(error.message);
            }
        }

        //console.log(rebajasBabyBoy);
        getscraping.getscraping(rebajasBabyBoy);
        //====================PRENDAS DESCUENTO - BEBE NIÑO | 6 MESES - 5 AÑOS==========================

    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
};