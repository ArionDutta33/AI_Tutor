import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, FileText, Brain } from "lucide-react";
import { Card } from "./ui/card";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full   bg-gradient-to-r from-[#f72585] to-purple-500 text-sm font-medium mb-6 "
            style={{ animationDelay: "0.2s" }}
          >
            <Sparkles className="h-4 w-4 mr-2 text-white" />
            <span className="text-white">AI-Powered Learning Assistant</span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight "
            style={{ animationDelay: "0.4s" }}
          >
            Learn Faster with{" "}
            <span className="inline-block bg-gradient-to-r from-[#f72585] to-purple-500 bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            Tutoring
          </h1>

          <p
            className="text-lg text-gray-600 max-w-3xl mb-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Experience personalized learning with our AI tutor that answers your
            questions instantly and summarizes complex PDFs to help you
            understand any topic with ease.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 "
            style={{ animationDelay: "0.8s" }}
          >
            <Button size="lg" className="bg-[#f72585] text-white">
              <a href="#chat" className="flex items-center ">
                Chat with AI <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#summarizer" className="flex items-center">
                Summarize PDF <FileText className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 "
          style={{ animationDelay: "1s" }}
        >
          <Card className=" border-zinc-200 p-8 text-center">
            <div className=" rounded-full w-12 h-12 flex items-center bg-blue-200 justify-center mx-auto mb-4">
              <Brain color="blue" className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Intelligent Responses
            </h3>
            <p className="text-gray-600">
              Our AI understands context and provides accurate, helpful answers
              to your academic questions.
            </p>
          </Card>

          <Card className=" border-zinc-200 p-8 text-center">
            <div className=" rounded-full w-12 bg-red-200 h-12 flex items-center justify-center mx-auto mb-4">
              <FileText color="red" className="h-6 w-6 text-tutor-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Smart Document Analysis
            </h3>
            <p className="text-gray-600">
              Upload any PDF and get concise summaries, key points, and insights
              instantly.
            </p>
          </Card>

          <Card className=" border-zinc-200 p-8 text-center">
            <div className=" rounded-full bg-purple-200 w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Sparkles color="purple" className="h-6 w-6 " />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Personalized Learning
            </h3>
            <p className="text-gray-600">
              The more you interact, the better the AI adapts to your learning
              style and needs.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
