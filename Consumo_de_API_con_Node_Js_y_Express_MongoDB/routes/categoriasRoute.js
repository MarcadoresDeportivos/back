const express = require('express')
const router = express.Router()
const categoriasCtrl = require('../controllers/categoriasCtrl')

router.get('/',categoriasCtrl.categoriaListar)

// router.post('/',function(req,res){

//     res.send(categoriasCtrl.categoriaGuardar());
// })

router.post('/',categoriasCtrl.categoriaGuardar);
router.get('/:id',categoriasCtrl.categoriaObtener)

router.put('/',categoriasCtrl.categoriaActualizar)

router.delete('/:id',categoriasCtrl.categoriaEliminar)

module.exports = router
