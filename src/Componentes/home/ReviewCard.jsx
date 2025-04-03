import React from 'react'
import { reviews } from '../../lib/DAtaBase'
import { cn } from '../../lib/units'
const ReviewCard = ({name, image, type, Acive}) => {
  return (
    <>
      <div className= {cn(' w-[491px] h-[92px] border border-[#00D2FF] hover:bg-[#00D2FF] active:bg-[#00D2FF] transition-colors duration-300 rounded-3xl group flex items-center justify-start  py-[1px] px-5 gap-[13px] cursor-pointer', Acive && 'bg-[#00D2FF]')}>
                        <img className='w-[68px] group-hover:text-white' src={image} alt={name} />

                        <div className=' group-hover:text-white group-active:text-white '>
                          <h2 className=' font-semibold'>{name}</h2>
                          <p>{type}</p>
                        </div>
        </div>
    </>
  )
}

export default ReviewCard
