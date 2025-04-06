
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
  rating: number;
  transformation?: string;
}

const TestimonialCard = ({
  name,
  role,
  testimonial,
  image,
  rating,
  transformation,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      </div>

      {transformation && (
        <div className="mb-4 p-2 bg-primary/5 rounded-md">
          <p className="text-sm font-medium text-primary">
            <span className="font-bold">Transformation :</span> {transformation}
          </p>
        </div>
      )}

      <p className="text-muted-foreground italic flex-grow">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
