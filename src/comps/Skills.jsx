import {FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaDocker, FaPython, FaGit} from 'react-icons/fa'
import {} from 'react-icons/di'
import {SiTailwindcss, SiDjango, SiExpress, SiFastapi, SiMysql, SiPostgresql, SiMongodb} from 'react-icons/si'


import SkillElement from './SkillElement'

function Skills() {  
  return (
  <section className='bg-gray-50 px-40 h-auto py-10'>
    <div className="text-4xl pt-4 text-center">
      <h2 className='bg-gradient-to-r from-emerald-600 to-sky-600 inline-block text-transparent bg-clip-text'>
        Skills
      </h2>
    </div>
    <div className='flex-wrap justify-between'>
      <SkillElement icon={<FaReact/>} text="React" />
      <SkillElement icon={<FaHtml5/>} text="HTML" />
      <SkillElement icon={<FaCss3Alt/>} text="CSS" />
      <SkillElement icon={<FaJsSquare/>} text="ES6" />
      <SkillElement icon={<FaDocker/>} text="Docker" />
      <SkillElement icon={<FaPython/>} text="Python" />
      <SkillElement icon={<FaGit/>} text="git" />
      <SkillElement icon={<SiTailwindcss/>} text="Tailwind" />
      <SkillElement icon={<SiDjango/>} text="Django" />
      <SkillElement icon={<SiExpress/>} text="Express" />
      <SkillElement icon={<SiFastapi/>} text="FastAPI" />
      <SkillElement icon={<SiMysql/>} text="MySQL" />
      <SkillElement icon={<SiPostgresql/>} text="Postgres" />
      <SkillElement icon={<SiMongodb/>} text="Mongo" />


    </div>
  </section>
  )
}

export default Skills