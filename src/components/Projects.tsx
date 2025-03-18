import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import portfolio from "./images/portfolio.png";
import todolist from "./images/todolistapp.png";

const Projects: React.FC = () => {
  const categories = ["All", "Web", "Mobile", "Backend"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS.",
      image: portfolio,
      category: "Web",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/khandz0/TKKPortfolio",
      //demo: "https://demo.com",
    },
    {
      title: "To-Do List App",
      description: "A simple task management application.",
      image: todolist,
      category: "Web",
      technologies: ["HTML5", "JavaScript", "CSS", "Drag & Drop API"],
      github: "https://github.com/khandz0/Todo-App",
      demo: "https://khandz0.github.io/Todo-App/",
    },
    {
      title: "Pickleball Guide App",
      description:
        "A pickleball website that guides users how to play pickleball.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      category: "Web",
      technologies: ["React", "TypesScript", "Maps API", "Weather API"],
      github: "https://github.com/khandz0/pickleball-guide",
      demo: "https://demo.com",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Projects
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
