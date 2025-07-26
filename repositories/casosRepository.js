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

function findBy(id) {
    const caso = casos.find(( caso ) => caso.id == id)
    if (!caso) {
        throw new ReferenceError("Caso não encontrado")
    }
    return caso
}

function add(data) {
    validJSON(data);
    data['id'] = uuidv4()
    casos.push(data)
    return(data)
}

function updtAll(id, data) {
    const caso = findBy(id)
    validJSON(data);

    data["id"] = id
    if (data == caso) {
        throw new Error("Sem valores a serem atualizados")
    }

    casos.splice(casos.indexOf(caso), 1)
    casos.push(data)
    return data
}

function updtPartial(id, data) {
    const caso = findBy(id)
    const updatedKeys = validUpdatePartial(data, caso);

    updatedKeys.forEach(key => {
        caso[key] = data[key]
    });

    casos.splice(casos.indexOf(caso), 1)
    casos.push(caso)
    return caso
}

function deleteBy(id) {
    casos.splice(casos.indexOf(findBy(id)), 1)
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
    
    if (data['status'] != 'aberto' && data['status'] != 'solucionado'){
        throw new AggregateError('Valor inválido para o campo "status"');
    }
}
