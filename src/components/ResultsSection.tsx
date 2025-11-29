import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, TrendingUp, Users, Eye, Target } from 'lucide-react';

import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.png';
import project6 from '@/assets/project-6.png';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    title: 'E-Commerce Brand Launch',
    description: 'Complete digital strategy for fashion e-commerce launch including SEO, social, and paid campaigns.',
    image: project1,
    metrics: [
      { label: 'ROAS', value: '5.2x' },
      { label: 'Revenue', value: '+340%' },
    ],
    platforms: ['Meta', 'Google', 'TikTok'],
  },
  {
    id: 2,
    title: 'Gaming Community Growth',
    description: 'Built engaged gaming community from scratch with influencer partnerships and viral content.',
    image: project2,
    metrics: [
      { label: 'Followers', value: '250K+' },
      { label: 'Engagement', value: '12%' },
    ],
    platforms: ['Instagram', 'Discord', 'YouTube'],
  },
  {
    id: 3,
    title: 'SaaS Lead Generation',
    description: 'B2B lead generation campaign with content marketing, LinkedIn ads, and email automation.',
    image: project3,
    metrics: [
      { label: 'Leads', value: '2,400+' },
      { label: 'Cost/Lead', value: '-65%' },
    ],
    platforms: ['LinkedIn', 'Google', 'HubSpot'],
  },
  {
    id: 4,
    title: 'Mobile App Launch',
    description: 'App store optimization and user acquisition campaign for gaming mobile application.',
    image: project4,
    metrics: [
      { label: 'Downloads', value: '500K+' },
      { label: 'CPI', value: '$0.42' },
    ],
    platforms: ['Meta', 'TikTok', 'Apple'],
  },
  {
    id: 5,
    title: 'Local Business SEO',
    description: 'Complete local SEO overhaul resulting in first-page rankings and increased foot traffic.',
    image: project5,
    metrics: [
      { label: 'Traffic', value: '+380%' },
      { label: 'Rankings', value: '#1' },
    ],
    platforms: ['Google', 'Yelp', 'Local'],
  },
  {
    id: 6,
    title: 'Influencer Campaign',
    description: 'Coordinated multi-platform influencer campaign for lifestyle brand awareness.',
    image: project6,
    metrics: [
      { label: 'Impressions', value: '15M+' },
      { label: 'CTR', value: '4.8%' },
    ],
    platforms: ['Instagram', 'TikTok', 'YouTube'],
  },
];

const ResultsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );

      // Cards animation with stagger
      gsap.fromTo(
        '.case-study-card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="floating-orb w-80 h-80 top-40 -left-40 opacity-15" />
      <div className="floating-orb w-64 h-64 bottom-20 right-0 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="section-title">Results & Case Studies</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real campaigns. Real results. See how I've helped brands achieve extraordinary growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="case-study-card project-card group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="p-3 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                    <ExternalLink size={20} />
                  </button>
                </div>

                {/* Metrics overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm">
                      <span className="text-primary font-bold text-sm">{metric.value}</span>
                      <span className="text-muted-foreground text-xs ml-1">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {study.description}
                </p>
                
                {/* Platforms */}
                <div className="flex flex-wrap gap-2">
                  {study.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: TrendingUp, label: 'Revenue Generated', value: '$2M+' },
            { icon: Users, label: 'Clients Served', value: '50+' },
            { icon: Eye, label: 'Total Impressions', value: '100M+' },
            { icon: Target, label: 'Avg. ROAS', value: '4.5x' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
