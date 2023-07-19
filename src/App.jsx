import React from 'react'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Explore } from './components/Explore'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BlobComponent } from './components/MouseBlob'

export const App = () => {

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