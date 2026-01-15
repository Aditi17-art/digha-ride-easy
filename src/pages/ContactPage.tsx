import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";

const ContactPage = () => {
  const phoneNumber = "+918167751151";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    "+",
    ""
  )}?text=Hi! I'm interested in renting a bike/scooty in Digha.`;
  const emailAddress = "support@dighabikerentals.com";

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary px-4 py-8">
        <h1 className="font-heading font-bold text-3xl text-secondary-foreground text-center">
          Contact Us
        </h1>
        <p className="text-secondary-foreground/80 text-center mt-2">
          We're here to help you ride!
        </p>
      </div>

      <div className="px-4 py-6 max-w-lg mx-auto">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <a href={`tel:${phoneNumber}`}>
            <Button className="w-full h-16 bg-gradient-cta text-primary-foreground font-semibold rounded-xl shadow-cta flex flex-col gap-1">
              <Phone className="w-5 h-5" />
              <span className="text-sm">Call Now</span>
            </Button>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full h-16 bg-success text-success-foreground font-semibold rounded-xl flex flex-col gap-1">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">WhatsApp</span>
            </Button>
          </a>
        </div>

        {/* Contact Details */}
        <div className="bg-card rounded-2xl shadow-card p-6 space-y-5">
          <h2 className="font-heading font-semibold text-lg text-foreground">
            Contact Information
          </h2>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Phone</p>
              <a
                href={`tel:${phoneNumber}`}
                className="text-secondary hover:underline">
                +91-8167751151
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Email</p>
              <a
                href={`mailto:${emailAddress}`}
                className="text-secondary hover:underline">
                {emailAddress}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Location</p>
              <p className="text-muted-foreground">Digha, West Bengal, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Business Hours</p>
              <p className="text-muted-foreground">7:00 AM – 10:00 PM</p>
              <p className="text-sm text-accent">Open all days</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-6">
          <h2 className="font-heading font-semibold text-lg text-foreground mb-4">
            Find Us
          </h2>
          <div className="w-full h-56 rounded-2xl overflow-hidden shadow-card">
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
        </div>

        {/* FAQ Preview */}
        <div className="mt-8 bg-muted rounded-2xl p-6">
          <h2 className="font-heading font-semibold text-lg text-foreground mb-4">
            Quick FAQs
          </h2>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium text-foreground">
                Do I need a license?
              </p>
              <p className="text-muted-foreground mt-1">
                Yes, a valid driving license is required for all rentals.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground">Is helmet provided?</p>
              <p className="text-muted-foreground mt-1">
                Yes, we provide complimentary helmets with every rental.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground">
                What's the minimum rental period?
              </p>
              <p className="text-muted-foreground mt-1">
                Minimum booking is 24 hours (1 day).
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ContactPage;
