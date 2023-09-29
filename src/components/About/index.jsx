import { useState } from "react"
import { Skills } from "./Skills"
import {RxCross2} from 'react-icons/rx'
export const About = () => {

    const [showDescription, setShowDescription] = useState(false)
    const [saveSkill, setSaveSkill] = useState({})

    const handleOpen = (skill) => {
        setSaveSkill(skill)
        setShowDescription(true)
        console.log(saveSkill)
    }
      return (
    <div className="h-screen w-full pt-40 relative">
        
        <h2 className="pb-24 lg:pb-52 text-center text-6xl tracking-wider text-white font-kanit uppercase  after:absolute after:top-[250px] after:w-16 after:h-[8px]  after:left-[48.1%] after:bg-strong-blue after:rounded-lg"> About me </h2>
        
        <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between gap-48">
            <div className="mb-20 flex flex-col gap-6 w-1/2">
                <h2 className="text-4xl font-kanit text-white">Get to know me!</h2>
                <p className="text-white lg:w-full font-kanit text-xl ">
                I'm a <span className="text-strong-blue">Frontend Web Developer</span>  building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className="text-strong-blue">Projects</span> section.
                    <br /> <br />
                    My coding arsenal includes a diverse set of tools and languages, but my true superpower lies in turning concepts into captivating user experiences. From HTML to CSS, JavaScript and React to Php, I'm constantly learning and evolving to stay at the forefront of web development trends.
                </p>
            </div>

            <div className="lg:flex bg-strong-blue h-[400px] w-2 rounded-lg hidden">

            </div>

            <div className="flex flex-col relative justify-start gap-6 w-1/2">
                <h2 className="text-4xl text-white font-kanit">My Skills</h2>

                <div className="flex flex-wrap gap-6 w-full">
                    {Skills().map(item => (
                        <div onClick={() => handleOpen(item)} className="bg-skill-card cursor-pointer p-3  rounded-md " key={item.name}>
                            <h3 className="text-white">{item.name}</h3>

                        </div>
                    ))}
                </div>
                    {showDescription &&
                        <div className="bg-skill-card w-full h-fit p-3 relative">
                            <h3 className={`text-strong-blue font-kanit text-2xl`}>{saveSkill.name}</h3>
                            <p className="text-white font-kanit text-lg">{saveSkill.description}</p>
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
