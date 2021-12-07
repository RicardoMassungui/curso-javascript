var multiplicador = 2
var multiplicando = 1
console.log("=================================================")
console.log(`|  Tabuada de Multiplicação [${multiplicador}]  |`)
console.log("=================================================")
do{
    var produto = multiplicador * multiplicando
    console.log(`${multiplicador} x ${multiplicando} = ${produto}`)
    multiplicando++
}while(multiplicando<=12)
console.log("===============================")
console.log("|        Cálculo feito!       |")
console.log("|=============================|")