import React from 'react'
import { Container } from '../common/container'
import SectionTitle from '../common/SectionTitle'
import { partners } from '../../lib/DAtaBase'

const Brands = () => {
  return (
    <>
        <section className='px-5 my-[80px] md:my-[100px]'>
            <Container className={'bg-[#E6F9FD] max-w-[1267px] py-[25px] px-3 rounded-[20px]'}>
                <SectionTitle gradiant={"Partners"} className={'text-center'}> 
                    <span className='text-3xl md:text-5xl'>Our</span>
                </SectionTitle>

                <div className='pt-10 flex flex-wrap items-center justify-center gap-[30px]'>
                    {
                       partners.map(({src , alt}, i)=>(
                        <div key={i} className='bg-white w-[274px] h-[101px] rounded-[12px] flex  items-center justify-center'>
                          <img src={src} alt={alt} />
                        </div>
                       ))
                    }
                </div>
            </Container>
        </section>
    </>
  )
}

export default Brands
