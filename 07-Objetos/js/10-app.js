// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,

    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,

    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

producto.mostrarInfo()
producto2.mostrarInfo()