let valores = [1, 3, 4, 6, 9, 5, 2, 7, 8]
valores.sort()
/*console.log(`${valores}`)
for(let pos = 0 ; pos<valores.length ;pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}