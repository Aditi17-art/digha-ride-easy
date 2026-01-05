import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/booking/BookingForm";
import Footer from "@/components/layout/Footer";

import scooty1 from "@/assets/scooty-1.jpg";
import scooty2 from "@/assets/scooty-2.jpg";
import bike1 from "@/assets/bike-1.jpg";
import bike2 from "@/assets/bike-2.jpg";

const vehicles = [
  {
    id: 1,
    name: "Honda Activa",
    type: "Scooty",
    price: 300,
    priceUnit: "day",
    image: scooty1,
    features: ["Automatic", "110cc", "Fuel Efficient"],
  },
  {
    id: 2,
    name: "Honda Dio",
    type: "Scooty",
    price: 350,
    priceUnit: "day",
    image: scooty2,
    features: ["Automatic", "110cc", "Stylish Design"],
  },
  {
    id: 3,
    name: "Yamaha FZ",
    type: "Bike",
    price: 500,
    priceUnit: "day",
    image: bike1,
    features: ["Manual", "150cc", "Sporty"],
  },
  {
    id: 4,
    name: "Royal Enfield Classic",
    type: "Bike",
    price: 800,
    priceUnit: "day",
    image: bike2,
    features: ["Manual", "350cc", "Premium Cruiser"],
  },
];

const FleetPage = () => {
  const [filter, setFilter] = useState<"all" | "scooty" | "bike">("all");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string>();

  const filteredVehicles = vehicles.filter(
    (v) => filter === "all" || v.type.toLowerCase() === filter
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
              }`}
            >
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
              className="bg-card rounded-2xl shadow-card overflow-hidden"
            >
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
                        className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <p className="text-accent font-bold text-lg">
                      ₹{vehicle.price}
                      <span className="text-muted-foreground font-normal text-sm">
                        /{vehicle.priceUnit}
                      </span>
                    </p>
                    <Button
                      onClick={() => handleBookNow(vehicle.name)}
                      size="sm"
                      className="bg-gradient-cta text-primary-foreground font-semibold rounded-lg"
                    >
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
