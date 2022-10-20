//SWITCH CASE

const metodoPago = 'cheque';

switch(metodoPago){
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`pago con ${metodoPago}`)
        break;
    case 'tarjeta':
        console.log(`pago con ${metodoPago}`)
        break;
    default:
        console.log('metodo de pago no definido o invalido')
        break;
        

}

// function pagar(){
//     console.log(`Pagando...`);
// }

const pagar = () => console.log('Pagando...');

