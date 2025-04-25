
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const SoloConnect = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Connect with Solo Travelers</h1>
              <p className="text-lg text-gray-600 mb-8">Find companions for your journey, share costs, and make new friends.</p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold">Solo Trip to {["Goa", "Manali", "Rishikesh", "Jaipur", "Varanasi", "Darjeeling"][item % 6]}</h3>
                  <div className="bg-udaan-blue rounded-full p-2">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Date:</span>
                    <span className="font-medium">May {10 + item * 2}-{15 + item * 2}, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Budget:</span>
                    <span className="font-medium">₹{4000 + item * 500} per person</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Group Size:</span>
                    <span className="font-medium">{item} / 8 joined</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button className="w-full bg-udaan-blue hover:bg-udaan-blue/90">Join Group</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-udaan-blue text-udaan-blue hover:bg-udaan-blue hover:text-white">
              Load More Groups
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SoloConnect;
