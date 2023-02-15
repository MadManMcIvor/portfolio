import { useState } from "react";
import Resume from "./Resume";

function Nav() {
    let sections =[
        {name:"About",link:"/"},
        {name:"Skills",link:"/"},
        {name:"Projects",link:"/"},
        {name:"Contact",link:"/"},
      ];
      let [open,setOpen]=useState(false);
    return (
      <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center
        text-zinc-600'>
          <span className='text-3xl text-cyan-800 mr-1 pt-2'>
          <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <a href='/'> Alex McIvor </a>
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            sections.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <a href="https://drive.google.com/file/d/16ZCNcdScyZTGL7jvFNN4MLrfy2F50iXZ/view?usp=share_link" target="_blank">
            <Resume>
                  Resume
            </Resume>
          </a>
        </ul>
        </div>
      </div>
    )
  }
  
export default Nav