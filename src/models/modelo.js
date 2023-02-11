import mongoose from "mongoose";

const pacienteShema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true, "por favor ingresar nombre"]
    },
    patologia:{
        type:String,
        required:[true, "por favor ingresar patologia"]
    },
    sexo:{
        type:String,
        required:[true, "por favor ingresar sexo"]
    },
    edad:{
        type:Number,
        required:[true, "por favor ingresar edad"]
    },
    caso:{
        type:String,
        required:[true, "por favor ingresar edad"]
    },
    fecha:{
        type:String
        
    }
})

export default mongoose.models.pacientes || mongoose.model('pacientes', pacienteShema)