const puppeteer = require('puppeteer');
const autoScroll = require('../zara');
const getScraping = require('../mangoCtl');

exports.womanDiscount = async () => {
    const browser = await puppeteer.launch({ headless: false }); //headless true/false para visualizar el navegador
    try {
        const page = await browser.newPage();

        const rebajasMujer = [];

        //====================MUJER REBAJAS===========================
        await page.goto('https://shop.mango.com/co/mujer/destacados/rebajas_d14760544');
        await autoScroll(page);

        const enlacesRebajas = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksRebajas = [];
            for (let element of elements) {
                linksRebajas.push(element.href);
            }
            return linksRebajas;
        });
        let count = 2;

        for (let enlaceRebajas of enlacesRebajas) {
            await page.goto(enlaceRebajas);
            await autoScroll(page);

            try {
                const prendaRebajas = await page.evaluate(() => {

                    const currentURL = window.location.href;
                    const http = 'https:';
                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('#app > main > div > .product-info > div > div:nth-child(1) > ol > li:nth-child(2) > a > span').textContent;
                    prenda.imageName = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale--cross').textContent;
                    prenda.descuento = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale--discount').textContent;
                    prenda.caracteristicas = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.caracteristicas = prenda.caracteristicas.split("."); // probando para separar por caracteristicas
                    prenda.caracteristicas.pop();
                    prenda.enlaceImagen = http;
                    prenda.enlaceImagen += document.querySelector('#renderedImages > ul > li > div > img').src;
                    prenda.gender = 'Mujer';
                    prenda.tag = '';
                    prenda.marca = 'Mango';

                    return prenda;
                });
                count--;
                rebajasMujer.push(prendaRebajas);
                if(count === 0){
                    break;
                }
            } catch (error) {
                console.log(error);
            }
        }
        // console.log(rebajasMujer);
        getScraping.getscraping(rebajasMujer);
        //====================MUJER REBAJAS===========================

    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
}