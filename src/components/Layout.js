import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import listIcon from '../img/list.png';
import estadisticaIcon from '../img/estadistica.png';
import userAddIcon from '../img/userAdd.png';
import Cargando from '../components/Cargando';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  useEffect(() => {
    const handleLoading = () => setLoading(false);

    window.addEventListener('load', handleLoading);

    return () => {
      window.removeEventListener('load', handleLoading);
    };
  }, []);

  return (
    <>
      <div className='bg-bgLayout py-10'>
        <div className='flex w-12/12 sm:w-10/12 mx-auto justify-around md:justify-between'>
          <Link href='/Lista'>
            <div
              onClick={handleClick}
              className='flex flex-row justify-center items-center p-2 md:p-5 w-20 md:w-28 h-20 md:h-auto border  border-cyan-50 hover:opacity-60'
            >
              <Image src={listIcon} alt='list-icon' />
            </div>
          </Link>
          <Link href='/estadisticas'>
            <div
              onClick={handleClick}
              className='flex flex-row justify-center items-center p-2 md:p-5 w-20 md:w-28 h-20 md:h-auto border  border-cyan-50 hover:opacity-60'
            >
              <Image src={estadisticaIcon} alt='estadistica-icon' />
            </div>
          </Link>
          <Link href='/formulario'>
            <div
              onClick={handleClick}
              className='flex flex-row justify-center items-center p-2 md:p-5 w-20 md:w-28 h-20 md:h-auto border  border-cyan-50 hover:opacity-60'
            >
              <Image src={userAddIcon} alt='add-icon' />
            </div>
          </Link>
        </div>
      </div>
      <div>{children}</div>
      {loading && <Cargando />}
    </>
  );
}

