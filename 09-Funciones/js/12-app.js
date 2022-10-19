const carrito = [
    { nombre: '27 pul', precio: 500 },
    { nombre: '45 pul', precio: 600 },
    { nombre: '56 pul', precio: 700 },
    { nombre: '70 pul', precio: 800 },
    { nombre: '80 pul', precio: 900 },
    { nombre: '120 pul', precio: 1000 },

        
]

// const nuevoArreglo = carrito.map( function(producto){
//     return `${producto.nombre}, ${producto.precio}`
// })


//recorre arreglo con Map y Foreach pero usando arrow function
//const nuevoArreglo = carrito.map( (producto) =>  `${producto.nombre}, ${producto.precio}`)

carrito.forEach( (articulo) => console.log(`${articulo.nombre}, ${articulo.precio}`))

//console.log(nuevoArreglo)

// const nuevoArreglo2 = carrito.forEach( function(producto){
//     return `${producto.nombre}, ${producto.precio}`
// })