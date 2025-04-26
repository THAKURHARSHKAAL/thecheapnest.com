
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularDestinations from "@/components/PopularDestinations";
import PackageShowcase from "@/components/PackageShowcase";
import SoloTravelerConnect from "@/components/SoloTravelerConnect";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const images = [
  {
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    alt: "Mountains aerial view"
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Mountain with sun rays"
  },
  {
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "River between mountains"
  }
];

const Index = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Full-screen background with animation */}
      <div className="fixed inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={image.url}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative">
        <Navbar />
        <main className="relative">
          <div className="bg-white/10">
            <Hero />
            <div className="container mx-auto px-4">
              <div className="space-y-20 py-20">
                <div className="rounded-lg bg-white/20 border border-white/10 p-8">
                  <Features />
                </div>
                <div className="rounded-lg bg-white/20 border border-white/10 p-8">
                  <PopularDestinations />
                </div>
                <div className="rounded-lg bg-white/20 border border-white/10 p-8">
                  <PackageShowcase />
                </div>
                <div className="rounded-lg bg-white/20 border border-white/10 p-8">
                  <SoloTravelerConnect />
                </div>
                <div className="rounded-lg bg-white/20 border border-white/10 p-8">
                  <Testimonials />
                </div>
                <div className="rounded-lg bg-white/20 border border-white/10 p-8">
                  <CTASection />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
