const AgentesRepository = require("../repositories/agentesRepository")

function getAllAgente(req, res) {
    const casos = AgentesRepository.findAll()
    return res.status(200).json(casos)
}

function getAgenteByID(req, res) {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).send('O campo "id" é obrigatório')

        const caso = AgentesRepository.findBy(id)
        return res.status(200).json(caso)
    }
    catch (error){
        return res.status(404).send(error.message)
    }
}

function postAgente(req, res) {
    try {
        const jsonData = req.body

        if (!jsonData) return res.status(400).send('Falta inserir os dados a serem adcionados')

        const result = AgentesRepository.add(jsonData)
        return res.status(201).json(result)
    }
    catch (error) {
        return res.status(404).send(error.message)
    }
}

function putAllAgente(req, res) {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).send('O campo "id" é obrigatório')

        const jsonData = req.body
        if (!jsonData) return res.status(400).send('Falta inserir os dados a serem atualizados')

        const result = AgentesRepository.updtAll(id, jsonData)
        return res.status(200).json(result)
    }
    catch (error) {
        return res.status(404).send(error.message)
    }
}

function patchPartialAgente(req, res) {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).send('O campo "id" é obrigatório')

        const jsonData = req.body
        if (!jsonData) return res.status(400).send('Falta inserir os dados a serem atualizados')

        const result = AgentesRepository.updtPartial(id, jsonData)
        return res.status(200).json(result)
    }
    catch (error) {
        return res.status(404).send(error.message)
    }
}

function deleteAgente(req, res) {
    try {
        const id = req.params.id;
        if (!id) return res.status(400).send('O campo "id" é obrigatório')

        AgentesRepository.deleteBy(id)
        return res.status(204).send()
    }
    catch (error) {
        return res.status(404).send(error.message)
    }
}

module.exports = {
    getAllAgente,
    getAgenteByID,
    postAgente,
    putAllAgente,
    patchPartialAgente,
    deleteAgente
}

