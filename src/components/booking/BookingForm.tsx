import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleName?: string;
  initialPickupDate?: Date;
  initialPickupTime?: string;
  initialDropoffDate?: Date;
  initialDropoffTime?: string;
}

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

type Step = "form" | "otp" | "success";

const BookingForm = ({
  isOpen,
  onClose,
  vehicleName,
  initialPickupDate,
  initialPickupTime,
  initialDropoffDate,
  initialDropoffTime,
}: BookingFormProps) => {
  const [step, setStep] = useState<Step>("form");
  const [isLoading, setIsLoading] = useState(false);

  // Form state - use initial values from props, or default to today/tomorrow
  const getDefaultDropoffDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  };

  const [name, setName] = useState("");
  const [pickupDate, setPickupDate] = useState<Date>(
    initialPickupDate || new Date(),
  );
  const [dropoffDate, setDropoffDate] = useState<Date>(
    initialDropoffDate || getDefaultDropoffDate(),
  );
  const [pickupTime, setPickupTime] = useState(initialPickupTime || "10:00 AM");
  const [dropoffTime, setDropoffTime] = useState(
    initialDropoffTime || "10:00 AM",
  );
  const [whatsapp, setWhatsapp] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [hasLicense, setHasLicense] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate OTP sending
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep("otp");
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);

    // Simulate OTP verification
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep("success");

    // Open WhatsApp with confirmation message
    const message = encodeURIComponent(
      `Hi! I just submitted a booking request for ${vehicleType || "a vehicle"} from Digha Bike Rentals. Looking forward to your confirmation call!`,
    );
    window.open(`https://wa.me/918167751151?text=${message}`, "_blank");
  };

  const handleClose = () => {
    setStep("form");
    setName("");
    setPickupDate(undefined);
    setPickupTime("");
    setDropoffDate(undefined);
    setDropoffTime("");
    setWhatsapp("");
    setVehicleType("");
    setHasLicense("");
    setOtp("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-md mx-auto max-h-[85vh] overflow-y-auto rounded-2xl left-1/2 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <DialogHeader>
          <DialogTitle className="font-heading font-bold text-xl text-center">
            {step === "form" && "Book Your Ride"}
            {step === "otp" && "Verify WhatsApp"}
            {step === "success" && "Booking Submitted!"}
          </DialogTitle>
        </DialogHeader>

        {step === "form" && (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Info Text */}
            <div className="bg-muted p-3 rounded-lg text-sm text-muted-foreground">
              <p className="mb-1">📋 Please fill this form.</p>
              <p className="mb-1">⏰ Minimum booking period is 24 hours.</p>
              <p>📞 Our representative will contact you to confirm.</p>
            </div>

            {vehicleName && (
              <div className="bg-primary/10 p-3 rounded-lg">
                <p className="text-sm font-medium">
                  Selected: <span className="text-accent">{vehicleName}</span>
                </p>
              </div>
            )}

            {/* Name */}
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
                className="mt-1"
              />
            </div>

            {/* Pickup Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Pickup Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "w-full flex items-center gap-2 px-3 py-2 mt-1 bg-background rounded-lg border border-input text-left text-sm",
                        !pickupDate && "text-muted-foreground",
                      )}>
                      <CalendarIcon className="w-4 h-4" />
                      {pickupDate ? format(pickupDate, "dd/MM/yy") : "Select"}
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
              </div>
              <div>
                <Label>Pickup Time *</Label>
                <Select value={pickupTime} onValueChange={setPickupTime}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select" />
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

            {/* Dropoff Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Dropoff Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "w-full flex items-center gap-2 px-3 py-2 mt-1 bg-background rounded-lg border border-input text-left text-sm",
                        !dropoffDate && "text-muted-foreground",
                      )}>
                      <CalendarIcon className="w-4 h-4" />
                      {dropoffDate ? format(dropoffDate, "dd/MM/yy") : "Select"}
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
              </div>
              <div>
                <Label>Dropoff Time *</Label>
                <Select value={dropoffTime} onValueChange={setDropoffTime}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select" />
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

            {/* WhatsApp */}
            <div>
              <Label htmlFor="whatsapp">WhatsApp Number *</Label>
              <Input
                id="whatsapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                required
                className="mt-1"
              />
            </div>

            {/* Vehicle Type */}
            <div>
              <Label>Select Type *</Label>
              <Select onValueChange={setVehicleType} required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Scooty or Bike?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scooty">Scooty</SelectItem>
                  <SelectItem value="bike">Bike</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* License */}
            <div>
              <Label>Do you have a Driving License? *</Label>
              <Select onValueChange={setHasLicense} required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-cta text-primary-foreground font-semibold rounded-xl shadow-cta">
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Submit "
              )}
            </Button>
          </form>
        )}

        {step === "otp" && (
          <div className="space-y-6 mt-4 text-center">
            <p className="text-muted-foreground">
              We've sent a verification code to your WhatsApp number{" "}
              <span className="font-medium text-foreground">{whatsapp}</span>
            </p>

            <div>
              <Label htmlFor="otp">Enter OTP</Label>
              <Input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6-digit code"
                className="mt-2 text-center text-lg tracking-widest"
                maxLength={6}
              />
            </div>

            <Button
              onClick={handleVerifyOtp}
              disabled={isLoading || otp.length < 4}
              className="w-full h-12 bg-gradient-cta text-primary-foreground font-semibold rounded-xl shadow-cta">
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Verify & Confirm Booking"
              )}
            </Button>

            <button
              onClick={() => setStep("form")}
              className="text-sm text-secondary hover:underline">
              ← Back to form
            </button>
          </div>
        )}

        {step === "success" && (
          <div className="text-center py-6 space-y-4">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <h3 className="font-heading font-semibold text-lg">
              Booking Submitted!
            </h3>
            <p className="text-muted-foreground text-sm">
              Thank you,{" "}
              <span className="font-medium text-foreground">{name}</span>!<br />
              Our representative will contact you shortly to confirm your
              booking.
            </p>
            <Button
              onClick={handleClose}
              className="bg-gradient-secondary text-secondary-foreground font-semibold px-8 rounded-xl">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
