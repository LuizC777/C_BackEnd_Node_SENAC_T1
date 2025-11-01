import express from "express"

const app = express()


// serviço = API

// rota que o cliente irá solicitar
app.get("/", (req,res) =>{
    res.send("Primeiro dia com node")
})

app.listen(3000, ()=>{
    console.log("Iniciando minha API com express")
})