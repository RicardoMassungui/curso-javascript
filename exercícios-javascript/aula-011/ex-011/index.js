let n = [3, 2, 1, 4, 5]
n[5]=6
n.push(8)
n.sort()
console.log(`${n}`)
console.log("=================================")
console.log(`o vetor tem ${n.length} posições`)
console.log(`o primeiro valor do vetor é ${n[0]}`)
console.log(`o último valor do vetor é ${n[6]}`)
let pos = n.indexOf()
if(pos == -1){
    console.log(`valor não existente!`)
}else{
    console.log(`o valor ${n[pos]} encontra-se na posição ${pos}`)
}