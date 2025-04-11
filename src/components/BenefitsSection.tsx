
import BenefitCard from "./BenefitCard";
import { Heart, Award, Clock } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Approche humaine",
      description:
        "Je prends le temps de vous écouter et de comprendre vos objectifs pour vous proposer un coaching vraiment adapté à vos besoins.",
      icon: <Heart size={32} className="stroke-artistic-sand" strokeWidth={1.5} />,
    },
    {
      title: "Résultats visibles",
      description:
        "Grâce à des méthodes éprouvées et un suivi continu, vous obtiendrez des résultats concrets et durables dès les premières semaines.",
      icon: <Award size={32} className="stroke-artistic-sand" strokeWidth={1.5} />,
    },
    {
      title: "Flexibilité totale",
      description:
        "Coaching à domicile, en salle ou en visio, je m'adapte à votre emploi du temps et à vos contraintes pour faciliter votre pratique.",
      icon: <Clock size={32} className="stroke-artistic-sand" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-artistic-navy/5 via-white to-artistic-orange/5 z-[-1]"></div>
      <div className="absolute inset-0 z-[-1] opacity-20" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23eb6b1f' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-20 w-40 h-40 bg-artistic-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-20 w-60 h-60 bg-artistic-navy/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="w-12 h-1 bg-artistic-orange"></span>
            <span className="inline-block bg-gradient-to-r from-artistic-navy to-artistic-orange text-artistic-sand font-semibold mx-4 px-4 py-1.5 rounded-sm transform rotate-1">MES AVANTAGES</span>
            <span className="w-12 h-1 bg-artistic-orange"></span>
          </div>
          
          <h2 className="section-title artistic-title text-4xl md:text-5xl mb-6">Pourquoi me choisir</h2>
          <p className="section-subtitle text-xl max-w-2xl mx-auto">
            Un accompagnement sur mesure pour atteindre vos objectifs de manière durable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="reveal" 
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)`
              }}
            >
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
