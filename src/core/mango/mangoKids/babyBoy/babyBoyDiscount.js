const puppeteer = require('puppeteer');
const autoScroll = require("../../../autoScrollFunction");
const getScraping = require("../../../mangoCtl");
const Url = require("../../../linksUrls");

exports.babyBoyDiscount = async () => {
    const browser = await puppeteer.launch({ headless: true }); //headless true/false para visualizar el navegador
    
    const babyBoyDiscount = Url.babyBoyDiscountLinkMango;

    try {
        const page = await browser.newPage();

        //====================MUJER REBAJAS===========================
        const rebajasBabyBoy = [];
        //let count = 2;

        await page.goto(babyBoyDiscount, { waitUntil: "networkidle2" });
        await page.setViewport({width: 920, height: 1080});
        await autoScroll(page);
        //await page.waitForTimeout(5000);

        const enlaces = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const links = [];
            for (let element of elements) {
                links.push(element.href);
            }
            return links;
        });
        //console.log(enlaces);

        for (let enlace of enlaces) {
            await page.goto(enlace);
            //await autoScroll(page);
            await page.waitForTimeout(2000);

            try {
                const prendas = await page.evaluate(() => {

                    const currentURL = window.location.href;
                    const http = 'https:';
                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.tipoPrenda = document.querySelector('#app > main > div > .product-info > div > div:nth-child(1) > ol > li:nth-child(2) > a > span').textContent;
                    prenda.imageName = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale--cross').textContent;
                    prenda.descuento = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale--discount').textContent;
                    prenda.caracteristicas = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.caracteristicas = prenda.caracteristicas.split("."); // probando para separar por caracteristicas
                    prenda.caracteristicas.pop();
                    prenda.enlaceImagen = http;
                    prenda.enlaceImagen += document.querySelector('#renderedImages > ul > li > div > img').src;
                    prenda.gender = 'Niño';
                    prenda.tag = 'descuento';
                    prenda.marca = 'Mango';
                    prenda.talla = Array.from(document.querySelectorAll('#sizeSelector > div > span'), xTallas => xTallas.textContent);
                    prenda.color = document.querySelector('#app > main > div > div > div > div.colors-info > span').textContent;
                    prenda.color = prenda.color.split(' ')[0];
                    prenda.color = prenda.color.toLowerCase();
                    prenda.materiales = document.querySelector('#app > main > div > .product-info > div > div > div > p').textContent;

                    return prenda;
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
        await getScraping.getscraping(rebajasBabyBoy);
        //====================MUJER REBAJAS===========================

    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
};