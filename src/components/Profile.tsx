import React from "react";
import { Github, Linkedin } from "lucide-react";
import profile from "./images/tkkprofile.png";

const Profile: React.FC = () => {
  return (
    <section
      id="profile"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 relative group">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Thien Khang Kieu
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
              SJSU Computer Science Major
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Passionate college freshman seeking to leverage coding skills and
              collaborative programming to fill a software engineer intern
              position. Eager to contribute coding skills, problem-solving
              abilities, and accelerate professional development. Committed to
              continuous learning and growth in the technology sector.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/khandz0/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/thienkhangkieu2606/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
