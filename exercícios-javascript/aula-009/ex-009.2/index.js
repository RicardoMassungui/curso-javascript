var atual=new Date()
var hora=atual.getUTCHours()
console.log("|=========================================|")
console.log("|            Relógio Simpático            |")
console.log("|=========================================|")
console.log(`#Hora atual: ${hora} horas`)
if (hora <= 5){
    console.log("#Periódo diário: madrugada!")
    console.log("#Saudação: Boa madrugada!")
}else if(hora >= 6 && hora <= 11){
    console.log("#Periódo diário: Manhã!")
    console.log("#Saudação: Bom dia!")
}else if(hora >= 12 && hora <= 17){
    console.log("#Periódo diário: tarde!")
    console.log("#Saudação: Boa tarde!")
}else if(hora >= 18 && hora <= 23){
    console.log("#Periódo diário: noite!")
    console.log("#Saudação: Boa noite!")
}else{
    console.log("#Periódo diário: Desconhecido!?...")
    console.log("#Saudação: Desconhecido!?...")
}
console.log("|=========================================|")