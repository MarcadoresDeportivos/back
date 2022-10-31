// Libreria para usar Mongo DB
const mongoose = require("mongoose")
// Dirección de la DB
//const URIDB = 'mongodb://localhost:27017/marcadores' //En local
//const URIDB = 'mongodb+srv://haroldCluster:haroldCluster@cluster0.elbwhsa.mongodb.net/test' //En el servidor de la DB
const URIDB = 'mongodb+srv://haroldCluster:haroldCluster@cluster0.elbwhsa.mongodb.net/marcadores' //En el servidor de la DB

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