import React from 'react'
import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education/>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App;