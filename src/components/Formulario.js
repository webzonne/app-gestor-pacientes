import React from 'react'

export default function Formulario({guardar, handlechange, pacient}) {
    return (
        <>
            <form onSubmit={guardar}>
                <div className='border w-8/12 mx-auto p-5 border-slate-400  flex-inline'>
                    <p>NOMBRE DEL PACIENTE</p>
                    <input onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' type='text' name='nombre' defaultValue={pacient.nombre} />
                    <p>PATOLOGIA</p>
                    <textarea onChange={handlechange} className='w-full py-2 my-7 border border-slate-400 focus:outline-none' rows='6' type='text' name='patologia' defaultValue={pacient.patologia}></textarea>
                    <div>
                        <button className='bg-green-700 py-3 px-5 mr-5 rounded-lg text-slate-50'>Guardar</button>
                    </div>
                </div>
            </form>
        </>
    )
}
