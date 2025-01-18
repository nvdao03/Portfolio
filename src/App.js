import React from 'react'
import './App.css'
import Home from './components/home'
import Sidebar from './components/sidebar'
import About from './components/about'
import Service from './components/services'
import Resume from './components/resume'
import Portfolio from './components/portfolio'
import Pricing from './components/pricing'
import Testimoninals from './components/testimonials'
import Blog from './components/blog'
import Contact from './components/contact'

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimoninals />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}

export default App
