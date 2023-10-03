import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='bg-black w-screen'>
      <div className=' relative h-80 lg:h-96 flex flex-col gap-8 lg:gap-20 py-10 px-6 max-w-[90%] lg:max-w-[70%] lg:pl-28 justify-center mx-auto '>
      
      <div className='flex flex-col-reverse lg:flex-row gap-8 lg:justify-between'>

        <div className=' flex flex-col gap-2'>
          <h3 className='text-white font-kanit tracking-widest text-lg uppercase lg:text-2xl'>Santiago Hanine</h3>
          <p className='font-kanit text-white tracking-widest text-xs lg:text-base'>Specializing in web development, I craft the user-facing components of websites and web applications.</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='text-white font-kanit tracking-widest text-lg lg:text-2xl uppercase'>Social</h2>
          <div className='flex gap-4'>
          <a target='_blank' href="https://github.com/Santiago-Hanine">
                  <AiFillGithub className='fill-white w-10 h-10 '/>
                  </a>
                  <a href="https://linkedin.com/in/santiago-hanine/">
                      <AiFillLinkedin className='fill-white w-10 h-10'/>
                  </a>
          </div>
        </div>
      </div>

        <div className='border-t-[#444] border-t w-full px-6 mx-auto'>
          <p className='text-white font-kanit text-xs lg:text-sm tracking-widest pt-4 text-center'>© Copyright 2023. Made by Santiago Hanine</p>
        </div>


      
    </div>
    </div>
  )
}
