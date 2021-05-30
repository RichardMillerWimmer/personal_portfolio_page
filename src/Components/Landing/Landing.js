import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";

function Landing() {
  return (
    <div className="landing">
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default Landing;
