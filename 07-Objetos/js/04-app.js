const producto = {

    nombre: "Tablet 17 pulgadas",
    precio: 300,
    disponible: true
}

//asigna el atributo del objeto a una variable
//const nombre = producto.nombre;

//console.log(nombre)

//nueva forma -> Destructuring
//const { nombre } = producto;

//varios atributos en una sola linea
const { nombre, precio, disponible } = producto;


console.log(nombre)
console.log(precio)
console.log(disponible)