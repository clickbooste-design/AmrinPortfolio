import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Phone, Send, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Info cards animation
      gsap.fromTo(
        infoRef.current?.children || [],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Form inputs animation
      gsap.fromTo(
        formRef.current?.querySelectorAll('.form-item') || [],
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Animate button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you within 24 hours!",
    });

    setIsSubmitting(false);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="floating-orb w-72 h-72 top-20 right-10 opacity-15" />
      <div className="floating-orb w-56 h-56 bottom-40 -left-20 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Ready to scale your brand? Let's discuss how I can help you achieve your marketing goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:hello@amrinshith.com"
                  className="text-primary hover:underline"
                >
                  hello@amrinshith.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <span className="text-muted-foreground">+1 (234) 567-890</span>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <span className="text-muted-foreground">Available Worldwide (Remote)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">
                Connect with me
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="mailto:hello@amrinshith.com"
                  className="social-icon"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6"
          >
            <div className="form-item">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-muted-foreground"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="input-glass"
              />
            </div>

            <div className="form-item">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-muted-foreground"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@company.com"
                className="input-glass"
              />
            </div>

            <div className="form-item">
              <label
                htmlFor="business"
                className="block text-sm font-medium mb-2 text-muted-foreground"
              >
                Business / Brand Name
              </label>
              <input
                type="text"
                id="business"
                name="business"
                required
                placeholder="Your Company Inc."
                className="input-glass"
              />
            </div>

            <div className="form-item">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-muted-foreground"
              >
                Marketing Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your marketing goals and challenges..."
                className="input-glass resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn btn-glow w-full flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
