const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//every

const resultado = carrito.every( producto => producto.precio < 600);//todos los objetos deben cumplir la condicion, sino devuelve false
console.log(resultado);

//some
const resultado2 = carrito.some( producto => producto.precio < 500);//uno o varios objetos cumplen la condicion
console.log(resultado2);