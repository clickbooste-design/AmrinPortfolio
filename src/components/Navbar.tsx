import { useState, useEffect, useRef } from 'react';
import { Menu, X, Linkedin, Instagram, Mail } from 'lucide-react';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Results', href: '#results' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 2.8 }
      );
    }
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.to(mobileMenuRef.current, {
          x: 0,
          duration: 0.4,
          ease: 'power3.out',
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: '100%',
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              Amrin<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="nav-link"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Social + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={18} />
              </a>
            </div>
            <button
              onClick={() => handleLinkClick('#contact')}
              className="btn-glow !py-2.5 !px-6 text-sm"
            >
              Work With Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 glass md:hidden"
        style={{ transform: 'translateX(100%)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-3xl font-semibold text-foreground hover:text-primary transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.name}
            </button>
          ))}
          
          <div className="flex items-center gap-4 mt-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
            <a href="mailto:hello@amrinshith.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => handleLinkClick('#contact')}
            className="btn-glow mt-4"
          >
            Work With Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
