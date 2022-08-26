import React from 'react'
import Background from './Background'
import { motion } from 'framer-motion'

export function ShowButton({modalOpen,close,open}) {
  return (
    <motion.button
      whileHover={{scale:1.1}}
      whileTap={{
        scale:0.9,
        }}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      onClick={()=>{
        (modalOpen ? close() : open())

        }}
      className=' text-red-50 text-3xl md:text-4xl lg:text-5xl bg-gradient-to-br from-rose-500 to-rose-800 p-12 rounded-3xl'
      >
        <Background />
        Show an advice
      </motion.button>
  )
}

