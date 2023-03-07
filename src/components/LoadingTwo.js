import React from 'react';
import Image from 'next/image';
import loadingTwo from '../img/loading-two.png';

export default function Loading() {
  return (
    <div>
        <div>
        <Image src={loadingTwo} alt='loadingTwo-icon' className='rotate'/>
        </div>
    </div>
  )
}