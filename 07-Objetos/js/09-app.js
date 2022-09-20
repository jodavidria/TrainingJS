const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

const medidas = {
    peso: "Monitor 20 pulgadas",
    medida: 30
   
}

//metodo para unir o copiar dos objetos
const resultado = Object.assign(producto, medidas)


//spread operator o Rest operator
const resultado2 = {...producto, ...medidas}

console.log(resultado)
console.log(resultado2)