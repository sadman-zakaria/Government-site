import React from 'react'
import { cn } from '../../lib/units'
const Button = ({ children, className }) => {
  return (
    <>
     <div>
        <button className={ cn("text-white bg-gradient-to-b from-[#00D2FF] to-[#059DBE]  py-2 sm:py-4 px-[16px] sm:px-[25px] rounded-full font-bold hover:scale-105 active:scale-90 duration-500 cursor-pointer " ,className)}>
          {children}
          </button>
     </div>
    </>
  )
}

export default Button
