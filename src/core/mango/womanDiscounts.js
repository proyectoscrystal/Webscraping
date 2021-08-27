const puppeteer = require('puppeteer');

(async () => {
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

        for (let enlaceRebajas of enlacesRebajas) {
            await page.goto(enlaceRebajas);
            await autoScroll(page);

            try {
                const prendaRebajas = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('#app > main > div > .product-info > div > div:nth-child(1) > ol > li:nth-child(2) > a > span').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale--cross').textContent;
                    prenda.descuento = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale--discount').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    prenda.gender = 'Mujer';
                    prenda.rebaja = 'Rebajas';

                    return prenda;
                });
                rebajasMujer.push(prendaRebajas);
            } catch (error) {

            }
        }
        console.log(rebajasMujer);
        //====================MUJER REBAJAS===========================

    } catch (err) {
        console.error(err.message);
    } finally {
        await browser.close();
    }
})();

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}