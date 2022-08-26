import { motion } from "framer-motion";

import React from 'react'

const BackDrop = ({children, onClick}) => {
  return (
    <motion.div
        onClick={onClick}
        className='p-7 absolute bg-gray-900/75 h-screen w-screen grid place-items-center opcity-50 opacity-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        
    >
      {children}
    </motion.div>
  )
}

export default BackDrop