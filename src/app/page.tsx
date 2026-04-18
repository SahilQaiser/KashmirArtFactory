import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Collections from "@/components/Collections";
import Craftsmanship from "@/components/Craftsmanship";
import FeaturedPieces from "@/components/FeaturedPieces";
import HeritageBanner from "@/components/HeritageBanner";
import Testimonials from "@/components/Testimonials";
import CustomOrderCTA from "@/components/CustomOrderCTA";
import Footer from "@/components/Footer";

export const runtime = "edge";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Collections />
        <Craftsmanship />
        <FeaturedPieces />
        <HeritageBanner />
        <Testimonials />
        <CustomOrderCTA />
      </main>
      <Footer />
    </>
  );
}
