import mongoose from "mongoose";

const MONGODB_URL= process.env.MONGODB_URL

const conectarDB = async() =>{
    try{
        await mongoose.connect(MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log('mongodb conectado')
    }catch(error) {
        console.log(error)
        process.exit(1)
    }
}

export default conectarDB