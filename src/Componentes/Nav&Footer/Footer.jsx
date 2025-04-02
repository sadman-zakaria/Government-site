import React from 'react'
import { Container } from '../common/container'
import { navItems, socialIcon } from '../../lib/DAtaBase'


const Footer = () => {
  return (
    <>
        <footer className='pt-5 lg:pt-22'>
            <Container>
                <div className='flex flex-col sm:flex-row items-center justify-between py-5 gap-2'>
                  <a href=' ' className='flex items-center '>
                    <h2 className=' font-bold text-3xl  lg:text-4xl'>Ai GoverningDocs</h2>
                    
                  </a>

                  <div className='flex flex-wrap items-center justify-center gap-3 xl:gap-4 '>
                    {navItems.map(({label,link},index)=>(
                      <a className='lg:block hidden' href={link}  key={index}>
                        <p className='text-[#666666] hover:text-blue-300 transition-colors duration-300 text-sm xl:text-base'  >
                          {label}
                        </p>
                      </a>
                    ))}
                  </div>
                  
                  <div className='flex items-center justify-center gap-2.5'>
                    {
                      socialIcon.map(({img, url}, i)=>(
                        <a target='_blank' key={i} href={url}>
                          <img src={img} alt="" className=' size-[40px]' />
                        </a>
                      ))
                    }
                  </div>
                </div>

                <div className='footer-border-color border-t border-transparent mt-5 md:mt-[50px] lg:mt-[86px]'>
                   <p className='text-lg text-center leading-[18px] py-5'>Ai GoverningDocs 2024. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    </>
  )
}

export default Footer
