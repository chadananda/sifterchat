import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { ChatContainer } from "./ChatContainer";

export const ChatFob = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div 
          className="fixed inset-4 sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[400px] sm:h-[600px] bg-background rounded-lg shadow-2xl animate-in zoom-in-90 duration-200"
          style={{
            containerType: "inline-size",
            viewTransitionName: "chat-window"
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 p-2 hover:bg-accent rounded-full transition-colors"
            aria-label="Close chat"
          >
            <X className="size-4" />
          </button>
          <ChatContainer />
        </div>
      ) : (
        <Button
          size="icon"
          className="fixed bottom-4 right-4 size-14 rounded-full shadow-lg animate-in fade-in slide-in-from-bottom-3 hover:scale-110 active:scale-95 transition-all"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <MessageCircle className="size-6" />
        </Button>
      )}
    </>
  );
};