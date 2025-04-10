
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
    <div className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8 glass py-8 px-6">
          <h1 className="text-3xl font-display">Just a few steps to customize your experience</h1>
          <div className="decorative-line max-w-xs mx-auto my-4"></div>
          <p className="text-gray-500 mt-2 flex items-center justify-center">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium mr-2">
              {step}
            </span>
            <span>of 2</span>
          </p>
        </div>
        
        <Card className="p-8 border-purple-100 shadow-card glass">
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
