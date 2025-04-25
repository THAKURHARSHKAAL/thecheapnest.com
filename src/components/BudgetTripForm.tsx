
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, MapPin, Plane } from "lucide-react";

const BudgetTripForm = () => {
  const [budget, setBudget] = useState("");
  const [destination, setDestination] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [travelers, setTravelers] = useState("1");
  const [suggestionMode, setSuggestionMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would navigate to results or API call
    toast.success("Trip planning initiated!", {
      description: `Planning a trip ${suggestionMode ? "with suggestions" : "to " + destination} under ${currency} ${budget}`,
    });
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Plan Your Budget Trip</h2>
        <p className="text-gray-600 mt-1">Tell us your budget and destination</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="budget" className="font-medium">Your Budget</Label>
          </div>
          <div className="flex gap-2">
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="w-28">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="INR">₹ INR</SelectItem>
                <SelectItem value="USD">$ USD</SelectItem>
                <SelectItem value="EUR">€ EUR</SelectItem>
                <SelectItem value="GBP">£ GBP</SelectItem>
              </SelectContent>
            </Select>
            <Input 
              id="budget" 
              placeholder="e.g., 5000" 
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              type="number"
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="destination" className="font-medium">Destination</Label>
            <div className="flex items-center space-x-1">
              <input 
                type="checkbox" 
                id="suggestion" 
                className="rounded text-udaan-blue focus:ring-udaan-blue" 
                checked={suggestionMode}
                onChange={() => setSuggestionMode(!suggestionMode)}
              />
              <label htmlFor="suggestion" className="text-sm text-gray-600">Suggest me destinations</label>
            </div>
          </div>
          <div className="relative">
            <Input 
              id="destination" 
              placeholder={suggestionMode ? "We'll suggest destinations" : "Where do you want to go?"} 
              disabled={suggestionMode}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required={!suggestionMode}
              className="pl-10"
            />
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="travelers" className="font-medium">Travelers</Label>
            <Select value={travelers} onValueChange={setTravelers}>
              <SelectTrigger>
                <SelectValue placeholder="Travelers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Traveler</SelectItem>
                <SelectItem value="2">2 Travelers</SelectItem>
                <SelectItem value="3">3 Travelers</SelectItem>
                <SelectItem value="4">4+ Travelers</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="days" className="font-medium">Duration</Label>
            <Select defaultValue="3-4">
              <SelectTrigger>
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-2">1-2 days</SelectItem>
                <SelectItem value="3-4">3-4 days</SelectItem>
                <SelectItem value="5-7">5-7 days</SelectItem>
                <SelectItem value="8+">8+ days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" className="w-full bg-udaan-blue hover:bg-udaan-blue/90">
          <Plane className="h-4 w-4 mr-2" /> Find My Trip
        </Button>
      </form>
    </div>
  );
};

export default BudgetTripForm;
