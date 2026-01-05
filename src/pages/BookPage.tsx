import { useState } from "react";
import BookingForm from "@/components/booking/BookingForm";
import Footer from "@/components/layout/Footer";

import scooty1 from "@/assets/scooty-1.jpg";
import scooty2 from "@/assets/scooty-2.jpg";
import bike1 from "@/assets/bike-1.jpg";
import bike2 from "@/assets/bike-2.jpg";
import { Button } from "@/components/ui/button";

const vehicles = [
  { id: 1, name: "Honda Activa", type: "Scooty", price: 300, image: scooty1 },
  { id: 2, name: "Honda Dio", type: "Scooty", price: 350, image: scooty2 },
  { id: 3, name: "Yamaha FZ", type: "Bike", price: 500, image: bike1 },
  { id: 4, name: "Royal Enfield Classic", type: "Bike", price: 800, image: bike2 },
];

const BookPage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState<string>();

  const handleSelectVehicle = (name: string) => {
    setSelectedVehicle(name);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-cta px-4 py-8">
        <h1 className="font-heading font-bold text-3xl text-primary-foreground text-center">
          Book Your Ride
        </h1>
        <p className="text-primary-foreground/80 text-center mt-2">
          Select a vehicle and fill the form to book
        </p>
      </div>

      {/* Quick Vehicle Selection */}
      <div className="px-4 py-6 max-w-lg mx-auto">
        <h2 className="font-heading font-semibold text-lg text-foreground mb-4">
          Quick Select Vehicle
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {vehicles.map((vehicle) => (
            <button
              key={vehicle.id}
              onClick={() => handleSelectVehicle(vehicle.name)}
              className={`p-3 rounded-xl border-2 transition-all ${
                selectedVehicle === vehicle.name
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-20 object-contain mb-2"
              />
              <p className="font-medium text-sm text-foreground">{vehicle.name}</p>
              <p className="text-accent font-bold text-sm">₹{vehicle.price}/day</p>
            </button>
          ))}
        </div>

        <Button
          onClick={() => setIsBookingOpen(true)}
          className="w-full mt-6 h-14 bg-gradient-cta text-primary-foreground font-heading font-semibold text-base rounded-xl shadow-cta"
        >
          Open Booking Form
        </Button>
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

export default BookPage;
