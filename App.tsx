import React, { useState } from 'react';
import { ViewMode } from './types';
import { STACK_DATA } from './constants';
import { ServiceCard } from './components/ServiceCard';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { GeminiAdvisor } from './components/GeminiAdvisor';
import { PricingSection } from './components/PricingSection';
import { SetupGuide } from './components/SetupGuide';
import { SecuritySection } from './components/SecuritySection';
import { KPISection } from './components/KPISection';
import { ResourcesSection } from './components/ResourcesSection';
import { LayoutDashboard, Network, MessageSquare, Menu, X, Cloud, CreditCard, Terminal, Shield, BarChart, Users, CheckCircle2, AlertTriangle, Activity } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.DASHBOARD);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper to render content based on view
  const renderContent = () => {
    switch (viewMode) {
      case ViewMode.DASHBOARD:
        return (
          <div className="p-6 overflow-y-auto h-full">
            {/* System Pulse Header */}
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-900/40 to-slate-900/40 border border-indigo-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between shadow-lg">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="p-4 bg-emerald-500/10 rounded-full border border-emerald-500/20 relative">
                        <Activity className="w-8 h-8 text-emerald-400" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white font-arabic">النظام يعمل بكفاءة (All Systems Operational)</h2>
                        <p className="text-slate-400 text-sm">Monitoring 12 cloud services across 3 regions.</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="text-center px-4 border-r border-slate-700/50 last:border-0">
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Success Rate</p>
                        <p className="text-xl font-bold text-emerald-400">99.98%</p>
                    </div>
                     <div className="text-center px-4 border-r border-slate-700/50 last:border-0">
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Active Alerts</p>
                        <p className="text-xl font-bold text-amber-400">0</p>
                    </div>
                     <div className="text-center px-4 border-r border-slate-700/50 last:border-0">
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Global Latency</p>
                        <p className="text-xl font-bold text-blue-400">42ms</p>
                    </div>
                </div>
            </div>

            <header className="mb-6 flex justify-between items-end">
              <div>
                 <h1 className="text-3xl font-bold text-slate-100 mb-1 font-arabic">لوحة المراقبة (Dashboard)</h1>
                 <p className="text-slate-400 text-sm">Real-time telemetry from Sahaba Cloud Core.</p>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
              {STACK_DATA.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        );
      case ViewMode.ARCHITECTURE:
        return <ArchitectureDiagram />;
      case ViewMode.ADVISOR:
        return (
            <div className="h-full p-4 md:p-8 max-w-6xl mx-auto flex flex-col justify-center">
                <GeminiAdvisor />
            </div>
        );
      case ViewMode.PRICING:
        return <PricingSection />;
      case ViewMode.SETUP:
        return <SetupGuide />;
      case ViewMode.SECURITY:
        return <SecuritySection />;
      case ViewMode.KPI:
        return <KPISection />;
      case ViewMode.RESOURCES:
        return <ResourcesSection />;
      default:
        return null;
    }
  };

  const NavItem = ({ mode, icon: Icon, label }: { mode: ViewMode; icon: any; label: string }) => (
    <button
      onClick={() => {
        setViewMode(mode);
        setIsMobileMenuOpen(false);
      }}
      className={`group flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
        viewMode === mode
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-900/30'
          : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-100'
      }`}
    >
      <div className={`absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity ${viewMode === mode ? 'hidden' : 'block'}`} />
      <Icon size={20} className={`${viewMode === mode ? 'text-white' : 'text-slate-500 group-hover:text-blue-400'} transition-colors`} />
      <span className="font-medium tracking-wide">{label}</span>
      {viewMode === mode && <div className="absolute right-0 top-0 h-full w-1 bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,0.8)]" />}
    </button>
  );

  return (
    <div className="flex h-screen text-slate-100 overflow-hidden relative">
      
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-slate-900/80 backdrop-blur-md p-2 rounded-lg text-slate-100 border border-slate-700 shadow-lg"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Glass Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-slate-950/80 backdrop-blur-xl border-r border-slate-800/50 transform transition-transform duration-300 md:relative md:translate-x-0 shadow-2xl
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-8 pb-6 border-b border-slate-800/50 flex items-center gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
                <Cloud className="text-white h-6 w-6" />
            </div>
          <div>
            <h1 className="text-xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Sahaba Cloud</h1>
            <span className="text-[10px] text-blue-400 font-arabic tracking-widest uppercase mt-1 block">Intelligent Architecture</span>
          </div>
        </div>

        <nav className="p-4 space-y-1.5 mt-2">
          <NavItem mode={ViewMode.DASHBOARD} icon={LayoutDashboard} label="Dashboard" />
          <NavItem mode={ViewMode.ARCHITECTURE} icon={Network} label="Architecture Map" />
          <NavItem mode={ViewMode.ADVISOR} icon={MessageSquare} label="AI Advisor" />
          
          <div className="pt-4 pb-2 px-3">
             <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Management</p>
          </div>
          
          <NavItem mode={ViewMode.KPI} icon={BarChart} label="Performance (KPIs)" />
          <NavItem mode={ViewMode.SECURITY} icon={Shield} label="Security Core" />
          <NavItem mode={ViewMode.RESOURCES} icon={Users} label="Resources & Plan" />
          
          <div className="pt-4 pb-2 px-3">
             <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Support</p>
          </div>

          <NavItem mode={ViewMode.PRICING} icon={CreditCard} label="Pricing Tiers" />
          <NavItem mode={ViewMode.SETUP} icon={Terminal} label="Setup Guide" />
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-slate-800/50 bg-gradient-to-t from-slate-950 to-transparent">
          <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 backdrop-blur-md">
            <div className="flex justify-between items-center mb-2">
                 <p className="text-xs text-slate-400 font-medium">System Status</p>
                 <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
            </div>
            <div className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 size={14} />
                Operational
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full relative w-full overflow-hidden">
        {renderContent()}
      </main>

    </div>
  );
}