let amigo = {nome: 'Ricardo', sexo: 'M', 
peso: '60', idade: 1, maturo(idade){
    if(this.idade <= 11){
        console.log('criança!')
    }else if(this.idade >= 13 && this.idade <= 18){
        console.log('adolescente!')
    }else if(this.idade >= 18 && this.idade <= 150){
        console.log('adulto!')
    }
}}
console.log(`${amigo.nome} é `)
amigo.maturo()
