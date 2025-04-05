import React from 'react'
import { Arrow } from '../../icon'
const FaqCard = ({a,q,onClick, isActive}) => {
  return (
    <>
    
  
        <div onClick={onClick}  className='cursor-pointer bg-white shadow-[0_8px_10px_0_rgba(0,0,0,0.1),0_-4px_6px_0_rgba(0,0,0,0.1)]  rounded-[20px] py-5 px-[30px]'>
            <button   className='w-full inline-flex items-center justify-between gap-5 cursor-pointer'>
                <h1 className='font-bold md:text-[18px] lg:text-[26px] text-start leading-[36px]'>{q}</h1>
    
                <div className='text-blue-300 '>
                    <Arrow className={'-rotate-90 '}/>
                </div>
            </button>
    
            {
            isActive && (   
                  <p  className='pt-5 text-gray-600'>
                  {a} 
                 </p>
                )
            }
        </div>  
                     
    </>
  )
}

export default FaqCard
