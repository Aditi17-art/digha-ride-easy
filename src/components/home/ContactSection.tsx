import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const phoneNumber = "+918167751151";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    "+",
    ""
  )}?text=Hi! I'm interested in renting a bike/scooty in Digha.`;

  return (
    <section className="py-10 px-4 bg-background">
      <div className="max-w-lg mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground text-center mb-6">
          Find Us
        </h2>

        {/* Map */}
        <div className="w-full h-48 rounded-2xl overflow-hidden shadow-card mb-6">
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

        {/* Location Info */}
        <div className="flex items-start gap-3 mb-6 p-4 bg-card rounded-xl shadow-card">
          <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <div>
            <h3 className="font-heading font-semibold text-foreground">
              Digha Bike Rentals
            </h3>
            <p className="text-muted-foreground text-sm">
              Digha, West Bengal, India
            </p>
            <p className="text-muted-foreground text-sm font-bold">
              Call us:+91 8167751151
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a href={`tel:${phoneNumber}`} className="flex-1">
            <Button className="w-full h-14 bg-gradient-cta text-primary-foreground font-semibold rounded-xl shadow-cta">
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </Button>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1">
            <Button className="w-full h-14 bg-success text-success-foreground font-semibold rounded-xl hover:opacity-90">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
