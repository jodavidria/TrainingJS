const producto = {

    nombre: "Tablet 17 pulgadas",
    precio: 300,
    disponible: true
}

//asigna el atributo del objeto a una variable
//const nombre = producto.nombre;

//imprime el valor del nombre llamando la variable
//console.log(nombre)

//nueva forma -> Destructuring para objetos
//const { nombre } = producto;

//varios atributos en una sola linea
const { nombre, precio, disponible } = producto;

//Destructuring para Arrays
const numeros = [10, 20, 30, 40, 50];

const [primero] = numeros;

//console.log(primero);//devuelve 10

//console.log(primero);

const [elprimero, ...elresto] = numeros;//Spread operator - devueñve un arreglo con los valores desde la segunda posición
console.log(elresto);


const [, , , cuarto] = numeros;

console.log(cuarto);//devuelve 40

