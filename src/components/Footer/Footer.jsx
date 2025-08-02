// import React from 'react';
// import './Footer.css';
// import user_icon from '../../assets/user_icon.svg';

// const Footer = () => {
//   return (
//     <footer className='footer'>
//       <div className='footer-top'>
//         <div className="footer-top-left">
          
//           <p>I am a frontend developer from Kolkata</p>
//         </div>

//         <div className='footer-top-right '>
//           <div className='footer-email-input email_Img'>
//             <img src={user_icon}  alt="User Icon" />
//             <input type="email" placeholder='Enter your email' />
//           </div>
//           <div className="footer-subscribe">
//             Subscribe
//           </div>
//         </div>
//       </div>

//       <hr />

//       <div className="footer-bottom">
//         <p className='footer-bottom-left'>© 2025 Muskan Singh. All rights reserved</p>
//         <div className="footer-bottom-right">
//           <p>Terms of Services</p>
//           <p>Privacy Policy</p>
//           <p>Connect with me</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 mx-4 sm:mx-8 lg:mx-44 my-12 text-[#d8d8d8]">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between gap-6">
        {/* Left */}
        <div>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] max-w-md">
            I am a frontend developer from Kolkata
          </p>
        </div>

        {/* Right - Email input */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 bg-[#32323B] rounded-full px-6 py-4 pr-20 transition-all hover:border-2 hover:border-white">
            <img src={user_icon} alt="User Icon" className="w-6" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-[#a0a0a0] w-full text-[16px] sm:text-[18px]"
            />
          </div>
          <div className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white text-center text-[16px] sm:text-[18px] lg:text-[20px] font-medium px-10 py-4 rounded-full w-fit cursor-pointer transition-transform hover:scale-110">
            Subscribe
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Bottom Section */}
      <div className="flex flex-wrap justify-between items-center gap-6 text-[16px] sm:text-[18px]">
        <p>© 2025 Muskan Singh. All rights reserved</p>
        <div className="flex flex-wrap gap-6 sm:gap-10 text-center">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
