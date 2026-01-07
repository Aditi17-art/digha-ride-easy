import { Phone, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const phoneNumber = "+918167751151";
  const email = "info@dighabikerentals.com";
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Digha,+West+Bengal,+India";

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-sky-50 to-cyan-50">
      <div className="max-w-lg mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground text-center mb-8">
          Find Us
        </h2>

        {/* Map */}
        <div className="w-full h-52 rounded-2xl overflow-hidden shadow-lg mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29498.26894866073!2d87.49499075!3d21.62748845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02c6b5d5d6fb41%3A0xee4e5b9b0f7c7e5!2sDigha%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1704456789012!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Digha Location Map"
          />
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-4">
          {/* Header with icon */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
              <Phone className="w-5 h-5 text-sky-500" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground">
              Contact Us
            </h3>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 ml-1">
            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-500" />
              <span className="text-sm">+91 81677 51151</span>
            </a>
            <a 
              href={`mailto:${email}`} 
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 text-sky-500" />
              <span className="text-sm">{email}</span>
            </a>
          </div>
        </div>

        {/* Get Directions Button */}
        <a 
          href={googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button 
            variant="outline" 
            className="w-full h-12 rounded-xl border-sky-400 text-sky-600 hover:bg-sky-50 hover:text-sky-700 font-medium"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Get Directions
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
