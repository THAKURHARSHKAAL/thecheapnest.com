
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PopularDestinations />
        <PackageShowcase />
        <SoloTravelerConnect />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
