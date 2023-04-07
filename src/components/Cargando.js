import React from 'react';
import Image from 'next/image';
import loadingIcon from '../img/loading.png';

export default function Loading() {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <Image src={loadingIcon} alt='loading-icon' className='rotate' />
      </div>
    </div>
  );
}
