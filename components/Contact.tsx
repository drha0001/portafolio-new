import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Linkedin, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedButton from './AnimatedButton';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'david@example.com', link: 'mailto:david@example.com' },
    { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+1 (829) 791-9296', link: 'tel:+18297919296' },
    { icon: <MapPin className="w-6 h-6" />, label: 'Location', value: 'Santiago, Dominican Republic', link: null },
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Ready to bring your ideas to life? I'm available for freelance projects and full-time opportunities.</p>
          </div>
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-slate-300 mb-8">I typically respond within 24 hours. Let's discuss how we can work together to create something amazing.</p>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <ScrollReveal key={index} direction="left" delay={0.4 + index * 0.1}>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 text-purple-400">{item.icon}</div>
                        <div>
                          <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                          {item.link ? (
                            <a href={item.link} className="text-white hover:text-purple-400 transition-colors font-medium">{item.value}</a>
                          ) : (
                            <div className="text-white font-medium">{item.value}</div>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.6}>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
                <ul className="space-y-3">
                  {['5+ years of proven experience', 'Full-stack development expertise', 'Modern UX/UI design skills', 'Clear communication & project management'].map((item, index) => (
                    <ScrollReveal key={index} direction="right" delay={0.8 + index * 0.1}>
                      <li className="flex items-center space-x-3"><Check className="w-5 h-5 flex-shrink-0" /><span>{item}</span></li>
                    </ScrollReveal>
                  ))}
                </ul>
                <div className="flex items-center space-x-4 mt-6 pt-6 border-t border-white/20">
                    <AnimatedButton onClick={() => window.open('https://linkedin.com', '_blank')} className="!bg-white/20 hover:!bg-white/30 !p-3 !rounded-lg"><Linkedin className="w-5 h-5" /></AnimatedButton>
                    <AnimatedButton onClick={() => window.open('https://github.com', '_blank')} className="!bg-white/20 hover:!bg-white/30 !p-3 !rounded-lg"><Github className="w-5 h-5" /></AnimatedButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              {submitStatus === 'success' && (
                <ScrollReveal direction="scale">
                  <div className="bg-green-600/20 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6 flex items-center space-x-3"><Check className="w-5 h-5 flex-shrink-0" /><span>Message sent successfully! I'll get back to you within 24 hours.</span></div>
                </ScrollReveal>
              )}
              {submitStatus === 'error' && (
                <ScrollReveal direction="scale">
                  <div className="bg-red-600/20 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6 flex items-center space-x-3"><AlertCircle className="w-5 h-5 flex-shrink-0" /><span>Something went wrong. Please try again or email me directly.</span></div>
                </ScrollReveal>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <ScrollReveal direction="up" delay={0.4}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-800 border border-slate-600 text-white placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="Your name" />
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={0.5}>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-800 border border-slate-600 text-white placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="your.email@example.com" />
                    </div>
                  </ScrollReveal>
                </div>
                <ScrollReveal direction="up" delay={0.6}>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject *</label>
                    <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full bg-slate-800 border border-slate-600 text-white placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors" placeholder="Project discussion, job opportunity, etc." />
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.7}>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full bg-slate-800 border border-slate-600 text-white placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none" placeholder="Tell me about your project, timeline, and how I can help..."></textarea>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.8}>
                  <AnimatedButton type="submit" disabled={isSubmitting} variant="primary" className="w-full">
                    {isSubmitting ? (
                      <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div><span>Sending...</span></>
                    ) : (
                      <><Send className="w-5 h-5 mr-3" /><span>Send Message</span></>
                    )}
                  </AnimatedButton>
                </ScrollReveal>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
