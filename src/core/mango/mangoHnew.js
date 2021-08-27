const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    }); //headless true/false para visualizar el navegador
    try {
        const page = await browser.newPage();

        const prendasHnew = [];

        //====================HOMBRE NUEVA COLECCIÓN===========================
        await page.goto('https://shop.mango.com/co/hombre/destacados/nueva-coleccion_d15834751');
        await page.waitForTimeout(1000);
        await autoScroll(page);

        const enlacesNuevo = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksNuevo = [];
            for (let element of elements) {
                linksNuevo.push(element.href);
            }
            return linksNuevo;
        });

        for (let enlaceNuevo of enlacesNuevo) {
            await page.goto(enlaceNuevo);
            await page.waitForTimeout(1000);

            try {
                const prendaNuevo = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > div > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;

                    return prenda;
                });
                prendasHnew.push(prendaNuevo);
            } catch (error) {

            }
        }
        console.log(prendasHnew);
        //====================HOMBRE NUEVA COLECCIÓN===========================

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