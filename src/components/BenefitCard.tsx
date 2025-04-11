
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  return (
    <div className="artistic-card p-6 group hover:translate-y-[-5px] transition-all duration-500 relative overflow-hidden backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-br before:from-artistic-orange/10 before:to-artistic-navy/10 before:z-[-1]">
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-artistic-orange/5 rounded-full blur-xl"></div>
      <div className="absolute -left-8 -top-8 w-20 h-20 bg-artistic-navy/5 rounded-full blur-lg"></div>
      
      <div className="w-16 h-16 bg-gradient-to-br from-artistic-orange to-artistic-navy rounded-md rotate-3 flex items-center justify-center text-artistic-sand mb-6 group-hover:rotate-0 transition-all duration-500 shadow-lg relative z-10">
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay rounded-md"></div>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-artistic-navy to-artistic-orange bg-clip-text text-transparent relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-12 h-1 bg-artistic-orange opacity-70"></span>
      </h3>
      
      <p className="text-muted-foreground relative z-10">{description}</p>
    </div>
  );
};

export default BenefitCard;
