// Para la Mongo DB
const { mapReduce } = require('../models/eventoScheme')
const eventoModel = require('../models/eventoScheme')

const e = require("express")

// GET
/*
const eventoListar = ()=>{
    listado = {
        "1":{
            "evento":"Futbol",
            "equipo_1": "Equipo B",
            "equipo_2": "Equipo C"
          },
        "2":{
            "evento":"Baloncesto",
            "equipo_1": "Equipo A",
            "equipo_2": "Equipo C"
          },
        "3":{
            "evento":"Tenis",
            "equipo_1": "Equipo A",
            "equipo_2": "Equipo B"
          }          
    }
    return listado
}
*/
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
/*
const eventoGuardar = async (req,res) => {
    console.log(req.body)
    const equipos = req.body.equipos
    console.log("Los equipos son "+equipos)
    const evento = req.body.evento
    console.log("La evento es "+evento)
    
    let mensaje = {}
    
    if(equipos == ''){
        mensaje = {"msj":"Equipos No validos"}
        res.status(400).json(mensaje)
    }else if(evento == ''){
        mensaje = {"msj":"Nombre de evento No valido"}
        res.status(400).json(mensaje)
    }
    else{
        mensaje = {
        "msj":"evento almacenado con exito"
    }
    res.status(200).json(mensaje)
    }    
}
*/
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

            /*mensaje = {
                "msj":"evento Almacenada con exito"
            }
            res.status(200).json(mensaje)*/
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
/*
const eventoActualizar = async (req,res) => {
    console.log("put")
    console.log(req.body)
    const {id,evento,equipos} = req.body
    try{
        console.log("El ID: "+id)
        if(id == ''){
            res.status(400).json({"msj":"Error: Id Vacio"})
        }else if(evento == ''){
            res.status(400).json({"msj":"Error: Sin evento"})
        }else if(equipos == ''){
            res.status(400).json({"msj":"Error: Equipos no definidos"})
        }else{
            res.status(200).json({"msj":"evento actualizado con Éxito"})
        }       
    }catch(error){
        console.log(error)
        res.status(400).json({"msj":"Error "+error})        
    }
}*/
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
    "_id":"632c5275078660a133e576e3",
    "rival1":"Cali",
    "rival2":"Millonarios",
    "categoria":"Futbol"
}
*/

// DELETE
/*
const eventoEliminar = async(req,res) => {
    console.log('ID a eliminar: '+req.params.id)
    try{
        id = req.params.id
        if(id == 0){
            res.status(400).json({"msg":"ID no valido"});
        }
        res.status(200).json({"msg":"evento eliminado con éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error eliminando evento"})
    }
}
*/
const eventoEliminar = async(req,res) => {
    console.log('ID a eliminar: '+req.params.id)
    try{
        id = req.params.id
        if(id == 0){
            res.status(400).json({"msg":"ID no valido"});
        }

        // Para la Mongo DB
        const rta = await eventoModel.deleteOne({_id:id})

        res.status(200).json({"msg":"Evento Eliminada con Éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error Eliminando Evento"})
    }
}
// http://localhost:3000/api/evento/1

// GET BY ID
const eventoObtener = async (req,res) => {
    /*const id = req.params.id
    console.log("ID solicitada: "+id)
    //Proceso DB
    let evento
    if(id == 1){
        evento = {"1":{
            "evento":"Futbol",
            "equipo_1": "Equipo B",
            "equipo_2": "Equipo C"
          }}
    }
    if(id == 2){
        evento = {"2":{
            "evento":"Baloncesto",
            "equipo_1": "Equipo A",
            "equipo_2": "Equipo C"
          }}
    }
    if(id == 3){
        evento = {"3":{
            "evento":"Tenis",
            "equipo_1": "Equipo A",
            "equipo_2": "Equipo B"
          }}
    }
    res.status(200).json(evento)*/
    try{
        const evento = await eventoModel.findById(req.params.id);

        res.status(200).send(evento);
    }catch(error){
        console.log("Error método obtener: "+error);
        res.status(400).send("Error método obtener: "+error);
    }
}
// http://localhost:3000/api/evento/1

module.exports = {
    eventoListar,
    eventoGuardar,
    eventoObtener,
    eventoActualizar,
    eventoEliminar
}
