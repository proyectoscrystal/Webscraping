// 1 -  Consultar todas la imagenes de la base de datos

// # allImages = array con las imagenes de la base de datos

// # data = array con la imagenes del scraping

// # identificador = identificador de la imagen

// 2 implementar función para comparar arrays

  // async dataExist(allImages, data) {
  //   const faltantes = [];

  //   for (var i = 0; i < allImages.length; i++) {
  //     var igual = false;
  //     for (var j = 0; (j < data.length) & !igual; j++) {
  //       if (allImages[i]['identificador'] === data[j]['identificador'])
  //         igual = true
  //     }
  //     if (!igual) faltantes.push(allImages[i])
  //   }

  //   console.log(faltantes)

  //   let descontinuada = true;
  //   faltantes.forEach(async (e) => {
  //     e.descontinuada = descontinuada
  //     await imagesModel.updateImage(e);
  //   })


// 3 Actualizar documento en la base de datos.
