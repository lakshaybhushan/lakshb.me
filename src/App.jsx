import React from 'react'
// import AnimatedCursor from "react-animated-cursor"

import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Explore } from './components/Explore'
import { Contact } from './components/Contact'

export const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects />
      <Explore />
      <Contact />
      {/* <AnimatedCursor
        innerSize={0}
        outerSize={40}
        color='196, 219, 224'
        outerAlpha={1}
        outerScale={4}
        trailingSpeed={1}
        outerStyle={{ mixBlendMode: 'difference' }}
      /> */}
    </div>
  )
}

export default App