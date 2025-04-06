
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="container-custom section-expressionist-3 textured-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="reveal">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Portrait du coach sportif"
              className="rounded-lg shadow-xl relative z-10 w-full max-w-md mx-auto border-4 border-white"
              style={{
                boxShadow: "5px 5px 15px rgba(13, 77, 108, 0.3), -5px -5px 15px rgba(235, 107, 31, 0.2)",
              }}
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="reveal">
          <span className="inline-block text-primary font-semibold mb-2 bg-artistic-orange/10 px-3 py-1 rounded-md">À PROPOS</span>
          <h2 className="section-title">Thomas Martin, votre coach sportif à Paris</h2>
          <p className="text-muted-foreground mb-6">
            Diplômé en sciences du sport et passionné depuis plus de 10 ans
          </p>
          
          <div className="space-y-6 text-muted-foreground">
            <p>
              Passionné de sport depuis mon enfance, j'ai décidé de faire de cette
              passion mon métier après avoir moi-même vécu une transformation
              physique importante qui a changé ma vie.
            </p>
            <p>
              Diplômé d'un Master STAPS et certifié en nutrition sportive, je
              mets aujourd'hui mon expertise au service de celles et ceux qui
              souhaitent transformer leur corps et améliorer leur santé, qu'ils
              soient débutants ou d'un niveau intermédiaire.
            </p>
            <p className="font-medium text-foreground">
              Ma philosophie : vous accompagner pas à pas vers vos objectifs avec
              une approche humaine et des méthodes éprouvées, adaptées à votre
              niveau et à vos contraintes.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center bg-white/70 p-3 rounded-lg shadow-sm">
              <div className="mr-3 w-12 h-12 rounded-full bg-artistic-orange/20 flex items-center justify-center text-artistic-orange font-bold">
                10+
              </div>
              <span className="text-sm">Années d'expérience</span>
            </div>
            <div className="flex items-center bg-white/70 p-3 rounded-lg shadow-sm">
              <div className="mr-3 w-12 h-12 rounded-full bg-artistic-teal/20 flex items-center justify-center text-artistic-teal font-bold">
                300+
              </div>
              <span className="text-sm">Clients satisfaits</span>
            </div>
            <div className="flex items-center bg-white/70 p-3 rounded-lg shadow-sm">
              <div className="mr-3 w-12 h-12 rounded-full bg-artistic-blue/20 flex items-center justify-center text-artistic-blue font-bold">
                100%
              </div>
              <span className="text-sm">Accompagnement suivi</span>
            </div>
          </div>

          <div className="mt-8">
            <Button className="btn-primary" asChild>
              <a href="#booking">Réserver une séance</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
