import React, { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import { Container } from '../common/container'
import ReviewCard from './ReviewCard'
import { reviews } from '../../lib/DAtaBase'
import { Star } from '../../icon'
import { cn } from '../../lib/units'


const Review = () => {

    const [Active, setActive] = useState(1);

  return (
    <>
       <section className='mt-[150px] bg-[#F6F6F6] py-20'>
          <Container>
             <SectionTitle gradiant='Our Client' className={'text-center'}>
             Reviews From 
             </SectionTitle>

             <div className=' flex items-center justify-center gap-[93px] pt-10'>
                    {/* review line */}
                    <div className="bg-[#E2DED8] w-[5px] rounded-[50px]">
                        <div className="space-y-[15px]">

                        {
                            Array.from(Array(3).keys()).map((el) =>
                                <div key={el} className={cn("w-[5px] h-[92px] rounded-[20px] bg-transparent", Active === el && 'bg-[#00D2FF]')} />    )
                        }
                           
                           
                        </div>
                    </div>
                {/* review list */}
                    <div className="space-y-[15px] flex-grow">
                      {
                        reviews.map(( review,i)=>(
                            <ReviewCard key={i} {...review} Active={Active === i}/>
                        ))
                      }
                    </div>

                    {/* Review  details*/}
                   <div className='space-y-5'>
                      <h1 className="font-bold text-[30px]">It Was A Amazing Experiance!</h1>

                      <div className='flex items-center justify-Start gap-1'>
                        {
                            Array.from(Array(5).keys()).map((el) =><Star key={el}/> )
                        }
                      </div>

                      <p className="text-base text-gray-700">The AI features saved us countless hours and ensured our compliance was spot on.
                      </p>
                    </div>

                </div>
          </Container>
       </section>
    </>
  )
}

export default Review
