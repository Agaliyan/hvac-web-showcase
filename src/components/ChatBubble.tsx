import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // In a real app, this would send the message
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[300px] sm:w-[350px] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-primary-foreground">ComfortCare Support</h3>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p className="text-xs text-primary-foreground/90">Online Now</p>
                </div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-white/20 rounded-full h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Body */}
          <div className="p-4 h-[350px] flex flex-col justify-between bg-card text-card-foreground">
            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
              <div className="bg-muted p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                <p className="text-sm text-foreground">
                  Hi there! 👋 Welcome to ComfortCare HVAC. How can we help you create the perfect climate for your home today?
                </p>
                <span className="text-[10px] text-muted-foreground mt-1 block">Just now</span>
              </div>
            </div>

            {/* Input Area */}
            <div className="mt-4 pt-4 border-t border-border">
              <form className="flex gap-2" onSubmit={handleSendMessage}>
                <Input 
                  placeholder="Type a message..." 
                  className="flex-1 bg-background" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button size="icon" type="submit" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 p-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <MessageCircle className={`h-7 w-7 text-primary-foreground transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
        )}
      </Button>
    </div>
  );
};

export default ChatBubble;
