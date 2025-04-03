import React from 'react'
import SectionTitle from '../common/SectionTitle'
import { Container } from '../common/container'
import ReviewCard from './ReviewCard'
const Review = () => {
  return (
    <>
       <section className='mt-[150px] bg-[#F6F6F6] py-20'>
          <Container>
             <SectionTitle gradiant='Our Client' className={'text-center'}>
             Reviews From 
             </SectionTitle>

             <div className=' flex items-center justify-center gap-[93px] pt-10'>
                    <div>
                       <ReviewCard/>
                       <ReviewCard/>
                       <ReviewCard/>
                    </div>
                   <div className=''>
                    Right
                    </div>

                </div>
          </Container>
       </section>
    </>
  )
}

export default Review
