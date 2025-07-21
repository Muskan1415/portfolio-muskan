import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import logo2 from "../../assets/logo2.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delays each child by 0.2s
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <motion.img
            src={logo2}
            alt="Profile"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a passionate and self-driven web developer with a solid
              foundation in front-end technologies and hands-on experience in
              building responsive web applications.
            </p>
            <p>
              Proficient in HTML, CSS, JavaScript, React.js, and backend tools
              like Node.js, Express.js, SQL, and MongoDB.
            </p>
          </div>

          {/* Animate skill list one by one */}
          <motion.div
            className="about-skills"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {[
              { skill: "HTML & CSS", width: "50%" },
              { skill: "JavaScript", width: "65%" },
              { skill: "React JS", width: "55%" },
              { skill: "Node.js", width: "60%" },
              { skill: "Express.js", width: "50%" },
              { skill: "SQL", width: "50%" },
              { skill: "MongoDB", width: "55%" },
            ].map((item, index) => (
              <motion.div
                className="about-skill"
                key={index}
                variants={skillVariants}
                transition={{ duration: 0.6 }}
              >
                <p>{item.skill}</p>
                <hr style={{ width: item.width }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="about-achievements"
        animate={{ x: [0, 20, 0] }} // slight left-right-left loop
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3⭐</h1>
          <p>Java – HackerRank</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
