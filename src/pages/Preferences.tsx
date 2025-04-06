
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Just a few steps to customize your experience</h1>
          <p className="text-gray-500 mt-2">
            Step {step} of 2
          </p>
        </div>
        
        <Card className="p-8">
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
