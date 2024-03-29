import React from 'react'

export const Presentation = () => {
  return (
    <div id='home' className='lg:h-screen relative flex flex-col items-center max-w-[90%] lg:max-w-[70%] justify-center mx-auto py-28 lg:mt-0'>
        <div className='flex flex-col w-full lg:flex-row items-center lg:ml-20 justify-between lg:gap-4 xl:gap-20 lg:-mt-28'>
            <div className=''>
                <h2 className='text-white inline-block w-fit font-primary lg:text-8xl md:text-6xl text-5xl mb-4 overflow-hidden  border-r-2 whitespace-nowrap animate-type'>Hey I'm</h2>
                <h1 className=' lg:ml-24 text-strong-blue font-primary lg:text-8xl md:text-6xl text-5xl'>Santiago Hanine</h1>
            </div>

            <img className='mt-6 xl:h-[30rem] lg:h-[22rem] object-cover' src="./foto.webp" alt="Avatar" />

        </div>


        <div className='lg:flex flex-col items-center w-full text-center absolute lg:left-10 bottom-0 xl:text-9xl lg:text-8xl md:text-5xl text-4xl'>
            <h2 className='text-white text-center font-bg opacity-5'>WEB</h2>
            <h2 className='text-white font-bg opacity-5'>DEVELOPER</h2>
        </div>
    </div>
  )
}
