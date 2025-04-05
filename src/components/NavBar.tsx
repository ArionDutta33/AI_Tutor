import React from "react";
import { Button } from "@/components/ui/button";
import { BrainCircuit, BookOpen, MessageCircle } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80  border-b border-gray-200/50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-6 w-6 " />
          <span className="text-xl font-semibold ">
            Ai <span className="text-[#f72585]">Tutor</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600  hover:text-[#f72585]">
            Features
          </a>
          <a href="#chat" className="text-gray-600 hover:text-[#f72585] ">
            AI Chat
          </a>
          <a href="#summarizer" className="text-gray-600 hover:text-[#f72585]">
            Explain like I am five
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            <BookOpen className="mr-2 h-4 w-4" />
            Resources
          </Button>
          <Button className="bg-[#f72585] text-white">
            <MessageCircle className="mr-2 h-4 w-4 " />
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
