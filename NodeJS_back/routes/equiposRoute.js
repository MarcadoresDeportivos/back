const express = require('express')
const router = express.Router()
const equiposCtrl = require('../controllers/equiposCtrl')

//Imagenes
const multer = require('multer')
const upload = multer({dest:'public/images/'})
const fs = require('node:fs') 

router.get('/',equiposCtrl.equipoListar)

router.post('/',equiposCtrl.equipoGuardar)

router.get('/:id',equiposCtrl.equipoObtener)

router.put('/',equiposCtrl.equipoActualizar)

router.delete('/:id',equiposCtrl.equipoEliminar)

//Manejo de las imágenes a cargar
router.put('/imagen/:id',upload.single('imagen'), async(req,res)=>{
    const imagen = req.file
    console.log("recibiendo imagen")
    console.log(imagen.mimetype)
    console.log("archivo subido como: " + imagen.filename)
    const id  = req.params.id
    fs.rename('./public/images/' + imagen.filename, './public/images/' + id + ".jpg", ()=>{  console.log("cambio realizado")}) 
    res.status(200).json({"msj": "imagen Guardada"})
    }
)

module.exports = router