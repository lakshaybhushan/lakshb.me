import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const move = () => {
      const progress = document.getElementById("progress");
      const percent = document.getElementById("percent");
      let width = 1;
      let id = setInterval(frame, 24);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          setAnimationComplete(true);
        } else {
          width++;
          progress.style.width = width + "%";
          percent.innerHTML = width * 1 + "%";
        }
      }
    };
    move();
  }, []);

  return (
    <AnimatePresence>
      {!animationComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="top-0 h-screen w-full text-lakshay-blue bottom-0 left-0 right-0 z-[100] flex flex-col justify-center items-center overflow-hidden font-Bebas-Neue text-6xl md:text-9xl bg-background-black fixed">
          <div id="percent" />
          <div id="bar" className="w-[60%] mt-[20px]">
            <div id="progress" className="w-[1%] p-[10px] bg-lakshay-blue" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
