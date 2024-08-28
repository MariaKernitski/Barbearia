let nextID = 1;

const model = (body, id = nextID++) => {
    const telefone =  body.telefone.replaceAll("-", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "")

    const soNumeros = true;

    telefone.forEach(el => {
        if(isNaN(Number(el))) {
            soNumeros = false;
        }
    })

    if(body.nome != undefined &&
        body.email != undefined &&
        body.telefone != undefined &&
        body.nome != "" &&
        body.email != "" &&
        body.email.includes("@") &&
        telefone != "" &&
        telefone.length >= 11 &&
        telefone.length <= 12 &&
        soNumeros
    ) {
        return {
            id,
            telefone: telefone,
            nome: body.nome,
            email: body.email,
            senha: body.senha
        }
    }
}

module.exports = model;