
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Sample mock news data
const mockNews = [
  {
    id: 1,
    title: "Global Economic Summit Yields New Trade Agreements",
    summary: "World leaders reached consensus on key trade policies at the annual economic summit.",
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 2,
    title: "New AI Research Breakthrough in Medical Imaging",
    summary: "Scientists develop new algorithm that detects early signs of disease with 95% accuracy.",
    category: "technology",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 3,
    title: "Climate Change Agreement Signed by 150 Nations",
    summary: "Historic environmental pact aims to reduce global carbon emissions by 50% by 2030.",
    category: "environment",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 4,
    title: "Major Sports Tournament Opens with Record Attendance",
    summary: "The international competition kicked off with opening ceremonies viewed by billions globally.",
    category: "sports",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 5,
    title: "New Space Telescope Captures Stunning Galaxy Images",
    summary: "The $10 billion instrument has sent back its first high-resolution images of distant galaxies.",
    category: "science",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 6,
    title: "Healthcare Reform Bill Passes in Senate",
    summary: "Landmark legislation aims to expand coverage to millions of previously uninsured citizens.",
    category: "politics",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

export default function NewsFeed() {
  const [format, setFormat] = useState("article");
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="article" onValueChange={setFormat} className="border-b border-gray-200 pb-2">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold font-display">Your News Feed</h2>
          <TabsList className="bg-gray-100 rounded-none">
            <TabsTrigger value="article" className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white">Articles</TabsTrigger>
            <TabsTrigger value="instagram" className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white">Instagram</TabsTrigger>
            <TabsTrigger value="bullets" className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white">Bullets</TabsTrigger>
            <TabsTrigger value="comic" className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white">Comics</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="article" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNews.map((news) => (
            <div key={news.id} className="border-b pb-6">
              <img 
                src={news.imageUrl} 
                alt={news.title} 
                className="h-48 w-full object-cover mb-4"
              />
              <h3 className="font-display text-xl mb-2 leading-tight">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.summary}</p>
              <Button variant="link" className="text-black pl-0 hover:text-gray-700 hover:underline underline-offset-4">
                Read more
              </Button>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="instagram" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockNews.map((news) => (
            <div key={news.id} className="border shadow-sm">
              <div className="p-2 border-b flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                <div className="text-sm font-medium">NewsUnwrap</div>
              </div>
              <img 
                src={news.imageUrl} 
                alt={news.title} 
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2 font-display">{news.title}</h3>
                <p className="text-sm text-gray-600">{news.summary}</p>
              </div>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="bullets">
          {mockNews.map((news) => (
            <div key={news.id} className="mb-8 border-b pb-6">
              <h3 className="text-xl font-display mb-3">{news.title}</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Key point about the {news.title.toLowerCase()}</li>
                <li>{news.summary}</li>
                <li>Additional important information related to this news</li>
                <li>Expert opinions and reactions</li>
                <li>What happens next</li>
              </ul>
              <Button variant="link" className="text-black mt-2 pl-0 hover:text-gray-700 hover:underline underline-offset-4">
                Expand
              </Button>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="comic">
          {mockNews.slice(0, 2).map((news) => (
            <div key={news.id} className="mb-8 border shadow-sm">
              <div className="p-4 bg-gray-100 text-center font-bold font-display">
                {news.title}
              </div>
              <div className="grid grid-cols-2 p-2 gap-2">
                <div className="border p-2 bg-gray-50">
                  <div className="h-32 bg-gray-100 mb-2 flex items-center justify-center">
                    Comic Panel 1
                  </div>
                  <p className="text-sm">Context of the news story</p>
                </div>
                <div className="border p-2 bg-gray-50">
                  <div className="h-32 bg-gray-100 mb-2 flex items-center justify-center">
                    Comic Panel 2
                  </div>
                  <p className="text-sm">Main event described</p>
                </div>
                <div className="border p-2 bg-gray-50">
                  <div className="h-32 bg-gray-100 mb-2 flex items-center justify-center">
                    Comic Panel 3
                  </div>
                  <p className="text-sm">Key details and reactions</p>
                </div>
                <div className="border p-2 bg-gray-50">
                  <div className="h-32 bg-gray-100 mb-2 flex items-center justify-center">
                    Comic Panel 4
                  </div>
                  <p className="text-sm">Conclusion or impact</p>
                </div>
              </div>
              <div className="p-3 bg-gray-50 text-center text-sm italic">
                Based on: {news.summary}
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
