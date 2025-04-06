
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  isPopular?: boolean;
}

const ServiceCard = ({
  title,
  description,
  price,
  features,
  icon,
  isPopular = false,
}: ServiceCardProps) => {
  return (
    <div
      className={`rounded-lg p-6 transition-all duration-300 h-full flex flex-col relative group ${
        isPopular
          ? "bg-primary/10 border-primary shadow-lg"
          : "bg-white border-gray-200 hover:shadow-md"
      } border`}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">
          Populaire
        </span>
      )}

      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      
      <div className="font-bold text-2xl mb-6">
        <span>{price}</span>
      </div>

      <div className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <Button
        className={`w-full ${
          isPopular ? "btn-primary" : "btn-secondary"
        }`}
        asChild
      >
        <a href="#booking">Réserver une séance</a>
      </Button>
    </div>
  );
};

export default ServiceCard;
