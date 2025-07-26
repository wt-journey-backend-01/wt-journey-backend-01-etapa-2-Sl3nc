const express = require('express')
const router = express.Router();
const agentesController = require('../controllers/casosController');

router.get('/casos/:id', agentesController.getCasosByID)
router.get('/casos', agentesController.getAllCasos)
router.post('/casos', agentesController.postCaso)
router.put('/casos/:id', agentesController.putAllCaso)
router.patch('/casos/:id', agentesController.patchPartialCaso)
router.delete('/casos/:id', agentesController.deleteCaso)

module.exports = router

