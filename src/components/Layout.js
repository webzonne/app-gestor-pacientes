import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import listIcon from '../img/list.png';
import estadisticaIcon from '../img/estadistica.png';
import userAddIcon from '../img/userAdd.png'

export default function Layout({ children }) {
    return (
        <>
            <div className='bg-bgLayout py-10'>
                <div className='flex w-12/12 sm:w-10/12 mx-auto justify-around md:justify-between'>

                    <Link href='/Lista'>
                        {/* <div>
                            <button className='bg-botoncolor py-2 w-28 sm:w-36 rounded text-slate-50 hover:opacity-60'>Lista</button>
                        </div> */}
                        <div className='flex flex-row justify-center items-center p-2 md:p-5 w-20 md:w-28 h-20 md:h-auto border  border-cyan-50 hover:opacity-60'>
                            <Image src={listIcon} alt='list-icon'/>
                        </div>
                    </Link>
                    <Link href='/estadisticas'>
                        {/* <div>
                            <button className='bg-botoncolor py-2 w-28 sm:w-36 rounded text-slate-50 hover:opacity-60'>Formulario</button>
                        </div> */}
                        <div className='flex flex-row justify-center items-center p-2 md:p-5 w-20 md:w-28 h-20 md:h-auto border  border-cyan-50 hover:opacity-60'>
                            <Image src={estadisticaIcon} alt='estadistica-icon'/>
                        </div>
                    </Link>
                    <Link href='/formulario'>
                        {/* <div>
                            <button className='bg-botoncolor py-2 w-28 sm:w-36 rounded text-slate-50 hover:opacity-60'>Estadisticas</button>
                        </div> */}
                         <div className='flex flex-row justify-center items-center p-2 md:p-5 w-20 md:w-28 h-20 md:h-auto border  border-cyan-50 hover:opacity-60'>
                            <Image src={userAddIcon} alt='add-icon'/>
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
