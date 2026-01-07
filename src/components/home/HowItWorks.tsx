import { CalendarDays, FileCheck, PhoneCall, Navigation, BadgePercent } from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Choose Date & Bike",
    description: "Select your pickup date and preferred vehicle",
    step: "01",
  },
  {
    icon: FileCheck,
    title: "Fill Booking Form",
    description: "Enter your details and submit the booking request",
    step: "02",
  },
  {
    icon: PhoneCall,
    title: "Get Confirmation",
    description: "Our representative will contact you to confirm",
    step: "03",
  },
  {
    icon: Navigation,
    title: "Pick Up Your Ride",
    description: "Visit our location and collect your vehicle",
    step: "04",
  },
  {
    icon: BadgePercent,
    title: "Avail Hotel Discount",
    description: "Show booking details at partner hotels for 10% off",
    step: "05",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-14 px-4 relative overflow-hidden">
      {/* Ocean-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
      
      {/* Decorative wave elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-sky-200/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tl from-cyan-200/50 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
            Simple Process
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
            How It Works?
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-sm mx-auto leading-relaxed">
            Book your ride in just a few simple steps
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative flex gap-5 group">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center z-10 border border-sky-100 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-sky-600 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-secondary/30 to-sky-200/50 absolute top-14 left-7 -translate-x-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-8 pt-2 ${isLast ? "pb-0" : ""}`}>
                  <h3 className="font-heading font-semibold text-foreground text-base group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
