
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Traveler Community</h1>
              <p className="text-lg text-gray-600 mb-8">Join the conversation with fellow travelers, share experiences, and get insider tips.</p>
              
              <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:ring-udaan-blue focus:border-udaan-blue"
                  placeholder="Search topics, destinations, or posts..."
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {["All Topics", "India", "Budget Tips", "Solo Travel", "Safety", "Food", "Accommodation", "Transportation"].map((tag) => (
              <Button 
                key={tag} 
                variant={tag === "All Topics" ? "default" : "outline"} 
                className={tag === "All Topics" ? "bg-udaan-blue hover:bg-udaan-blue/90" : ""}
                size="sm"
              >
                {tag}
              </Button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((post) => (
              <div key={post} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-medium">User{post}</h4>
                    <p className="text-xs text-gray-500">Posted 2 days ago</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {["Budget hacks for Goa under ₹5000", "Solo female traveler tips for North India", "Hidden gems in Manali no one talks about", "How I traveled to 5 places in ₹10,000"][post-1]}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <button className="text-gray-500 hover:text-udaan-blue">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                        </svg>
                      </button>
                      <span className="text-sm">{20 + post * 5}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button className="text-gray-500 hover:text-udaan-blue">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                        </svg>
                      </button>
                      <span className="text-sm">{10 + post * 2}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-udaan-blue hover:bg-blue-50">Read More</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-udaan-blue text-udaan-blue hover:bg-udaan-blue hover:text-white">
              Load More Posts
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
