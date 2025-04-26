
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminUsers } from "@/components/admin/AdminUsers";
import { AdminTrips } from "@/components/admin/AdminTrips";
import { AdminRequests } from "@/components/admin/AdminRequests";
import { AdminGroups } from "@/components/admin/AdminGroups";
import { AdminCommunity } from "@/components/admin/AdminCommunity";
import { AdminAnalytics } from "@/components/admin/AdminAnalytics";
import { AdminRevenue } from "@/components/admin/AdminRevenue";

const images = [
  {
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    alt: "Mountain background"
  }
];

const Admin = () => {
  return (
    <SidebarProvider>
      <div className="relative min-h-screen overflow-hidden">
        {/* Full-screen background */}
        <div className="fixed inset-0 w-full h-full">
          <img
            src={images[0].url}
            alt={images[0].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
        
        {/* Content */}
        <div className="relative flex h-screen w-full">
          <AdminSidebar />
          <div className="flex-1 overflow-auto bg-white/10 backdrop-blur-md">
            <AdminHeader />
            <div className="p-4">
              <div className="rounded-lg bg-white/20 backdrop-blur-lg shadow-lg border border-white/10">
                <Routes>
                  <Route index element={<Navigate to="users" replace />} />
                  <Route path="users" element={<AdminUsers />} />
                  <Route path="trips" element={<AdminTrips />} />
                  <Route path="requests" element={<AdminRequests />} />
                  <Route path="groups" element={<AdminGroups />} />
                  <Route path="community" element={<AdminCommunity />} />
                  <Route path="analytics" element={<AdminAnalytics />} />
                  <Route path="revenue" element={<AdminRevenue />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Admin;
