
import { useEffect, useRef } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BenefitsSection from "../components/BenefitsSection";
import BookingSection from "../components/BookingSection";
import Footer from "../components/Footer";

const Index = () => {
  // Référence pour le canvas de particules
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Observer pour les animations au scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Effet de parallaxe au mouvement de la souris
    const handleMouseMove = (e: MouseEvent) => {
      const elements = document.querySelectorAll('.parallax-element');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-speed') || '0.05');
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation de l'arrière-plan du curseur
    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'cursor-trail';
    document.body.appendChild(cursorTrail);

    const handleCursorTrail = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      cursorTrail.style.left = x + 'px';
      cursorTrail.style.top = y + 'px';
    };

    window.addEventListener('mousemove', handleCursorTrail);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleCursorTrail);
      document.body.removeChild(cursorTrail);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
      {/* Canvas pour les particules */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-20" />
      
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <BenefitsSection />
        <BookingSection />
      </main>
      <Footer />
      
      {/* Éléments géométriques flottants pour l'effet artistique */}
      <div className="fixed right-[10%] top-[15%] w-32 h-32 bg-artistic-teal/10 rounded-lg rotate-12 blur-xl z-0 parallax-element" data-speed="0.03"></div>
      <div className="fixed left-[5%] bottom-[20%] w-40 h-40 bg-artistic-orange/10 rounded-lg -rotate-12 blur-xl z-0 parallax-element" data-speed="0.05"></div>
      <div className="fixed right-[15%] bottom-[10%] w-24 h-24 bg-artistic-blue/10 rounded-lg rotate-45 blur-xl z-0 parallax-element" data-speed="0.04"></div>
      
      <style jsx global>{`
        .cursor-trail {
          position: fixed;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(235,107,31,0.2) 0%, rgba(42,140,140,0.1) 70%, rgba(255,255,255,0) 100%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
          transition: width 0.3s, height 0.3s, opacity 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Index;
