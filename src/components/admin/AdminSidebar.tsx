
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
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🏔️</span>
          <h2 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Admin Panel
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton 
                asChild 
                isActive={location.pathname === item.path}
                className="transition-all duration-200 hover:translate-x-1"
              >
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
