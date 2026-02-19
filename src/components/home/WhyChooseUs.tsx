import { Shield, Wallet, HardHat, Percent } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Bikes",
    description: "Well-maintained & sanitized after every ride",
  },
  {
    icon: Wallet,
    title: "Zero Security Deposit",
    description: "Pay only for what you use, no hidden charges",
  },
  {
    icon: HardHat,
    title: "Free Helmets",
    description: "2 Complimentary helmets provided with every rental",
  },
  {
    icon: Percent,
    title: "Hotel Discounts",
    description: "Get upto 10% off on partner hotel bookings",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-14 px-4 relative overflow-hidden">
      {/* Premium sunset gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-rose-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-200/60 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-200/50 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Why Ride With Us
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
            The Smart Choice for Your Ride
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1.5 text-center">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
