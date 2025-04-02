import React from 'react'
import Logo from './Logo'
import { navItems } from '../../lib/DAtaBase'

const MobileMenu = ({toggoleMenu}) => {
  return (
    <>
       <nav className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden'>
            <div className='flex justify-between items-center pb-6'>
            <Logo/> 
            <button onClick={toggoleMenu} className='text-black text-2xl self-end ' aria-label='Close Menu'>
                &times;
            </button>
            </div>

            <div className='space-y-4'>
               {
                navItems.map(({link,label},index)=>(
                  <a className='block text-[#666666] hover:text-blue-300 transition-colors duration-300' key={index} href={link}>{label}</a>
                ))
               }
            </div>
       </nav>
    </>
  )
}

export default MobileMenu