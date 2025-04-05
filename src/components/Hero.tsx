import { Sparkles, FileText, Brain } from "lucide-react";
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
            Experience personalized learning with our AI{" "}
            <span className=" text-[#f72585]">tutor</span> that answers your
            questions instantly and explains complex complex topics to help you
            understand any topic with ease.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 "
            style={{ animationDelay: "0.8s" }}
          ></div>
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
              Explain like I am five
            </h3>
            <p className="text-gray-600">
              Explains complex concepts in a way that's easy to understand.
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
