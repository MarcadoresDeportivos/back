// Para la Mongo DB
const { mapReduce } = require('../models/eventoScheme')
const eventoModel = require('../models/eventoScheme')

const e = require("express")

// GET
const eventoListar = async (req,res) => {
    try{ 
        const eventos = await eventoModel.find()
        res.status(200).send(eventos)
    }catch(error){
        if(error){
            console.log("Error evento listar: "+error)
            res.status(400).send("Error evento listar")
        }        
    }
}
// http://localhost:3000/api/evento/

// POST
const eventoGuardar = async (req,res) => {
    console.log(req.body)
    const rival1 = req.body.rival1
    console.log("rival1: "+rival1)
    const rival2 = req.body.rival2
    console.log("rival2: "+rival2)
    const categoria = req.body.categoria
    console.log("categoria: "+categoria)

    let mensaje = {}
    
    if(rival1 == ''){
        mensaje = {"msj":"Rival 1 de evento No valido"}
        res.status(400).json(mensaje)
    }else if(rival2 == ''){
        mensaje = {"msj":"Rival 2 de evento No valido"}
        res.status(400).json(mensaje)
    }else if (categoria == ''){
        mensaje = {"msj":"evento de evento No valida"}
        res.status(400).json(mensaje)
    }else{
        // Para la MongoDB
        try{
            // Objeto correspondiente al modelo, datos puerto
            const evento = new eventoModel(req.body)
            // Para que guarde en la DB
            evento.save()

            // Mensaje de éxito
            res.status(200).json({"msj":"evento Guardado"})

        }catch(error){
            console.log("Error evento Guardar: "+error)
        }
        //
    }    
}
/*
{
    "rival1":"Nacional",
    "rival2":"Millonarios",
    "categoria":"Futbol"
}
*/

// PUT
const eventoActualizar = async (req,res) => {
    console.log("put")
    console.log(req.body)
    const {_id,rival1,rival2,categoria} = req.body
    try{
        if(_id == ''){
            res.status(400).json({"msj":"Error: Id Vacio"})
        }
        if(rival1 != ''){
            if(rival2 != ''){
                if(categoria != ''){
                    // Para Mongo DB
                    const evento = {}
                    evento.rival1 = rival1
                    evento.rival2 = rival2
                    evento.categoria = categoria
                    const rta = await eventoModel.updateOne(
                        { _id:_id},
                        { $set:evento},
                        { new : true}
                    )
                    res.status(200).json({"msj":"evento Actualizado con Éxito"})
                }else{
                    res.status(400).json({"msj":"Categoria NO valida"})
                }
            }else{
                res.status(400).json({"msj":"Rival 2 NO valido"})                
            }
        }else{
            res.status(400).json({"msj":"Rival 1 NO valido"})
        }

    }catch(error){
        console.log(error)
        res.status(400).json({"msj":"Error "+error})        
    }
}
/*
{
    "_id":"id_code",
    "rival1":"Cali",
    "rival2":"Millonarios",
    "categoria":"Futbol"
}
*/

// DELETE
const eventoEliminar = async(req,res) => {
    console.log('ID a eliminar: '+req.params.id)
    try{
        id = req.params.id
        if(id == 0){
            res.status(400).json({"msg":"ID no valido"});
        }

        // Para la Mongo DB
        const rta = await eventoModel.deleteOne({_id:id})

        res.status(200).json({"msg":"Evento Eliminado con Éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error Eliminando Evento"})
    }
}
// http://localhost:3000/api/evento/id_code

// GET BY ID
const eventoObtener = async (req,res) => {
    try{
        const evento = await eventoModel.findById(req.params.id);

        res.status(200).send(evento);
    }catch(error){
        console.log("Error método obtener: "+error);
        res.status(400).send("Error método obtener: "+error);
    }
}
// http://localhost:3000/api/evento/id_code

module.exports = {
    eventoListar,
    eventoGuardar,
    eventoObtener,
    eventoActualizar,
    eventoEliminar
}
