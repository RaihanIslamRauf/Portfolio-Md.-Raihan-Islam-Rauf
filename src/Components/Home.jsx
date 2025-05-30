import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills"; // Import the Skills component
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Education from "./Education";

const Home = () => {
  return (
    <>
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <ContactMe /> {/* Render the Skills component below AboutMe */}
    </>
  );
};

export default Home;

