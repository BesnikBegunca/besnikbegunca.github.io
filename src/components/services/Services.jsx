import { useRef } from "react"
import "./service.scss"
import { animate, color, motion, useInView } from "framer-motion"


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

const Services = () => {

  const ref = useRef();
  const isInView = useInView(ref, { margin:"-100px"});

  return (
    <motion.div className='service' variants={variants} initial='initial'
      ref={ref}
      animate="animate">

      <motion.div className="textContainer" variants={variants}>
        <p>I focus on helping your brand grow <br />and move forward</p>
        <hr />
      </motion.div>
     <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1> <motion.b whileHover={{color:"orange"}}> Unique  </motion.b>  Ideas</h1>
        </div>

        <div className="title">
          <h1> <motion.b whileHover={{color:"orange"}}> For Your  </motion.b> Business. </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div> 
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Parking Mobile App</h2>
          <a href="#"><img src="parking.png" alt="" width="50px" height="50px"></img></a>
          <p>
          Developed on ios and android platforms. This application simplifies the management of any parking lot regardless of space.
          </p>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>EventSphere</h2>
          <a href="#"><img src="eventsphere.png" alt="" width="50px" height="50px"></img></a>
          <p>
          The EventSphere Web Application is presented in large companies and is necessary, as such this web application manages all events, tickets, sales, recommendations, as well as manages the event market and finances.
          </p>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>School MS</h2>
          <a href="#"><img src="school.png" alt="" width="50px" height="50px"></img></a>
          <p>
          The school management system, respectively high schools, has been a new challenge, but as an application it meets all the requirements for use.
          </p>
        </motion.div>

        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Health AI</h2>
          <a href="#"><img src="health.png" alt="" width="50px" height="50px"></img></a>
          <p>
          We all need to work together to improve the health branches, including applications. Your reminders, doctor's appointments, the exact time of medication, various daily tips and much more we have included in our health application that enables everyone to use it easily and improve discipline.
          </p>
        
        </motion.div>
      </motion.div> 

    </motion.div>
  )
}

export default Services