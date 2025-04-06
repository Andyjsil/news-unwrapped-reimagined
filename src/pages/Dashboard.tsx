
import { useState } from "react";
import Navbar from "@/components/Layout/Navbar";
import NewsFeed from "@/components/News/NewsFeed";
import { Button } from "@/components/ui/button";
import { Calendar, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [greeting] = useState(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{greeting}, Alex</h1>
              <p className="text-gray-500">
                Here's your personalized news feed for {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
            </header>
            
            <NewsFeed />
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-72 space-y-6">
            {/* User's topics */}
            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-medium mb-3">Your Topics</h3>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Business</div>
                <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Technology</div>
                <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Science</div>
                <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Politics</div>
              </div>
              <div className="mt-3">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/profile">Edit Topics</Link>
                </Button>
              </div>
            </div>
            
            {/* Reading history */}
            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-medium mb-3">Reading History</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Calendar size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-gray-800">New AI Research Breakthrough in Medical...</span>
                </li>
                <li className="flex items-start">
                  <Calendar size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-gray-800">Climate Change Agreement Signed by 150...</span>
                </li>
                <li className="flex items-start">
                  <Calendar size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-gray-800">Healthcare Reform Bill Passes in Senate</span>
                </li>
              </ul>
              <div className="mt-3">
                <Button variant="ghost" size="sm" className="w-full">
                  View All History
                </Button>
              </div>
            </div>
            
            {/* Saved articles */}
            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-medium mb-3">Saved Articles</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <Bookmark size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-gray-800">Major Sports Tournament Opens with Record...</span>
                </li>
                <li className="flex items-start">
                  <Bookmark size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-gray-800">New Space Telescope Captures Stunning...</span>
                </li>
              </ul>
              <div className="mt-3">
                <Button variant="ghost" size="sm" className="w-full">
                  View All Saved
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
