import React from 'react';
import Image from 'next/image';
import loadingIcon from '../img/loading.png'

export default function Loading() {
  return (
    <div>
        <div>
        <Image src={loadingIcon} alt='loading-icon' className='rotate'/>
        </div>
    </div>
  )
}