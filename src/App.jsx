import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import PageTransition from './components/PageTransition'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div className="bg-base-100 min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-16 flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition>
                  <About />
                </PageTransition>
              } />
              <Route path="/projects" element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              } />
              <Route path="/contact" element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
