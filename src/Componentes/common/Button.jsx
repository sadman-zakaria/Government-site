import React from 'react'
import { cn } from '../../lib/units'
const Button = ({ children, className }) => {
  return (
    <>
     <div>
        <button className={ cn("text-white bg-gradient-to-b from-[#00D2FF] to-[#059DBE] py-4 px-[25px] rounded-full font-bold hover:scale-105 duration-500 cursor-pointer " ,className)}>
          {children}
          </button>
     </div>
    </>
  )
}

export default Button
