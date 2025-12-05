import React, { useState } from 'react';
import { Calculator, Users, TrendingUp } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  const [targetLeads, setTargetLeads] = useState(10000);
  const [sdrSalary, setSdrSalary] = useState(4500); // Monthly

  // Assumptions based on your manifesto
  // Manual SDR: ~100 leads/day (sourcing + emailing) * 20 working days = 2000/mo max efficiency
  const manualLeadsPerSdr = 2000; 
  const stackCost = 500; // Fixed cost of the Clay/Reply/Mailforge stack

  const sdrsNeeded = Math.ceil(targetLeads / manualLeadsPerSdr);
  const manualCost = sdrsNeeded * sdrSalary;
  // Stack cost is relatively fixed until very high volumes, keeping it simple for impact
  const automatedCost = stackCost + (Math.floor(targetLeads / 20000) * 100); // slight variable cost increase
  const savings = manualCost - automatedCost;

  return (
    <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden ring-1 ring-white/5">
      <div className="p-6 md:p-8 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-3 mb-2">
           <Calculator className="w-6 h-6 text-indigo-400" />
           <h3 className="text-2xl font-bold text-white">Automation ROI Calculator</h3>
        </div>
        <p className="text-slate-400">See exactly how much cash you burn by doing this manually.</p>
      </div>

      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="space-y-8">
           <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-300">Target Monthly Leads</label>
                <span className="text-indigo-400 font-bold bg-indigo-950/50 border border-indigo-900 px-2 py-1 rounded font-mono">{targetLeads.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={targetLeads}
                onChange={(e) => setTargetLeads(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <p className="text-xs text-slate-500 mt-2">How many new contacts do you need to reach per month?</p>
           </div>

           <div>
              <div className="flex justify-between items-center mb-2">
                 <label className="text-sm font-bold text-slate-300">Avg. SDR Monthly Cost</label>
                 <span className="text-indigo-400 font-bold bg-indigo-950/50 border border-indigo-900 px-2 py-1 rounded font-mono">${sdrSalary.toLocaleString()}</span>
              </div>
               <input
                type="range"
                min="2000"
                max="8000"
                step="500"
                value={sdrSalary}
                onChange={(e) => setSdrSalary(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <p className="text-xs text-slate-500 mt-2">Gross salary, without tools.</p>
           </div>
           
           <div className="bg-yellow-900/10 border border-yellow-900/30 p-4 rounded-lg">
                <p className="text-xs text-yellow-500 font-medium leading-relaxed">
                    <strong>The Math:</strong> A human SDR maxes out at ~100 quality leads/day. 
                    To hit {targetLeads.toLocaleString()} leads/mo, you would need <strong>{sdrsNeeded} full-time hires</strong>.
                </p>
           </div>
        </div>

        {/* Results */}
        <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-center relative overflow-hidden">
             {/* Abstract bg decorative */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>

             <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-800 relative z-10">
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Headcount Required</div>
                <div className="flex items-center gap-2 font-bold text-white">
                   <Users className="w-4 h-4 text-slate-500" />
                   {sdrsNeeded} SDRs
                </div>
             </div>

             <div className="space-y-4 relative z-10">
                 <div className="flex justify-between items-end">
                    <div className="text-sm font-medium text-slate-400">Old Way Cost</div>
                    <div className="text-xl font-bold text-red-400 font-mono">${manualCost.toLocaleString()}<span className="text-sm text-slate-600 font-normal font-sans">/mo</span></div>
                 </div>
                 <div className="flex justify-between items-end">
                    <div className="text-sm font-medium text-slate-400">Automated Stack</div>
                    <div className="text-xl font-bold text-indigo-400 font-mono">~${automatedCost}<span className="text-sm text-slate-600 font-normal font-sans">/mo</span></div>
                 </div>
             </div>

             <div className="mt-8 pt-6 border-t border-slate-800 relative z-10">
                 <div className="text-xs font-bold text-green-500 uppercase tracking-wider mb-1">Your Monthly Savings</div>
                 <div className="text-4xl md:text-5xl font-black text-white flex items-center gap-2 tracking-tight">
                    ${savings.toLocaleString()}
                    <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};