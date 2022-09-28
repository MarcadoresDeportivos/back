const mongoose = require('mongoose')

const equipoScheme = mongoose.Schema(
    {
        nombre : {
            type : String,
            required : true,
            trim : true
        },
        categoria : {
            type : String,
            required : true,
            trim : true
        },
        creado : {
            type : Date,
            default : Date.now()
        }
    }
)

module.exports = mongoose.model("equipo", equipoScheme)
