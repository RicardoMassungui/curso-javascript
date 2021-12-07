function parimpar(n){
    if(n%2==0){
        return `o número ${n} é par!`
    }else{
        return `o número ${n} é impar!`
    }
}
console.log(parimpar(1))
/*let res = parimpar(22)
console.log(res)*/

function soma(n1, n2){
    return n1 + n2
}
/*let res = soma(2, 4)
console.log(O total da soma equivale a ${res})*/
console.log(`O total da soma equivale a ${soma(4, 2)}`)