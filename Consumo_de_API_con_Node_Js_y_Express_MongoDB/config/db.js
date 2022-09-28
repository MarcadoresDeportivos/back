// Libreria para usar Mongo DB
const mongoose = require("mongoose")
// Dirección de la DB
const URIDB = 'mongodb://localhost:27017/marcadores'

module.exports = ()=>{
    const conn = () => {
        mongoose.connect(
            URIDB,
            {
                keepAlive : true,
                useNewUrlParser : true,
                useUnifiedTopology : true
            },
            (err) => {
                if(err){
                    console.log("Error Conec: "+err)
                }else{
                    console.log("Conexión Satisfactoria")
                }                
            }
        )
    }
    conn()
}