
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Check } from "lucide-react";
import { toast } from "sonner";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    objective: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, objective: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Votre demande a bien été envoyée !", {
        description: "Je vous contacterai très prochainement pour organiser notre première séance.",
        action: {
          label: "Fermer",
          onClick: () => console.log("Toast closed"),
        },
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        objective: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="booking" className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="inline-block text-primary font-semibold mb-2">
            RÉSERVATION
          </span>
          <h2 className="section-title">Réservez votre séance gratuite</h2>
          <p className="text-muted-foreground mb-8">
            Prenez rendez-vous pour une séance découverte sans engagement où nous
            discuterons de vos objectifs et de la meilleure approche pour les
            atteindre.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full text-primary">
                <Check size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Évaluation complète</h4>
                <p className="text-muted-foreground text-sm">
                  Analyse de votre condition physique et de vos objectifs pour établir
                  un point de départ précis.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full text-primary">
                <Check size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Plan personnalisé</h4>
                <p className="text-muted-foreground text-sm">
                  Proposition d'un programme sur mesure adapté à votre niveau et à
                  vos contraintes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full text-primary">
                <Check size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Sans engagement</h4>
                <p className="text-muted-foreground text-sm">
                  Cette première séance est gratuite et sans aucun engagement de
                  votre part.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center">
            <div className="mr-4 p-2 rounded-full bg-primary text-white">
              <Calendar size={24} />
            </div>
            <p className="font-medium">
              Disponibilité : <span className="text-primary">Lundi - Samedi, 7h - 21h</span>
            </p>
          </div>
        </div>

        <div className="reveal">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Formulaire de contact</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre.email@exemple.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="objective">Votre objectif principal</Label>
                <Select onValueChange={handleSelectChange} value={formData.objective}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre objectif" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="perte-poids">Perte de poids</SelectItem>
                    <SelectItem value="gain-muscle">Prise de masse musculaire</SelectItem>
                    <SelectItem value="tonification">Tonification</SelectItem>
                    <SelectItem value="endurance">Amélioration endurance</SelectItem>
                    <SelectItem value="sante">Santé générale</SelectItem>
                    <SelectItem value="autre">Autre objectif</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Partagez plus d'informations sur vos objectifs ou posez-moi vos questions"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Réserver ma séance gratuite"}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                En soumettant ce formulaire, vous acceptez d'être contacté au sujet de votre demande.
                <br />
                Vos données ne seront jamais partagées avec des tiers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
