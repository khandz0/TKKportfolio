import React from "react";
import { Menu } from "lucide-react";

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "profile", label: "Profile" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
