import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface VehicleCardProps {
  name: string;
  type: string;
  image: string;
  distance?: string;
  onBookNow: () => void;
  onContact: () => void;
}

const VehicleCard = ({
  name,
  type,
  image,
  distance = "180 km",
  onBookNow,
  onContact,
}: VehicleCardProps) => {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Vehicle Name Label */}
      <div className="flex justify-center pt-4 pb-2">
        <span className="px-4 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-full border border-border">
          {name}
        </span>
      </div>

      {/* Vehicle Image */}
      <div className="px-4 py-2">
        <div className="bg-muted rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-4"
          />
        </div>
      </div>

      {/* Action Buttons Grid */}
      <div className="p-4 pt-2">
        <div className="grid grid-cols-[1fr_1.2fr] gap-3">
          {/* Left Column - Contact & Distance */}
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              onClick={onContact}
              className="h-12 rounded-xl border-border bg-muted hover:bg-muted/80 text-foreground font-medium text-xs"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Contact Owner
            </Button>
            <div className="h-10 flex items-center justify-center bg-muted rounded-xl border border-border">
              <span className="text-xs text-muted-foreground font-medium">
                {distance}
              </span>
            </div>
          </div>

          {/* Right Column - Book Now */}
          <Button
            onClick={onBookNow}
            className="h-full min-h-[5.5rem] rounded-xl bg-gradient-cta text-primary-foreground font-bold text-base shadow-cta hover:opacity-90 transition-opacity"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
