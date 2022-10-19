//Funciones normales

// const reproductor = {

//     reproducir: function(id){
//         console.log(`reproduciendo cancion ${id}`)
//     },

//     pausar: function(id){
//         console.log(`pausando cancion ${id}`)
//     },

//     crearPlaylist: function(nombreCancion){
//         console.log(`se agrego la cancion ${nombreCancion}`)
//     },

//     reproducirPlaylist: function(nombre){
//         console.log(`la playlist ${nombre} se esta reproduciendo`)
//     }

    
// }

//Array functions
const reproductor = {

    cancion: '',
    reproducir: id => console.log(`reproduciendo cancion ${id}`),
    pausar: () => console.log('pausando cancion ...'),
    crearPlaylist: nombrePlaylist => console.log(`se agrego la playlist ${nombrePlaylist}`),
    reproducirPlaylist: nombre => console.log(`la playlist ${nombre} se esta reproduciendo`),

    //Set nad Get
    set nuevaCancion(cancion){

        this.cancion = cancion;
        console.log(`se añade cancion ${cancion}`)
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Still of the night';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(32);
reproductor.reproducir(34);
reproductor.pausar();
reproductor.crearPlaylist('80s rock');
reproductor.reproducirPlaylist('Old blues');

