import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { getInitialTheme, applyTheme } from './utils/theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import UploadSection from './components/UploadSection'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [results, setResults] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const uploadRef = useRef(null)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleResults = (data) => {
    setResults(data)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const handleReset = () => {
    setResults(null)
    setTimeout(() => {
      scrollToUpload()
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Toaster
        position="top-right"
        toastOptions={{
          className: '!bg-white dark:!bg-gray-800 !text-gray-900 dark:!text-white !shadow-lg !border !border-gray-200 dark:!border-gray-700',
          duration: 4000,
        }}
      />

      <Navbar theme={theme} toggleTheme={toggleTheme} onUploadClick={scrollToUpload} />

      <AnimatePresence mode="wait">
        {results ? (
          <motion.main
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-16">
              <Results results={results} onReset={handleReset} />
            </div>
          </motion.main>
        ) : (
          <motion.main
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero onUploadClick={scrollToUpload} />
            <About />
            <Blog />
            <Features />
            <HowItWorks />
            <div ref={uploadRef}>
              <UploadSection
                onResults={handleResults}
                isAnalyzing={isAnalyzing}
                setIsAnalyzing={setIsAnalyzing}
              />
            </div>
            <Testimonials />
            <FAQ />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
