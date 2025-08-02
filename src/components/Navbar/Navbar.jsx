// import React, { useState } from "react";
// import logo from "../../assets/logo_muskan_final.svg";
// import underline from "../../assets/nav_underline.svg";
// import menuOpenIcon from "../../assets/menu_open.svg";
// import menuCloseIcon from "../../assets/menu_close.svg";

// const NAV_ITEMS = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About Me" },
//   { id: "projects", label: "Projects" },
//   { id: "contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const openMenu = () => setIsMobileMenuOpen(true);
//   const closeMenu = () => setIsMobileMenuOpen(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setActiveSection(id);
//       closeMenu();
//     }
//   };

//   return (
//     <header className="sticky top-5 z-[999] w-full flex justify-center px-4">
//       <nav
//         className="w-full max-w-6xl flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full"
//         role="navigation"
//         aria-label="Main navigation"
//       >
//         {/* Logo */}
//         <button
//           onClick={() => scrollToSection("home")}
//           className="focus:outline-none"
//           aria-label="Scroll to home"
//           type="button"
//         >
//           <img
//             src={logo}
//             alt="Muskan Logo"
//             className="w-12 cursor-pointer scale-150"
//           />
//         </button>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center gap-8">
//           {NAV_ITEMS.map(({ id, label }) => (
//             <li key={id} className="relative group">
//               <button
//                 onClick={() => scrollToSection(id)}
//                 className={`text-white text-lg font-medium px-3 py-1 rounded-md transition duration-300 group-hover:text-[#B415FF] group-hover:scale-105 group-hover:bg-black/30 focus:outline-none ${
//                   activeSection === id ? "font-semibold" : ""
//                 }`}
//                 aria-current={activeSection === id ? "page" : undefined}
//                 type="button"
//               >
//                 {label}
//               </button>
//               {activeSection === id && (
//                 <img
//                   src={underline}
//                   alt=""
//                   className="absolute bottom-[-8px] left-0 w-full h-1"
//                   aria-hidden="true"
//                 />
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Connect Button (Desktop) */}
//         <button
//           onClick={() => scrollToSection("contact")}
//           className="hidden md:inline-block bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white font-medium px-6 py-2 rounded-full transition hover:from-[#B415FF] focus:outline-none"
//           type="button"
//         >
//           Connect With Me
//         </button>

//         {/* Mobile Menu Icon */}
//         <button
//           onClick={openMenu}
//           className="md:hidden block focus:outline-none"
//           aria-label="Open navigation menu"
//           type="button"
//         >
//           <img src={menuOpenIcon} alt="" className="w-8" aria-hidden="true" />
//         </button>

//         {/* Mobile Dropdown Menu */}
//         {isMobileMenuOpen && (
//           <nav
//             className="absolute top-[80px] left-5 right-5 bg-black/90 border border-white/10 rounded-2xl px-6 py-6 flex flex-col gap-5 md:hidden animate-fade-in"
//             aria-label="Mobile navigation"
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeMenu}
//               className="self-end focus:outline-none"
//               aria-label="Close navigation menu"
//               type="button"
//             >
//               <img
//                 src={menuCloseIcon}
//                 alt=""
//                 className="w-6"
//                 aria-hidden="true"
//               />
//             </button>

//             <ul className="flex flex-col gap-4">
//               {NAV_ITEMS.map(({ id, label }) => (
//                 <li key={id} className="relative group">
//                   <button
//                     onClick={() => scrollToSection(id)}
//                     className={`text-white text-base font-medium px-3 py-1 rounded-md w-full text-left transition duration-300 group-hover:text-[#B415FF] group-hover:scale-105 group-hover:bg-black/30 focus:outline-none ${
//                       activeSection === id ? "font-semibold" : ""
//                     }`}
//                     aria-current={activeSection === id ? "page" : undefined}
//                     type="button"
//                   >
//                     {label}
//                   </button>
//                   {activeSection === id && (
//                     <img
//                       src={underline}
//                       alt=""
//                       className="absolute bottom-[-6px] left-0 w-full h-1"
//                       aria-hidden="true"
//                     />
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logo from "../../assets/logo_muskan_final.svg";
import underline from "../../assets/nav_underline.svg";
import menuOpenIcon from "../../assets/menu_open.svg";
import menuCloseIcon from "../../assets/menu_close.svg";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMenu = () => setIsMobileMenuOpen(true);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      closeMenu();
    }
  };

  return (
    <header className="sticky top-5 z-[999] w-full flex justify-center px-4 bg-transparent">
      <nav
        className="w-full max-w-6xl flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="focus:outline-none"
          aria-label="Scroll to home"
          type="button"
        >
          <img
            src={logo}
            alt="Muskan Logo"
            className="w-12 cursor-pointer scale-250"
          />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id} className="relative group">
              <button
                onClick={() => scrollToSection(id)}
                className={`text-white text-lg font-medium px-3 py-1 rounded-md transition duration-300 group-hover:text-[#B415FF] group-hover:scale-105 group-hover:bg-black/30 focus:outline-none ${
                  activeSection === id ? "font-semibold" : ""
                }`}
                aria-current={activeSection === id ? "page" : undefined}
                type="button"
              >
                {label}
              </button>
              {activeSection === id && (
                <img
                  src={underline}
                  alt=""
                  className="absolute bottom-[-8px] left-0 w-full h-1"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Connect Button (Desktop) */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-block bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white font-medium px-6 py-2 rounded-full transition hover:from-[#B415FF] focus:outline-none"
          type="button"
        >
          Connect With Me
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={openMenu}
          className="md:hidden block focus:outline-none"
          aria-label="Open navigation menu"
          type="button"
        >
          <img src={menuOpenIcon} alt="" className="w-8" aria-hidden="true" />
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <nav
            className="absolute top-[80px] left-5 right-5 bg-black/90 border border-white/10 rounded-2xl px-6 py-6 flex flex-col gap-5 md:hidden animate-fade-in shadow-lg"
            aria-label="Mobile navigation"
          >
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="self-end focus:outline-none"
              aria-label="Close navigation menu"
              type="button"
            >
              <img
                src={menuCloseIcon}
                alt=""
                className="w-6"
                aria-hidden="true"
              />
            </button>

            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id} className="relative group">
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`text-white text-base font-medium px-3 py-1 rounded-md w-full text-left transition duration-300 group-hover:text-[#B415FF] group-hover:scale-105 group-hover:bg-black/30 focus:outline-none ${
                      activeSection === id ? "font-semibold" : ""
                    }`}
                    aria-current={activeSection === id ? "page" : undefined}
                    type="button"
                  >
                    {label}
                  </button>
                  {activeSection === id && (
                    <img
                      src={underline}
                      alt=""
                      className="absolute bottom-[-6px] left-0 w-full h-1"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
