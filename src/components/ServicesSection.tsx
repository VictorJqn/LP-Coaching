
import ServiceCard from "./ServiceCard";
import { Home, Building, Video } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Coaching à domicile",
      description: "Je me déplace chez vous avec tout le matériel nécessaire",
      price: "À partir de 70€/séance",
      features: [
        "Séances de 1h à votre domicile",
        "Équipement fourni",
        "Programme personnalisé",
        "Suivi nutritionnel inclus",
        "Disponible dans tout Paris"
      ],
      icon: <Home size={36} />,
      isPopular: false,
    },
    {
      title: "Coaching en salle",
      description: "Entraînement intensif dans une salle partenaire",
      price: "À partir de 60€/séance",
      features: [
        "Accès à un équipement complet",
        "Techniques avancées",
        "Programme sur mesure",
        "Suivi nutritionnel inclus",
        "Forfaits disponibles"
      ],
      icon: <Building size={36} />,
      isPopular: true,
    },
    {
      title: "Coaching en visio",
      description: "Séances à distance pour plus de flexibilité",
      price: "À partir de 45€/séance",
      features: [
        "Flexibilité horaire totale",
        "Économique et efficace",
        "Programme adapté au matériel disponible",
        "Suivi nutritionnel inclus",
        "Idéal pour les débutants"
      ],
      icon: <Video size={36} />,
      isPopular: false,
    },
  ];

  return (
    <section id="services" className="section-expressionist-2 textured-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <span className="inline-block text-primary font-semibold mb-2 bg-artistic-teal/10 px-3 py-1 rounded-md">MES SERVICES</span>
          <h2 className="section-title">Ce que je propose</h2>
          <p className="section-subtitle">
            Des solutions de coaching adaptées à vos besoins et à votre emploi du temps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="reveal" style={{ animationDelay: `${index * 0.2}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
