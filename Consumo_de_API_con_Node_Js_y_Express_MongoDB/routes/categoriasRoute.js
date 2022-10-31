const express = require('express')
const router = express.Router()
const categoriasCtrl = require('../controllers/categoriasCtrl')
const auth = require('../security/auth')

router.get('/',auth,categoriasCtrl.categoriaListar)

router.post('/',categoriasCtrl.categoriaGuardar)

router.get('/:id',categoriasCtrl.categoriaObtener)

router.put('/',categoriasCtrl.categoriaActualizar)

router.delete('/:id',categoriasCtrl.categoriaEliminar)

module.exports = router
