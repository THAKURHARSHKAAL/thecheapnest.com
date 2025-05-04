
import React from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, DollarSign } from "lucide-react";

// Revenue data by channel
const channelData = [
  { name: "Direct", value: 45000 },
  { name: "Partners", value: 28000 },
  { name: "OTAs", value: 62000 },
  { name: "Affiliates", value: 19500 },
  { name: "Social", value: 30000 }
];

// Monthly revenue data with forecasting
const monthlyData = [
  { month: "Jan", actual: 18420, forecast: 17500 },
  { month: "Feb", actual: 16800, forecast: 16000 },
  { month: "Mar", actual: 19200, forecast: 18500 },
  { month: "Apr", actual: 21400, forecast: 20000 },
  { month: "May", actual: 24600, forecast: 23000 },
  { month: "Jun", actual: 28500, forecast: 27000 },
  { month: "Jul", forecast: 29800 },
  { month: "Aug", forecast: 31500 },
  { month: "Sep", forecast: 29000 },
  { month: "Oct", forecast: 27500 },
  { month: "Nov", forecast: 26000 },
  { month: "Dec", forecast: 30000 }
];

// Top performing packages
const topPackages = [
  { name: "Bali Beach Retreat", revenue: 28500, growth: 12.8 },
  { name: "Paris Weekend Getaway", revenue: 22400, growth: 8.3 },
  { name: "Tokyo Cultural Experience", revenue: 18900, growth: 15.6 },
  { name: "New York City Break", revenue: 16700, growth: -2.4 },
  { name: "African Safari Tour", revenue: 32100, growth: 24.5 }
];

export const AdminRevenue = () => {
  return (
    <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-white">Revenue Analytics</h1>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4 mb-6">
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-md opacity-80">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-blue-400" />
              <div className="text-3xl font-bold">184,500</div>
            </div>
            <p className="text-sm text-green-400 mt-1 flex items-center">
              <ArrowUp className="h-4 w-4 mr-1" /> 
              8.2% from previous period
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-md opacity-80">Average Deal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-blue-400" />
              <div className="text-3xl font-bold">684</div>
            </div>
            <p className="text-sm text-green-400 mt-1 flex items-center">
              <ArrowUp className="h-4 w-4 mr-1" /> 
              3.4% from previous period
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-md opacity-80">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4.8%</div>
            <p className="text-sm text-red-400 mt-1 flex items-center">
              <ArrowDown className="h-4 w-4 mr-1" /> 
              0.5% from previous period
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-md opacity-80">Projected Q3</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-blue-400" />
              <div className="text-3xl font-bold">215,000</div>
            </div>
            <p className="text-sm text-green-400 mt-1 flex items-center">
              <ArrowUp className="h-4 w-4 mr-1" /> 
              16.5% year-over-year
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mb-6">
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader>
            <CardTitle>Monthly Revenue & Forecast</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}
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
                <Line type="monotone" dataKey="actual" stroke="#4DA1FF" strokeWidth={2} dot={{ stroke: '#4DA1FF', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="forecast" stroke="#8884d8" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-white/15 border-white/10 text-white">
          <CardHeader>
            <CardTitle>Revenue by Channel</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelData}
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
                  formatter={(value) => `$${value}`}
                />
                <Bar dataKey="value">
                  {channelData.map((entry, index) => {
                    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
                    return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-white/15 border-white/10 text-white">
        <CardHeader>
          <CardTitle>Top Performing Packages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {topPackages.map((pkg, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium">{pkg.name}</p>
                    <p className="text-sm text-gray-300">${pkg.revenue.toLocaleString()}</p>
                  </div>
                </div>
                <Badge className={pkg.growth >= 0 ? "bg-green-500" : "bg-red-500"}>
                  <span className="flex items-center">
                    {pkg.growth >= 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    {Math.abs(pkg.growth)}%
                  </span>
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
