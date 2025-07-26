const express = require('express')
const router = express.Router();
const agentesController = require('../controllers/agentesController');

router.get('/agentes/:id', agentesController.getAgenteByID)
router.get('/agentes', agentesController.getAllAgente)
router.post('/agentes', agentesController.postAgente)
router.put('/agentes/:id', agentesController.putAllAgente)
router.patch('/agentes/:id', agentesController.patchPartialAgente)
router.delete('/agentes/:id', agentesController.deleteAgente)

module.exports = router