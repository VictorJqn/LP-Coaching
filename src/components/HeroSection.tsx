
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

      {/* Abstract artistic overlay */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-artistic-navy/70"
      ></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-artistic-orange/10 rounded-full blur-3xl mix-blend-overlay animate-pulse-soft z-10"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-artistic-navy/10 rounded-full blur-3xl mix-blend-overlay animate-pulse-soft z-10" style={{animationDelay: "1.5s"}}></div>

      <div className="container relative z-20 mx-auto px-4 py-32 flex flex-col items-end text-right">
        <div className="relative">
          <span className="bg-artistic-orange px-5 py-1.5 rounded-sm text-artistic-sand text-sm font-semibold mb-8 inline-block animate-geometric-shift transform -rotate-1">
            COACH SPORTIF À PARIS
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-2xl mb-8 text-artistic-sand artistic-title font-display" style={{textShadow: "2px 2px 4px rgba(0,0,0,0.3)"}}>
          REPRENEZ LE <span className="text-artistic-orange relative inline-block">
            CONTRÔLE
            <span className="absolute -bottom-2 right-0 w-full h-1 bg-artistic-orange"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-xl mb-10 text-artistic-sand leading-relaxed relative">
          <span className="absolute -left-4 top-0 w-1 h-full bg-artistic-orange opacity-70"></span>
          Transformez votre physique et votre santé avec un coaching personnalisé
          adapté à vos objectifs et à votre niveau
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5">
          <Button className="btn-primary artistic-border text-base group bg-artistic-orange hover:bg-artistic-rust transition-all duration-300" asChild>
            <a href="#booking" className="group-hover:animate-pulse-soft px-8 py-6 font-semibold text-lg">
              Réserver une séance gratuite
            </a>
          </Button>
          <Button className="btn-secondary text-base group border-artistic-sand/30 hover:border-artistic-sand transition-all duration-300" asChild>
            <a href="#about" className="group-hover:animate-pulse-soft px-8 py-6 font-semibold text-lg">
              En savoir plus
            </a>
          </Button>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-artistic-sand/80 hover:text-artistic-sand transition-colors"
        >
          <span className="text-sm mb-2 font-medium">Découvrir</span>
          <div className="w-10 h-10 rounded-full border border-artistic-sand/30 flex items-center justify-center">
            <ArrowDown className="animate-bounce" size={20} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
