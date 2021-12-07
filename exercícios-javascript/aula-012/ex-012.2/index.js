/*let v = function(x){
    return x*2
}
console.log(`O valor retornado foi: ${v(4)}`)*/

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
//5!=5x4x3x2x1
console.log(`m#1factorial_: ${fatorial(3)}`)

//conceito de recursividade aplicado no fatorial

/*

5!=5x4x3x2x1
5!=5x4

n!= n x (n-1)!
1!= 1

*/
function fat(n){
    if (n==1){
        return 1

    }else{
        return n * fat(n-1)
    }
}
console.log(`m#2factorial_: ${fat(4)}`)