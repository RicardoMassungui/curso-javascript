var idade = 17
console.log("|=============================|")
console.log("|       Sistema de Idade      |")
console.log("|=============================|")
console.log(`| #Idade: ${idade}          `)
console.log("|=============================|")
if (idade <= 11){
    console.log(`| #Status_Idade: (${idade} anos), Criança! `)
}else{
    console.log(`| #Status_Idade:  Adolescente!`)
} 
console.log("|=============================|")

var $nota = 20
console.log("|================================|")
console.log("|        Sistema de notas        |")
console.log("|================================|")
console.log("|    < 9 (inapto) / > 10 (apto)  |")
console.log("|==========================================|")
if($nota <= 9){
    console.log(`| #Status_Nota: [${$nota} valores], reprovado! `)
}else{
    console.log(`| #Status_Nota: aprovado! `)
}
console.log("|==========================================|")