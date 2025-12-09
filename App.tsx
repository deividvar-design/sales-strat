
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

// Declare Calendly and Klaviyo on window object
declare global {
  interface Window {
    Calendly: any;
    _klOnsite: any[];
  }
}
import {
  LayoutDashboard,
  Library,
  BookOpen,
  Menu,
  X,
  Layers,
  Check,
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  ExternalLink,
  Star,
  Search,
  Mail,
  Linkedin,
  Twitter,
  ShieldCheck,
  Filter,
  Calendar,
  Database,
  Megaphone,
  Repeat,
  Code,
  Heart,
  Briefcase,
  Download,
  FileText,
  Users,
  Phone,
  Trophy,
  Terminal,
  ChevronDown,
  ChevronUp,
  ListTodo,
  CreditCard,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import { TOOLS, STRATEGIES } from './constants';
import { TeamSize, ToolCategory, Tool } from './types';
import { ToolCard } from './components/ToolCard';

// --- Components within App.tsx ---

const NavLink = ({ to, icon: Icon, label, onClick }: any) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
        isActive
          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </Link>
  );
};

const CalendlyEmbed = () => {
  const embedRef = React.useRef<HTMLDivElement>(null);
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    if (initialized || !embedRef.current) return;

    // Initialize Calendly widget once the script is loaded
    const initCalendly = () => {
      if (window.Calendly && embedRef.current && !initialized) {
        // Clear any existing content
        embedRef.current.innerHTML = '';

        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/david-saleshouse/30min?hide_gdpr_banner=1&primary_color=4f46e5',
          parentElement: embedRef.current,
          prefill: {},
          utm: {},
          styles: {
            height: '950px'
          }
        });
        setInitialized(true);
      }
    };

    // Check if Calendly is already loaded
    if (window.Calendly) {
      initCalendly();
    } else {
      // Wait for the script to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(checkCalendly);
        }
      }, 100);

      return () => clearInterval(checkCalendly);
    }
  }, [initialized]);

  return <div ref={embedRef} style={{ minWidth: '320px', height: '950px' }} />;
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-colors hover:border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-start justify-between gap-4 group"
      >
        <h3 className="text-lg font-bold text-white flex items-start gap-2 flex-1">
          <span className="text-indigo-400 shrink-0">Q:</span>
          <span className="group-hover:text-indigo-400 transition-colors">{question}</span>
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-300 leading-relaxed px-6 pb-6 ml-6">{answer}</p>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-800/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
           <div className="flex items-center gap-2 mb-3">
              <Link to="/" className="flex items-center gap-2 group">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                     S
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white">Sales House</span>
              </Link>
              <a href="https://www.linkedin.com/in/davidvaran/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors ml-2"><Linkedin className="w-5 h-5" /></a>
           </div>
           <p className="text-sm text-slate-400 max-w-xs">Build your outbound engine. Simpler than you think. No agencies needed.</p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/library" className="hover:text-indigo-400 transition-colors">Tool Library</Link></li>
            <li><Link to="/strategies" className="hover:text-indigo-400 transition-colors">Playbook</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Free Outbound Playbook</a></li>
            <li><Link to="/consulting" className="hover:text-indigo-400 transition-colors">Consulting</Link></li>
            <li><Link to="/faq" className="hover:text-indigo-400 transition-colors">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2025 Sales House by David Varan. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const HomePage = ({ setIsPlaybookModalOpen }: { setIsPlaybookModalOpen: (open: boolean) => void }) => {
  const [showFullManifesto, setShowFullManifesto] = useState(false);

  return (
  <div className="flex flex-col">
    {/* Hero Section - The Outcome Architecture (Concept 1) */}
    <section className="relative bg-[#020617] text-white pt-24 pb-20 px-6 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left Column: Copy */}
                <div className="text-left">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
                        The Tools I Use to Run Outbound at Scale
                    </h1>

                    <p className="text-xl text-slate-400 max-w-lg mb-8 leading-relaxed font-light">
                        Here's the exact stack I use to scale outbound for B2B SaaS companies and consistently generate pipeline - whether you're a founder, solopreneur, or running sales alone.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Link to="/strategies" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-2 border border-indigo-500">
                            Build My Outbound System <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/library" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl border border-slate-700 transition-all flex items-center gap-2">
                            View Recommendations
                        </Link>
                    </div>
                </div>

                {/* Right Column: Composite Visual (Outcome Architecture) */}
                <div className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px] hidden md:flex">
                    
                    {/* Background Layer: Tool Stack representing "Curator" */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl transform -rotate-12 -translate-x-20 -translate-y-10 opacity-40 z-0 flex flex-col items-center justify-center transition-transform hover:-translate-y-12 duration-500">
                        <Database className="w-16 h-16 text-slate-600 mb-4" />
                        <span className="font-bold text-slate-500 text-lg">Clay</span>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl transform -rotate-6 -translate-x-8 -translate-y-4 opacity-60 z-10 flex flex-col items-center justify-center transition-transform hover:-translate-y-6 duration-500">
                        <LayoutDashboard className="w-16 h-16 text-slate-500 mb-4" />
                        <span className="font-bold text-slate-400 text-lg">HubSpot</span>
                    </div>

                    {/* Foreground Layer: Calendar Widget representing "Result" */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-slate-900 rounded-2xl border border-slate-700 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] z-20 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
                        <div className="bg-slate-950 p-5 border-b border-slate-800 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="font-bold text-slate-300 text-sm">Tue, 12th Nov</span>
                            <Calendar className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div className="p-4 space-y-3 relative">
                            {/* Time Slots */}
                            {[
                                { time: '9:00 AM', event: 'Discovery: TechCorp', type: 'discovery' },
                                { time: '10:30 AM', event: 'Demo: SaaS.io', type: 'demo' },
                                { time: '1:00 PM', event: 'Strategy Call', type: 'internal' },
                                { time: '2:30 PM', event: 'Discovery: FinTech', type: 'discovery' },
                                { time: '4:00 PM', event: 'Closing: Agency', type: 'demo' },
                            ].map((slot, i) => (
                                <div key={i} className="flex gap-3 text-xs items-center">
                                    <span className="text-slate-500 w-14 text-right shrink-0 font-mono">{slot.time}</span>
                                    <div className={`flex-1 p-2.5 rounded-lg border flex items-center gap-2 transition-all hover:scale-105 cursor-default ${
                                        slot.type === 'discovery' ? 'bg-green-500/10 border-green-500/20 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.1)]' :
                                        slot.type === 'demo' ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300 shadow-[0_0_10px_rgba(99,102,241,0.1)]' :
                                        'bg-slate-800 border-slate-700 text-slate-500'
                                    }`}>
                                        {slot.type === 'discovery' && <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>}
                                        {slot.type === 'demo' && <div className="w-2 h-2 rounded-full bg-indigo-500"></div>}
                                        <span className="font-bold tracking-wide">{slot.event}</span>
                                    </div>
                                </div>
                            ))}
                            {/* Floating Badge */}
                            <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-tl-xl shadow-lg">
                                +40 Demos/mo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Social Proof - Companies */}
    <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05),transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    I've worked with
                </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                    'SORSEO',
                    'Whatagraph',
                    'RoyaltyRange',
                    'GPSWOX',
                    'Walk15',
                    'CTO2B',
                    'HEMES',
                    'Glassique Cadeau',
                    'Finfra',
                    '+ 10 other'
                ].map((company) => (
                    <div
                        key={company}
                        className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-300 flex items-center justify-center text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300"></div>
                        <span className="text-white font-semibold text-sm md:text-base transition-colors duration-300 relative z-10">
                            {company}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* Featured Tools Teaser (Moved UP) */}
    <section id="featured-stack" className="py-24 bg-slate-950 text-white px-6 border-b border-slate-900 relative">
        <div className="absolute inset-0 bg-indigo-950/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-bold mb-4">My Current Favourite Sales Stack</h2>
                    <p className="text-slate-400 max-w-xl text-lg">
                        A lean, proven system that actually works. No bloat, no vendor lock-in, just tools that do their job.
                    </p>
                </div>
                <Link to="/library" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                    View All Tools <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                 {/* Replaced salesforge with hubspot in the filter */}
                 {TOOLS.filter(t => ['clay', 'reply', 'hubspot', 'mailforge'].includes(t.id)).map(tool => (
                     <ToolCard key={tool.id} tool={tool} showChannels={false} />
                 ))}
            </div>
        </div>
    </section>

    {/* Cost Breakdown Section (Moved UP) */}
    <section className="py-20 bg-[#020617] border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-6">
             <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-white">A Realistic Cost of Scaling</h2>
                <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
                    If you have more than a few functional braincells, this setup can be done in less than a few days. 
                    It is significantly cheaper than hiring a dedicated person, and more reliable than hoping for a viral TikTok post or blasting ads on Facebook.
                </p>
             </div>

             <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                    {[
                        { name: 'HubSpot', cost: '$0 - $119', period: '/mo', icon: LayoutDashboard },
                        { name: 'Clay', cost: '$149', period: '/mo', icon: Database },
                        { name: 'Reply.io', cost: '$99', period: '/mo', icon: Megaphone },
                        { name: 'Mailforge', cost: '$79', period: '/mo', icon: ShieldCheck },
                        { name: 'Apollo', cost: '$0 - $119', period: '/mo', icon: Target },
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 flex flex-col items-center text-center hover:bg-slate-800/50 transition-colors group">
                            <div className="mb-4 p-3 bg-slate-800 rounded-full text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-bold mb-1">{item.name}</h3>
                            <div className="text-xl font-bold text-indigo-400">
                                {item.cost}<span className="text-xs text-slate-500 font-medium ml-1">{item.period}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-slate-950/50 p-6 border-t border-slate-800 text-center">
                     <p className="text-slate-400 text-sm">
                        <AlertCircle className="w-4 h-4 inline-block mr-2 text-indigo-500" />
                        Total Stack Cost: <strong>~$350 - $500/mo</strong> vs. <strong>$4,500/mo</strong> for a single SDR.
                     </p>
                </div>
             </div>
        </div>
    </section>

     {/* Meet The Expert Section */}
    <section className="py-24 bg-slate-950 relative border-b border-slate-900">
         <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 items-stretch">

                {/* Left Column: Bio & Stats */}
                <div className="md:w-2/3 w-full flex flex-col gap-6 h-full">
                    
                    {/* Bio Card */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden flex-shrink-0">
                         <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                         <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                            <p>
                                <strong className="text-white">I’m a Head of Sales + RevOps consultant</strong> with 5 years of Marketing experience and 6 years of Sales experience. I’ve built B2B teams and outbound systems targeting North America, LATAM, and EMEA.
                            </p>
                            <p>
                                First, the volume of questions I kept getting about tool stacks and outbound setups was getting more frequent. It made sense to put everything in one place so people can find answers fast in this library.
                            </p>
                            <p>
                                Second, founders waste too much time and money on modular, gimmicky tools. Outbound is simpler than you think. With the right setup, anyone can run it themselves and feel confident doing it.
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 flex-1">
                        {[
                            { icon: Phone, val: '100k+', label: 'Cold Calls' },
                            { icon: Trophy, val: '$1.5m+', label: 'ARR Closed Won' },
                            { icon: Mail, val: '500k+', label: 'Emails Sent' },
                            { icon: Calendar, val: '200+', label: 'Demos Booked' }
                        ].map((stat, idx) => (
                             <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center hover:bg-slate-800/80 transition-all hover:border-slate-700 group h-full">
                                <stat.icon className="w-6 h-6 text-indigo-400 mb-3 group-hover:scale-110 transition-transform opacity-80" />
                                <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Profile Card - Full Image Background */}
                <div className="md:w-1/3 w-full flex min-h-[600px]">
                    <div className="rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 w-full shadow-2xl">
                        {/* Background Image - Full Size */}
                        <div className="absolute inset-0">
                             <img
                                src="/david-profile.jpg"
                                alt="David Varan, Sales Operations Consultant and Founder of Sales House"
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                style={{ objectPosition: 'center 20%' }}
                            />
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-start">
                            <h3 className="text-3xl font-bold text-white mb-1">David</h3>
                            <p className="text-indigo-400 font-medium mb-6">Head of Sales & Creator</p>

                            <div className="w-full space-y-2">
                                 <a href="https://www.linkedin.com/in/davidvaran/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#0077b5] hover:bg-[#006399] text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-900/20">
                                    <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                                </a>
                                <a href="mailto:david@saleshousestack.com" className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-lg font-bold text-sm transition-all border border-white/10">
                                    <Mail className="w-4 h-4" /> Email Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>
    
    {/* Manifesto / Why This Exists (Moved DOWN and Collapsed) */}
    <section className="py-20 px-6 bg-[#020617] border-b border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Outbound?</h2>
        </div>
        
        {/* Condensed Comparison Grid - Always Visible */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Paid Advertising */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-red-900/30 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span> Paid Advertising
                </h3>
                
                <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">The Bad</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5"/> Pay to learn</li>
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5"/> Bot traffic</li>
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5"/> At scale: diminishing returns</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">The Good</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Fast top-of-funnel scale (if budget is big)</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Easy to test multiple ICPs (if you enjoy burning money)</li>
                    </ul>
                </div>
            </div>

             {/* Organic Marketing */}
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-orange-900/30 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50"></div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span> Organic Marketing
                </h3>

                <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">The Bad</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"/> 6-18 months delayed ROI</li>
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"/> Google controls your fate</li>
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"/> Requires heavy consistency</li>
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"/> Hard to track real attribution</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">The Good</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Long-term compounding ROI (if it hits)</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Lower maintenance (after years of effort)</li>
                    </ul>
                </div>
            </div>

            {/* Outbound */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-indigo-500/30 relative overflow-hidden shadow-lg shadow-indigo-500/10 h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Outbound (My Way)
                </h3>
                
                <div className="mb-6">
                    <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3">The Great</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"/> Full control over volume and targeting</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"/> Works with zero brand awareness</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"/> Direct line to decision-makers</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"/> Instant validation & low upfront cost</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"/> Highest ROI channel in B2B</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5"/> Re-usable engine</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">The Reality</h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5"/> Requires experience (which I'm sharing)</li>
                        <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5"/> Can burn lists if done badly</li>
                        <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5"/> Needs regular optimization</li>
                        <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5"/> Requires thick skin (You'll get told off)</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Read More Button */}
        {!showFullManifesto && (
             <div className="text-center">
                <button
                    onClick={() => setShowFullManifesto(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium border border-slate-700"
                >
                    Read Full Manifesto <ChevronDown className="w-4 h-4" />
                </button>
             </div>
        )}
        
        {/* Expanded Content */}
        {showFullManifesto && (
            <div className="animate-fadeIn">
                <div className="prose prose-lg prose-invert text-slate-400 leading-relaxed space-y-6 mx-auto">
                    <p>
                        Fundamentally, I've been working in sales for 6+ years and have consulted small and mid-size sales teams on developing their strategies as well as tool stacks.
                    </p>
                    <p>
                        What I see very often is too much focus on a higher headcount instead of utilizing the SDR or AE time to the fullest. What opens doors for companies to improve their pipeline and keep the AEs happy is to have a healthy influx of top-funnel leads.
                    </p>
                    <p>
                        There are basically 2 methods of how you can generate leads: marketing and outbound. Marketing works well if you have a budget, have room for A/B testing, and are not yet sure about your target audience. For marketing to be effective, you need to be good at landing pages, website design, funnel creation, and retargeting. If we're looking at a social media platform like LinkedIn for B2B lead gen - it's crazy expensive. 9 out of 10 companies up to 10 employees do not have the headroom for those kind of budgets.
                    </p>
                    <p>
                        Whereas with Outbound, your strategies are simpler and you have significantly more control. You can generate a laser-focused list of contacts and prepare a sequence of emails + LinkedIn messages for them on the same day. By Day 2, you'll already be outreaching and can experiment and iterate on what works and doesn't. The cost-to-results ratio is significantly in outbound's favor. And I have done both.
                    </p>
                    <p>
                        All popular modern channels where you can run marketing, you can safely run outbound via messaging as well: Instagram, Facebook, Twitter, TikTok, LinkedIn, X (Twitter).
                    </p>
                    
                    <h2 className="text-xl font-bold text-white mt-8">The Vibecoder Advantage</h2>
                    <p>
                        Also, if you're a serial entrepreneur, vibecoder, or running affiliate programs - the whole tool stack is reusable. You probably won't want to re-use the CRM, as different products = different markets, but the whole outbound strategy can be re-used.
                    </p>
                </div>

                {/* Transparency Section */}
                <div className="mt-12 bg-slate-900 rounded-2xl p-8 border border-slate-800">
                    <div className="flex items-start gap-4">
                        <Heart className="w-6 h-6 text-rose-500 shrink-0 mt-1 fill-rose-500/10" />
                        <div>
                        <h2 className="text-lg font-bold text-white mb-2">Full Transparency: What's in it for me?</h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Generally, as I've been getting more and more questions on these topics, writing the same messages and sharing the same insights, I decided it just makes sense to put together a form of a library where I can share what tools I've used and what are my thoughts about them. All I'm getting in return from this is a small kickback from some of the affiliate programs if you do decide to trust my judgement and use the tools I recommend.
                        </p>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8">
                    <button
                        onClick={() => setShowFullManifesto(false)}
                        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                        Show Less <ChevronUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        )}
      </div>
    </section>

    {/* Consulting Section - Hidden */}
    {/* <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">

             <div className="flex flex-col md:flex-row items-stretch gap-12 bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="md:w-1/2">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-600/30 transform -rotate-3">
                        <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Fractional Leadership</h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        Need more than just tools? I act as your fractional Head of Sales Ops.
                        I'll build the strategy, set up the stack, and hire the right people.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {['Audit your ICP and Playbook', 'Implement toolstack', 'Setup audiences and outreach', 'A/B testing', 'CRM optimization', 'Lead recycling flow', 'Help with closing'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                <Check className="w-5 h-5 text-green-500 shrink-0" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:w-1/2 w-full">
                    <div className="h-full min-h-[700px]">
                        <CalendlyEmbed />
                    </div>
                </div>
             </div>
        </div>
    </section> */}

    {/* FAQ Section */}
    <section className="py-24 bg-slate-950 text-white px-6 border-b border-slate-900">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
            </div>

            <div className="space-y-4">
                <FAQItem
                    question="Will this work for my industry?"
                    answer="Honestly, you'll only know when you test. Your goal is to provide a solution to businesses. I generally do not recommend fixing a problem for industries you do not understand."
                />
                <FAQItem
                    question="What if I get marked as spam?"
                    answer="With this setup you have 9 mailboxes, 3 domains, and you're using warm-ups to make sure the risk of being flagged as spam is less likely. The lists you generate from Clay.com or Apollo are fully GDPR and Data Privacy laws compliant. Even if you do get marked as spam - you're okay, it will happen. You'll also be told to F off multiple times as you are outreaching cold. It comes with the territory."
                />
                <FAQItem
                    question="How long before I see results?"
                    answer="Under 2 weeks you'll have a very good understanding if there is a product market fit (demos booked or trial requests), and if the messaging is good (open rate, reply rate)."
                />
                <FAQItem
                    question="Can I do this with a smaller budget?"
                    answer="This setup costs under $500 a month. An SDR will cost you 30-50k annually. You do the math."
                />
            </div>

            <div className="text-center mt-8">
                <Link
                    to="/faq"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-500 transition-colors"
                >
                    See All FAQs
                </Link>
            </div>
        </div>
    </section>

    {/* Lead Magnet / Playbook Section */}
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-6 border-t border-slate-900">
        <div className="max-w-4xl mx-auto bg-slate-950/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

            <div className="flex-1 relative z-10">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                    Free Resource
                </div>
                <h2 className="text-3xl font-bold mb-4">Get The Full Playbook</h2>
                <p className="text-indigo-200 text-lg mb-6 leading-relaxed">
                    It's a full Notion setup for getting started with outbound, including message templates, Clay setup, checklist.
                </p>
                <button
                  onClick={() => setIsPlaybookModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10"
                >
                   <Download className="w-4 h-4" /> Get The Playbook
                </button>
            </div>
            <div className="w-full md:w-1/3 relative z-10">
                 <div className="bg-slate-900/50 p-1 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10 backdrop-blur-sm">
                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center text-slate-500">
                        <FileText className="w-12 h-12 mb-2 text-indigo-400" />
                        <span className="font-mono text-xs text-slate-400">Notion</span>
                    </div>
                 </div>
            </div>
        </div>
    </section>
  </div>
  );
};

const LibraryPage = () => {
    const filteredTools = TOOLS;

    // Group tools by category
    const sections = [
        { id: ToolCategory.CRM, title: 'CRM' },
        { id: ToolCategory.SALES_ENGAGEMENT, title: 'Sales Engagement' },
        { id: ToolCategory.CONTACTS, title: 'Contacts & Intelligence' },
        { id: ToolCategory.SCHEDULING, title: 'Scheduling' },
        { id: ToolCategory.INFRASTRUCTURE, title: 'Infrastructure (Mailbox)' },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto min-h-screen bg-[#020617]">
             <div className="mb-8">
                 <h1 className="text-3xl font-bold text-white mb-2">Tool Library</h1>
                 <p className="text-slate-400">Curated stack for modern sales teams.</p>
             </div>

             {/* Recommended Tools Section */}
             <div className="mb-12 bg-gradient-to-br from-indigo-950/30 to-purple-950/20 rounded-2xl border border-indigo-500/20 p-8">
                <div className="flex items-center gap-3 mb-6">
                    <Star className="w-6 h-6 text-indigo-400" />
                    <div>
                        <h2 className="text-2xl font-bold text-white">My Current Favourite Sales Stack</h2>
                        <p className="text-slate-400 text-sm mt-1">The exact combination behind 30k+ monthly send volume</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TOOLS.filter(t => ['clay', 'reply', 'hubspot', 'mailforge'].includes(t.id)).map(tool => (
                        <ToolCard key={tool.id} tool={tool} showChannels={false} />
                    ))}
                </div>
             </div>

             <div className="space-y-12">
                {sections.map(section => {
                    const sectionTools = filteredTools.filter(t => t.category === section.id);
                    if (sectionTools.length === 0) return null;

                    return (
                        <div key={section.id}>
                            <div className="flex items-center gap-3 mb-6">
                                <h2 className="text-xl font-bold text-slate-200">{section.title}</h2>
                                <div className="h-px bg-slate-800 flex-1"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {sectionTools.map(tool => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))}
                            </div>
                        </div>
                    )
                })}

             </div>

             {/* Call to Action Section */}
             <div className="mt-16 mb-8 text-center">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
                    <Mail className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-white mb-2">Want Your Tool Featured?</h2>
                    <p className="text-slate-400 mb-4">
                        Do you want your tool to be tested and listed here? Drop me an email.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href="mailto:david@saleshousestack.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Contact Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/davidvaran/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors border border-slate-700"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                    </div>
                </div>
             </div>
        </div>
    );
};

const MetricsCalculator = () => {
    const [emailsPerDay, setEmailsPerDay] = useState(50);
    const [numDomains, setNumDomains] = useState(3);
    const [acv, setAcv] = useState(1500);
    const [closeRate, setCloseRate] = useState(15);

    // Calculations
    const emailsPerMonth = emailsPerDay * 22; // 22 working days
    const totalEmailsPerMonth = emailsPerMonth * numDomains;
    const opens = Math.round(totalEmailsPerMonth * 0.35); // 35% open rate
    const replies = Math.round(totalEmailsPerMonth * 0.03); // 3% reply rate
    const meetings = Math.round(totalEmailsPerMonth * 0.015); // 1.5% meeting rate
    const deals = Math.round(meetings * (closeRate / 100));
    const revenue = deals * acv;

    return (
        <div className="space-y-6">
            {/* Input Controls */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2">
                            Emails per day (per inbox)
                        </label>
                        <input
                            type="range"
                            min="20"
                            max="100"
                            value={emailsPerDay}
                            onChange={(e) => setEmailsPerDay(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <div className="flex justify-between mt-1">
                            <span className="text-xs text-slate-500">20</span>
                            <span className="text-sm font-bold text-indigo-400">{emailsPerDay}</span>
                            <span className="text-xs text-slate-500">100</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2">
                            Number of domains (inboxes)
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="9"
                            value={numDomains}
                            onChange={(e) => setNumDomains(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <div className="flex justify-between mt-1">
                            <span className="text-xs text-slate-500">1</span>
                            <span className="text-sm font-bold text-indigo-400">{numDomains}</span>
                            <span className="text-xs text-slate-500">9</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2">
                            Average Deal Value (ACV)
                        </label>
                        <input
                            type="range"
                            min="500"
                            max="10000"
                            step="500"
                            value={acv}
                            onChange={(e) => setAcv(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <div className="flex justify-between mt-1">
                            <span className="text-xs text-slate-500">$500</span>
                            <span className="text-sm font-bold text-indigo-400">${acv.toLocaleString()}</span>
                            <span className="text-xs text-slate-500">$10k</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-300 mb-2">
                            Close Rate (%)
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="20"
                            value={closeRate}
                            onChange={(e) => setCloseRate(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <div className="flex justify-between mt-1">
                            <span className="text-xs text-slate-500">1%</span>
                            <span className="text-sm font-bold text-indigo-400">{closeRate}%</span>
                            <span className="text-xs text-slate-500">20%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Display */}
            <div className="grid md:grid-cols-5 gap-4 pt-6 border-t border-slate-800">
                <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-2xl font-bold text-slate-300 mb-1">{totalEmailsPerMonth.toLocaleString()}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Emails/Mo</div>
                </div>

                <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-2xl font-bold text-slate-300 mb-1">{opens.toLocaleString()}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Opens (35%)</div>
                </div>

                <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-2xl font-bold text-slate-300 mb-1">{replies.toLocaleString()}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Replies (3%)</div>
                </div>

                <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-2xl font-bold text-slate-300 mb-1">{meetings}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Meetings (1.5%)</div>
                </div>

                <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">${revenue.toLocaleString()}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Revenue/Mo</div>
                </div>
            </div>

            {/* Breakdown Explanation */}
            <div className="p-4 bg-slate-950/30 rounded-lg border border-slate-800">
                <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-300">How this works:</strong> {emailsPerDay} emails/day × {numDomains} inboxes × 22 working days = {totalEmailsPerMonth.toLocaleString()} emails/month.
                    At standard rates (35% open, 3% reply, 1.5% meeting) you get {meetings} demos. With {closeRate}% close rate at ${acv.toLocaleString()} ACV = <strong className="text-indigo-400">${revenue.toLocaleString()}/month potential revenue</strong>.
                </p>
            </div>
        </div>
    );
};

const StrategiesPage = () => {
    // State to track checked items - load from localStorage on mount
    const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('saleshouse-checklist-progress');
            return saved ? JSON.parse(saved) : {};
        }
        return {};
    });

    // Save to localStorage whenever checkedItems changes
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('saleshouse-checklist-progress', JSON.stringify(checkedItems));
        }
    }, [checkedItems]);

    const toggleStep = (stepId: string) => {
        setCheckedItems(prev => ({
            ...prev,
            [stepId]: !prev[stepId]
        }));
    };

    return (
        <div className="bg-[#020617] min-h-screen">
            <div className="mb-10 text-center md:text-left px-6 max-w-7xl mx-auto pt-6">
                <h1 className="text-3xl font-bold text-white mb-4">From Zero to Booked Calendar</h1>
                <p className="text-xl text-slate-400 max-w-3xl">
                    The playbook that generates 50 qualified leads per month for B2B SaaS companies - without cold calling or manual prospecting.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 px-6 max-w-7xl mx-auto">
            {STRATEGIES.map(strategy => {
                const totalSteps = strategy.steps?.length || 0;
                const completedSteps = strategy.steps?.filter((_, idx) => checkedItems[`${strategy.id}-${idx}`]).length || 0;
                const progress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;

                return (
                    <div key={strategy.id} className="bg-slate-900 rounded-xl border border-indigo-500 shadow-xl shadow-indigo-500/10 overflow-hidden">
                    {/* Header Card */}
                    <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h2 className="text-xl font-bold text-white">{strategy.title}</h2>
                            </div>
                            <p className="text-slate-400 text-sm">{strategy.summary}</p>
                        </div>

                        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                            {/* Progress Visual */}
                            {totalSteps > 0 && (
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-xs font-bold text-indigo-400">{Math.round(progress)}% Complete</span>
                                    <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content - Always Visible */}
                    <div className="border-t border-slate-800 bg-slate-950/30 p-6 md:p-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Left: Checklist */}
                                <div className="md:col-span-2">
                                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <ListTodo className="w-4 h-4 text-indigo-500" /> Execution Checklist
                                    </h3>
                                    <div className="space-y-3">
                                        {strategy.steps && strategy.steps.length > 0 ? (
                                            strategy.steps.map((step, idx) => {
                                                const stepId = `${strategy.id}-${idx}`;
                                                const isChecked = checkedItems[stepId];

                                                // Extract time estimate from step text
                                                const match = step.match(/^(.+?)\s*\(([^)]+)\)$/);
                                                const stepText = match ? match[1] : step;
                                                const timeEstimate = match ? match[2] : null;

                                                return (
                                                    <div
                                                        key={idx}
                                                        onClick={() => toggleStep(stepId)}
                                                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${isChecked ? 'bg-indigo-900/10 border-indigo-500/30' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}
                                                    >
                                                        <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isChecked ? 'bg-indigo-500 border-indigo-500' : 'border-slate-600'}`}>
                                                            {isChecked && <Check className="w-3 h-3 text-white" />}
                                                        </div>
                                                        <span className={`flex-1 text-sm ${isChecked ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                                                            {stepText}
                                                        </span>
                                                        {timeEstimate && (
                                                            <span className={`text-xs shrink-0 ${isChecked ? 'text-slate-600' : 'text-slate-500'}`}>
                                                                {timeEstimate}
                                                            </span>
                                                        )}
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            <p className="text-slate-500 text-sm italic">No specific steps defined for this strategy.</p>
                                        )}
                                    </div>
                                </div>

                                {/* Right: Stack & Focus */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Recommended Stack</h3>
                                        <div className="space-y-2">
                                            {strategy.recommendedStack.map(toolId => {
                                                const tool = TOOLS.find(t => t.id === toolId);
                                                return tool ? (
                                                    <a href={tool.website} target="_blank" rel="noopener noreferrer" key={toolId} className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-colors group">
                                                        <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
                                                        <span className="text-sm font-medium text-slate-300 group-hover:text-white">{tool.name}</span>
                                                        <ExternalLink className="w-3 h-3 text-slate-600 ml-auto group-hover:text-indigo-400" />
                                                    </a>
                                                ) : null;
                                            })}
                                        </div>
                                    </div>
                                    
                                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                                         <div className="flex items-center gap-2 mb-2 text-indigo-400">
                                            <Target className="w-4 h-4" />
                                            <span className="text-xs font-bold uppercase">Focus Area</span>
                                         </div>
                                         <p className="text-sm text-slate-300 leading-relaxed">{strategy.focusArea}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                )
            })}
            </div>

            {/* Interactive Metrics Calculator - Separate Container */}
            <div className="px-6 max-w-7xl mx-auto">
            <div className="mt-6 bg-slate-900 rounded-xl border border-indigo-500 shadow-xl shadow-indigo-500/10 overflow-hidden">
                <div className="p-6 md:p-8">
                    <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-indigo-500/20 rounded-xl">
                        <div className="flex items-start gap-3 mb-6">
                            <BarChart3 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                            <div>
                                <h2 className="text-lg font-bold text-white mb-1">What Can I Expect?</h2>
                                <p className="text-slate-400 text-sm">Interactive calculator - adjust inputs to see your potential results</p>
                            </div>
                        </div>

                        {/* Calculator Component */}
                        <MetricsCalculator />
                    </div>
                </div>
            </div>
            </div>

            {/* What Happens Next - Separate Container */}
            <div className="px-6 max-w-7xl mx-auto">
            <div className="mt-6 bg-slate-900 rounded-xl border border-indigo-500 shadow-xl shadow-indigo-500/10 overflow-hidden">
                <div className="p-6 md:p-8">
                    <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                        <div className="flex items-start gap-3 mb-4">
                            <AlertCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                            <h2 className="text-lg font-bold text-white">What Happens Next?</h2>
                        </div>
                        <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                            <p>
                                Once you complete this setup, you have the <strong className="text-white">fundamentals for an outbound top-of-funnel engine</strong>. The only remaining decision is your conversion path based on ticket size.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="text-indigo-400">→</span> Self-Service Path
                                    </h3>
                                    <p className="text-xs text-slate-400">For lower ACV products (&lt;$1.5k). Direct leads to sign-up or trial pages.</p>
                                </div>
                                <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="text-indigo-400">→</span> Demo/Discovery Path
                                    </h3>
                                    <p className="text-xs text-slate-400">For higher ACV ($1.5k+). Book demos to understand needs and qualify prospects.</p>
                                </div>
                            </div>

                            <p>
                                <strong className="text-white">Why demos matter at $1.5k+ ACV:</strong> Beyond the revenue, discovery calls give you critical insights into your audience's pain points, buying process, and objections. This intelligence loop refines your messaging over time.
                            </p>

                            <p className="text-slate-400 italic">
                                If you're a senior sales professional, you already know this. You're using this playbook to <strong className="text-slate-300">scale top-funnel volume</strong> while maintaining quality conversations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* My Current Favourite Sales Stack */}
            <section id="featured-stack" className="mt-6 py-16 bg-slate-950 text-white px-6 border-b border-slate-900 relative">
                <div className="absolute inset-0 bg-indigo-950/10"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">My Current Favourite Sales Stack</h2>
                            <p className="text-slate-400 max-w-xl text-lg">
                                A lean, proven system that actually works. No bloat, no vendor lock-in, just tools that do their job.
                            </p>
                        </div>
                        <Link to="/library" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                            View All Tools <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {TOOLS.filter(t => ['clay', 'reply', 'hubspot', 'mailforge'].includes(t.id)).map(tool => (
                            <ToolCard key={tool.id} tool={tool} showChannels={false} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto bg-slate-900 rounded-xl border border-slate-800 p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Help or Have Questions?</h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                        Feel free to drop me an email or a message on LinkedIn if you need some ideas or suggestions.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:david@saleshousestack.com"
                            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            Send Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/davidvaran/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            {/* Get The Full Playbook */}
            <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-6 border-t border-slate-900">
                <div className="max-w-4xl mx-auto bg-slate-950/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="flex-1 relative z-10">
                        <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                            Free Resource
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Get The Full Playbook</h2>
                        <p className="text-indigo-200 text-lg mb-6 leading-relaxed">
                            It's a full Notion setup for getting started with outbound, including message templates, Clay setup, checklist.
                        </p>
                        <a
                            href="https://tally.so/r/mDOGeq"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10"
                        >
                            <Download className="w-4 h-4" /> Get The Playbook
                        </a>
                    </div>
                    <div className="w-full md:w-1/3 relative z-10">
                        <div className="bg-slate-900/50 p-1 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10 backdrop-blur-sm">
                            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center text-slate-500">
                                <FileText className="w-12 h-12 mb-2 text-indigo-400" />
                                <span className="font-mono text-xs text-slate-400">Notion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const PrivacyPolicyPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-[#020617] min-h-screen">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
                <p className="text-slate-400 text-sm">Last Updated: January 2, 2025</p>
            </div>

            <div className="prose prose-invert prose-slate max-w-none space-y-8">
                {/* Introduction */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <p className="text-slate-300 leading-relaxed">
                        Sales House ("we," "us," or "our") operates saleshousestack.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-4">
                        By using Sales House, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use our services.
                    </p>
                </section>

                {/* Information We Collect */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">1.</span> Information We Collect
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Personal Information</h3>
                            <p className="text-slate-300 leading-relaxed">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1 ml-4">
                                <li>Subscribe to our newsletter or email list</li>
                                <li>Schedule a consultation or meeting through Calendly</li>
                                <li>Contact us via email or contact forms</li>
                                <li>Participate in surveys or promotions</li>
                            </ul>
                            <p className="text-slate-300 leading-relaxed mt-3">
                                This information may include: email address, name, company name, and any other information you choose to provide.
                            </p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-white mb-2">Automatically Collected Information</h3>
                            <p className="text-slate-300 leading-relaxed">
                                When you visit our website, we automatically collect certain information about your device and browsing actions, including:
                            </p>
                            <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1 ml-4">
                                <li>IP address and general location data</li>
                                <li>Browser type and version</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website addresses</li>
                                <li>Device information (operating system, screen resolution)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* How We Use Your Information */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">2.</span> How We Use Your Information
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                        <li>Send you our newsletter, sales tactics, and product recommendations</li>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Schedule and manage consultations or meetings</li>
                        <li>Improve our website content, layout, and services</li>
                        <li>Analyze website usage and trends</li>
                        <li>Send promotional communications (you can opt-out at any time)</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </section>

                {/* Third-Party Services */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">3.</span> Third-Party Services
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        We use the following third-party services that may collect, use, and process your data:
                    </p>

                    <div className="space-y-4">
                        <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                            <h3 className="text-base font-bold text-white mb-2">Klaviyo (Email Marketing)</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                We use Klaviyo to manage our email marketing and newsletter subscriptions. When you subscribe to our newsletter, your email address and any provided information is stored and processed by Klaviyo.
                            </p>
                            <p className="text-slate-400 text-xs mt-2">
                                Privacy Policy: <a href="https://www.klaviyo.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">https://www.klaviyo.com/legal/privacy</a>
                            </p>
                        </div>

                        <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                            <h3 className="text-base font-bold text-white mb-2">Calendly (Scheduling)</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                We use Calendly to manage meeting and consultation scheduling. When you book a meeting, Calendly collects your name, email address, and any other information you provide in the booking form.
                            </p>
                            <p className="text-slate-400 text-xs mt-2">
                                Privacy Policy: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">https://calendly.com/privacy</a>
                            </p>
                        </div>

                        <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                            <h3 className="text-base font-bold text-white mb-2">Analytics Services</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                We may use analytics services to understand how visitors interact with our website. These services use cookies and similar tracking technologies to collect usage data.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Cookies and Tracking */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">4.</span> Cookies and Tracking Technologies
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are stored on your device.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        We use cookies to: remember your preferences, understand website usage patterns, and provide personalized content.
                    </p>
                </section>

                {/* Affiliate Disclosure */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">5.</span> Affiliate Links and Commissions
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Sales House is reader-supported. Our website contains affiliate links to third-party products and services. When you click on these links and make a purchase, we may earn a commission at no extra cost to you.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-3">
                        We only recommend tools and services that we personally use, test, and verify. Our affiliate relationships do not influence our editorial content or recommendations.
                    </p>
                </section>

                {/* Data Retention */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">6.</span> Data Retention
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-3">
                        When you unsubscribe from our email list, we will remove your information from our active databases within a reasonable timeframe, though some information may remain in backup archives.
                    </p>
                </section>

                {/* Your Rights */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">7.</span> Your Privacy Rights
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                        <li><strong className="text-white">Access:</strong> Request a copy of the personal data we hold about you</li>
                        <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete data</li>
                        <li><strong className="text-white">Deletion:</strong> Request deletion of your personal data</li>
                        <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
                        <li><strong className="text-white">Data Portability:</strong> Request a copy of your data in a portable format</li>
                        <li><strong className="text-white">Objection:</strong> Object to processing of your personal data</li>
                    </ul>
                    <p className="text-slate-300 leading-relaxed mt-4">
                        To exercise any of these rights, please contact us at <a href="mailto:david@saleshousestack.com" className="text-indigo-400 hover:underline">david@saleshousestack.com</a>
                    </p>
                </section>

                {/* Data Security */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">8.</span> Data Security
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
                    </p>
                </section>

                {/* Children's Privacy */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">9.</span> Children's Privacy
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                    </p>
                </section>

                {/* International Data Transfers */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">10.</span> International Data Transfers
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from your country's laws.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-3">
                        By using our services, you consent to the transfer of your information to the United States and other countries where our service providers operate.
                    </p>
                </section>

                {/* Changes to Privacy Policy */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">11.</span> Changes to This Privacy Policy
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-3">
                        You are advised to review this Privacy Policy periodically for any changes. Changes are effective when posted on this page.
                    </p>
                </section>

                {/* Contact Information */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">12.</span> Contact Us
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                        <p className="text-slate-300 leading-relaxed">
                            <strong className="text-white">Email:</strong> <a href="mailto:david@saleshousestack.com" className="text-indigo-400 hover:underline">david@saleshousestack.com</a>
                        </p>
                        <p className="text-slate-300 leading-relaxed mt-2">
                            <strong className="text-white">Website:</strong> <a href="https://saleshousestack.com" className="text-indigo-400 hover:underline">https://saleshousestack.com</a>
                        </p>
                    </div>
                </section>
            </div>

            {/* Back to Home Link */}
            <div className="mt-12 text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

const TermsOfServicePage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-[#020617] min-h-screen">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
                <p className="text-slate-400 text-sm">Last Updated: January 2, 2025</p>
            </div>

            <div className="prose prose-invert prose-slate max-w-none space-y-8">
                {/* Introduction */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <p className="text-slate-300 leading-relaxed">
                        Welcome to Sales House ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of saleshousestack.com (the "Website") and all related services, content, and materials provided by us.
                    </p>
                    <p className="text-slate-300 leading-relaxed mt-4">
                        By accessing or using our Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
                    </p>
                </section>

                {/* Acceptance of Terms */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">1.</span> Acceptance of Terms
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        By accessing and using Sales House, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the Website.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        If you are using our services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                    </p>
                </section>

                {/* Use of Service */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">2.</span> Use of Service
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Permitted Use</h3>
                            <p className="text-slate-300 leading-relaxed">
                                You may use our Website for lawful purposes only. You agree to use the Website in compliance with all applicable laws and regulations.
                            </p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-white mb-2">Prohibited Activities</h3>
                            <p className="text-slate-300 leading-relaxed mb-3">
                                You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                <li>Use the Website for any illegal purpose or in violation of any laws</li>
                                <li>Attempt to gain unauthorized access to our systems or networks</li>
                                <li>Interfere with or disrupt the Website or servers</li>
                                <li>Transmit any viruses, malware, or harmful code</li>
                                <li>Scrape, copy, or harvest content without permission</li>
                                <li>Impersonate any person or entity</li>
                                <li>Use automated systems to access the Website without consent</li>
                                <li>Engage in any activity that could harm our reputation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Intellectual Property */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">3.</span> Intellectual Property Rights
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        All content on Sales House, including but not limited to text, graphics, logos, images, software, and other materials, is the property of Sales House or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our Website without our prior written permission.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        The Sales House name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Sales House. You may not use these marks without our prior written permission.
                    </p>
                </section>

                {/* User Content */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">4.</span> User Content and Feedback
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        If you provide feedback, suggestions, comments, or other input to us ("Feedback"), you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, and incorporate such Feedback into our services without any obligation to you.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Any testimonials, reviews, or endorsements you provide may be used by us for marketing purposes without compensation to you.
                    </p>
                </section>

                {/* Third-Party Links and Services */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">5.</span> Third-Party Links and Services
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        Our Website contains links to third-party websites and services, including tools we recommend. These links are provided for your convenience only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites or services.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Your interactions with third-party websites and services are solely between you and the third party. We encourage you to review the terms and privacy policies of any third-party services you access through our Website.
                    </p>
                </section>

                {/* Affiliate Relationships */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">6.</span> Affiliate Relationships
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        Sales House participates in affiliate marketing programs. We may earn commissions from purchases made through affiliate links on our Website. These affiliate relationships do not influence our editorial content or recommendations.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        We only recommend products and services that we have personally tested and believe will provide value to our users. However, we cannot guarantee specific results from using any recommended tools or services.
                    </p>
                </section>

                {/* Disclaimer of Warranties */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">7.</span> Disclaimer of Warranties
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        THE WEBSITE AND ALL CONTENT, SERVICES, AND MATERIALS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                    </p>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                        <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                        <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
                        <li>Warranties that the Website will be uninterrupted, secure, or error-free</li>
                        <li>Warranties regarding results obtained from using the Website or recommended tools</li>
                    </ul>
                </section>

                {/* Limitation of Liability */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">8.</span> Limitation of Liability
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, SALES HOUSE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
                        <li>Your use or inability to use the Website</li>
                        <li>Any unauthorized access to or use of our servers</li>
                        <li>Any bugs, viruses, or malicious code transmitted through the Website</li>
                        <li>Any errors or omissions in any content</li>
                        <li>Your purchase or use of any third-party products or services</li>
                        <li>Any results or outcomes from following our recommendations</li>
                    </ul>
                    <p className="text-slate-300 leading-relaxed">
                        IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID US IN THE PAST TWELVE MONTHS, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
                    </p>
                </section>

                {/* Indemnification */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">9.</span> Indemnification
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        You agree to indemnify, defend, and hold harmless Sales House and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
                    </p>
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mt-3">
                        <li>Your use of the Website</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any rights of another party</li>
                        <li>Any content you submit or transmit through the Website</li>
                    </ul>
                </section>

                {/* Email Communications */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">10.</span> Email Communications and Newsletter
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        By subscribing to our newsletter or providing your email address, you consent to receive marketing communications from us. You may unsubscribe at any time by clicking the unsubscribe link in our emails or contacting us directly.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        We reserve the right to send you transactional or administrative emails regarding your account or our services, even if you have unsubscribed from marketing communications.
                    </p>
                </section>

                {/* Changes to Terms */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">11.</span> Changes to Terms of Service
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Your continued use of the Website after any changes constitutes acceptance of the new Terms. It is your responsibility to review these Terms periodically.
                    </p>
                </section>

                {/* Termination */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">12.</span> Termination
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        We reserve the right to terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Upon termination, your right to use the Website will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                    </p>
                </section>

                {/* Governing Law */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">13.</span> Governing Law and Dispute Resolution
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Any disputes arising from or relating to these Terms or your use of the Website shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court for intellectual property violations.
                    </p>
                </section>

                {/* Severability */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">14.</span> Severability and Waiver
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-3">
                        If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                </section>

                {/* Entire Agreement */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">15.</span> Entire Agreement
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        These Terms, together with our Privacy Policy, constitute the entire agreement between you and Sales House regarding your use of the Website and supersede all prior agreements and understandings.
                    </p>
                </section>

                {/* Contact Information */}
                <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-indigo-400">16.</span> Contact Information
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-4">
                        If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                        <p className="text-slate-300 leading-relaxed">
                            <strong className="text-white">Email:</strong> <a href="mailto:david@saleshousestack.com" className="text-indigo-400 hover:underline">david@saleshousestack.com</a>
                        </p>
                        <p className="text-slate-300 leading-relaxed mt-2">
                            <strong className="text-white">Website:</strong> <a href="https://saleshousestack.com" className="text-indigo-400 hover:underline">https://saleshousestack.com</a>
                        </p>
                    </div>
                </section>
            </div>

            {/* Back to Home Link */}
            <div className="mt-12 text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

const ConsultingPage = () => {
    return (
        <div className="p-6 max-w-6xl mx-auto bg-[#020617] min-h-screen">
            {/* Hero Section */}
            <div className="mb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Fractional Sales Leadership</h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    Get enterprise-grade sales strategy and execution without the enterprise price tag.
                    I help solopreneurs and small teams build scalable outbound systems that actually fill calendars.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-indigo-500/30 transition-all">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3">Stack Setup & Advisory</h2>
                    <p className="text-slate-400 leading-relaxed mb-4">
                        Complete sales stack implementation with ongoing optimization. From initial setup to continuous campaign refinement and scaling support.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> Stack audit & tool setup
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> Campaign sequence design
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> Weekly performance reviews
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> Copywriting & A/B testing
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-indigo-500/30 transition-all">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3">RevOps Strategy</h2>
                    <p className="text-slate-400 leading-relaxed mb-4">
                        End-to-end revenue operations design: from lead routing and pipeline stages to reporting dashboards and forecasting models.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> CRM architecture & automation
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> Sales process documentation
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> Pipeline & forecast reporting
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> Team onboarding & training
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-indigo-500/30 transition-all">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                        <BarChart3 className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3">Sales Strategy</h2>
                    <p className="text-slate-400 leading-relaxed mb-4">
                        Comprehensive go-to-market strategy and sales motion design tailored to your ICP, deal size, and growth stage.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> GTM strategy & positioning
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> Sales playbook development
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> ICP refinement & segmentation
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-400">→</span> Competitive positioning
                        </li>
                    </ul>
                </div>
            </div>

            {/* Who This Is For */}
            <div className="mb-16 bg-gradient-to-br from-indigo-950/30 to-purple-950/20 rounded-2xl border border-indigo-500/20 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Who This Is For</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-indigo-400 font-bold">✓</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Founders</h3>
                            <p className="text-slate-400 text-sm">
                                You know your product solves a real problem, but you don't have time to become a sales ops expert. You need a system that runs while you focus on delivery.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-indigo-400 font-bold">✓</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Small Sales Teams (2-10)</h3>
                            <p className="text-slate-400 text-sm">
                                Your team is spending too much time on manual prospecting. You need automation, but you don't know which tools to pick or how to integrate them.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-indigo-400 font-bold">✓</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">B2B SaaS Companies</h3>
                            <p className="text-slate-400 text-sm">
                                You're targeting North America, LATAM, or EMEA markets with high-volume outbound. You need proven playbooks, not guesswork.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-indigo-400 font-bold">✓</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Agencies & Service Providers</h3>
                            <p className="text-slate-400 text-sm">
                                You sell retained services but struggle with consistent lead flow. You need a predictable outbound engine that books qualified calls on autopilot.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                    {/* Left Column: Bio & Stats */}
                    <div className="md:w-2/3 w-full flex flex-col gap-6 h-full">
                        {/* Bio Card */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden flex-shrink-0">
                            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                                <p>
                                    <strong className="text-white">I'm a Head of Sales + RevOps consultant</strong> with 5 years of Marketing experience and 6 years of Sales experience. I've built B2B teams and outbound systems targeting North America, LATAM, and EMEA.
                                </p>
                                <p>
                                    I built Sales House because I got tired of seeing founders burn cash on bloated teams and "all-in-one" tools that don't work. I share exactly what I use to book meetings.
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 flex-1">
                            {[
                                { icon: Phone, val: '100k+', label: 'Cold Calls' },
                                { icon: Trophy, val: '$1.5m+', label: 'ARR Closed Won' },
                                { icon: Mail, val: '500k+', label: 'Emails Sent' },
                                { icon: Calendar, val: '200+', label: 'Demos Booked' }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center hover:bg-slate-800/80 transition-all hover:border-slate-700 group h-full">
                                    <stat.icon className="w-6 h-6 text-indigo-400 mb-3 group-hover:scale-110 transition-transform opacity-80" />
                                    <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Profile Card */}
                    <div className="md:w-1/3 w-full flex min-h-[600px]">
                        <div className="rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 w-full shadow-2xl">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src="/david-profile.jpg"
                                    alt="David Varan, Sales Operations Consultant and Founder of Sales House"
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ objectPosition: 'center 20%' }}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-start">
                                <h3 className="text-3xl font-bold text-white mb-1">David</h3>
                                <p className="text-indigo-400 font-medium mb-6">Head of Sales & Creator</p>

                                <div className="w-full space-y-2">
                                    <a href="https://www.linkedin.com/in/davidvaran/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#0077b5] hover:bg-[#006399] text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-900/20">
                                        <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                                    </a>
                                    <a href="mailto:david@saleshousestack.com" className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-lg font-bold text-sm transition-all border border-white/10">
                                        <Mail className="w-4 h-4" /> Email Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">How We Work Together</h2>
                <div className="space-y-4">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-400">
                            1
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Discovery Call</h3>
                            <p className="text-slate-400">
                                We review your current setup, ICP, messaging, and goals. I'll identify immediate wins and long-term opportunities.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-400">
                            2
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Proposal & Scope</h3>
                            <p className="text-slate-400">
                                I'll send a detailed proposal with timeline, deliverables, and investment. You'll know exactly what to expect before we start.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-400">
                            3
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Execution</h3>
                            <p className="text-slate-400">
                                I build, configure, and test your entire stack. You'll get documentation, training videos, and live walkthroughs.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-400">
                            4
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">Launch & Optimization</h3>
                            <p className="text-slate-400">
                                Your first campaigns go live. I monitor performance, iterate on messaging, and train your team on daily operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/30 rounded-2xl border border-indigo-500/30 p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Outbound?</h2>
                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                    Book a 30-minute discovery call to see if we're a good fit. No sales pitch - just a real conversation about your challenges and goals.
                </p>
                <div className="max-w-4xl mx-auto min-h-[950px]">
                    <CalendlyEmbed />
                </div>
            </div>

            {/* Back to Home Link */}
            <div className="mt-12 text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

const FAQPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
                <p className="text-slate-400 text-lg">
                    Everything you need to know about building your outbound sales stack
                </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 mb-16">
                <FAQItem
                    question="How much does the complete outbound sales stack cost per month?"
                    answer="Up to $500 per month. If you skip a CRM, you can squeeze in under $350. However, when building a sales funnel, you'll want to follow up, create reminders, and track potential deals. If you're thinking long-term, don't skip the CRM. Most sales aren't accomplished through the first outreach - you'll be following up with the same contacts multiple times throughout a year until you land them."
                />

                <FAQItem
                    question="How long does it take to set up the full sales stack from scratch?"
                    answer="With my experience, I could get it up and running in under 5-6 hours. For most people who haven't worked with these platforms, I'd say a safe bet is under 2 working days. Take it easy, don't rush things, and do it properly so you won't have to redo everything."
                />

                <FAQItem
                    question="Do I need technical skills to set up these tools?"
                    answer="No, all the tools are fairly easy to use. It's pretty much like setting up your laptop or phone for the first time. It's really not rocket science."
                />

                <FAQItem
                    question="Can I start with just a few tools and add more later?"
                    answer="Yes, I recommend starting with Reply.io + Clay OR Apollo. This gives you a tool to outreach with plus contacts to work with. You'll need to buy a domain for outbound, but you'll be limited by the volume of emails you can send initially."
                />

                <FAQItem
                    question="How many demos per month can I realistically expect to book?"
                    answer="I won't make empty promises - this really depends on market, messaging, and targeting. It can be as low as 5, it can be as high as hundreds a month. From my experience in a market where you have some competition and you add 40-50 new contacts monthly, 15 to 20 demos is a healthy target."
                />

                <FAQItem
                    question="How long before I see results from outbound?"
                    answer="You'll see open rates the same day, reply rates within a few days. Realistically, within the first week, if you haven't gotten answers and your open rate is lower than 40%, work on the messaging - you probably have issues there."
                />

                <FAQItem
                    question="What's a good reply rate for cold emails?"
                    answer="3-5% is a good benchmark for cold email reply rates."
                />

                <FAQItem
                    question="What's included in your fractional sales leadership?"
                    answer="Audit, review, insights, recommendations, my hands-on work, and strategies. Every consultation I do is very case-by-case. We might be building just an outbound system, or in other cases, I might be helping you improve conversion rates, win rates, or recycle previous contacts. No company is identical, and I don't do cookie-cutter strategies."
                />

                <FAQItem
                    question="Do you set up the tools for me or just advise?"
                    answer="Either or both. I can consult, I can set everything up for you, or we can work together on implementation. It's flexible based on your needs."
                />

                <FAQItem
                    question="Should I hire an SDR or build this myself?"
                    answer="I would always recommend starting yourself first. Calculate how much an SDR costs locally. A good rule of thumb is if an SDR costs $2,000/month, they need to bring enough opportunities to generate $6,000 of revenue monthly - essentially a 3:1 ratio."
                />

                <FAQItem
                    question="What's the #1 mistake founders make with outbound sales?"
                    answer="Writing emails that read like a marketing campaign. Your goal is to message like a friend and say 'Hey, I see you're having issues with this, I have a solution, worth a chat?' Less is more."
                />

                <FAQItem
                    question="Do I need a big email list to get started?"
                    answer="It's subjective and depends on what verticals you're targeting. You might not have the privilege of a lot of contacts, so you need to be a bit more reserved on the scale of outreach and focus more on quality and follow-ups. But generally, we're speaking about thousands of contacts you can get from Clay, Apollo, or Lusha, so practically this isn't an area of concern."
                />
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/30 rounded-2xl border border-indigo-500/30 p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h2>
                <p className="text-slate-400 mb-6">
                    Book a free consultation call to discuss your specific situation
                </p>
                <Link
                    to="/consulting"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors"
                >
                    Book a Call
                </Link>
            </div>

            {/* Back to Home Link */}
            <div className="mt-12 text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaybookModalOpen, setIsPlaybookModalOpen] = useState(false);

  // Trigger Klaviyo form when modal opens
  useEffect(() => {
    if (isPlaybookModalOpen && window._klOnsite) {
      window._klOnsite = window._klOnsite || [];
      window._klOnsite.push(['openForm', 'SDqh4i']);
    }
  }, [isPlaybookModalOpen]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#020617] font-sans text-slate-100">
        
        {/* Top Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center shrink-0">
                         <Link to="/" className="flex items-center gap-2 group">
                             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(79,70,229,0.5)] group-hover:bg-indigo-500 transition-colors">
                                S
                             </div>
                             <span className="text-xl font-bold tracking-tight text-white">Sales House</span>
                         </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLink to="/" icon={LayoutDashboard} label="Home" />
                        <NavLink to="/library" icon={Library} label="Library" />
                        <NavLink to="/strategies" icon={Layers} label="Playbook" />
                        <NavLink to="/consulting" icon={Briefcase} label="Consulting" />
                        <div className="h-6 w-px bg-slate-800 mx-2"></div>
                        <button
                            onClick={() => setIsPlaybookModalOpen(true)}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                        >
                            <Download className="w-4 h-4" /> Get Playbook
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-400 hover:text-white p-2"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-2xl">
                    <NavLink to="/" icon={LayoutDashboard} label="Home" onClick={() => setIsMobileMenuOpen(false)} />
                    <NavLink to="/library" icon={Library} label="Library" onClick={() => setIsMobileMenuOpen(false)} />
                    <NavLink to="/strategies" icon={Layers} label="Playbook" onClick={() => setIsMobileMenuOpen(false)} />
                    <NavLink to="/consulting" icon={Briefcase} label="Consulting" onClick={() => setIsMobileMenuOpen(false)} />
                    <a 
                        href="https://tally.so/r/mDOGeq" 
                        target="_blank" 
                        rel="noreferrer"
                        className="block w-full text-left px-3 py-2 text-indigo-400 font-bold hover:bg-slate-800 rounded-lg"
                    >
                        Get Free Playbook
                    </a>
                </div>
            )}
        </nav>

        {/* Main Content Area - Full Width */}
        <main className="w-full">
            <Routes>
              <Route path="/" element={<HomePage setIsPlaybookModalOpen={setIsPlaybookModalOpen} />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/strategies" element={<StrategiesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/consulting" element={<ConsultingPage />} />
            </Routes>
        </main>

        <Footer />
      </div>

      {/* Playbook Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity ${isPlaybookModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsPlaybookModalOpen(false)}
      >
        <div
          className="relative bg-[#020617] rounded-2xl p-8 max-w-md w-full mx-4 border border-slate-800 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsPlaybookModalOpen(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Klaviyo Form */}
          <div className="klaviyo-form-SDqh4i"></div>
        </div>
      </div>
    </Router>
  );
};

export default App;
