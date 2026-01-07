import HeroSlider from "@/components/home/HeroSlider";
import SearchRide from "@/components/home/SearchRide";
import FleetCarousel from "@/components/home/FleetCarousel";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PartnerHotels from "@/components/home/PartnerHotels";
import HowItWorks from "@/components/home/HowItWorks";
import ContactSection from "@/components/home/ContactSection";
import ExploreDighaPreview from "@/components/home/ExploreDighaPreview";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <SearchRide />
      <FleetCarousel />
      <WhyChooseUs />
      <PartnerHotels />
      <HowItWorks />
      <ContactSection />
      <ExploreDighaPreview />
      <Footer />
    </main>
  );
};

export default Index;
