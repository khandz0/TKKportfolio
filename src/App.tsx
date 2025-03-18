import React, { useState, useEffect } from "react";
import { Moon, Sun /*Download*/ } from "lucide-react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // const handleDownloadResume = () => {
  //   // Handle resume download
  //   console.log("Downloading resume...");
  // };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        {/* <button
          onClick={handleDownloadResume}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
        >
          <Download className="w-4 h-4" />
          Resume
        </button> */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      <Navigation activeSection={activeSection} />

      <main>
        <Hero />
        <Profile />
        <Timeline />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
