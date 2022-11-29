
const encabezado = document.querySelector( '.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

// Cual es la diferencia entre estas 3... bueno, si le ponemos a ese elemento visibility: hidden; en el CSS, 

// Puedes ver que innerText no puede acceder a ese contenido...

// Ahora, si añadimos algo de HTML, 

// TextContent va a ignorar esas etiquetas HTML y traer solo el texto, mientras que innerhTML si se trae el HTML.


// modificar contenido de h1
const nuevoHeading = 'Nuevo Titulo';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

// modificar imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';

