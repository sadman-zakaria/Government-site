import React from 'react'
import Button from '../common/Button'

const Navber = () => {
    const navItems = [
        { label: "Problem & Solution",    link: "#" },
        { label: 'Industries We Serve',   link: "#" },
        { label: 'How It Works',          link: "#" },
        { label: 'Testimonials',          link: "#" },
        { label: 'FAQs',                  link: "#" },
      ];

  return (
    <>
       
        <nav className=''>
            <div>
                <div className='flex justify-between items-center gap-2.5 px-[30px]'>
                    
                    <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl'>GoverningDocs</h2>
                    
                    <ul className=' flex items-center justify-center gap-4 xl:gap-6' >
                        {navItems.map(({label,link},index)=>(
                            <li className='' key={index}>
                                <a className='text-[#666666] hover:text-blue-300 transition-colors duration-300 text-sm xl:text-base' href={link} >
                                {label}
                               </a>
                            </li>
                        ))}
                    </ul>
                    <Button>Get Started Today</Button>
                </div>
            </div>

        </nav>
       
    </>
  )
}

export default Navber
