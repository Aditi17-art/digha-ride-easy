import { Bike, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-amber-400 to-accent flex items-center justify-center shadow-lg">
              <Bike className="w-5 h-5 text-white drop-shadow-sm" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-secondary rounded-full border-2 border-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg leading-none tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              DIGHA
            </span>
            <span className="font-heading font-semibold text-[10px] uppercase tracking-[0.2em] text-secondary">
              Bike Rentals
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/fleet" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Our Fleet
          </Link>
          <Link to="/hotels" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Hotels
          </Link>
          <Link to="/explore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Explore
          </Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link 
            to="/book" 
            className="bg-gradient-cta text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-cta hover:opacity-90 transition-opacity"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border px-4 py-3 space-y-3">
          <Link 
            to="/fleet" 
            onClick={() => setIsMenuOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Our Fleet
          </Link>
          <Link 
            to="/hotels" 
            onClick={() => setIsMenuOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Partner Hotels
          </Link>
          <Link 
            to="/explore" 
            onClick={() => setIsMenuOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Explore Digha
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Contact Us
          </Link>
          <Link 
            to="/book" 
            onClick={() => setIsMenuOpen(false)}
            className="block bg-gradient-cta text-primary-foreground px-4 py-3 rounded-full text-sm font-semibold text-center shadow-cta"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
};

export default TopNav;
