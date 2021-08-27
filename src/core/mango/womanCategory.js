const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({ headless: false }); //headless true/false para visualizar el navegador
    try {
        const page = await browser.newPage();

        const prendasMujer = [];
        
        //====================CATEGORIAS MUJER===========================
        await page.goto('https://shop.mango.com/co/mujer');
        await page.setViewport({ width: 920, height: 1080 });
        await page.waitForTimeout(5000);

        const enlacesmujer = await page.evaluate(() => {
            const elements = document.querySelectorAll('#header > .menu-component > .section-detail-container > div > ul:nth-child(2) > li > a');
            const linksmujer = [];
            for (let element of elements) {
                linksmujer.push(element.href);
            }
            return linksmujer;
        });
        //console.log(enlacesmujer);

        for (let enlacemujer of enlacesmujer) {
            await page.goto(enlacemujer);
            await autoScroll(page);

            const enlacesproductosmujer = await page.evaluate(() => {
                const elements = document.querySelectorAll('._10aZC > a');

                const productosmujer = [];
                for (let element of elements) {
                    productosmujer.push(element.href);
                }
                return productosmujer;
            });
            //console.log(enlacesproductosmujer);

            for (let enlaceproductomujer of enlacesproductosmujer) {
                await page.goto(enlaceproductomujer);
                await autoScroll(page);

                try {
                    const prendaMujer = await page.evaluate(() => {

                        const currentURL = window.location.href;

                        const prenda = {};
                        prenda.enlaceProducto = currentURL;
                        prenda.categoria = document.querySelector('#app > main > div > .product-info > div > div:nth-child(1) > ol > li:nth-child(2) > a > span').textContent;
                        prenda.nombre = document.querySelector('#app > main > div > div > div > div > .product-name').textContent;
                        prenda.precio = document.querySelector('#app > main > div > div > div > div > .product-sale').textContent;
                        prenda.descripcion = document.querySelector('#app > main > div > div.product-info > div > div > p').textContent;
                        prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                        prenda.gender = 'Mujer';

                        return prenda;
                    });
                    prendasMujer.push(prendaMujer);
                } catch (error) {

                } 
            }
            console.log(prendasMujer);
        }
        //====================CATEGORIAS MUJER===========================         

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