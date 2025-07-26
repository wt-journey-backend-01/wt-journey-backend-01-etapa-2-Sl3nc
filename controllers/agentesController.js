const AgentesRepository = require("../repositories/agentesRepository")

function getAllAgente(req, res) {
    const casos = AgentesRepository.findAll()
    res.status(200).json(casos)
}

function getAgenteByID(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).send('O campo "id" é obrigatório')
        }

        const caso = AgentesRepository.findBy(id)
        res.status(200).json(caso)
    }
    catch (error){
        res.status(404).send(error.message)
    }
}

function postAgente(req, res) {
    try {
        const jsonData = req.body

        if (!jsonData) {
            res.status(400).send('Falta inserir os dados a serem adcionados')
        }

        const result = AgentesRepository.add(jsonData)
        res.status(201).json(result)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}

function putAllAgente(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).send('O campo "id" é obrigatório')
        }

        const jsonData = req.body
        if (!jsonData) {
            res.status(400).send('Falta inserir os dados a serem atualizados')
        }

        const result = AgentesRepository.updtAll(id, jsonData)
        res.status(200).json(result)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}

function patchPartialAgente(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).send('O campo "id" é obrigatório')
        }

        const jsonData = req.body
        if (!jsonData) {
            res.status(400).send('Falta inserir os dados a serem atualizados')
        }

        const result = AgentesRepository.updtPartial(id, jsonData)
        res.status(200).json(result)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}

function deleteAgente(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).send('O campo "id" é obrigatório')
        }

        AgentesRepository.deleteBy(id)
        res.status(204).send()
    }
    catch (error) {
        res.status(404).send(error.message)
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

