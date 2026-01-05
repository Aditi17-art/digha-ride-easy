import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 px-4 mb-20">
      <div className="max-w-lg mx-auto">
        {/* Brand */}
        <div className="text-center mb-8">
          <h3 className="font-heading font-bold text-2xl text-primary mb-2">
            Digha Bike Rentals
          </h3>
          <p className="text-background/70 text-sm">
            Trusted Bike & Scooty Rental Service in Digha
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm text-background/80">
              Digha, West Bengal, India
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <a href="tel:+918167751151" className="text-sm text-background/80 hover:text-primary transition-colors">
              +91-8167751151
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <a href="mailto:info@dighabikerentals.com" className="text-sm text-background/80 hover:text-primary transition-colors">
              info@dighabikerentals.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm text-background/80">
              7:00 AM – 10:00 PM (All Days)
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-xs text-background/60 mb-2">
            © 2024 Digha Bike Rentals. All rights reserved.
          </p>
          <p className="text-xs text-background/50">
            Designed & Developed by{" "}
            <span className="text-primary font-medium">Aditi Dhariwal</span> &{" "}
            <span className="text-primary font-medium">Subhayan Sahoo</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
