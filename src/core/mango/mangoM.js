const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    }); //headless true/false para visualizar el navegador
    try {
        const page = await browser.newPage();

        const prendasM = [];

        //====================MUJER VESTIDOS Y MONOS===========================
        await page.goto('https://shop.mango.com/co/mujer/vestidos-y-monos_c20249297');
        await page.waitForTimeout(1000);
        await autoScroll(page);

        const enlacesVestidos = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksVestidos = [];
            for (let element of elements) {
                linksVestidos.push(element.href);
            }
            return linksVestidos;
        });

        for (let enlaceVestidos of enlacesVestidos) {
            await page.goto(enlaceVestidos);
            await page.waitForTimeout(1000);

            try {
                const prendaVestidos = await page.evaluate(() => {

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
                prendasM.push(prendaVestidos);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER VESTIDOS Y MONOS===========================



        //====================MUJER CAMISAS===========================
        await page.goto('https://shop.mango.com/co/mujer/camisas_c78920337');
        await page.waitForTimeout(2000);
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
                prendasM.push(prendaCamisas);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER CAMISAS===========================



        //====================MUJER CAMISETAS Y TOPS===========================
        await page.goto('https://shop.mango.com/co/mujer/camisetas-y-tops_c66796663');
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
                prendasM.push(prendaCamisetas);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER CAMISETAS Y TOPS===========================



        //====================MUJER CARDIGANS Y JERSEIS==========================
        await page.goto('https://shop.mango.com/co/mujer/cardigans-y-jerseis_c18200786');
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
                prendasM.push(prendaCardigans);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER CARDIGANS Y JERSEIS==========================  



        //====================MUJER SUDADERAS==========================
        await page.goto('https://shop.mango.com/co/mujer/sudaderas_c12454089');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesSudaderas = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksSudaderas = [];
            for (let element of elements) {
                linksSudaderas.push(element.href);
            }
            return linksSudaderas;
        });

        for (let enlaceSudaderas of enlacesSudaderas) {
            await page.goto(enlaceSudaderas);
            await page.waitForTimeout(1000);

            try {
                const prendaSudaderas = await page.evaluate(() => {

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
                prendasM.push(prendaSudaderas);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER SUDADERAS==========================  



        //====================MUJER CHAQUETAS Y SOBRECAMISAS==========================
        await page.goto('https://shop.mango.com/co/mujer/chaquetas-y-sobrecamisas_c14845233');
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
                prendasM.push(prendaChaquetas);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER CHAQUETAS Y SOBRECAMISAS========================== 



        //====================MUJER ABRIGOS==========================
        await page.goto('https://shop.mango.com/co/mujer/abrigos_c67886633');
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
                prendasM.push(prendaAbrigos);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER ABRIGOS========================== 



        //====================MUJER PANTALONES==========================
        await page.goto('https://shop.mango.com/co/mujer/pantalones_c52748027');
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
                prendasM.push(prendaPantalones);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER PANTALONES==========================     



        //====================MUJER VAQUEROS==========================
        await page.goto('https://shop.mango.com/co/mujer/vaqueros_c12563337');
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
                prendasM.push(prendaVaqueros);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER VAQUEROS==========================



        //====================MUJER FALDAS==========================
        await page.goto('https://shop.mango.com/co/mujer/faldas_c20673898');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesFaldas = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksFaldas = [];
            for (let element of elements) {
                linksFaldas.push(element.href);
            }
            return linksFaldas;
        });

        for (let enlaceFaldas of enlacesFaldas) {
            await page.goto(enlaceFaldas);
            await page.waitForTimeout(1000);

            try {
                const prendaFaldas = await page.evaluate(() => {

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
                prendasM.push(prendaFaldas);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER FALDAS==========================   



        //====================MUJER SHORTS==========================
        await page.goto('https://shop.mango.com/co/mujer/shorts_c13128150');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesShorts = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksShorts = [];
            for (let element of elements) {
                linksShorts.push(element.href);
            }
            return linksShorts;
        });

        for (let enlaceShorts of enlacesShorts) {
            await page.goto(enlaceShorts);
            await page.waitForTimeout(1000);

            try {
                const prendaShorts = await page.evaluate(() => {

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
                prendasM.push(prendaShorts);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER SHORTS========================== 



        //====================MUJER ROPA DEPORTIVA==========================
        await page.goto('https://shop.mango.com/co/mujer/ropa-deportiva_c19503847');
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
                prendasM.push(prendaDeportiva);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER ROPA DEPORTIVA==========================     



        //====================MUJER ROPA INTERIOR Y LENCERIA==========================
        await page.goto('https://shop.mango.com/co/mujer/ropa-interior-y-lenceria_c11690027');
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
                prendasM.push(prendaInterior);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER ROPA INTERIOR Y LENCERIA==========================  



        //====================MUJER PIJAMAS==========================
        await page.goto('https://shop.mango.com/co/mujer/pijamas_c37765897');
        await page.waitForTimeout(2000);
        await autoScroll(page);

        const enlacesPijamas = await page.evaluate(() => {
            const elements = document.querySelectorAll('._10aZC > a');

            const linksPijamas = [];
            for (let element of elements) {
                linksPijamas.push(element.href);
            }
            return linksPijamas;
        });

        for (let enlacePijamas of enlacesPijamas) {
            await page.goto(enlacePijamas);
            await page.waitForTimeout(1000);

            try {
                const prendaPijamas = await page.evaluate(() => {

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
                prendasM.push(prendaPijamas);
            } catch (error) {

            }
        }
        console.log(prendasM);
        //====================MUJER PIJAMAS==========================     

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