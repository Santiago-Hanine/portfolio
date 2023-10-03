import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { SidebarItems } from './SidebarItems'


export const Sidebar = () => {
  return (
        <div className='fixed left-0 top-0 w-28 h-screen border-r-4 bg-black-bg border-skill-card hidden lg:flex flex-col items-center justify-around gap-16 z-50 '>
            <div>
                <a href="/">
                    <img className='w-full h-full object-cover' src="./logo.png" alt="" />
                </a>
            </div>


            <div className='flex flex-col  w-full'>
                {SidebarItems().map(item => (
                    <div key={item.name} className={`${item.classname ? 'border-b-skill-card  border-b-2' : ''} border-t-skill-card border-t-2 w-full h-20 flex items-center justify-center`}>
                        <a href={item.link} className='text-white font-kanit uppercase tracking-wider text-center text-lg'>{item.name}</a>
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
