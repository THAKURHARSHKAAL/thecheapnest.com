
import React, { useState } from "react";
import { Edit, Trash, MoreHorizontal, Eye } from "lucide-react";
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableHead, 
  TableBody, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

// Mock data for trips
const mockTrips = [
  { 
    id: 1, 
    name: "Paris Weekend Getaway", 
    price: "$399", 
    category: "City Break",
    featured: true,
    bookings: 24 
  },
  { 
    id: 2, 
    name: "Bali Beach Retreat", 
    price: "$899", 
    category: "Beach",
    featured: true,
    bookings: 42 
  },
  { 
    id: 3, 
    name: "Swiss Alps Adventure", 
    price: "$749", 
    category: "Mountain",
    featured: false,
    bookings: 18 
  },
  { 
    id: 4, 
    name: "Tokyo Cultural Experience", 
    price: "$1,199", 
    category: "Cultural",
    featured: false,
    bookings: 15 
  },
  { 
    id: 5, 
    name: "African Safari Tour", 
    price: "$2,499", 
    category: "Adventure",
    featured: true,
    bookings: 31 
  },
];

export const AdminTrips = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [trips, setTrips] = useState(mockTrips);
  
  const filteredTrips = trips.filter(trip => 
    trip.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  return (
    <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Trips & Packages</h2>
        <div className="flex items-center gap-4">
          <Input 
            placeholder="Search trips..." 
            className="w-64 bg-white/10 border-white/10 text-white placeholder:text-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="bg-blue-500 hover:bg-blue-600">
            Add New Package
          </Button>
        </div>
      </div>

      <div className="bg-white/10 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-white/10">
            <TableRow>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Price</TableHead>
              <TableHead className="text-white">Category</TableHead>
              <TableHead className="text-white">Featured</TableHead>
              <TableHead className="text-white">Bookings</TableHead>
              <TableHead className="text-white text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTrips.map((trip) => (
              <TableRow key={trip.id} className="border-white/5 hover:bg-white/5">
                <TableCell className="font-medium text-white">{trip.name}</TableCell>
                <TableCell className="text-gray-200">{trip.price}</TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">
                    {trip.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  {trip.featured ? 
                    <Badge className="bg-green-500">Featured</Badge> : 
                    <Badge variant="outline" className="border-white/20 text-white">Standard</Badge>
                  }
                </TableCell>
                <TableCell className="text-gray-200">{trip.bookings}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                      <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-gray-700" />
                      <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer text-red-400" onClick={() => handleDelete(trip.id)}>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex justify-between items-center mt-4 text-white">
        <div>Showing {filteredTrips.length} of {trips.length} packages</div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
