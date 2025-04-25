
import React from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const SoloTravelerConnect = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-udaan-blue/10 to-udaan-teal/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="absolute -top-5 -left-5 bg-udaan-blue rounded-full p-3 shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2">Solo Travelers to Manali</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-medium">May 15-20, 2025</span>
                      <p className="text-sm text-gray-600">5 days trip</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">3 spots left</span>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">RK</div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">SV</div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">AP</div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-medium text-udaan-blue">+3</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-udaan-blue">₹4,200</span>
                    <span className="text-sm text-gray-500 ml-1">per person</span>
                  </div>
                  <Button size="sm" className="bg-udaan-blue hover:bg-udaan-blue/90">Join Group</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Fellow Solo Travelers</h2>
            <p className="text-lg text-gray-600 mb-6">
              Travel solo but never alone. Join groups of like-minded travelers to share experiences and split costs.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-udaan-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Save up to 50% on accommodation costs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-udaan-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Meet new people and make travel friends</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-udaan-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Travel safely with a verified group</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-udaan-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Enjoy group activities and discounts</span>
              </li>
            </ul>
            <Button size="lg" className="bg-udaan-blue hover:bg-udaan-blue/90">Find Solo Groups</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoloTravelerConnect;
