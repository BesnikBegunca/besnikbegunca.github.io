import { useState } from "react"
import "./test.scss"
import { motion } from 'framer-motion'



const Test = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }


    return (
        <div>
            <div className="course">
                <motion.div className="box"
                    variants={variants}
                   // initial="hidden"
                   // animate="visible"
                    transition={{ duration: 2 }}
                    animate = {open? "visible":"hidden"}

                >
                </motion.div>
                <button onClick={()=>setOpen(prev=>!prev)}></button>
            </div>
        </div>
    )
}

export default Test