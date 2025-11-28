import React from 'react';
import { CloudService } from '../types';
import { MetricChart } from './MetricChart';
import { AlertCircle, CheckCircle2, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface ServiceCardProps {
  service: CloudService;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const isHealthy = service.status === 'healthy';
  const statusColor = isHealthy ? 'text-emerald-400' : service.status === 'warning' ? 'text-amber-400' : 'text-red-400';
  const glowColor = isHealthy ? 'group-hover:shadow-emerald-500/10 group-hover:border-emerald-500/30' : 'group-hover:shadow-amber-500/10 group-hover:border-amber-500/30';

  return (
    <div className={`bg-slate-900/80 border border-slate-800 rounded-2xl p-6 transition-all duration-300 shadow-lg group backdrop-blur-sm hover:-translate-y-1 hover:shadow-2xl ${glowColor} animate-in fade-in zoom-in duration-500`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className={`p-3.5 rounded-xl transition-colors duration-300 ${isHealthy ? 'bg-slate-800 group-hover:bg-emerald-950/30' : 'bg-slate-800 group-hover:bg-amber-950/30'}`}>
            {service.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 font-arabic leading-tight">{service.name_ar}</h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{service.category}</p>
          </div>
        </div>
        <div className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border border-transparent ${isHealthy ? 'bg-emerald-500/10 text-emerald-400 group-hover:border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 group-hover:border-amber-500/20'}`}>
          {isHealthy ? <CheckCircle2 size={12} strokeWidth={3} /> : <AlertCircle size={12} strokeWidth={3} />}
          <span>{service.status.toUpperCase()}</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {service.metrics?.map((metric, idx) => (
          <div key={idx} className="bg-slate-950/40 border border-slate-800/50 p-3 rounded-xl group-hover:bg-slate-950/60 transition-colors">
            <div className="flex justify-between items-start mb-1">
                 <p className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">{metric.label}</p>
                 {metric.trend === 'up' && <TrendingUp size={12} className="text-emerald-500" />}
                 {metric.trend === 'down' && <TrendingDown size={12} className="text-rose-500" />}
                 {metric.trend === 'stable' && <Minus size={12} className="text-slate-500" />}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-slate-200 font-mono tracking-tight">{metric.value}</span>
              <span className="text-[10px] text-slate-500 font-medium">{metric.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="pt-4 border-t border-slate-800/50">
        <div className="flex justify-between items-center mb-2">
            <p className="text-[10px] text-slate-500 font-semibold uppercase">24h Performance</p>
            <span className={`text-[10px] ${isHealthy ? 'text-emerald-500' : 'text-amber-500'}`}>+99% uptime</span>
        </div>
        <div className="h-16 w-full opacity-70 group-hover:opacity-100 transition-opacity">
            <MetricChart color={isHealthy ? '#34d399' : '#fbbf24'} />
        </div>
      </div>
    </div>
  );
};