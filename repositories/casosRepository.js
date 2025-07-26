const { v4: uuidv4 } = require('uuid');

const keys = ['titulo', 'descricao', 'status', 'agente_id']
const casos = [
    {
        titulo: "homicidio",
        descricao: "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1",
        id: "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
    },
]

function findAll() {
    return casos
}

function findBy(queryID) {
    const caso = casos.find(({ id }) => queryID == id)
    if (!caso) {
        throw new ReferenceError("Caso não encontrado")
    }
    return caso
}

function add(data) {
    validJSON(data);
    data['id'] = uuidv4()
    return casos.push(data)
}

function updtAll(id, data) {
    const index = casos.indexOf(findBy(id))
    validJSON(data);

    casos.splice(index, 1)
    casos.push({ ...data, "id": id })
    return casos.length
}

module.exports = {
    findAll,
    findBy,
    add,
    updtAll
}

function validJSON(data) {
    const notFound = [];
    keys.forEach(element => {
        if (!data[element]) {
            notFound.push(element);
        }
    });

    if (notFound.length != 0) {
        throw new ReferenceError(`Os seguintes campos estão faltando: ${notFound.join(', ')}`);
    }
}
