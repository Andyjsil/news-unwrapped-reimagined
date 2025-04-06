
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const topics = [
  { id: "politics", name: "Politics", icon: "🏛️" },
  { id: "technology", name: "Technology", icon: "💻" },
  { id: "business", name: "Business & Finance", icon: "📊" },
  { id: "science", name: "Science", icon: "🔬" },
  { id: "health", name: "Health & Wellness", icon: "🏥" },
  { id: "sports", name: "Sports", icon: "⚽" },
  { id: "entertainment", name: "Entertainment", icon: "🎬" },
  { id: "travel", name: "Travel", icon: "✈️" },
  { id: "food", name: "Food", icon: "🍴" },
  { id: "environment", name: "Environment", icon: "🌿" },
  { id: "education", name: "Education", icon: "📚" },
  { id: "world", name: "World News", icon: "🌎" },
];

interface TopicSelectorProps {
  onSelectionComplete: (selectedTopics: string[]) => void;
}

export default function TopicSelector({ onSelectionComplete }: TopicSelectorProps) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (topicId: string) => {
    setSelectedTopics(prev => 
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleContinue = () => {
    if (selectedTopics.length > 0) {
      onSelectionComplete(selectedTopics);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">What topics interest you?</h2>
        <p className="text-gray-500">
          Select at least one topic to personalize your news feed.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topics.map((topic) => {
          const isSelected = selectedTopics.includes(topic.id);
          return (
            <Card 
              key={topic.id}
              className={`cursor-pointer transition-all ${
                isSelected 
                  ? "ring-2 ring-blue-600 bg-blue-50" 
                  : "hover:bg-gray-50"
              }`}
              onClick={() => toggleTopic(topic.id)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{topic.icon}</span>
                  <span>{topic.name}</span>
                </div>
                {isSelected && (
                  <Check size={18} className="text-blue-600" />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-center pt-6">
        <Button 
          onClick={handleContinue} 
          disabled={selectedTopics.length === 0}
          size="lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
