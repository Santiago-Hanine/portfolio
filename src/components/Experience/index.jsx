import React from 'react'
import list from './list'

export const Experience = () => {
  return (
    <div className="flex flex-col items-center max-w-[80%] lg:max-w-[60%] lg:pl-28 justify-center mx-auto py-20">

        <h3 className='mb-16 lg:mb-24 relative text-center md:text-6xl text-5xl tracking-wider text-white font-kanit uppercase '>
            Experience
        </h3>
            <ol className="relative border-s border-gray-200 ml-3"> 
            
            {list().map((item, index) => (
                <li key={index} className="mb-10 ms-4"> 
            
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-strong-blue bg-strong-blue">
                </div> 
                <time className="mb-1 text-sm font-normal leading-none text-white/80">{item.date}</time> 
                <h3 className="text-lg font-semibold text-strong-blue mt-2"> 
                    {item.position}
                </h3> 
                <p className="mb-4 text-base font-normal text-white "> 
                    {item.description}
                </p> 
             </li>
            ))}
</ol>
    </div>
  )
}

export default Experience