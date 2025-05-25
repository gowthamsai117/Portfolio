import React from "react";
import Navbar from "./components/Navbar";
import Home from "./screen/Home";
import About from "./screen/About";
import Skills from "./screen/Skills";
import Projects from "./screen/Projects";
import Contact from "./screen/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;