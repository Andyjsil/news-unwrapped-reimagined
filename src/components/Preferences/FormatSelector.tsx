
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Book, Image, ListIcon, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const formats = [
  {
    id: "article",
    name: "Traditional Articles",
    icon: <Book className="h-10 w-10" />,
    description: "Classic news articles with a clean reading experience."
  },
  {
    id: "instagram",
    name: "Instagram Style",
    icon: <Image className="h-10 w-10" />,
    description: "Visual cards with headlines and key points for quick scrolling."
  },
  {
    id: "bullets",
    name: "Bullet Points",
    icon: <ListIcon className="h-10 w-10" />,
    description: "Concise bullet points summarizing key news details."
  },
  {
    id: "comic",
    name: "Comic Strips",
    icon: <MessageSquare className="h-10 w-10" />,
    description: "Stories converted into engaging visual comic strips."
  }
];

interface FormatSelectorProps {
  onComplete: () => void;
}

export default function FormatSelector({ onComplete }: FormatSelectorProps) {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSave = () => {
    if (!selectedFormat) return;
    
    setIsLoading(true);
    
    // Simulate saving preferences
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Preferences saved!",
        description: "Your news format preference has been set.",
      });
      onComplete();
    }, 1000);
  };
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">How do you prefer to consume news?</h2>
        <p className="text-gray-500">
          Choose your preferred format for news stories.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formats.map((format) => (
          <div 
            key={format.id}
            onClick={() => setSelectedFormat(format.id)}
            className={`
              format-card
              ${selectedFormat === format.id 
                ? "ring-2 ring-blue-600 bg-blue-50" 
                : "bg-white hover:bg-gray-50"
              }
            `}
          >
            <div className="flex items-start">
              <div className={`mr-4 p-3 rounded-full ${
                selectedFormat === format.id 
                  ? "bg-blue-100 text-blue-600" 
                  : "bg-gray-100 text-gray-600"
              }`}>
                {format.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{format.name}</h3>
                <p className="text-gray-500">{format.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center pt-4">
        <Button 
          onClick={handleSave} 
          disabled={!selectedFormat || isLoading}
          size="lg"
        >
          {isLoading ? "Saving..." : "Save & Continue"}
        </Button>
      </div>
    </div>
  );
}
