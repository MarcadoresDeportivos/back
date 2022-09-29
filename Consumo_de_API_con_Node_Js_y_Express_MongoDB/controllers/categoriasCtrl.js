// Para la Mongo DB
const { mapReduce } = require('../models/categoriaScheme')
const categoriaModel = require('../models/categoriaScheme')

// GET
const categoriaListar = async (req,res) => {
    try{ 
        const categorias = await categoriaModel.find()
        res.status(200).send(categorias)
    }catch(error){
        if(error){
            console.log("Error categoria listar: "+error)
            res.status(400).send("Error categoria listar")
        }        
    }
}
// http://localhost:3000/api/categoria/

// POST
const categoriaGuardar = async (req,res) => {
    console.log(req.body)
    const nombre = req.body.nombre
    let mensaje = {}
    console.log("name: "+nombre)
    if(nombre == ''){
        mensaje = {"msj":"Nombre de Categoria No valido"}
        res.status(400).json(mensaje)
    }else{
        // Para la MongoDB
        try{
            // Objeto correspondiente al modelo, datos puerto
            const categoria = new categoriaModel(req.body)
            // Para que guarde en la DB
            categoria.save()

            // Mensaje de éxito
            res.status(200).json({"msj":"Categoria Guardada"})
        }catch(error){
            console.log("Error Categoria Guardar: "+error)
        }
    }    
}
/*
{
	"nombre":"Futsal"
}
*/

// PUT
const categoriaActualizar = async (req,res) => {
    console.log("put")
    console.log(req.body)
    const {_id,nombre} = req.body
    try{
        if(_id == ''){
            res.status(400).json({"msj":"Error: Id Vacio"})
        }
        if(nombre != ''){
            // Para Mongo DB
            const categoria = {}
            categoria.nombre = nombre
            const rta = await categoriaModel.updateOne(
                { _id:_id},
                { $set:categoria},
                { new : true}
            )

            res.status(200).json({"msj":"Categoria Actualizada con Éxito"})
        }else{
            res.status(400).json({"msj":"Categoria NO valida"})
        }

    }catch(error){
        console.log(error)
        res.status(400).json({"msj":"Error "+error})        
    }

}
/*
{
    "_id":"id_code",
	"nombre":"Baloncesto"    
}
*/

// DELETE
const categoriaEliminar = async(req,res) => {
    console.log('ID a eliminar: '+req.params.id)
    try{
        id = req.params.id
        if(id == 0){
            res.status(400).json({"msg":"ID no valido"});
        }

        // Para la Mongo DB
        const rta = await categoriaModel.deleteOne({_id:id})

        res.status(200).json({"msg":"Categoría Eliminada con Éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error Eliminando Categoría"})
    }
}
// http://localhost:3000/api/categoria/id_code

// GET BY ID
const categoriaObtener = async (req,res) => {
    try{
        const categoria = await categoriaModel.findById(req.params.id);

        res.status(200).send(categoria);
    }catch(error){
        console.log("Error método obtener: "+error);
        res.status(400).send("Error método obtener: "+error);
    }
}
// http://localhost:3000/api/categoria/id_code

module.exports = {
    categoriaListar,
    categoriaGuardar,
    categoriaObtener,
    categoriaActualizar,
    categoriaEliminar
}
