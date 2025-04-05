import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ChatBot from "@/components/Chatbot";

import Footer from "@/components/Footer";
import IamFive from "@/components/IamFive";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      <Features />
      <ChatBot />
      <IamFive />
      <Footer />
    </div>
  );
};

export default Index;
