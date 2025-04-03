import React from 'react'
import { Container } from '../common/container'
import ProblemSolutionHeader from './ProblemSolutionHeader'
import { problemSolutions } from '../../lib/DAtaBase'

const ProblemSolution = () => {
  return (
    <>
       <section className='pt-32'>
           <Container>
               <ProblemSolutionHeader/>
               <div className="pt-10 flex flex-wrap justify-center items-center gap-5 lg:gap-[30px]">
                {problemSolutions.map(({image,title,des1,des2},i)=>(
                    <div key={i} className=' w-[272px] h-[349px] rounded-3xl p-5 space-y-4 shadow-xl  active:bg-[#00D2FF] hover:bg-[#00D2FF] transition-colors duration-300 group'>
    
                    <div className= ' bg-[#62e2ff]  rounded-full size-[58px] flex items-center justify-center'>
                        <img src={image} alt={title} />
                    </div>
            
                    <h1 className='font-bold text-lg group-hover:text-white group-active:text-white transition-colors duration-300 text-gray-700'>
                        {title}
                    </h1>
            
                    <div className='space-y-2.5 group-hover:text-white group-active:text-white  transition-colors duration-300'>
                        <p>
                            {des1}

                        </p>

                        {des2 &&<p>{des2}</p>}
                    </div>
                </div>
                ))}
               </div>
           </Container>
       </section>
    </>
  )
}

export default ProblemSolution
