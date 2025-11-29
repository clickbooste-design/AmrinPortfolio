import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Instagram, Mail, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Results', href: '#results' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40, filter: 'blur(5px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Floating particles
      gsap.to('.footer-particle', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.5,
          from: 'random',
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative py-16 overflow-hidden border-t border-border/30">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="footer-particle absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={contentRef} className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#home" className="text-3xl font-bold tracking-tight">
            Amrin<span className="text-primary"> Shith</span>
          </a>

          {/* Tagline */}
          <p className="text-muted-foreground text-center max-w-md">
            Transforming brands through strategic digital marketing. Let's create something amazing together.
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:hello@amrinshith.com"
              className="social-icon"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © 2025, Made with{' '}
            <Heart size={14} className="text-destructive fill-destructive" /> by{' '}
            <span className="text-primary">Amrin Shith</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
