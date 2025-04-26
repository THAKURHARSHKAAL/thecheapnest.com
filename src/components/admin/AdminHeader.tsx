
import React from "react";
import { useLocation } from "react-router-dom";

export const AdminHeader = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop() || "dashboard";
  const title = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div className="relative h-48 mb-6 overflow-hidden mx-4 mt-4">
      <div className="h-full flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <h1 className="text-4xl font-bold text-white animate-fade-in">
          {title}
        </h1>
      </div>
    </div>
  );
};
