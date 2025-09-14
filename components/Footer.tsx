import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-blue-300 transition-all duration-300"
            >
              David Hernandez
            </button>
            <p className="text-slate-400 mt-2">
              UX/UI Designer & Full-Stack Developer
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:david@example.com"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="text-center md:text-right">
            <div className="text-slate-400 text-sm">
              © {currentYear} David Hernandez
            </div>
            <div className="flex items-center justify-center md:justify-end mt-2 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>using React & Tailwind</span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-wrap gap-6">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Contact
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Resume
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-slate-400 text-sm">
                <div className="mb-2">
                  <strong>Available for:</strong> Freelance Projects & Full-time
                  Roles
                </div>
                <div>
                  <strong>Location:</strong> Santiago, Dominican Republic
                  (Remote Available)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
