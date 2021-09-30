const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")

const app = express()
const port = 8000

app.get('/', function(req, res){
	res.send("Aplicação está funcionando")
})

app.listen(port, () => {
	console.log("Projeto rodando na porta " + port)
})