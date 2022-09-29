const express = require('express')
const router = express.Router()
const usuariosCtrl = require('../controllers/usuariosCtrl')

router.post('/',usuariosCtrl.usuarioGuardar)

module.exports = router