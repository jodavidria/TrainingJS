//arreglo de objetos
const carrito = [
    { nombre: '27 pul', precio: 500 },
    { nombre: '45 pul', precio: 600 },
    { nombre: '56 pul', precio: 700 },
    { nombre: '70 pul', precio: 800 },
    { nombre: '80 pul', precio: 900 },
    { nombre: '120 pul', precio: 1000 },

        
]


//recorrer y pintar el arreglo
for(let i= 0; i < carrito.length; i++){

    console.log(i);
    console.log( carrito[i]);
}

//forEach para recorrer Arrays
carrito.forEach( function(producto){
    console.log(`${producto.nombre}, ${producto.precio}}`)
})

const producto2 = {
    nombre: 'IPAD',
    precio: 400
}

carrito.push(producto2);

carrito.forEach( function(producto){
    console.log(`${producto.nombre}, ${producto.precio}}`)
})