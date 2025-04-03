import React from "react";
import { Check, Zap, Clock, BookOpen, BrainCircuit } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supercharge Your{" "}
            <span className="inline-block bg-gradient-to-r from-[#f72585] to-purple-500 bg-clip-text text-transparent pb-2">
              Learning
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AuraTutor combines cutting-edge AI with intuitive design to create
            the perfect learning companion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start">
            <div className="mr-4 mt-1 bg-blue-200 rounded-full p-2">
              <BrainCircuit color="blue" className="h-6 w-6 " />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Advanced AI Understanding
              </h3>
              <p className="text-gray-600 mb-4">
                Our AI can understand complex academic concepts across various
                subjects and explain them in a way that's easy for you to grasp.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Detailed explanations of complex topics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Step-by-step problem solving</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 mt-1 bg-violet-200 rounded-full p-2">
              <Zap color="violet" className="h-6 w-6 text-tutor-blue" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Instant Answers</h3>
              <p className="text-gray-600 mb-4">
                Get immediate responses to your questions without waiting,
                helping you maintain your learning momentum.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>No waiting for responses</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Available 24/7 for your questions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 mt-1 bg-purple-200 rounded-full p-2">
              <Clock color="purple" className="h-6 w-6 " />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Time-Saving Summaries
              </h3>
              <p className="text-gray-600 mb-4">
                Our PDF summarizer extracts the most important information from
                documents, saving you hours of reading time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Extract key concepts and ideas</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Focus on what matters most</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mr-4 mt-1 bg-red-200  rounded-full p-2">
              <BookOpen color="red" className="h-6 w-6 " />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Comprehensive Knowledge
              </h3>
              <p className="text-gray-600 mb-4">
                From math and science to history and literature, our AI has been
                trained on a vast range of academic subjects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Multi-disciplinary knowledge base</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Up-to-date information across subjects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
