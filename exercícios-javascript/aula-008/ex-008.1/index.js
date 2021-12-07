var velocidade = 100
var idade = 17 
console.log("|================================================|")
console.log("|               Sistema de trânsito              |")
console.log("|================================================|")
console.log(`| velocidade percorrida registada: ${velocidade}`)
console.log(`| idade do condutor(a): ${idade}`)
console.log("|========================================================|")
if(velocidade>=60 && idade < 18){
    console.log(`| #Status_velocidade: Multado! por excesso de velocidade`)
    console.log(`| #Status_Idade: (${idade} anos), menor de idade!`)
}
console.log("|========================================================|")
console.log("| Atenção! dirija sempre com o cinto de segurança.       |")
console.log("|========================================================|")


var país = "angola"
console.log("|=================================|")
console.log("|    Sistema de nacionalidade     |")
console.log("|=================================|")
console.log(`| país referencial: ${país}`)
console.log("|==================================|")
if (país!="frança"){
    
    console.log(`| #Status_estado: Estrangeiro! `)
}
console.log("|==================================|")
console.log("| #Status_nacionalidade: Angolano!")
console.log("|==================================|")