import React from 'react'
import Button from '../common/Button'
import { navItems } from '../../lib/DAtaBase'
const Navber = () => {

  return (
    <>
       
        <nav className='  sticky top-5 z-50  backdrop-blur-lg rounded-full max-w-[1440px] mx-auto '>
            
                <div className='flex justify-between items-center gap-2.5  px-2
                sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5  rounded-full   bg-amber-200'>
                    
                    <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl'>GoverningDocs</h2>
                    
                    <ul className=' flex items-center justify-center gap-4 xl:gap-6' >
                        {navItems.map(({label,link},index)=>(
                            <li className='' key={index}>
                                <a className='text-[#666666] hover:text-blue-300 transition-colors duration-300 text-sm xl:text-base' href={link} >
                                {label}
                               </a>
                            </li>
                        ))}
                    </ul>
                    <Button>Get Started Today</Button>
                </div>
            
                <div>
                    <button className='sm:hidden'>
                        
                    </button>
                </div>
        </nav>
       
    </>
  )
}

export default Navber
