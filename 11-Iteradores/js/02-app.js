const carrito = [
    { nombre: '27 pul', precio: 500 },
    { nombre: '45 pul', precio: 600, descuento: false},
    { nombre: '56 pul', precio: 700, descuento: true },
    { nombre: '70 pul', precio: 800 },
    { nombre: '80 pul', precio: 900 },
    { nombre: '120 pul', precio: 1000 },

]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){

    //console.log(carrito[i].nombre)

    if(carrito[i].descuento){

        console.log(`el articulo ${carrito[i].nombre} tiene descuento`)
        continue;
        //break;
    }

    console.log(carrito[i].nombre) 

} 