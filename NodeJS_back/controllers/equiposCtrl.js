// Para la Mongo DB
const { mapReduce } = require('../models/equipoScheme')
const equipoModel = require('../models/equipoScheme')

// GET
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
    "_id":"id_code",
	"nombre":"Risaralda",
    "categoria": "Baloncesto"
}
*/

// DELETE
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
// http://localhost:3000/api/equipo/id_code

// GET BY ID
const equipoObtener = async (req,res) => {
    try{
        const equipo = await equipoModel.findById(req.params.id);

        res.status(200).send(equipo);
    }catch(error){
        console.log("Error método obtener: "+error);
        res.status(400).send("Error método obtener: "+error);
    }
}
// http://localhost:3000/api/equipo/id_code

module.exports = {
    equipoListar,
    equipoGuardar,
    equipoObtener,
    equipoActualizar,
    equipoEliminar
}
