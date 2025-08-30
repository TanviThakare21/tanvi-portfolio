import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
      <Certificate />
      <Contact />
    
    </div>
  );
}

export default App;
