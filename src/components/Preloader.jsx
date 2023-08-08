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
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 top-0 z-[100] flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background-black font-Bebas-Neue text-6xl text-lakshay-blue md:text-9xl"
        >
          <div id="percent" />
          <div id="bar" className="mt-[20px] w-[60%]">
            <div id="progress" className="w-[1%] bg-lakshay-blue p-[10px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
