import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  timestamp: string;
  isUser?: boolean;
}

export const ChatMessage = ({ content, timestamp, isUser = false }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full animate-fade-in gap-2 p-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2 shadow-sm",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground"
        )}
      >
        <p className="break-words">{content}</p>
        <span className="mt-1 block text-xs opacity-70">{timestamp}</span>
      </div>
    </div>
  );
};