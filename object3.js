let receta = {};

receta.nombre = "Sandwich";

receta.ingredientes = [];

receta.ingredientes.push({ nombre: "Pan", cantidad: 2 });

receta.ingredientes.push({ nombre: "Queso", cantidad: 1 });

console.log(receta.ingredientes[0].nombre);

var totalCantidad = 0;
for (var i = 0; i < receta.ingredientes.length; i++) {
  totalCantidad += receta.ingredientes[i].cantidad;
}

console.log("Cantidad total de ingredientes: " + totalCantidad);
