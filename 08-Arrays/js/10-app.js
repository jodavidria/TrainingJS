//arreglo de objetos
const carrito = [
    { nombre: '27 pul', precio: 500 },
    { nombre: '45 pul', precio: 600 },
    { nombre: '56 pul', precio: 700 },
    { nombre: '70 pul', precio: 800 },
    { nombre: '80 pul', precio: 900 },
    { nombre: '120 pul', precio: 1000 },

        
]

//map para recorrer Arrays - map crea un nuevo arreglo 
//por ejemplo crear un nuevo arreglo con productos que cuesten mas de 300
const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre}, ${producto.precio}`
})


//forEach no puede crear un nuevo arreglo
const nuevoArreglo2 = carrito.forEach( function(producto){
    return `${producto.nombre}, ${producto.precio}`
})

console.log(nuevoArreglo);//devuelve el arreglo completo

console.log(nuevoArreglo2);//devuelve undefined