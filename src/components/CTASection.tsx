
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-udaan-blue to-udaan-teal text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Budget Adventure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of travelers who have discovered the joy of exploring more while spending less.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="outline" className="bg-white text-udaan-blue hover:bg-blue-50 border-white">
            Plan My Trip Now
          </Button>
          <Button size="lg" className="bg-udaan-dark hover:bg-udaan-dark/90">
            Browse Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
