import React from "react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 70 },
        { name: "TypeScript", level: 60 },
        { name: "Python", level: 90 },
        { name: "Java", level: 90 },
      ],
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 70 },
        { name: "HTML/CSS", level: 75 },
        { name: "Tailwind CSS", level: 60 },
        { name: "Next.js", level: 60 },
      ],
    },
    {
      name: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Git", level: 75 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 dark:text-white">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-500 group-hover:bg-blue-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
