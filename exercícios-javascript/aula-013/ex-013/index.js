let amigo = {nome: 'Ricardo',
 sexo: 'M', peso: '60kg', 
 idade(m=0, a=0){
    this.peso = m / a**a
    if(this.peso < 17){
    console.log('muito abaixo do peso!')
    }else if(this.peso >= 18.5 && this.peso < 25){
        console.log('Peso ideal!')
    
   }
  }
 }
console.log(`Nome: ${amigo.nome}`)
amigo.idade(60, 1.73)
