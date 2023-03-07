import React, { useState } from 'react'
import { useRouter } from 'next/router'
import conectarDB from '../lib/dbConnect'
import modeloUsers from '../models/modeloUsers'
import homeIcon from '../img/home.png';
import Image from 'next/image';
import Loading from '../components/Loading';

export async function getServerSideProps() {
  try {
    await conectarDB()
    const res = await modeloUsers.find({})
    const usuarios = res.map((element) => {
      const usuario = element.toObject()
      usuario._id = usuario._id.toString()
      return usuario
    })

    // retorna
    return { props: { usuarios } }
  } catch (err) {
    console.log(err)
  }
}
// CLOSE SERVER



export default function Index({ usuarios }) {
  // VARIABLE
  const init = {
    usuario: '',
    password: ''
  }
  const { push } = useRouter()
  const [user, setuser] = useState(init)
  const [isLoading, setisLoading] = useState(false)
  // FUNCIONES
  // const entrar = (e)=>{
  //   e.preventDefault()
  //   push("/aplication")
  // }
  const handlechance = (e) => {
    const { name, value } = e.target
    setuser({ ...user, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.usuario != usuarios[0].usuario || user.password != usuarios[0].password) {
      alert('usuario o contrasena invalida')
    } else {
      setisLoading(true)
      setTimeout(async()=>{
        sessionStorage.setItem("isAuth", "true");
        push("/Lista")
      },5000)
    
    }
  }

  // CONSOLE

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className='flex mt-40 justify-center relative'>
          <div className='flex flex-col w-12/12 sm:w-4/12 py-20 px-12 border rounded bg-bgLayout relative'>
            <div className='absolute top-5 left-5'>
              <Image src={homeIcon} alt='home-png' />
            </div>
            <p className='mb-3 text-cyan-50 font-semibold'>USUARIO</p>
            <input onChange={handlechance} className='border border-slate-400 h-8 mb-5 outline-none' type='text' name='usuario' />
            <p className='mb-3 text-cyan-50 font-semibold'>CONTRASEÑA</p>
            <input onChange={handlechance} className=' border border-slate-400 h-8 mb-5 outline-none' type='password' name='password' />
            <div className='flex items-center'>
              <button className='bg-botoncolor py-2 px-4 mr-4 rounded-sm hover:opacity-60'>INGRESAR</button>
             { isLoading ? <Loading/>:null}
            </div>
          </div>
        </form>

      </div>
    </>
  )
}
