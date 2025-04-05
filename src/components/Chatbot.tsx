import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, User, Bot, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import Groq from "groq-sdk";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI academic assistant. Ask me any question, and I'll help you understand the topic better.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_API_KEY,
        dangerouslyAllowBrowser: true, // Enable browser usage
      });

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are an expert academic tutor. Provide helpful, accurate, and educational responses to help students learn. Explain concepts clearly and provide examples when appropriate. Keep responses concise but informative.",
          },
          ...messages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
          {
            role: "user",
            content: inputValue,
          },
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.5,
        max_tokens: 1000,
      });

      const botResponse =
        chatCompletion.choices[0]?.message?.content ||
        "I'm sorry, I couldn't process your request.";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      toast.error("Failed to get a response. Please try again.");

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting to my brain right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center  bg-gradient-to-r from-[#f72585] to-purple-500 px-3 py-1 rounded-full text-sm font-medium mb-4 bg-tutor-purple/10 text-tutor-purple">
            <Sparkles color="white" className="h-4 w-4 mr-2" />
            <span className="text-white">AI Academic Assistant</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ask Me <span className="text-tutor-purple">Anything</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant answers to all your academic questions. I'm here to help
            you learn and understand any subject.
          </p>
        </div>

        <div className="max-w-4xl mx-auto ">
          <Card className="overflow-hidden border border-zinc-200 shadow-lg border-none">
            <CardContent className="p-0">
              <div className="p-4 border-b bg-gradient-to-r from-tutor-purple to-tutor-blue text-white">
                <h3 className="font-medium text-purple-500 flex items-center">
                  <Bot color="purple" className="h-5  w-5 mr-2" />
                  Ai <span className="text-[#f72585]">Tutor</span> Chat
                </h3>
              </div>

              <div
                ref={chatContainerRef}
                className="h-[500px] overflow-y-auto p-6 bg-gray-50"
              >
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex",
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "flex max-w-[80%]",
                          message.sender === "user" ? "flex-row-reverse" : ""
                        )}
                      >
                        <div
                          className={cn(
                            "flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center",
                            message.sender === "user"
                              ? "bg-tutor-purple/10 ml-3"
                              : "bg-tutor-blue/10 mr-3"
                          )}
                        >
                          {message.sender === "user" ? (
                            <User
                              color="red"
                              className="h-5 w-5 text-tutor-purple"
                            />
                          ) : (
                            <Bot
                              color="blue"
                              className="h-5 w-5 text-tutor-blue"
                            />
                          )}
                        </div>
                        <div
                          className={cn(
                            "p-4 rounded-2xl",
                            message.sender === "user"
                              ? "bg-purple-400 text-white"
                              : "bg-white text-gray-800 border border-gray-100 shadow-sm"
                          )}
                        >
                          <p className="whitespace-pre-wrap">{message.text}</p>
                          <div
                            className={cn(
                              "text-xs mt-1",
                              message.sender === "user"
                                ? "text-purple-200"
                                : "text-gray-500"
                            )}
                          >
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex max-w-[80%]">
                        <div className="flex-shrink-0 h-9 w-9 rounded-full bg-tutor-blue/10 mr-3 flex items-center justify-center">
                          <Bot className="h-5 w-5 text-tutor-blue" />
                        </div>
                        <div className="p-4 rounded-2xl bg-white text-gray-800 border border-gray-100 shadow-sm">
                          <div className="flex space-x-2">
                            <div className="h-2 w-2 rounded-full bg-gray-300 animate-typing"></div>
                            <div className="h-2 w-2 rounded-full bg-gray-300 animate-typing delay-150"></div>
                            <div className="h-2 w-2 rounded-full bg-gray-300 animate-typing delay-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="border-t border-gray-100 p-4 bg-white">
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <Input
                    placeholder="Ask me anything about your studies..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 border-gray-200 focus:border-tutor-purple"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    onClick={handleSendMessage}
                    disabled={isLoading || inputValue.trim() === ""}
                    className="bg-purple-500 from-tutor-purple to-tutor-light-purple hover:opacity-90 text-white"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-4 text-sm text-gray-500">
            Powered by Groq LLM · Llama 3.3 70B Versatile
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
