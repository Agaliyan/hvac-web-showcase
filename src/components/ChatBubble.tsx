
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const ChatBubble = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isVisible && (
        <div className="animate-fade-in">
          <Button
            size="lg"
            className="rounded-full w-16 h-16 bg-accent hover:bg-accent-600 shadow-lg"
            onClick={() => setIsVisible(false)}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          <div className="absolute -top-12 right-0 bg-white px-3 py-2 rounded-lg shadow-lg border text-sm font-medium whitespace-nowrap">
            Need help? Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
