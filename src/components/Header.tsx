import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Résultats", href: "#testimonials" },
    { name: "Contact", href: "#booking" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-artistic-navy/90 backdrop-blur-lg py-2 shadow-lg shadow-artistic-blue/20"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#home"
            className="font-display font-bold text-xl md:text-2xl text-artistic-sand"
          >
            THOMAS<span className="text-artistic-orange ml-2">MARTIN</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-sm text-artistic-sand/90 hover:text-artistic-sand transition-colors nav-link"
            >
              {link.name}
            </a>
          ))}
          <Button className="btn-primary artistic-border" asChild>
            <a href="#booking">Réserver une séance gratuite</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-artistic-sand focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-artistic-navy/95 backdrop-blur-lg z-40 pt-20">
          <nav className="container mx-auto px-4 flex flex-col space-y-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-lg text-artistic-sand"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="btn-primary artistic-border w-full"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <a href="#booking">Réserver une séance gratuite</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
