import { motion } from "framer-motion";
import BackDrop from "../BackDrop/index";
import React, { useState } from 'react';
import DataFetch from "./DataFetch";
import {Button} from './Button'
import Background from "../Background";



const dropIn = {
    hidden: {
        y: "-100vh",
        opcity: 0,
    },
    visible: {
        y:'0',
        opacity: 1,
        transition:{
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y:"100vh",
        opcity:0
    }

}

const Modal = ({handleClose, text}) => {
    return(
        <BackDrop className="" onClick={handleClose}>
            <motion.div
                drag='x'
                dragConstraints={{right:0 ,left:0}}
                onClick={(e)=>e.stopPropagation()}
                className='bg-gradient-to-br from-rose-400 to-rose-600 text-center p-7 rounded-3xl lg:w-2/3 md:w-4/5 w-full'
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit='exit'
            >
                {/* <h1 className="text-5xl p-6 rounded-3xl text-sky-50 ">Modal</h1> */}
                
                <DataFetch/>
                <Button handleClose={handleClose}/>
                <Background/>
            </motion.div>

            
        </BackDrop>
    )
}

export default Modal