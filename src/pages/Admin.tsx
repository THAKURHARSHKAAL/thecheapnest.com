
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

const Admin = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100 w-full">
        <AdminSidebar />
        <div className="flex-1 overflow-auto">
          <AdminHeader />
          <div className="px-4">
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
    </SidebarProvider>
  );
};

export default Admin;
