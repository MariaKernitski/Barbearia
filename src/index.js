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

/*
app.post("/barbearia", cep_endereco, (req ,res) => {
    res.json(req.body);
})
*/

// CLIENTE

app.get("/cliente", (req, res) => {
    res.json(cliente_controller.index())
})

app.get("/cliente/:id", (req, res) => {
    res.json(cliente_controller.show(req.params.id))
})

app.post("/cliente", (req, res) => {
    const code = cliente_controller.store(req.body)
    res.status(code).json();
})

app.put("/cliente/:id", (req, res) => {
    const code = cliente_controller.update(req.body, req.params.id)
    res.status(code).json();
})

app.delete("/cliente/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
})

// BARBEIRO

app.get("/barbeiro", (req, res) => {
    res.json(barbeiro_controller.index())
})

app.get("/barbeiro/:id", (req, res) => {
    res.json(barbeiro_controller.show(req.params.id))
})

app.post("/barbeiro", (req, res) => {
    const code = barbeiro_controller.store(req.body)
    res.status(code).json();
})

app.put("/barbeiro/:id", (req, res) => {
    const code = barbeiro_controller.update(req.body, req.params.id)
    res.status(code).json();
})

app.delete("/barbeiro/:id", (req, res) => {
    barbeiro_controller.destroy(req.params.id)
    res.json()
})

// 

//PORTA

app.listen(port, () => {
    console.log("Executando na porta: " + port);
})