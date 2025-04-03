import React from 'react'

const ReviewCard = () => {
  return (
    <>
      <div className=' w-[491px] h-[92px] border border-[#00D2FF] hover:bg-[#00D2FF] active:bg-[#00D2FF] transition-colors duration-300 rounded-3xl group flex items-center justify-start  py-[1px] px-5 gap-[13px]'>
                        <img className='w-[68px] group-hover:text-white' src="/david.png" alt="" />

                        <div className=' '>
                          <h2 className=' font-semibold'>David</h2>
                          <p>Happy Client</p>
                        </div>
        </div>
    </>
  )
}

export default ReviewCard
