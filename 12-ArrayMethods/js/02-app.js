const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, i) => {
    if(mes === 'Marzo'){
        console.log(`Marzo esta en el indice ${i}`)
    }
})

//encontrar abril - array method findIndex
const indice = meses.findIndex( mes => mes === 'Mayo');
console.log(indice)

const indiceProd = carrito.findIndex( producto => producto.nombre === 'Television');
console.log(indiceProd);