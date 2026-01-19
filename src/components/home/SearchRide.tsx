import { useState } from "react";
import { CalendarIcon, Clock, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const timeSlots = [
  "06:00 AM",
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
];

const SearchRide = () => {
  const navigate = useNavigate();
  const [pickupDate, setPickupDate] = useState<Date>();
  const [pickupTime, setPickupTime] = useState<string>();
  const [dropoffDate, setDropoffDate] = useState<Date>();
  const [dropoffTime, setDropoffTime] = useState<string>();

  const handleSearch = () => {
    navigate("/book", {
      state: { pickupDate, pickupTime, dropoffDate, dropoffTime },
    });
  };

  return (
    <section className="px-4 py-8 bg-card -mt-8 rounded-t-3xl relative z-10 shadow-card">
      <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
        Search Your Next Ride
      </h2>

      <div className="space-y-5">
        {/* Pickup Section */}
        <div>
          <label className="font-heading font-semibold text-foreground mb-3 block">
            Pickup
          </label>
          <div className="flex gap-3">
            {/* Date Picker */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className={cn(
                    "flex-1 flex items-center gap-3 px-4 py-3.5 bg-muted rounded-xl border border-border text-left transition-colors hover:border-primary/50",
                    !pickupDate && "text-muted-foreground"
                  )}>
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">
                    {pickupDate ? format(pickupDate, "dd MMM yyyy") : "Date"}
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={pickupDate}
                  onSelect={setPickupDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            {/* Time Picker */}
            <Select onValueChange={setPickupTime}>
              <SelectTrigger className="flex-1 h-auto py-3.5 px-4 bg-muted border-border rounded-xl">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <SelectValue placeholder="Time" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Dropoff Section */}
        <div>
          <label className="font-heading font-semibold text-foreground mb-3 block">
            Dropoff
          </label>
          <div className="flex gap-3">
            {/* Date Picker */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className={cn(
                    "flex-1 flex items-center gap-3 px-4 py-3.5 bg-muted rounded-xl border border-border text-left transition-colors hover:border-primary/50",
                    !dropoffDate && "text-muted-foreground"
                  )}>
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">
                    {dropoffDate ? format(dropoffDate, "dd MMM yyyy") : "Date"}
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dropoffDate}
                  onSelect={setDropoffDate}
                  disabled={(date) => date < (pickupDate || new Date())}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            {/* Time Picker */}
            <Select onValueChange={setDropoffTime}>
              <SelectTrigger className="flex-1 h-auto py-3.5 px-4 bg-muted border-border rounded-xl">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <SelectValue placeholder="Time" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="w-full h-14 bg-gradient-cta hover:opacity-90 text-primary-foreground font-heading font-semibold text-base rounded-xl shadow-cta transition-all hover:shadow-lg">
          <Search className="w-5 h-5 mr-2" />
          Search
        </Button>
      </div>
    </section>
  );
};

export default SearchRide;
