import {React, useState} from 'react'
import Formulario from '../../components/Formulario'
import Layout from '../../components/Layout'
import conectarDB from '../../lib/dbConnect'
import modelo from '../../models/modelo'
import { useRouter } from 'next/router'



// SERVER
export async function getServerSideProps({ params }) {
  try {
    await conectarDB()
    const respuest = await modelo.findById(params.id).lean()
    respuest._id = respuest._id.toString()
    return { props: { respuest } }
  } catch (err) {
    console.log(err)
  }
}
// CLOSE SERVER




export default function editar({respuest}) {
  // VARIABLES
  const {query,push} = useRouter()
  const [isLoadingTwo, setIsLoadingTwo] = useState(false)
  

  const [pacient,setpacient] = useState({
    nombre:respuest.nombre,
    cedula:respuest.cedula,
    ocupacion:respuest.ocupacion,
    direccion:respuest.direccion,
    vivienda:respuest.vivienda,
    nivel:respuest.vivienda,
    ruta:respuest.ruta,
    telefono:respuest.telefono,
    enfermedad:respuest.enfermedad,
    diagnostico:respuest.diagnostico,
    plan:respuest.plan,
    pendiente:respuest.pendiente,
    abordaje:respuest.abordaje,
    evaluado:respuest.evaluado,
    operacion:respuest.operacion,
    protesis:respuest.protesis,
    fechaNacimiento:respuest.fechaNacimiento,
    fechaCirugia:respuest.fechaCirugia,
    fechaOperacion:respuest.fechaOperacion,
    diabetes:respuest.antecedentes.diabetes,
    hipertencion:respuest.antecedentes.hipertencion,
    artritis:respuest.antecedentes.artritis,
    sexo:respuest.sexo,
    edad:respuest.edad,
  })
  // console.log(respuest.antecedentes)
  const guardar = (e)=>{
    e.preventDefault()
    setIsLoadingTwo(true)
    updatePaciente(pacient)
  }

  const updatePaciente = async(pacient)=>{
      try {
        await fetch(`/api/update/${query.id}`,{
          method:"PUT",
          headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(pacient),
        })
        setTimeout( async()=>{
          push("/Lista")
         },5000)
      } catch (error) {
        console.log(error)
      }
  }

  const handlechange = (e)=>{
    const {name,value} = e.target
    setpacient({...pacient, [name]:value})
    
  }
  return (
    <>
      <Layout>
        <div className='w-8/12 mx-auto'>
          <h1 className='text-xl mb-10 mt-20'>EDICIÓN</h1>
        </div>
          <Formulario
          guardar={guardar}
          handlechange={handlechange}
          pacient={pacient}
          isLoadingTwo={isLoadingTwo}
          />
      </Layout>
    </>
  )
}
