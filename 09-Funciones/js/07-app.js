//como se comunican las funciones
iniciandoLaApp();

function iniciandoLaApp() {

    console.log('Iniciando...')

    segundaFuncion();
}

function segundaFuncion() {

    console.log('desde la segunda funcion...')

    usuarioLogueado('Jonathan')
}

function usuarioLogueado(nombre) {

    console.log(`El usuario ${nombre} se ha logueado`)
}