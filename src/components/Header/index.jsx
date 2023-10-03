import { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import { HeaderItems } from './HeaderItems'


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="lg:hidden w-screen fixed top-0 z-10 bg-white h-20">
        <h2 className='text-blakc text-2xl tracking-wider font-kanit absolute left-8 top-6'>Santiago Hanine</h2>
        {!isOpen &&
            <FiMenu className='text-black  absolute right-8 top-4 h-12 w-12' onClick={() => setIsOpen(!isOpen)}/>
        }
    
        {isOpen && (
        <div>
            <FiMenu onClick={()=> setIsOpen(!isOpen)} className='text-black  absolute right-8 z-10 top-4 h-12 w-12'/>
            
            <div className={`absolute top-14 mt-4 right-0 pr-10 p-2 w-full  ${isOpen ? 'block' : 'hidden' } text-right bg-white z-10 animate-[menuAppear_0.4s_ease-in-out]`}>
                {HeaderItems().map(item => (
                    <div className='w-full' key={item.name}>
                        <a className='text-black font-kanit text-2xl flex flex-col my-5 text-right' href={item.link}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
        )}
    </div>

  )
}
