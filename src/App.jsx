import { useState, useEffect } from "react";
import About from "./comps/About";
import Contact from "./comps/Contact";
import Hero from "./comps/Hero";
import Nav from "./comps/Nav";
import Projects from "./comps/Projects";
import Skills from "./comps/Skills";
import AskAlex from "./comps/AskAlex";
import { motion } from "framer-motion";
import {BsFillChatRightTextFill} from "react-icons/bs"

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [showChat, setShowChat] = useState(false);

  const handleShowChat = () => {
    setShowChat(!showChat)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="bg-gradient-to-r from-emerald-600 to-sky-600 w-fu">
       
        <Nav   
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTopOfPage={isTopOfPage}
      />
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Hero />
        </motion.div>

        <About />

        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        > 
          <Skills />
        </motion.div>
        
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>

        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
          {showChat? <AskAlex/> :  
          <div className="fixed right-7 bottom-4">
            <button onClick={handleShowChat}><BsFillChatRightTextFill size={80}/></button>
          </div>}
      </div>
    );
}

export default App;


// This is for before trying to use the DaisyUI Modal
// {showChat? <AskAlex/> :  
// <div className="fixed right-7 bottom-4">
//   <button onClick={handleShowChat}><BsFillChatRightTextFill size={80}/></button>
// </div>}