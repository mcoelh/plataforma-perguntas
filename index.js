const express = require("express");
const app = express(); //criando instância do express

app.get("/", (req, res) => {
    res.send("Tamo junto!");
})

app.listen(8080, () => {
    console.log("Servidor rodando")
})