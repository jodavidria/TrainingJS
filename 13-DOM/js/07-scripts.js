
//modifica los estilos de los elementos
// const encabezado = document.querySelector('h1');
// console.log(encabezado);

// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';

//obtener, agregar y eliminar clases
const card = document.querySelector('.card');
card.classList.add('nueva-clase');//agrega clase al elemento HTML
card.classList.add('otra-clase', 'y-otra');
card.classList.remove('card')//borra una clase
console.log(card.classList);// muestra la o las clases


