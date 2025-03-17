import './profil.scss'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: { 
            duration: 2,
            repeat:Infinity
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat:Infinity,
            repeatType:"mirror",
            duration: 20,
            staggerChildren: 0.1
        },
    },
};




const Profil = () => {
    return (
        <div className='profil'>
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>BESNIK BEGUNCA</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Developer and UI Designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} ><a href='/#Services'>See the latest Work</a></motion.button>
                        <motion.button variants={textVariants}><a href='/#Contact'>Contact</a></motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src='scroll.png' />
                </motion.div>
            </div>
             {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Programmer Content Creator Designer
            </motion.div> */}
            <div className="imageContainer">
                <img src="bbpng.png" />
            </div>
        </div>
    )
}

export default Profil