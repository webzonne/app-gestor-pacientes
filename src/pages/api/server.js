//importamos el archivo para conectarnos con la base de dato
import baseDeDatos from "../../lib/dbConnect"
//importamos el modelo las reglas que debe tener el archivo JSON
import modelo from '../../models/modelo'

//Creamos una funcion para saber que hacer con las peticiones  HTTTP que nos mandan
// la funcion no puede ser de tipo flecha

export default async function server(req,res){
    await baseDeDatos()
    const {method} = req

    switch(method){
        case 'POST':
            try {
                const dato = new modelo(req.body)
                await dato.save()
                return res.status(200).json({mensaje:'dato guardado exitosamente'})
            } catch (error) {
                return res.status(400).json({error})
            }
            default:
            return res.status(500).json({mensaje:'falla en el servidor'})
    }
}

