const port = 3003
//Const responsavel por fazer o parse do corpo da requisição. 
const bodyParser = require('body-parser')

//servidor web
const express = require('express')
//iniciando a variavel express
const server = express()

//Middleware -> funcoes que irao trabalhar com as requisiçoes que chegarem no servidor
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`Server is running port ${port}`);  
})

module.exports = server