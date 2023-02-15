import About from "./comps/About";
import Contact from "./comps/Contact";
import Footer from "./comps/Footer";
import Hero from "./comps/Hero";
import Nav from "./comps/Nav";
import Projects from "./comps/Projects";
import Skills from "./comps/Skills";


function App() {
  return (
      <div className="bg-gradient-to-r from-emerald-600 to-sky-600 w-fu">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
}

export default App;
