const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//sumar valores con forEach
let total = 0;

const resultado = carrito.forEach( producto => total += producto.precio);
console.log(total)

//sumar valores con reduce
const resultado2 = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(total)