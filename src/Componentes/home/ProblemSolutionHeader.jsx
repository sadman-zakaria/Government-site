import React from 'react'
import SectionTitle from '../common/SectionTitle';
import { Container } from '../common/container';
import { Arrow } from '../../icon';
const ProblemSolutionHeader = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-5'>
      <SectionTitle gradiant='Solution'>
        Problem & 
      </SectionTitle>

      <div className='flex items-center justify-center gap-2.5  sm:gap-6'>
      <button className='text-[#00D2FF] bg-[#fffbf7] shadow-lg rounded-full size-9 cursor-pointer hover:scale-90 active:scale-90 transition-all duration-200'>
        <Arrow className='mx-auto'/>
       </button>
       <button className='bg-[#00D2FF] text-white shadow-lg rounded-full size-9 cursor-pointer hover:scale-90 active:scale-90 transition-all duration-200'>
  <Arrow className='mx-auto'/>
</button>
      </div>
    </div>
  )
}

export default ProblemSolutionHeader;
