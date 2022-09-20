const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,

}

console.log( Object.keys(producto) );//devuelve las llaves o atributos del objeto, 
//puede servir para saber si un objeto esta vacio, para validar la consulta en BD, saber si el objeto tiene datos o no

console.log( Object.values(producto) );//devuelve los valores del objeto

console.log( Object.entries(producto) );//devuelve los atributos y valores del objeto, 