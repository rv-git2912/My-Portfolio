import Navbar from "./components/Navbar";
import CursorParticles  from "./Components/CursorParticles";
import FloatingBlobs from "./Components/FloatingBlobs"; 
import FloatingParticles from "./Components/FloatingParticles"
import Hero from "./components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";
import Education from "./Components/Education";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
       <CursorParticles />
      <FloatingParticles />
      <FloatingBlobs />
      <Hero />
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
