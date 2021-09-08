const puppeteer = require('puppeteer');
const autoScroll = require('../zara');
const getScraping = require('../mangoCtl');

exports.womanNew = async () => {
    const browser = await puppeteer.launch({ headless: false }); //headless true/false para visualizar el navegador
    try {
        const page = await browser.newPage();

        const nuevoMujer = [];

        //====================MUJER NUEVA COLECCIÓN===========================
        await page.goto('https://shop.mango.com/co/mujer/destacados/nueva-coleccion_d34952837');
        await autoScroll(page);

        const enlacesNuevo = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksNuevo = [];
            for (let element of elements) {
                linksNuevo.push(element.href);
            }
            return linksNuevo;
        });
        let count = 2;

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
                    prenda.caracteristicas = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.caracteristicas = prenda.caracteristicas.split("."); // probando para separar por caracteristicas
                    prenda.caracteristicas.pop();
                    prenda.enlaceImagen = http;
                    prenda.enlaceImagen += document.querySelector('#renderedImages > ul > li > div > img').src;
                    prenda.gender = 'Mujer';
                    prenda.tag = 'Nueva';
                    prenda.marca = 'Mango';
                    prenda.descuento = '';

                    return prenda;
                });
                count--;
                nuevoMujer.push(prendaNuevo);
                if (count === 0) {
                    break;
                }
            } catch (error) {
                console.log(error);
            }
        }        
        // console.log(nuevoMujer);
        getScraping.getscraping(nuevoMujer);        
        //====================MUJER NUEVA COLECCIÓN===========================
        
    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
}