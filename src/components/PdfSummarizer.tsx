import { useState } from "react";
import { Send, Lightbulb, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

import Explanation from "./Explaination";
import { fetchExplanation } from "@/lib/groqFetch";

const Index = () => {
  const [topic, setTopic] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!topic.trim()) {
      toast.error("Please enter a topic to explain");
      return;
    }

    setIsLoading(true);
    try {
      const result = await fetchExplanation(topic);
      setExplanation(result);
    } catch (error) {
      console.error("Error fetching explanation:", error);
      toast.error("Failed to get explanation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-2">
            Explain Like I'm Five
          </h1>
          <p className="text-lg text-gray-600">
            Complex topics explained in simple, easy to understand terms
          </p>
        </div>

        <Card className="p-6 shadow-lg border-indigo-100 bg-white/80 backdrop-blur-sm">
          <form
            onSubmit={handleSearch}
            className="flex items-center space-x-2 mb-8"
          >
            <div className="relative flex-grow">
              <Input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter any complex topic..."
                className="pl-4 pr-10 py-3 text-lg rounded-lg border-indigo-200 focus:border-indigo-400 focus:ring-indigo-300"
                disabled={isLoading}
              />
              <Lightbulb
                className="absolute right-3 top-3 text-indigo-300"
                size={20}
              />
            </div>
            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 h-auto"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Send size={20} />
              )}
            </Button>
          </form>

          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2
                className="animate-spin text-indigo-600 mb-4"
                size={48}
              />
              <p className="text-indigo-600">
                Simplifying this concept for you...
              </p>
            </div>
          )}

          {!isLoading && explanation && (
            <Explanation explanation={explanation} topic={topic} />
          )}

          {!isLoading && !explanation && (
            <div className="text-center py-16 text-gray-500">
              <Lightbulb className="mx-auto mb-4 text-indigo-300" size={48} />
              <p>Search for any complex topic and I'll explain it simply</p>
              <p className="text-sm mt-2">
                Try: "quantum computing", "blockchain", "photosynthesis"...
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Index;
