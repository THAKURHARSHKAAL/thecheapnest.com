
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Budget Trip", href: "/budget-trip" },
  { name: "Packages", href: "/packages" },
  { name: "Solo Connect", href: "/solo-connect" },
  { name: "Community", href: "/community" },
  { name: "Admin", href: "/admin", icon: Shield },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with animation */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex items-center">
                <span className="text-3xl animate-bounce">🏡</span>
                <span className="text-2xl font-heading font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse group-hover:scale-105 transition-transform duration-200">
                  Cheapnest
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation with hover animations */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium hover:scale-105 transform flex items-center gap-1"
              >
                {link.icon && <link.icon size={16} />}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons with hover animations */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-300 hover:scale-105"
            >
              Sign In
            </Button>
            <Button 
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-105"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Navigation Toggle with animation */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 transition-transform duration-200 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-fade-in" />
              ) : (
                <Menu className="h-6 w-6 animate-fade-in" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with slide animation */}
      {isMenuOpen && (
        <div className="md:hidden animate-slide-in-right">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center gap-1 px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 hover:scale-105 transform transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon && <link.icon size={16} />}
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2 pb-3">
              <Button 
                variant="outline" 
                className="border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-300"
              >
                Sign In
              </Button>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 transition-all duration-300"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
