// Para la Mongo DB
const { mapReduce } = require('../models/equipoScheme')
const equipoModel = require('../models/equipoScheme')

// GET
/*
const equipoListar = ()=>{
    listado = {
        "1":"Equipo A",
        "2":"Equipo B",
        "3":"Equipo C"
    }
    return listado
}
*/
const equipoListar = async (req,res) => {
    try{ 
        const equipos = await equipoModel.find()
        res.status(200).send(equipos)
    }catch(error){
        if(error){
            console.log("Error equipo listar: "+error)
            res.status(400).send("Error equipo listar")
        }        
    }
}
// http://localhost:3000/api/equipo/

// POST
/*
const equipoGuardar = async (req,res) => {
    console.log(req.body)
    const nombre = req.body.nombre
    let mensaje = {}
    console.log("Nombre es "+nombre)
    if(nombre == ''){
        mensaje = {"msj":"Nombre de equipo No valido"}
        res.status(400).json(mensaje)
    }else{
        mensaje = {
        "msj":"equipo almacenado con exito"
    }
    res.status(200).json(mensaje)
    }    
}
*/
const equipoGuardar = async (req,res) => {
    console.log(req.body)
    const nombre = req.body.nombre
    console.log("name: "+nombre)
    const equipo = req.body.equipo
    console.log("equipo: "+equipo)

    let mensaje = {}
    
    if(nombre == ''){
        mensaje = {"msj":"Nombre de equipo No valido"}
        res.status(400).json(mensaje)
    }else if(equipo == ''){
        mensaje = {"msj":"equipo de equipo No valido"}
        res.status(400).json(mensaje)
    }else{
        // Para la MongoDB
        try{
            // Objeto correspondiente al modelo, datos puerto
            const equipo = new equipoModel(req.body)
            // Para que guarde en la DB
            equipo.save()

            // Mensaje de éxito
            res.status(200).json({"msj":"equipo Guardado"})

            /*mensaje = {
                "msj":"equipo Almacenada con exito"
            }
            res.status(200).json(mensaje)*/
        }catch(error){
            console.log("Error equipo Guardar: "+error)
        }
        //
    }    
}
/*
{
	"nombre":"Millonarios",
    "categoria":"Futbol"
}
*/

// PUT
/*
const equipoActualizar = async (req,res) => {
    console.log("put")
    console.log(req.body)
    const {id,nombre} = req.body
    try{
        console.log("El ID"+id)
        if(id == ''){
            res.status(400).json({"msj":"Error: Id Vacio"})
        }
        if(nombre != ''){
            res.status(200).json({"msj":"equipo actualizado con Éxito"})
        }else{
            res.status(400).json({"msj":"equipo NO valida"})
        }

    }catch(error){
        console.log(error)
        res.status(400).json({"msj":"Error "+error})        
    }
}
*/
const equipoActualizar = async (req,res) => {
    console.log("put")
    console.log(req.body)
    const {_id,nombre,categoria} = req.body
    try{
        if(_id == ''){
            res.status(400).json({"msj":"Error: Id Vacio"})
        }
        if(nombre != ''){
            if (categoria != ''){
                // Para Mongo DB
                const equipo = {}
                equipo.nombre = nombre
                equipo.categoria = categoria
                const rta = await equipoModel.updateOne(
                    { _id:_id},
                    { $set:equipo},
                    { new : true}
                )
                res.status(200).json({"msj":"equipo Actualizado con Éxito"})
            }else{
                res.status(400).json({"msj":"equipo NO valida"})
            }          
        }else{
            res.status(400).json({"msj":"equipo NO valida"})
        }

    }catch(error){
        console.log(error)
        res.status(400).json({"msj":"Error "+error})        
    }
}

/*
{
    "_id":"632c5275078660a133e576e3",
	"nombre":"Millos",
    "equipo":"Futbol" 
}
*/

// DELETE
/*
const equipoEliminar = async(req,res) => {
    console.log('ID a eliminar: '+req.params.id)
    try{
        id = req.params.id
        if(id == 0){
            res.status(400).json({"msg":"ID no valido"});
        }
        res.status(200).json({"msg":"Equipo eliminado con éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error eliminando equipo"})
    }
}
*/
const equipoEliminar = async(req,res) => {
    console.log('ID a eliminar: '+req.params.id)
    try{
        id = req.params.id
        if(id == 0){
            res.status(400).json({"msg":"ID no valido"});
        }

        // Para la Mongo DB
        const rta = await equipoModel.deleteOne({_id:id})

        res.status(200).json({"msg":"Equipo Eliminado con Éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error Eliminando Equipo"})
    }
}
// http://localhost:3000/api/equipo/6334bc6070d6999379e471e2

// GET BY ID
const equipoObtener = async (req,res) => {
    /*const id = req.params.id
    console.log("ID solicitada: "+id)
    //Proceso DB
    let equipo
    if(id == 1){
        equipo = {"1":"Equipo A"}
    }
    if(id == 2){
        equipo = {"2":"Equipo B"}
    }
    if(id == 3){
        equipo = {"3":"Equipo C"}
    }
    res.status(200).json(equipo)
    */
    try{
        const equipo = await equipoModel.findById(req.params.id);

        res.status(200).send(equipo);
    }catch(error){
        console.log("Error método obtener: "+error);
        res.status(400).send("Error método obtener: "+error);
    }
}
// http://localhost:3000/api/equipo/1

module.exports = {
    equipoListar,
    equipoGuardar,
    equipoObtener,
    equipoActualizar,
    equipoEliminar
}
