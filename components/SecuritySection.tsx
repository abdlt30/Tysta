import React from 'react';
import { SECURITY_DATA } from '../constants';
import { Shield, Lock, FileKey, Globe, CheckCircle2, UserCheck, Key, ShieldCheck } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <div className="p-6 overflow-y-auto h-full pb-20">
       {/* Header */}
       <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100 mb-2 font-arabic">الأمان والامتثال (Security & Compliance)</h1>
        <p className="text-slate-400">Enterprise-grade security controls and policies implemented across the stack.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        
        {/* Authentication */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors shadow-lg">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Key className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 font-arabic">{SECURITY_DATA.authentication.title}</h3>
            </div>
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                        <span className="block text-slate-200 font-medium">Primary Provider</span>
                        <span className="text-sm text-slate-400">{SECURITY_DATA.authentication.primary}</span>
                    </div>
                </li>
                 <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                        <span className="block text-slate-200 font-medium">MFA</span>
                        <span className="text-sm text-slate-400">{SECURITY_DATA.authentication.mfa}</span>
                    </div>
                </li>
                 <li className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                        <span className="block text-slate-200 font-medium">Sessions</span>
                        <span className="text-sm text-slate-400">{SECURITY_DATA.authentication.sessions}</span>
                    </div>
                </li>
            </ul>
        </div>

        {/* Authorization */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-colors shadow-lg">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                    <UserCheck className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 font-arabic">{SECURITY_DATA.authorization.title}</h3>
            </div>
             <div className="space-y-4">
                <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Method</p>
                    <p className="text-slate-200 font-medium">{SECURITY_DATA.authorization.method}</p>
                </div>
                <div>
                     <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Defined Roles</p>
                     <div className="flex flex-wrap gap-2">
                        {SECURITY_DATA.authorization.roles.map(role => (
                            <span key={role} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20 capitalize">
                                {role}
                            </span>
                        ))}
                     </div>
                </div>
                <p className="text-sm text-slate-400 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-purple-400"/>
                    {SECURITY_DATA.authorization.permissions}
                </p>
            </div>
        </div>

        {/* Data Protection */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors shadow-lg">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <FileKey className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 font-arabic">{SECURITY_DATA.data_protection.title}</h3>
            </div>
            <ul className="space-y-4">
                <li className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-lg">
                    <Lock className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-300 text-sm">{SECURITY_DATA.data_protection.encryption}</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-300 text-sm">{SECURITY_DATA.data_protection.backup}</span>
                </li>
                 <li className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-lg">
                    <Shield className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-300 text-sm">{SECURITY_DATA.data_protection.compliance}</span>
                </li>
            </ul>
        </div>

        {/* Network Security */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-orange-500/50 transition-colors shadow-lg">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                    <Globe className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 font-arabic">{SECURITY_DATA.network_security.title}</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
                 <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-lg border-l-2 border-orange-500">
                    <span className="text-slate-300">Firewall</span>
                    <span className="text-orange-300 text-sm">{SECURITY_DATA.network_security.firewall}</span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-lg border-l-2 border-orange-500">
                    <span className="text-slate-300">WAF</span>
                    <span className="text-orange-300 text-sm">{SECURITY_DATA.network_security.waf}</span>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-lg border-l-2 border-orange-500">
                    <span className="text-slate-300">DDoS</span>
                    <span className="text-orange-300 text-sm">Enabled</span>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};