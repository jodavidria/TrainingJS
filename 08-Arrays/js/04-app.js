const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

//a pesar de ser const, los arreglos permiten modificaciones y no se permiten sellar como los objetos,
//(feeze, sealed)
meses[1] = 'otro mes';

//permite agregar nueva posición y su valor
meses[6] = 'ultimo mes'

console.table(meses);