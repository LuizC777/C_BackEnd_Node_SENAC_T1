// objeto

const pessoa = {
    
    nome:'Cleiton', // ano  mes dia h  m
    DataNasc: new Date(1977, 11, 2, 7, 30).toLocaleString('pt-BR'),
    altura: 173,
    peso: 87,
    senha: '123a',
    idade: 28,
    
    maiorDeIdade(){
        if (this.idade >= 18){
            return 'maior de idade'
        }   else {
            return 'menor de idade'
        }
    },
    apresentar(){
        return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.maiorDeIdade()}`
    },
}

console.log(pessoa)
console.log(pessoa.apresentar());
