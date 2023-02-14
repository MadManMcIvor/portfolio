import {FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaDocker, FaPython, FaGit} from 'react-icons/fa'
import {} from 'react-icons/di'
import {SiTailwindcss, SiDjango, SiExpress, SiFastapi, SiMysql, SiPostgresql, SiMongodb} from 'react-icons/si'


import SkillElement from './SkillElement'

function Skills() {  
  return (
  <section className='bg-gray-50 md:px-28 px-10 h-auto py-10'>

    <div className="text-5xl text-center pb-2">
      <h2 className='bg-gradient-to-r from-emerald-600 to-sky-600 inline-block text-transparent bg-clip-text'>
        Skills
      </h2>
    </div>
    
    <div className='flex flex-row justify-center'>
      <div className="flex flex-wrap w-full justify-center rounded bg-gray-200 bg-opacity-80">
        <SkillElement icon={<FaReact size={80} style={{ color: "white" }} />} text="React" />
        <SkillElement icon={<FaHtml5 size={80} style={{ color: "white" }} />} text="HTML" />
        <SkillElement icon={<FaCss3Alt size={80} style={{ color: "white" }} />} text="CSS" />
        <SkillElement icon={<FaJsSquare size={80} style={{ color: "white" }} />} text="ES6" />
        <SkillElement icon={<FaDocker size={80} style={{ color: "white" }} />} text="Docker" />
        <SkillElement icon={<FaPython size={80} style={{ color: "white" }} />} text="Python" />
        <SkillElement icon={<FaGit size={80} style={{ color: "white" }} />} text="git" />
        <SkillElement icon={<SiTailwindcss size={80} style={{ color: "white" }} />} text="Tailwind" />
        <SkillElement icon={<SiDjango size={80} style={{ color: "white" }} />} text="Django" />
        <SkillElement icon={<SiExpress size={80} style={{ color: "white" }} />} text="Express" />
        <SkillElement icon={<SiFastapi size={80} style={{ color: "white" }} />} text="FastAPI" />
        <SkillElement icon={<SiMysql size={80} style={{ color: "white" }} />} text="MySQL" />
        <SkillElement icon={<SiPostgresql size={80} style={{ color: "white" }} />} text="Postgres" />
        <SkillElement icon={<SiMongodb size={80} style={{ color: "white" }} />} text="Mongo" />
      </div>
    </div>

  </section>
  )
}

export default Skills