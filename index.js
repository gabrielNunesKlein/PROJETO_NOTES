const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")

const app = express()
const port = 8000

//DB
const db = require('./db/connection')

//Importação das rotas
const notesRouter = require('./routes/notes')

// Template Engine
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
	res.render('home')
})

app.use('/notes', notesRouter)

db.initDb((err, db) => {
	if (err) {
		console.log(err)
	} else{
		console.log("O banco foi conectado com sucesso")
		app.listen(port, () => {
			console.log("Projeto rodando na porta " + port)
		})
	}
})