import React from 'react'

const Index = () =>{ 
  // VARIABLE

  // FUNCIONES
  const entrar = (e)=>{
    e.preventDefault()
    push("/app")
  }
  // CONSOLE
  return(
  <>
    <div>
      <form className='flex mt-40 justify-center'>
        <div className='flex flex-col w-3/12 px-7 py-7 border border-slate-400 rounded'>
          <p className='mb-3 text-gray-800'>USUARIO</p>
          <input  className='border border-slate-400 h-8 mb-5 outline-none' type='text' name='usuario' />
          <p className='mb-3 text-gray-800'>CONTRASEÑA</p>
          <input className=' border border-slate-400 h-8 mb-5 outline-none'  type='password' name='contrasena' />
          <div>
          <button onClick={entrar} className='bg-botoncolor py-2 px-4 rounded-sm'>ENTRAR</button>
          </div>
          
        </div>
      </form>
    </div>
  </>
)}
export default Index