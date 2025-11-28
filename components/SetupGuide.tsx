import React, { useState } from 'react';
import { SETUP_COMMANDS } from '../constants';
import { Terminal, Copy, Check } from 'lucide-react';

export const SetupGuide: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SETUP_COMMANDS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 overflow-y-auto h-full max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-2 font-arabic">دليل الإعداد (Setup Guide)</h1>
        <p className="text-slate-400">Run these commands in your Google Cloud Shell to initialize the infrastructure.</p>
      </header>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-indigo-400" />
            <span className="text-sm font-medium text-slate-300">gcloud-terminal</span>
          </div>
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors border border-slate-700"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            {copied ? "Copied!" : "Copy All"}
          </button>
        </div>
        
        <div className="p-6 font-mono text-sm overflow-x-auto bg-[#0f172a]">
          <pre className="text-slate-300 leading-relaxed">
            {SETUP_COMMANDS.split('\n').map((line, i) => {
              if (line.startsWith('#')) {
                return <div key={i} className="text-slate-500 italic mb-1 mt-4 first:mt-0">{line}</div>;
              }
              if (line.trim() === '') {
                return <div key={i} className="h-4"></div>;
              }
              return (
                <div key={i} className="pl-4 border-l-2 border-slate-800 hover:border-indigo-500/50 transition-colors">
                  <span className="text-indigo-400 select-none mr-2">$</span>
                  {line}
                </div>
              );
            })}
          </pre>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-2 font-arabic">المتطلبات (Prerequisites)</h3>
          <ul className="list-disc list-inside text-sm text-slate-400 space-y-2">
            <li>Google Cloud SDK installed</li>
            <li>Billing account enabled</li>
            <li>IAM permissions for GKE & Cloud SQL</li>
          </ul>
        </div>
        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-2 font-arabic">التحقق (Verification)</h3>
          <p className="text-sm text-slate-400 mb-2">Check cluster status after creation:</p>
          <code className="bg-slate-950 px-2 py-1 rounded text-xs text-emerald-400">gcloud container clusters list</code>
        </div>
      </div>
    </div>
  );
};