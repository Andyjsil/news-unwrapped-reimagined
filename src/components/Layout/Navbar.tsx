
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-display font-bold">NewsUnwrap</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="text-gray-800 hover:text-black transition-colors font-display">Dashboard</Link>
          <Link to="/about" className="text-gray-800 hover:text-black transition-colors font-display">About</Link>
          <div className="flex items-center space-x-2">
            <Button variant="outline" asChild className="rounded-none border-black text-black hover:bg-black hover:text-white">
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild className="rounded-none bg-black text-white hover:bg-gray-800">
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
              className="text-gray-800 hover:text-black transition-colors py-2 font-display"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-black transition-colors py-2 font-display"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" asChild onClick={() => setIsMobileMenuOpen(false)} className="rounded-none border-black text-black hover:bg-black hover:text-white">
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild onClick={() => setIsMobileMenuOpen(false)} className="rounded-none bg-black text-white hover:bg-gray-800">
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
