const express = require("express");
const app = express(); //criando instância do express
const bodyParser = require("body-parser");
const connection = require("./config/database/database")
const perguntaModel = require("./models/Question");

connection.authenticate()
    .then(() => {
        console.log("Conexaão feita com BD");
    }).catch((err) => {
        console.log("Erro connection:  ", err);
    });

app.set('view engine', 'ejs'); //setando ejs como renderizador de html
app.use(express.static('public'));// setando pasta public como paste de arqs. estáticos
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    perguntaModel.findAll({ raw: true }).then(perguntas => {
        console.log("Perguntas:", perguntas)

    })
    res.render("index");
})

app.get("/ask", (req, res) => {

    res.render("ask");
})

app.post("/save-question", (req, res) => {

    /* Recebendo dados do form*/
    var titulo = req.body.title;
    var pergunta = req.body.question;

    /* Inserindo as perguntas no form*/
    perguntaModel.create({
        titulo: titulo,
        descricao: pergunta,
    }).then(() => { /*redirecionando para a página inicial após criação pergunta*/
        res.redirect("/")
    })
})
app.listen(8080, () => {
    console.log("Servidor rodando!")
})