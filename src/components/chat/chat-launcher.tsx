'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

export function ChatLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    const botResponse: Message = { sender: 'bot', text: 'This feature is coming soon.' };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue('');
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <TooltipProvider>
      <div className="fixed bottom-4 right-4 z-50">
        {!isOpen && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={toggleChat}
                className="rounded-full w-14 h-14 p-0 shadow-lg flex items-center justify-center bg-gradient-to-br from-primary to-secondary/80 text-primary-foreground hover:shadow-xl transition-all duration-300 group"
              >
                <MessageSquare className="h-6 w-6" />
                <span className="hidden md:block text-sm ml-2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Vega Assistant</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="md:hidden">
              <p>Vega Assistant — Aquoris Chat App</p>
            </TooltipContent>
          </Tooltip>
        )}

        {isOpen && (
          <Card className="w-[calc(100vw-2rem)] h-[70vh] max-w-sm max-h-[500px] flex flex-col shadow-2xl rounded-xl bg-background/80 backdrop-blur-xl animate-fade-in-up">
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-border/40">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/20 rounded-full">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Vega Assistant</h3>
                  <p className="text-xs text-muted-foreground">Aquoris’s chat app for doctors</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleChat}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent ref={chatBodyRef} className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={cn('flex items-end gap-2', msg.sender === 'user' ? 'justify-end' : 'justify-start')}>
                  {msg.sender === 'bot' && <Bot className="h-5 w-5 text-muted-foreground self-start shrink-0" />}
                  <div
                    className={cn(
                      'max-w-[80%] rounded-lg px-3 py-2 text-sm',
                      msg.sender === 'user' ? 'bg-primary/90 text-primary-foreground' : 'bg-secondary/50 text-foreground'
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {messages.length === 0 && (
                <div className="text-center text-sm text-muted-foreground pt-8">
                  Ask Vega about Aquoris, Vega OS, or clinical workflows…
                </div>
              )}
            </CardContent>
            <form onSubmit={handleSubmit} className="p-4 border-t border-border/40 flex items-center space-x-2">
              <Input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-white dark:bg-black/20"
              />
              <Button type="submit" size="icon" className="w-9 h-9">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Card>
        )}
      </div>
    </TooltipProvider>
  );
}
