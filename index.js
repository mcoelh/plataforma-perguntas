const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./config/database/database")
const perguntaModel = require("./models/perguntasModel");
const respostaModel = require("./models/respostasModel")

connection.authenticate()
    .then(() => {
        console.log("Conexão feita com BD");
    }).catch((err) => {
        console.log("Erro connection:  ", err);
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    perguntaModel.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ]
    }).then(perguntas => {
        console.log("Perguntas:", perguntas)
        res.render("index", {
            perguntas: perguntas
        });
    })
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

app.post("/salvar-pergunta", (req, res) => {

    var titulo = req.body.titulo;
    var pergunta = req.body.descricao;

    perguntaModel.create({
        titulo: titulo,
        descricao: pergunta,
    }).then(() => {
        res.redirect("/")
    })
})

app.get("/responder/:id", (req, res) => {
    var id = req.params.id;
    perguntaModel.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {
            respostaModel.findAll({
                where: { perguntaId: pergunta.id },
                order: [['id', 'DESC']]
            }).then(resposta => {
                res.render("responder", {
                    pergunta: pergunta,
                    respostas: resposta
                })
            })
        } else {
            res.redirect("/")
        }
    })
})

app.post("/salvar-resposta", (req, res) => {
    var { corpo, pergunta } = req.body;
    console.log(req.body);
    respostaModel.create({
        corpo,
        perguntaId: pergunta
    }).then(() => {
        res.redirect("/responder/" + pergunta)
    });
})

app.listen(8080, () => {
    console.log("Servidor rodando!")
})