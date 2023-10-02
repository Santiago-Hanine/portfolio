import { useState } from "react"
import { Skills } from "./Skills"
import {RxCross2} from 'react-icons/rx'
export const About = () => {

    const [showDescription, setShowDescription] = useState(false)
    const [saveSkill, setSaveSkill] = useState({})

    const handleOpen = (skill) => {
        setSaveSkill(skill)
        setShowDescription(true)
        console.log(saveSkill.experience)
    }
      return (
    <div id="about" className="md:h-[60vh] h-screen w-full md:mt-24 ">
        
        <h2 className="mb-24 relative lg:mb-44 text-center text-6xl tracking-wider text-white font-kanit uppercase  after:absolute after:bottom-[-40px] after:w-16 after:h-[8px] after:translate-x-[-50%] after:left-[50%] after:bg-strong-blue after:rounded-lg"> About me </h2>
        
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-48">
            
            <div className="mb-20 md:mb-0 flex flex-col gap-6 max-w-[100%]">
                <h2 className="text-4xl font-kanit text-white">Get to know me!</h2>
                <p className="text-white lg:w-full font-kanit text-xl leading-7">
                I'm a <span className="text-strong-blue">Frontend Web Developer</span>  building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className="text-strong-blue">Projects</span> section.</p>
                <p className="text-white lg:w-full font-kanit text-xl leading-7">
                    My coding arsenal includes a diverse set of tools and languages, but my true superpower lies in turning concepts into captivating user experiences. From HTML to CSS, JavaScript and React to Php, I'm constantly learning and evolving to stay at the forefront of web development trends.
                </p>

                <a href="#contact" className="cursor-pointer text-center uppercase font-kanit tracking-wider bg-strong-blue w-36 h-13 text-white py-3 rounded-lg text-lg ">
                    Contact
                </a>
            </div>

            <div className="flex flex-col relative justify-start gap-6 ">
                <h2 className="text-4xl text-white font-kanit">My Skills</h2>

                <div className="flex flex-wrap gap-6 w-full">
                    {Skills().map(item => (
                        <div onClick={() => handleOpen(item)} className="bg-skill-card cursor-pointer p-3  rounded-md " key={item.name}>
                            <h3 className="text-white">{item.name}</h3>

                        </div>
                    ))}
                </div>
                    {showDescription &&
                        <div className="bg-skill-card w-full h-max p-3 relative">
                            <h3 className={`text-strong-blue font-kanit text-2xl`}>{saveSkill.name}</h3>
                            <p className="text-white font-kanit text-lg pb-4">{saveSkill.description}</p>
                            <p className="text-white font-kanit text-sm pb-2">Experience</p>
                            <div className={`${saveSkill.experience == '2 Years' ? 'bg-green-500 w-3/4' : 'bg-orange-500 w-1/2'} absolute bottom-3 h-1`}>
                            </div>
                            <div onClick={() => setShowDescription(false)} className=" cursor-pointer absolute top-2 right-2">
                                <RxCross2 className="aboslute text-strong-blue h-8 w-8"/>
                            </div>
                        </div>
                    }

            </div>

        </div>
    </div>
  )
}
