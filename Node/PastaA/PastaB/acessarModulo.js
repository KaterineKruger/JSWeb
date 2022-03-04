const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// Não é uma boa prática criar pastas/arquivos dentro do node_modules
const saudacao = require('saudacao')
console.log(saudacao.ola)

//Não é necessário referenciar o nome do arquivo quando o mesmo é nomeado por "index".
//Os arquivos index são lidos automaticamente por padrão pelo JS.
const c = require('./pastaC')
console.log(c.ola2)

//"http" é um módulo interno já criado pelo node.
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)