import React from 'react';
import { STACK_DATA, ICONS } from '../constants';
import { ArrowDown, ArrowRight, User, Globe, Database, Cpu, ShoppingCart, Brain, CreditCard, Truck, Megaphone, MessageSquare, Zap, Layers } from 'lucide-react';

const Node = ({ 
  icon, 
  label, 
  subLabel, 
  tooltip,
  colorClass = "bg-slate-900/80 border-slate-700 backdrop-blur-sm" 
}: { 
  icon: React.ReactNode, 
  label: string, 
  subLabel: string, 
  tooltip?: string,
  colorClass?: string 
}) => (
  <div className={`relative group flex flex-col items-center ${colorClass} border p-4 rounded-xl w-48 shadow-xl z-10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-help`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none" />
    <div className="p-3 bg-slate-800/80 rounded-full mb-3 shadow-inner ring-1 ring-white/10 group-hover:ring-indigo-500/50 transition-all">
      {icon}
    </div>
    <div className="text-center relative z-20">
      <p className="text-sm font-bold text-slate-100 font-arabic leading-tight mb-1 group-hover:text-indigo-300 transition-colors">{label}</p>
      <p className="text-[10px] text-slate-400 uppercase tracking-widest truncate max-w-[160px]">{subLabel}</p>
    </div>
    
    {/* Tooltip */}
    {tooltip && (
      <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bottom-full mb-4 left-1/2 -translate-x-1/2 w-64 p-3 bg-slate-900/95 backdrop-blur-md text-xs text-slate-200 rounded-lg border border-slate-700 shadow-2xl pointer-events-none z-50 text-center leading-relaxed">
        {tooltip}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900/95"></div>
      </div>
    )}
  </div>
);

const Edge = ({ vertical = false, label }: { vertical?: boolean, label?: string }) => {
    if (vertical) {
        return (
            <div className="flex flex-col items-center my-2 h-16 justify-center relative overflow-hidden">
                {label && <span className="text-[9px] font-mono text-indigo-400 mb-1 bg-indigo-950/30 px-1 rounded">{label}</span>}
                <div className="h-full w-0.5 bg-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-indigo-500 to-transparent animate-flow" style={{ animationDuration: '1.5s' }} />
                </div>
                <ArrowDown className="text-slate-600 w-4 h-4 -mt-1" />
            </div>
        );
    }
    return (
        <div className="flex items-center mx-2 w-16 justify-center relative">
             {label && <span className="absolute -top-4 text-[9px] font-mono text-indigo-400 whitespace-nowrap bg-indigo-950/30 px-1 rounded">{label}</span>}
            <div className="w-full h-0.5 bg-slate-700 relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-flow" style={{ animationDuration: '1.5s' }} />
            </div>
            <ArrowRight className="text-slate-600 w-4 h-4 -ml-1" />
        </div>
    );
};

export const ArchitectureDiagram: React.FC = () => {
  // Helper to get description safely
  const getDesc = (id: string) => STACK_DATA.find(s => s.id === id)?.description;

  return (
    <div className="w-full h-full p-8 overflow-y-auto flex flex-col items-center justify-start min-h-[1000px]">
        <header className="mb-12 text-center">
             <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-arabic">مخطط البنية التحتية (Architecture Map)</h2>
             <p className="text-slate-400">Live visualization of system data flow and service dependencies.</p>
        </header>

        {/* Tier 1: Client & Frontend */}
        <div className="flex flex-col items-center mb-8 relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
            <div className="flex items-center gap-8">
                <Node 
                  icon={<User className="text-slate-300 w-6 h-6" />} 
                  label="End Users" 
                  subLabel="WEB / MOBILE" 
                  tooltip="Customers accessing the platform via Web Browsers or Mobile Applications."
                />
                <Edge label="HTTPS / TLS" />
                <Node 
                  icon={ICONS.Frontend} 
                  label="Next.js 14" 
                  subLabel="FRONTEND (VERCEL)" 
                  colorClass="bg-blue-950/40 border-blue-800/50 backdrop-blur-md"
                  tooltip={getDesc('fe-next')}
                />
            </div>
            <Edge vertical label="GraphQL / REST" />
        </div>

        {/* Tier 2: Backend Core */}
        <div className="p-10 border border-dashed border-indigo-500/30 rounded-[2.5rem] bg-indigo-950/10 mb-8 w-full max-w-5xl relative backdrop-blur-sm">
             <div className="absolute -top-3 left-8 text-xs font-bold text-indigo-300 tracking-widest bg-slate-950 border border-indigo-900/50 px-3 py-1 rounded-full shadow-lg">BACKEND LAYER</div>
             <div className="flex flex-wrap justify-center items-center gap-16">
                <div className="flex flex-col gap-6 items-center">
                   <Node 
                     icon={ICONS.Auth} 
                     label="Firebase Auth" 
                     subLabel="IDENTITY" 
                     tooltip={getDesc('auth-firebase')}
                   />
                </div>
                
                <div className="flex items-center">
                   <Edge label="Verify" />
                   <Node 
                     icon={ICONS.Backend} 
                     label="Node.js 20" 
                     subLabel="API SERVER" 
                     colorClass="bg-indigo-950/40 border-indigo-500/40 shadow-indigo-900/20 shadow-2xl backdrop-blur-md" 
                     tooltip={getDesc('be-node')}
                   />
                   <Edge label="Read/Write" />
                </div>

                <div className="flex flex-col gap-6 items-center">
                    <Node 
                      icon={<Zap className="w-6 h-6 text-yellow-400" />} 
                      label="Redis Cloud" 
                      subLabel="CACHE" 
                      tooltip="High-performance in-memory data store for caching API responses and session management."
                    />
                </div>
             </div>
        </div>

        <Edge vertical label="Internal Traffic" />

        {/* Tier 3: Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4">
            
            {/* Data Layer */}
            <div className="flex flex-col gap-4 p-6 border border-slate-700/50 rounded-2xl bg-slate-900/40 backdrop-blur-md hover:border-emerald-500/40 transition-colors group">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-700/50">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-300 transition-colors">DATA STORE</span>
                </div>
                <div className="space-y-6">
                    <Node icon={ICONS.Database} label="Cloud SQL" subLabel="POSTGRESQL" tooltip={getDesc('db-sql')} />
                    <Node icon={<Layers className="w-6 h-6 text-orange-500"/>} label="Firestore" subLabel="REALTIME" tooltip={getDesc('db-firestore')} />
                    <Node icon={ICONS.Analytics} label="BigQuery" subLabel="ANALYTICS" tooltip={getDesc('analytics-bq')} />
                </div>
            </div>

            {/* AI Layer */}
            <div className="flex flex-col gap-4 p-6 border border-slate-700/50 rounded-2xl bg-slate-900/40 backdrop-blur-md hover:border-purple-500/40 transition-colors group">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-700/50">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold text-slate-400 group-hover:text-purple-300 transition-colors">AI ENGINE</span>
                </div>
                <div className="space-y-6">
                    <Node icon={ICONS.AI} label="Vertex AI" subLabel="PREDICTIONS" tooltip={getDesc('ai-core')} />
                    <Node icon={<Brain className="w-6 h-6 text-pink-400"/>} label="Vision & NLP" subLabel="PERCEPTION APIs" tooltip={getDesc('ai-perception')} />
                    <Node icon={<ShoppingCart className="w-6 h-6 text-purple-300"/>} label="Recommendations" subLabel="PERSONALIZATION" tooltip="AI-driven product recommendation engine to increase conversion rates." />
                </div>
            </div>

            {/* External Integrations */}
            <div className="flex flex-col gap-4 p-6 border border-slate-700/50 rounded-2xl bg-slate-900/40 backdrop-blur-md hover:border-pink-500/40 transition-colors group">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-700/50">
                    <Globe className="w-4 h-4 text-pink-400" />
                    <span className="text-xs font-bold text-slate-400 group-hover:text-pink-300 transition-colors">INTEGRATIONS</span>
                </div>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Node icon={<CreditCard className="w-6 h-6 text-green-400"/>} label="Stripe / GPay" subLabel="PAYMENTS" tooltip={getDesc('int-payment')} />
                    <Node icon={<Truck className="w-6 h-6 text-cyan-400"/>} label="DHL / Aramex" subLabel="SHIPPING" tooltip={getDesc('int-shipping')} />
                    <Node icon={<Megaphone className="w-6 h-6 text-rose-400"/>} label="Ads / FB" subLabel="MARKETING" tooltip={getDesc('int-marketing')} />
                    <Node icon={<MessageSquare className="w-6 h-6 text-teal-400"/>} label="Twilio" subLabel="COMMS" tooltip={getDesc('int-comms')} />
                </div>
            </div>

        </div>
    </div>
  );
};