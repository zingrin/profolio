import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutMe from "./AboutMe";
import Projects from "../components/ProjectsShowcase";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
