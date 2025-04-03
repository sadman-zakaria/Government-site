import React from 'react'
import { cn } from '../../lib/units'

const TextGradiant = ({children, className}) => {
  return (
    <>
       <span className={cn('bg-gradient-to-b  from-[#00D2FF]  to-[#059DBE] text-transparent bg-clip-text text-3xl md:text-5xl font-bold',className)}>
        {children}
       </span>
    </>
  )
}

export default TextGradiant
