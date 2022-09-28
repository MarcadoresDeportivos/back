const express = require('express')
const router = express.Router()
const categoriasCtrl = require('../controllers/categoriasCtrl')

<<<<<<< HEAD
=======
// router.get('/',function(req,res){
//     res.send(categoriasCtrl.categoriaListar())
// })
>>>>>>> 0bdd7b669da55def15ad9dcf2c8523bd8c021898
router.get('/',categoriasCtrl.categoriaListar)

// router.post('/',function(req,res){

//     res.send(categoriasCtrl.categoriaGuardar());
// })

router.post('/',categoriasCtrl.categoriaGuardar);
router.get('/:id',categoriasCtrl.categoriaObtener)

router.put('/',categoriasCtrl.categoriaActualizar)

router.delete('/:id',categoriasCtrl.categoriaEliminar)

module.exports = router
