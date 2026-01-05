import { Star, MapPin, ExternalLink, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";

import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import hotel3 from "@/assets/hotel-3.jpg";

const hotels = [
  {
    id: 1,
    name: "Hotel Sea Hawk",
    location: "Old Digha",
    rating: 4.5,
    price: 1500,
    image: hotel1,
    tags: ["Beach View", "AC Rooms", "Restaurant"],
    discount: "10%",
  },
  {
    id: 2,
    name: "Digha Beach Resort",
    location: "New Digha",
    rating: 4.3,
    price: 2200,
    image: hotel2,
    tags: ["Pool", "Spa", "Beach Access"],
    discount: "10%",
  },
  {
    id: 3,
    name: "Hotel Ocean View",
    location: "Old Digha",
    rating: 4.1,
    price: 1200,
    image: hotel3,
    tags: ["Sea Facing", "WiFi", "Parking"],
    discount: "10%",
  },
  {
    id: 4,
    name: "Sunrise Beach Hotel",
    location: "New Digha",
    rating: 4.0,
    price: 1000,
    image: hotel1,
    tags: ["Budget", "Clean Rooms", "Near Beach"],
    discount: "10%",
  },
  {
    id: 5,
    name: "Palm Bay Resort",
    location: "Old Digha",
    rating: 4.4,
    price: 1800,
    image: hotel2,
    tags: ["Garden View", "Restaurant", "Parking"],
    discount: "10%",
  },
];

const HotelsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary px-4 py-8">
        <h1 className="font-heading font-bold text-3xl text-secondary-foreground text-center">
          Partner Hotels
        </h1>
        <p className="text-secondary-foreground/80 text-center mt-2">
          Book with us & get exclusive hotel discounts
        </p>
      </div>

      {/* Discount Banner */}
      <div className="bg-accent/10 border-y border-accent/20 px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-accent">
          <Percent className="w-5 h-5" />
          <p className="font-medium text-sm">
            Get <span className="font-bold">10% off</span> when you book a bike with us!
          </p>
        </div>
      </div>

      {/* Hotels List */}
      <div className="px-4 py-6 max-w-lg mx-auto space-y-4">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-card rounded-2xl shadow-card overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-44">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                {hotel.rating}
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-md">
                {hotel.discount} OFF
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-heading font-semibold text-foreground text-lg">
                {hotel.name}
              </h3>
              <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                <MapPin className="w-3.5 h-3.5" />
                {hotel.location}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {hotel.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-secondary font-bold text-lg">₹{hotel.price}</span>
                  <span className="text-muted-foreground text-sm">/night</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default HotelsPage;
