//instalado a biblio que permite entrada de dados
import PromptSync from "prompt-sync";

//aciona a função da biblio
let prompt = PromptSync();


//class é um modelo de algo(objeto)
class Pessoa {

    //atributo privado
    #senha;

    //construtor constroi mais de um objeto
    //para por os valores de cada obj, colocamos via parametro
    constructor(nome, idade, dataNasc, senha, palavraChave) {
        this.nome = nome
        this.idade = idade
        this.dataNasc = new Date(dataNasc).toLocaleString("pt-BR")
        this.#senha = senha
        this.palavraChave = palavraChave
    }

    apresentar() {
        console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos`);
    }

    //metodo especial que permite eu gerenciar a visualizacao da senha
    get senha() {
        const palavraChave = prompt("Para ve a sua senha, você precisa digitar a palavra chave: ");

        //condicional simples
        if (this.palavraChave == palavraChave) {
            return this.#senha;
        }
        else {
            return "Foi mal, tente novamente!";
        }
    }
}

class Aluno extends Pessoa {

    constructor(nome,dataNasc,senha, ra) {
        super(nome, dataNasc, senha);
        this.ra = ra
    }
}

class Professor extends Pessoa {

    constructor(nome,dataNasc,senha, salario, registro) {
        super(nome, dataNasc, senha);
        this.salario = salario,
        this.registro = registro
    }

    apresentar(){
        console.log(`Olá sou o professor ${this.nome}, recebo ${this.salario} de salário, meu número de registro é ${this.registro}`)
    }
}

let nomePessoa = prompt("Digite o seu nome: ");
let idadePessoa = parseInt(prompt("Digite o sua idade: "));
let dataNascPessoa = prompt("Digite sua data de nascimento no formato AAAA/MM/DD: ");
let senhaPessoa = prompt("Digite sua senha: ");
let palavraChavePessoa = prompt("Digite a palavra-chave, caso um dia queira ver a sua senha: ");

//criando o objeto
const novaPessoa = new Pessoa(
    nomePessoa,
    idadePessoa,
    dataNascPessoa,
    senhaPessoa,
    palavraChavePessoa
);

//aciona a função do objeto já criado
novaPessoa.apresentar();
//acionando ver a senha
novaPessoa.senha

//exibir todo o objeto
// console.log(novaPessoa);

const tipoPessoa = prompt('Professor - 1\nAluno - 2\nDigite qual você é: ')

if (tipoPessoa == 1) {
    let salarioPessoa = prompt('Digite seu salário: ')
    let registroPessoa = prompt('Digite seu número de registro: ')

    const novoProfessor = new Professor(nomePessoa,dataNascPessoa,palavraChavePessoa,salarioPessoa, registroPessoa)
    console.log(novoProfessor);

} else if (tipoPessoa == 2) {
    let raPessoa = prompt('Digite seu RA: ')

    const novoAluno = new Aluno(nomePessoa,dataNascPessoa,palavraChavePessoa, raPessoa)
    console.log(novoAluno);
}