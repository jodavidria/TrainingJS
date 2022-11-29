
// querySelector solo devuelve el primer elemento q encuentra
const card = document.querySelector( '.card' );
console.log(card);

// tambn puede usar selectotes especificos como en css
const info = document.querySelector( '.premium .info ');
console.log(info);

//seleccionar segunda card de una seccion
const cardDos = document.querySelector( 'section.hospedaje .card:nth-child(2)' );
console.log(cardDos);

//selecciona por ID
const formulario = document.querySelector( '#formulario');
console.log(formulario);

//selecciona elementos HTML
const navagacion = document.querySelector( 'nav' );
console.log(navagacion);