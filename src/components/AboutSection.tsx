import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '@/assets/profile.png';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'SEO', icon: '🔍' },
  { name: 'Social Media', icon: '📱' },
  { name: 'Google Ads', icon: '📊' },
  { name: 'Meta Ads', icon: '🎯' },
  { name: 'Analytics', icon: '📈' },
  { name: 'Email Marketing', icon: '✉️' },
  { name: 'Content Strategy', icon: '✍️' },
  { name: 'Branding', icon: '💎' },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, filter: 'blur(10px)' },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%',
          },
        }
      );

      // Skills animation
      gsap.fromTo(
        skillsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="floating-orb w-64 h-64 top-20 right-0 opacity-20" />
      <div className="floating-orb w-48 h-48 bottom-40 left-10 opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-start">
            <div className="profile-glow">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 transition-transform duration-500 hover:scale-105 hover:rotate-3">
                <img
                  src={profileImage}
                  alt="Amrin Shith - Digital Marketing Specialist"
                  className="w-full h-full object-cover object-top"
                />
                {/* Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Me
            </span>
            
            <h2 className="section-title mb-6">
              Hi, I'm Amrin Shith
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a results-driven digital marketing specialist with a passion for 
              transforming businesses through strategic, data-backed campaigns. 
              With expertise spanning SEO, social media, and performance marketing, 
              I help brands exceed their growth targets and dominate their markets.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              My approach combines creative storytelling with analytical precision. 
              Whether it's optimizing conversion funnels, crafting viral social campaigns, 
              or scaling paid advertising for maximum ROAS, I deliver measurable results 
              that directly impact your bottom line. Every strategy is tailored to your 
              unique business goals.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Expertise
              </h3>
              <div ref={skillsRef} className="grid grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-icon text-center">
                    <span className="text-2xl mb-2 block">{skill.icon}</span>
                    <span className="text-xs text-muted-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-20">
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-3">
              Data-Driven Strategies
            </h3>
            <p className="text-muted-foreground">
              Every campaign is built on solid analytics and market research. 
              I track, measure, and optimize continuously to ensure maximum ROI 
              and sustainable growth for your brand.
            </p>
          </div>
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-3">
              Results That Matter
            </h3>
            <p className="text-muted-foreground">
              I've helped businesses achieve 300%+ growth in organic traffic, 
              5x ROAS on ad spend, and millions of impressions across platforms. 
              Your success is my success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
