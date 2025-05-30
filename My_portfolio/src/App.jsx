import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
