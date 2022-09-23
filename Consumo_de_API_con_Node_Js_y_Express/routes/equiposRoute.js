const express = require('express')
const router = express.Router()
const equiposCtrl = require('../controllers/equiposCtrl')

router.get('/',function(req,res){
    res.send(equiposCtrl.equipoListar())
})

router.post('/',equiposCtrl.equipoGuardar)

router.get('/:id',equiposCtrl.equipoObtener)

router.put('/',equiposCtrl.equipoActualizar)

router.delete('/:id',equiposCtrl.equipoEliminar)

module.exports = router