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
        isUser && "justify-end"
      )}
    >
      <div
        className={cn(
          "group relative max-w-[80%] rounded-lg px-4 py-2 shadow-sm transition-all",
          isUser
            ? "bg-primary text-primary-foreground hover:translate-x-[-2px]"
            : "bg-secondary text-secondary-foreground hover:translate-x-[2px]"
        )}
      >
        <p className="break-words">{content}</p>
        <time 
          className="mt-1 block text-xs opacity-70 transition-opacity group-hover:opacity-100"
          dateTime={timestamp}
        >
          {timestamp}
        </time>
      </div>
    </div>
  );
};