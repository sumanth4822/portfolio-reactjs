import React from 'react';
import './index.css'
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Project from './routes/Project';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/contact' element={<Contact />}/>

      </Routes>
      </>
    </div>
  );
}

export default App;
