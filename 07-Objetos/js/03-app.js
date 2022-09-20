const producto = {

    nombre: "Tablet 17 pulgadas",
    precio: 300,
    disponible: true
}

//agregar mas propiedades al objeto
producto.imagen = "miImagen.JPG";

//para eliminar propiedades
delete producto.disponible;

console.log(producto)