import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";

const slides = [
  {
    image: hero1,
    title: "Explore Digha on Two Wheels",
    subtitle: "Premium scooties & bikes for your beach adventure",
  },
  {
    image: hero2,
    title: "Ride the Coastal Roads",
    subtitle: "Affordable rentals for unforgettable journeys",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
        <div className="animate-fade-in-up">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-card mb-3 drop-shadow-lg">
            Digha Bike Rentals
          </h1>
          <p className="text-card/90 text-lg md:text-xl font-medium mb-2">
            {slides[currentSlide].title}
          </p>
          <p className="text-card/75 text-sm md:text-base">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-card/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/30 transition-colors">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/30 transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSlider;
