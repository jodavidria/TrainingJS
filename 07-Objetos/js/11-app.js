//object literal - menos dinamico pero se utilizas mas
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,

}

//object constructor - mas dinamico pero se utilizas menos
function Producto(nombre, precio){
    
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Ipad', 300)
console.log(producto2)

const producto3 = new Producto('Iphone', 200)
console.log(producto3)