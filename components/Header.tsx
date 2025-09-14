import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
          >
            David Hernandez
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <AnimatedButton
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="ghost"
                size="sm"
                className={`!px-4 !py-2 !rounded-full !transition-all !duration-300 ${
                  activeSection === item.id
                    ? "!bg-purple-600 !text-white !border-purple-600"
                    : "!text-slate-300 hover:!text-white hover:!bg-slate-800 !border-transparent"
                }`}
              >
                {item.label}
              </AnimatedButton>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:david@example.com"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="md:hidden">
            <AnimatedButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              className="!text-slate-300 hover:!text-white !p-2 !border-0"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </AnimatedButton>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg mt-2 mb-4 p-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <AnimatedButton
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  variant="ghost"
                  className={`!text-left !px-4 !py-2 !rounded-lg !transition-all !duration-300 ${
                    activeSection === item.id
                      ? "!bg-purple-600 !text-white !border-purple-600"
                      : "!text-slate-300 hover:!text-white hover:!bg-slate-700 !border-transparent"
                  }`}
                >
                  {item.label}
                </AnimatedButton>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-slate-700">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:david@example.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
