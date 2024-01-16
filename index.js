const express = require("express");
const app = express(); //criando instância do express
app.set('view engine', 'ejs'); //setando ejs como renderizador de html
app.use(express.static('public'))
app.get("/", (req, res) => {
    res.render("index");
})

app.listen(8080, () => {
    console.log("Servidor rodando")
})