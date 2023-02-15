import ProjectElement from "./ProjectElement"
import GoalApp from '../assets/dashboard.png'
import Wheelz from '../assets/wheelz.png'
import AleTrail from '../assets/aletrail.png'
import Discord from '../assets/discord.jpeg'


function Projects() {
  return (
    <section className="bg-gray-50 md:px-28 px-10 h-auto py-10 my-1">
    
    <div className="text-5xl text-center pb-2">
      <h2 className='bg-gradient-to-r from-emerald-600 to-sky-600 inline-block text-transparent bg-clip-text'>
        Projects
      </h2>
    </div>
    
    <div className='flex flex-row justify-center'>
      <div className="flex flex-wrap w-full justify-center rounded bg-gray-200 bg-opacity-80 py-3">
      
      <ProjectElement 
        title="GoalApp"
        description="A responsive fullstack application with user authorization for setting goals using the MERN stack w/ Redux for central state management."      
        link="https://github.com/MadManMcIvor/MERN_Goal_App"
        photo={GoalApp} 
           />
        <ProjectElement 
          title="Wheelz"
          description="A single-page fullstack application using a React frontend with Bootstrap CSS, a RESTful django backend, and a Postgress database."      
          link="https://gitlab.com/MadManMcIvor/wheelz"
          photo={Wheelz} 
            />

        <ProjectElement 
          title="AleTrail"
          description="A single-pageBeer and brewery app built with React, FastAPI, and deployed using Heroku and GitLab pages."      
          link="https://gitlab.com/aletrail/ale-trail-alpha"
          photo={AleTrail} 
            />

        <ProjectElement 
          title="Stable Diffusion Discord Chatbot"
          description="Chatbot linking an the AI art generator, Stable Diffusion, to a Discord channel"      
          link="https://github.com/MadManMcIvor/InvokeAI"
          photo={Discord} 
            />

      </div>
    </div>


    </section>
  )
}

export default Projects