import React from 'react'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Explore } from './components/Explore'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BlobComponent } from './components/MouseBlob'

export const App = () => {
console.log("Please use Chromium-based browser for best experience. Thank you!")
console.log("Please ignore the error messages and warnings they are due to spotify embeds.")
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Explore />
      <Contact />
      <Footer />
      <BlobComponent />
    </>
  )
}

export default App