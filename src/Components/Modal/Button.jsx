import { motion } from "framer-motion";



export const Button = ({handleClose}) => {
    
    return(
                <motion.button
                whileHover={{scale:1.1}}
                whileTap={{
                    scale:0.9,
                }}
                onClick={handleClose}
                className="text-2xl bg-black text-red-50 p-2 rounded-xl mt-5"
                >
                    Close
                </motion.button>
    )
}

