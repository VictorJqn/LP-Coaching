
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with artistic pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/7200454b-e672-42ef-ba44-64d3f55afb9c.png"
          alt="TAKE CONTROL"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Subtle overlay to enhance text visibility without blur */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-artistic-navy/70"
      ></div>

      <div className="container relative z-20 mx-auto px-4 py-32 flex flex-col items-end text-right">
        <span className="bg-artistic-orange px-4 py-1 rounded-md text-artistic-sand text-sm font-semibold mb-6 animate-geometric-shift">
          COACH SPORTIF À PARIS
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-2xl mb-6 text-artistic-sand artistic-title">
          REPRENEZ LE <span className="text-artistic-orange">CONTRÔLE</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-xl mb-8 text-artistic-sand">
          Transformez votre physique et votre santé avec un coaching personnalisé
          adapté à vos objectifs et à votre niveau
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="btn-primary artistic-border text-base group" asChild>
            <a href="#booking" className="group-hover:animate-pulse-soft">
              Réserver une séance gratuite
            </a>
          </Button>
          <Button className="btn-secondary text-base group" asChild>
            <a href="#about" className="group-hover:animate-pulse-soft">
              En savoir plus
            </a>
          </Button>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-artistic-sand/80 hover:text-artistic-sand transition-colors"
        >
          <span className="text-sm mb-2">Découvrir</span>
          <ArrowDown className="animate-bounce" size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
