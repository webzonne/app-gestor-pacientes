import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image';
import userIcon from '../img/user.png'
import { useRouter } from 'next/router';
import conectarDB from '../lib/dbConnect';
import modelPaciente from '../models/modelo';
import Cargando from '../components/Cargando';


// SERVER
export async function getServerSideProps() {
  try {
    await conectarDB()

    const res = await modelPaciente.find({})
    const pacientes = res.map((element) => {
      const paciente = element.toObject()
      paciente._id = paciente._id.toString()

      return paciente
    })

    // retorna
    return { props: { pacientes } }
  } catch (err) {
    console.log(err)
    return { props: { pacientes: [] } }
  }
}
// CLOSE SERVER



export default function Lista({ pacientes }) {
  // VARIABLES
  const { push } = useRouter()
  const [cargando, setCargando] = useState(false)
  // FUNCIONES
  useEffect(() => {
    const isAuth = sessionStorage.getItem('isAuth')
    if (!isAuth) {
      push('/')
    }
  }, [])

  //DETALLE
  const detalle = async (e) => {
    setCargando(true)
    push(`/detalle/${e._id}`)
    setCargando(false)
  }
  // EDITAR
  const editar = async (e) => {
    push(`/editar/${e._id}`)
  }

  // ELIMINAR
  const eliminar = async (e) => {
    confirm('desea eliminar? ' + e.nombre)
    await fetch(`api/eliminar/${e._id}`, {
      method: 'DELETE'
    })
    window.location.reload()
  }


  // CONSOLE
  // console.log(pacientes)
  return (
    <>
      {cargando ? <Cargando/> :null}
      <Layout>
        {pacientes.length !== 0 ?
          <div className=' w-10/12 md:w-8/12 mt-[100px] mx-auto'>
            <div className='flex flex-row justify-between items-center py-10'>
              <h2 className='font-semibold text-slate-700 text-xs sm:text-2xl'>LISTA DE PACIENTES</h2>
              {/* <div className=''>
                <input className='border w-[150px] sm:w-[260px] border-borderList rounded outline-none' type='text' name='search' />
              </div> */}
            </div>

            {/* MAPEADO */}
            {pacientes.map((e) => {
              return (
                <div key={e._id} className='flex items-center w-full'>
                  <div onClick={() => detalle(e)} className='flex flex-row w-full items-center my-5 h-10 sm:h-[142px] border border-borderList cursor-pointer hover:border-slate-300'>
                    <div className='ml-2 mr-5 lg:ml-10 lg:mr-20 w-8 sm:w-24'>
                      <Image src={userIcon} alt='user-icon' />
                    </div>
                    <p className='w-auto text-sm sm:text-xl md:text-2xl xl:text-3xl text-slate-700'>{e.nombre?.toUpperCase()}</p>
                  </div>
                  <div className='flex flex-row items-center'>
                    <button onClick={() => editar(e)} className='bg-botonEdit w-auto sm:w-32 p-2 sm:p-5 h-10 sm:h-[142px] text-sm sm:text-xl text-cyan-50 font-semibold hover:opacity-80'>Editar</button>
                    <button onClick={() => eliminar(e)} className='bg-botonEliminar w-auto sm:w-32 p-2 sm:p-5 h-10 sm:h-[142px] text-sm sm:text-xl text-cyan-50 font-semibold hover:opacity-80'>Eliminar</button>
                  </div>
                </div>
              )
            })
            }
            {/* TERMINA MAPEADO */}
          </div>
          : <p className='w-8/12 mt-44 mx-auto text-md sm:text-4xl text-center'>No hay pacientes por ahora..</p>}
      </Layout>
    </>
  )
}

