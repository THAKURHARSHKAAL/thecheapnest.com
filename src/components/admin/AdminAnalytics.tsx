
import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Revenue data for the line chart
const revenueData = [
  { month: "Jan", revenue: 8400 },
  { month: "Feb", revenue: 6500 },
  { month: "Mar", revenue: 9800 },
  { month: "Apr", revenue: 7600 },
  { month: "May", revenue: 12000 },
  { month: "Jun", revenue: 15400 },
  { month: "Jul", revenue: 19800 },
  { month: "Aug", revenue: 22000 },
  { month: "Sep", revenue: 18400 },
  { month: "Oct", revenue: 15600 },
  { month: "Nov", revenue: 14400 },
  { month: "Dec", revenue: 16800 }
];

// Package data for the bar chart
const packageData = [
  { name: "City Break", booked: 140 },
  { name: "Beach Resort", booked: 215 },
  { name: "Mountain Trek", booked: 95 },
  { name: "Cultural Tour", booked: 78 },
  { name: "Adventure Trip", booked: 162 }
];

// Data for the pie chart
const destDistribution = [
  { name: "Europe", value: 45 },
  { name: "Asia", value: 25 },
  { name: "Americas", value: 20 },
  { name: "Africa", value: 10 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const AdminAnalytics = () => {
  return (
    <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-white">Analytics Dashboard</h1>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-md opacity-80">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2,845</div>
            <p className="text-sm text-green-400 mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-md opacity-80">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$184,500</div>
            <p className="text-sm text-green-400 mt-1">+8.2% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-md opacity-80">Active Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">324</div>
            <p className="text-sm text-red-400 mt-1">-3.1% from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mb-6">
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader>
            <CardTitle>Revenue Over Time</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                <YAxis stroke="rgba(255,255,255,0.7)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(0,0,0,0.8)", 
                    border: "none", 
                    color: "white" 
                  }} 
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#4DA1FF" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader>
            <CardTitle>Package Performance</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={packageData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.7)" />
                <YAxis stroke="rgba(255,255,255,0.7)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(0,0,0,0.8)", 
                    border: "none", 
                    color: "white" 
                  }} 
                />
                <Legend />
                <Bar dataKey="booked" fill="#4DA1FF" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader>
            <CardTitle>Destination Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={destDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {destDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "rgba(0,0,0,0.8)", 
                    border: "none", 
                    color: "white" 
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center border-b border-white/5 pb-3 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold">{(i+1)}</span>
                  </div>
                  <div>
                    <p className="text-white">
                      {["New booking for Paris Weekend", "User registration: Sam Wilson", "Package updated: Bali Retreat", "Revenue milestone: $150k", "New review: 5 stars"][i]}
                    </p>
                    <p className="text-sm text-gray-400">
                      {["2 hours ago", "5 hours ago", "Yesterday", "2 days ago", "3 days ago"][i]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
