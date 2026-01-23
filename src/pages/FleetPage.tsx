import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/booking/BookingForm";
import Footer from "@/components/layout/Footer";

import scooty1 from "@/assets/scooty-1.jpeg";
import scooty2 from "@/assets/scooty-2.jpeg";
import scooty3 from "@/assets/scooty-3.jpeg";
import scooty4 from "@/assets/scooty-4.jpeg";
import scooty5 from "@/assets/scooty-5.jpeg";
import scooty6 from "@/assets/scooty-6.jpeg";
import scooty7 from "@/assets/scooty-7.jpeg";

import bike1 from "@/assets/bike-1.jpeg";
import bike2 from "@/assets/bike-2.jpeg";
import bike3 from "@/assets/bike-3.jpeg";
import bike4 from "@/assets/bike-4.jpeg";
import bike6 from "@/assets/bike-6.jpeg";
import bike7 from "@/assets/bike-7.jpeg";

const vehicles = [
  {
    id: 1,
    name: "Hero Vida VX2 Electric ",
    type: "Scooty",
    image: scooty1,
    features: ["Automatic", "Electric"],
  },
  {
    id: 2,
    name: "TVS Jupiter 125",
    type: "Scooty",
    image: scooty2,
    features: ["Manual", "125cc", "Stylish Design"],
  },
  {
    id: 3,
    name: "Honda Activa 6G 125",
    type: "Scooty",
    image: scooty3,
    features: ["Manual", "125cc", "Stylish Design"],
  },
  {
    id: 4,
    name: "Hero XOOM 125",
    type: "Scooty",
    image: scooty4,
    features: ["Manual", "125cc", "Stylish Design"],
  },
  {
    id: 5,
    name: "Yamaha Fascino 125",
    type: "Scooty",
    image: scooty5,
    features: ["Manual", "125cc", "Stylish Design"],
  },
  {
    id: 6,
    name: "Yamaha Ray-ZR",
    type: "Scooty",
    image: scooty6,
    features: ["Manual", "125cc", "Stylish Design"],
  },
  {
    id: 7,
    name: "TVS Ntorq 125",
    type: "Scooty",
    image: scooty7,
    features: ["Manual", "125cc", "Stylish Design"],
  },

  {
    id: 8,
    name: "TVS Apache RTR 160 4V",
    type: "Bike",
    image: bike1,
    features: ["Manual", "160cc", "Sporty"],
  },
  {
    id: 9,
    name: "Hero XTreme 125",
    type: "Bike",
    image: bike2,
    features: ["Manual", "125cc", "Premium Cruiser"],
  },
  {
    id: 10,
    name: "Bajaj Pulsar N160  ",
    type: "Bike",
    image: bike3,
    features: ["Manual", "160cc", "Premium Cruiser"],
  },
  {
    id: 11,
    name: "Honda SP 125 ",
    type: "Bike",
    image: bike4,
    features: ["Manual", "160cc", "Premium Cruiser"],
  },
  {
    id: 13,
    name: "Hero Glamour 125",
    type: "Bike",
    image: bike6,
    features: ["Manual", "125cc", "Premium Cruiser"],
  },
  {
    id: 14,
    name: "Bajaj Pulsar N125  ",
    type: "Bike",
    image: bike7,
    features: ["Manual", "125cc", "Premium Cruiser"],
  },
];

const FleetPage = () => {
  const [filter, setFilter] = useState<"all" | "scooty" | "bike">("all");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string>();

  const filteredVehicles = vehicles.filter(
    (v) => filter === "all" || v.type.toLowerCase() === filter,
  );

  const handleBookNow = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary px-4 py-8">
        <h1 className="font-heading font-bold text-3xl text-secondary-foreground text-center">
          Our Fleet
        </h1>
        <p className="text-secondary-foreground/80 text-center mt-2">
          Choose from our well-maintained vehicles
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-0 z-20 bg-card border-b border-border px-4 py-3">
        <div className="flex gap-2 max-w-lg mx-auto">
          {(["all", "scooty", "bike"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                filter === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="px-4 py-6 max-w-lg mx-auto">
        <div className="grid gap-4">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="flex">
                {/* Image */}
                <div className="w-1/3 bg-muted">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                  <span className="inline-block px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded mb-2">
                    {vehicle.type}
                  </span>
                  <h3 className="font-heading font-semibold text-foreground text-lg">
                    {vehicle.name}
                  </h3>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {vehicle.features.map((f, i) => (
                      <span
                        key={i}
                        className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <Button
                      onClick={() => handleBookNow(vehicle.name)}
                      size="sm"
                      className="bg-gradient-cta text-primary-foreground font-semibold rounded-lg">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        vehicleName={selectedVehicle}
      />
    </main>
  );
};

export default FleetPage;
