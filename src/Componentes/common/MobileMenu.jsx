import React from 'react'
import Logo from './Logo'
import { navItems } from '../../lib/DAtaBase'
import Button from './Button'

const MobileMenu = ({toggoleMenu}) => {
  return (
    <>
       <nav className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden'>
            <div className='flex justify-between items-center pb-10'>
            <Logo className=''/> 
            <button onClick={toggoleMenu} className='text-black text-2xl self-end cursor-pointer hover:scale-125 transition-all duration-300' aria-label='Close Menu'>
                &times;
            </button>
            </div>

            <div className='space-y-4'>
               {
                navItems.map(({link,label},index)=>(
                  <div className='bg-gradient-to-r from-gray-200 to-gray-400 p-2 px-10 rounded-3xl' key={index}>
                    <a className='block text-[#666666] font-semibold hover:text-blue-300 transition-colors duration-300'  href={link}>{label}</a>
                  </div>
                ))
               }
            </div>

            <div className= 'w-full flex justify-center items-center py-10'>
            <Button className={' shadow-xl '}>Get Started Today</Button>
            </div>
       </nav>
    </>
  )
}

export default MobileMenu