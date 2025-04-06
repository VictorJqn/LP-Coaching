
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  return (
    <div className="artistic-card p-6 group hover:translate-y-[-5px] transition-all duration-500 border-t-4 border-t-artistic-orange">
      <div className="w-14 h-14 bg-gradient-to-br from-artistic-orange to-artistic-teal rounded-full flex items-center justify-center text-artistic-sand mb-4 group-hover:animate-pulse-soft shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-artistic-navy to-artistic-teal bg-clip-text text-transparent paint-stroke">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default BenefitCard;
