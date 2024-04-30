
import { ProjectList } from "./ProjectList"

export const Projects = () => {

  return (
    <div id="projects" className="flex flex-col items-center max-w-[90%] lg:max-w-[80%] lg:pl-28 justify-center mx-auto py-24">
      <h2 className="uppercase text-center font-kanit tracking-wider text-white md:text-6xl text-5xl relative after:absolute after:bottom-[-40px] after:w-16 after:h-[8px] after:translate-x-[-50%] after:left-[50%] after:bg-strong-blue after:rounded-lg mb-20">
        Projects
      </h2>

      <p className="text-center text-white text-lg font-kanit max-w-[70%] mx-auto">
        Here you will find some of the personal and clients projects that I created with each project containing its own case study
      </p>

      <div className="mt-28 flex flex-col gap-20">
        {ProjectList().map((project, index) => (
          <div key={index} className={`flex flex-col gap-14 ${index % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center`}>
            <img
              data-aos="fade-up"
              data-aos-delay="400"
              className="lg:w-3/6 w-full max-h-[600px] object-cover rounded-3xl"
              src={project.img}
              alt={project.name}
            />
            <div data-aos="fade-up" className="flex flex-col items-center lg:items-start gap-6 bg-skill-card p-4 w-full">
              <h2 className="text-white text-3xl lg:text-4xl font-kanit">{project.name}</h2>
              <p className="font-kanit lg:text-lg text-base text-center lg:text-left text-white w-full">{project.description}</p>
              <a
                target="_blank"
                className="text-white bg-strong-blue hover:bg-blue-900 transition-all duration-700 w-fit p-2 rounded-md tracking-wider font-kanit text-lg"
                href={project.link}
              >
                See the Code...{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
