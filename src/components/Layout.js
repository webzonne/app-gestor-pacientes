import React from 'react'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <>
            <div className='border-b border-slate-200 py-5'>
                <div className='flex w-10/12 mx-auto justify-between'>

                    <Link href='/aplication'>
                        <div>
                            <button className='bg-botoncolor py-2 w-36 rounded text-slate-50 hover:opacity-60'>Lista</button>
                        </div>
                    </Link>
                    <Link href='/formulario'>
                        <div>
                            <button className='bg-botoncolor py-2 w-36 rounded text-slate-50 hover:opacity-60'>Formulario</button>
                        </div>
                    </Link>
                    <Link href='/estadisticas'>
                        <div>
                            <button className='bg-botoncolor py-2 w-36 rounded text-slate-50 hover:opacity-60'>Estadisticas</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}
