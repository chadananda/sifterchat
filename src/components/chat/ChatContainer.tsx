import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";

interface Message {
  id: number;
  content: string;
  timestamp: string;
  isUser: boolean;
}

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! How can I help you today?",
      timestamp: new Date().toLocaleTimeString(),
      isUser: false,
    },
  ]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      content,
      timestamp: new Date().toLocaleTimeString(),
      isUser: true,
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate response
    setTimeout(() => {
      const response: Message = {
        id: messages.length + 2,
        content: "Thanks for your message! This is a demo response.",
        timestamp: new Date().toLocaleTimeString(),
        isUser: false,
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};