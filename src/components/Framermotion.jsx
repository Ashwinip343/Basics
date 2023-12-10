import React from 'react'
import { motion } from 'framer-motion'
import {useState} from 'react'
export const Framermotion = () => {

    const [isOpen,setIsOpen]=useState(false)

  return (
    <div>
        <motion.div transition={{layout:{duration:1,type:"spring"}}} layout data-isOpen={isOpen} style={{borderRadius:"1rem"}}
       onClick={()=>setIsOpen(!isOpen)} className='parent card w-9/12 rounded-lg bg-white mx-auto p-10 text-black mt-9 text-bold shadow-black text-left shadow-lg'>
       <motion.div layout/>
        <motion.h2  layout="position" className=' font-bold' >Framer Motion 🚀</motion.h2>
         {isOpen&&  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='expand' >
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non fuga molestiae reiciendis sit asperiores, vero id quae omnis illo accusantium.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, accusamus.</p>
            </motion.div>}
        </motion.div>
    </div>
  )
}
