const puppeteer = require('puppeteer');
const autoScroll = require('../autoScrollFunction');
const getScraping = require('../mangoCtl');

exports.menNew = async () => {
    const browser = await puppeteer.launch({ headless: false }); //headless true/false para visualizar el navegador
    try {
        const page = await browser.newPage();

        //====================HOMBRE NUEVA COLECCIÓN===========================
        await page.goto('https://shop.mango.com/co/hombre/destacados/nueva-coleccion_d15834751');
        await page.setViewport({ width: 920, height: 1080 });
        await page.waitForTimeout(4000);
        await autoScroll(page);

        const enlacesNuevo = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksNuevo = [];
            for (let element of elements) {
                linksNuevo.push(element.href);
            }
            return linksNuevo;
        });

        const nuevoHombre = [];
        // let count = 5;

        for (let enlaceNuevo of enlacesNuevo) {
            await page.goto(enlaceNuevo);
            await autoScroll(page);

            try {
                const prendaNuevo = await page.evaluate(() => {

                    const currentURL = window.location.href;
                    const http = 'https:';
                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('#app > main > div > .product-info > div > div:nth-child(1) > ol > li:nth-child(2) > a > span').textContent;
                    prenda.imageName = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > div > .product-sale').textContent;
                    prenda.descuento = '';
                    prenda.caracteristicas = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.caracteristicas = prenda.caracteristicas.split("."); // probando para separar por caracteristicas
                    prenda.caracteristicas.pop();
                    prenda.enlaceImagen = http;
                    prenda.enlaceImagen += document.querySelector('#renderedImages > ul > li > div > img').src;
                    prenda.gender = 'Hombre';
                    prenda.tag = 'nuevo';
                    prenda.marca = 'Mango';
                    prenda.talla = Array.from(document.querySelectorAll('#sizeSelector > div > span'), xTallas => xTallas.textContent);
                    prenda.color = document.querySelector('#app > main > div > div > div > div.colors-info > span').textContent;
                    prenda.color = prenda.color.split(' ')[0];
                    prenda.color = prenda.color.toLowerCase();
                    prenda.materiales = document.querySelector('#app > main > div > .product-info > div > div > div > p').textContent;

                    return prenda;
                });
                // count--;
                nuevoHombre.push(prendaNuevo);
                // if(count === 0) {
                //     break;
                // }
            } catch (error) {
                //console.log(error.message);
            }
        }
        // console.log(nuevoHombre);
        getScraping.getscraping(nuevoHombre);
        //====================HOMBRE NUEVA COLECCIÓN===========================

    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
}
