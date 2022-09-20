//objeto dentro de objeto
const producto = {

    nombre: "Tablet 17 pulgadas",
    precio: 300,
    disponible: true,
    informacion:{

        medidas:{
            peso: "2kg",
        medida: "15 cm"
        },

        fabricacion:{
            pais: "china"
        }
        

    }
}

//accede al objeto dentro del objeto
console.log(producto.informacion)

//accede a atributo dentro del objeto dentro del objeto
//console.log(producto.informacion.peso)

//el objeto puede ser tan complejo como se necesite
console.log(producto.informacion.medidas)

console.log(producto.informacion.fabricacion.pais)

