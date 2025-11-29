import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Floating particles animation
    gsap.to('.preloader-particle', {
      y: -30,
      opacity: 0.8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.3,
    });

    // Animate progress bar
    tl.to(progressRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'power2.out',
      onUpdate: function() {
        const prog = Math.round(this.progress() * 100);
        setProgress(prog);
      }
    });

    // Fade out text
    tl.to(textRef.current, {
      opacity: 0,
      y: -20,
      filter: 'blur(10px)',
      duration: 0.4,
      ease: 'power2.in'
    });

    // Scale and fade out preloader
    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
        onComplete();
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="preloader-particle absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        />
      ))}
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-glow-purple/5 blur-[80px]" />
      
      <div ref={textRef} className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Name */}
        <div className="text-5xl md:text-7xl font-bold tracking-tighter">
          <span className="text-foreground">Amrin</span>
          <span className="text-primary"> Shith</span>
        </div>
        
        {/* Subtitle */}
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Digital Marketing Specialist
        </p>
        
        {/* Progress bar */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="progress-bar-container">
            <div ref={progressRef} className="progress-bar" />
          </div>
          
          {/* Percentage */}
          <span className="text-muted-foreground text-sm font-mono">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
