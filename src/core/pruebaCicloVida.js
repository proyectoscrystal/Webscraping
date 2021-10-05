const Business = require('../domain/model/businessDao');
const verificarSub = require('../utils/index');


let setSubCategory = (tipoPrenda) => {
  for (let index = 0; index < verificarSub.subCategoria.length; index++) {
    // console.log(`sub: ${verificarSub.subCategoria[index]} - tipo: ${verificarSub.tipoPrenda[index]}`);
    if (tipoPrenda === verificarSub.tipoPrenda[index]) {
      return  verificarSub.subCategoria[index];
    } 
  }

  return tipoPrenda;
}

exports.saveImagesDBPrueba = async (req, res) => {

  let subCategoria = '';
  let lower = req.body.tipoPrenda;

  try {
    
      lower = req.body.tipoPrenda.trim().toLowerCase();
  
      subCategoria = setSubCategory(lower);

    
  } catch (error) {
    // console.log(error);
  }

  

  // console.log(subCategoria);
  // res.json(subCategoria);
  
    try {
     
  
      const imageData = {
        imageName: req.body.imageName,
        base64: 'https://blackboxscraping.blob.core.windows.net/scraping/VESTIDO%20LARGO%20BRILLOS%20LIMITED%20EDITION', // aca va el valor de url del blobstorage
        year: req.body.year,
        origin: req.body.origin,
        quarter: req.body.quarter,
        user: req.body.user,
        categoria: req.body.categoria,
        precio: req.body.precio,
        tag: req.body.tag,
        descuento: req.body.descuento,
        caracteristicas: req.body.caracteristicas,
        talla: req.body.talla,
        color: req.body.color,
        materiales: req.body.materiales,
        numeroTallas: req.body.numeroTallas,
        estado: req.body.estado,
        enlaceImagen: req.body.enlaceImagen,
        tipoPrenda: req.body.tipoPrenda,
        subCategoria, 
      };
      

      try {
        // ciclo de vida de los productos

    //   nuevos
      let inBD = await Business.find({"enlaceImagen": imageData.enlaceImagen, "color": imageData.color});

      console.log(inBD);

      if (inBD.length !== 0 ) {

          if(inBD.estado === imageData.estado && inBD.enlaceImagen === imageData.enlaceImagen ){
            console.log('No ha cambiado el estado');
          } else if(inBD.estado !== imageData.estado ){

            console.log('guardo doc estado cambiado'); 
            await Business.create(imageData, (err) => {
                if (err && err.code === 11000) {
                  console.log("Imagen ya existe");
                } else {
                  console.log("Imagen guardada en bd");
                }
              });
          }

        //   https://st.mngbcn.com/rcs/pics/static/T8/fotos/S20/87030506_92.jpg?ts=1610442281227&imwidth=337&imdensity=1

        // 

        return res.json(imageData);
      } else {
          console.log('nuevo documento');
            await Business.create(imageData, (err) => {
            if (err && err.code === 11000) {
              console.log("Imagen ya existe");
            } else {
              console.log("Imagen guardada en bd");
            }
          });

          return res.json(imageData);
      }
        



      } catch (error) {
        console.log('error desde el ciclo de vida');
        console.log(error);
      }


  
      // metodo para guardar en la bd
      


    


    } catch (error) {
      console.log(error);
    }
}