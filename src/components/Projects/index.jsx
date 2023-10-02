
const projects = [
    {
        name: 'Todo List',
        description: 'This TodoList is a new project that I developed during my journey of learning React.js, an influential JavaScript library for building interactive user interfaces. The project revolves around creating a personalized and feature-rich todo list application that showcases my progress and skills as I delved into the world of React.js development.',
        img: './TodoList.png',
        link:'https://santiago-hanine.github.io/Shop-Hanine/',
    },
    {
        name: 'Shop Hanine ',
        description: 'In my early JavaScript learning journey, I created a simple online shop project. It showcases basic product browsing, cart management, and real-time updates. This project marked my initial steps into web development and e-commerce functionality.',
        img: './Shop-Hanine.png',
        link:'https://santiago-hanine.github.io/Shop-Hanine/',
    },
    {
        name: 'Portfolio ',
        description: 'My React and Vite-powered portfolio is a showcase of my web development expertise, where I have applied all my knowledge. It is a dynamic, fast, and interactive display of my skills and achievements.',
        img: './portfolio.png',
        link:'https://santiago-hanine.github.io/portfolio/',
    },

]
console.log(projects)

export const Projects = () => {
  return (
    <div id='projects' className='mt-24 w-full'>
        <h2 className='uppercase text-center font-kanit tracking-wider text-white text-6xl relative after:absolute after:bottom-[-40px] after:w-16 after:h-[8px] after:translate-x-[-50%] after:left-[50%] after:bg-strong-blue after:rounded-lg mb-20'>Projects</h2>

        <p className='text-center text-white text-lg font-kanit max-w-[70%] mx-auto'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>

        <div className="mt-28 flex flex-col gap-20">
            {projects.map((project, index) => (
              <div key={index} className={`flex gap-14 ${index % 2 == 0 ? 'flex-row-reverse' : ''} items-center`}>
                  <img onClick={()=> console.log(index)} className='w-3/6' src={project.img} alt="Todo List Project" />
                  <div className="flex flex-col gap-6 bg-skill-card p-4 w-full">
                      <h2 className="text-white text-4xl font-kanit">{project.name}</h2>
                      <p className="font-kanit text-lg text-white w-full">{project.description}</p> 
                  </div>
              </div>
            ))}

        </div>
    </div>
  )
}
