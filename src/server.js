// Express
const express = require('express')
const server = express()

// Pages 
const { 
    
    pageLanding, 
    pageStudy, 
    pageGiveClass, 
    saveClasses 
} = require('./pages')


// Fazendo a requisição e configurando o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


// Configurar arquivos estáticos
server.use(express.static('public'))
// Receber os dados do req.body
server.use(express.urlencoded({ extended: true }))


// Rotas
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClass)
.post('/save-classes', saveClasses)

server.listen(5500)