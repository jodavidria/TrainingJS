
// for(let i = 0; i <= 20; i++){

//     if( i % 2 === 0){
//         console.log(`el numero ${i} es par`)
//     }else{

//         console.log(`el numero ${i} es impar`)

//     }
// }

const carrito = [
    { nombre: '27 pul', precio: 500 },
    { nombre: '45 pul', precio: 600 },
    { nombre: '56 pul', precio: 700 },
    { nombre: '70 pul', precio: 800 },
    { nombre: '80 pul', precio: 900 },
    { nombre: '120 pul', precio: 1000 },

]

for(let i = 0; i < carrito.length; i++){

    console.log(carrito[i].precio)
}