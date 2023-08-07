import React from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Explore } from "./components/Explore";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <Preloader />
        <NavBar />
        <Hero />
        <Projects />
        <Explore />
        <Contact />
        <Footer />
        <BlobComponent />
      </motion.div>
    </>
  );
};

export default App;
