import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { BsBoxArrowUpRight } from "react-icons/bs";


export const Projects = () => {

  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start((i) => ({
        x: 0,
        transition: {
          type: 'tween',
          duration: 0.8,
          delay: i * 0.2,
        },
      }));
    }
    if (!inView) {
      animation.start((i) => ({
        x: '-100vw',
        transition: {
          type: 'tween',
          duration: 0.8,
          delay: i * 0.2,
        },
      }));
    }

  }, [inView]);

  return (
    <section id='projects'>

      <motion.div
        initial={{ opacity: 0, y: '150' }}
        animate={{ opacity: 1, y: 0, transition: { duration: 2, delay: 0.5, type: 'spring', bounce: 0.3, } }}
        className='md:ml-8 font-Outfit md:h-screen md:pt-10 pt-5'>

        <h1 className='font-Bebas-Neue md:text-[4.65rem] md:h-[6.5rem] text-[4rem] text-center md:text-left'>Projects</h1>

        <p className='md:text-[2.75rem] md:w-[60rem] leading-tight text-center px-10 md:text-left md:px-0 text-[1.6rem]'>these are some of the latest projects that I have worked on ... more on <a href='https://github.com/lakshaybhushan' target='_blank' rel="noopener noreferrer" className='underline decoration-solid hover:text-highlight-blue transition-colors duration-500'>github</a></p>

        <div ref={ref} className="Reference"></div>

        <div className='mt-10 flex flex-col md:gap-4 gap-5'>
          <motion.div animate={animation} custom={0}>
            <div className='bg-box-gray py-6 px-10 rounded-xl md:w-[54rem] md:hover:text-black transition-all duration-500 md:hover:bg-pxorange mx-10 md:mx-0'>
              <a href='https://pixelverse.lakshb.me/' target='_blank' rel="noopener noreferrer">
                <div className="flex flex-row items-center">
                  <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>pixelverse</h1>
                  <BsBoxArrowUpRight size={22} className='bsarrow ml-3' />
                </div>
                <p className='md:text-[1.5rem] text-[1.3rem] leading-tight md:leading-normal'>a free to use text-to-image generator</p>
              </a>
            </div>
          </motion.div>

          <motion.div animate={animation} custom={1}>
            <div className='bg-box-gray py-6 px-10 rounded-xl md:w-[54rem] md:hover:text-urlify-white transition-all duration-500 md:hover:bg-urlify-green mx-10 md:mx-0'>
              <a href='https://urlify.lakshb.me/' target='_blank' rel="noopener noreferrer">
                <div className="flex flex-row items-center">
                  <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>urlify</h1>
                  <BsBoxArrowUpRight size={22} className='bsarrow ml-3' />
                </div>
                <p className='md:text-[1.5rem] text-[1.3rem] leading-tight md:leading-normal'>a super simple url shortener</p>
              </a>
            </div>
          </motion.div>

          <motion.div animate={animation} custom={2}>
            <div className='bg-box-gray py-6 px-10 rounded-xl md:w-[54rem] md:hover:text-greeney-blue transition-all duration-500 md:hover:bg-greeney-green mx-10 md:mx-0'>
              <a href='https://greeney.lakshb.me/' target='_blank' rel="noopener noreferrer">
                <div className="flex flex-row items-center">
                  <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Greeney</h1>
                  <BsBoxArrowUpRight size={22} className='bsarrow ml-3' />
                </div>
                <p className='md:text-[1.5rem] text-[1.3rem] leading-tight md:leading-normal'>a dark greenish-blue colour theme for vscode</p>
              </a>
            </div>
          </motion.div>

          <motion.div animate={animation} custom={3}>
            <div className='bg-box-gray py-6 px-10 rounded-xl md:w-[54rem] md:hover:text-designhall-black transition-all duration-500 md:hover:bg-designhall-green mx-10 md:mx-0'>
              <a href='https://designhall.lakshb.me/' target='_blank' rel="noopener noreferrer">
                <div className="flex flex-row items-center">
                  <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Design Hall</h1>
                  <BsBoxArrowUpRight size={22} className='bsarrow ml-3' />
                </div>
                <p className='md:text-[1.5rem] text-[1.3rem] leading-tight md:leading-normal'>a minimal - clumsy playground of my designs (16)</p>
              </a>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default Projects