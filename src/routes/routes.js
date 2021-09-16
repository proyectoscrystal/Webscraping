/**
 * *Archivo de rutas de la plataforma
 */

const multer = require("multer");
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single("image");

const Business = require("../core/business");
const auth = require("../auth/auth.controller");
const Scraping = require("../core/Scraping");

module.exports = (router) => {
  router.get("/getImages", auth.verifyToken, Business.getImages);
  router.get("/getImage/:id", auth.verifyToken, Business.getImage);
  router.get("/webScraping", Scraping.Scraping);
  router.post("/deleteImage", auth.verifyToken, Business.deleteImage);
  router.post("/deleteFeature", auth.verifyToken, Business.deleteFeature);
  router.post("/deletePrendaGen", auth.verifyToken, Business.deletePrendaGen);
  router.post("/deleteInferior", auth.verifyToken, Business.deleteInferior);
  router.post("/updateFeature", auth.verifyToken, Business.updateFeature);
  router.post("/updatePrendaGen", auth.verifyToken, Business.updatePrendaGen);
  router.post("/updatePrendaInf", auth.verifyToken, Business.updatePrendaInf);
  router.post("/updateColor", auth.verifyToken, Business.updateColor);
  router.post("/deleteColor", auth.verifyToken, Business.deleteColor);
  router.get("/getImagesFilter", auth.verifyToken, Business.getImagesFilter);
  router.get("/sendFilter", Business.sendFilter);
  router.post("/sendImgsModel", Business.sendImgsModel); // analizar esta ruta y su controller
  router.post("/filtroImagen", Business.filtroImagen);
  router.post("/filterText", Business.filterText);
  router.post("/updateInfo", Business.updateInfo);
  router.post("/deletePrendaColor", Business.deletePrendaColor);
  

  // Authentication routes
  router.post("/register", auth.register);
  router.post("/login", auth.login);
  router.get("/private", auth.verifyToken, auth.privateRoute);

  // router.get('/test', Business.test);
};
