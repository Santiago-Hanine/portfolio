
import { ProjectList } from "./ProjectList"

export const Projects = () => {
  return (
    <div id='projects' className='mt-24 w-full'>
        <h2 className='uppercase text-center font-kanit tracking-wider text-white text-6xl relative after:absolute after:bottom-[-40px] after:w-16 after:h-[8px] after:translate-x-[-50%] after:left-[50%] after:bg-strong-blue after:rounded-lg mb-20'>Projects</h2>

        <p className='text-center text-white text-lg font-kanit max-w-[70%] mx-auto'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>

        <div className="mt-28 flex flex-col gap-20">
            {ProjectList().map((project, index) => (
              <div key={index} className={`flex flex-col gap-14 ${index % 2 == 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
                  <img onClick={()=> console.log(index)} className='lg:w-3/6 w-full' src={project.img} alt={project.name} />
                  <div className="flex flex-col gap-6 bg-skill-card p-4 w-full">
                      <h2 className="text-white text-4xl font-kanit">{project.name}</h2>
                      <p className="font-kanit text-lg text-white w-full">{project.description}</p> 
                      <a target="_blank" className="text-white bg-strong-blue w-fit p-2 rounded-md tracking-wider font-kanit text-lg" href={project.link}>See the Project... </a>
                  </div>
              </div>
            ))}

        </div>
    </div>
  )
}
