const puppeteer = require('puppeteer');
const autoScroll = require("../../autoScrollFunction");
const getScraping = require("../../mangoCtl");
const Url = require("../../linksUrls")

exports.miniKids = async () => {
    const browser = await puppeteer.launch({headless: true});

    const miniKidsNew = Url.miniKidsLinkMango;

    try {
        const page = await browser.newPage();

        //====================CATEGORIAS HOMBRE===========================
        const prendasMiniKids = [];
        //let count = 2;

        await page.goto(miniKidsNew, { waitUntil: "networkidle2" });
        await page.setViewport({width: 920, height: 1080});
        await page.waitForTimeout(5000);

        await page.hover('#kids');
        await page.waitForTimeout(1000);
        await page.hover('#section-detail-nav-newBorn > div > span:nth-child(1)');

        await page.waitForTimeout(3000);

        const enlaces = await page.evaluate(() => {
            const elements = document.querySelectorAll("ul.section-detail:nth-child(2) > li > a");
            const links = [];
            for (let element of elements) {
                links.push(element.href);
            }
            return links;
        });
        //console.log(enlaces);

        for (let enlacehombre of enlaces) {
            try {

                await page.goto(enlacehombre);

            } catch (error) {
                console.log("No se ha encontrado un enlace");
            }
            console.log("Ingresando a: " + enlacehombre);

            await page.waitForTimeout(5000);
            await autoScroll(page);

            const enlaces = await page.evaluate(() => {
                const elements = document.querySelectorAll(".yoqzg > a");

                const productos = [];
                for (let element of elements) {
                    productos.push(element.href);
                }
                return productos;
            });

            for (let enlace of enlaces) {
                try {
                    await page.goto(enlace);
                    await autoScroll(page);
                    //await page.waitForTimeout(2000);

                    const prendas = await page.evaluate(() => {
                        const currentURL = window.location.href;
                        const http = 'https:';
                        const prenda = {};
                        prenda.enlaceProducto = currentURL;
                        prenda.tipoPrenda = document.querySelector(
                            "#app > main > div > .product-info > div > div:nth-child(1) > ol > li:nth-child(2) > a > span"
                        ).textContent;
                        prenda.imageName = document.querySelector(
                            "#app > main > div > div > div > div > .product-name"
                        ).textContent;
                        prenda.precio = document.querySelector(
                            "#app > main > div > div > div > div > .product-sale"
                        ).textContent;
                        prenda.caracteristicas = document.querySelector(
                            "#app > main > div > div.product-info > div > div > p"
                        ).textContent;
                        prenda.caracteristicas = prenda.caracteristicas.split("."); // probando para separar por caracteristicas
                        prenda.caracteristicas.pop();
                        prenda.enlaceImagen = http;
                        prenda.enlaceImagen += document.querySelector(
                            "#renderedImages > ul > li > div > img"
                        ).src;
                        prenda.categoria = "Niño";
                        prenda.marca = "Mango";
                        prenda.tag = "";
                        prenda.descuento = "";
                        prenda.talla = Array.from(document.querySelectorAll('#sizeSelector > div > span'), xTallas => xTallas.textContent);
                        prenda.color = document.querySelector('#app > main > div > div > div > div.colors-info > span').textContent;
                        prenda.color = prenda.color.split(' ')[0];
                        prenda.color = prenda.color.toLowerCase();
                        prenda.materiales = document.querySelector('#app > main > div > .product-info > div > div > div > p').textContent;

                        return prenda;
                    });
                    //count--;
                    prendasMiniKids.push(prendas);
                    //if (count === 0) {
                        //break;
                    //}
                } catch (error) {
                    //console.log(error.message);
                }
            }
            
            //console.log(prendasMiniKids);
            await getScraping.getscraping(prendasMiniKids);

            if (count === 0) {
                break;
            }
        }

        //====================CATEGORIAS HOMBRE===========================
    } catch (err) {
        console.error(`error en el link = ${miniKidsNew} - error = ${err.message}`);
    } finally {
        await browser.close();
    }
};