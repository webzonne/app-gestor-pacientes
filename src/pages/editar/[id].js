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
  

  const [pacient,setpacient] = useState({
    nombre:respuest.nombre,
    patologia:respuest.patologia
  })
  const guardar = (e)=>{
    e.preventDefault()
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
        push("/aplication")
      } catch (error) {
        console.log(error)
      }
  }

  const handlechange = (e)=>{
    const {name,value} = e.target
    setpacient({...pacient, [name]:value})
    console.log(e.target.value)
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
          />
      </Layout>
    </>
  )
}
