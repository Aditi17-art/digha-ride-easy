import { useState } from "react";
import { useLocation } from "react-router-dom";
import BookingForm from "@/components/booking/BookingForm";
import Footer from "@/components/layout/Footer";

import scooty1 from "@/assets/scooty-1.jpeg";
import scooty2 from "@/assets/scooty-2.jpeg";
import scooty3 from "@/assets/scooty-3.jpeg";

import bike1 from "@/assets/bike-1.jpeg";
import bike2 from "@/assets/bike-2.jpeg";
import { Button } from "@/components/ui/button";

interface LocationState {
  pickupDate?: Date;
  pickupTime?: string;
  dropoffDate?: Date;
  dropoffTime?: string;
}

const vehicles = [
  {
    id: 1,
    name: "Hero Vida VX2 Electric Scooty",
    type: "Scooty",
    image: scooty1,
  },
  { id: 2, name: "TVS Jupiter 125", type: "Scooty", image: scooty2 },
  { id: 3, name: "TVS Jupiter 125", type: "Scooty", image: scooty3 },

  { id: 3, name: "TVS Apache RTR 160 4V", type: "Bike", image: bike1 },
  {
    id: 4,
    name: "Royal Enfield Classic",
    type: "Bike",
    image: bike2,
  },
];

const BookPage = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;

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
              }`}>
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-20 object-contain mb-2"
              />
              <p className="font-medium text-sm text-foreground">
                {vehicle.name}
              </p>
            </button>
          ))}
        </div>

        <Button
          onClick={() => setIsBookingOpen(true)}
          className="w-full mt-6 h-14 bg-gradient-cta text-primary-foreground font-heading font-semibold text-base rounded-xl shadow-cta">
          Open Booking Form
        </Button>
      </div>

      <Footer />

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        vehicleName={selectedVehicle}
        initialPickupDate={
          state?.pickupDate ? new Date(state.pickupDate) : new Date()
        }
        initialPickupTime={state?.pickupTime || "10:00 AM"}
        initialDropoffDate={
          state?.dropoffDate
            ? new Date(state.dropoffDate)
            : new Date(new Date().setDate(new Date().getDate() + 1))
        }
        initialDropoffTime={state?.dropoffTime || "10:00 AM"}
      />
    </main>
  );
};

export default BookPage;
