import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: ".NET Core",
        img: "https://design4users.com/wp-content/uploads/2019/09/education-app-dashboard-design.png",
        desc: `I have worked with the school system in terms of .Net Core technology and React.js and MSSQL database. We have added to this system all the necessary functionality for all users.`
    },
    {
        id: 2,
        title: "Springboot Application",
        img: "springboot.png",
        desc: `I have made it easier for programs to manage tasks in time periods so that work is more effective. Supported by ZETA CORPORATION.`
    },
    {
        id: 3,
        title: "SQL Server",
        img: "database.jpg",
        desc: `Using Microsoft SQL Server and MYSQL in our projects, our databases are designed in new software engineering technology methodologies that complete the application in all areas.Supported by ZETA CORPORATION.`
    },
    {
        id: 4,
        title: "Python App",
        img: "https://cdn.wallpapersafari.com/56/52/ayzfVp.jpg",
        desc: "I have applied the Python language to applications with less complexity in order not to overload the application with code and slow speed." 
    },
    {
        id: 5,
        title: "JAVA Programing",
        img: "https://wallpapercave.com/wp/wp7250161.png",
        desc: "I have applied advanced programming in JAVA in an intensive work to achieve a result that we have proven in our projects.Supported by ZETA CORPORATION." 
    },
    {
        id: 6,
        title: "Mobile APP",
        img: "appdev.png",
        desc: "I specialize in mobile app development, creating intuitive and high-performance applications for iOS and Android. With a focus on user experience and functionality, I design and build apps that seamlessly integrate with modern technologies. From concept to deployment, I ensure every app meets industry standards and delivers a smooth, engaging experience." 
    },
    {
        id: 7,
        title: "Cisco Networking",
        img: "https://di3xp7dfi3cq.cloudfront.net/media/magefan_blog/CISCO_cheat_sheet.jpg",
        desc: "I have designed the connection of different sites in the network, also connecting sites with higher complexities. All this with the most useful and best methods in CISCO equipment up to the level where CCNA ends." 
    },
];

const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref, //offset: ["start start", "end start"] 
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" /*width="800px" height="500px"*//>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        
                    </motion.div>
                </div>
            </div>
        </section>
    )
}





const Portfolio = () => {


    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })


    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" ref={ref} >
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar">

                </motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio