// import React from "react";
// import "./About.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import logo2 from "../../assets/logo2.jpg";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2, // delays each child by 0.2s
//     },
//   },
// };

// const skillVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const About = () => {
//   return (
//     <div id="about" className="about">
//       <div className="about-title">
//         <h1>About Me</h1>
//         <img src={theme_pattern} alt="theme pattern" />
//       </div>

//       <div className="about-sections">
//         <div className="about-left">
//           <motion.img
//             src={logo2}
//             alt="Profile"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: false }}
//           />
//         </div>

//         <div className="about-right">
//           <div className="about-para">
//             <p>
//               I’m a passionate and self-driven web developer with a solid
//               foundation in front-end technologies and hands-on experience in
//               building responsive web applications.
//             </p>
//             <p>
//               Proficient in HTML, CSS, JavaScript, React.js, and backend tools
//               like Node.js, Express.js, SQL, and MongoDB.
//             </p>
//           </div>

//           {/* Animate skill list one by one */}
//           <motion.div
//             className="about-skills"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false }}
//           >
//             {[
//               { skill: "HTML & CSS", width: "50%" },
//               { skill: "JavaScript", width: "65%" },
//               { skill: "React JS", width: "55%" },
//               { skill: "Node.js", width: "60%" },
//               { skill: "Express.js", width: "50%" },
//               { skill: "SQL", width: "50%" },
//               { skill: "MongoDB", width: "55%" },
//             ].map((item, index) => (
//               <motion.div
//                 className="about-skill"
//                 key={index}
//                 variants={skillVariants}
//                 transition={{ duration: 0.6 }}
//               >
//                 <p>{item.skill}</p>
//                 <hr style={{ width: item.width }} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       <motion.div
//         className="about-achievements"
//         animate={{ x: [0, 20, 0] }} // slight left-right-left loop
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <div className="about-achievement">
//           <h1>3+</h1>
//           <p>Projects Completed</p>
//         </div>
//         <hr />
//         <div className="about-achievement">
//           <h1>3⭐</h1>
//           <p>Java – HackerRank</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import logo2 from "../../assets/logo2.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center gap-20 mx-10 md:mx-40 my-20">
      {/* Title */}
      <div className="relative text-center md:text-left">
        <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-bold px-2 md:px-8">About Me</h1>
        <img
          src={theme_pattern}
          alt="theme pattern"
          className="absolute bottom-0 right-0 -z-10 w-32 md:w-40"
        />
      </div>

      {/* Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center w-full">
        {/* Left Image */}
        <motion.img
          src={logo2}
          alt="Profile"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="w-full max-w-md rounded-lg object-cover hover:scale-105 transition duration-300 shadow-lg"
        />

        {/* Right */}
        <div className="flex flex-col gap-10 w-full">
          {/* Paragraphs */}
          <div className="flex flex-col gap-5 text-lg md:text-xl font-medium">
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

          {/* Skills */}
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {[
              { skill: "HTML & CSS", width: "w-[50%]" },
              { skill: "JavaScript", width: "w-[65%]" },
              { skill: "React JS", width: "w-[55%]" },
              { skill: "Node.js", width: "w-[60%]" },
              { skill: "Express.js", width: "w-[50%]" },
              { skill: "SQL", width: "w-[50%]" },
              { skill: "MongoDB", width: "w-[55%]" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-5 hover:scale-105 transition duration-500"
                variants={skillVariants}
                transition={{ duration: 0.6 }}
              >
                <p className="w-[150px] shrink-0 text-base md:text-lg font-medium m-0">{item.skill}</p>
                <hr
                  className={`h-2 rounded-full border-none bg-gradient-to-r from-[#DF8908] to-[#B415FF] ${item.width}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Achievements */}
      <motion.div
        className="flex flex-col md:flex-row justify-around items-center w-full gap-8 mt-10"
        animate={{ x: [0, 20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center gap-2 hover:scale-110 transition duration-500">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
            3+
          </h1>
          <p className="text-lg md:text-xl font-medium">Projects Completed</p>
        </div>
        <hr className="hidden md:block w-px h-20 bg-gray-300" />
        <div className="flex flex-col items-center gap-2 hover:scale-110 transition duration-500">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
            3⭐
          </h1>
          <p className="text-lg md:text-xl font-medium">Java – HackerRank</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
