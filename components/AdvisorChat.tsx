import React, { useState, useRef, useEffect } from 'react';
import { generateSalesAdvice } from '../services/geminiService';
import { TeamSize, ChatMessage } from '../types';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const AdvisorChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedTeamSize, setSelectedTeamSize] = useState<TeamSize>(TeamSize.SOLOPRENEUR);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello! I'm your AI Sales Ops Consultant. Tell me about your team size and what challenges you're facing. I'll help you optimize.",
      timestamp: Date.now()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const apiHistory = messages.map(m => ({ role: m.role, text: m.text }));

    try {
      const responseText = await generateSalesAdvice(input, selectedTeamSize, apiHistory);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        role: 'model',
        text: "Sorry, I encountered an error connecting to the strategy server.",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-slate-900 rounded-xl border border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/5">
      {/* Header */}
      <div className="bg-slate-950 p-4 flex items-center justify-between shrink-0 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600/20 border border-indigo-500/30 rounded-lg">
             <Bot className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">Sales House Advisor</h2>
            <p className="text-slate-500 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-slate-500 text-xs hidden sm:inline">Context:</span>
            <select 
                value={selectedTeamSize} 
                onChange={(e) => setSelectedTeamSize(e.target.value as TeamSize)}
                className="bg-slate-900 text-slate-300 text-xs border border-slate-700 rounded px-2 py-1 focus:ring-1 focus:ring-indigo-500 outline-none"
            >
                {Object.values(TeamSize).map(size => (
                    <option key={size} value={size}>{size}</option>
                ))}
            </select>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-900/50">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${msg.role === 'user' ? 'bg-slate-800 border-slate-700' : 'bg-indigo-900/30 border-indigo-500/30'}`}>
              {msg.role === 'user' ? <User className="w-4 h-4 text-slate-400" /> : <Sparkles className="w-4 h-4 text-indigo-400" />}
            </div>
            <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-lg ${
              msg.role === 'user' 
                ? 'bg-slate-800 border border-slate-700 text-slate-200 rounded-tr-none' 
                : 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-tl-none border border-indigo-500/20'
            }`}>
              <ReactMarkdown 
                components={{
                    ul: ({node, ...props}) => <ul className="list-disc list-outside ml-4 my-2" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-4 my-2" {...props} />,
                    strong: ({node, ...props}) => <strong className={`font-bold ${msg.role === 'user' ? 'text-white' : 'text-white'}`} {...props} />,
                    p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />
                }}
              >
                {msg.text}
              </ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
              <span className="text-slate-400 text-xs">Processing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-slate-950 border-t border-slate-800 shrink-0">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="w-full pl-4 pr-12 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none text-sm text-white placeholder-slate-500 min-h-[50px] max-h-[120px]"
            rows={2}
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-600/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};