// import { useState } from "react";
// import Resume from "./Resume";
// import Alex from '../assets/alex_avatar.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

// function Nav() {
//     let sections =[
//         {name:"About",link:"/"},
//         {name:"Skills",link:"/"},
//         {name:"Projects",link:"/"},
//         {name:"Contact",link:"/"},
//       ];
//       let [open,setOpen]=useState(false);
//     return (
//       <div className='shadow-md w-full relative top-0 left-0'>
//         <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//         <div className='font-bold text-2xl cursor-pointer flex items-center
//         text-gray-600'>
//           <img className='h-11' src={Alex} alt="Alex's Avatar" />
//           <a href='/'> Alex McIvor </a>
//         </div>
        
//         <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//         <ion-icon name={open ? 'close':'menu'}></ion-icon>
//         </div>
  
//         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
//           {
//             sections.map((link)=>(
//               <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//                 <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
//               </li>
//             ))
//           }
//           <a href="https://drive.google.com/file/d/16ZCNcdScyZTGL7jvFNN4MLrfy2F50iXZ/view?usp=share_link" target="_blank">
//             <Resume>
//                   Resume
//             </Resume>
//           </a>
//         </ul>
//         </div>
//       </div>
//     )
//   }
  
// export default Nav


import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import Alex from '../assets/alex_avatar.png'
import Resume from "./Resume";



const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
          offset='30'
            className={`${selectedPage === lowerCasePage ? "text-cyan-600" : "text-gray-800"
                } `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Mobile = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            offset='30'
            className={`${selectedPage === lowerCasePage ? "text-yellow" : "text-white"
                } block px-4 py-2 hover:bg-gray-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};



const Nav = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const navbarBackground = isTopOfPage ? "bg-white border-b border-gray-200 border-gray-600" : "bg-white border-b border-gray-200 border-gray-600";

    return (
        <div className="flex relative items-center justify-between mx-auto w-5/6">

            {/* DESKTOP NAV */}
            <div className="flex items-center justify-between mx-auto w-5/6 gap-8 font-semibold">
                <nav className={`${navbarBackground} py-2  fixed w-full z-50 top-0 left-0`}>
                    <div className="relative container flex flex-wrap items-center justify-between mx-auto w-5/6">
                        <img src={Alex} className="h-12 mr-3 md:h-[55px]" alt="Alex Avatar" />
                        <div className="flex md:order-2">
                            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-sticky">
                            <ul className="flex items-center flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0">
                                <li>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </li>
                                <li>
                                    <Link
                                        page="About"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </li>
                                <li>
                                    <Link
                                        page="Skills"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </li>
                                <li>
                                    <Link
                                        page="Projects"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </li>
                                <li>
                                    <Link
                                        page="Contact"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </li>
                                <a href="https://drive.google.com/file/d/16ZCNcdScyZTGL7jvFNN4MLrfy2F50iXZ/view?usp=share_link" target="_blank">
                                    <Resume>
                                          Resume
                                    </Resume>
                                </a>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* MOBILE NAV */}
                {isMenuToggled && (
                    <div id="dropdownNavbar" className="md:hidden fixed top-14 z-50 right-0 font-normal divide-y rounded shadow w-44 bg-gray-700 divide-gray-600">
                        <ul className="py-1 text-sm text-cyan-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <Mobile
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </li>
                            <li>
                                <Mobile
                                    page="About"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </li>
                            <li>
                                <Mobile
                                    page="Skills"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </li>
                            <li>
                                <Mobile
                                    page="Projects"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </li>
                            <li>
                                <Mobile
                                    page="Contact"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </li>
                      
                      
                        </ul>
                    </div>

                )}
            </div>

        </div>

    );
};

export default Nav;