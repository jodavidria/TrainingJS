
let i = 0;

while(i < 100){


    if( i % 3 === 0 && i % 5 === 0){
        console.log(`numero ${i} FIZZ BUZZ`)
    }else if( i % 3 === 0){
        console.log(`numero ${i} FIZZ`)
    }else if( i % 5 === 0){
        console.log(`numero ${i} buzz`)
    }


    i++
}