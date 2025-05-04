
import React, { useState } from "react";
import { Check, X, MoreHorizontal, Edit, Trash } from "lucide-react";
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

// Mock data for users
const mockUsers = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    email: "alex@example.com", 
    role: "Customer",
    status: "Active",
    joined: "2023-05-12" 
  },
  { 
    id: 2, 
    name: "Sarah Williams", 
    email: "sarah@example.com", 
    role: "Customer",
    status: "Active",
    joined: "2023-06-24" 
  },
  { 
    id: 3, 
    name: "Michael Brown", 
    email: "michael@example.com", 
    role: "Admin",
    status: "Active",
    joined: "2022-11-30" 
  },
  { 
    id: 4, 
    name: "Emily Davis", 
    email: "emily@example.com", 
    role: "Customer",
    status: "Inactive",
    joined: "2023-03-15" 
  },
  { 
    id: 5, 
    name: "David Wilson", 
    email: "david@example.com", 
    role: "Customer",
    status: "Active",
    joined: "2023-08-01" 
  },
];

export const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(mockUsers);
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">User Management</h2>
        <div className="flex items-center gap-4">
          <Input 
            placeholder="Search users..." 
            className="w-64 bg-white/10 border-white/10 text-white placeholder:text-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="bg-blue-500 hover:bg-blue-600">
            Add User
          </Button>
        </div>
      </div>

      <div className="bg-white/10 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-white/10">
            <TableRow>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white">Role</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Joined</TableHead>
              <TableHead className="text-white text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} className="border-white/5 hover:bg-white/5">
                <TableCell className="font-medium text-white">{user.name}</TableCell>
                <TableCell className="text-gray-200">{user.email}</TableCell>
                <TableCell>
                  <Badge className={user.role === "Admin" ? "bg-blue-500" : "bg-gray-500"}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      user.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}></div>
                    <span className="text-gray-200">{user.status}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-200">{user.joined}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                      <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-gray-700" />
                      <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer text-red-400" onClick={() => handleDelete(user.id)}>
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
        <div>Showing {filteredUsers.length} of {users.length} users</div>
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
