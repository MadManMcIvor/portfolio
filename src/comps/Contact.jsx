import Alex from '../assets/alex_avatar.png'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {RiGitlabFill} from 'react-icons/ri'
 
function Contact() {
  return (
    <section id="hero" className="bg-gradient-to-r from-emerald-600 to-sky-600 w-fu md:flex md:justify-around md:items-center pb-10 px-20">  
    
    {/* IMAGE */}
    <div className="basis-2/5 mt-5 md:mt-10">
      <div className=' rounded-full overflow-hidden'>
        <img src={Alex}/>
      </div>
    </div>
    
    {/* TEXT */}
    <div className='md:w-2/5'>
      <div className="basis-4/5 mt-5 md:mt-10">
        <h1 className="text-5xl underline font-semibold text-center pb-8 text-gray-100">Get in Touch</h1>
      </div>
      <div className='flex justify-evenly pb-7'>
        <a href='mailto:mcivor444@gmail.com' alt='Email'><MdEmail className="text-6xl z-10 text-start md:text-start text-gray-100"/></a>
        <a href='https://www.linkedin.com/in/alex-mcivor-swe/' alt='LinkedIn' target="_blank"><BsLinkedin className="text-6xl z-10 text-end md:text-end text-gray-100"/></a>
      </div>
      <div className='flex justify-evenly'>
      <a href='https://github.com/MadManMcIvor' alt='GitHub' target="_blank"><BsGithub className="text-6xl z-10 text-center md:text-start text-gray-100"/></a>
      <a href='https://gitlab.com/MadManMcIvor' alt='GitLab' target="_blank"><RiGitlabFill className="text-6xl z-10 text-center md:text-start text-gray-100"/></a>
      </div>
    </div>
  
  </section>  )
}

export default Contact