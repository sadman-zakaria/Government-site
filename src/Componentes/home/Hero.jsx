import React from 'react'
import { Container } from '../common/container'
import Button from '../common/Button'

const Hero = () => {
  return (
    <>
       <section className='pt-12 md:pt-[102px] xl:pt-[142px]'>
            <Container className={'flex md:flex-row flex-col-reverse  items-center justify-center gap-5'}>
                <div className='space-y-6 md:space-y-[29px]  text-center  md:text-left'>
                 <h1 className=' text-[#2D2D2D]className="font-space-grotesk font-bold text-3xl
                md:text-4xl lg:text-5xl md: leading-[60px] lg:leading-[76px] max-w-[593px]"'>Simplify Your Real <br /> Estate Document <br />  Analysis</h1>
                 <p className='className="font-semibold text-base md:text-lg
                   lg:text-xl max-w-[519px]" text-[#2D2D2D]'>Streamline, Automate, and Secure Your Business <br /> Documents with Ai GoverningDocs</p>

                 <Button className={'md:my-6'}>Get Started Today</Button>
                </div>
                <div className=''>
                  <img src="/hero-side.svg" alt="" className='w-[80%] md:w-[550px] xl:w-[740px] mx-auto'/>
                </div>
            </Container>
       </section>
    </>
  )
}

export default Hero



