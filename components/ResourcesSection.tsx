import React from 'react';
import { RESOURCES_DATA } from '../constants';
import { Users, DollarSign, CalendarDays, Code2, PenTool, Layout, Box, Flag, CheckCircle2 } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto h-full pb-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-2 font-arabic">الموارد والخطة (Resources & Plan)</h1>
        <p className="text-slate-400">Overview of team structure, monthly budget allocation, and project roadmap.</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 max-w-[1600px] mx-auto">
        
        {/* Team Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 font-arabic">فريق العمل (Team)</h3>
              <p className="text-xs text-slate-500">Core Team Structure</p>
            </div>
          </div>
          <div className="space-y-4">
             <TeamRow 
               label="Frontend Developers" 
               count={RESOURCES_DATA.team.frontend_developers} 
               icon={Code2} 
               color="text-blue-400" 
             />
             <TeamRow 
               label="Backend Developers" 
               count={RESOURCES_DATA.team.backend_developers} 
               icon={Box} 
               color="text-indigo-400" 
             />
             <TeamRow 
               label="DevOps Engineer" 
               count={RESOURCES_DATA.team.devops_engineer} 
               icon={Layout} 
               color="text-emerald-400" 
             />
             <TeamRow 
               label="UI/UX Designer" 
               count={RESOURCES_DATA.team.ui_ux_designer} 
               icon={PenTool} 
               color="text-pink-400" 
             />
             <TeamRow 
               label="Product Manager" 
               count={RESOURCES_DATA.team.product_manager} 
               icon={Flag} 
               color="text-amber-400" 
             />
          </div>
        </div>

        {/* Budget Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
           <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="p-3 bg-emerald-500/10 rounded-lg">
              <DollarSign className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 font-arabic">الميزانية (Budget)</h3>
              <p className="text-xs text-slate-500">Monthly Allocation</p>
            </div>
          </div>
          <div className="space-y-4">
            <BudgetRow label="Development" amount={RESOURCES_DATA.budget.development} />
            <BudgetRow label="Infrastructure" amount={RESOURCES_DATA.budget.infrastructure} />
            <BudgetRow label="Marketing" amount={RESOURCES_DATA.budget.marketing} />
            <BudgetRow label="Contingency" amount={RESOURCES_DATA.budget.contingency} />
            
            <div className="pt-4 border-t border-slate-800 mt-4">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">Estimated Monthly Total</span>
                    <span className="text-lg font-bold text-emerald-400">$25,000/mo</span>
                </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <CalendarDays className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 font-arabic">الجدول الزمني (Timeline)</h3>
              <p className="text-xs text-slate-500">Project Roadmap</p>
            </div>
          </div>
          <div className="relative pl-4 space-y-8 before:absolute before:inset-y-0 before:left-2 before:w-0.5 before:bg-slate-800">
             <TimelineItem title="MVP Launch" time={RESOURCES_DATA.timeline.mvp} active />
             <TimelineItem title="Beta Launch" time={RESOURCES_DATA.timeline.beta_launch} />
             <TimelineItem title="Public Launch" time={RESOURCES_DATA.timeline.public_launch} />
             <TimelineItem title="Break Even" time={RESOURCES_DATA.timeline.break_even} last />
          </div>
        </div>

      </div>
    </div>
  );
};

// Helper Components
const TeamRow = ({ label, count, icon: Icon, color }: { label: string, count: number, icon: any, color: string }) => (
    <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-lg border border-slate-800/50">
        <div className="flex items-center gap-3">
            <div className={`p-2 rounded bg-slate-800 ${color}`}>
                <Icon size={16} />
            </div>
            <span className="text-slate-300 text-sm">{label}</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-slate-100 font-bold">{count}</span>
            <span className="text-xs text-slate-500">Members</span>
        </div>
    </div>
);

const BudgetRow = ({ label, amount }: { label: string, amount: string }) => (
    <div className="flex justify-between items-center p-3 hover:bg-slate-800/30 rounded-lg transition-colors">
        <span className="text-slate-400 text-sm">{label}</span>
        <span className="text-slate-200 font-mono font-medium">{amount}</span>
    </div>
);

const TimelineItem = ({ title, time, active, last }: { title: string, time: string, active?: boolean, last?: boolean }) => (
    <div className="relative pl-6">
        <div className={`absolute left-[-5px] top-1 w-3 h-3 rounded-full border-2 ${active ? 'bg-purple-500 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-slate-900 border-slate-600'}`}></div>
        <div>
            <h4 className={`text-sm font-bold ${active ? 'text-purple-400' : 'text-slate-300'}`}>{title}</h4>
            <span className="text-xs text-slate-500 font-mono mt-1 block">{time}</span>
        </div>
        {!last && active && (
             <div className="absolute left-[0px] top-4 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent -ml-px"></div>
        )}
    </div>
);