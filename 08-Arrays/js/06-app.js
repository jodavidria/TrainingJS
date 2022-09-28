const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//agregar al final del arreglo
meses.push('Junio');

console.table(meses);

//array carrito de compras
const carrito = [];

const producto = {
    nombre: 'tablet',
    precio: 350,
    disponible: true
}

const producto2 = {
    nombre: 'IPAD',
    precio: 400,
    disponible: false
}


const producto3 = {
    nombre: 'TV LED',
    precio: 500,
    disponible: false
}

//forma declarativa de hacer push a un array - Spread operator
let resultado;

resultado = [...carrito, producto];

console.table(resultado);

//agrega otro producto-objeto
resultado = [...resultado, producto2];

console.table(resultado);


//agrega otro producto-objeto al inicio del array
resultado = [producto3, ...resultado];

console.table(resultado);

