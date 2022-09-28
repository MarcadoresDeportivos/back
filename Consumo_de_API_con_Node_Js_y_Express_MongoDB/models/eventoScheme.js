const mongoose = require('mongoose')

const eventoScheme = mongoose.Schema(
    {
        rival1 : {
            type : String,
            required : true,
            trim : true
        },
        rival2 : {
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

module.exports = mongoose.model("evento", eventoScheme)
