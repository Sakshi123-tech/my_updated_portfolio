import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Achievements from "./components/Achievements/Achievements";
import GitHubActivity from "./components/GitHub/GitHubActivity";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[#f0ebff] min-h-screen">
      <Navbar />
      <main>
        <About />
        <Experience />
        <Work />
        <Skills />
        <Achievements />
        <GitHubActivity />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
