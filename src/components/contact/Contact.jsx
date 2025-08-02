// import React, { useState } from "react";
// import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail_icon from "../../assets/mail_icon.svg";
// import location_icon from "../../assets/location_icon.svg";
// import call_icon from "../../assets/call_icon.svg";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");

//     const formData = new FormData(event.target);
//     formData.append("access_key", "42576e8b-cb6c-4c13-8626-c049d6d549c7");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("✅ Form Submitted Successfully");
//         event.target.reset();
//       } else {
//         console.error("Error", data);
//         setResult("❌ " + data.message);
//       }
//     } catch (err) {
//       console.error("Submit failed", err);
//       setResult("❌ Something went wrong!");
//     }
//   };

//   return (
//     <div id="contact" className="contact">
//       <div className="contact-title">
//         <h1>Get in touch</h1>
//         <img src={theme_pattern} alt="theme pattern" />
//       </div>

//       <div className="contact-section">
//         {/* LEFT: Info */}
//         <div className="contact-left">
//           <motion.h1
//             initial={{ x: -30, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{
//               duration: 1.2,
//               ease: "easeInOut",
//             }}
//             viewport={{ once: true }}
//           >
//             Let's talk
//           </motion.h1>

//           <div className="contact-details">
//             <div className="contact-detail">
//               <img src={mail_icon} alt="Email" />
//               <p>muskansingh.study@gmail.com</p>
//             </div>
//             <div className="contact-detail">
//               <img src={call_icon} alt="Phone" />
//               <p>+91 23778515</p>
//             </div>
//             <div className="contact-detail">
//               <img src={location_icon} alt="Location" />
//               <p>Hooghly, Kolkata</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Form */}
//         <form onSubmit={onSubmit} className="contact-right">
//           <label htmlFor="name">Your Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//             required
//           />

//           <label htmlFor="email">Your Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//           />

//           <label htmlFor="message">Write your message here</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="8"
//             placeholder="Enter your message"
//             required
//           ></textarea>

//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             whileHover={{ scale: 1.05 }}
//             type="submit"
//             className="contact-submit"
//           >
//             Submit now
//           </motion.button>

//           {/* Result Message */}
//           {result && <p className="form-result">{result}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "42576e8b-cb6c-4c13-8626-c049d6d549c7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult("❌ " + data.message);
      }
    } catch (err) {
      console.error("Submit failed", err);
      setResult("❌ Something went wrong!");
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-20 px-4 sm:px-10 lg:px-44 my-20">
      {/* Title */}
      <div className="relative">
        <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] font-semibold px-4 text-center">
          Get in touch
        </h1>
        <img src={theme_pattern} alt="pattern" className="absolute bottom-0 right-0 -z-10 w-20 sm:w-32" />
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[150px] w-full">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-[36px] sm:text-[60px] lg:text-[80px] font-bold bg-gradient-to-r from-[#DF8908] via-[#DF8908] to-[#B415FF] bg-clip-text text-transparent"
          >
            Let's talk
          </motion.h1>

          <div className="flex flex-col gap-6 text-[#D8D8D8] text-[18px] sm:text-[20px] lg:text-[22px]">
            <div className="flex items-center gap-4">
              <img src={mail_icon} alt="Email" className="w-6" />
              <p>muskansingh.study@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call_icon} alt="Phone" className="w-6" />
              <p>+91 23778515</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={location_icon} alt="Location" className="w-6" />
              <p>Hooghly, Kolkata</p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full max-w-[700px]">
          <label htmlFor="name" className="text-[#D8D8D8] text-[18px] sm:text-[20px] font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full h-[60px] sm:h-[78px] px-4 rounded bg-[#32323c] text-white text-[16px] sm:text-[20px] outline-none"
          />

          <label htmlFor="email" className="text-[#D8D8D8] text-[18px] sm:text-[20px] font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full h-[60px] sm:h-[78px] px-4 rounded bg-[#32323c] text-white text-[16px] sm:text-[20px] outline-none"
          />

          <label htmlFor="message" className="text-[#D8D8D8] text-[18px] sm:text-[20px] font-medium">
            Write your message here
          </label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
            className="w-full px-4 py-6 rounded bg-[#A0A0A0] text-black text-[16px] sm:text-[20px] outline-none resize-none"
          ></textarea>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white text-[18px] sm:text-[22px] font-medium py-4 px-12 rounded-full transition-all duration-300 hover:scale-110 w-fit"
          >
            Submit now
          </motion.button>

          {result && <p className="text-white">{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
