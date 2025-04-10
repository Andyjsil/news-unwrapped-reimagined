
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopicSelector from "@/components/Preferences/TopicSelector";
import FormatSelector from "@/components/Preferences/FormatSelector";
import { Card } from "@/components/ui/card";

export default function Preferences() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const handleTopicsComplete = () => {
    setStep(2);
  };
  
  const handleFormatComplete = () => {
    navigate("/dashboard");
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8 bg-white py-8 px-6 border shadow-sm">
          <h1 className="text-3xl font-display">Just a few steps to customize your experience</h1>
          <div className="nyt-divider max-w-xs mx-auto"></div>
          <p className="text-gray-500 mt-2 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-black font-medium mr-2">
              {step}
            </span>
            <span>of 2</span>
          </p>
        </div>
        
        <Card className="p-8 border shadow-sm bg-white">
          {step === 1 ? (
            <TopicSelector onSelectionComplete={handleTopicsComplete} />
          ) : (
            <FormatSelector onComplete={handleFormatComplete} />
          )}
        </Card>
      </div>
    </div>
  );
}
