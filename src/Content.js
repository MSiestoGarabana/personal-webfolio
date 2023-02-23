import React from "react";
import { Header } from "./ContentComponents/Header";
import { AboutMe } from "./ContentComponents/AboutMe";
import { Skills } from "./ContentComponents/Skills";
import { Projects } from "./ContentComponents/Projects";
import { Contact } from "./ContentComponents/Contact";

export const Content = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Content;
