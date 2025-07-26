const casosRepository = require("../repositories/casosRepository")

function getAllCasos(req, res) {
    const casos = casosRepository.findAll()
    res.status(200).json(casos)
}

function getCasosByID(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).send('O campo "id" é obrigatório')
        }

        const caso = casosRepository.findBy(id)
        res.status(200).json(caso)
    }
    catch (error){
        res.status(404).send(error.message)
    }
}

function postCaso(req, res) {
    try {
        const jsonData = req.body

        if (!jsonData) {
            res.status(400).send('Falta inserir os dados a serem adcionados')
        }

        const result = casosRepository.add(jsonData)
        res.status(201).json(result)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}

function putAllCaso(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).send('O campo "id" é obrigatório')
        }

        const jsonData = req.body
        if (!jsonData) {
            res.status(400).send('Falta inserir os dados a serem atualizados')
        }

        const result = casosRepository.updtAll(id, jsonData)
        res.status(200).json(result)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}

function patchPartialCaso(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).send('O campo "id" é obrigatório')
        }

        const jsonData = req.body
        if (!jsonData) {
            res.status(400).send('Falta inserir os dados a serem atualizados')
        }

        const result = casosRepository.updtPartial(id, jsonData)
        res.status(200).json(result)
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}

function deleteCaso(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).send('O campo "id" é obrigatório')
        }

        casosRepository.deleteBy(id)
        res.status(204).send()
    }
    catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getAllCasos,
    getCasosByID,
    postCaso,
    putAllCaso,
    patchPartialCaso,
    deleteCaso
}

