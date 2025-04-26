import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BudgetTripForm from "./BudgetTripForm";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              Travel <span className="text-blue-500">Smartly</span> with Cheapnest
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Discover affordable travel experiences without compromising on quality. 
              Personalized budget trips, curated packages, and a community to explore with.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link to="/budget-trip">Plan My Trip</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                <Link to="/packages">Browse Packages</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <BudgetTripForm />
          </div>
        </div>
      </div>
      
      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
