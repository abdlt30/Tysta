import React from 'react';
import { PRICING_TIERS } from '../constants';
import { Check, Zap } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto h-full pb-20">
      <header className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-100 mb-3 font-arabic">خطط الأسعار (Pricing Plans)</h1>
        <p className="text-slate-400">Scale your cloud architecture with a plan that fits your growth. Upgrade anytime as your traffic increases.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {Object.entries(PRICING_TIERS).map(([key, tier]) => {
          const isPro = key === 'professional';
          return (
            <div 
              key={key} 
              className={`relative bg-slate-900 rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                isPro 
                  ? 'border-indigo-500 shadow-2xl shadow-indigo-900/20 z-10 scale-105' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {isPro && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Zap size={12} fill="currentColor" /> MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-slate-300 capitalize mb-2">{key}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white tracking-tight">{tier.price.split('/')[0]}</span>
                  <span className="text-slate-500">/month</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${isPro ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-400'}`}>
                        <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                isPro 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}>
                Choose {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};