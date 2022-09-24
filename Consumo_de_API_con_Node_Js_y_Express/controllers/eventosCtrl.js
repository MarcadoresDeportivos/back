const e = require("express")

// GET
const eventoListar = ()=>{
    listado = {
        "1":{
            "categoria":"Futbol",
            "equipo_1": "Equipo B",
            "equipo_2": "Equipo C"
          },
        "2":{
            "categoria":"Baloncesto",
            "equipo_1": "Equipo A",
            "equipo_2": "Equipo C"
          },
        "3":{
            "categoria":"Tenis",
            "equipo_1": "Equipo A",
            "equipo_2": "Equipo B"
          }          
    }
    return listado
}
// http://localhost:3000/api/evento/

// POST
const eventoGuardar = async (req,res) => {
    console.log(req.body)
    const equipos = req.body.equipos
    console.log("Los equipos son "+equipos)
    const categoria = req.body.categoria
    console.log("La categoria es "+categoria)
    
    let mensaje = {}
    
    if(equipos == ''){
        mensaje = {"msj":"Equipos No validos"}
        res.status(400).json(mensaje)
    }else if(categoria == ''){
        mensaje = {"msj":"Nombre de categoria No valido"}
        res.status(400).json(mensaje)
    }
    else{
        mensaje = {
        "msj":"evento almacenado con exito"
    }
    res.status(200).json(mensaje)
    }    
}
/*
{
    "categoria":"Futbol",
	"equipos":{
            "equipo_1": "Equipo B",
            "equipo_2": "Equipo C"
          }
}
*/

// PUT
const eventoActualizar = async (req,res) => {
    console.log("put")
    console.log(req.body)
    const {id,categoria,equipos} = req.body
    try{
        console.log("El ID: "+id)
        if(id == ''){
            res.status(400).json({"msj":"Error: Id Vacio"})
        }else if(categoria == ''){
            res.status(400).json({"msj":"Error: Sin categoria"})
        }else if(equipos == ''){
            res.status(400).json({"msj":"Error: Equipos no definidos"})
        }else{
            res.status(200).json({"msj":"evento actualizado con Éxito"})
        }       
    }catch(error){
        console.log(error)
        res.status(400).json({"msj":"Error "+error})        
    }
}
/*
{
    "id":"2",
    "categoria":"Basket",
	"equipos":{
        "equipo_1": "Equipo A",
        "equipo_2": "Equipo C"
    }
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
        res.status(200).json({"msg":"evento eliminado con éxito"})
    }catch (error) {
        console.log("Error: "+error);
        res.status(400).json({"msg":"Error eliminando evento"})
    }
}
// http://localhost:3000/api/evento/1

// GET BY ID
const eventoObtener = async (req,res) => {
    const id = req.params.id
    console.log("ID solicitada: "+id)
    //Proceso DB
    let evento
    if(id == 1){
        evento = {"1":{
            "categoria":"Futbol",
            "equipo_1": "Equipo B",
            "equipo_2": "Equipo C"
          }}
    }
    if(id == 2){
        evento = {"2":{
            "categoria":"Baloncesto",
            "equipo_1": "Equipo A",
            "equipo_2": "Equipo C"
          }}
    }
    if(id == 3){
        evento = {"3":{
            "categoria":"Tenis",
            "equipo_1": "Equipo A",
            "equipo_2": "Equipo B"
          }}
    }
    res.status(200).json(evento)
}
// http://localhost:3000/api/evento/1

module.exports = {
    eventoListar,
    eventoGuardar,
    eventoObtener,
    eventoActualizar,
    eventoEliminar
}
