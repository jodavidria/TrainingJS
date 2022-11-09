const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//comprobar si un valor existe en un arreglo
meses.forEach( mes => {

    if(mes === 'Enero'){
        console.log('El mes si existe')
    }
})

//Array method - Includes solo para arreglo de indice, no soporta arreglo de objetos
const resultado = meses.includes('Enero');
console.log(resultado);

//Para arreglo de objetos funciona some
const existe = carrito.some( producto => producto.nombre === 'Television');
console.log(existe);

//Para arreglo de indice tambn funciona some
const existe2 = meses.some( mes => mes === 'Enero');
console.log(existe2);