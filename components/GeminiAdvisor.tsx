import React, { useState, useRef, useEffect } from 'react';
import { generateArchitecturalInsight } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, User, Sparkles, Loader2, Zap, ShieldAlert, TrendingUp, HelpCircle } from 'lucide-react';

const SUGGESTED_PROMPTS = [
    { label: "Optimize Cloud Costs", icon: TrendingUp, query: "How can I optimize the costs for my Cloud SQL and GKE setup?" },
    { label: "Security Audit", icon: ShieldAlert, query: "Identify potential security risks in my current architecture." },
    { label: "Scale for Black Friday", icon: Zap, query: "What changes are needed to handle 10x traffic on Black Friday?" },
    { label: "Explain Architecture", icon: HelpCircle, query: "Explain the data flow between Next.js, Node.js and Firestore." }
];

export const GeminiAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hello! I am your AI Cloud Architect. I have full context of your <b>Sahaba Cloud</b> stack. How can I help you innovate today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateArchitecturalInsight(userMsg.text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (e) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting to the neural core. Please try again.",
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
      
      {/* Header */}
      <div className="p-5 border-b border-slate-700/50 flex items-center gap-4 bg-slate-900/50 backdrop-blur-md">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-slate-100 font-bold text-lg">AI Architect Advisor</h3>
          <p className="text-xs text-indigo-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Gemini 2.5 Pro Connected
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-700">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${
              msg.role === 'model' 
                ? 'bg-indigo-600 border border-indigo-400/30' 
                : 'bg-slate-700 border border-slate-600'
            }`}>
              {msg.role === 'model' ? <Bot size={20} className="text-white" /> : <User size={20} className="text-slate-300" />}
            </div>
            
            <div className={`max-w-[85%] rounded-2xl p-5 shadow-sm ${
              msg.role === 'model' 
                ? 'bg-slate-800/80 border border-slate-700/50 text-slate-200 rounded-tl-none' 
                : 'bg-indigo-600 text-white rounded-tr-none bg-gradient-to-br from-indigo-600 to-indigo-700'
            }`}>
              <div 
                className={`prose prose-invert prose-sm max-w-none leading-relaxed ${msg.role === 'model' ? 'font-arabic' : ''}`}
                dangerouslySetInnerHTML={{ 
                  __html: msg.text
                    .replace(/\n/g, '<br/>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-indigo-200">$1</strong>')
                    .replace(/`([^`]+)`/g, '<code class="bg-black/30 px-1 py-0.5 rounded text-xs font-mono text-emerald-300">$1</code>')
                }} 
              />
              <span className="text-[10px] opacity-40 mt-2 block text-right font-mono">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-4 animate-in fade-in duration-300">
             <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
               <Loader2 className="animate-spin text-white" size={20} />
             </div>
             <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-200"></span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts (Only if few messages) */}
      {messages.length < 3 && !isLoading && (
        <div className="px-6 pb-2">
             <p className="text-xs text-slate-500 mb-3 font-medium uppercase tracking-wider">Quick Actions</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 {SUGGESTED_PROMPTS.map((prompt, idx) => (
                     <button
                        key={idx}
                        onClick={() => handleSend(prompt.query)}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all text-left group"
                     >
                         <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-indigo-600 group-hover:text-white transition-colors text-slate-400">
                             <prompt.icon size={16} />
                         </div>
                         <span className="text-sm text-slate-300 group-hover:text-indigo-200 transition-colors">{prompt.label}</span>
                     </button>
                 ))}
             </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 bg-slate-900/50 border-t border-slate-700/50 backdrop-blur-md">
        <div className="relative group">
          <input
            type="text"
            className="w-full bg-slate-950/80 border border-slate-700 text-slate-100 rounded-xl py-4 pl-5 pr-14 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all font-arabic shadow-inner placeholder:text-slate-600"
            placeholder="Ask specific questions about your stack..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-2 p-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 rounded-lg text-white transition-all shadow-lg hover:shadow-indigo-500/30"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};