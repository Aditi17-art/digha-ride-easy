import { Shield, Wallet, HardHat, Percent } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Bikes",
    description: "Well-maintained & sanitized after every ride",
  },
  {
    icon: Wallet,
    title: "Zero Deposit",
    description: "Pay only for what you use, no hidden charges",
  },
  {
    icon: HardHat,
    title: "Free Helmet",
    description: "Complimentary helmet provided with every rental",
  },
  {
    icon: Percent,
    title: "Hotel Discounts",
    description: "Get 10% off on partner hotel bookings",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 px-4 bg-accent">
      <div className="text-center mb-8">
        <h2 className="font-heading font-bold text-2xl text-accent-foreground">
          Why Choose Us?
        </h2>
        <p className="text-accent-foreground/80 text-sm mt-2 max-w-xs mx-auto">
          Enjoy the convenience of affordable two-wheeler rentals in Digha
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-card rounded-2xl p-5 shadow-card text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
