import { useState } from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education"
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from './components/Footer/Footer';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

function App() {
  const [openModal, setOpenModal] = useState({state: false, project: null})
  return (
    <div>
      <Navbar />
      <div className='body'>
        <About />
        <div className="specialBg">
          <Skills />
          <Experience />
        </div>
        <Projects setOpenModal={setOpenModal}/>
        <div className="specialBg">
          <Education />
          <Contact />
        </div>
        <Footer />
        {openModal.state &&
          <ProjectDetail openModal={openModal} setOpenModal={setOpenModal} />
        }
      </div>
      
    </div>
  );
}

export default App;
