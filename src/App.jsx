import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      default:
        return <Hero />
    }
  }

  return (
    <div className="app-wrapper">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <div className="content-grid">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
