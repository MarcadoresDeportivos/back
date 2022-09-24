const express = require('express')
const router = express.Router()
const usuariosCtrl = require('../controllers/usuariosCtrl')

//router.get('/',function(req,res){
//    res.send(usuariosCtrl.usuarioListar())
//})

router.post('/',usuariosCtrl.usuarioGuardar)

/*router.get('/:id',usuariosCtrl.usuarioObtener)

router.put('/',usuariosCtrl.usuarioActualizar)

router.delete('/:id',usuariosCtrl.usuarioEliminar)*/

module.exports = router