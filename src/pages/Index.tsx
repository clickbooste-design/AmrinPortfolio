import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ResultsSection from '@/components/ResultsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scrolling during preloader
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Amrin Shith - Digital Marketing Specialist</title>
      <meta name="description" content="Hi, I'm Amrin Shith - a results-driven digital marketing specialist. I help brands achieve extraordinary growth through SEO, social media, and performance marketing." />

      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main Content */}
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ResultsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
