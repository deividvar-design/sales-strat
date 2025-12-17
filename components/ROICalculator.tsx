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
    <div className="bg-slate-100 rounded-2xl shadow-lg border border-slate-300 overflow-hidden">
      <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-300">
        <div className="flex items-center gap-3 mb-2">
           <Calculator className="w-6 h-6 text-indigo-600" />
           <h3 className="text-2xl font-bold text-slate-900">Automation ROI Calculator</h3>
        </div>
        <p className="text-slate-600">See exactly how much cash you burn by doing this manually.</p>
      </div>

      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-12">
        {/* Controls */}
        <div className="space-y-8">
           <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-700">Target Monthly Leads</label>
                <span className="text-indigo-600 font-bold bg-indigo-50 border border-indigo-200 px-2 py-1 rounded font-mono">{targetLeads.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={targetLeads}
                onChange={(e) => setTargetLeads(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <p className="text-xs text-slate-600 mt-2">How many new contacts do you need to reach per month?</p>
           </div>

           <div>
              <div className="flex justify-between items-center mb-2">
                 <label className="text-sm font-bold text-slate-700">Avg. SDR Monthly Cost</label>
                 <span className="text-indigo-600 font-bold bg-indigo-50 border border-indigo-200 px-2 py-1 rounded font-mono">${sdrSalary.toLocaleString()}</span>
              </div>
               <input
                type="range"
                min="2000"
                max="8000"
                step="500"
                value={sdrSalary}
                onChange={(e) => setSdrSalary(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <p className="text-xs text-slate-600 mt-2">Gross salary, without tools.</p>
           </div>

           <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-lg">
                <p className="text-xs text-yellow-700 font-medium leading-relaxed">
                    <strong>The Math:</strong> A human SDR maxes out at ~100 quality leads/day.
                    To hit {targetLeads.toLocaleString()} leads/mo, you would need <strong>{sdrsNeeded} full-time hires</strong>.
                </p>
           </div>
        </div>

        {/* Results */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-300 flex flex-col justify-center relative overflow-hidden">
             {/* Abstract bg decorative */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-indigo-50 rounded-full blur-3xl"></div>

             <div className="flex justify-between items-center mb-6 pb-6 border-b border-slate-300 relative z-10">
                <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">Headcount Required</div>
                <div className="flex items-center gap-2 font-bold text-slate-900">
                   <Users className="w-4 h-4 text-slate-600" />
                   {sdrsNeeded} SDRs
                </div>
             </div>

             <div className="space-y-4 relative z-10">
                 <div className="flex justify-between items-end">
                    <div className="text-sm font-medium text-slate-600">Old Way Cost</div>
                    <div className="text-xl font-bold text-red-600 font-mono">${manualCost.toLocaleString()}<span className="text-sm text-slate-400 font-normal font-sans">/mo</span></div>
                 </div>
                 <div className="flex justify-between items-end">
                    <div className="text-sm font-medium text-slate-600">Automated Stack</div>
                    <div className="text-xl font-bold text-indigo-600 font-mono">~${automatedCost}<span className="text-sm text-slate-400 font-normal font-sans">/mo</span></div>
                 </div>
             </div>

             <div className="mt-8 pt-6 border-t border-slate-300 relative z-10">
                 <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Your Monthly Savings</div>
                 <div className="text-4xl md:text-5xl font-black text-slate-900 flex items-center gap-2 tracking-tight">
                    ${savings.toLocaleString()}
                    <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-green-700" />
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};