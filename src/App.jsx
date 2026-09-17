import React, { useState, useEffect } from "react";
import DeveloperRoom from "./components/room3d/DeveloperRoom";
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
  // Check initial route / hash
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.includes("/portfolio") || hash.includes("#portfolio")) {
        return "portfolio";
      }
    }
    return "room";
  });

  // Listen for browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.includes("/portfolio") || hash.includes("#portfolio")) {
        setCurrentView("portfolio");
      } else {
        setCurrentView("room");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToPortfolio = () => {
    setCurrentView("portfolio");
    try {
      window.history.pushState({}, "", "/portfolio");
    } catch {
      window.location.hash = "#portfolio";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToRoom = () => {
    setCurrentView("room");
    try {
      window.history.pushState({}, "", "/");
    } catch {
      window.location.hash = "";
    }
  };

  // If in 3D Room view
  if (currentView === "room") {
    return <DeveloperRoom onNavigatePortfolio={navigateToPortfolio} />;
  }

  // If in Full Portfolio view
  return (
    <div className="bg-[#f0ebff] min-h-screen">
      <Navbar onNavigateRoom={navigateToRoom} />
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
