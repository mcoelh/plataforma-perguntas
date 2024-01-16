const express = require("express");
const app = express(); //criando instância do express
const bodyParser = require("body-parser");

app.set('view engine', 'ejs'); //setando ejs como renderizador de html
app.use(express.static('public'));// setando pasta public como paste de arqs. estáticos
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/ask", (req, res) => {
    res.render("ask");
})

app.post("/save-question", (req, res) => {
    var titulo = req.body.title;
    var pergunta = req.body.question;

    res.send("form recebido!\nTitulo: " + titulo + "\nPergunta: " + pergunta);
})
app.listen(8080, () => {
    console.log("Servidor rodando")
})