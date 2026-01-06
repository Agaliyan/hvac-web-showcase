
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

const ChatBubble = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isVisible && (
        <div className="animate-fade-in">
          <Button
            size="lg"
            className="rounded-full w-16 h-16 bg-secondary hover:bg-secondary/90 shadow-lg text-secondary-foreground"
            onClick={() => setIsVisible(false)}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          <div className="absolute -top-14 right-0 bg-card px-4 py-3 rounded-2xl shadow-lg border border-border text-sm font-medium whitespace-nowrap">
            Need help? Chat with us!
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-card"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
