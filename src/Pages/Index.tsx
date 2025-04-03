import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ChatBot from "@/components/Chatbot";
import PdfSummarizer from "@/components/PdfSummarizer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      <Features />
      <ChatBot />
      <PdfSummarizer />
      <Footer />
    </div>
  );
};

export default Index;
