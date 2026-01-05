import { Calendar, ClipboardList, PhoneCall, MapPin, Ticket } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Choose Date & Bike",
    description: "Select your pickup date and preferred vehicle",
  },
  {
    icon: ClipboardList,
    title: "Fill Booking Form",
    description: "Enter your details and submit the booking request",
  },
  {
    icon: PhoneCall,
    title: "Get Confirmation",
    description: "Our representative will contact you to confirm",
  },
  {
    icon: MapPin,
    title: "Pick Up Your Ride",
    description: "Visit our location and collect your vehicle",
  },
  {
    icon: Ticket,
    title: "Avail Hotel Discount",
    description: "Show booking details at partner hotels for 10% off",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-10 px-4 bg-secondary">
      <div className="text-center mb-8">
        <h2 className="font-heading font-bold text-2xl text-secondary-foreground">
          How It Works?
        </h2>
        <p className="text-secondary-foreground/80 text-sm mt-2 max-w-xs mx-auto">
          Book your ride in just a few simple steps
        </p>
      </div>

      <div className="max-w-sm mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="relative flex gap-4">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-md z-10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                {!isLast && (
                  <div className="w-0.5 h-full bg-card/50 absolute top-12 left-6 -translate-x-1/2" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                <h3 className="font-heading font-semibold text-secondary-foreground text-base">
                  {step.title}
                </h3>
                <p className="text-secondary-foreground/75 text-sm mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
