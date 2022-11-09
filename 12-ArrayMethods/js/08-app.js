const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//spread operator con arreglo de indices
const meses2 = [...meses, 'agosto'];//agrega un mes
console.log(meses2);

//spread operator con arreglo de objetos
const producto = { nombre: 'iphone', precio: 800};

const carrito2 = [...carrito, producto];
console.log(carrito2);