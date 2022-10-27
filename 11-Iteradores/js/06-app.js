
const pendientes = ['tarea', 'proyecto', 'estudio']

pendientes.forEach( (pendiente, indice) => console.log(`${indice} : ${pendiente}`))//foreach recibe variuos parametros los cuales podemos utilizar o no
//por ejemplo imprimir el indice




const carrito = [
    { nombre: '27 pul', precio: 500 },
    { nombre: '45 pul', precio: 600 },
    { nombre: '56 pul', precio: 700 },
    { nombre: '70 pul', precio: 800 },
    { nombre: '80 pul', precio: 900 },
    { nombre: '120 pul', precio: 1000 },

        
]

//carrito.forEach( producto => console.log(`${producto.nombre} ${producto.precio}`))//retorna todos los objetos

//diferencia entre foreach y map

const nuevoarreglo = carrito.forEach( producto => (producto.nombre + producto.precio))//retorna undefined

console.log(nuevoarreglo);

const nuevoarreglo2 = carrito.map( producto => (`${producto.nombre}  ${producto.precio}`))//retorna nuevo arreglo

console.log(nuevoarreglo2);