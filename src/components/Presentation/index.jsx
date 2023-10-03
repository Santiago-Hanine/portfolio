import React from 'react'

export const Presentation = () => {
  return (
    <div id='home' className='lg:h-screen relative flex flex-col items-center max-w-[90%] lg:max-w-[70%] lg:pl-28 justify-center mx-auto py-10 lg:mt-0 mt-10'>
        <div className='flex flex-col w-full lg:flex-row items-center justify-between lg:gap-4 xl:gap-20'>
            <div className=''>
                <h2 className='text-white inline-block w-fit font-primary lg:text-8xl md:text-6xl text-5xl mb-4 overflow-hidden  border-r-2 whitespace-nowrap animate-type'>Hey I'm</h2>
                <h1 className=' lg:ml-24 text-strong-blue font-primary lg:text-8xl md:text-6xl text-5xl'>Santiago Hanine</h1>
            </div>

            <img className='mt-6 xl:h-[30rem] lg:h-[20rem]' src="./foto.png" alt="Avatar" />

        </div>


        <div className='lg:flex flex-col items-center w-full lg:absolute bottom-0 hidden'>
            <h2 className='xl:text-9xl lg:text-8xl text-lg text-white text-center font-bg opacity-5'>WEB</h2>
            <h2 className='xl:text-9xl lg:text-8xl text-lg text-white font-bg opacity-5'>DEVELOPER</h2>
        </div>
    </div>
  )
}
