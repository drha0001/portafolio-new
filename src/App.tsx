import { useEffect } from "react";
import { optimizeAnimations } from "../hooks/useGSAP";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  useEffect(() => {
    optimizeAnimations();

    document.documentElement.style.scrollBehavior = "smooth";

    document.title = "David Hernandez - UX/UI Designer & Full-Stack Developer";

    const metaDescription = document.querySelector('meta[name="description"]');
    const newMetaContent =
      "Experienced UX/UI Designer and Full-Stack Developer specializing in React, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.";
    if (metaDescription) {
      metaDescription.setAttribute("content", newMetaContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = newMetaContent;
      document.head.appendChild(meta);
    }

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
