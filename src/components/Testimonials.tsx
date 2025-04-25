
import React from "react";

const testimonials = [
  {
    name: "Priya S.",
    image: "https://source.unsplash.com/photo-1649972904349-6e44c42644a7",
    location: "Delhi",
    text: "Udaan helped me plan my first solo trip to Goa within my tight budget. I even joined a group of other solo travelers and made amazing friends!",
  },
  {
    name: "Rahul M.",
    image: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
    location: "Bangalore",
    text: "The pre-made packages saved me so much time planning. My family loved the trip to Manali and everything was exactly as promised.",
  },
  {
    name: "Anjali K.",
    image: "https://source.unsplash.com/photo-1581091226825-a6a2a5aee158",
    location: "Mumbai",
    text: "I was skeptical about budget travel, but Udaan showed me that amazing experiences don't have to break the bank!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-gray-600">
            Join thousands of happy travelers who discovered that budget travel can still be amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
