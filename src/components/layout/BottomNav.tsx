import { Bike, CalendarCheck, Building2, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Bike, label: "Our Fleet", path: "/fleet" },
  { icon: CalendarCheck, label: "Book Now", path: "/book", primary: true },
  { icon: Building2, label: "Hotels", path: "/hotels" },
  { icon: MapPin, label: "Explore", path: "/explore" },
  { icon: Phone, label: "Contact", path: "/contact" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card shadow-nav border-t border-border pb-safe">
      <div className="flex items-center justify-around py-2 px-1 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path === "/book" && location.pathname === "/");
          const Icon = item.icon;

          if (item.primary) {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center -mt-6"
              >
                <div className="bg-gradient-cta shadow-cta rounded-full p-4 transform transition-transform hover:scale-105 active:scale-95">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-heading font-semibold mt-1 text-foreground">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors",
                isActive
                  ? "text-secondary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
