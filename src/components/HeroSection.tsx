import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, TrendingUp, BarChart3, Target } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });

    // Headline animation
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
    );

    // Subtitle animation
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    );

    // CTA animation
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    // Visual animation
    tl.fromTo(
      visualRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
      '-=1'
    );

    // Floating orbs animation
    gsap.to('.hero-orb', {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5,
    });

    // Rotating rings animation
    gsap.to('.rotating-ring', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    gsap.to('.rotating-ring-reverse', {
      rotation: -360,
      duration: 25,
      repeat: -1,
      ease: 'none',
    });

    // Stats counter animation
    gsap.to('.stat-icon', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Spotlight effect */}
      <div className="spotlight" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating orbs */}
      <div className="hero-orb floating-orb w-72 h-72 top-20 -left-36 opacity-30" />
      <div className="hero-orb floating-orb w-96 h-96 bottom-20 right-1/4 opacity-20" />
      <div className="hero-orb floating-orb w-48 h-48 top-1/3 right-10 opacity-25" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1
              ref={headlineRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 opacity-0"
            >
              Hi, I'm{' '}
              <span className="text-primary glow-text">Amrin Shith</span>
              <br />
              <span className="text-muted-foreground text-4xl sm:text-5xl lg:text-5xl">Digital Marketing Specialist</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed opacity-0"
            >
              Driving measurable growth through strategy, creativity & innovation. 
              I transform brands into market leaders with data-driven campaigns.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0">
              <button
                onClick={scrollToAbout}
                className="btn-glow"
              >
                View My Results
              </button>
              <a href="#contact" className="btn-outline-glow flex items-center gap-2">
                Work With Me
              </a>
            </div>
          </div>

          {/* 3D Visual Effect - Marketing Dashboard */}
          <div
            ref={visualRef}
            className="order-1 lg:order-2 w-full h-[400px] lg:h-[600px] relative flex items-center justify-center opacity-0"
          >
            {/* Animated Analytics Sphere */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Core sphere */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent backdrop-blur-sm border border-primary/20 animate-pulse-glow" />
              
              {/* Inner glow */}
              <div className="absolute inset-8 rounded-full bg-gradient-radial from-primary/40 via-primary/10 to-transparent blur-xl" />
              
              {/* Rotating ring 1 - Analytics */}
              <div className="rotating-ring absolute inset-0 rounded-full border-2 border-primary/30 border-dashed" style={{ transform: 'rotateX(70deg)' }} />
              
              {/* Rotating ring 2 */}
              <div className="rotating-ring-reverse absolute -inset-4 rounded-full border border-primary/20" style={{ transform: 'rotateX(70deg) rotateZ(45deg)' }} />
              
              {/* Rotating ring 3 */}
              <div className="rotating-ring absolute -inset-8 rounded-full border border-primary/10" style={{ transform: 'rotateX(70deg) rotateZ(-30deg)' }} />
              
              {/* Center content - Growth icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 lg:w-20 lg:h-20 text-primary glow-text mx-auto" />
                  <span className="text-sm text-muted-foreground mt-2 block">Growth</span>
                </div>
              </div>

              {/* Floating stat icons */}
              <div className="stat-icon absolute -top-4 left-1/4 p-3 rounded-full bg-glass/60 border border-primary/30 backdrop-blur-sm">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div className="stat-icon absolute top-1/4 -right-4 p-3 rounded-full bg-glass/60 border border-primary/30 backdrop-blur-sm" style={{ animationDelay: '0.5s' }}>
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div className="stat-icon absolute -bottom-2 right-1/4 p-2 rounded-full bg-primary/20 backdrop-blur-sm" style={{ animationDelay: '1s' }}>
                <span className="text-xs font-bold text-primary">ROI</span>
              </div>
              <div className="stat-icon absolute bottom-1/4 -left-6 p-2 rounded-full bg-primary/30 backdrop-blur-sm" style={{ animationDelay: '1.5s' }}>
                <span className="text-xs font-bold text-foreground">+250%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
