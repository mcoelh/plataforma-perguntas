const express = require("express");
const app = express(); //criando instância do express
app.set('view engine', 'ejs'); //setando ejs como renderizador de html
app.use(express.static('public'))
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/ask", (req, res) => {
    res.render("ask");
})

app.post("/save-question", (req, res) => {
    res.send("form recebido!")
})
app.listen(8080, () => {
    console.log("Servidor rodando")
})