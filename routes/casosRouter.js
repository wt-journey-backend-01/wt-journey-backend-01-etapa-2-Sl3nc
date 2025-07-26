const express = require('express')
const router = express.Router();
const casosController = require('../controllers/casosController');

router.get('/casos/:id', casosController.getCasosByID)
router.get('/casos', casosController.getAllCasos)
router.post('/casos', casosController.postCaso)
router.put('/casos/:id', casosController.putAllCaso)
router.patch('/casos/:id', casosController.patchPartialCaso)
router.delete('/casos/:id', casosController.deleteCaso)

module.exports = router

