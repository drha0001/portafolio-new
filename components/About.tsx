
import { Code2, Palette, Zap, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ParallaxSection from './ParallaxSection';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      category: 'Design',
      technologies: [
        { name: 'Figma', level: 92 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Prototyping', level: 90 },
        { name: 'User Research', level: 80 },
      ],
    },
  ];

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      title: 'Full-Stack Development',
      description: 'Modern web applications with React, Node.js, and cloud technologies',
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-400" />,
      title: 'UX/UI Design',
      description: 'User-centered design processes from research to high-fidelity prototypes',
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'Performance',
      description: 'Optimized applications with fast load times and smooth interactions',
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Collaboration',
      description: 'Effective communication with stakeholders and cross-functional teams',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Passionate about creating digital solutions that bridge the gap between beautiful design and robust functionality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I'm a passionate full-stack developer and UX/UI designer with over 5 years of experience creating modern, scalable web applications. I specialize in React, Node.js, and modern database technologies, focusing on building solutions that are both technically robust and user-friendly.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  My approach combines solid technical skills with careful attention to design and user experience. I enjoy solving complex problems and turning ideas into well-crafted, functional tools that provide real value to users and businesses.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.4}>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Core Strengths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {highlights.map((highlight, index) => (
                    <ScrollReveal key={index} direction="scale" delay={0.6 + index * 0.1}>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{highlight.icon}</div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                          <p className="text-slate-400 text-sm">{highlight.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="space-y-8">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                <div className="space-y-8">
                  {skills.map((skillGroup, groupIndex) => (
                    <ScrollReveal key={groupIndex} direction="up" delay={0.4 + groupIndex * 0.2}>
                      <div>
                        <h4 className="text-lg font-semibold text-purple-400 mb-4">{skillGroup.category}</h4>
                        <div className="space-y-4">
                          {skillGroup.technologies.map((tech, techIndex) => (
                            <ScrollReveal key={techIndex} direction="right" delay={0.6 + techIndex * 0.1}>
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-slate-300 font-medium">{tech.name}</span>
                                  <span className="text-slate-400 text-sm">{tech.level}%</span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2">
                                  <div
                                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${tech.level}%` }}
                                  ></div>
                                </div>
                              </div>
                            </ScrollReveal>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.8}>
              <ParallaxSection speed={0.2}>
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                  <p className="mb-6 opacity-90">
                    I'm always interested in new challenges and opportunities to grow. Whether it's a full-time position, freelance project, or collaboration, I'd love to hear from you.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm opacity-90">
                      <strong>Location:</strong> Santiago, Dominican Republic
                    </div>
                    <div className="text-sm opacity-90">
                      <strong>Timezone:</strong> AST (UTC-4)
                    </div>
                  </div>
                </div>
              </ParallaxSection>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
