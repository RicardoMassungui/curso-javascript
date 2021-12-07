var kz = 10000000000000
console.log("|=============================================|")
console.log("|         Sistema de nivél monitário          |")
console.log("|=============================================|")
console.log(`#Valor em kwanza registada: ${kz}kz`)
if(kz <= 9){
    console.log("$Nivél monitário: Unidades de KZs!")
}else if(kz >= 10 && kz < 99){
    console.log("$Nivél monitário: Dezenas de KZs!")
}else if(kz >= 100 && kz < 999){
    console.log("$Nivél monitário: Centenas de KZs!")
}else if(kz >= 1000 && kz < 9999){
    console.log("$Nivél monitário: Milhares de KZs!")
}else if(kz >= 10000 && kz < 99999){
console.log("$Nivél monitário: Dezenas de milhares de KZs!")
}else if(kz >= 100000 && kz < 999999){
    console.log("$Nivél monitário: Centenas de milhares de KZs!")
}else if(kz >= 1000000 && kz < 9999999){
    console.log("$Nivél monitário: Milhões de KZs!")
}else if(kz >= 10000000 && kz < 99999999){
    console.log("$Nivél monitário: Dezenas de milhões de KZs!")
}else if(kz >= 100000000 && kz < 999999999){
    console.log("$Nivél monitário: Centenas de milhões de KZs!")
}else if(kz >= 1000000000 && kz < 9999999999){
    console.log("$Nivél monitário: Bilhões de KZs!")
}else if(kz >= 10000000000 && kz < 99999999999){
    console.log("$Nivél monitário: Dezenas de bilhões de KZs")
}else if(kz >= 100000000000 && kz < 999999999999){
    console.log("$Nivél monitário: Centenas de bilhões de KZs")
}else if(kz >= 1000000000000 && kz < 9999999999999){
    console.log("$Nivél monitário: Trilhões de KZs")
}else{
    console.log("|$Nivél monitário: ?...")
    console.log("|»Aviso: Nm não registado temporáriamente!...")
}
console.log("|=============================================|")
