const { v4: uuidv4 } = require('uuid');

const keys = ['nome', 'dataDeIncorporacao', 'cargo']
const agentes = [
    {
        nome: "Rommel Carneiro",
        dataDeIncorporacao: "1992/10/04",
        cargo: "delegado",
        id: "401bccf5-cf9e-489d-8412-446cd169a0f1",
    },
]

function findAll() {
    return agentes
}

function findBy(id) {
    const caso = agentes.find((agente) => agente.id == id)
    if (!caso) {
        throw new ReferenceError("Agente não encontrado")
    }
    return caso
}

function add(data) {
    validJSON(data);
    data['id'] = uuidv4()
    agentes.push(data)
    return (data)
}

function updtAll(id, data) {
    const caso = findBy(id)
    validJSON(data);

    data["id"] = id
    if (data == caso) {
        throw new Error("Sem valores a serem atualizados")
    }

    agentes.splice(agentes.indexOf(caso), 1)
    agentes.push(data)
    return data
}

function updtPartial(id, data) {
    const agente = findBy(id)
    const updatedKeys = validUpdatePartial(data, agente);

    updatedKeys.forEach(key => {
        agente[key] = data[key]
    });

    agentes.splice(agentes.indexOf(agente), 1)
    agentes.push(agente)
    return agente
}

function deleteBy(id) {
    agentes.splice(agentes.indexOf(findBy(id)), 1)
}

module.exports = {
    findAll,
    findBy,
    add,
    updtAll,
    updtPartial,
    deleteBy
}

function validUpdatePartial(data, caso) {
    const notFound = [];
    const updatedKeys = [];

    Object.keys(data).forEach(element => {
        if (!caso[element]) {
            notFound.push(element);
        }
        else if (data[element] != caso[element]) {
            updatedKeys.push(element);
        }
    });

    if (notFound.length != 0) {
        throw new ReferenceError(`Os seguintes campos não são usados: ${notFound.join(', ')}`);
    }
    if (updatedKeys.length == 0) {
        throw new Error("Sem valores a serem atualizados");
    }
    return updatedKeys;
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

    if (!/^\d{4}\/\d{2}\/\d{2}$/.test(data['dataDeIncorporacao'])) {
        throw new ReferenceError('Data no formato inválido para o campo "dataDeIncorporacao"');
    }
}
