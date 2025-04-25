
import React from "react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    name: "Goa",
    image: "https://source.unsplash.com/photo-1482938289607-e9573fc25ebb",
    budgetFrom: "₹5,000",
    description: "Beaches & nightlife",
  },
  {
    name: "Manali",
    image: "https://source.unsplash.com/photo-1501854140801-50d01698950b",
    budgetFrom: "₹4,500",
    description: "Mountains & adventure",
  },
  {
    name: "Jaipur",
    image: "https://source.unsplash.com/photo-1469041797191-50ace28483c3",
    budgetFrom: "₹3,800",
    description: "Culture & history",
  },
  {
    name: "Rishikesh",
    image: "https://source.unsplash.com/photo-1472396961693-142e6e269027",
    budgetFrom: "₹4,200",
    description: "Spiritual & rafting",
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Popular Destinations</h2>
            <p className="text-lg text-gray-600">Explore these budget-friendly destinations loved by travelers</p>
          </div>
          <Button className="bg-udaan-blue hover:bg-udaan-blue/90 mt-4 md:mt-0">
            View All Destinations
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div key={destination.name} className="destination-card group">
              <div className="image-container aspect-[4/5] rounded-xl overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-4 bg-white rounded-b-xl shadow-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <span className="bg-blue-100 text-udaan-blue text-sm font-medium px-2 py-1 rounded-full">
                    From {destination.budgetFrom}
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
