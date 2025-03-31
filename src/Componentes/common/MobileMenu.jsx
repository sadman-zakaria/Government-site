import React from 'react'
import Logo from './Logo'

const MobileMenu = () => {
  return (
    <>
       <div className='md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 overflow-y-hidden'>
            <Logo/> 
            <button className='text-black text-2xl self-end '>
                &times;
            </button>
       </div>
    </>
  )
}

export default MobileMenu