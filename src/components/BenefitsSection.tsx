
import BenefitCard from "./BenefitCard";
import { Heart, Award, Clock } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Approche humaine",
      description:
        "Je prends le temps de vous écouter et de comprendre vos objectifs pour vous proposer un coaching vraiment adapté à vos besoins.",
      icon: <Heart size={28} />,
    },
    {
      title: "Résultats visibles",
      description:
        "Grâce à des méthodes éprouvées et un suivi continu, vous obtiendrez des résultats concrets et durables dès les premières semaines.",
      icon: <Award size={28} />,
    },
    {
      title: "Flexibilité totale",
      description:
        "Coaching à domicile, en salle ou en visio, je m'adapte à votre emploi du temps et à vos contraintes pour faciliter votre pratique.",
      icon: <Clock size={28} />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-primary font-semibold mb-2">MES AVANTAGES</span>
          <h2 className="section-title">Pourquoi me choisir</h2>
          <p className="section-subtitle">
            Un accompagnement sur mesure pour atteindre vos objectifs de manière durable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="reveal" style={{ animationDelay: `${index * 0.2}s` }}>
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
