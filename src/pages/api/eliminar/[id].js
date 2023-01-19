//importamos el archivo para conectarnos con la base de dato
import baseDeDatos from "../../../lib/dbConnect"
//importamos el modelo las reglas que debe tener el archivo JSON
import modelo from "../../../models/modelo"

//Creamos una funcion para saber que hacer con las peticiones  HTTTP que nos mandan
// la funcion no puede ser de tipo flecha

export default async function server(req,res){

    await baseDeDatos()
    const {method, query: { id }} = req

    switch(method){
        case 'DELETE':
            try {
                await modelo.findByIdAndDelete(id)
                return res.status(200).json({mensaje:'borrado con exito'})
            } catch (error) {
                return res.status(404).json({mensaje:'id no encontrada'})
            }
            default:
            return res.status(500).json({mensaje:'falla en el servidor'})
    }
}