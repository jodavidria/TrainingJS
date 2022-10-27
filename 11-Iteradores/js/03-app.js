// FIZZ BUZZ CHALLENGE - NUMEROS DE 1 A 100

// MULTIPLOS DE 2 - FIZZ
// MULTIPLOS DE 3 - BUZZ
// MULTIPLOS DE AMBOS - FIZZ BUZZ

for(let i = 1; i <= 100; i++){

    if( i % 3 === 0 && i % 5 === 0){
        console.log(`numero ${i} FIZZ BUZZ`)
    }else if( i % 3 === 0){
        console.log(`numero ${i} FIZZ`)
    }else if( i % 5 === 0){
        console.log(`numero ${i} buzz`)
    }
}