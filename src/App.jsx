import React from "react";
import Lenis from "@studio-freight/lenis";

import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Explore } from "./components/Explore";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
const BlobComponent = React.lazy(() => import("./components/MouseBlob"));

export const App = () => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

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
  );
};

export default App;
