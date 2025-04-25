
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BudgetTripForm from "@/components/BudgetTripForm";

const BudgetTrip = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Plan Your Budget Trip</h1>
            <p className="text-lg text-gray-600 mb-8">Tell us your budget and preferences, and we'll create the perfect itinerary for you.</p>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <BudgetTripForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetTrip;
