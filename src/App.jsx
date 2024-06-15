import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import About from './assets/components/About'


function App() {

  return (
    <>

    <BrowserRouter>

    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>


       <Navbar />
       <Hero  />  
    
    </BrowserRouter>
    </>
  )
}

export default App
