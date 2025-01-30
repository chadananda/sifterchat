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
    const newMessage = {
      id: messages.length + 1,
      content,
      timestamp: new Date().toLocaleTimeString(),
      isUser: true,
    };
    
    setMessages(prev => [...prev, newMessage]);

    (async () => {
      const response = {
        id: messages.length + 2,
        content: "Thanks for your message! This is a demo response.",
        timestamp: new Date().toLocaleTimeString(),
        isUser: false,
      };
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessages(prev => [...prev, response]);
    })();
  };

  return (
    <div className="grid h-full grid-rows-[1fr_auto]">
      <div 
        className="overflow-y-auto p-4 space-y-4 scroll-smooth"
        style={{
          viewTransitionName: "chat-messages"
        }}
      >
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};