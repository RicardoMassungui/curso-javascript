media1 = [1,2,3]
nome = [1,2,3]

nome[1]="Luiza"
nome[2]="Pedro"
nome[3]="Ricardo"

n1 = [1,2,3]
n2 = [1,2,3]

n1[1]=19
n1[2]=20
n1[3]=1

n2[1]=12
n2[2]=9
n2[3]=10


    
    for(let c = 1; c <= 3; c++){
    media1[c] = (n1[c]+n2[c])/2
    console.log(`${nome[c]}  | ${media1[c]}`)
    
}
