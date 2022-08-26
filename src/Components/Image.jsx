import React from 'react'
import image from '../images/undraw_lightbulb_moment_re_ulyo (1).svg'
import { motion } from 'framer-motion'


const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  
function Image() {
  return (
    <motion.div 
    className='w-60 md:w-72 lg:w-100 mt-9'
    whileHover={{
        scale: 0.8,
       
    }}
    variants={icon}
                initial="hidden"
                animate="visible"
                exit='exit'
    
    >
        <motion.img src={image}></motion.img>
    </motion.div>
  )
}

export default Image