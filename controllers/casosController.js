const casosRepository = require("../repositories/casosRepository")

function getAllCasos(req, res) {
    const casos = casosRepository.findAll()
    res.json(casos)
}

function getCasosByID(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).send('O campo "id" é obrigatório')
        }

        const caso = casosRepository.findBy(id)
        res.json(caso)
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
        res.status(201).send(`Dados adcionados com sucesso, ${result} casos registrados`)
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
        res.send(`Dados atualizados com sucesso, ${result} casos registrados`)
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
        res.send(`Dados atualizados com sucesso, ${result} casos registrados`)
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

        const result = casosRepository.deleteBy(id)
        res.send(`Dados removidos com sucesso, ${result} casos registrados`)
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

