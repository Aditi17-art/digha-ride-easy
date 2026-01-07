import { Star, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import hotel1 from "@/assets/hotel-1.jpg";

const hotels = [
  {
    id: 1,
    name: "Hotel Sea Hawk",
    location: "Old Digha",
    rating: 4.5,
    image: hotel1,
    tags: ["Beach View", "AC Rooms", "Restaurant"],
  },
];

const PartnerHotels = () => {
  return (
    <section className="py-10 px-4 bg-card">
      <div className="text-center mb-6">
        <h2 className="font-heading font-bold text-2xl text-foreground">
          Our Partner Hotels
        </h2>
        <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">
          Get up to{" "}
          <span className="text-accent font-semibold">
            10% additional discount
          </span>{" "}
          on partner hotel bookings
        </p>
      </div>

      <div className="space-y-4 max-w-lg mx-auto">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-background rounded-2xl shadow-card overflow-hidden">
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
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/hotels">
          <Button className="bg-gradient-secondary text-secondary-foreground font-semibold px-8 rounded-xl">
            See All Hotels
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PartnerHotels;
