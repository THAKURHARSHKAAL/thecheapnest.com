
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BudgetTripForm from "./BudgetTripForm";

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

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
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
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Travel <span className="text-blue-400">Smartly</span> with Cheapnest
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              Discover affordable travel experiences without compromising on quality. 
              Personalized budget trips, curated packages, and a community to explore with.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white animate-float">
                <Link to="/budget-trip">Plan My Trip</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white backdrop-blur-sm">
                <Link to="/packages">Browse Packages</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg animate-fade-in">
            <BudgetTripForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
