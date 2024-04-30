import { useState } from "react"
import { Skills } from "./Skills"
import {RxCross2} from 'react-icons/rx'


export const About = () => {


    const [showDescription, setShowDescription] = useState(false)
    const [saveSkill, setSaveSkill] = useState({})

    const handleOpen = (skill) => {
        setSaveSkill(skill)
        setShowDescription(true)
    }
      return (
        <div id="about" className="w-screen bg-skill-card md:py-32 py-12">
          <div className="flex flex-col items-center max-w-[80%] lg:max-w-[80%] lg:pl-28 justify-center mx-auto">
            <h2 className="mb-24 relative lg:mb-36 text-center md:text-6xl text-5xl tracking-wider text-white font-kanit uppercase  after:absolute after:bottom-[-40px] after:w-16 after:h-[8px] after:translate-x-[-50%] after:left-[50%] after:bg-strong-blue after:rounded-lg">
              {" "}
              About me{" "}
            </h2>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-48">
              <div data-aos="fade-up"  className="mb-20 md:mb-0 flex flex-col gap-6 max-w-[100%]">
                <h2 className="md:text-4xl text-3xl font-kanit text-white">Get to know me!</h2>
                <p className="text-white lg:w-full font-kanit text-lg leading-7">
                  I'm a <span className="text-strong-blue">Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to
                  the success of the overall product. Check out some of my work in the <span className="text-strong-blue">Projects</span> section.
                </p>
                <p className="text-white lg:w-full font-kanit text-lg leading-7">
                  My coding arsenal includes a <span className="text-strong-blue"> diverse set of tools and languages</span>, but my true superpower lies in
                  turning concepts into captivating user experiences. I'm constantly learning and evolving to stay at the forefront of web development trends.
                </p>

                <a
                  href="#contact"
                  className="cursor-pointer text-center uppercase font-kanit tracking-wider bg-strong-blue hover:bg-blue-900 transition-all duration-500 w-36 h-13 text-white py-3 rounded-lg text-lg "
                >
                  Contact
                </a>
              </div>

              <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col relative justify-start gap-6">
                <h2 className="md:text-4xl text-3xl text-white font-kanit">My Skills</h2>

                <div className="flex flex-wrap gap-6 w-full">
                  {Skills().map((item) => (
                    <div
                      onClick={() => handleOpen(item)}
                      className="bg-skill-card hover:bg-gray-700 transition-all duration-500 cursor-pointer p-3  rounded-md "
                      key={item.name}
                    >
                      <h3 className="text-white">{item.name}</h3>
                    </div>
                  ))}
                </div>
                {showDescription && (
                  <div className="bg-skill-card w-full h-max p-3 relative">
                    <h3 className={`text-strong-blue font-kanit text-2xl`}>{saveSkill.name}</h3>
                    <p className="text-white font-kanit text-lg pb-4">{saveSkill.description}</p>
                    <div onClick={() => setShowDescription(false)} className=" cursor-pointer absolute top-2 right-2">
                      <RxCross2 className="aboslute text-strong-blue h-8 w-8" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
}
