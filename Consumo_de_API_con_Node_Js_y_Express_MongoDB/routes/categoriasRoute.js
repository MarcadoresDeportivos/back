const express = require('express')
const router = express.Router()
const categoriasCtrl = require('../controllers/categoriasCtrl')
const auth = require('../security/auth')

router.get('/',auth,categoriasCtrl.categoriaListar)

router.post('/',auth,categoriasCtrl.categoriaGuardar)

router.get('/:id',auth,categoriasCtrl.categoriaObtener)

router.put('/',auth,categoriasCtrl.categoriaActualizar)

router.delete('/:id',auth,categoriasCtrl.categoriaEliminar)

module.exports = router
