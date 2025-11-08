import express from "express"

const app = express()

//fala para o serviço conseguir interpretar em JSON
app.use(express.json())


// serviço = API

// rota que o cliente irá solicitar
//get com a rota / é a rota padrao
app.get("/", (req,res) =>{
    res.send("Primeiro dia com node")
})

//rota usuario1
app.get("/usuario/:id",(req,res)=>{
    let id = req.params.id
    res.send(`O cliente esta querendo ver o usuario com o id ${id}`)
})

//uma rota que receba 2 parametros e exiba em formato de objeto
app.get("/aluno/:nome/:curso",(req,res)=>{
    let nome = req.params.nome
    let curso = req.params.curso

    const aluno = {
        nome:nome,
        curso:curso
    }

    res.send(aluno)
})

let frutas = ['melancia','morango','maçã','maracujá']

//crie uma rota chamada fruta com metodo post
app.post("/fruta",(req,res)=>{
    const novaFruta = req.body.nome
     
    //insere na ultima posição
    frutas.push(novaFruta)
    res.send('fruta cadastrada com sucesso')
})

app.get('/fruta',(req,res)=>{

    res.send(frutas)
})

app.put('/fruta/:posicao',(req,res)=>{

    //acessamos a posição da fruta desejada e atribuímus um novo valor
    frutas[req.params.posicao] = req.body.nome

    res.send('fruta alterada com sucesso')
})

//crie uma rota para deletar a fruta pelo índice
app.delete('/fruta/:posicao',(req,res)=>{

    frutas.splice(req.params.posicao,1)

    res.send('fruta deletada com sucesso')
})

// app listen precisa estar como a ultima instrução
app.listen(3000, ()=>{
    console.log("Iniciando minha API com express")
})