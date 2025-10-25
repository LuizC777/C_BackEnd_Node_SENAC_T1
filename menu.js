//instalando a lib
import PromptSync from "prompt-sync"

//acionando a function da lib
let prompt = PromptSync()

//class é um modelo de algo (obj)
class Pessoa {

    #senha // atributo privado

    constructor(nome, idade, DataNasc, senha,cpf) {
        this.nome = nome
        this.idade = idade
        this.DataNasc = new Date(DataNasc).toLocaleString('pt-BR')
        this.#senha = senha
        this.cpf = cpf
        
    }
    apresentar(){
        console.log( `Olá meu nome é ${this.nome}, tenho ${this.idade} anos`)
    }

    get senha() {
        
        let exibir = prompt('Exibir senha? (s/n):  ')

        if (exibir == 's'){

            let verif = prompt('Insira CPF: ')
            if (verif == this.cpf){
                return this.#senha
                    
                } 
                else {
                    return 'CPF incorreto. '

                }
            }
            
        }    
}

let nomePessoa = prompt('Digite seu nome: ')
let idadePessoa = parseInt(prompt('Digite sua idade: '))
let dataNascPessoa = prompt('Digite sua data de nascimento(ano, mes, dia): ')
let senhaPessoa = prompt('Digite sua senha: ')
let CPFPessoa = prompt('Digite CPF: ')

//criando obj
const novaPessoa = new Pessoa(nomePessoa, idadePessoa, dataNascPessoa,senhaPessoa, CPFPessoa)

novaPessoa.apresentar()
novaPessoa.senha
console.log(novaPessoa);