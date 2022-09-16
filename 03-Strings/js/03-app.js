//formas de concatenar 
const otroProd = "ipad 13 "
const precio = '$50 usd'

console.log(otroProd.concat(precio))

console.log(otroProd.concat('300 EU'))

console.log(otroProd + 'a precio de ' + precio)

//Template literals - nueva forma en ECMAScript6
console.log(`El producto ${otroProd} tiene un precio de ${precio}`)