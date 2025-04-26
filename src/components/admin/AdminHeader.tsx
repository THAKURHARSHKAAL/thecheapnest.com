
import React from "react";
import { useLocation } from "react-router-dom";

const images = [
  {
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    alt: "Mountains aerial view"
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Mountain with sun rays"
  }
];

export const AdminHeader = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop() || "dashboard";
  const title = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div className="relative h-48 mb-6 overflow-hidden rounded-lg mx-4 mt-4">
      <div className="absolute inset-0">
        <img
          src={images[0].url}
          alt={images[0].alt}
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white animate-fade-in">
          {title}
        </h1>
      </div>
    </div>
  );
};
