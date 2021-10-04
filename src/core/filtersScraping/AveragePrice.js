
exports.averagePriceYear = (arr) => {
    let precioPromedio = 0;   
    arr.forEach(element => {
      let { precio, descuento } = element;
      if(descuento !== null) {
          precioPromedio += descuento;
      } else{ 
      precioPromedio += precio;
      }
    });
    return parseInt((precioPromedio/arr.length).toFixed());     
    
}
