import { useEffect, useState } from "react";
import "@/App.css";
import { Menu, X, ArrowUp, Star, MapPin, Phone, Mail, Github, Linkedin, Twitter, Instagram, Facebook, Lightbulb, Briefcase, Sparkles } from "lucide-react";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    { name: "Design", percentage: 85, color: "#FFC107" },
    { name: "Video Editing", percentage: 90, color: "#FF6B6B" },
    { name: "Motion Graphics", percentage: 95, color: "#4ECDC4" },
  ];

  const linearSkills = [
    { name: "Web Development", percentage: 80 },
    { name: "UI / UX Design", percentage: 85 },
  ];

  const services = [
    {
      icon: <Sparkles size={48} />,
      title: "Motion Graphic",
      description: "Professional motion graphics and animation for your brand",
    },
    {
      icon: <Briefcase size={48} />,
      title: "Web Development",
      description: "Modern, responsive websites built with latest technologies",
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Custom Service",
      description: "Tailored solutions to meet your unique business needs",
    },
  ];

  const portfolioItems = [
    { id: 1, category: "DESIGN", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop", title: "Brand Design" },
    { id: 2, category: "MOTION GRAPHIC", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop", title: "Motion Project" },
    { id: 3, category: "DESIGN", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop", title: "UI Design" },
    { id: 4, category: "MOTION GRAPHIC", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop", title: "Animation Work" },
    { id: 5, category: "DESIGN", image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop", title: "Creative Design" },
    { id: 6, category: "MOTION GRAPHIC", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop", title: "Video Production" },
  ];

  const packages = [
    {
      title: "For Hours",
      price: "$25",
      period: "per hour",
      features: ["Work until done", "Unlimited revisions", "Source files included", "Fast delivery"],
    },
    {
      title: "For A Project",
      price: "$500",
      period: "per project",
      features: ["Complete project", "More features", "Full ownership", "Professional support"],
      featured: true,
    },
    {
      title: "For Month",
      price: "$2000",
      period: "per month",
      features: ["Dedicated time", "24/7 support", "Priority delivery", "Monthly reports"],
    },
  ];

  const testimonials = [
    {
      name: "John Anderson",
      role: "CEO, TechCorp",
      rating: 5,
      text: "Outstanding work! The motion graphics brought our brand to life. Highly professional and creative.",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sarah Mitchell",
      role: "Marketing Director",
      rating: 5,
      text: "Exceptional quality and attention to detail. The project was delivered on time and exceeded expectations.",
      image: "https://i.pravatar.cc/150?img=45",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      rating: 5,
      text: "Creative genius! The designs were innovative and perfectly aligned with our vision. Will definitely work again.",
      image: "https://i.pravatar.cc/150?img=33",
    },
  ];

  const filteredPortfolio = activeFilter === "ALL" ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/95 backdrop-blur-md border-b border-yellow-500/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-primary" data-testid="nav-logo">Sadman Fuad Rafi</h1>
          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-white hover:text-yellow-primary transition-colors" data-testid="nav-home">Home</a>
            <a href="#about" className="text-white hover:text-yellow-primary transition-colors" data-testid="nav-about">About</a>
            <a href="#services" className="text-white hover:text-yellow-primary transition-colors" data-testid="nav-services">Services</a>
            <a href="#portfolio" className="text-white hover:text-yellow-primary transition-colors" data-testid="nav-portfolio">Portfolio</a>
            <a href="#contact" className="text-white hover:text-yellow-primary transition-colors" data-testid="nav-contact">Contact</a>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-dark-primary border-t border-yellow-500/20">
            <div className="flex flex-col gap-4 p-6">
              <a href="#home" className="text-white hover:text-yellow-primary transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" className="text-white hover:text-yellow-primary transition-colors" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#services" className="text-white hover:text-yellow-primary transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="text-white hover:text-yellow-primary transition-colors" onClick={() => setMenuOpen(false)}>Portfolio</a>
              <a href="#contact" className="text-white hover:text-yellow-primary transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="hero-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 hero-title" data-testid="hero-title">
                I'm <span className="text-yellow-primary">Sadman Fuad Rafi</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8" data-testid="hero-subtitle">Experienced in Motion Graphics</p>
              <button className="cta-button" data-testid="hero-cta-button">
                HIRE ME NOW
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="social-icon" data-testid="social-facebook"><Facebook size={24} /></a>
              <a href="#" className="social-icon" data-testid="social-twitter"><Twitter size={24} /></a>
              <a href="#" className="social-icon" data-testid="social-linkedin"><Linkedin size={24} /></a>
              <a href="#" className="social-icon" data-testid="social-instagram"><Instagram size={24} /></a>
              <a href="#" className="social-icon" data-testid="social-github"><Github size={24} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-light py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto about-image"
                data-testid="about-image"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-heading">Why hire me for your next project?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate motion graphics designer with over 5 years of experience creating stunning visual content.
                My expertise spans from intricate animations to comprehensive web development, ensuring your project stands out
                in today's competitive digital landscape.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I believe in delivering excellence, meeting deadlines, and exceeding client expectations. Let's collaborate to
                bring your vision to life with creativity and precision.
              </p>
              <button className="cta-button-dark" data-testid="about-cta-button">HIRE ME</button>
            </div>
          </div>

          {/* Circular Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center" data-testid={`skill-${skill.name.toLowerCase().replace(/ /g, '-')}`}>
                <div className="circular-progress" style={{ '--percentage': skill.percentage, '--color': skill.color }}>
                  <svg className="progress-ring" width="180" height="180">
                    <circle className="progress-ring-circle-bg" cx="90" cy="90" r="75" />
                    <circle className="progress-ring-circle" cx="90" cy="90" r="75" />
                  </svg>
                  <div className="progress-text">
                    <span className="text-4xl font-bold">{skill.percentage}%</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mt-6">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education, Work & Skills Section */}
      <section className="section-dark py-20 relative">
        <div className="section-bg-text">PRESENTATION</div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white" data-testid="skills-section-heading">EDUCATION, WORK & SKILLS</h2>
          <p className="text-center text-gray-300 mb-16 text-lg">My professional expertise and capabilities</p>

          {/* Linear Skills */}
          <div className="max-w-4xl mx-auto space-y-8">
            {linearSkills.map((skill, index) => (
              <div key={index} data-testid={`linear-skill-${skill.name.toLowerCase().replace(/ /g, '-')}`}>
                <div className="flex justify-between mb-2">
                  <span className="text-xl font-semibold text-white">{skill.name}</span>
                  <span className="text-xl font-semibold text-yellow-primary">{skill.percentage}%</span>
                </div>
                <div className="linear-progress">
                  <div className="linear-progress-bar" style={{ '--percentage': `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-yellow py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-testid="services-heading">SERVICE PROVIDED</h2>
          <p className="text-center text-gray-700 mb-16 text-lg">Professional services tailored to your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="service-card" data-testid={`service-card-${index}`}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="cta-button-dark" data-testid="services-cta-button">GET A SERVICE</button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-light py-20 relative">
        <div className="section-bg-text">PORTFOLIO</div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-testid="portfolio-heading">MY RECENT WORK</h2>
          <p className="text-center text-gray-700 mb-12 text-lg">Explore my latest projects and creations</p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["ALL", "DESIGN", "MOTION GRAPHIC"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                data-testid={`filter-${filter.toLowerCase().replace(/ /g, '-')}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="portfolio-item" data-testid={`portfolio-item-${item.id}`}>
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <div className="portfolio-overlay">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm mt-2">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-dark py-20 relative">
        <div className="section-bg-text">PRICING</div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white" data-testid="pricing-heading">CHOOSE A PACKAGE</h2>
          <p className="text-center text-gray-300 mb-16 text-lg">Flexible pricing options for every budget</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`pricing-card ${pkg.featured ? 'featured' : ''}`}
                data-testid={`pricing-package-${index}`}
              >
                <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-yellow-primary">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">/ {pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-yellow-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="cta-button w-full" data-testid={`pricing-cta-${index}`}>HIRE ME</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-yellow py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" data-testid="testimonials-heading">CLIENT SAYS</h2>
          <p className="text-center text-gray-700 mb-16 text-lg">What my clients say about working with me</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card" data-testid={`testimonial-${index}`}>
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFC107" color="#FFC107" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-dark py-20 relative">
        <div className="contact-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white" data-testid="contact-heading">Let's Make a Deal</h2>
          <p className="text-center text-gray-300 mb-16 text-lg">Get in touch to discuss your project</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4 contact-info" data-testid="contact-address">
                <MapPin size={24} className="text-yellow-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                  <p className="text-gray-300">123 Creative Street, Design District<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4 contact-info" data-testid="contact-phone">
                <Phone size={24} className="text-yellow-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4 contact-info" data-testid="contact-email">
                <Mail size={24} className="text-yellow-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">hello@sadmanrafi.com</p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="#" className="social-icon" data-testid="contact-social-facebook"><Facebook size={20} /></a>
                <a href="#" className="social-icon" data-testid="contact-social-twitter"><Twitter size={20} /></a>
                <a href="#" className="social-icon" data-testid="contact-social-linkedin"><Linkedin size={20} /></a>
                <a href="#" className="social-icon" data-testid="contact-social-instagram"><Instagram size={20} /></a>
              </div>
            </div>
            <div className="map-container" data-testid="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174383964756!2d-73.98823492346635!3d40.74844097138744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400" data-testid="footer-text">&copy; 2025 Sadman Fuad Rafi. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-button"
          data-testid="scroll-to-top-button"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
