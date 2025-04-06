
import { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sophie M.",
      role: "Cliente depuis 8 mois",
      testimonial:
        "Grâce au coaching de Thomas, j'ai perdu 12kg en 6 mois tout en me remettant au sport en douceur. Son approche personnalisée m'a permis de rester motivée et d'atteindre des objectifs que je pensais impossibles!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      rating: 5,
      transformation: "-12kg et gain de tonicité"
    },
    {
      name: "Laurent P.",
      role: "Client depuis 1 an",
      testimonial:
        "Thomas a su me motiver et me guider pour reprendre une activité physique après des années de sédentarité. Ses conseils sont précieux, les séances toujours variées, et les résultats sont là!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      transformation: "+5kg de muscle, -8kg de graisse"
    },
    {
      name: "Emma L.",
      role: "Cliente depuis 6 mois",
      testimonial:
        "Les séances en visio sont top! Même à distance, Thomas sait être attentif à la bonne exécution des mouvements. J'ai enfin trouvé une routine sportive que je peux maintenir sur la durée.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
      rating: 4,
      transformation: "Amélioration posturale et énergie"
    },
    {
      name: "Julien T.",
      role: "Client depuis 4 mois",
      testimonial:
        "Le coaching en salle avec Thomas a transformé ma pratique sportive. J'ai gagné en force et en endurance comme jamais auparavant. Ses connaissances en nutrition m'ont aussi beaucoup aidé!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      transformation: "+15% de performance physique"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = testimonials.length;
  const slideInterval = useRef<number | null>(null);
  const slidesPerPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(maxSlides / slidesPerPage));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(maxSlides / slidesPerPage) - 1 : prev - 1
    );
  };

  useEffect(() => {
    slideInterval.current = window.setInterval(nextSlide, 8000);
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  const pauseSlider = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const resumeSlider = () => {
    slideInterval.current = window.setInterval(nextSlide, 8000);
  };

  return (
    <section id="testimonials" className="container-custom">
      <div className="text-center mb-12 reveal">
        <span className="inline-block text-primary font-semibold mb-2">TÉMOIGNAGES</span>
        <h2 className="section-title">Résultats & Expériences</h2>
        <p className="section-subtitle">
          Découvrez les transformations et les retours d'expérience de mes clients
        </p>
      </div>

      <div
        className="relative"
        onMouseEnter={pauseSlider}
        onMouseLeave={resumeSlider}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            <div className="flex w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5 bg-white shadow-md rounded-full p-2 text-primary hover:bg-primary hover:text-white transition-colors z-10 hidden md:block"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-5 bg-white shadow-md rounded-full p-2 text-primary hover:bg-primary hover:text-white transition-colors z-10 hidden md:block"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center mt-10 space-x-2">
          {[...Array(Math.ceil(maxSlides / slidesPerPage))].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Button className="btn-primary" asChild>
          <a href="#booking">Obtenez votre transformation</a>
        </Button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
