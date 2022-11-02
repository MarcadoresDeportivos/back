const express = require('express')
const router = express.Router()
const eventosCtrl = require('../controllers/eventosCtrl')

router.get('/',eventosCtrl.eventoListar)

router.post('/',eventosCtrl.eventoGuardar)

router.get('/:id',eventosCtrl.eventoObtener)

router.put('/',eventosCtrl.eventoActualizar)

router.delete('/:id',eventosCtrl.eventoEliminar)

module.exports = router