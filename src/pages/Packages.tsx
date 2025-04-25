
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageShowcase from "@/components/PackageShowcase";

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Travel Packages</h1>
              <p className="text-lg text-gray-600 mb-8">Explore our curated travel packages for every type of traveler.</p>
            </div>
          </div>
        </div>
        
        <PackageShowcase />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">More packages coming soon!</h2>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Packages;
