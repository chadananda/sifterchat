import { ChatFob } from "@/components/chat/ChatFob";

const Index = () => {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to SifterChat Test Site</h1>
      <p className="text-lg text-muted-foreground mb-8">
        This is a test environment for the SifterChat component. Click the chat button in the bottom right to begin.
      </p>
      
      {/* Test content to demonstrate chat overlay */}
      <div className="prose max-w-2xl">
        <h2>Test Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2>More Content</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <ChatFob />
    </main>
  );
};

export default Index;