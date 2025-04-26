
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane } from "lucide-react";
import BudgetTripForm from "./BudgetTripForm";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="relative container mx-auto px-4 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in text-white">
            <div className="flex items-center space-x-3">
              <Plane className="text-blue-400 w-12 h-12 animate-float" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Travel <span className="text-blue-400">Smartly</span> with TheCheapnest
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              Unlock affordable adventures without compromising quality. 
              Your gateway to budget-friendly, memorable experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white animate-float">
                <Link to="/budget-trip">Plan My Trip</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white">
                <Link to="/packages">Browse Packages</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white/80 p-6 rounded-xl shadow-lg animate-fade-in">
            <BudgetTripForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
