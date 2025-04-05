import React, { useState } from 'react'
import { Container } from '../common/container'
import SectionTitle from '../common/SectionTitle'
import { Arrow } from '../../icon'
import { faqs } from '../../lib/DAtaBase'
import FaqCard from './FaqCard'

const Faq = () => {

  const [openFaq, setOpenFaq] =useState(0);

  const handleChange =(index) =>{
    openFaq === index? setOpenFaq(-1) : setOpenFaq(index)
  }
  
  return (
    <>
      <section className='    bg-no-repeat  my-[40px] sm:my-20 lg:my-[100px] xl:my-[150px]'>
          <Container className={'max-w-[982.05px] relative z-10'}> 
            <SectionTitle className={'text-center'} gradiant={'Asked Questions'}> <span className='text-3xl md:text-5xl'>Frequently</span></SectionTitle>           
               
              <div className='pt-10 space-y-8'>

              {
                faqs.map((faq,i)=>(

                   <FaqCard key={i} onClick={()=> handleChange(i)} isActive={openFaq === i} {...faq}/>
                  ))
                }
                  
               </div>

               <img className=' absolute -top-6 lg:-top-[100px]  -left-[22%]' src="/faq-bg-line.svg" alt="" />
          </Container>

          
      </section>
    </>
  )


























}

export default Faq
