
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">NewsUnwrap</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
          <div className="flex items-center space-x-2">
            <Button variant="outline" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t py-4 px-4 bg-white">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/dashboard" 
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" asChild onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
