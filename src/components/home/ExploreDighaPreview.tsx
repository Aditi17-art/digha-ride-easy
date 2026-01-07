import { Waves, Camera, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const highlights = [
  { icon: Waves, name: "New Digha Beach", distance: "1 km" },
  { icon: Camera, name: "Marine Aquarium", distance: "3 km" },
  { icon: Compass, name: "Mandarmani Beach", distance: "18 km" },
];

const ExploreDighaPreview = () => {
  return (
    <section className="py-10 px-4 bg-muted">
      <div className="max-w-lg mx-auto">
        <h2 className="font-heading font-bold text-2xl text-foreground text-center mb-2">
          Explore Digha
        </h2>
        <p className="text-muted-foreground text-center text-sm mb-6">
          Discover amazing places on two wheels
        </p>

        {/* Highlight Cards */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {highlights.map((place, index) => {
            const Icon = place.icon;
            return (
              <div
                key={index}
                className="flex-1 min-w-[100px] bg-card rounded-xl p-4 shadow-card text-center"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-xs">
                  {place.name}
                </h3>
                <span className="text-[10px] text-accent font-medium">
                  {place.distance}
                </span>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <Link to="/explore">
          <Button
            variant="outline"
            className="w-full h-12 rounded-xl border-accent text-accent hover:bg-accent/10 font-medium"
          >
            View All Attractions
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ExploreDighaPreview;
