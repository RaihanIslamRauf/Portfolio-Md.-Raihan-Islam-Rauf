import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills"; // Import the Skills component
import Projects from "./Projects";
import ContactMe from "./ContactMe";

const Home = () => {
  return (
    <>
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe /> {/* Render the Skills component below AboutMe */}
    </>
  );
};

export default Home;

