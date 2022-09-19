
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


// Revisar si 2 valores son iguales o diferentes
console.log(numero1 == numero3);
console.log(numero1 == numero2); // == NO discrimina tipo de daro


// Typeof
console.log( typeof numero1 );
console.log( typeof numero2 );

// Operador estricto (revisa valor y tipo de dato)
console.log(numero1 === numero2 ); // == SI discrimina tipo de daro

// Diferente a 

console.log(numero1 != numero3);// ES DIFERENTE DE-..?
console.log(numero1 != numero2);
console.log(numero1 !== numero2);// ES DIFERENTE DE-..? COMPARADOR ESTRICTO