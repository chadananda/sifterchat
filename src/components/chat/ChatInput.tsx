import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Modern way to focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="sticky bottom-0 flex gap-2 bg-background/80 p-4 backdrop-blur-sm"
    >
      <Input
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 transition-shadow focus-visible:shadow-lg"
        // Modern HTML attributes
        enterKeyHint="send"
        autoComplete="off"
        spellCheck="true"
        lang="en"
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={!message.trim()}
        className="transition-transform active:scale-95"
      >
        <Send className="size-4" />
      </Button>
    </form>
  );
};