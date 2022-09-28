// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// //agregar al final del arreglo
// meses.push('Junio');

// console.table(meses);

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

const producto4 = {
    nombre: 'TV LED 50 pul',
    precio: 500,
    disponible: true
}

//agrega el objeto al inicio del array
carrito.unshift(producto3);
carrito.push(producto4);

console.table(carrito)



//la aNTERIOR ES LA FORMA IMPERATIVA DE TRABAJAR CON LOS ARRAYS

//Eliminar ultimo elemnto de un Array
// carrito.pop();

// console.table(carrito);

// carrito.pop();

// console.table(carrito);

//Eliminar primer elemnto de un Array
// carrito.shift();

// console.table(carrito);


//Elimina elementos de la mitad del Array
// el primer parametro es la posición del array, y el segundo la cantidad de elementos
//que quieres borrar de ahí en adelante
carrito.splice(1, 1)

console.table(carrito);