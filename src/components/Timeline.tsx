import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const Timeline: React.FC = () => {
  const experiences = [
    {
      type: "work",
      title: "Research Assistant",
      organization: "San Jose State University",
      period: "October 2024 - Present",
      description:
        "Conducting research, Assisting in designing and implementing experiments, Writing code to support simulations and data analysis, and Preparing reports and assisting in research publication drafting",
    },
    {
      type: "education",
      title: "Computer Science Major",
      organization: "San Jose State University",
      period: "September 2024 - Present",
      description:
        "Major in Computer Science with focus on Software Engineering and Back-End Development.",
    },
    {
      type: "work",
      title: "Teacher Assistant",
      organization: "Yerba Buena High School",
      period: "October 2024 - Present",
      description:
        "Providing one-on-one assistance to students and Preparing review materials for AP CSA exams.",
    },
    {
      type: "education",
      title: "Relevant Courses",
      organization: "CS46A & B, Crash Course on Python",
      period: "",
      description:
        "Learned Object Oriented Programming, Data Structures & Algorithm, and Programming in Python",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Education & Experience
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1" />

              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-600 dark:border-blue-400 flex items-center justify-center">
                {exp.type === "work" ? (
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                )}
              </div>

              <div className="flex-1">
                <div
                  className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? "mr-8" : "ml-8"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {exp.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
