
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
  TrendingUp,
  Building,
  Clock,
  Sparkles
} from 'lucide-react';
import { TOOLS, STRATEGIES } from './constants';
import { TeamSize, ToolCategory, Tool } from './types';
import { ToolCard } from './components/ToolCard';
import Breadcrumb from './components/Breadcrumb';

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
          : 'text-slate-600 hover:bg-slate-300 hover:text-slate-900'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </Link>
  );
};

const CalendlyEmbed = () => {
  const embedRef = React.useRef<HTMLDivElement>(null);
  const [scriptsLoaded, setScriptsLoaded] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);

  // Lazy load Calendly scripts when component mounts
  React.useEffect(() => {
    if (scriptsLoaded) return;

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setScriptsLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup if component unmounts before script loads
      if (script.parentNode) script.parentNode.removeChild(script);
      if (link.parentNode) link.parentNode.removeChild(link);
    };
  }, [scriptsLoaded]);

  // Initialize Calendly widget after scripts are loaded
  React.useEffect(() => {
    if (!scriptsLoaded || initialized || !embedRef.current) return;

    if (window.Calendly) {
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
  }, [scriptsLoaded, initialized]);

  return (
    <div ref={embedRef} style={{ minWidth: '320px', height: '950px' }}>
      {!scriptsLoaded && (
        <div className="flex items-center justify-center h-full">
          <div className="text-slate-600">Loading calendar...</div>
        </div>
      )}
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-100 border border-slate-300 rounded-xl overflow-hidden transition-colors hover:border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-start justify-between gap-4 group"
      >
        <h3 className="text-lg font-bold text-slate-900 flex items-start gap-2 flex-1">
          <span className="text-indigo-600 shrink-0">Q:</span>
          <span className="group-hover:text-indigo-600 transition-colors">{question}</span>
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-slate-600 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-700 leading-relaxed px-6 pb-6 ml-6">{answer}</p>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-300">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div>
          <Link to="/" className="flex items-center gap-2 group mb-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Sales House</span>
          </Link>
          <p className="text-sm text-slate-600 max-w-xs mb-3">Build your outbound engine. Simpler than you think. No agencies needed.</p>
          <a href="mailto:david@saleshousestack.com" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4" />
            david@saleshousestack.com
          </a>
          <a href="https://www.linkedin.com/in/davidvaran/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-4 uppercase text-xs tracking-wider">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/library" className="hover:text-indigo-600 transition-colors">Tool Library</Link></li>
            <li><Link to="/strategies" className="hover:text-indigo-600 transition-colors">Playbook</Link></li>
            <li><Link to="/reviews" className="hover:text-indigo-600 transition-colors">Tool Reviews</Link></li>
            <li><Link to="/comparisons" className="hover:text-indigo-600 transition-colors">Tool Comparisons</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-4 uppercase text-xs tracking-wider">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/consulting" className="hover:text-indigo-600 transition-colors">Consulting</Link></li>
            <li><Link to="/faq" className="hover:text-indigo-600 transition-colors">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2025 Sales House by David Varan. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const HomePage = ({ openPlaybookForm }: { openPlaybookForm: () => void }) => {
  const [showFullManifesto, setShowFullManifesto] = useState(false);

  return (
  <div className="flex flex-col">
    <Helmet>
      <title>Sales House - Tools, Reviews, Playbooks for Sales Pros</title>
      <meta name="description" content="Unbiased sales tool reviews and comparisons from 6+ years of hands-on experience. Get consulting to build the right stack for your stage." />
    </Helmet>
    {/* Hero Section - Simplified Single Column */}
    <section className="relative bg-[#FEFEFE] text-slate-900 pt-32 pb-24 px-6 overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05] text-slate-900">
                Reach the clients you need with the right outbound tools
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                Unbiased reviews, comparisons, and consulting from someone who's implemented these tools. From solo founder to 20-person teams.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link to="/library" className="px-10 py-5 bg-indigo-600 hover:bg-indigo-600 text-white text-xl font-bold rounded-xl shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all transform hover:-translate-y-1 flex items-center gap-3 border border-indigo-500">
                    Show Me The Best Tools <ArrowRight className="w-6 h-6" />
                </Link>
                <Link to="/strategies" className="px-10 py-5 bg-transparent hover:bg-slate-100 text-slate-700 text-xl font-semibold rounded-xl border-2 border-slate-300 transition-all flex items-center gap-3">
                    View Playbook
                </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    <span>No sponsored reviews</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    <span>6+ years experience</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo-600" />
                    <span>Updated December 2025</span>
                </div>
            </div>
        </div>
    </section>

    {/* What I Offer Section - HIDDEN FOR NOW */}
    {/*
    <section className="py-20 bg-slate-50 border-b border-slate-300">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="relative bg-slate-100 border-2 border-indigo-500/50 rounded-xl p-8 hover:border-indigo-500 transition-all shadow-lg shadow-indigo-500/20">
                    <div className="absolute -top-3 left-6 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        START HERE
                    </div>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-3xl">⭐</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Tool Reviews</h3>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                        Honest tool reviews from 6+ years of hands-on experience.
                    </p>
                    <Link to="/library" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-600 text-white font-bold rounded-lg transition-all">
                        Browse Library <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/30 transition-all">
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-3xl">⚖️</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Tool Comparisons</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Side-by-side comparisons of sales tools. Know what you're paying for before you commit.
                    </p>
                    <Link to="/comparisons" className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2">
                        See Comparisons <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/30 transition-all">
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-3xl">💼</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">1:1 Consulting</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Book a call to audit your current stack, get recommendations, or plan your implementation.
                    </p>
                    <Link to="/consulting" className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2">
                        Book Consulting <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    </section>
    */}

    {/* Featured Tools Teaser (Moved UP) */}
    <section id="featured-stack" className="py-24 bg-slate-50 text-slate-900 px-6 border-b border-slate-200 relative">
        <div className="absolute inset-0 bg-indigo-950/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-bold mb-2">My Recommended Stack (December 2025)</h2>
                    <p className="text-slate-600 text-sm">Tested, trusted, and currently in use</p>
                </div>
                <Link to="/library" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
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
    <section className="py-20 bg-[#FEFEFE] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
             <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-slate-900">A Realistic Cost of Scaling for Founders</h2>
                <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
                    If you have more than a few functional braincells, this setup can be done in less than a few days. 
                    It is significantly cheaper than hiring a dedicated person, and more reliable than hoping for a viral TikTok post or blasting ads on Facebook.
                </p>
             </div>

             <div className="bg-slate-100 border border-slate-300 rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                    {[
                        { name: 'HubSpot', cost: '$0 - $119', period: '/mo', icon: LayoutDashboard, link: 'https://www.hubspot.com' },
                        { name: 'Clay', cost: '$149', period: '/mo', icon: Database, link: 'https://clay.com?via=c74a80' },
                        { name: 'Reply.io', cost: '$99', period: '/mo', icon: Megaphone, link: 'https://get.reply.io/scaleoutbound' },
                        { name: 'Mailforge', cost: '$39', period: '/mo', icon: ShieldCheck, link: 'https://www.mailforge.ai/?via=outboundsales' },
                        { name: 'Apollo', cost: '$0 - $119', period: '/mo', icon: Target, link: 'https://get.apollo.io/scaleoutbound' },
                    ].map((item, idx) => (
                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="p-6 flex flex-col items-center text-center hover:bg-slate-300/70 transition-all duration-300 group cursor-pointer">
                            <div className="mb-4 p-3 bg-slate-200 rounded-full text-slate-600 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all duration-300" aria-hidden="true">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-slate-900 font-bold mb-1">{item.name}</h3>
                            <div className="text-xl font-bold text-indigo-600 mb-2">
                                {item.cost}<span className="text-xs text-slate-600 font-medium ml-1">{item.period}</span>
                            </div>
                            <span className="text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                Try for Free →
                            </span>
                        </a>
                    ))}
                </div>
                <div className="bg-slate-50/50 p-6 border-t border-slate-300 text-center">
                     <p className="text-slate-600 text-sm">
                        <AlertCircle className="w-4 h-4 inline-block mr-2 text-indigo-500" />
                        Total Stack Cost: <strong>~$350 - $500/mo</strong> vs. <strong>$4,500/mo</strong> for a single SDR.
                     </p>
                </div>
             </div>
        </div>
    </section>

    {/* Social Proof - Companies */}
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05),transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    Experience Across SaaS Companies & Team Sizes
                </h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        I've worked across SaaS, Fintech, and Traditional sales companies from early-stage to scale-up—spanning from <strong className="text-slate-900">5-figure ARR startups - 7-figure ARR companies</strong>. I've set up sales operations for:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white border-2 border-indigo-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-indigo-600 font-bold mb-2">Solo founders</div>
                            <div className="text-sm text-slate-600">Just you + a few freelancers</div>
                        </div>
                        <div className="bg-white border-2 border-indigo-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-indigo-600 font-bold mb-2">Small teams</div>
                            <div className="text-sm text-slate-600">1-10 SDRs/AEs</div>
                        </div>
                        <div className="bg-white border-2 border-indigo-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-indigo-600 font-bold mb-2">Growing teams</div>
                            <div className="text-sm text-slate-600">10-20 people, multiple roles</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mb-8">
                <p className="text-slate-600 text-sm uppercase tracking-wider">Companies I've Worked With</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                    { name: 'SORSEO', logo: '/client logos/sor_seo_logo.jpeg' },
                    { name: 'Whatagraph', logo: '/client logos/whatagraph_logo.jpeg' },
                    { name: 'RoyaltyRange', logo: '/client logos/royaltyrange_logo.jpeg' },
                    { name: 'GPSWOX', logo: '/client logos/gpswox_logo.jpeg' },
                    { name: 'Walk15', logo: '/client logos/walk15_logo.jpeg' },
                    { name: 'CTO2B', logo: '/client logos/cto2b_logo.jpeg' },
                    { name: 'HEMES', logo: '/client logos/hemes1_logo.jpeg' },
                    { name: 'Glassique Cadeau', logo: '/client logos/glassique_logo.png' },
                    { name: 'Finfra', logo: '/client logos/finfra_logo.jpeg' },
                    { name: '+ 10 other', logo: null }
                ].map((company) => (
                    <div
                        key={company.name}
                        className={`group relative bg-white border border-slate-300 rounded-xl p-4 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 flex items-center shadow-sm hover:shadow-md ${company.logo ? 'gap-3' : 'justify-center'}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300"></div>
                        {company.logo && (
                            <img
                                src={company.logo}
                                alt={`${company.name} logo`}
                                className="w-8 h-8 object-contain shrink-0 relative z-10"
                            />
                        )}
                        <span className="text-slate-900 font-semibold text-sm md:text-base transition-colors duration-300 relative z-10">
                            {company.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </section>

     {/* Meet The Expert Section */}
    <section className="py-24 bg-slate-50 relative border-b border-slate-200">
         <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 items-stretch">

                {/* Left Column: Bio & Stats */}
                <div className="md:w-2/3 w-full flex flex-col gap-6 h-full">
                    
                    {/* Bio Card */}
                    <div className="bg-slate-100 border border-slate-300 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden flex-shrink-0">
                         <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600"></div>
                         <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                            <p>
                                <strong className="text-slate-900">I'm a Head of Sales + RevOps consultant</strong> with under 5 years of Marketing experience and 6+ years of Sales experience. I've built B2B teams and outbound systems targeting North America, LATAM, and EMEA.
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
                             <div key={idx} className="bg-slate-100 p-6 rounded-2xl border border-slate-300 flex flex-col items-center justify-center text-center hover:bg-slate-300/80 transition-all hover:border-slate-200 group h-full">
                                <stat.icon className="w-6 h-6 text-indigo-600 mb-3 group-hover:scale-110 transition-transform opacity-80" />
                                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.val}</div>
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Profile Card - Full Image Background */}
                <div className="md:w-1/3 w-full flex min-h-[600px]">
                    <div className="rounded-2xl border border-slate-300 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 w-full shadow-2xl">
                        {/* Background Image - Full Size */}
                        <div className="absolute inset-0">
                             <img
                                src="/david-profile.jpg"
                                alt="David Varan, Sales Operations Consultant and Founder of Sales House"
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                style={{ objectPosition: 'center 20%' }}
                            />
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/60 to-transparent"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-start">
                            <h3 className="text-3xl font-bold text-white mb-1">David</h3>
                            <p className="text-indigo-300 font-medium mb-6">Head of Sales & Creator</p>

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
    <section className="py-20 px-6 bg-[#FEFEFE] border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Outbound?</h2>
        </div>
        
        {/* Condensed Comparison Grid - Always Visible */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Paid Advertising */}
            <div className="bg-white p-6 rounded-2xl border border-red-300 relative overflow-hidden h-full shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span> Paid Advertising
                </h3>
                
                <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">The Bad</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5"/> Pay to learn</li>
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5"/> Bot traffic</li>
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-0.5"/> At scale: diminishing returns</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">The Good</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Fast top-of-funnel scale (if budget is big)</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Easy to test multiple ICPs (if you enjoy burning money)</li>
                    </ul>
                </div>
            </div>

             {/* Organic Marketing */}
            <div className="bg-white p-6 rounded-2xl border border-orange-300 relative overflow-hidden h-full shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/50"></div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span> Organic Marketing
                </h3>

                <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">The Bad</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"/> 6-18 months delayed ROI</li>
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"/> Google controls your fate</li>
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"/> Requires heavy consistency</li>
                        <li className="flex items-start gap-2"><X className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"/> Hard to track real attribution</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">The Good</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Long-term compounding ROI (if it hits)</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Lower maintenance (after years of effort)</li>
                    </ul>
                </div>
            </div>

            {/* Outbound */}
            <div className="bg-white p-6 rounded-2xl border-2 border-indigo-400 relative overflow-hidden shadow-lg shadow-indigo-200 h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600"></div>
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span> Outbound (My Way)
                </h3>
                
                <div className="mb-6">
                    <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-3">The Great</h4>
                    <ul className="space-y-2 text-slate-700 text-sm">
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5"/> Full control over volume and targeting</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5"/> Works with zero brand awareness</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5"/> Direct line to decision-makers</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5"/> Instant validation & low upfront cost</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5"/> Highest ROI channel in B2B</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5"/> Re-usable engine</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">The Reality</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Requires experience (which I'm sharing)</li>
                        <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Can burn lists if done badly</li>
                        <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Needs regular optimization</li>
                        <li className="flex items-start gap-2"><AlertCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> Requires thick skin (You'll get told off)</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Read More Button */}
        {!showFullManifesto && (
             <div className="text-center">
                <button
                    onClick={() => setShowFullManifesto(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-lg transition-colors font-medium border border-slate-200"
                >
                    Read Full Manifesto <ChevronDown className="w-4 h-4" />
                </button>
             </div>
        )}
        
        {/* Expanded Content */}
        {showFullManifesto && (
            <div className="animate-fadeIn">
                <div className="prose prose-lg prose-invert text-slate-600 leading-relaxed space-y-6 mx-auto">
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
                    
                    <h2 className="text-xl font-bold text-slate-900 mt-8">The Vibecoder Advantage</h2>
                    <p>
                        Also, if you're a serial entrepreneur, vibecoder, or running affiliate programs - the whole tool stack is reusable. You probably won't want to re-use the CRM, as different products = different markets, but the whole outbound strategy can be re-used.
                    </p>
                </div>

                {/* Transparency Section */}
                <div className="mt-12 bg-slate-100 rounded-2xl p-8 border border-slate-300">
                    <div className="flex items-start gap-4">
                        <Heart className="w-6 h-6 text-rose-500 shrink-0 mt-1 fill-rose-500/10" />
                        <div>
                        <h2 className="text-lg font-bold text-slate-900 mb-2">Full Transparency: What's in it for me?</h2>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Generally, as I've been getting more and more questions on these topics, writing the same messages and sharing the same insights, I decided it just makes sense to put together a form of a library where I can share what tools I've used and what are my thoughts about them. All I'm getting in return from this is a small kickback from some of the affiliate programs if you do decide to trust my judgement and use the tools I recommend.
                        </p>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8">
                    <button
                        onClick={() => setShowFullManifesto(false)}
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                        Show Less <ChevronUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        )}
      </div>
    </section>

    {/* Consulting Section - Hidden */}
    {/* <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">

             <div className="flex flex-col md:flex-row items-stretch gap-12 bg-slate-100 border border-slate-300 rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="md:w-1/2">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200 transform -rotate-3">
                        <Briefcase className="w-8 h-8 text-slate-900" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Fractional Leadership</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Need more than just tools? I act as your fractional Head of Sales Ops.
                        I'll build the strategy, set up the stack, and hire the right people.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {['Audit your ICP and Playbook', 'Implement toolstack', 'Setup audiences and outreach', 'A/B testing', 'CRM optimization', 'Lead recycling flow', 'Help with closing'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700">
                                <Check className="w-5 h-5 text-green-700 shrink-0" /> {item}
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
    <section className="py-24 bg-slate-50 text-slate-900 px-6 border-b border-slate-200">
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-600 transition-colors"
                >
                    See All FAQs
                </Link>
            </div>
        </div>
    </section>

    {/* Lead Magnet / Playbook Section */}
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

            <div className="flex-1 relative z-10">
                <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200 text-indigo-900">
                    Free Resource
                </div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">Get The Full Playbook</h2>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                    It's a full Notion setup for getting started with outbound, including message templates, Clay setup, checklist.
                </p>
                <button
                  onClick={openPlaybookForm}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10"
                >
                   <Download className="w-4 h-4" /> Get The Playbook
                </button>
            </div>
            <div className="w-full md:w-1/3 relative z-10">
                 <div className="bg-slate-100 p-1 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10 backdrop-blur-sm">
                    <div className="bg-slate-50 border border-slate-300 rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center text-slate-600">
                        <FileText className="w-12 h-12 mb-2 text-indigo-600" aria-hidden="true" />
                        <span className="font-mono text-xs text-slate-600">Notion</span>
                    </div>
                 </div>
            </div>
        </div>
    </section>
  </div>
  );
};

const LibraryPage = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedTeamSize, setSelectedTeamSize] = React.useState<string>('');
    const [selectedLearningCurve, setSelectedLearningCurve] = React.useState<string>('');
    const [selectedCategory, setSelectedCategory] = React.useState<string>('');
    const [isFilterOpen, setIsFilterOpen] = React.useState(false);

    // Filter tools based on search and filters
    const filteredTools = React.useMemo(() => {
        return TOOLS.filter(tool => {
            // Search filter
            if (searchQuery && !tool.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                !tool.description.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }

            // Team size filter
            if (selectedTeamSize && !tool.bestFor.some(size => size === selectedTeamSize)) {
                return false;
            }

            // Learning curve filter
            if (selectedLearningCurve && tool.learningCurve !== selectedLearningCurve) {
                return false;
            }

            // Category filter
            if (selectedCategory && tool.category !== selectedCategory) {
                return false;
            }

            return true;
        });
    }, [searchQuery, selectedTeamSize, selectedLearningCurve, selectedCategory]);

    // Group tools by category
    const sections = [
        { id: ToolCategory.CRM, title: 'CRM' },
        { id: ToolCategory.SALES_ENGAGEMENT, title: 'Sales Engagement' },
        { id: ToolCategory.CONTACTS, title: 'Contacts & Intelligence' },
        { id: ToolCategory.SCHEDULING, title: 'Scheduling' },
        { id: ToolCategory.INFRASTRUCTURE, title: 'Infrastructure (Mailbox)' },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto min-h-screen bg-[#FEFEFE]">
             <Helmet>
               <title>Sales Tool Library - Compare 15+ Vetted Sales Engagement & CRM Tools | Sales House</title>
               <meta name="description" content="Compare 15+ vetted sales engagement, CRM, and contact tools. Pricing, pros, cons, and channels—find your perfect sales stack." />
             </Helmet>
             <Breadcrumb />
             <div className="mb-8">
                 <h1 className="text-3xl font-bold text-slate-900 mb-2">Tool Library</h1>
                 <p className="text-slate-600">Curated stack for modern sales teams.</p>
             </div>

             {/* Floating Filter Button */}
             <button
                onClick={() => setIsFilterOpen(true)}
                className="fixed right-6 top-24 z-40 w-14 h-14 bg-indigo-600 hover:bg-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Open filters"
             >
                <Filter className="w-6 h-6" />
                {(searchQuery || selectedTeamSize || selectedLearningCurve || selectedCategory) && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full text-xs flex items-center justify-center font-bold">
                        {[searchQuery, selectedTeamSize, selectedLearningCurve, selectedCategory].filter(Boolean).length}
                    </span>
                )}
             </button>

             {/* Filter Drawer Backdrop */}
             {isFilterOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                    onClick={() => setIsFilterOpen(false)}
                />
             )}

             {/* Filter Drawer */}
             <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-slate-100 border-l border-slate-300 z-50 transform transition-transform duration-300 overflow-y-auto ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <Filter className="w-5 h-5 text-indigo-600" />
                            <h3 className="text-lg font-semibold text-slate-900">Search & Filter</h3>
                        </div>
                        <button
                            onClick={() => setIsFilterOpen(false)}
                            className="p-2 hover:bg-slate-300 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5 text-slate-600" />
                        </button>
                    </div>

                    {/* Search Input */}
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-600" />
                        <input
                            type="text"
                            placeholder="Search tools..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-slate-200 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                    </div>

                    {/* Filter Sections */}
                    <div className="space-y-6">
                        {/* Team Size Filter */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Team Size</label>
                            <select
                                value={selectedTeamSize}
                                onChange={(e) => setSelectedTeamSize(e.target.value)}
                                className="w-full px-3 py-2 bg-slate-200 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                            >
                                <option value="">All Sizes</option>
                                <option value="Founders">Founders</option>
                                <option value="Small Team (2-10)">Small Team (2-10)</option>
                                <option value="Mid-Scale (10-20)">Mid-Scale (10-20)</option>
                                <option value="Enterprise (20+)">Enterprise (20+)</option>
                            </select>
                        </div>

                        {/* Learning Curve Filter */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Learning Curve</label>
                            <select
                                value={selectedLearningCurve}
                                onChange={(e) => setSelectedLearningCurve(e.target.value)}
                                className="w-full px-3 py-2 bg-slate-200 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                            >
                                <option value="">All Levels</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>

                        {/* Category Filter */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-3 py-2 bg-slate-200 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                            >
                                <option value="">All Categories</option>
                                <option value="CRM">CRM</option>
                                <option value="Sales Engagement">Sales Engagement</option>
                                <option value="Contacts & Intelligence">Contacts & Intelligence</option>
                                <option value="Scheduling">Scheduling</option>
                                <option value="Infrastructure (Mailbox)">Infrastructure</option>
                            </select>
                        </div>
                    </div>

                    {/* Active Filters */}
                    {(searchQuery || selectedTeamSize || selectedLearningCurve || selectedCategory) && (
                        <div className="mt-6 pt-6 border-t border-slate-300">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-semibold text-slate-600">Active Filters</span>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedTeamSize('');
                                        setSelectedLearningCurve('');
                                        setSelectedCategory('');
                                    }}
                                    className="text-xs text-indigo-600 hover:text-indigo-700 transition-colors"
                                >
                                    Clear All
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="px-2 py-1 bg-indigo-100 border border-indigo-500/30 rounded text-xs text-indigo-700 hover:bg-indigo-600/30 transition-colors flex items-center gap-1"
                                    >
                                        "{searchQuery}" <X className="w-3 h-3" />
                                    </button>
                                )}
                                {selectedTeamSize && (
                                    <button
                                        onClick={() => setSelectedTeamSize('')}
                                        className="px-2 py-1 bg-indigo-100 border border-indigo-500/30 rounded text-xs text-indigo-700 hover:bg-indigo-600/30 transition-colors flex items-center gap-1"
                                    >
                                        {selectedTeamSize} <X className="w-3 h-3" />
                                    </button>
                                )}
                                {selectedLearningCurve && (
                                    <button
                                        onClick={() => setSelectedLearningCurve('')}
                                        className="px-2 py-1 bg-indigo-100 border border-indigo-500/30 rounded text-xs text-indigo-700 hover:bg-indigo-600/30 transition-colors flex items-center gap-1"
                                    >
                                        {selectedLearningCurve} <X className="w-3 h-3" />
                                    </button>
                                )}
                                {selectedCategory && (
                                    <button
                                        onClick={() => setSelectedCategory('')}
                                        className="px-2 py-1 bg-indigo-100 border border-indigo-500/30 rounded text-xs text-indigo-700 hover:bg-indigo-600/30 transition-colors flex items-center gap-1"
                                    >
                                        {selectedCategory} <X className="w-3 h-3" />
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Results Count */}
                    <div className="mt-6 pt-6 border-t border-slate-300 text-sm text-slate-600">
                        Showing <span className="text-slate-900 font-semibold">{filteredTools.length}</span> of {TOOLS.length} tools
                    </div>
                </div>
             </div>

             {/* Recommended Tools Section */}
             <div className="mb-12 bg-gradient-to-br from-indigo-950/30 to-purple-950/20 rounded-2xl border border-indigo-500/20 p-8">
                <div className="flex items-center gap-3 mb-6">
                    <Star className="w-6 h-6 text-indigo-600" />
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">My Current Favourite Sales Stack</h2>
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
                                <h2 className="text-xl font-bold text-slate-800">{section.title}</h2>
                                <div className="h-px bg-slate-200 flex-1"></div>
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
                <div className="bg-slate-100 border border-slate-300 rounded-xl p-8">
                    <Mail className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Want Your Tool Featured?</h2>
                    <p className="text-slate-600 mb-4">
                        Do you want your tool to be tested and listed here? Drop me an email.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href="mailto:david@saleshousestack.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-600 text-white font-bold rounded-lg transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Contact Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/davidvaran/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold rounded-lg transition-colors border border-slate-200"
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
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Emails per day (per inbox)
                        </label>
                        <input
                            type="range"
                            min="20"
                            max="100"
                            value={emailsPerDay}
                            onChange={(e) => setEmailsPerDay(Number(e.target.value))}
                            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <div className="flex justify-between mt-1">
                            <span className="text-xs text-slate-600">20</span>
                            <span className="text-sm font-bold text-indigo-600">{emailsPerDay}</span>
                            <span className="text-xs text-slate-600">100</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Number of domains (inboxes)
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="9"
                            value={numDomains}
                            onChange={(e) => setNumDomains(Number(e.target.value))}
                            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <div className="flex justify-between mt-1">
                            <span className="text-xs text-slate-600">1</span>
                            <span className="text-sm font-bold text-indigo-600">{numDomains}</span>
                            <span className="text-xs text-slate-600">9</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Average Deal Value (ACV)
                        </label>
                        <input
                            type="range"
                            min="500"
                            max="10000"
                            step="500"
                            value={acv}
                            onChange={(e) => setAcv(Number(e.target.value))}
                            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <div className="flex justify-between mt-1">
                            <span className="text-xs text-slate-600">$500</span>
                            <span className="text-sm font-bold text-indigo-600">${acv.toLocaleString()}</span>
                            <span className="text-xs text-slate-600">$10k</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Close Rate (%)
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="20"
                            value={closeRate}
                            onChange={(e) => setCloseRate(Number(e.target.value))}
                            className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                        />
                        <div className="flex justify-between mt-1">
                            <span className="text-xs text-slate-600">1%</span>
                            <span className="text-sm font-bold text-indigo-600">{closeRate}%</span>
                            <span className="text-xs text-slate-600">20%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Display */}
            <div className="grid md:grid-cols-5 gap-4 pt-6 border-t border-slate-300">
                <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-300 text-center">
                    <div className="text-2xl font-bold text-slate-700 mb-1">{totalEmailsPerMonth.toLocaleString()}</div>
                    <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Total Emails/Mo</div>
                </div>

                <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-300 text-center">
                    <div className="text-2xl font-bold text-slate-700 mb-1">{opens.toLocaleString()}</div>
                    <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Opens (35%)</div>
                </div>

                <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-300 text-center">
                    <div className="text-2xl font-bold text-slate-700 mb-1">{replies.toLocaleString()}</div>
                    <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Replies (3%)</div>
                </div>

                <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-300 text-center">
                    <div className="text-2xl font-bold text-slate-700 mb-1">{meetings}</div>
                    <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Meetings (1.5%)</div>
                </div>

                <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-300 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">${revenue.toLocaleString()}</div>
                    <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Revenue/Mo</div>
                </div>
            </div>

            {/* Breakdown Explanation */}
            <div className="p-4 bg-slate-50/30 rounded-lg border border-slate-300">
                <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-700">How this works:</strong> {emailsPerDay} emails/day × {numDomains} inboxes × 22 working days = {totalEmailsPerMonth.toLocaleString()} emails/month.
                    At standard rates (35% open, 3% reply, 1.5% meeting) you get {meetings} demos. With {closeRate}% close rate at ${acv.toLocaleString()} ACV = <strong className="text-indigo-600">${revenue.toLocaleString()}/month potential revenue</strong>.
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
        <div className="bg-[#FEFEFE] min-h-screen">
            <Helmet>
              <title>Free Outbound Playbook - Complete Cold Email Setup Guide | Sales House</title>
              <meta name="description" content="Free Notion template with proven cold email sequences, Clay workflows, and deliverability checklists. Built by sales operators." />
            </Helmet>
            <div className="max-w-7xl mx-auto px-6 pt-6">
                <Breadcrumb />
            </div>
            <div className="mb-10 text-center md:text-left px-6 max-w-7xl mx-auto pt-6">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">From Zero to Booked Calendar</h1>
                <p className="text-xl text-slate-600 max-w-3xl">
                    The playbook that generates 50 qualified leads per month for B2B SaaS companies - without cold calling or manual prospecting.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 px-6 max-w-7xl mx-auto">
            {STRATEGIES.map(strategy => {
                const totalSteps = strategy.steps?.length || 0;
                const completedSteps = strategy.steps?.filter((_, idx) => checkedItems[`${strategy.id}-${idx}`]).length || 0;
                const progress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;

                return (
                    <div key={strategy.id} className="bg-slate-100 rounded-xl border border-indigo-500 shadow-xl shadow-indigo-500/10 overflow-hidden">
                    {/* Header Card */}
                    <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h2 className="text-xl font-bold text-slate-900">{strategy.title}</h2>
                            </div>
                            <p className="text-slate-600 text-sm">{strategy.summary}</p>
                        </div>

                        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                            {/* Progress Visual */}
                            {totalSteps > 0 && (
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-xs font-bold text-indigo-600">{Math.round(progress)}% Complete</span>
                                    <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-600 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content - Always Visible */}
                    <div className="border-t border-slate-300 bg-slate-50/30 p-6 md:p-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Left: Checklist */}
                                <div className="md:col-span-2">
                                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
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
                                                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${isChecked ? 'bg-indigo-900/10 border-indigo-500/30' : 'bg-slate-100 border-slate-300 hover:border-slate-200'}`}
                                                    >
                                                        <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isChecked ? 'bg-indigo-600 border-indigo-500' : 'border-slate-600'}`}>
                                                            {isChecked && <Check className="w-3 h-3 text-slate-900" />}
                                                        </div>
                                                        <span className={`flex-1 text-sm ${isChecked ? 'text-slate-600 line-through' : 'text-slate-800'}`}>
                                                            {stepText}
                                                        </span>
                                                        {timeEstimate && (
                                                            <span className={`text-xs shrink-0 ${isChecked ? 'text-slate-600' : 'text-slate-600'}`}>
                                                                {timeEstimate}
                                                            </span>
                                                        )}
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            <p className="text-slate-600 text-sm italic">No specific steps defined for this strategy.</p>
                                        )}
                                    </div>
                                </div>

                                {/* Right: Stack & Focus */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Recommended Stack</h3>
                                        <div className="space-y-2">
                                            {strategy.recommendedStack.map(toolId => {
                                                const tool = TOOLS.find(t => t.id === toolId);
                                                return tool ? (
                                                    <a href={tool.website} target="_blank" rel="noopener noreferrer" key={toolId} className="flex items-center gap-2 p-2 rounded bg-slate-100 border border-slate-300 hover:border-indigo-500/30 transition-colors group">
                                                        <div className="w-1 h-8 bg-indigo-600 rounded-full"></div>
                                                        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{tool.name}</span>
                                                        <ExternalLink className="w-3 h-3 text-slate-600 ml-auto group-hover:text-indigo-600" />
                                                    </a>
                                                ) : null;
                                            })}
                                        </div>
                                    </div>
                                    
                                    <div className="bg-slate-100 p-4 rounded-lg border border-slate-300">
                                         <div className="flex items-center gap-2 mb-2 text-indigo-600">
                                            <Target className="w-4 h-4" />
                                            <span className="text-xs font-bold uppercase">Focus Area</span>
                                         </div>
                                         <p className="text-sm text-slate-700 leading-relaxed">{strategy.focusArea}</p>
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
            <div className="mt-6 bg-slate-100 rounded-xl border border-indigo-500 shadow-xl shadow-indigo-500/10 overflow-hidden">
                <div className="p-6 md:p-8">
                    <div className="p-6 bg-slate-50 border border-slate-300 rounded-xl">
                        <div className="flex items-start gap-3 mb-6">
                            <BarChart3 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                            <div>
                                <h2 className="text-lg font-bold text-slate-900 mb-1">What Can I Expect?</h2>
                                <p className="text-slate-600 text-sm">Interactive calculator - adjust inputs to see your potential results</p>
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
            <div className="mt-6 bg-slate-100 rounded-xl border border-indigo-500 shadow-xl shadow-indigo-500/10 overflow-hidden">
                <div className="p-6 md:p-8">
                    <div className="p-6 bg-slate-100 border border-slate-300 rounded-xl">
                        <div className="flex items-start gap-3 mb-4">
                            <AlertCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                            <h2 className="text-lg font-bold text-slate-900">What Happens Next?</h2>
                        </div>
                        <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
                            <p>
                                Once you complete this setup, you have the <strong className="text-slate-900">fundamentals for an outbound top-of-funnel engine</strong>. The only remaining decision is your conversion path based on ticket size.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 my-4">
                                <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-300">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <span className="text-indigo-600">→</span> Self-Service Path
                                    </h3>
                                    <p className="text-xs text-slate-600">For lower ACV products (&lt;$1.5k). Direct leads to sign-up or trial pages.</p>
                                </div>
                                <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-300">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                        <span className="text-indigo-600">→</span> Demo/Discovery Path
                                    </h3>
                                    <p className="text-xs text-slate-600">For higher ACV ($1.5k+). Book demos to understand needs and qualify prospects.</p>
                                </div>
                            </div>

                            <p>
                                <strong className="text-slate-900">Why demos matter at $1.5k+ ACV:</strong> Beyond the revenue, discovery calls give you critical insights into your audience's pain points, buying process, and objections. This intelligence loop refines your messaging over time.
                            </p>

                            <p className="text-slate-600 italic">
                                If you're a senior sales professional, you already know this. You're using this playbook to <strong className="text-slate-700">scale top-funnel volume</strong> while maintaining quality conversations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* My Current Favourite Sales Stack */}
            <section id="featured-stack" className="mt-6 py-16 bg-slate-50 text-slate-900 px-6 border-b border-slate-200 relative">
                <div className="absolute inset-0 bg-indigo-950/10"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <h2 className="text-3xl font-bold">My Current Favourite Sales Stack</h2>
                        <Link to="/library" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
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
                <div className="max-w-4xl mx-auto bg-slate-100 rounded-xl border border-slate-300 p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need Help or Have Questions?</h2>
                    <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                        Feel free to drop me an email or a message on LinkedIn if you need some ideas or suggestions.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:david@saleshousestack.com"
                            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            Send Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/davidvaran/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded-lg border border-slate-200 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            {/* Get The Full Playbook */}
            <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-6 border-t border-slate-200">
                <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="flex-1 relative z-10">
                        <div className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200 text-indigo-900">
                            Free Resource
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">Get The Full Playbook</h2>
                        <p className="text-slate-700 text-lg mb-6 leading-relaxed">
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
                        <div className="bg-slate-100 p-1 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10 backdrop-blur-sm">
                            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center text-slate-600">
                                <FileText className="w-12 h-12 mb-2 text-indigo-600" />
                                <span className="font-mono text-xs text-slate-600">Notion</span>
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
        <div className="p-6 max-w-4xl mx-auto bg-[#FEFEFE] min-h-screen">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
                <p className="text-slate-600 text-sm">Last Updated: January 2, 2025</p>
            </div>

            <div className="prose prose-invert prose-slate max-w-none space-y-8">
                {/* Introduction */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <p className="text-slate-700 leading-relaxed">
                        Sales House ("we," "us," or "our") operates saleshousestack.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                    <p className="text-slate-700 leading-relaxed mt-4">
                        By using Sales House, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use our services.
                    </p>
                </section>

                {/* Information We Collect */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">1.</span> Information We Collect
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Information</h3>
                            <p className="text-slate-700 leading-relaxed">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1 ml-4">
                                <li>Subscribe to our newsletter or email list</li>
                                <li>Schedule a consultation or meeting through Calendly</li>
                                <li>Contact us via email or contact forms</li>
                                <li>Participate in surveys or promotions</li>
                            </ul>
                            <p className="text-slate-700 leading-relaxed mt-3">
                                This information may include: email address, name, company name, and any other information you choose to provide.
                            </p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Automatically Collected Information</h3>
                            <p className="text-slate-700 leading-relaxed">
                                When you visit our website, we automatically collect certain information about your device and browsing actions, including:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1 ml-4">
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
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">2.</span> How We Use Your Information
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
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
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">3.</span> Third-Party Services
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        We use the following third-party services that may collect, use, and process your data:
                    </p>

                    <div className="space-y-4">
                        <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-300">
                            <h3 className="text-base font-bold text-slate-900 mb-2">Klaviyo (Email Marketing)</h3>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                We use Klaviyo to manage our email marketing and newsletter subscriptions. When you subscribe to our newsletter, your email address and any provided information is stored and processed by Klaviyo.
                            </p>
                            <p className="text-slate-600 text-xs mt-2">
                                Privacy Policy: <a href="https://www.klaviyo.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://www.klaviyo.com/legal/privacy</a>
                            </p>
                        </div>

                        <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-300">
                            <h3 className="text-base font-bold text-slate-900 mb-2">Calendly (Scheduling)</h3>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                We use Calendly to manage meeting and consultation scheduling. When you book a meeting, Calendly collects your name, email address, and any other information you provide in the booking form.
                            </p>
                            <p className="text-slate-600 text-xs mt-2">
                                Privacy Policy: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://calendly.com/privacy</a>
                            </p>
                        </div>

                        <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-300">
                            <h3 className="text-base font-bold text-slate-900 mb-2">Analytics Services</h3>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                We may use analytics services to understand how visitors interact with our website. These services use cookies and similar tracking technologies to collect usage data.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Cookies and Tracking */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">4.</span> Cookies and Tracking Technologies
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are stored on your device.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        We use cookies to: remember your preferences, understand website usage patterns, and provide personalized content.
                    </p>
                </section>

                {/* Affiliate Disclosure */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">5.</span> Affiliate Links and Commissions
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        Sales House is reader-supported. Our website contains affiliate links to third-party products and services. When you click on these links and make a purchase, we may earn a commission at no extra cost to you.
                    </p>
                    <p className="text-slate-700 leading-relaxed mt-3">
                        We only recommend tools and services that we personally use, test, and verify. Our affiliate relationships do not influence our editorial content or recommendations.
                    </p>
                </section>

                {/* Data Retention */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">6.</span> Data Retention
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                    <p className="text-slate-700 leading-relaxed mt-3">
                        When you unsubscribe from our email list, we will remove your information from our active databases within a reasonable timeframe, though some information may remain in backup archives.
                    </p>
                </section>

                {/* Your Rights */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">7.</span> Your Privacy Rights
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                        <li><strong className="text-slate-900">Access:</strong> Request a copy of the personal data we hold about you</li>
                        <li><strong className="text-slate-900">Correction:</strong> Request correction of inaccurate or incomplete data</li>
                        <li><strong className="text-slate-900">Deletion:</strong> Request deletion of your personal data</li>
                        <li><strong className="text-slate-900">Opt-Out:</strong> Unsubscribe from marketing emails at any time</li>
                        <li><strong className="text-slate-900">Data Portability:</strong> Request a copy of your data in a portable format</li>
                        <li><strong className="text-slate-900">Objection:</strong> Object to processing of your personal data</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed mt-4">
                        To exercise any of these rights, please contact us at <a href="mailto:david@saleshousestack.com" className="text-indigo-600 hover:underline">david@saleshousestack.com</a>
                    </p>
                </section>

                {/* Data Security */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">8.</span> Data Security
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
                    </p>
                </section>

                {/* Children's Privacy */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">9.</span> Children's Privacy
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                    </p>
                </section>

                {/* International Data Transfers */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">10.</span> International Data Transfers
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from your country's laws.
                    </p>
                    <p className="text-slate-700 leading-relaxed mt-3">
                        By using our services, you consent to the transfer of your information to the United States and other countries where our service providers operate.
                    </p>
                </section>

                {/* Changes to Privacy Policy */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">11.</span> Changes to This Privacy Policy
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                    </p>
                    <p className="text-slate-700 leading-relaxed mt-3">
                        You are advised to review this Privacy Policy periodically for any changes. Changes are effective when posted on this page.
                    </p>
                </section>

                {/* Contact Information */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">12.</span> Contact Us
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-300">
                        <p className="text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Email:</strong> <a href="mailto:david@saleshousestack.com" className="text-indigo-600 hover:underline">david@saleshousestack.com</a>
                        </p>
                        <p className="text-slate-700 leading-relaxed mt-2">
                            <strong className="text-slate-900">Website:</strong> <a href="https://saleshousestack.com" className="text-indigo-600 hover:underline">https://saleshousestack.com</a>
                        </p>
                    </div>
                </section>
            </div>

            {/* Back to Home Link */}
            <div className="mt-12 text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

const TermsOfServicePage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-[#FEFEFE] min-h-screen">
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-slate-900 mb-3">Terms of Service</h1>
                <p className="text-slate-600 text-sm">Last Updated: January 2, 2025</p>
            </div>

            <div className="prose prose-invert prose-slate max-w-none space-y-8">
                {/* Introduction */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <p className="text-slate-700 leading-relaxed">
                        Welcome to Sales House ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of saleshousestack.com (the "Website") and all related services, content, and materials provided by us.
                    </p>
                    <p className="text-slate-700 leading-relaxed mt-4">
                        By accessing or using our Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
                    </p>
                </section>

                {/* Acceptance of Terms */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">1.</span> Acceptance of Terms
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        By accessing and using Sales House, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the Website.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        If you are using our services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                    </p>
                </section>

                {/* Use of Service */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">2.</span> Use of Service
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Permitted Use</h3>
                            <p className="text-slate-700 leading-relaxed">
                                You may use our Website for lawful purposes only. You agree to use the Website in compliance with all applicable laws and regulations.
                            </p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Prohibited Activities</h3>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
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
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">3.</span> Intellectual Property Rights
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        All content on Sales House, including but not limited to text, graphics, logos, images, software, and other materials, is the property of Sales House or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our Website without our prior written permission.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        The Sales House name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Sales House. You may not use these marks without our prior written permission.
                    </p>
                </section>

                {/* User Content */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">4.</span> User Content and Feedback
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        If you provide feedback, suggestions, comments, or other input to us ("Feedback"), you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, and incorporate such Feedback into our services without any obligation to you.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Any testimonials, reviews, or endorsements you provide may be used by us for marketing purposes without compensation to you.
                    </p>
                </section>

                {/* Third-Party Links and Services */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">5.</span> Third-Party Links and Services
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        Our Website contains links to third-party websites and services, including tools we recommend. These links are provided for your convenience only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites or services.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Your interactions with third-party websites and services are solely between you and the third party. We encourage you to review the terms and privacy policies of any third-party services you access through our Website.
                    </p>
                </section>

                {/* Affiliate Relationships */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">6.</span> Affiliate Relationships
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        Sales House participates in affiliate marketing programs. We may earn commissions from purchases made through affiliate links on our Website. These affiliate relationships do not influence our editorial content or recommendations.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        We only recommend products and services that we have personally tested and believe will provide value to our users. However, we cannot guarantee specific results from using any recommended tools or services.
                    </p>
                </section>

                {/* Disclaimer of Warranties */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">7.</span> Disclaimer of Warranties
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        THE WEBSITE AND ALL CONTENT, SERVICES, AND MATERIALS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                        <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                        <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
                        <li>Warranties that the Website will be uninterrupted, secure, or error-free</li>
                        <li>Warranties regarding results obtained from using the Website or recommended tools</li>
                    </ul>
                </section>

                {/* Limitation of Liability */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">8.</span> Limitation of Liability
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, SALES HOUSE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mb-4">
                        <li>Your use or inability to use the Website</li>
                        <li>Any unauthorized access to or use of our servers</li>
                        <li>Any bugs, viruses, or malicious code transmitted through the Website</li>
                        <li>Any errors or omissions in any content</li>
                        <li>Your purchase or use of any third-party products or services</li>
                        <li>Any results or outcomes from following our recommendations</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed">
                        IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID US IN THE PAST TWELVE MONTHS, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
                    </p>
                </section>

                {/* Indemnification */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">9.</span> Indemnification
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        You agree to indemnify, defend, and hold harmless Sales House and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mt-3">
                        <li>Your use of the Website</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any rights of another party</li>
                        <li>Any content you submit or transmit through the Website</li>
                    </ul>
                </section>

                {/* Email Communications */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">10.</span> Email Communications and Newsletter
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        By subscribing to our newsletter or providing your email address, you consent to receive marketing communications from us. You may unsubscribe at any time by clicking the unsubscribe link in our emails or contacting us directly.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        We reserve the right to send you transactional or administrative emails regarding your account or our services, even if you have unsubscribed from marketing communications.
                    </p>
                </section>

                {/* Changes to Terms */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">11.</span> Changes to Terms of Service
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Your continued use of the Website after any changes constitutes acceptance of the new Terms. It is your responsibility to review these Terms periodically.
                    </p>
                </section>

                {/* Termination */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">12.</span> Termination
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        We reserve the right to terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Upon termination, your right to use the Website will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                    </p>
                </section>

                {/* Governing Law */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">13.</span> Governing Law and Dispute Resolution
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Any disputes arising from or relating to these Terms or your use of the Website shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court for intellectual property violations.
                    </p>
                </section>

                {/* Severability */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">14.</span> Severability and Waiver
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-3">
                        If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                </section>

                {/* Entire Agreement */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">15.</span> Entire Agreement
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                        These Terms, together with our Privacy Policy, constitute the entire agreement between you and Sales House regarding your use of the Website and supersede all prior agreements and understandings.
                    </p>
                </section>

                {/* Contact Information */}
                <section className="bg-slate-100 border border-slate-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="text-indigo-600">16.</span> Contact Information
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-300">
                        <p className="text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">Email:</strong> <a href="mailto:david@saleshousestack.com" className="text-indigo-600 hover:underline">david@saleshousestack.com</a>
                        </p>
                        <p className="text-slate-700 leading-relaxed mt-2">
                            <strong className="text-slate-900">Website:</strong> <a href="https://saleshousestack.com" className="text-indigo-600 hover:underline">https://saleshousestack.com</a>
                        </p>
                    </div>
                </section>
            </div>

            {/* Back to Home Link */}
            <div className="mt-12 text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

const ConsultingPage = () => {
    return (
        <div className="p-6 max-w-6xl mx-auto bg-[#FEFEFE] min-h-screen">
            <Helmet>
              <title>Sales Operations Consulting - Expert Outbound Strategy & Setup | Sales House</title>
              <meta name="description" content="Expert sales operations consulting. Set up your outbound engine, optimize deliverability, and scale to 40+ demos/month." />
            </Helmet>
            <Breadcrumb />
            {/* Hero Section */}
            <div className="mb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">Fractional Sales Leadership</h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Get enterprise-grade sales strategy and execution without the enterprise price tag.
                    I help solopreneurs and small teams build scalable outbound systems that actually fill calendars.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/30 transition-all">
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Stack Setup & Advisory</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Complete sales stack implementation with ongoing optimization. From initial setup to continuous campaign refinement and scaling support.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> Stack audit & tool setup
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> Campaign sequence design
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> Weekly performance reviews
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> Copywriting & A/B testing
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/30 transition-all">
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">RevOps Strategy</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        End-to-end revenue operations design: from lead routing and pipeline stages to reporting dashboards and forecasting models.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> CRM architecture & automation
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> Sales process documentation
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> Pipeline & forecast reporting
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> Team onboarding & training
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/30 transition-all">
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                        <BarChart3 className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Sales Strategy</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Comprehensive go-to-market strategy and sales motion design tailored to your ICP, deal size, and growth stage.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> GTM strategy & positioning
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> Sales playbook development
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> ICP refinement & segmentation
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-indigo-600">→</span> Competitive positioning
                        </li>
                    </ul>
                </div>
            </div>

            {/* Who This Is For */}
            <div className="mb-16 bg-gradient-to-br from-indigo-950/30 to-purple-950/20 rounded-2xl border border-indigo-500/20 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Who This Is For</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-indigo-600 font-bold">✓</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Founders</h3>
                            <p className="text-slate-600 text-sm">
                                You know your product solves a real problem, but you don't have time to become a sales ops expert. You need a system that runs while you focus on delivery.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-indigo-600 font-bold">✓</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Small Sales Teams (2-10)</h3>
                            <p className="text-slate-600 text-sm">
                                Your team is spending too much time on manual prospecting. You need automation, but you don't know which tools to pick or how to integrate them.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-indigo-600 font-bold">✓</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">B2B SaaS Companies</h3>
                            <p className="text-slate-600 text-sm">
                                You're targeting North America, LATAM, or EMEA markets with high-volume outbound. You need proven playbooks, not guesswork.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-indigo-600 font-bold">✓</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Agencies & Service Providers</h3>
                            <p className="text-slate-600 text-sm">
                                You sell retained services but struggle with consistent lead flow. You need a predictable outbound engine that books qualified calls on autopilot.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">About Me</h2>
                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                    {/* Left Column: Bio & Stats */}
                    <div className="md:w-2/3 w-full flex flex-col gap-6 h-full">
                        {/* Bio Card */}
                        <div className="bg-slate-100 border border-slate-300 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden flex-shrink-0">
                            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600"></div>
                            <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
                                <p>
                                    <strong className="text-slate-900">I'm a Head of Sales + RevOps consultant</strong> with 5 years of Marketing experience and 6 years of Sales experience. I've built B2B teams and outbound systems targeting North America, LATAM, and EMEA.
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
                                <div key={idx} className="bg-slate-100 p-6 rounded-2xl border border-slate-300 flex flex-col items-center justify-center text-center hover:bg-slate-300/80 transition-all hover:border-slate-200 group h-full">
                                    <stat.icon className="w-6 h-6 text-indigo-600 mb-3 group-hover:scale-110 transition-transform opacity-80" />
                                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.val}</div>
                                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Profile Card */}
                    <div className="md:w-1/3 w-full flex min-h-[600px]">
                        <div className="rounded-2xl border border-slate-300 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 w-full shadow-2xl">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src="/david-profile.jpg"
                                    alt="David Varan, Sales Operations Consultant and Founder of Sales House"
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ objectPosition: 'center 20%' }}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/60 to-transparent"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-start">
                                <h3 className="text-3xl font-bold text-white mb-1">David</h3>
                                <p className="text-indigo-300 font-medium mb-6">Head of Sales & Creator</p>

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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How We Work Together</h2>
                <div className="space-y-4">
                    <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-600">
                            1
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery Call</h3>
                            <p className="text-slate-600">
                                We review your current setup, ICP, messaging, and goals. I'll identify immediate wins and long-term opportunities.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-600">
                            2
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Proposal & Scope</h3>
                            <p className="text-slate-600">
                                I'll send a detailed proposal with timeline, deliverables, and investment. You'll know exactly what to expect before we start.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-600">
                            3
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Execution</h3>
                            <p className="text-slate-600">
                                I build, configure, and test your entire stack. You'll get documentation, training videos, and live walkthroughs.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 flex items-start gap-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-600">
                            4
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Launch & Optimization</h3>
                            <p className="text-slate-600">
                                Your first campaigns go live. I monitor performance, iterate on messaging, and train your team on daily operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/30 rounded-2xl border border-indigo-500/30 p-12 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Scale Your Outbound?</h2>
                <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                    Book a 30-minute discovery call to see if we're a good fit. No sales pitch - just a real conversation about your challenges and goals.
                </p>
                <div className="max-w-4xl mx-auto min-h-[950px]">
                    <CalendlyEmbed />
                </div>
            </div>

            {/* Back to Home Link */}
            <div className="mt-12 text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

const FAQPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <Helmet>
              <title>FAQ - Cold Email & Sales Stack Questions Answered | Sales House</title>
              <meta name="description" content="Answers to cold email, tool selection, and outbound strategy questions. Learn how to build your sales stack for under $500/mo." />
            </Helmet>
            <Breadcrumb />
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
                <p className="text-slate-600 text-lg">
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
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Still Have Questions?</h2>
                <p className="text-slate-600 mb-6">
                    Book a free consultation call to discuss your specific situation
                </p>
                <Link
                    to="/consulting"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-600 text-white font-bold rounded-lg transition-colors"
                >
                    Book a Call
                </Link>
            </div>

            {/* Back to Home Link */}
            <div className="mt-12 text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

const ComparisonsListPage = () => {
  // List of available comparisons
  const availableComparisons = [
    {
      slug: 'clay-vs-apollo',
      name: 'Clay vs Apollo',
      category: 'B2B Data & Intelligence',
      excerpt: 'Should you use Clay\'s AI enrichment or Apollo\'s 200M+ database? Complete breakdown with pricing, use cases, and my verdict after 6+ years.'
    },
    {
      slug: 'pipedrive-hubspot-salesforce',
      name: 'Pipedrive vs HubSpot vs Salesforce',
      category: 'CRM',
      excerpt: 'Which CRM is right for your growth stage? Side-by-side comparison of features, pricing, and best use cases.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Sales Tool Comparisons - Side-by-Side Reviews | Sales House</title>
        <meta name="description" content="Compare sales tools side-by-side. Clay vs Apollo, Reply vs Instantly, HubSpot vs Salesforce and more. Expert comparisons based on real experience." />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <Breadcrumb />

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Tool Comparisons</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Side-by-side comparisons to help you choose the right tool for your stack
          </p>
        </div>

        {/* Available Comparisons (empty for now) */}
        {availableComparisons.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {availableComparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                to={`/comparisons/${comparison.slug}`}
                className="bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {comparison.name}
                    </h2>
                    <p className="text-sm text-slate-600">{comparison.category}</p>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  {comparison.excerpt}
                </p>

                <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                  Read Comparison
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Request Section */}
        <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Which comparison would help you most?</h2>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Let me know which tools you're trying to decide between and I'll prioritize that comparison.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:david@saleshousestack.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/davidvaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-slate-300 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              Message on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CRMComparisonPage = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best CRM for 2025: Pipedrive vs HubSpot vs Salesforce",
    "description": "Which CRM should you actually use in 2025? Real comparison of Pipedrive, HubSpot, and Salesforce based on team size, budget, and growth stage.",
    "image": "https://saleshousestack.com/og-image.png",
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saleshousestack.com/logo.png"
      }
    },
    "datePublished": "2025-12-18",
    "dateModified": "2025-12-18"
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Best CRM for 2025: Pipedrive vs HubSpot vs Salesforce | Sales House</title>
        <meta name="description" content="Which CRM should you actually use in 2025? Real comparison of Pipedrive, HubSpot, and Salesforce based on team size, budget, and growth stage. Pricing, features, and honest recommendations." />
        <meta name="keywords" content="best CRM 2025, Pipedrive vs HubSpot, HubSpot vs Salesforce, Pipedrive vs Salesforce, CRM comparison, best CRM for startups, CRM for sales teams, best sales CRM" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Breadcrumb />

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-sm font-semibold text-purple-700">
              Comparison
            </div>
            <div className="inline-block px-3 py-1 bg-orange-100 border border-orange-300 rounded-full text-sm font-semibold text-orange-700">
              CRM
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Sales Tools
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Best CRM for 2025: Pipedrive vs HubSpot vs Salesforce
          </h1>
          <p className="text-lg text-slate-600 mb-2">Which should you actually use?</p>
        </div>

        {/* Verdict Box */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">⚖️</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">My Verdict Upfront</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                <strong>Solo founder or small team?</strong> Go with Pipedrive - simple, affordable, gets the job done. <strong>Hired sales reps & thinking long-term?</strong> Choose HubSpot - scales well, solid automation. <strong>Enterprise with dedicated RevOps?</strong> Salesforce works - but skip it otherwise.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-indigo-200 text-sm text-slate-600">
            I've set up all three CRMs across multiple companies from solo founders to 20-person sales teams. Here's what actually matters.
          </div>
        </div>

        {/* Intro */}
        <div className="mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            All three are good CRMs - you've probably already heard of all of them. The question isn't "which is best?" but "which is best <em>for your stage</em>?" A solo founder burning $300/mo on Salesforce is wasteful. A 50-person sales team on Pipedrive will hit limitations. Your growth stage determines your CRM.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Quick Comparison Table */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-slate-100 border border-slate-300 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="text-left p-4 text-slate-900 font-bold border-b border-slate-200">Dimension</th>
                    <th className="text-center p-4 text-slate-900 font-bold border-b border-slate-200">Pipedrive</th>
                    <th className="text-center p-4 text-slate-900 font-bold border-b border-slate-200">HubSpot</th>
                    <th className="text-center p-4 text-slate-900 font-bold border-b border-slate-200">Salesforce</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-300">
                    <td className="p-4 font-medium">Best for</td>
                    <td className="p-4 text-center">Solo founders, small teams</td>
                    <td className="p-4 text-center">Growing SMBs, scale-ups</td>
                    <td className="p-4 text-center">Enterprise, complex orgs</td>
                  </tr>
                  <tr className="border-b border-slate-300">
                    <td className="p-4 font-medium">Setup time</td>
                    <td className="p-4 text-center">1 day</td>
                    <td className="p-4 text-center">3-5 days</td>
                    <td className="p-4 text-center">2-4 weeks</td>
                  </tr>
                  <tr className="border-b border-slate-300">
                    <td className="p-4 font-medium">Starting price</td>
                    <td className="p-4 text-center">~$15/user/mo</td>
                    <td className="p-4 text-center">Free → $50+/user/mo</td>
                    <td className="p-4 text-center">~$25/user/mo + extras</td>
                  </tr>
                  <tr className="border-b border-slate-300">
                    <td className="p-4 font-medium">Ease of use</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐</td>
                  </tr>
                  <tr className="border-b border-slate-300">
                    <td className="p-4 font-medium">Customization</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b border-slate-300">
                    <td className="p-4 font-medium">Reporting</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Strong</td>
                    <td className="p-4 text-center">Enterprise-grade</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">RevOps needed?</td>
                    <td className="p-4 text-center">No</td>
                    <td className="p-4 text-center">Helpful but optional</td>
                    <td className="p-4 text-center">Yes, mandatory</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* When Pipedrive Makes Sense */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">When Pipedrive Makes Sense</h2>

            <div className="space-y-6">
              <div className="bg-green-50/50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You're a solo founder or small team (1-5 people)</h3>
                <p className="text-slate-700 leading-relaxed">
                  You need a CRM that works on day one without setup time. Pipedrive is built by salespeople for salespeople - no marketing fluff, no unnecessary complexity. You can import your contacts, set up your pipeline stages, and start logging calls within an hour. Perfect when you're wearing multiple hats and don't have time to become a CRM admin.
                </p>
              </div>

              <div className="bg-green-50/50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You want predictable, affordable pricing</h3>
                <p className="text-slate-700 leading-relaxed">
                  Starting at ~$15/user/month, Pipedrive won't suddenly jump to $100+/user when you need a basic automation. The pricing is transparent and scales linearly. No surprise bills because you hit an arbitrary contact limit or needed one more dashboard.
                </p>
              </div>

              <div className="bg-green-50/50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You prioritize rep adoption over customization</h3>
                <p className="text-slate-700 leading-relaxed">
                  Sales reps actually use Pipedrive. The drag-and-drop pipeline is intuitive, the mobile app works great, and there's zero learning curve. If getting your team to log activities is your biggest challenge, Pipedrive solves that. Simple beats powerful if nobody uses it.
                </p>
              </div>

              <div className="bg-green-50/50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You're doing transactional B2B sales</h3>
                <p className="text-slate-700 leading-relaxed">
                  Shorter sales cycles, clear stages (contacted → demo → proposal → closed), straightforward pipeline management. Pipedrive excels here. You don't need complex deal structures, multi-threading tracking, or enterprise reporting - you need to see your deals, move them forward, and close them.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100/50 border border-slate-300 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">❌ Skip Pipedrive if:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>You need advanced marketing automation (email nurture, lead scoring, attribution)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>You're scaling past 50 users and need sophisticated territory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>You require deep customization and custom objects beyond standard deals/contacts</span>
                </li>
              </ul>
            </div>
          </section>

          {/* When HubSpot Makes Sense */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">When HubSpot Makes Sense</h2>

            <div className="space-y-6">
              <div className="bg-orange-50/50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You're a growing SMB (10-50 people) thinking long-term</h3>
                <p className="text-slate-700 leading-relaxed">
                  You've outgrown basic CRMs but aren't ready for Salesforce complexity. HubSpot scales with you - start with free CRM, add Sales Hub when you hire reps, add Marketing Hub when you build that function. It grows with your org structure without forcing a migration.
                </p>
              </div>

              <div className="bg-orange-50/50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You want sales + marketing alignment</h3>
                <p className="text-slate-700 leading-relaxed">
                  HubSpot originated as a marketing platform and nailed the integration. Marketing can track campaign performance, sales can see which content prospects engaged with, everyone works from the same lead scoring. If you're doing inbound or content-led growth, this alignment is valuable.
                </p>
              </div>

              <div className="bg-orange-50/50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You need workflow automation without hiring a developer</h3>
                <p className="text-slate-700 leading-relaxed">
                  HubSpot's workflow builder is powerful but accessible. Create automated lead routing, follow-up sequences, deal stage triggers - all without code. Much more capable than Pipedrive, much easier than Salesforce. Perfect middle ground for ops-minded founders.
                </p>
              </div>

              <div className="bg-orange-50/50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You care about user experience and modern UI</h3>
                <p className="text-slate-700 leading-relaxed">
                  HubSpot simply looks and feels better than Salesforce. Clean interface, intuitive navigation, mobile apps that actually work. Your team will adopt it faster and complain less. This matters more than founders think - CRM adoption is a constant battle.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100/50 border border-slate-300 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">❌ Skip HubSpot if:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>You're pre-revenue and ultra-budget-conscious (start with Pipedrive, migrate later)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>You need truly enterprise-grade security, compliance, or complex data governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Your sales process is extremely custom and needs deep technical customization</span>
                </li>
              </ul>
            </div>
          </section>

          {/* When Salesforce Makes Sense */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">When Salesforce Makes Sense</h2>

            <div className="space-y-6">
              <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You're enterprise-scale (100+ employees) with dedicated RevOps</h3>
                <p className="text-slate-700 leading-relaxed">
                  At this scale, you need Salesforce's power. Complex territory management, multi-currency, advanced role hierarchies, custom approval workflows - Salesforce handles it all. But you MUST have dedicated RevOps/Salesforce admins. Without them, you're paying premium for features you can't configure.
                </p>
              </div>

              <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You need enterprise reporting for investors/board</h3>
                <p className="text-slate-700 leading-relaxed">
                  Post-Series B, investors expect Salesforce. They want to see pipeline by segment, cohort analysis, rep productivity dashboards, forecasting accuracy metrics. Salesforce's reporting and analytics capabilities are unmatched. If your board asks for a specific report, Salesforce can build it.
                </p>
              </div>

              <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ You require deep AppExchange integration ecosystem</h3>
                <p className="text-slate-700 leading-relaxed">
                  Salesforce's AppExchange has 5,000+ pre-built integrations. If you need CPQ (Configure-Price-Quote), advanced contract management, or industry-specific functionality, AppExchange likely has it. The ecosystem is genuinely unmatched if you need specialized tools.
                </p>
              </div>

              <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">✅ Your buyer expects it (selling to enterprise)</h3>
                <p className="text-slate-700 leading-relaxed">
                  Harsh reality: some enterprise buyers require vendors to use Salesforce for security audits, data governance, or integration requirements. If you're selling $500K+ deals to Fortune 500s, Salesforce might be table stakes for those relationships.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-100/50 border border-slate-300 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">❌ Skip Salesforce if:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>You don't have a dedicated Salesforce admin or RevOps team member</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>You're under 50 employees and prioritizing speed over customization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span>Budget constraints matter - total cost of ownership (licenses + admin + consultants) adds up fast</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Table 1: Best Use Cases */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Best Use Cases (Who Should Pick What)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-slate-100 border border-slate-300 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="text-left p-4 text-slate-900 font-bold border-b border-slate-200">Scenario</th>
                    <th className="text-center p-4 text-slate-900 font-bold border-b border-slate-200">Salesforce</th>
                    <th className="text-center p-4 text-slate-900 font-bold border-b border-slate-200">HubSpot</th>
                    <th className="text-center p-4 text-slate-900 font-bold border-b border-slate-200">Pipedrive</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-300 hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-medium">Solo founder</td>
                    <td className="p-4 text-center text-3xl">❌</td>
                    <td className="p-4 text-center text-3xl">⚠️</td>
                    <td className="p-4 text-center text-3xl">✅</td>
                  </tr>
                  <tr className="border-b border-slate-300 hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-medium">Small sales team (1-10)</td>
                    <td className="p-4 text-center text-3xl">❌</td>
                    <td className="p-4 text-center text-3xl">✅</td>
                    <td className="p-4 text-center text-3xl">✅</td>
                  </tr>
                  <tr className="border-b border-slate-300 hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-medium">Growing SMB (10-50 reps)</td>
                    <td className="p-4 text-center text-3xl">⚠️</td>
                    <td className="p-4 text-center text-3xl">✅</td>
                    <td className="p-4 text-center text-3xl">⚠️</td>
                  </tr>
                  <tr className="border-b border-slate-300 hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-medium">Enterprise / multi-region</td>
                    <td className="p-4 text-center text-3xl">✅</td>
                    <td className="p-4 text-center text-3xl">⚠️</td>
                    <td className="p-4 text-center text-3xl">❌</td>
                  </tr>
                  <tr className="hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-medium">Dedicated RevOps/Admin</td>
                    <td className="p-4 text-center text-sm">Required</td>
                    <td className="p-4 text-center text-sm">Helpful</td>
                    <td className="p-4 text-center text-sm">Not needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Table 2: Time to Value */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Time to Value & Adoption</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-slate-100 border border-slate-300 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="text-left p-4 text-slate-900 font-bold border-b border-slate-200">Dimension</th>
                    <th className="text-center p-4 text-slate-900 font-bold border-b border-slate-200">Salesforce</th>
                    <th className="text-center p-4 text-slate-900 font-bold border-b border-slate-200">HubSpot</th>
                    <th className="text-center p-4 text-slate-900 font-bold border-b border-slate-200">Pipedrive</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-300 hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-medium">Setup speed</td>
                    <td className="p-4 text-center">Slow</td>
                    <td className="p-4 text-center">Fast</td>
                    <td className="p-4 text-center">Very fast</td>
                  </tr>
                  <tr className="border-b border-slate-300 hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-medium">Onboarding effort</td>
                    <td className="p-4 text-center">High</td>
                    <td className="p-4 text-center">Medium</td>
                    <td className="p-4 text-center">Low</td>
                  </tr>
                  <tr className="border-b border-slate-300 hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-medium">Rep adoption</td>
                    <td className="p-4 text-center">Medium</td>
                    <td className="p-4 text-center">High</td>
                    <td className="p-4 text-center">Very high</td>
                  </tr>
                  <tr className="hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-medium">"Feels usable on day 1"</td>
                    <td className="p-4 text-center text-3xl">❌</td>
                    <td className="p-4 text-center text-3xl">✅</td>
                    <td className="p-4 text-center text-3xl">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Table 3: Pricing Reality */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing Reality</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-slate-100 border border-slate-300 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-200">
                    <th className="text-left p-4 text-slate-900 font-bold border-b border-slate-200">CRM</th>
                    <th className="text-left p-4 text-slate-900 font-bold border-b border-slate-200">Entry price reality</th>
                    <th className="text-left p-4 text-slate-900 font-bold border-b border-slate-200">What founders underestimate</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-300 hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Salesforce</td>
                    <td className="p-4">Starts "reasonable", scales brutally</td>
                    <td className="p-4">Admin cost, consultants, add-ons</td>
                  </tr>
                  <tr className="border-b border-slate-300 hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-bold text-slate-900">HubSpot</td>
                    <td className="p-4">Free/cheap early</td>
                    <td className="p-4">Cost grows as you add hubs & seats</td>
                  </tr>
                  <tr className="hover:bg-slate-300/30 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Pipedrive</td>
                    <td className="p-4">Affordable</td>
                    <td className="p-4">Add-ons stack over time</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Cost Breakdown */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Real Cost Analysis (What You'll Actually Pay)</h2>

            <div className="space-y-6">
              <div className="bg-green-50/30 border border-green-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-green-600">●</span>
                  Pipedrive: $15-60/user/month
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Essential:</strong> $15/user/mo - Basic CRM, pipeline management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Advanced:</strong> $29/user/mo - Adds automation, email sync, workflow builder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Professional:</strong> $49/user/mo - Full features, multiple pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Real cost for 5 users:</strong> ~$145-300/month total</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50/30 border border-orange-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-orange-600">●</span>
                  HubSpot: Free to $150+/user/month
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Free:</strong> Basic CRM, unlimited users (great for testing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Starter:</strong> $20/user/mo - Email sequences, basic automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Professional:</strong> $100/user/mo - Advanced automation, custom reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Hidden costs:</strong> Marketing Hub ($800+/mo), Operations Hub ($800+/mo) if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Real cost for 10 users:</strong> ~$1,000-2,000/month with Sales + Marketing Hubs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/30 border border-blue-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600">●</span>
                  Salesforce: $25-300+/user/month (+ implementation)
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Starter:</strong> $25/user/mo - Very limited, not recommended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Professional:</strong> $80/user/mo - Standard features, most start here</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Enterprise:</strong> $165/user/mo - Advanced customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Hidden costs:</strong> Implementation ($10K-50K), admin salary ($80-120K/year), consultants ($150-300/hr)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Real cost for 20 users:</strong> ~$2,000-4,000/month + $10K setup + dedicated admin</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Bottom Line Recommendations by Persona */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Bottom Line: Who Should Pick What</h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-300 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">👤 For Solo Founders Just Starting</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  <strong>Go with Pipedrive.</strong> Set it up in an hour, start tracking deals immediately. HubSpot's free tier is tempting but adds complexity you don't need yet. Migrate to HubSpot when you hire your first sales rep or want marketing automation.
                </p>
                <p className="text-sm text-slate-600 italic">Cost: ~$15-30/month</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-300 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">👥 For Small Teams (2-10 people) Scaling</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  <strong>Start with Pipedrive, migrate to HubSpot at 5-10 people.</strong> Pipedrive gets you moving fast. When you add a marketing person or need real automation, migrate to HubSpot. The migration isn't fun but it's necessary.
                </p>
                <p className="text-sm text-slate-600 italic">Cost: Pipedrive $150-300/month → HubSpot $500-1,000/month</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-300 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">🚀 For Growing SMBs (10-50 employees)</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  <strong>Default to HubSpot.</strong> You need the power but not the complexity. HubSpot scales with you - add Marketing Hub when you hire marketers, add Service Hub if you build CS. Avoid Salesforce unless investors or buyers force it.
                </p>
                <p className="text-sm text-slate-600 italic">Cost: $1,000-3,000/month depending on hubs</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-300 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">🏢 For Enterprise (50+ employees, post-Series B)</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  <strong>Salesforce becomes necessary, but only with dedicated RevOps.</strong> Your board expects it, your reporting needs demand it, your integrations require it. Budget for implementation costs, ongoing admin, and consultant fees. It's worth it at this scale - but painful without proper support.
                </p>
                <p className="text-sm text-slate-600 italic">Cost: $3,000-10,000+/month including admin/consultants</p>
              </div>
            </div>
          </section>

          {/* Credibility Section */}
          <section className="bg-gradient-to-br from-slate-100 to-slate-200/50 border border-slate-300 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">My CRM Journey (So You Can Skip the Mistakes)</h2>
            <div className="space-y-4 text-slate-700">
              <p className="leading-relaxed">
                I've implemented all three of these CRMs across different companies - from solo founder setups to 20-person sales teams with mixed SDR/AE structures. Here's what I've learned from the trenches:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span><strong>Wasted 6 months on Salesforce too early</strong> - Paid $2,400 in licenses plus consultant fees for features we never configured. Team hated the UI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span><strong>Migrated from Pipedrive to HubSpot at 8 people</strong> - Painful but necessary. Wish we'd started with HubSpot at 5 people.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span><strong>Currently run HubSpot at a 15-person team</strong> - Sales Hub + Marketing Hub. ~$1,800/month but worth every penny for the alignment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-1">•</span>
                  <span><strong>Still recommend Pipedrive to solo founders</strong> - Don't overcomplicate your stack when you're just starting. Simple wins.</span>
                </li>
              </ul>
              <p className="leading-relaxed pt-2">
                This comparison comes from making every mistake so you don't have to. The "best" CRM is the one that matches your current stage - not the one with the most features or biggest name.
              </p>
            </div>
          </section>

          {/* About Me */}
          <section className="bg-slate-100/30 border border-slate-300 rounded-xl p-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Want Help Choosing?</h2>
            <p className="text-slate-700 text-sm leading-normal mb-3">
              Still not sure which CRM fits your specific situation? I help founders and sales leaders pick the right stack for their stage and budget. No affiliate bias - just honest recommendations based on your actual needs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.linkedin.com/in/davidvaran/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-slate-900 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:david@saleshousestack.com"
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-900 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 border border-slate-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </section>

          {/* Tags */}
          <section className="border-t border-slate-300 pt-8">
            <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4">Tagged:</p>
            <div className="flex flex-wrap gap-2">
              {['CRM Comparison', 'Pipedrive', 'HubSpot', 'Salesforce', 'Sales CRM', 'CRM for Startups', 'B2B Sales Tools', 'Revenue Operations'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-slate-200 border border-slate-200/50 rounded-md text-sm text-slate-700 hover:border-indigo-500/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* CTAs */}
          <div className="grid md:grid-cols-3 gap-4 pt-8">
            <a
              href="https://www.pipedrive.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-200 border border-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-all text-center"
            >
              Try Pipedrive
            </a>
            <a
              href="https://www.hubspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-200 border border-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-all text-center"
            >
              Try HubSpot
            </a>
            <a
              href="https://www.salesforce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-200 border border-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-all text-center"
            >
              Try Salesforce
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewsListPage = () => {
  // List of tools that have reviews
  const reviewedTools = [
    {
      id: 'clay',
      name: 'Clay',
      slug: 'clay',
      rating: 5.0,
      excerpt: 'Not just a contact database - a whole AI research assistant that qualifies, signals, and personalizes at scale',
      category: 'Data & Enrichment',
      lastUpdated: 'December 2025'
    },
    {
      id: 'reply',
      name: 'Reply.io',
      slug: 'reply-io',
      rating: 4.5,
      excerpt: 'Very versatile tool, highest level of multichannel capabilities',
      category: 'Sales Engagement',
      lastUpdated: 'December 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Tool Reviews - Expert Sales Software Reviews | Sales House</title>
        <meta name="description" content="Honest, in-depth reviews of sales tools based on real experience. Get expert insights on Reply.io, Clay, HubSpot and more sales engagement platforms." />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <Breadcrumb />
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Tool Reviews</h1>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviewedTools.map((tool) => (
            <Link
              key={tool.id}
              to={`/reviews/${tool.slug}`}
              className="bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {tool.name} Review
                  </h2>
                  <p className="text-sm text-slate-600">{tool.category} • Updated {tool.lastUpdated}</p>
                </div>
                <div className="flex items-center gap-1 bg-slate-200 px-3 py-1.5 rounded-lg">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-600" />
                  <span className="text-slate-900 font-bold">{tool.rating}</span>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                {tool.excerpt}
              </p>

              <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                Read Full Review
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* In Progress Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Reviews In Progress</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {['HubSpot', 'Instantly', 'Lemlist'].map((toolName) => (
              <div
                key={toolName}
                className="bg-slate-100/30 border border-slate-300 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-lg font-bold text-slate-600 mb-2">{toolName}</h3>
                <p className="text-sm text-slate-600">Review coming soon</p>
              </div>
            ))}
          </div>
        </div>

        {/* Request Section */}
        <div className="mt-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What tool should I review next?</h2>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            Got a sales tool you want me to put through its paces? Let me know what you'd like to see reviewed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:david@saleshousestack.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/davidvaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-slate-300 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              Message on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReplyIOReviewPage = () => {
  const replyTool = TOOLS.find(tool => tool.id === 'reply');

  if (!replyTool) return null;

  // Schema.org structured data for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "Reply.io",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "jobTitle": "Sales Operations Consultant",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "datePublished": "2025-12-13",
    "reviewBody": "Reply.io covers all the channels you need and gives you complete control to personalize when necessary. The price-to-functionality ratio is top-notch. I've used and set up Reply.io for 4 SaaS companies over the past year.",
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Reply.io Review 2025: My Experience After 4 SaaS Companies",
    "description": "Honest Reply.io review based on real experience with 4 SaaS companies. Open rates up to 80%, multichannel capabilities, pricing analysis, and who should (and shouldn't) use it.",
    "image": "https://saleshousestack.com/og-image.png",
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saleshousestack.com/logo.png"
      }
    },
    "datePublished": "2025-12-13",
    "dateModified": "2025-12-13",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://saleshousestack.com/#/reviews/reply-io"
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Reply.io Review 2025: My Experience After 4 SaaS Companies | Sales House</title>
        <meta name="description" content="Honest Reply.io review based on real experience with 4 SaaS companies. Open rates up to 80%, multichannel capabilities, pricing analysis, and who should (and shouldn't) use it." />
        <meta name="keywords" content="Reply.io review, Reply.io pricing, sales engagement platform, multichannel outreach, email automation, LinkedIn automation" />

        {/* Schema.org Review Markup */}
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>

        {/* Schema.org Article Markup */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Breadcrumb />

        {/* Header */}
        <div className="mb-12">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Reply.io Review</h1>
            <p className="text-slate-600">Last updated December 2025</p>
          </div>

          {/* Rating */}
          <div className="bg-slate-100 border border-slate-300 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-600" />
              ))}
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-600" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              <span className="text-2xl font-bold text-slate-900 ml-2">4.5/5</span>
            </div>
            <p className="text-xl font-semibold text-indigo-600">Very versatile tool, highest level of multichannel capabilities</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Why I Recommend It */}
          <section className="bg-slate-100/30 border border-slate-300 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-indigo-600" />
              Why I Recommend It
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Reply.io covers all the channels you need and gives you complete control to personalize when necessary. The price-to-functionality ratio is top-notch, making it accessible for founders and small teams while still being powerful enough for established sales teams.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Their analytics and tracking capabilities really shine when it comes to extra nurturing steps. For example, I set up an automation that checks if a prospect opened an email more than 5 times after the last sequence step, then triggers a reminder email a day later (not the same day - that would be creepy). This simple workflow helped nudge reply rates and increased the number of opportunities created.
            </p>
          </section>

          {/* My Experience */}
          <section className="bg-slate-100/30 border border-slate-300 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">My Experience Using It</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              I've used and set up Reply.io for 4 SaaS companies over the past year. The platform has been my go-to for automating LinkedIn, InMail, and email sequencing with variable steps across multiple campaigns.
            </p>
            <div className="bg-slate-200 border border-slate-200 rounded-lg p-6">
              <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4">Results:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 text-xl">✓</span>
                  <span>Open rates varied by industry: 30-40% on the lower end, peaked at 80% with 3-4 follow-up steps (excluding LinkedIn)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 text-xl">✓</span>
                  <span>Successfully automated multichannel sequences across email, LinkedIn, and InMail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 text-xl">✓</span>
                  <span>Advanced nurturing automation (5+ email opens trigger) increased reply rates and opportunities created</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Where It Shines */}
          <section className="bg-slate-100/30 border border-slate-300 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Where It Shines</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The multichannel capabilities are unmatched. I've tested every channel except WhatsApp (though the sentiment about it seems positive). Reply.io is the best choice when:
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">•</span>
                <span>You need to run coordinated campaigns across email, LinkedIn, and InMail</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">•</span>
                <span>You want granular control over personalization without sacrificing automation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">•</span>
                <span>You need advanced analytics and tracking for nurturing workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">•</span>
                <span>You're serious about outbound and understand that single-channel focus leaves money on the table</span>
              </li>
            </ul>
          </section>

          {/* Who Should Skip This */}
          <section className="bg-slate-100/30 border border-slate-300 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Should Skip This</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong className="text-slate-900">If you're only focusing on one channel, don't buy Reply.io.</strong> There are specialized tools that will serve you better: Dripify for LinkedIn, Instantly for email, or Aircall for cold calls. But honestly, as a sales professional, single-channel focus is a bad strategy - you're leaving money on the table.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">The one real dealbreaker:</strong> Limited Salesforce integration. The only reason this gets 4.5 instead of 5 stars. I wasn't happy with how the integration works initially. With some technical workarounds in Salesforce, we got it working well enough for a team of 9 sales executives, but it's not ideal. For most founder and small team use cases using HubSpot, this is a non-issue.
            </p>
          </section>

          {/* Bottom Line */}
          <section className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Bottom Line</h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              Great tool with a top-tier price-to-functionality ratio. Whether you're an established team or a founder just starting outbound, Reply.io will get the job done long-term and you can be confident with your commitment. It's my go-to recommendation for anyone serious about multichannel outreach who wants a tool they can grow with.
            </p>
          </section>

          {/* Tags */}
          <section className="border-t border-slate-300 pt-8">
            <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4">Tagged:</p>
            <div className="flex flex-wrap gap-2">
              {['Sales Engagement', 'Email Automation', 'LinkedIn Automation', 'Multichannel Outreach', 'Cold Email', 'B2B Sales Tools', 'Sales Sequences'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-slate-200 border border-slate-200/50 rounded-md text-sm text-slate-700 hover:border-indigo-500/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center pt-8">
            <a
              href={replyTool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-600 transition-all text-lg"
            >
              Try Reply.io For Free <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClayReviewPage = () => {
  const clayTool = TOOLS.find(tool => tool.id === 'clay');

  if (!clayTool) return null;

  // Schema.org structured data for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "Clay",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "jobTitle": "Sales Operations Consultant",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "datePublished": "2025-12-13",
    "reviewBody": "Clay is not just a contact database - it's a whole AI research assistant doing extra qualification, sending you signals, and preparing personalization angles. Qualifying 500+ companies in under 10 minutes to figure out if they're a good fit is a massive time saver.",
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Clay Review 2025: AI-Powered Research Assistant for Sales Teams",
    "description": "Honest Clay review after 8 months and 40k+ contacts processed. Signal building, AI qualification, data coverage analysis, and who should (and shouldn't) use it.",
    "image": "https://saleshousestack.com/og-image.png",
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saleshousestack.com/logo.png"
      }
    },
    "datePublished": "2025-12-13",
    "dateModified": "2025-12-13",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://saleshousestack.com/#/reviews/clay"
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Clay Review 2025: AI-Powered Research Assistant for Sales Teams | Sales House</title>
        <meta name="description" content="Honest Clay review after 8 months and 40k+ contacts processed. Signal building, AI qualification, and who should use it vs Apollo or Lusha." />
        <meta name="keywords" content="Clay review, Clay.com review, sales intelligence, data enrichment, AI qualification, signal building, contact database" />

        {/* Schema.org Review Markup */}
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>

        {/* Schema.org Article Markup */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Breadcrumb />

        {/* Header */}
        <div className="mb-12">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Clay Review</h1>
            <p className="text-slate-600">Last updated December 2025</p>
          </div>

          {/* Rating */}
          <div className="bg-slate-100 border border-slate-300 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-600" />
              ))}
              <span className="text-2xl font-bold text-slate-900 ml-2">5.0/5</span>
            </div>
            <p className="text-xl font-semibold text-indigo-600">Not just a contact database - a whole AI research assistant that qualifies, signals, and personalizes at scale</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Why I Recommend It */}
          <section className="bg-slate-100/30 border border-slate-300 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-indigo-600" />
              Why I Recommend It
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              I haven't used a tool I can call a direct competitor to Clay. What makes it stand out is the extensiveness of how far you can go with the qualification steps.
            </p>
            <p className="text-slate-700 leading-relaxed">
              It's not just a contact database - it's a whole AI research assistant doing extra qualification, sending you signals, and preparing personalization angles. It can be used as a database, but it can also identify key people in the company, research company LinkedIn and DMs information, and prepare an angle for a personalized pitch. The time saved from manual research is massive when you can launch an AI to qualify companies based on your criteria.
            </p>
          </section>

          {/* My Experience */}
          <section className="bg-slate-100/30 border border-slate-300 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">My Experience Using It</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              I've been using Clay for about 8 months and have processed north of 40,000 contacts. You know perfectly well what a pain account qualification is - but qualifying 500+ companies in under 10 minutes to figure out if they're a good fit for my product offering? Hell yeah. That extra time can be spent on sequence prep, old inbound, and closed-lost nurturing.
            </p>
            <div className="bg-slate-200 border border-slate-200 rounded-lg p-6 mb-6">
              <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4">Results:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 text-xl">✓</span>
                  <span>Processed 40,000+ contacts across multiple campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 text-xl">✓</span>
                  <span>Qualify 500+ companies in under 10 minutes with AI - massive time savings on manual research</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1 text-xl">✓</span>
                  <span>5-10% bounce rate on high volume sequences (recommend extra email verification if using fewer than 5 domains)</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
              <p className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">Data Coverage Notes:</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Excellent:</strong> North America, EMEA for fintech, tax firms, logistics, e-commerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">⚠</span>
                  <span><strong>Outdated contacts:</strong> LATAM coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">⚠</span>
                  <span><strong>Limited:</strong> Eastern Europe coverage</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Where It Shines */}
          <section className="bg-slate-100/30 border border-slate-300 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Where It Shines</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong className="text-slate-900">Signal building is the killer feature.</strong> You can set up notifications to be the first in line to learn about promotions, investment round announcements, position changes, and acquisitions. You always want to be first to send congratulations and ask if there's room for a chat about your offering.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">•</span>
                <span>AI-powered company qualification at scale (500+ companies in 10 minutes)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">•</span>
                <span>Signal tracking for promotions, funding rounds, job changes, M&A activity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">•</span>
                <span>Identifying key decision-makers and preparing personalized pitch angles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 text-xl">•</span>
                <span>When you have your ICP dialed in and need to narrow down on perfect-fit accounts</span>
              </li>
            </ul>
          </section>

          {/* Who Should Skip This */}
          <section className="bg-slate-100/30 border border-slate-300 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Should Skip This</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong className="text-slate-900">New founders who don't have their ICP dialed in perfectly should skip Clay.</strong> Stick to Apollo.io or Lusha to test markets, verticals, and titles on high volume first. Clay is used when you're narrowing down on who's the perfect fit - not when you're still figuring that out.
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">The dealbreaker:</strong> Credit-based AI usage means prompts need to be adjusted multiple times. There's a lot of testing required to refine the enrichment prompt, which burns through credits. If you're not willing to iterate and optimize your workflows, Clay will get expensive fast.
            </p>
          </section>

          {/* Bottom Line */}
          <section className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Bottom Line</h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              Clay is in a league of its own - it's not just a database, it's an AI research assistant that does the grunt work of qualification, signal tracking, and personalization prep. If you have your ICP dialed in and need to operate at scale while staying personalized, Clay is unmatched. Just be prepared to invest time upfront refining your prompts and workflows.
            </p>
          </section>

          {/* Tags */}
          <section className="border-t border-slate-300 pt-8">
            <p className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-4">Tagged:</p>
            <div className="flex flex-wrap gap-2">
              {['Data Enrichment', 'Sales Intelligence', 'AI Qualification', 'Signal Building', 'Contact Database', 'Lead Research', 'B2B Sales Tools', 'Sales Automation'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-slate-200 border border-slate-200/50 rounded-md text-sm text-slate-700 hover:border-indigo-500/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center pt-8">
            <a
              href={clayTool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-600 transition-all text-lg"
            >
              Try Clay For Free <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const BestOutboundStackForFoundersPage = () => {
  // Filter tools for founders' core stack
  const foundersTools = TOOLS.filter(t => ['clay', 'reply', 'mailforge', 'hubspot'].includes(t.id));

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Best Outbound Stack for Founders 2025 - Complete Sales Setup Under $500/mo | Sales House</title>
        <meta name="description" content="The complete outbound sales stack for founders: Clay, Reply.io, Mailforge, and HubSpot. Book 40+ demos/month under $500. Proven by 100+ founder-led companies." />
        <meta name="keywords" content="founder sales stack, outbound sales for founders, best sales tools for startups, Clay Reply.io, sales automation founders, B2B lead generation" />
      </Helmet>

      <div className="p-6 max-w-5xl mx-auto">
        <Breadcrumb />

        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-sm font-semibold text-indigo-700 mb-4">
            For Founders
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The Best Outbound Sales Stack for Founders
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Book 40+ demos per month with this proven 4-tool stack. Total cost: <span className="font-bold text-indigo-600">$350-500/month</span>
          </p>
        </div>

        {/* Why This Stack */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why This Stack?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">$350-500</div>
              <div className="text-sm text-slate-600">Total monthly cost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">40+</div>
              <div className="text-sm text-slate-600">Demos booked/month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">2-3 weeks</div>
              <div className="text-sm text-slate-600">Time to first results</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-indigo-200">
            <p className="text-slate-700 leading-relaxed">
              This is the exact stack I recommend to every founder starting outbound. It's the minimum viable stack that actually works—no bloat, no unnecessary complexity. You get contact enrichment, multichannel outreach, email infrastructure, and a CRM to track it all.
            </p>
          </div>
        </div>

        {/* The Core 4 Tools */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Core 4 Tools</h2>
          <div className="space-y-6">
            {foundersTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} showChannels={tool.id === 'reply'} />
            ))}
          </div>
        </div>

        {/* Why These Specific Tools */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why These Specific Tools?</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🧠</span> Clay - Your AI Research Assistant
              </h3>
              <p className="text-slate-700 mb-4">
                Clay isn't just a contact database. It's an AI research assistant that enriches data from 50+ sources, builds custom signals, and qualifies leads before you even reach out. You can process 500+ companies in 10 minutes to find perfect-fit prospects.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Founder benefit:</strong> Spend your time selling to qualified leads, not researching.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📧</span> Reply.io - Multichannel Outreach Engine
              </h3>
              <p className="text-slate-700 mb-4">
                Reply handles email sequences, LinkedIn automation, and phone calls in one unified workflow. Most founders start with just email, but the multichannel capability means you can add LinkedIn when you're ready—without switching tools.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Founder benefit:</strong> One tool for all channels. No integration headaches.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📬</span> Mailforge - Email Infrastructure That Just Works
              </h3>
              <p className="text-slate-700 mb-4">
                At $29/mo, Mailforge handles domain warmup, inbox rotation, and deliverability automatically. You don't need to understand SPF/DKIM records or manage multiple inboxes manually. It just works.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Founder benefit:</strong> Set it and forget it. Focus on messaging, not infrastructure.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span> HubSpot - CRM That Grows With You
              </h3>
              <p className="text-slate-700 mb-4">
                HubSpot's free tier gives you everything you need to start: deal tracking, email integration, meeting scheduling, and basic reporting. As you grow, you can upgrade without migrating to a new CRM.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Founder benefit:</strong> Start free, scale to enterprise. No painful migrations.
              </div>
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="mb-12 bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Exact Cost Breakdown</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <div className="font-semibold text-slate-900">Clay.com</div>
                <div className="text-sm text-slate-600">5,000 credits/month</div>
              </div>
              <div className="text-lg font-bold text-slate-900">$149/mo</div>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <div className="font-semibold text-slate-900">Reply.io</div>
                <div className="text-sm text-slate-600">1,000 prospects/month</div>
              </div>
              <div className="text-lg font-bold text-slate-900">$60/mo</div>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <div className="font-semibold text-slate-900">Mailforge.ai</div>
                <div className="text-sm text-slate-600">Unlimited warmup + rotation</div>
              </div>
              <div className="text-lg font-bold text-slate-900">$29/mo</div>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <div className="font-semibold text-slate-900">HubSpot Sales Hub</div>
                <div className="text-sm text-slate-600">Free tier (2 users)</div>
              </div>
              <div className="text-lg font-bold text-slate-900">$0/mo</div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="text-xl font-bold text-slate-900">Total Monthly Cost</div>
              <div className="text-3xl font-bold text-indigo-600">$238/mo</div>
            </div>
            <div className="text-sm text-slate-600 pt-2">
              + $50-100/mo for domains and additional email accounts = <strong>$300-350/mo total</strong>
            </div>
          </div>
        </div>

        {/* What You Can Skip */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What You Can Skip (For Now)</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-lg">❌</span>
                <div>
                  <strong className="text-slate-900">Apollo, Lusha, ZoomInfo:</strong>
                  <span className="text-slate-700"> Clay already gives you access to these databases. No need to pay separately.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">❌</span>
                <div>
                  <strong className="text-slate-900">Instantly, Lemlist, Smartlead:</strong>
                  <span className="text-slate-700"> Reply.io does everything these tools do, plus LinkedIn and calls.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">❌</span>
                <div>
                  <strong className="text-slate-900">Salesforce, Pipedrive:</strong>
                  <span className="text-slate-700"> HubSpot free tier is enough until you hit 10+ people on the sales team.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Stack?</h2>
          <p className="text-lg mb-6 text-indigo-100">
            Get the complete implementation playbook with exact setup steps, campaign templates, and messaging frameworks.
          </p>
          <button
            onClick={() => {
              if (window._klOnsite) {
                window._klOnsite.openForm('SDqh4i');
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-slate-50 transition-all text-lg"
          >
            <Download className="w-5 h-5" />
            Download Free Playbook
          </button>
        </div>
      </div>
    </div>
  );
};

const ClayVsApolloPage = () => {
  const clayTool = TOOLS.find(t => t.id === 'clay');
  const apolloTool = TOOLS.find(t => t.id === 'apollo');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Clay vs Apollo 2025: Which B2B Data Tool Should You Actually Use?",
    "description": "Honest Clay vs Apollo comparison after using both for 6+ years. When to use Clay's AI enrichment vs Apollo's 200M+ database.",
    "image": "https://saleshousestack.com/og-image.png",
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saleshousestack.com/logo.png"
      }
    },
    "datePublished": "2025-12-18",
    "dateModified": "2025-12-18"
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Clay vs Apollo 2025: Which B2B Data Tool Should You Actually Use? | Sales House</title>
        <meta name="description" content="Honest Clay vs Apollo comparison after using both for 6+ years. When to use Clay's AI enrichment vs Apollo's 200M+ database. Complete breakdown with pricing, use cases, and my verdict." />
        <meta name="keywords" content="Clay vs Apollo, Clay.com Apollo comparison, B2B data tools, sales intelligence, contact enrichment, lead generation tools, Clay review, Apollo review" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="p-6 max-w-4xl mx-auto">
        <Breadcrumb />

        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-sm font-semibold text-purple-700">
              Comparison
            </div>
            <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-sm font-semibold text-indigo-700">
              B2B Data
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Contact Enrichment
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Clay vs Apollo: Which B2B Data Tool Should You Actually Use?
          </h1>
          <div className="text-lg text-slate-600 mb-4">2025 Edition</div>
        </div>

        {/* Verdict Box */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">⚖️</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">My Verdict Upfront</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                If you're still figuring out who to target, start with <strong>Apollo</strong>. Once you know your ICP and want better qualification, switch to <strong>Clay</strong>. If you're doing serious volume, you'll probably end up using both.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-indigo-200 text-sm text-slate-600">
            I've spent 6+ years running outbound for companies from 5-figure to 7-figure ARR. Here's what actually matters when choosing between these two.
          </div>
        </div>

        {/* Quick Comparison Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Feature</th>
                  <th className="text-left p-4 font-bold text-indigo-600 border-b border-slate-200">Clay</th>
                  <th className="text-left p-4 font-bold text-purple-600 border-b border-slate-200">Apollo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Best For</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">Known ICP, quality over volume</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">Testing markets, high volume</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Starting Price</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">$149/mo</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">$49/mo (or free)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Database Size</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">50+ sources via waterfall</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">200M+ contacts (proprietary)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Sequencing</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">None (pair with Reply.io/Instantly)</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">Basic (use Reply.io/Lemlist instead)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Key Strength</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">AI qualification + enrichment</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">Fast list building + testing</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700 border-b border-slate-100">Learning Curve</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">Expert</td>
                  <td className="p-4 text-slate-600 border-b border-slate-100">Beginner</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-700">My Use Case</td>
                  <td className="p-4 text-slate-600">Refinement phase</td>
                  <td className="p-4 text-slate-600">Discovery + scale phase</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex gap-4 justify-center">
            <a
              href="https://clay.com?via=c74a80"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2"
            >
              Try Clay Free <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://get.apollo.io/scaleoutbound"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-all flex items-center gap-2"
            >
              Try Apollo Free <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* When Clay Makes Sense */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">When Clay Makes Sense (And When It Doesn't)</h2>

          <div className="bg-white border border-indigo-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-green-600">✓</span> Use Clay When:
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Your ICP is crystal clear.</h4>
                <p className="text-slate-700">
                  You know exactly who you're targeting - specific titles, company sizes, tech stacks. Clay's AI qualification and waterfall enrichment shine here because you're not spray-and-pray anymore.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">You need deep enrichment.</h4>
                <p className="text-slate-700">
                  Clay pulls from 50+ data sources (ZoomInfo, Clearbit, People Data Labs, etc.) in a waterfall. If Apollo doesn't have the email, Clay will check 10 other places. Your hit rate goes from 60% to 85%+.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">You want AI-powered qualification.</h4>
                <p className="text-slate-700">
                  Clay lets you build qualification logic: "Only pull companies that raised Series A in the last 6 months AND use Salesforce AND are hiring SDRs." Apollo can filter, but Clay can <em>think</em>.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">You're okay with complexity.</h4>
                <p className="text-slate-700">
                  Clay is powerful but not simple. If you're technical or have 30 minutes to learn their table system, you'll love it. If you want plug-and-play, you won't.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-red-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">✗</span> Skip Clay If:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <div className="text-slate-700">
                  <strong>You're still testing who to target.</strong> Burning $149/mo on enrichment credits when you don't know your ICP yet is wasteful. Use Apollo's cheaper database first.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <div className="text-slate-700">
                  <strong>You need multichannel sequences.</strong> Clay doesn't send emails. You'll need to pair it with Reply.io, Instantly, or Lemlist for email + LinkedIn + calls in one flow.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <div className="text-slate-700">
                  <strong>You're doing 10,000+ contacts/month at scale.</strong> Clay's credit system gets expensive fast. Apollo's flat pricing makes more sense for pure volume plays.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* When Apollo Makes Sense */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">When Apollo Makes Sense (And When It Doesn't)</h2>

          <div className="bg-white border border-purple-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-green-600">✓</span> Use Apollo When:
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">You're testing multiple markets.</h4>
                <p className="text-slate-700">
                  Trying 5 different industries, 10 different titles, 3 different regions? Apollo's 200M+ database and granular filters let you test fast without burning enrichment credits.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">You need a simple database to start.</h4>
                <p className="text-slate-700">
                  Apollo has 200M+ contacts with solid filters. Don't use their sequencer though - it's limiting. Pair Apollo with Instantly, Reply.io, or Lemlist for actual sending.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">You're doing high-volume outreach.</h4>
                <p className="text-slate-700">
                  I'm talking thousands of contacts per month. Apollo's pricing structure ($49-$149/mo for unlimited contacts) makes this economical. Clay would cost you 3x-5x more.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">You want fast time-to-value.</h4>
                <p className="text-slate-700">
                  Apollo's learning curve is 30 minutes. Clay's is 3 hours. If you need to start sending today, Apollo wins.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-red-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">✗</span> Skip Apollo If:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <div className="text-slate-700">
                  <strong>Your ICP requires deep qualification.</strong> Apollo's filters are good but not smart. You can't say "find companies mentioned in TechCrunch in Q4 2024" - that's Clay territory.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <div className="text-slate-700">
                  <strong>You need best-in-class data accuracy.</strong> Apollo's proprietary database is solid (200M+ contacts) but not as accurate as Clay's waterfall approach pulling from premium sources.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <div className="text-slate-700">
                  <strong>You want multichannel outreach.</strong> Apollo's sequencer is basic - email only, limited steps. If you're doing LinkedIn + email + calls, use Reply.io or Instantly instead.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* The Hybrid Play */}
        <div className="mb-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Hybrid Play (How Both Tools Work Together)</h2>
          <p className="text-lg text-slate-700 mb-6">
            Apollo integrates directly with Clay. You can export lists from Apollo, push them into Clay for enrichment, then send via Reply.io or Instantly.
          </p>
          <div className="bg-white rounded-lg p-6 mb-6 border border-slate-300">
            <div className="font-mono text-sm text-slate-700 flex items-center gap-2 flex-wrap">
              <span className="bg-purple-100 px-3 py-1 rounded">Apollo</span>
              <span>→</span>
              <span className="bg-indigo-100 px-3 py-1 rounded">Clay</span>
              <span>→</span>
              <span className="bg-green-100 px-3 py-1 rounded">Reply.io/Instantly</span>
            </div>
            <div className="mt-3 text-sm text-slate-600">
              List building → Qualification/Enrichment → Multichannel Sequences
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="font-bold text-slate-900 mb-2">Cost Reality:</div>
            <div className="text-slate-700">
              Apollo ($49-99/mo) + Clay ($149-349/mo) + Reply.io ($99/mo) = <strong className="text-slate-900">$300-550/mo total</strong>
            </div>
            <div className="text-sm text-slate-600 mt-2">
              Still cheaper than one SDR ($4,500/mo) and you control the entire engine.
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Bottom Line: Which One Should You Pick?</h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Solo Founders Just Starting:</h3>
              <p className="text-slate-700 mb-4">
                <strong>Go with Apollo.</strong> You need volume and speed more than perfect data. Get 1,000 prospects in your CRM this week, not 100 perfect ones next month.
              </p>
              <a
                href="https://get.apollo.io/scaleoutbound"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-all"
              >
                Start with Apollo <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Founders with Consistent Growth:</h3>
              <p className="text-slate-700 mb-4">
                <strong>Upgrade to Clay.</strong> You've proven your ICP, now it's about conversion rate. Clay's enrichment and AI qualification will 2x your reply rates.
              </p>
              <a
                href="https://clay.com?via=c74a80"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
              >
                Try Clay Free <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Teams Doing Serious Volume (10+ SDRs):</h3>
              <p className="text-slate-700">
                <strong>Use both.</strong> Apollo for list building, Clay for enrichment on your best segments. Pair with Reply.io or Instantly for multichannel sequences (email + LinkedIn + calls).
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Agencies/Consultants:</h3>
              <p className="text-slate-700">
                <strong>Clay is your differentiator.</strong> Clients can buy Apollo themselves. They hire you for the qualification logic and enrichment strategies only Clay enables.
              </p>
            </div>
          </div>
        </div>

        {/* The Real Question */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Real Question Nobody Asks</h2>
          <p className="text-lg text-slate-700 mb-4">
            "Should I learn Clay or Apollo first?"
          </p>
          <p className="text-lg text-slate-900 font-bold mb-3">Apollo.</p>
          <p className="text-slate-700">
            Even if you end up on Clay long-term, understanding Apollo's database structure and filters teaches you how B2B data works. Clay is graduate school - don't skip undergrad.
          </p>
        </div>

        {/* Author's Stack */}
        <div className="mb-12 bg-slate-900 text-white rounded-xl p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">🚀</div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Top Tier Stack</h2>
              <p className="text-slate-300 text-lg">
                Apollo for discovery → Clay for enrichment → Reply.io for sending → HubSpot for tracking.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Help Setting This Up?</h2>
          <p className="text-lg mb-6 text-indigo-100">
            I help founders and sales teams build high-performing outbound systems with Clay, Apollo, and Reply.io.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:david@saleshousestack.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-slate-50 transition-all"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/davidvaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-800 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-900 transition-all"
            >
              Connect on LinkedIn <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
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

  const openPlaybookForm = () => {
    window._klOnsite = window._klOnsite || [];
    window._klOnsite.push(['openForm', 'SDqh4i']);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FEFEFE] font-sans text-slate-900">
        
        {/* Top Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-lg border-b border-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center shrink-0">
                         <Link to="/" className="flex items-center gap-2 group">
                             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(79,70,229,0.5)] group-hover:bg-indigo-600 transition-colors">
                                S
                             </div>
                             <span className="text-xl font-bold tracking-tight text-slate-900">Sales House</span>
                         </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLink to="/" icon={LayoutDashboard} label="Home" />
                        <NavLink to="/library" icon={Library} label="Library" />
                        <NavLink to="/strategies" icon={Layers} label="Playbook" />
                        {/* <NavLink to="/consulting" icon={Briefcase} label="Consulting" /> */}
                        <div className="h-6 w-px bg-slate-200 mx-2"></div>
                        <button
                            onClick={openPlaybookForm}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-600 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                        >
                            <Download className="w-4 h-4" /> Get Playbook
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-600 hover:text-slate-900 p-2"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-100 border-t border-slate-300 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-2xl">
                    <NavLink to="/" icon={LayoutDashboard} label="Home" onClick={() => setIsMobileMenuOpen(false)} />
                    <NavLink to="/library" icon={Library} label="Library" onClick={() => setIsMobileMenuOpen(false)} />
                    <NavLink to="/strategies" icon={Layers} label="Playbook" onClick={() => setIsMobileMenuOpen(false)} />
                    {/* <NavLink to="/consulting" icon={Briefcase} label="Consulting" onClick={() => setIsMobileMenuOpen(false)} /> */}
                    <a 
                        href="https://tally.so/r/mDOGeq" 
                        target="_blank" 
                        rel="noreferrer"
                        className="block w-full text-left px-3 py-2 text-indigo-600 font-bold hover:bg-slate-300 rounded-lg"
                    >
                        Get Free Playbook
                    </a>
                </div>
            )}
        </nav>

        {/* Main Content Area - Full Width */}
        <main className="w-full">
            <Routes>
              <Route path="/" element={<HomePage openPlaybookForm={openPlaybookForm} />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/best-outbound-stack-for-founders" element={<BestOutboundStackForFoundersPage />} />
              <Route path="/strategies" element={<StrategiesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/consulting" element={<ConsultingPage />} />
              <Route path="/reviews" element={<ReviewsListPage />} />
              <Route path="/reviews/clay" element={<ClayReviewPage />} />
              <Route path="/reviews/reply-io" element={<ReplyIOReviewPage />} />
              <Route path="/comparisons" element={<ComparisonsListPage />} />
              <Route path="/comparisons/clay-vs-apollo" element={<ClayVsApolloPage />} />
              <Route path="/comparisons/pipedrive-hubspot-salesforce" element={<CRMComparisonPage />} />
            </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
