
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, Package, FileText, UserPlus, MessageSquare, BarChart, DollarSign } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Users", icon: Users, path: "/admin/users" },
  { title: "Trips & Packages", icon: Package, path: "/admin/trips" },
  { title: "Trip Requests", icon: FileText, path: "/admin/requests" },
  { title: "Solo Groups", icon: UserPlus, path: "/admin/groups" },
  { title: "Community", icon: MessageSquare, path: "/admin/community" },
  { title: "Analytics", icon: BarChart, path: "/admin/analytics" },
  { title: "Revenue", icon: DollarSign, path: "/admin/revenue" },
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-bold">Admin Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild isActive={location.pathname === item.path}>
                <Link to={item.path} className="w-full">
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
