import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Particles from ".././public/react-bits/Particles/Particles.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      {/* Background Particles */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
