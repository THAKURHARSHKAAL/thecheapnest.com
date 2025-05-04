
import React from "react";
import { useLocation } from "react-router-dom";
import { Bell, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const AdminHeader = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop() || "dashboard";
  const title = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div className="relative h-48 mb-6 overflow-hidden mx-4 mt-4">
      <div className="h-full flex flex-col justify-between bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white animate-fade-in">
            {title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search..." 
                className="pl-10 bg-white/20 border-white/10 text-white placeholder:text-gray-300 w-64"
              />
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative bg-white/10 text-white hover:bg-white/20"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-white/10 text-white hover:bg-white/20"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex gap-2">
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              Add New
            </Button>
            <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Export Data
            </Button>
          </div>
          <div className="ml-auto px-4 py-2 bg-white/20 rounded-lg text-white text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};
