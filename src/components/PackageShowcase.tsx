
import React from "react";
import { Button } from "@/components/ui/button";
import { Users, User, Heart, Users2 } from "lucide-react";

const packages = [
  {
    title: "Solo Backpacker",
    icon: User,
    color: "bg-udaan-blue text-white",
    price: "₹4,999",
    features: ["Budget hostel stays", "Local transport pass", "Group activities", "City tours"],
  },
  {
    title: "Romantic Getaway",
    icon: Heart,
    color: "bg-udaan-purple text-white",
    price: "₹9,999",
    features: ["Boutique hotel", "Couple activities", "Romantic dinners", "Sunset experiences"],
    highlighted: true,
  },
  {
    title: "Family Adventure",
    icon: Users,
    color: "bg-udaan-teal text-white",
    price: "₹14,999",
    features: ["Family-friendly hotel", "Kid's activities", "Family meals", "Adventure outings"],
  },
  {
    title: "Friend Group",
    icon: Users2,
    color: "bg-udaan-orange text-white",
    price: "₹3,999 per person",
    features: ["Group accommodation", "Group discounts", "Party experiences", "Adventure activities"],
  },
];

const PackageShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Travel Packages For Everyone</h2>
          <p className="text-lg text-gray-600">
            Pre-made travel packages designed for every type of traveler, complete with itineraries and budget options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border ${pkg.highlighted ? 'border-udaan-blue shadow-lg ring-2 ring-udaan-blue/20' : 'border-gray-200 shadow'} transition-all hover:shadow-xl`}
            >
              <div className={`${pkg.color} p-4 flex items-center justify-between`}>
                <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                <pkg.icon className="h-6 w-6" />
              </div>
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-sm text-gray-500">Starting from</span>
                  <div className="text-3xl font-bold text-gray-900">{pkg.price}</div>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={pkg.highlighted ? "w-full bg-udaan-blue hover:bg-udaan-blue/90" : "w-full bg-gray-800 hover:bg-gray-700"}
                >
                  View Package
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageShowcase;
