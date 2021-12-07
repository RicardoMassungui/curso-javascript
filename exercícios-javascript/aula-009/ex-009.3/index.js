var atual = new Date()
var ds = atual.getDay()
console.log("|============================================|")
console.log("|               Dias da semana               |")
console.log("|============================================|")
console.log(`JS: ${ds}`)
switch(ds){
    case 0:
        console.log("Dia de semana: Domingo!")
        break;
    case 1:
        console.log("Dia de semana: Segunda-feira!")
        break;
    case 2:
        console.log("Dia de semana: Terça-feira!")
        break;
    case 3:
        console.log("Dia de semana: Quarta-feira!")
        break;
    case 4:
        console.log("Dia de semana: Quinta-feira!")
        break;
    case 5:
        console.log("Dia de semana: Sexta-feira!")
        break;
    case 6:
        console.log("Dia de semana: Sabádo!")
        break;
    default: 
        console.log("[ERRO!] dia inválido!")
    }
console.log("|============================================|")

