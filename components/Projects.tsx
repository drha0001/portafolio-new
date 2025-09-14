import { useState } from "react";
import { ExternalLink, Github, ChevronRight, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AnimatedButton from "./AnimatedButton";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      category: "ux-design",
      type: "UX/UI Design",
      description:
        "Complete redesign of an e-commerce platform resulting in 40% increase in conversion rates.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "User Research", "Prototyping", "A/B Testing"],
      results: [
        { metric: "Conversion Rate", improvement: "+40%" },
        { metric: "User Satisfaction", improvement: "+65%" },
        { metric: "Task Completion", improvement: "+50%" },
      ],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Gym Management System",
      category: "development",
      type: "Full-Stack Development",
      description:
        "Complete gym management system with member tracking, payment processing, and analytics.",
      image:
        "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Express.js",
      ],
      results: [
        { metric: "Performance Score", improvement: "98/100" },
        { metric: "Load Time", improvement: "<2s" },
        { metric: "User Adoption", improvement: "90%" },
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Mobile Banking App UX",
      category: "ux-design",
      type: "UX/UI Design",
      description:
        "User experience design for a mobile banking application focusing on accessibility and security.",
      image:
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Figma",
        "User Journey Mapping",
        "Accessibility",
        "Security UX",
      ],
      results: [
        { metric: "Accessibility Score", improvement: "WCAG AA" },
        { metric: "User Errors", improvement: "-75%" },
        { metric: "Security Score", improvement: "+90%" },
      ],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Real Estate Dashboard",
      category: "development",
      type: "Full-Stack Development",
      description:
        "Modern dashboard for real estate agents with property management and analytics.",
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB", "Chart.js"],
      results: [
        { metric: "Data Processing", improvement: "10x faster" },
        { metric: "User Productivity", improvement: "+45%" },
        { metric: "System Uptime", improvement: "99.9%" },
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "SaaS Product Interface",
      category: "ux-design",
      type: "UX/UI Design",
      description:
        "Complete interface design for a SaaS productivity tool with complex workflows.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Figma",
        "Design System",
        "Component Library",
        "User Testing",
      ],
      results: [
        { metric: "User Onboarding", improvement: "+80%" },
        { metric: "Feature Adoption", improvement: "+60%" },
        { metric: "Support Tickets", improvement: "-40%" },
      ],
      liveUrl: "#",
      caseStudyUrl: "#",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ux-design", label: "UX/UI Design" },
    { id: "development", label: "Development" },
  ];
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A selection of recent projects showcasing my approach to solving
              complex design and development challenges.
            </p>
          </div>
        </ScrollReveal>
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.2 + index * 0.2}
              >
                <div className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h4>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                        Technology Stack
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <ScrollReveal
                            key={i}
                            direction="scale"
                            delay={0.4 + i * 0.05}
                          >
                            <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>
                    <div className="mb-8">
                      <h5 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wide">
                        Key Results
                      </h5>
                      <div className="grid grid-cols-3 gap-4">
                        {project.results.map((r, i) => (
                          <ScrollReveal
                            key={i}
                            direction="up"
                            delay={0.6 + i * 0.1}
                          >
                            <div className="text-center">
                              <div className="text-lg font-bold text-purple-400 mb-1">
                                {r.improvement}
                              </div>
                              <div className="text-xs text-slate-400">
                                {r.metric}
                              </div>
                            </div>
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {project.liveUrl && (
                        <AnimatedButton
                          onClick={() => window.open(project.liveUrl, "_blank")}
                          variant="primary"
                          size="sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </AnimatedButton>
                      )}
                      {project.githubUrl && (
                        <AnimatedButton
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                          variant="secondary"
                          size="sm"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </AnimatedButton>
                      )}
                      {project.caseStudyUrl && (
                        <AnimatedButton
                          onClick={() =>
                            window.open(project.caseStudyUrl, "_blank")
                          }
                          variant="secondary"
                          size="sm"
                          className="!bg-blue-600 hover:!bg-blue-700"
                        >
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Case Study
                        </AnimatedButton>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div>
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-white mb-8">
                All Projects
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((c, i) => (
                  <ScrollReveal
                    key={c.id}
                    direction="scale"
                    delay={0.2 + i * 0.1}
                  >
                    <AnimatedButton
                      onClick={() => setSelectedCategory(c.id)}
                      variant={
                        selectedCategory === c.id ? "primary" : "secondary"
                      }
                    >
                      {c.label}
                    </AnimatedButton>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, i) => (
              <ScrollReveal
                key={p.id}
                direction="up"
                delay={0.1 + (i % 3) * 0.1}
              >
                <div className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {p.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3">
                      {p.title}
                    </h4>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed min-h-[5rem]">
                      {p.description}
                    </p>
                    <div className="mb-4 min-h-[3rem]">
                      <div className="flex flex-wrap gap-1">
                        {p.technologies.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs"
                          >
                            {t}
                          </span>
                        ))}
                        {p.technologies.length > 3 && (
                          <span className="bg-slate-700 text-slate-400 px-2 py-1 rounded text-xs">
                            +{p.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex space-x-3">
                        {p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                            aria-label="GitHub Code"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      {p.caseStudyUrl && (
                        <a
                          href={p.caseStudyUrl}
                          className="text-slate-400 hover:text-purple-400 transition-colors ml-auto"
                          aria-label="Case Study"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center mt-16">
            <p className="text-slate-400 mb-6">
              Want to see more projects or discuss a collaboration?
            </p>
            <AnimatedButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
              variant="primary"
              size="lg"
            >
              Get In Touch
            </AnimatedButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
