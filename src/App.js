import About from "./comps/About";
import Contact from "./comps/Contact";
import Footer from "./comps/Footer";
import Hero from "./comps/Hero";
import Nav from "./comps/Nav";
import Projects from "./comps/Projects";
import Sidebar from "./comps/Sidebar";
import Skills from "./comps/Skills";


function App() {
  return (
      <>
        <Nav />
        <Sidebar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
}

export default App;
