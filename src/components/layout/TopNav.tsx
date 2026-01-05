import { Bike, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-cta rounded-lg p-2">
            <Bike className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base leading-tight text-foreground">
              Digha Bike
            </span>
            <span className="font-heading font-semibold text-xs leading-tight text-secondary">
              Rentals
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
