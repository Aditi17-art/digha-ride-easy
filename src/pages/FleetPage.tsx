import { useState } from "react";
import BookingForm from "@/components/booking/BookingForm";
import VehicleCard from "@/components/fleet/VehicleCard";
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
  { id: 1, name: "Hero Vida VX2 Electric", type: "Scooty", image: scooty1, distance: "200 km" },
  { id: 2, name: "TVS Jupiter 125", type: "Scooty", image: scooty2, distance: "180 km" },
  { id: 3, name: "Honda Activa 6G 125", type: "Scooty", image: scooty3, distance: "175 km" },
  { id: 4, name: "Hero XOOM 125", type: "Scooty", image: scooty4, distance: "185 km" },
  { id: 5, name: "Yamaha Fascino 125", type: "Scooty", image: scooty5, distance: "170 km" },
  { id: 6, name: "Yamaha Ray-ZR", type: "Scooty", image: scooty6, distance: "175 km" },
  { id: 7, name: "TVS Ntorq 125", type: "Scooty", image: scooty7, distance: "180 km" },
  { id: 8, name: "TVS Apache RTR 160 4V", type: "Bike", image: bike1, distance: "220 km" },
  { id: 9, name: "Hero XTreme 125", type: "Bike", image: bike2, distance: "200 km" },
  { id: 10, name: "Bajaj Pulsar N160", type: "Bike", image: bike3, distance: "210 km" },
  { id: 11, name: "Honda SP 125", type: "Bike", image: bike4, distance: "195 km" },
  { id: 13, name: "Hero Glamour 125", type: "Bike", image: bike6, distance: "190 km" },
  { id: 14, name: "Bajaj Pulsar N125", type: "Bike", image: bike7, distance: "185 km" },
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

  const handleContact = () => {
    window.open("tel:+919876543210", "_self");
  };

  return (
    <div className="dark">
      <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border px-4 py-8">
        <h1 className="font-heading font-bold text-3xl text-foreground text-center">
          Our Fleet
        </h1>
        <p className="text-muted-foreground text-center mt-2">
          Choose from our well-maintained vehicles
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-0 z-20 bg-card border-b border-border px-4 py-3">
        <div className="flex gap-2 max-w-2xl mx-auto">
          {(["all", "scooty", "bike"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`flex-1 py-2.5 px-4 rounded-xl font-medium text-sm transition-all ${
                filter === tab
                  ? "bg-primary text-primary-foreground shadow-cta"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="px-4 py-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              name={vehicle.name}
              type={vehicle.type}
              image={vehicle.image}
              distance={vehicle.distance}
              onBookNow={() => handleBookNow(vehicle.name)}
              onContact={handleContact}
            />
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
    </div>
  );
};

export default FleetPage;
