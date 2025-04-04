import React from 'react'
import { Container } from '../common/container'
import Button from '../common/Button'

const Note = () => {
  return (
    <>
        <section className='py-[50px] px-5'>
            <Container className={'max-w-[1184px] max-h-[314px] bg-gradient-to-br from-[#00D2FF] to-[#05748d] rounded-[20px]'}>

                <div className='py-[20px] md:py-[56px] flex flex-wrap items-center justify-evenly space-y-[30px]'>
                    <div className='md:space-y-[30px] space-y-[10px]'>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white'>Ready to Simplify Your <br /> Document Management?</h1>

                        <p className='font-semibold text-white'>Sign up today and experience the power of AI-driven legal  <br />   documentation.</p>
                    </div>

                    <div className=''>
                        <Button className={'bg-white text-[#2D2D2D]]'}>Get Started Now</Button>
                    </div>
                </div>

            </Container>
        </section>
    </>
  )
}

export default Note
