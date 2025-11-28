import React from 'react';
import { KPI_DATA } from '../constants';
import { Activity, TrendingUp, Users, Clock, AlertTriangle, Smile, Target, BarChart2 } from 'lucide-react';

// Helper for rendering a metric row with consistent styling
interface MetricRowProps {
    label: string;
    value: string;
    icon: React.ElementType;
}

const MetricRow: React.FC<MetricRowProps> = ({ label, value, icon: Icon }) => (
  <div className="flex items-center justify-between p-4 bg-slate-950/50 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
    <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-800 rounded-md text-slate-400">
            <Icon size={16} />
        </div>
        <span className="text-slate-300 text-sm capitalize">{label.replace(/_/g, ' ')}</span>
    </div>
    <span className="text-slate-100 font-bold font-mono">{value}</span>
  </div>
);

export const KPISection: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto h-full pb-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-2 font-arabic">مؤشرات الأداء (KPIs)</h1>
        <p className="text-slate-400">Real-time performance tracking across technical, business, and customer success metrics.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        
        {/* Technical KPIs */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Activity className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-100">Technical Health</h3>
                    <p className="text-xs text-slate-500">System Stability</p>
                </div>
            </div>
            <div className="space-y-3">
                <MetricRow label="Uptime" value={KPI_DATA.technical.uptime} icon={Target} />
                <MetricRow label="Response Time" value={KPI_DATA.technical.response_time} icon={Clock} />
                <MetricRow label="Error Rate" value={KPI_DATA.technical.error_rate} icon={AlertTriangle} />
            </div>
        </div>

        {/* Business KPIs */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-100">Business Growth</h3>
                    <p className="text-xs text-slate-500">Revenue & Churn</p>
                </div>
            </div>
             <div className="space-y-3">
                <MetricRow label="MRR Growth" value={KPI_DATA.business.mrr_growth} icon={BarChart2} />
                <MetricRow label="Churn Rate" value={KPI_DATA.business.churn_rate} icon={Users} />
                <MetricRow label="Acquisition" value={KPI_DATA.business.customer_acquisition} icon={Target} />
            </div>
        </div>

        {/* Customer KPIs */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Smile className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-100">Customer Success</h3>
                    <p className="text-xs text-slate-500">Satisfaction & Support</p>
                </div>
            </div>
             <div className="space-y-3">
                <MetricRow label="Satisfaction" value={KPI_DATA.customer.satisfaction} icon={Smile} />
                <MetricRow label="Support Response" value={KPI_DATA.customer.support_response} icon={Clock} />
                <MetricRow label="Feature Requests" value={KPI_DATA.customer.feature_requests} icon={Activity} />
            </div>
        </div>

      </div>
    </div>
  );
};