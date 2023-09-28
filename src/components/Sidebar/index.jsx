import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { SidebarItems } from './SidebarItems'


export const Sidebar = () => {
  return (
        <div className='fixed left-0 w-28 h-screen bg-dark-blue flex flex-col items-center justify-around gap-32'>
            <div>
                <a href="/">
                    <img className='w-full h-full object-cover' src="./logo.png" alt="" />
                </a>
            </div>


            <div className='flex flex-col  w-full'>
                {SidebarItems().map(item => (
                    <div key={item.name} className={`${item.classname ? item.classname : ''} border-t w-full h-20 flex items-center justify-center`}>
                        <a href={item.link} className='text-white text-center text-xl'>{item.name}</a>
                    </div>
                ))}
            </div>

            <div className='flex flex-col gap-10'>
                <a target='_blank' href="https://github.com/Santiago-Hanine">
                <AiFillGithub className='fill-white w-10 h-10 '/>
                </a>
                <a href="https://linkedin.com/in/santiago-hanine/">
                    <AiFillLinkedin className='fill-white w-10 h-10'/>
                </a>
            </div>
        </div>
  )
}
