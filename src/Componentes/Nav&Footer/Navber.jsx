import React, { useState } from 'react'
import Button from '../common/Button'
import { navItems } from '../../lib/DAtaBase'
import Logo from '../common/Logo'
import MobileMenu from '../common/MobileMenu'
import { Container } from '../common/container'

const Navber = () => {

const [isMenuOpen, setMenuOpen] = useState(false);
const toggoleMenu =()=>{
    setMenuOpen(!isMenuOpen);
}

  return (
    <>
       
        <nav className='px-3 py-5 sm:py-8 xl:py-10 relative '>
        <Container >
            
            <div className='flex justify-between items-center gap-2.5  px-2
            sm:px-4 xl:px-[16px] py-2 sm:py-3.5 xl:py-3  rounded-full   bg-white'>
                
                <Logo/>
                
                <ul className=' flex items-center justify-center gap-4 xl:gap-6' >
                    {navItems.map(({label,link},index)=>(
                        <li className='hidden lg:flex' key={index}>
                            <a className='text-[#666666] hover:text-blue-300 transition-colors duration-300 text-sm xl:text-base' href={link} >
                            {label}
                           </a>
                        </li>
                    ))}
                </ul>

                <Button className={'lg:block hidden '}>Get Started Today</Button> 

                <button onClick={toggoleMenu} className='lg:hidden flex justify-end cursor-pointer hover:scale-105 transition-all duration-300'>
                    <div className='space-y-1 px-2'>
                        <span className='block w-6 h-0.5 bg-black' />
                        <span className='block w-6 h-0.5 bg-black' />
                        <span className='block w-6 h-0.5 bg-black' />
                    </div>
                </button>

                
            </div>
        
            
                
            
    </Container>
              
             {isMenuOpen && <MobileMenu toggoleMenu={toggoleMenu}/>}
        </nav>
    </>
  )
}

export default Navber
