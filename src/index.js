const express = require("express");
const app = express();
const port = 3500;

const atendimento_controller = require("./controller/atendimento.js");
const barbearia_controller = require("./controller/barbearia.js");
const barbeiro_controller = require("./controller/barbeiro.js");
const cliente_controller = require("./controller/cliente.js");
const rede_controller = require("./controller/rede.js");
const servico_controller = require("./controller/servico.js");
const usuário_controller = require("./controller/usuário.js");

app.use(express.json());

app.post("/atendimento", (req, res) => {
    const atendimento = req.body;
    const code = atendimento_controller.store(atendimento);
    res.status(code).json();
})

app.get("/atendimento", (req, res) => {
    const atendimentos = atendimento_controller.index();
    res.json(atendimentos);
})

app.get("/atendimento/:id", (req, res) => {
    const atendimento = atendimento_controller.show(req.params.id);
    res.json(atendimento);
})

app.put("/atendimento/:id", (req, res) => {
    const atendimento = req.body;
    const code = atendimento_controller.update(req.params.id, atendimento);
    res.status(code).json();
})

app.delete("/atendimento/:id", (req, res) => {
    atendimento_controller.destroy(req.params.id);
    res.json();
})

//PORTA

app.listen(port, () => {
    console.log("Executando na porta: " + port);
})