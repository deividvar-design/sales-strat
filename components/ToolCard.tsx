
import React from 'react';
import { Tool, ToolCategory } from '../types';
import { 
  ExternalLink, 
  Database, 
  Megaphone, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp, 
  Mail, 
  Target, 
  Phone, 
  Search, 
  Globe, 
  Calendar,
  Zap,
  LayoutDashboard
} from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  showChannels?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, showChannels = true }) => {
  
  // Icon Mapping based on tool ID
  const getIcon = () => {
    switch (tool.id) {
      case 'clay': return Database;
      case 'reply': return Megaphone;
      case 'mailforge': return ShieldCheck;
      case 'salesforge': return Zap;
      case 'hubspot': return LayoutDashboard;
      case 'pipedrive': return TrendingUp;
      case 'salesforce': return Briefcase;
      case 'mixmax': return Mail;
      case 'lemlist': return Mail;
      case 'dripify': return Target;
      case 'apollo': return Target;
      case 'lusha': return Phone;
      case 'zoominfo': return Search;
      case 'cognism': return Globe;
      case 'calendly': return Calendar;
      default: return Briefcase;
    }
  };

  const Icon = getIcon();

  // Custom Category Label Mapping as requested
  const getCategoryLabel = () => {
    if (tool.id === 'mailforge') return 'Email structure';
    if (tool.category === ToolCategory.CRM) return 'CRM';
    if (tool.category === ToolCategory.CONTACTS) return 'Contacts';
    if (tool.category === ToolCategory.SALES_ENGAGEMENT) return 'Outreach';
    if (tool.category === ToolCategory.SCHEDULING) return 'Scheduling';
    if (tool.category === ToolCategory.INFRASTRUCTURE) return 'Infrastructure';
    return tool.category;
  };

  const isCoreStack = ['clay', 'reply', 'hubspot', 'mailforge'].includes(tool.id);

  return (
    <div className={`rounded-xl border shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full overflow-hidden group relative bg-slate-900 ${isCoreStack ? 'border-indigo-500/50 shadow-indigo-500/20' : 'border-slate-800'}`}>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          {/* Icon Box */}
          <div className={`p-3 rounded-lg border shrink-0 ${isCoreStack ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-slate-800 border-slate-700 text-slate-400'}`}>
             <Icon className="w-6 h-6" />
          </div>

          <div className="flex-1 pr-6">
            <h3 className="text-xl font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors">{tool.name}</h3>
             {/* Custom Category Label */}
            <p className="text-sm font-medium text-slate-500 mt-1">{getCategoryLabel()}</p>
          </div>
        </div>
        
        <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
          {tool.description}
        </p>

        {/* Channels Display */}
        {showChannels && tool.channels && tool.channels.length > 0 && (
          <div className="mt-auto pt-3 border-t border-slate-800/50">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Channels</p>
            <div className="flex flex-wrap gap-1.5">
              {tool.channels.map((channel, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-slate-800/50 border border-slate-700/50 rounded text-xs text-slate-400 font-medium">
                  {channel}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

      <div className="bg-slate-950/50 p-4 border-t border-slate-800 flex flex-col gap-3 mt-auto">
        <a 
          href={tool.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-full py-2.5 text-sm font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 ${
              isCoreStack 
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-600/30' 
              : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700'
          }`}
        >
          {isCoreStack ? 'Try For Free' : 'Visit Website'} <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
