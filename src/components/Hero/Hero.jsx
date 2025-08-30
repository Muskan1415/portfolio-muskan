// import React from "react";
// import "./Hero.css";
// import logo2 from "../../assets/logo2.jpg";
// import { anticipate, circInOut, circOut, motion } from "motion/react";

// const Hero = () => {
//   const scrollToContact = () => {
//     const section = document.getElementById("contact");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div id="home" className="hero">
//       <motion.img
//         initial={{ y: -100, scale: 0.8, opacity: 0 }} // Image starts off-screen above
//         animate={{ y: 0, scale: 1, opacity: 1 }} // Drops down into place
//         transition={{ duration: 0.6, delay: 0.2, ease: circOut }}
//         viewport={{ once: true }}
//         src={logo2}
//         alt="Muskan Singh profile"
//       />
//       <h1>
//         <motion.span
//           initial={{ x: -50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: false }}
//           className="name"
//         >
//           I'm <span> Muskan Singh </span> ,
//         </motion.span>{" "}
//         frontend developer based in Kolkata.
//       </h1>
//       <p>
//         I’m a recent Electronics and Communication Engineering (ECE) graduate
//         with a strong passion for technology, innovation, and hands-on
//         problem-solving. I am enthusiastic about applying my knowledge in
//         real-world scenarios and thrive on building impactful projects. I'm
//         eager to collaborate, learn continuously, and contribute meaningfully to
//         challenging projects that push boundaries and create value. Let's build
//         something great together!
//       </p>
//       <div className="hero-action">
//         <div className="hero-connect" onClick={scrollToContact}>
//           Connect with me
//         </div>
//         <a
//           href="https://drive.google.com/file/d/1-Iu8CoZQvFaNIXw_cwauRW9HD88cW9vN/view?usp=drive_link"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <motion.div
//             initial={{ y: -10, opacity: 0.8 }}
//             animate={{ y: [0, -10, 0] }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="hero-resume"
//           >
//             My resume
//           </motion.div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import m from "../../assets/m.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="flex flex-col items-center gap-9 px-5 py-10 text-white"
    >
      {/* Profile Image */}
      <motion.img
        initial={{ y: -100, scale: 0.8, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "circOut" }}
        viewport={{ once: true }}
        src={m}
        alt="Muskan Singh profile"
        className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] object-cover rounded-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 mt-8"
      />

      {/* Heading */}
      <h1 className="text-center w-[90%] sm:w-[90%] md:w-[85%] lg:w-[70%] text-[36px] sm:text-[32px] md:text-[64px] lg:text-[42px] font-semibold leading-tight">
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="block text-[36px] sm:text-[36px] md:text-[54px] lg:text-[54px]"
        >
          I’m{" "}
          <span className="bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            Muskan Singh
          </span>
          ,
        </motion.span>{" "}
        frontend developer based in Kolkata.
      </h1>

      {/* Paragraph */}
      <p className="w-[90%] sm:w-[90%] md:w-[80%] lg:w-[85%] text-start text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[26px] sm:leading-[30px] md:leading-[36px] text-[#ddd]">
        I’m a recent Electronics and Communication Engineering (ECE) graduate
        with a strong passion for technology, innovation, and hands-on
        problem-solving. I am enthusiastic about applying my knowledge in
        real-world scenarios and thrive on building impactful projects. I'm
        eager to collaborate, learn continuously, and contribute meaningfully to
        challenging projects that push boundaries and create value. Let's build
        something great together!
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-6 text-[16px] sm:text-[18px] md:text-[20px] font-medium mb-12">
        <div
          onClick={scrollToContact}
          className="px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] cursor-pointer transition-all duration-300 hover:border-4 hover:border-white"
        >
          Connect with me
        </div>
        <a
          href="https://drive.google.com/file/d/1cpEzb-F_HvGgpT7BKSwfS7n5VbcNckVT/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white no-underline"
        >
          <motion.div
            initial={{ y: -10, opacity: 0.8 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="px-7 sm:px-10 py-4 rounded-full border-2 border-white cursor-pointer transition-all hover:border-[#b415ff]"
          >
            My resume
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
