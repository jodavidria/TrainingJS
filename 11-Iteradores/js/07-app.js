
const pendientes = ['tarea', 'proyecto', 'estudio']

const carrito = [
    { nombre: '27 pul', precio: 500 },
    { nombre: '45 pul', precio: 600 },
    { nombre: '56 pul', precio: 700 },
    { nombre: '70 pul', precio: 800 },
    { nombre: '80 pul', precio: 900 },
    { nombre: '120 pul', precio: 1000 },

        
]

for(let pendiente of pendientes){

    console.log(pendiente)
}

for(let producto of carrito){

    console.log(producto.nombre)
}