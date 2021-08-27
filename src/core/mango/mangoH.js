const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    }); //headless true/false para visualizar el navegador
    try {
        const page = await browser.newPage();

        const prendasH = [];

        //====================HOMBRE CAMISAS===========================
        await page.goto('https://shop.mango.com/co/hombre/camisas_c10863844');
        await page.waitForTimeout(1000);
        await autoScroll(page);

        const enlacesCamisas = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksCamisas = [];
            for (let element of elements) {
                linksCamisas.push(element.href);
            }
            return linksCamisas;
        });

        for (let enlaceCamisas of enlacesCamisas) {
            await page.goto(enlaceCamisas);
            await page.waitForTimeout(1000);

            try {
                const prendaCamisas = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;

                    return prenda;
                });
                prendasH.push(prendaCamisas);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE CAMISAS===========================



        //====================HOMBRE CAMISETAS===========================
        await page.goto('https://shop.mango.com/co/hombre/camisetas_c12018147');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesCamisetas = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksCamisetas = [];
            for (let element of elements) {
                linksCamisetas.push(element.href);
            }
            return linksCamisetas;
        });

        for (let enlaceCamisetas of enlacesCamisetas) {
            await page.goto(enlaceCamisetas);
            await page.waitForTimeout(1000);

            try {
                const prendaCamisetas = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaCamisetas);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE CAMISETAS===========================



        //====================HOMBRE POLOS===========================
        await page.goto('https://shop.mango.com/co/hombre/polos_c25175143');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesPolos = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksPolos = [];
            for (let element of elements) {
                linksPolos.push(element.href);
            }
            return linksPolos;
        });

        for (let enlacePolos of enlacesPolos) {
            await page.goto(enlacePolos);
            await page.waitForTimeout(1000);

            try {
                const prendaPolos = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaPolos);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE POLOS===========================



        //====================HOMBRE SOBRECAMISAS==========================
        await page.goto('https://shop.mango.com/co/hombre/sobrecamisas_c13028484');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesSobrecamisas = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksSobrecamisas = [];
            for (let element of elements) {
                linksSobrecamisas.push(element.href);
            }
            return linksSobrecamisas;
        });

        for (let enlaceSobrecamisas of enlacesSobrecamisas) {
            await page.goto(enlaceSobrecamisas);
            await page.waitForTimeout(1000);

            try {
                const prendaSobrecamisas = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaSobrecamisas);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE SOBRECAMISAS==========================  



        //====================HOMBRE CARDIGANS Y JERSEIS==========================
        await page.goto('https://shop.mango.com/co/hombre/cardigans-y-jerseis_c33749244');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesCardigans = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksCardigans = [];
            for (let element of elements) {
                linksCardigans.push(element.href);
            }
            return linksCardigans;
        });

        for (let enlaceCardigans of enlacesCardigans) {
            await page.goto(enlaceCardigans);
            await page.waitForTimeout(1000);

            try {
                const prendaCardigans = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaCardigans);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE CARDIGANS Y JERSEIS==========================  



        //====================HOMBRE AMERICANAS==========================
        await page.goto('https://shop.mango.com/co/hombre/americanas_c14858698');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesAmericanas = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksAmericanas = [];
            for (let element of elements) {
                linksAmericanas.push(element.href);
            }
            return linksAmericanas;
        });

        for (let enlaceAmericanas of enlacesAmericanas) {
            await page.goto(enlaceAmericanas);
            await page.waitForTimeout(1000);

            try {
                const prendaAmericanas = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaAmericanas);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE AMERICANAS========================== 



        //====================HOMBRE CHAQUETAS==========================
        await page.goto('https://shop.mango.com/co/hombre/chaquetas_c16042202');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesChaquetas = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksChaquetas = [];
            for (let element of elements) {
                linksChaquetas.push(element.href);
            }
            return linksChaquetas;
        });

        for (let enlaceChaquetas of enlacesChaquetas) {
            await page.goto(enlaceChaquetas);
            await page.waitForTimeout(1000);

            try {
                const prendaChaquetas = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaChaquetas);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE CHAQUETAS========================== 



        //====================HOMBRE PIEL==========================
        await page.goto('https://shop.mango.com/co/hombre/piel_c13997579');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesPiel = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksPiel = [];
            for (let element of elements) {
                linksPiel.push(element.href);
            }
            return linksPiel;
        });

        for (let enlacePiel of enlacesPiel) {
            await page.goto(enlacePiel);
            await page.waitForTimeout(1000);

            try {
                const prendaPiel = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaPiel);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE PIEL==========================     



        //====================HOMBRE ABRIGOS==========================
        await page.goto('https://shop.mango.com/co/hombre/abrigos_c32859776');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesAbrigos = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksAbrigos = [];
            for (let element of elements) {
                linksAbrigos.push(element.href);
            }
            return linksAbrigos;
        });

        for (let enlaceAbrigos of enlacesAbrigos) {
            await page.goto(enlaceAbrigos);
            await page.waitForTimeout(1000);

            try {
                const prendaAbrigos = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaAbrigos);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE ABRIGOS==========================



        //====================HOMBRE BERMUDAS==========================
        await page.goto('https://shop.mango.com/co/hombre/bermudas_c11687531');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesBermudas = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksBermudas = [];
            for (let element of elements) {
                linksBermudas.push(element.href);
            }
            return linksBermudas;
        });

        for (let enlaceBermudas of enlacesBermudas) {
            await page.goto(enlaceBermudas);
            await page.waitForTimeout(1000);

            try {
                const prendaBermudas = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaBermudas);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE BERMUDAS==========================   



        //====================HOMBRE PANTALONES==========================
        await page.goto('https://shop.mango.com/co/hombre/pantalones_c11949748');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesPantalones = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksPantalones = [];
            for (let element of elements) {
                linksPantalones.push(element.href);
            }
            return linksPantalones;
        });

        for (let enlacePantalones of enlacesPantalones) {
            await page.goto(enlacePantalones);
            await page.waitForTimeout(1000);

            try {
                const prendaPantalones = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaPantalones);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE PANTALONES========================== 



        //====================HOMBRE VAQUEROS==========================
        await page.goto('https://shop.mango.com/co/hombre/vaqueros_c16600994');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesVaqueros = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksVaqueros = [];
            for (let element of elements) {
                linksVaqueros.push(element.href);
            }
            return linksVaqueros;
        });

        for (let enlaceVaqueros of enlacesVaqueros) {
            await page.goto(enlaceVaqueros);
            await page.waitForTimeout(1000);

            try {
                const prendaVaqueros = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaVaqueros);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE VAQUEROS==========================     



        //====================HOMBRE BAÑADORES==========================
        await page.goto('https://shop.mango.com/co/hombre/banadores_c30599202');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesBañadores = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksBañadores = [];
            for (let element of elements) {
                linksBañadores.push(element.href);
            }
            return linksBañadores;
        });

        for (let enlaceBañadores of enlacesBañadores) {
            await page.goto(enlaceBañadores);
            await page.waitForTimeout(1000);

            try {
                const prendaBañadores = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaBañadores);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE BAÑADORES==========================  



        //====================HOMBRE ROPA DEPORTIVA==========================
        await page.goto('https://shop.mango.com/co/hombre/ropa-deportiva_c35955490');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesDeportiva = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksDeportiva = [];
            for (let element of elements) {
                linksDeportiva.push(element.href);
            }
            return linksDeportiva;
        });

        for (let enlaceDeportiva of enlacesDeportiva) {
            await page.goto(enlaceDeportiva);
            await page.waitForTimeout(1000);

            try {
                const prendaDeportiva = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaDeportiva);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE ROPA DEPORTIVA==========================     


        //====================HOMBRE PIJAMA Y ROPA INTERIOR==========================
        await page.goto('https://shop.mango.com/co/hombre/pijamas-y-ropa-interior_c12358808');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesInterior = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksInterior = [];
            for (let element of elements) {
                linksInterior.push(element.href);
            }
            return linksInterior;
        });

        for (let enlaceInterior of enlacesInterior) {
            await page.goto(enlaceInterior);
            await page.waitForTimeout(1000);

            try {
                const prendaInterior = await page.evaluate(() => {

                    const currentURL = window.location.href;

                    const prenda = {};
                    prenda.enlaceProducto = currentURL;
                    prenda.categoria = document.querySelector('title').textContent;
                    prenda.nombre = document.querySelector('#app > main > div > div.product-actions > .product-features-prices > .product-features > h1').textContent;
                    prenda.precio = document.querySelector('#app > main > div > div > div > .product-prices > .product-sale').textContent;
                    prenda.descripcion = document.querySelector('#app > main > div > .product-info > div > div > p').textContent;
                    prenda.enlaceImagen = document.querySelector('#renderedImages > ul > li > div > img').src;
                    return prenda;
                });
                prendasH.push(prendaInterior);
            } catch (error) {

            }
        }
        console.log(prendasH);
        //====================HOMBRE PIJAMA Y ROPA INTERIOR==========================     

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