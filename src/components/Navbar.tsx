
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Budget Trip", href: "/budget-trip" },
  { name: "Packages", href: "/packages" },
  { name: "Solo Connect", href: "/solo-connect" },
  { name: "Community", href: "/community" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-udaan-blue to-udaan-teal bg-clip-text text-transparent">Udaan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-udaan-blue transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-udaan-blue text-udaan-blue hover:text-white hover:bg-udaan-blue">
              Sign In
            </Button>
            <Button className="bg-udaan-blue hover:bg-udaan-blue/90">Sign Up</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-udaan-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2 pb-3">
              <Button variant="outline" className="border-udaan-blue text-udaan-blue hover:text-white hover:bg-udaan-blue w-full">
                Sign In
              </Button>
              <Button className="bg-udaan-blue hover:bg-udaan-blue/90 w-full">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
