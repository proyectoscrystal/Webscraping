const puppeteer = require('puppeteer');
const autoScroll = require('../zara');

(async () => {
    
    const browser = await puppeteer.launch( {headless: false} ); //headless true/false para visualizar el navegador
    try {
        const page = await browser.newPage();
        
        
        //====================PRENDAS NUEVAS - MUJER==========================
        await page.goto('https://www.zara.com/co/es/mujer-nuevo-l1180.html?v1=1881787');
        await page.setViewport({ width: 920, height: 1080 });
        await autoScroll(page);

        const enlacesNuevoM = await page.evaluate(() => {
            const elements = document.querySelectorAll('#main > article > div > section> ul > li > ul > li > div > a');

            const links = [];
            for (let element of elements) {
                links.push(element.href);
            }
            return links;
        });

        const nuevoMujer = [];

        for (let enlaceNuevoM of enlacesNuevoM) {
            await page.goto(enlaceNuevoM);
            await page.waitForTimeout(1000);

            const prendasNuevoMujer = await page.evaluate(() => {

                const currentURL = window.location.href;

                const tmp = {};
                tmp.enlaceProducto = currentURL;
                tmp.categoria = document.querySelector('title').textContent;
                tmp.nombre = document.querySelector('#main > article > .product-detail-view__main > div > .product-detail-info > h1').textContent;
                tmp.precio = document.querySelector('#main > article > div > div > div > .product-detail-info__price > div > span > span > span > span').textContent;
                tmp.caracteristicas = document.querySelector('#main > article > div > div > div > .product-detail-description > div > div > div > p').textContent;
                tmp.enlaceImagen = document.querySelector('#main > article > div > div > section > ul > li > button > div > div > picture > img').src;
                return tmp;
            });
            nuevoMujer.push(prendasNuevoMujer);
        }
        console.log(nuevoMujer);    
        //====================PRENDAS NUEVAS - MUJER==========================
               
        
    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
})();