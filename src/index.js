const express = require("express");
const app = express();
const port = 3500;

const cep_endereco = require("./middlewares/cep_endereco.js");

const atendimento_controller = require("./controller/atendimento.js");
const barbearia_controller = require("./controller/barbearia.js");
const barbeiro_controller = require("./controller/barbeiro.js");
const cliente_controller = require("./controller/cliente.js");
const rede_controller = require("./controller/rede.js");
const servico_controller = require("./controller/servico.js");
const usuário_controller = require("./controller/usuário.js");

app.use(express.json());
app.use(cep_endereco);

app.post("/barbearia", (req, res) => {
    console.log(req.body);
    res.json();
})

app.get("/barbearia", (req, res) => {
    res.json()
})

//PORTA

app.listen(port, () => {
    console.log("Executando na porta: " + port);
})