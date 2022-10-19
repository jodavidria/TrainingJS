
//Funciones en un objetos y sus propiedades
//Se llaman metodos de Propiedad

const reproductor = {

    reproducir: function(id){
        console.log(`reproduciendo cancion ${id}`)
    },

    pausar: function(id){
        console.log(`pausando cancion ${id}`)
    },

    crearPlaylist: function(cancion){
        console.log(`se agrego la cancion ${cancion}`)
    },

    reproducirPlaylist: function(nombre){
        console.log(`la playlist ${nombre} se esta reproduciendo`)
    }
}

reproductor.reproducir(30);
reproductor.reproducir(32);
reproductor.reproducir(34);

reproductor.pausar(32);

//agrega funcion al objeto
reproductor.agregarCancion = function(cancion){

    console.log(`se agregó la cancion ${cancion}`);

}

reproductor.agregarCancion('paranoid');