
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            <header className="mb-8 border-b pb-4">
              <h1 className="text-3xl font-bold font-display mb-2">{greeting}, Alex</h1>
              <p className="text-gray-500 italic">
                Here's your personalized news feed for {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
            </header>
            
            <NewsFeed />
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-72 space-y-6">
            {/* User's topics */}
            <div className="bg-white rounded-none border p-4">
              <h3 className="font-medium mb-3 font-display">Your Topics</h3>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-gray-100 text-black rounded-none border text-sm">Business</div>
                <div className="px-3 py-1 bg-gray-100 text-black rounded-none border text-sm">Technology</div>
                <div className="px-3 py-1 bg-gray-100 text-black rounded-none border text-sm">Science</div>
                <div className="px-3 py-1 bg-gray-100 text-black rounded-none border text-sm">Politics</div>
              </div>
              <div className="mt-3">
                <Button variant="outline" size="sm" asChild className="w-full rounded-none border-black text-black hover:bg-black hover:text-white">
                  <Link to="/profile">Edit Topics</Link>
                </Button>
              </div>
            </div>
            
            {/* Reading history */}
            <div className="bg-white rounded-none border p-4">
              <h3 className="font-medium mb-3 font-display">Reading History</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start border-b pb-2">
                  <Calendar size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-gray-800">New AI Research Breakthrough in Medical...</span>
                </li>
                <li className="flex items-start border-b pb-2">
                  <Calendar size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-gray-800">Climate Change Agreement Signed by 150...</span>
                </li>
                <li className="flex items-start">
                  <Calendar size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-gray-800">Healthcare Reform Bill Passes in Senate</span>
                </li>
              </ul>
              <div className="mt-3">
                <Button variant="link" size="sm" className="w-full text-black hover:underline underline-offset-4">
                  View All History
                </Button>
              </div>
            </div>
            
            {/* Saved articles */}
            <div className="bg-white rounded-none border p-4">
              <h3 className="font-medium mb-3 font-display">Saved Articles</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start border-b pb-2">
                  <Bookmark size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-gray-800">Major Sports Tournament Opens with Record...</span>
                </li>
                <li className="flex items-start">
                  <Bookmark size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-gray-800">New Space Telescope Captures Stunning...</span>
                </li>
              </ul>
              <div className="mt-3">
                <Button variant="link" size="sm" className="w-full text-black hover:underline underline-offset-4">
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
