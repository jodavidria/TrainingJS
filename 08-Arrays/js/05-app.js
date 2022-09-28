const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//agregar al final del arreglo
meses.push('Junio');

console.table(meses);

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

//Agrega los objetos-productos al array
carrito.push(producto);

carrito.push(producto2);

const producto3 = {
    nombre: 'TV LED',
    precio: 500,
    disponible: false
}

//agrega el objeto al inicio del array
carrito.unshift(producto3);

console.table(carrito)

//la aNTERIOR ES LA FORMA IMPERATIVA DE TRABAJAR CON LOS ARRAYS