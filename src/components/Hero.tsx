import React from "react";
import { Download /*ArrowDown*/ } from "lucide-react";
import research from "./images/research-img.jpeg";
const Hero: React.FC = () => {
  // const scrollToProfile = () => {
  //   document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
  // };
  const handleDownloadResume = () => {
    // Handle resume download
    console.log("Downloading resume...");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        // backgroundImage:
        //   'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
        backgroundImage: "url(" + research + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center text-white z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm Thien Khang Kieu
        </h1>
        <p className="text-xl md:text-2xl mb-12 animate-fade-in-delay">
          Welcome to My Portfolio!
        </p>
        {/* <button
          onClick={scrollToProfile}
          className="group flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300"
        >
          Get Started
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button> */}
        <button
          onClick={handleDownloadResume}
          //className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
          className="group flex items-center gap-2 mx-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300"
        >
          <Download className="w-4 h-4" />
          Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
