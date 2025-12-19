import React, { useRef } from 'react'
import Navbar from './components/NavBar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import NetworkBackground from './components/Background/NetworkBackground'
import CursorEffects from './components/Cursor/CursorEffects'

const App = () => {
  const homeImageRef = useRef(null)

  return (
    <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <NetworkBackground />
      <CursorEffects />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Home homeImageRef={homeImageRef} />
        <About homeImageRef={homeImageRef} />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
