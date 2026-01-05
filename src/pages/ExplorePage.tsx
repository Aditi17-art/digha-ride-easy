import { MapPin, Compass, Waves, UtensilsCrossed, Camera, TreePalm } from "lucide-react";
import Footer from "@/components/layout/Footer";

const attractions = [
  {
    icon: Waves,
    name: "New Digha Beach",
    description: "The main beach with clean shores and stunning sunsets. Perfect for evening walks.",
    distance: "1 km",
  },
  {
    icon: Waves,
    name: "Old Digha Beach",
    description: "Less crowded beach with local food stalls and authentic vibes.",
    distance: "2 km",
  },
  {
    icon: Camera,
    name: "Marine Aquarium",
    description: "Home to various marine species. Great for families and kids.",
    distance: "3 km",
  },
  {
    icon: TreePalm,
    name: "Shankarpur Beach",
    description: "Quiet fishing village beach, perfect for a peaceful getaway.",
    distance: "15 km",
  },
  {
    icon: Compass,
    name: "Mandarmani Beach",
    description: "One of the longest driveable beaches in India. Amazing for bike rides!",
    distance: "18 km",
  },
  {
    icon: UtensilsCrossed,
    name: "Fresh Seafood Markets",
    description: "Try fresh fish, crabs, and prawns at local markets and restaurants.",
    distance: "Various",
  },
];

const ExplorePage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-accent px-4 py-8">
        <h1 className="font-heading font-bold text-3xl text-accent-foreground text-center">
          Explore Digha
        </h1>
        <p className="text-accent-foreground/80 text-center mt-2">
          Discover the best spots on two wheels
        </p>
      </div>

      {/* Intro */}
      <div className="px-4 py-6 bg-card">
        <p className="text-muted-foreground text-center max-w-md mx-auto">
          Digha is a popular beach resort town in West Bengal. Rent a bike from us and explore these amazing attractions at your own pace!
        </p>
      </div>

      {/* Attractions */}
      <div className="px-4 py-6 max-w-lg mx-auto">
        <h2 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-accent" />
          Must-Visit Places
        </h2>

        <div className="space-y-4">
          {attractions.map((place, index) => {
            const Icon = place.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-4 shadow-card flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-heading font-semibold text-foreground">
                      {place.name}
                    </h3>
                    <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded">
                      {place.distance}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    {place.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips Section */}
      <div className="px-4 py-6 bg-muted">
        <div className="max-w-lg mx-auto">
          <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
            🏍️ Riding Tips
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Best time to ride: Early morning or evening to avoid the heat
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Always wear your helmet - we provide it free!
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Carry your driving license while riding
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              Fuel stations are available on main roads
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              The coastal road to Mandarmani is scenic - don't miss it!
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ExplorePage;
