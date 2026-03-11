import React, { useState, useEffect } from 'react';
import { Aperture, Briefcase, ChevronUp, Code, Mail, MapPin, Menu, Mic, PenTool, Phone, Send, X } from 'lucide-react';

// Main App Component
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#team', label: 'Team' },
    { href: '#case-studies', label: 'Studies' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="bg-gray-900 text-gray-300 font-sans">
      <Header isScrolled={isScrolled} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} navLinks={navLinks} />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Portfolio />
        <Team />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton isScrolled={isScrolled} />
    </div>
  );
};

// Header Component
const Header = ({ isScrolled, isMobileMenuOpen, toggleMobileMenu, navLinks }) => (
  <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" className="flex items-center space-x-2">
        <Aperture className="w-8 h-8 text-teal-400" />
        <span className="text-2xl font-bold text-white">PixelForge</span>
      </a>
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-gray-300 hover:text-teal-400 transition-colors duration-300">{link.label}</a>
        ))}
      </nav>
      <div className="hidden md:block">
        <a href="#contact" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
          Get a Quote
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
    {isMobileMenuOpen && (
      <div className="md:hidden bg-gray-800 py-4 px-6">
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={toggleMobileMenu} className="text-gray-300 hover:text-teal-400 transition-colors duration-300 block text-center py-2">{link.label}</a>
          ))}
          <a href="#contact" onClick={toggleMobileMenu} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
            Get a Quote
          </a>
        </nav>
      </div>
    )}
  </header>
);

// Hero Component
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 bg-gray-900 overflow-hidden">
    <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
    <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    <div className="container mx-auto px-6 text-center z-10">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
        We Forge <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Digital Experiences</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
        A creative agency dedicated to crafting beautiful, functional, and user-centric websites and applications that drive results.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#portfolio" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl">
          View Our Work
        </a>
        <a href="#services" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl">
          Our Services
        </a>
      </div>
    </div>
  </section>
);


// Clients Component
const Clients = () => (
  <section className="py-12 bg-gray-800/50">
    <div className="container mx-auto px-6">
      <h3 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">Trusted by industry leaders</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {['Stripe', 'Figma', 'Notion', 'Webflow', 'Airbnb', 'Spotify'].map(client => (
          <div key={client} className="flex justify-center">
            <svg className="h-8 text-gray-500 hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 120 40">
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fontFamily="Arial, sans-serif">{client}</text>
            </svg>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Services Component
const servicesData = [
  { icon: PenTool, title: 'UI/UX Design', description: 'Crafting intuitive and beautiful user interfaces that provide a seamless user experience.' },
  { icon: Code, title: 'Web Development', description: 'Building responsive, high-performance websites with modern technologies.' },
  { icon: Briefcase, title: 'Brand Strategy', description: 'Defining your brand’s voice and identity to connect with your target audience.' },
  { icon: Mic, title: 'Content Creation', description: 'Producing engaging content, from compelling copy to stunning visuals.' },
];

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-teal-500/10 transition-all duration-300 transform hover:-translate-y-2 group">
    <div className="bg-gray-700 text-teal-400 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Services = () => (
  <section id="services" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Expertise</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">We provide a wide range of creative services to elevate your brand.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map(service => <ServiceCard key={service.title} {...service} />)}
      </div>
    </div>
  </section>
);

// Portfolio Component
const portfolioItems = [
  { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop", title: 'SaaS Platform UI', category: 'Web Design' },
  { img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop", title: 'Branding for Startup', category: 'Branding' },
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", title: 'Data Analytics Dashboard', category: 'Web App' },
  { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop", title: 'Mobile App Redesign', category: 'Mobile UI/UX' },
  { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop", title: 'E-commerce Store', category: 'Web Development' },
  { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop", title: 'Tech Landing Page', category: 'Web Design' },
];

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-gray-800/50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Our Featured Work</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">A glimpse into the projects we're proud to have been a part of.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white mb-1 transform transition-transform duration-500 group-hover:-translate-y-2">{item.title}</h3>
              <p className="text-teal-300 text-sm transform transition-transform duration-500 group-hover:-translate-y-2">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// Team Component
const teamMembers = [
  { name: 'Ava Chen', role: 'Lead Designer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
  { name: 'Leo Ramirez', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
  { name: 'Sophia Nguyen', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
  { name: 'Ethan Wright', role: 'Brand Strategist', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' },
];

const Team = () => (
  <section id="team" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Meet the Creatives</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">The passionate minds behind PixelForge, turning ideas into reality.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <div className="relative inline-block">
              <img src={member.img} alt={member.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover mb-4 border-4 border-gray-700" loading="lazy" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-teal-500 transition-all duration-300"></div>
            </div>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-teal-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// Case Studies Component
const caseStudiesData = [
  {
    client: 'Stellar Solutions',
    title: 'Rebranding a B2B SaaS for Market Leadership',
    description: 'We conducted a full brand overhaul for Stellar, resulting in a 200% increase in lead generation and a 45% uplift in brand recognition.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
    tags: ['Branding', 'Web Design', 'Strategy']
  },
  {
    client: 'Quantum Leap',
    title: 'Designing a High-Conversion E-commerce Platform',
    description: 'Our team built a new e-commerce experience from the ground up, boosting their conversion rate by 70% and average order value by 30%.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop',
    tags: ['E-commerce', 'UI/UX', 'Development']
  }
];

const CaseStudies = () => (
    <section id="case-studies" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">Success Stories</h2>
                <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Discover how we've helped our clients achieve their goals.</p>
            </div>
            <div className="space-y-16">
                {caseStudiesData.map((study, index) => (
                    <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="lg:w-1/2">
                          <img src={study.img} alt={study.title} className="rounded-2xl shadow-2xl object-cover w-full h-full" loading="lazy" />
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-teal-400 font-semibold mb-2">{study.client}</p>
                            <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">{study.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {study.tags.map(tag => (
                                    <span key={tag} className="inline-flex items-center rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-teal-300">{tag}</span>
                                ))}
                            </div>
                            <a href="#" className="font-semibold text-white hover:text-teal-400 transition-colors duration-300">
                                Read Case Study &rarr;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Contact Component
const Contact = () => (
  <section id="contact" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Let's Build Together</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Have a project in mind? We'd love to hear about it.</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl">
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            <p className="text-gray-400">Fill up the form and our team will get back to you within 24 hours.</p>
            <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">hello@pixelforge.com</span>
            </div>
            <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">123 Creative Lane, Digital City</span>
            </div>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
            <input type="text" id="name" className="w-full bg-gray-700 border-gray-600 text-white rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input type="email" id="email" className="w-full bg-gray-700 border-gray-600 text-white rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full bg-gray-700 border-gray-600 text-white rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"></textarea>
          </div>
          <button type="submit" className="w-full flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-0.5">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  </section>
);


// Footer Component
const Footer = () => (
    <footer className="bg-gray-800/50 py-12">
        <div className="container mx-auto px-6 text-center text-gray-400">
            <div className="flex justify-center items-center space-x-2 mb-4">
                <Aperture className="w-6 h-6 text-teal-400" />
                <span className="text-xl font-bold text-white">PixelForge</span>
            </div>
            <p className="mb-4">Forging beautiful and functional digital experiences.</p>
            <div className="flex justify-center space-x-6 mb-6">
                <a href="#" className="hover:text-teal-400 transition">Twitter</a>
                <a href="#" className="hover:text-teal-400 transition">LinkedIn</a>
                <a href="#" className="hover:text-teal-400 transition">Dribbble</a>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} PixelForge Creative Agency. All rights reserved.</p>
        </div>
    </footer>
);


// ScrollToTopButton Component
const ScrollToTopButton = ({ isScrolled }) => (
    <a href="#" className={`fixed bottom-8 right-8 bg-teal-600 hover:bg-teal-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <ChevronUp size={24} />
    </a>
);


export default App;