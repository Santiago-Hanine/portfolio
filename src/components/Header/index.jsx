import { useState, useEffect } from 'react'
import {FiMenu} from 'react-icons/fi'
import { HeaderItems } from './HeaderItems'


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 62) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])


  return (
      <div className={`lg:hidden w-screen fixed top-0 z-10 transition-[all_5s] h-20 ${scrolled ? 'bg-white' : 'bg-gray-500'}`}>
      <h2 className={`${scrolled ? 'text-black' : 'text-white'} text-xl tracking-wider font-kanit absolute left-9 top-7`}>Santiago Hanine</h2>
        {!isOpen &&
            <FiMenu className={`${scrolled ? 'text-black' : 'text-white'} absolute right-8 top-4 h-12 w-12`} onClick={() => setIsOpen(!isOpen)}/>
        }
    
        {isOpen && (
        <div className='bg-white'>
            <FiMenu onClick={()=> setIsOpen(!isOpen)} className={`${scrolled ? 'text-black' : 'text-white'}  absolute right-8 z-10 top-4 h-12 w-12`}/>
            
            <div className={`absolute top-[64px] mt-4 right-0 pr-10 p-2 w-full  ${isOpen ? 'block' : 'hidden' } text-right ${scrolled ? 'bg-white' : 'bg-gray-500'}  z-10 animate-[menuAppear_0.4s_ease-in-out]`}>
                {HeaderItems().map(item => (
                    <div className='w-full' key={item.name}>
                        <a className={`text-black ${scrolled ? 'text-black': 'text-white'} font-kanit text-2xl flex flex-col my-5 text-right`} href={item.link}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
        )}
    </div>

  )
}
