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
    perguntaModel.findAll({
        raw: true, order: [ //TEM QUE SER UM ARRAY DENTRO DO OUTRO
            ['id', 'DESC'] // ASC = CRESCENTE DESC = DECRESCENTE
        ]
    }).then(perguntas => {
        console.log("Perguntas:", perguntas)
        res.render("index", {
            perguntas: perguntas
        });
    })
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

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    perguntaModel.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {
            res.render("pergunta", {
                pergunta: pergunta
            })
        } else {
            res.redirect("/")
        }
    })
})
app.listen(8080, () => {
    console.log("Servidor rodando!")
})