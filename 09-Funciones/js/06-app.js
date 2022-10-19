
//pueden haber argumentos q no se envian y se pueden definir algun default desde la funcion
function saludar(nombre, apellido = 'sin apellido') {

    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Jonathan')//retorna Hola Jonathan sin apellido

saludar('Jonathan', 'Riaño')//retorna Hola Jonathan Riaño y obvia el default


