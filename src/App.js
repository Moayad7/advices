import { motion , AnimatePresence } from 'framer-motion';
import './App.css';
import { useState } from 'react';
import Modal from './Components/Modal/index';
import {Background} from './Components/Background'
import Image from './Components/Image'
import {ShowButton} from './Components/ShowButton'


function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  
  
  return (
    <div className="w-screen h-screen flex flex-col place-items-center align-items-center justify-center  bg-gradient-to-br from-cyan-500 to-cyan-800 ">
      <ShowButton modalOpen={modalOpen} close={close} open={open}></ShowButton>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={()=>null}
      >  
        {modalOpen && <Modal className="bg-indigo-800" modalOpen={modalOpen} handleClose={close}/>}
      </AnimatePresence>
      <Image/>
      
    </div>
  );
}

export default App;
