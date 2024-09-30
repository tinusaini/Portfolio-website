import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiPython } from "react-icons/si";
import solidworksImg from "../assets/solidworks icon.png";
import catiaImg from "../assets/catia sign.jpg";
import ansysImg from "../assets/ansys image.jpg";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 }, // Fixed 'intial' to 'initial'
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" // Fixed 'repeattype' to 'repeatType'
    }
  }
});

const Technologies = () => {
  return (
    <div className="border-border-netural-800 pb-24 ">
      <motion.h1 
       whileInView={{opacity: 1, y:0  }}
       initial={{ opacity:0, y: -100}}
       transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity: 1, x:0  }}
      initial={{ opacity:0, x: -180}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial" // Fixed 'intial' to 'initial'
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-grey-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiC className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-gradient-to-r from-blue-500 to-yellow-400" />
        </motion.div>
        {/* SolidWorks */}
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <img
            src={solidworksImg}
            alt="SolidWorks"
            className="w-20 h-20 object-contain" /* Adjust size to match icons */
          />
        </motion.div>
        {/* CATIA */}
        <motion.div
          variants={iconVariants(6.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <img
            src={catiaImg}
            alt="CATIA"
            className="w-20 h-20 object-contain" /* Adjust size to match icons */
          />
        </motion.div>
        {/* Ansys */}
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <img
            src={ansysImg}
            alt="Ansys"
            className="w-20 h-20 object-contain" /* Adjust size to match icons */
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies;
