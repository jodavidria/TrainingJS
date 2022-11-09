const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//filter
let resultado;

resultado = carrito.filter( producto => producto.precio > 300);
resultado = carrito.filter( producto => producto.precio < 200);
resultado = carrito.filter( producto => producto.precio == 100);//filter trae todos los q cumplan la condicion, find no
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos');
resultado = carrito.filter( producto => producto.nombre === 'Audifonos');




console.log(resultado);