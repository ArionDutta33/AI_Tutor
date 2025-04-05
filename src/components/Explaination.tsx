import React from "react";
import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface ExplanationProps {
  explanation: string;
  topic: string;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation, topic }) => {
  return (
    <div className="mt-2">
      <h2 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
        <Lightbulb className="mr-2 text-yellow-500" size={24} />
        {topic.charAt(0).toUpperCase() + topic.slice(1)} Explained Simply
      </h2>

      <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg shadow-sm border border-indigo-100">
        <div
          className="prose prose-indigo max-w-none"
          dangerouslySetInnerHTML={{
            __html: explanation.replace(/\n/g, "<br/>"),
          }}
        />
      </Card>
    </div>
  );
};

export default Explanation;
