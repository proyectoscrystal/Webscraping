// scraping categorias zara
const fs = require("fs");
const mangoScraping = require("./mangoCtl");
const zaraScraping = require("./zaraCtl");
const cron = require("node-cron");

const scrapingPrueba = require('./zaraCtl');

let Scraping = async (req, res) => {
  //  uso de fs
  let hora1 = new Date();
  console.log(`Hora ${hora1.getHours()} : ${hora1.getMinutes()}`);
  let lyrics1 = `Hora ${hora1.getHours().toString()} : ${hora1
    .getMinutes()
    .toString()}`;
  // write to a new file named 2pac.txt
  fs.writeFile("horaInicio.txt", lyrics1, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    // success case, the file was saved
    console.log("Hora guardada!");
  });

  //

  await mangoScraping.getScrapingMango();

  await zaraScraping.getScrapingZara();

  //  uso de fs
  let hora = new Date();
  console.log(`Hora ${hora.getHours()} : ${hora.getMinutes()}`);
  let lyrics = `Hora ${hora.getHours().toString()} : ${hora
    .getMinutes()
    .toString()}`;
  // write to a new file named 2pac.txt
  fs.writeFile("horaFin.txt", lyrics, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;
    // success case, the file was saved
    console.log("Hora guardada!");
  });
};


// job para ejecutar el scraping de manera automatico
cron.schedule('00 17 * * *', async function() {
  console.log('running a scraping every day to 5 pm');
  let data = new Date().toUTCString();
  console.log(data);
  await Scraping();
});



