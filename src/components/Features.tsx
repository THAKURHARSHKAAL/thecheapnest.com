
import React from "react";
import { MapPin, Calendar, Users, Package } from "lucide-react";

const features = [
  {
    title: "Budget Trip Planning",
    description: "Tell us your budget and destination, and we'll create a personalized travel plan that won't break the bank.",
    icon: MapPin,
    color: "bg-udaan-blue/10 text-udaan-blue",
  },
  {
    title: "Pre-made Packages",
    description: "Explore our curated packages for solo travelers, couples, families, and friend groups with complete itineraries.",
    icon: Package,
    color: "bg-udaan-teal/10 text-udaan-teal",
  },
  {
    title: "Solo Traveler Connect",
    description: "Connect with other solo travelers to your destination, share costs, and make new friends along the way.",
    icon: Users,
    color: "bg-udaan-purple/10 text-udaan-purple",
  },
  {
    title: "Travel Community",
    description: "Join our travel community to share experiences, ask questions, and get insider tips from fellow travelers.",
    icon: Calendar,
    color: "bg-udaan-orange/10 text-udaan-orange",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Udaan Works</h2>
          <p className="text-lg text-gray-600">
            We make budget travel planning simple and social, helping you explore more while spending less.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
