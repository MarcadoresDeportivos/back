// Para la Mongo DB
const { mapReduce } = require('../models/categoriaScheme')
const categoriaModel = require('../models/categoriaScheme')

// GET
/*
const categoriaListar = ()=>{
    listado = {
        "1":"Futbol",
        "2":"Baloncesto",
        "3":"Tenis"
    }
    return listado
}
*/
const categoriaListar = async (req,res) => {
    /*listado = {
        "1":"futbol",
        "2":"baloncesto",
        "3":"tenis"
    }
    //return listado
    */
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
/*
const categoriaGuardar = async (req,res) => {
    console.log(req.body)
    const nombre = req.body.nombre
    let mensaje = {}
    console.log("Nombre es "+nombre)
    if(nombre == ''){
        mensaje = {"msj":"Nombre de Categoria No valido"}
        res.status(400).json(mensaje)
    }else{
        mensaje = {
        "msj":"Categoria Almacenada con exito"
    }
    res.status(200).json(mensaje)
    }    
}
*/
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

            /*mensaje = {
                "msj":"Categoria Almacenada con exito"
            }
            res.status(200).json(mensaje)*/
        }catch(error){
            console.log("Error Categoria Guardar: "+error)
        }
        //
    }    
}
/*
{
	"nombre":"Futsal"
}
*/

// GET BY ID
const categoriaObtener = async (req,res) => {
    /*const id = req.params.id
    console.log("ID solicitada: "+id)
    //Proceso DB
    let categoria
    if(id == 1){
        categoria = {"1":"Futbol"}
    }
    if(id == 2){
        categoria = {"2":"Baloncesto"}
    }
    if(id == 3){
        categoria = {"3":"Tenis"}
    }
    res.status(200).json(categoria)*/
    try{
        const categoria = await categoriaModel.findById(req.params.id);

        res.status(200).send(categoria);
    }catch(error){
        console.log("Error método obtener: "+error);
        res.status(400).send("Error método obtener: "+error);
    }
}
// http://localhost:3000/api/categoria/1

// PUT
/*
const categoriaActualizar = async (req,res) => {
    console.log("put")
    console.log(req.body)
    const {id,nombre} = req.body
    try{
        console.log("El ID"+id)
        if(id == ''){
            res.status(400).json({"msj":"Error: Id Vacio"})
        }
        if(nombre != ''){
            res.status(200).json({"msj":"Categoria Actualizada con Éxito"})
        }else{
            res.status(400).json({"msj":"Categoria NO valida"})
        }

    }catch(error){
        console.log(error)
        res.status(400).json({"msj":"Error "+error})        
    }
}
*/
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
    "_id":"632c5275078660a133e576e3",
	"nombre":"Baloncesto"    
}
*/

// DELETE
/*
const categoriaEliminar = async(req,res) => {
    console.log('ID a eliminar: '+req.params.id)
    try{
        id = req.params.id
        if(id == 0){
            res.status(400).json({"msg":"ID no valido"});
        }
        res.status(200).json({"msg":"Categoría Eliminada con Éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error Eliminando Categoría"})
    }
}
*/
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
// http://localhost:3000/api/categoria/633496b8ebad7b4e23af0ad1

module.exports = {
    categoriaListar,
    categoriaGuardar,
    categoriaObtener,
    categoriaActualizar,
    categoriaEliminar
}
