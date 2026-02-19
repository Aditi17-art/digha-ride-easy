import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  /*{
    id: 1,
    name: "Hero Vida VX2 Electric ",
    type: "Scooty",
    image: scooty1,
  },
  {
    id: 2,
    name: "TVS Jupiter 125",
    type: "Scooty",
    image: scooty2,
  },*/
  {
    id: 3,
    name: "Honda Activa 6G 125",
    type: "Scooty",
    image: scooty3,
  },
  {
    id: 4,
    name: "Hero XOOM 125",
    type: "Scooty",
    image: scooty4,
  },
  {
    id: 5,
    name: "Yamaha Fascino 125",
    type: "Scooty",
    image: scooty5,
  },
  {
    id: 6,
    name: "Yamaha Ray-ZR",
    type: "Scooty",
    image: scooty6,
  },
  /* {
    id: 7,
    name: "TVS Ntorq 125",
    type: "Scooty",
    image: scooty7,
  },
  {
    id: 8,
    name: "TVS Apache RTR 160 4V",
    type: "Bike",
    image: bike1,
  },*/
  {
    id: 9,
    name: "Hero XTreme 125",
    type: "Bike",
    image: bike2,
  },
  {
    id: 10,
    name: "Bajaj Pulsar N160",
    type: "Bike",
    image: bike3,
  },
  {
    id: 11,
    name: "Honda SP 125",
    type: "Bike",
    image: bike4,
  },
  /* {
    id: 13,
    name: "Hero Glamour 125",
    type: "Bike",
    image: bike6,
  },
  {
    id: 14,
    name: "Bajaj Pulsar N125",
    type: "Bike",
    image: bike7,
  },*/
];

const FleetCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 bg-background">
      <div className="px-4 mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-heading font-bold text-2xl text-foreground">
            Our Fleet
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Choose your perfect ride
          </p>
        </div>
        <Link
          to="/fleet"
          className="text-secondary font-medium text-sm hover:underline">
          View All
        </Link>
      </div>

      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-lg bg-accent shadow-lg flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-lg bg-accent shadow-lg flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2 snap-x snap-mandatory">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex-shrink-0 w-64 bg-card rounded-2xl shadow-card overflow-hidden snap-start">
              {/* Image */}
              <div className="relative h-40 bg-muted">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-contain p-2"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md">
                  {vehicle.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground text-lg">
                  {vehicle.name}
                </h3>
                <Link to="/book">
                  <Button className="w-full mt-3 bg-gradient-cta text-primary-foreground font-semibold rounded-lg hover:opacity-90">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetCarousel;
