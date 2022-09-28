const mongoose = require('mongoose')

const usuarioScheme = mongoose.Schema(
    {
        nombre : {
            type : String,
            required : true,
            trim : true
        },
        email : {
            type : String,
            required : true,
            trim : true
        },
        surname : {
            type : String,
            required : true,
            trim : true
        },
        password : {
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

module.exports = mongoose.model("usuario", usuarioScheme)
