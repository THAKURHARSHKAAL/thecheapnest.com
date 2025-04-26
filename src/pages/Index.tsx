
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
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Mountain background"
  }
];

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Full-screen background */}
      <div className="fixed inset-0 w-full h-full">
        <img
          src={images[0].url}
          alt={images[0].alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative">
        <Navbar />
        <main className="relative">
          <div className="bg-white/10 backdrop-blur-md">
            <Hero />
            <div className="container mx-auto px-4">
              <div className="space-y-20 py-20">
                <div className="rounded-lg bg-white/20 backdrop-blur-lg shadow-lg border border-white/10 p-8">
                  <Features />
                </div>
                <div className="rounded-lg bg-white/20 backdrop-blur-lg shadow-lg border border-white/10 p-8">
                  <PopularDestinations />
                </div>
                <div className="rounded-lg bg-white/20 backdrop-blur-lg shadow-lg border border-white/10 p-8">
                  <PackageShowcase />
                </div>
                <div className="rounded-lg bg-white/20 backdrop-blur-lg shadow-lg border border-white/10 p-8">
                  <SoloTravelerConnect />
                </div>
                <div className="rounded-lg bg-white/20 backdrop-blur-lg shadow-lg border border-white/10 p-8">
                  <Testimonials />
                </div>
                <div className="rounded-lg bg-white/20 backdrop-blur-lg shadow-lg border border-white/10 p-8">
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
