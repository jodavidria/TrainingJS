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

//extraer usando Destructuring
const {nombre, informacion, informacion:{medidas}} = producto

console.log(informacion)
console.log(medidas)