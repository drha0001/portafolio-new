import { ArrowDown, Download, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AnimatedText from "./AnimatedText";
import AnimatedButton from "./AnimatedButton";
import ParallaxSection from "./ParallaxSection";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <ParallaxSection speed={0.3} className="absolute inset-0 overflow-hidden">
        <ScrollReveal direction="scale" delay={0.2}>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </ScrollReveal>
        <ScrollReveal direction="scale" delay={0.4}>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </ScrollReveal>
      </ParallaxSection>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              <AnimatedText text="Design meets" delay={0.5} duration={1} />
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                <AnimatedText text="Development" delay={1.5} duration={1} />
              </span>
            </h1>
            <ScrollReveal direction="up" delay={0.8}>
              <p className="text-xl sm:text-2xl text-slate-300 mb-6 max-w-3xl mx-auto">
                UX/UI Designer & Full-Stack Developer crafting digital
                experiences that users love and businesses need
              </p>
            </ScrollReveal>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="scale" delay={1.0}>
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm">
                Available for freelance opportunities
              </span>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={1.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <AnimatedButton
              onClick={() => scrollToSection("projects")}
              variant="primary"
              size="lg"
            >
              View My Work <ArrowDown className="inline-block ml-2 w-5 h-5" />
            </AnimatedButton>
            <AnimatedButton
              onClick={() => scrollToSection("contact")}
              variant="ghost"
              size="lg"
            >
              <MessageCircle className="inline-block mr-2 w-5 h-5" />
              Let's Talk
            </AnimatedButton>
            <AnimatedButton
              onClick={() => window.open("/resume.pdf", "_blank")}
              variant="secondary"
              size="lg"
            >
              <Download className="inline-block mr-2 w-5 h-5" />
              Resume
            </AnimatedButton>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={1.4}>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={1.6}>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-300">Projects Completed</div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={1.8}>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <AnimatedButton
          onClick={() => scrollToSection("about")}
          variant="ghost"
          className="!p-2 !border-0 text-slate-400 hover:text-white"
        >
          <ArrowDown className="w-6 h-6" />
        </AnimatedButton>
      </div>
    </section>
  );
};

export default Hero;
