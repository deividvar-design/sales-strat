
import React, { useState, useEffect, lazy, Suspense } from 'react';
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
import NavLink from './components/NavLink';
import CalendlyEmbed from './components/CalendlyEmbed';
import FAQItem from './components/FAQItem';
import Footer from './components/Footer';

// --- Lazy-loaded page components ---
const HomePage = lazy(() => import('./pages/home/HomePage'));
const LibraryPage = lazy(() => import('./pages/library/LibraryPage'));
const TestimonialsPage = lazy(() => import('./pages/testimonials/TestimonialsPage'));
const ColdEmailGuidePage = lazy(() => import('./pages/resources/ColdEmailGuidePage'));
const ColdEmailDeliverabilityPage = lazy(() => import('./pages/resources/ColdEmailDeliverabilityPage'));
const BestColdEmailSoftwarePage = lazy(() => import('./pages/resources/BestColdEmailSoftwarePage'));
const ResourcesListPage = lazy(() => import('./pages/resources/ResourcesListPage'));
const HowToPickAnICPWhenYouHaveZeroTractionPage = lazy(() => import('./pages/resources/HowToPickAnICPWhenYouHaveZeroTractionPage'));
const ThirtyDayOutboundPlanFirst5CustomersPage = lazy(() => import('./pages/resources/ThirtyDayOutboundPlanFirst5CustomersPage'));
const SolopreneurOutboundStackUnder100Mo2026Page = lazy(() => import('./pages/resources/SolopreneurOutboundStackUnder100Mo2026Page'));
const SolopreneurOutboundDailyPipelineRoutinePage = lazy(() => import('./pages/resources/SolopreneurOutboundDailyPipelineRoutinePage'));
const ReplyioSetupGuidePage = lazy(() => import('./pages/resources/ReplyioSetupGuidePage'));
const BuildFirstOutboundPlaybookPage = lazy(() => import('./pages/resources/BuildFirstOutboundPlaybookPage'));
const BuildingAsyncOutreachSequencesPage = lazy(() => import('./pages/resources/BuildingAsyncOutreachSequencesPage'));
const CRMSetupGuidePage = lazy(() => import('./pages/resources/CRMSetupGuidePage'));
const CRMComparisonPage = lazy(() => import('./pages/comparisons/CRMComparisonPage'));
const MixmaxReviewPage = lazy(() => import('./pages/reviews/MixmaxReviewPage'));
const ClayVsApolloPage = lazy(() => import('./pages/comparisons/ClayVsApolloPage'));
const ReplyVsInstantlyPage = lazy(() => import('./pages/comparisons/ReplyVsInstantlyPage'));
const ApolloVsZoomInfoVsCognism2026Page = lazy(() => import('./pages/comparisons/ApolloVsZoomInfoVsCognism2026Page'));
const InstantlyVsLemlistVsReplyioPage = lazy(() => import('./pages/comparisons/InstantlyVsLemlistVsReplyioPage'));
const InstantlyForBeginnersPage = lazy(() => import('./pages/resources/InstantlyForBeginnersPage'));
const FounderOutboundQualifyLeadsPage = lazy(() => import('./pages/resources/FounderOutboundQualifyLeadsPage'));

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen bg-[#FEFEFE] flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-slate-600">Loading...</p>
    </div>
  </div>
);

// --- Components still within App.tsx (will be extracted in Phase 2) ---

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
                <p className="text-slate-600 text-sm">Last Updated: January 2, 2026</p>
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
                <p className="text-slate-600 text-sm">Last Updated: January 2, 2026</p>
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
                    <div className="md:w-1/3 w-full hidden md:flex min-h-[600px]">
                        <div className="rounded-2xl border border-slate-300 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 w-full shadow-2xl">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src="/david-profile.jpg"
                                    alt="David Varan, Sales Operations Consultant and Founder of Sales House"
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ objectPosition: 'center 20%' }}
                                    loading="lazy"
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
    // FAQ Schema for SEO
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does the complete outbound sales stack cost per month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Up to $500 per month. If you skip a CRM, you can squeeze in under $350. However, when building a sales funnel, you'll want to follow up, create reminders, and track potential deals. If you're thinking long-term, don't skip the CRM. Most sales aren't accomplished through the first outreach - you'll be following up with the same contacts multiple times throughout a year until you land them."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to set up the full sales stack from scratch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With my experience, I could get it up and running in under 5-6 hours. For most people who haven't worked with these platforms, I'd say a safe bet is under 2 working days. Take it easy, don't rush things, and do it properly so you won't have to redo everything."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need technical skills to set up these tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, all the tools are fairly easy to use. It's pretty much like setting up your laptop or phone for the first time. It's really not rocket science."
          }
        },
        {
          "@type": "Question",
          "name": "Can I start with just a few tools and add more later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, I recommend starting with Reply.io + Clay OR Apollo. This gives you a tool to outreach with plus contacts to work with. You'll need to buy a domain for outbound, but you'll be limited by the volume of emails you can send initially."
          }
        },
        {
          "@type": "Question",
          "name": "How many demos per month can I realistically expect to book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I won't make empty promises - this really depends on market, messaging, and targeting. It can be as low as 5, it can be as high as hundreds a month. From my experience in a market where you have some competition and you add 40-50 new contacts monthly, 15 to 20 demos is a healthy target."
          }
        },
        {
          "@type": "Question",
          "name": "How long before I see results from outbound?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You'll see open rates the same day, reply rates within a few days. Realistically, within the first week, if you haven't gotten answers and your open rate is lower than 40%, work on the messaging - you probably have issues there."
          }
        },
        {
          "@type": "Question",
          "name": "What's a good reply rate for cold emails?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3-5% is a good benchmark for cold email reply rates."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in your fractional sales leadership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Audit, review, insights, recommendations, my hands-on work, and strategies. Every consultation I do is very case-by-case. We might be building just an outbound system, or in other cases, I might be helping you improve conversion rates, win rates, or recycle previous contacts. No company is identical, and I don't do cookie-cutter strategies."
          }
        },
        {
          "@type": "Question",
          "name": "Do you set up the tools for me or just advise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Either or both. I can consult, I can set everything up for you, or we can work together on implementation. It's flexible based on your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Should I hire an SDR or build this myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I would always recommend starting yourself first. Calculate how much an SDR costs locally. A good rule of thumb is if an SDR costs $2,000/month, they need to bring enough opportunities to generate $6,000 of revenue monthly - essentially a 3:1 ratio."
          }
        },
        {
          "@type": "Question",
          "name": "What's the #1 mistake founders make with outbound sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Writing emails that read like a marketing campaign. Your goal is to message like a friend and say 'Hey, I see you're having issues with this, I have a solution, worth a chat?' Less is more."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a big email list to get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It's subjective and depends on what verticals you're targeting. You might not have the privilege of a lot of contacts, so you need to be a bit more reserved on the scale of outreach and focus more on quality and follow-ups. But generally, we're speaking about thousands of contacts you can get from Clay, Apollo, or Lusha, so practically this isn't an area of concern."
          }
        }
      ]
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <Helmet>
              <title>FAQ - Cold Email & Sales Stack Questions Answered | Sales House</title>
              <meta name="description" content="Answers to cold email, tool selection, and outbound strategy questions. Learn how to build your sales stack for under $500/mo." />
              <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
              </script>
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
    },
    {
      slug: 'reply-vs-instantly',
      name: 'Reply.io vs Instantly',
      category: 'Cold Email & Outreach',
      excerpt: 'Multichannel powerhouse vs email simplicity. Which cold email tool wins for your use case? Complete breakdown with pricing and real-world insights.'
    },
    {
      slug: 'apollo-vs-zoominfo-vs-cognism-2026',
      name: 'Apollo vs ZoomInfo vs Cognism',
      category: 'B2B Data & Intelligence',
      excerpt: 'The practical breakdown: pricing reality, data quality (especially EMEA), GDPR posture, and who each tool is actually for.'
    },
    {
      slug: 'instantly-vs-lemlist-vs-replyio',
      name: 'Instantly vs Lemlist vs Reply.io',
      category: 'Cold Email & Outreach',
      excerpt: 'Email-first scale vs creative personalization vs true sales engagement. Pick the tool that matches your channel mix and workflow.'
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
      lastUpdated: 'Updated for 2026'
    },
    {
      id: 'reply',
      name: 'Reply.io',
      slug: 'reply-io',
      rating: 4.5,
      excerpt: 'Very versatile tool, highest level of multichannel capabilities',
      category: 'Sales Engagement',
      lastUpdated: 'Updated for 2026'
    },
    {
      id: 'mixmax',
      name: 'Mixmax',
      slug: 'mixmax',
      rating: 2.5,
      excerpt: 'A once-great tool that\'s now stuck in 2019. Overpriced, email-only, and significantly behind the competition',
      category: 'Sales Engagement',
      lastUpdated: 'Updated for 2026'
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
    "datePublished": "2026-01-02",
    "reviewBody": "Reply.io covers all the channels you need and gives you complete control to personalize when necessary. The price-to-functionality ratio is top-notch. I've used and set up Reply.io for 4 SaaS companies over the past year.",
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Reply.io Review 2026: My Experience After 4 SaaS Companies",
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
    "datePublished": "2026-01-02",
    "dateModified": "2026-01-02",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://saleshousestack.com/#/reviews/reply-io"
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Reply.io Review 2026: My Experience After 4 SaaS Companies | Sales House</title>
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
            <p className="text-slate-600">Updated for 2026</p>
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
    "datePublished": "2026-01-02",
    "reviewBody": "Clay is not just a contact database - it's a whole AI research assistant doing extra qualification, sending you signals, and preparing personalization angles. Qualifying 500+ companies in under 10 minutes to figure out if they're a good fit is a massive time saver.",
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Clay Review 2026: AI-Powered Research Assistant for Sales Teams",
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
    "datePublished": "2026-01-02",
    "dateModified": "2026-01-02",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://saleshousestack.com/#/reviews/clay"
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Clay Review 2026: AI-Powered Research Assistant for Sales Teams | Sales House</title>
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
            <p className="text-slate-600">Updated for 2026</p>
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
  const foundersTools = TOOLS.filter(t => ['apollo', 'reply', 'mailforge', 'pipedrive'].includes(t.id));

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Best Outbound Stack for Founders 2026 - Complete Sales Setup Under $300/mo | Sales House</title>
        <meta name="description" content="The complete outbound sales stack for founders: Apollo, Reply.io, Mailforge, and Pipedrive. Under $250/month. Proven by 100+ founder-led companies." />
        <meta name="keywords" content="founder sales stack, outbound sales for founders, best sales tools for startups, Apollo Reply.io, sales automation founders, B2B lead generation" />
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
            The proven 4-tool stack for outbound. Total cost: <span className="font-bold text-indigo-600">under $300/mo vs $4,500/mo for one SDR</span>
          </p>
        </div>

        {/* Why This Stack */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why This Stack?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">$150-250</div>
              <div className="text-sm text-slate-600">Total monthly cost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">2-3 weeks</div>
              <div className="text-sm text-slate-600">Time to first results</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-indigo-200">
            <p className="text-slate-700 leading-relaxed mb-4">
              This is the exact stack I recommend to every founder starting outbound. It's the minimum viable stack that actually works - no bloat, no unnecessary complexity. You get contact finding, multichannel outreach, email infrastructure, and a CRM to track it all.
            </p>
            <div className="flex gap-3 text-sm">
              <a href="/reviews" className="text-indigo-600 hover:text-indigo-700 font-medium underline">
                Read detailed tool reviews
              </a>
              <span className="text-slate-400">•</span>
              <a href="/comparisons" className="text-indigo-600 hover:text-indigo-700 font-medium underline">
                Compare alternatives
              </a>
            </div>
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
                <span className="text-2xl">🔍</span> Apollo - Contact Finding Database
              </h3>
              <p className="text-slate-700 mb-4">
                Apollo gives you access to 200M+ contacts with their proprietary database. It's straightforward contact finding - search by title, company size, industry, and export your list. When you're just starting outbound, Apollo's simplicity and database size make it the right choice for contact discovery.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Founder benefit:</strong> Fast contact finding without complexity. Start building your list immediately.
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200">
                <a href="/comparisons/clay-vs-apollo" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm inline-flex items-center gap-1">
                  Not sure if Apollo is right? Compare Clay vs Apollo →
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📧</span> Reply.io - Multichannel Outreach Engine
              </h3>
              <p className="text-slate-700 mb-4">
                Reply handles email sequences, LinkedIn automation, and phone calls in one unified workflow. The reason you need Reply is multichannel outreach - you don't want to limit yourself to just emails. Most founders start with email, but having LinkedIn and calls ready means you can expand your reach without switching tools.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Founder benefit:</strong> One tool for all channels. No integration headaches when you scale.
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200">
                <a href="/comparisons/reply-vs-instantly" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm inline-flex items-center gap-1">
                  Wondering about alternatives? Compare Reply.io vs Instantly →
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📬</span> Mailforge - Email Infrastructure
              </h3>
              <p className="text-slate-700 mb-4">
                At $29/mo, Mailforge handles domain warmup, inbox rotation, and deliverability. It's okay - gets the job done for email infrastructure without you needing to understand SPF/DKIM records or manage multiple inboxes manually.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Founder benefit:</strong> Set it and forget it. Focus on messaging, not technical setup.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span> Pipedrive - Simple CRM for Founders
              </h3>
              <p className="text-slate-700 mb-4">
                Pipedrive is the CRM I recommend as your initial system. It's very easy to upgrade in the future when you scale, and you don't overspend initially on features you don't need yet. Plus, it has all the integrations you'll need with Reply.io and your other tools.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Founder benefit:</strong> Affordable now, easy to upgrade later. Built for sales teams from day one.
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200">
                <a href="/comparisons/pipedrive-hubspot-salesforce" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm inline-flex items-center gap-1">
                  Compare Salesforce vs HubSpot vs Pipedrive →
                </a>
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
                <div className="font-semibold text-slate-900">Apollo.io</div>
                <div className="text-sm text-slate-600">Free or Basic plan ($49/mo for unlimited exports)</div>
              </div>
              <div className="text-lg font-bold text-slate-900">$0-49/mo</div>
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
                <div className="font-semibold text-slate-900">Pipedrive</div>
                <div className="text-sm text-slate-600">Essential plan (1 user)</div>
              </div>
              <div className="text-lg font-bold text-slate-900">$15/mo</div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div className="text-xl font-bold text-slate-900">Total Monthly Cost</div>
              <div className="text-3xl font-bold text-indigo-600">$104-153/mo</div>
            </div>
            <div className="text-sm text-slate-600 pt-2">
              + $50-100/mo for domains and additional email accounts = <strong>$150-250/mo total</strong>
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
                  <strong className="text-slate-900">Clay, Lusha, ZoomInfo:</strong>
                  <span className="text-slate-700"> Apollo's database is sufficient when you're starting. Save the advanced enrichment tools for when you've validated your ICP.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">❌</span>
                <div>
                  <strong className="text-slate-900">Instantly, Lemlist, Smartlead:</strong>
                  <span className="text-slate-700"> Reply.io does everything these tools do, plus LinkedIn and calls in one platform.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">❌</span>
                <div>
                  <strong className="text-slate-900">Salesforce, HubSpot:</strong>
                  <span className="text-slate-700"> Pipedrive is simpler and more affordable. Upgrade to HubSpot when you add marketing, or Salesforce when you hit enterprise scale.</span>
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

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

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
                        <NavLink to="/testimonials" icon={Heart} label="Testimonials" />
                        <NavLink to="/best-outbound-stack-for-founders" icon={Briefcase} label="For Founders" />

                        {/* Resources Dropdown */}
                        <div className="relative">
                          <button
                            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                            onBlur={() => setTimeout(() => setIsResourcesOpen(false), 200)}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium text-slate-600 hover:bg-slate-300 hover:text-slate-900"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                              <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                              <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                            </svg>
                            <span>Resources</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}>
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>

                          {isResourcesOpen && (
                            <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                              <Link
                                to="/resources"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div className="font-semibold">Resources</div>
                                <div className="text-xs text-slate-500">Guides and playbooks</div>
                              </Link>
                              <Link
                                to="/reviews"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div className="font-semibold">Reviews</div>
                                <div className="text-xs text-slate-500">Expert tool reviews</div>
                              </Link>
                              <Link
                                to="/comparisons"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div className="font-semibold">Comparisons</div>
                                <div className="text-xs text-slate-500">Side-by-side tool comparisons</div>
                              </Link>
                              <Link
                                to="/resources/cold-email-guide"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div className="font-semibold">Cold Email Guide</div>
                                <div className="text-xs text-slate-500">Scale-tested copywriting templates</div>
                              </Link>
                              <Link
                                to="/resources/best-cold-email-software"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div className="font-semibold">Best Cold Email Software</div>
                                <div className="text-xs text-slate-500">Instantly vs Lemlist vs Reply.io (2026)</div>
                              </Link>
                              <Link
                                to="/resources/how-to-pick-an-icp-when-you-have-zero-traction"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div className="font-semibold">How to Pick an ICP</div>
                                <div className="text-xs text-slate-500">If you have zero traction</div>
                              </Link>
                              <Link
                                to="/resources/30-day-outbound-plan-first-5-customers"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div className="font-semibold">30-Day Outbound Plan</div>
                                <div className="text-xs text-slate-500">Get your first 5 customers</div>
                              </Link>
                              <Link
                                to="/resources/solopreneur-outbound-stack-under-100-mo-2026"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div className="font-semibold">Solopreneur Outbound Stack</div>
                                <div className="text-xs text-slate-500">Under $100/mo (2026)</div>
                              </Link>
                              <Link
                                to="/strategies"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                                onClick={() => setIsResourcesOpen(false)}
                              >
                                <div className="font-semibold">Playbook</div>
                                <div className="text-xs text-slate-500">Free outbound sales playbook</div>
                              </Link>
                            </div>
                          )}
                        </div>

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
                    <NavLink to="/testimonials" icon={Heart} label="Testimonials" onClick={() => setIsMobileMenuOpen(false)} />
                    <NavLink to="/best-outbound-stack-for-founders" icon={Briefcase} label="For Founders" onClick={() => setIsMobileMenuOpen(false)} />

                    {/* Resources Section */}
                    <div className="border-t border-slate-300 pt-2 mt-2">
                      <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Resources</div>
                      <Link
                        to="/resources"
                        className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-300 rounded-lg"
                        onClick={() => { setIsMobileMenuOpen(false); }}
                      >
                        All Resources
                      </Link>
                      <Link
                        to="/reviews"
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-300 rounded-lg"
                        onClick={() => { setIsMobileMenuOpen(false); }}
                      >
                        Reviews
                      </Link>
                      <Link
                        to="/comparisons"
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-300 rounded-lg"
                        onClick={() => { setIsMobileMenuOpen(false); }}
                      >
                        Comparisons
                      </Link>
                      <Link
                        to="/resources/cold-email-guide"
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-300 rounded-lg"
                        onClick={() => { setIsMobileMenuOpen(false); }}
                      >
                        Cold Email Guide
                      </Link>
                      <Link
                        to="/resources/best-cold-email-software"
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-300 rounded-lg"
                        onClick={() => { setIsMobileMenuOpen(false); }}
                      >
                        Best Cold Email Software
                      </Link>
                      <Link
                        to="/resources/how-to-pick-an-icp-when-you-have-zero-traction"
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-300 rounded-lg"
                        onClick={() => { setIsMobileMenuOpen(false); }}
                      >
                        How to Pick an ICP
                      </Link>
                      <Link
                        to="/resources/30-day-outbound-plan-first-5-customers"
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-300 rounded-lg"
                        onClick={() => { setIsMobileMenuOpen(false); }}
                      >
                        30-Day Outbound Plan
                      </Link>
                      <Link
                        to="/resources/solopreneur-outbound-stack-under-100-mo-2026"
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-300 rounded-lg"
                        onClick={() => { setIsMobileMenuOpen(false); }}
                      >
                        Solopreneur Stack
                      </Link>
                      <Link
                        to="/strategies"
                        className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-300 rounded-lg"
                        onClick={() => { setIsMobileMenuOpen(false); }}
                      >
                        Playbook
                      </Link>
                    </div>

                    <a
                        href="https://tally.so/r/mDOGeq"
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full text-left px-3 py-2 text-indigo-600 font-bold hover:bg-slate-300 rounded-lg mt-2"
                    >
                        Get Free Playbook
                    </a>
                </div>
            )}
        </nav>

        {/* Main Content Area - Full Width */}
        <main className="w-full">
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage openPlaybookForm={openPlaybookForm} />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/best-outbound-stack-for-founders" element={<BestOutboundStackForFoundersPage />} />
                <Route path="/strategies" element={<StrategiesPage />} />
                <Route path="/resources" element={<ResourcesListPage />} />
                <Route path="/resources/cold-email-guide" element={<ColdEmailGuidePage />} />
                <Route path="/resources/cold-email-deliverability-founders" element={<ColdEmailDeliverabilityPage />} />
                <Route path="/resources/best-cold-email-software" element={<BestColdEmailSoftwarePage />} />
                <Route path="/resources/how-to-pick-an-icp-when-you-have-zero-traction" element={<HowToPickAnICPWhenYouHaveZeroTractionPage />} />
                <Route path="/resources/30-day-outbound-plan-first-5-customers" element={<ThirtyDayOutboundPlanFirst5CustomersPage />} />
                <Route path="/resources/solopreneur-outbound-stack-under-100-mo-2026" element={<SolopreneurOutboundStackUnder100Mo2026Page />} />
                <Route path="/resources/solopreneur-outbound-pipeline-routine" element={<SolopreneurOutboundDailyPipelineRoutinePage />} />
                <Route path="/resources/replyio-setup-guide" element={<ReplyioSetupGuidePage />} />
                <Route path="/resources/build-first-outbound-playbook" element={<BuildFirstOutboundPlaybookPage />} />
                <Route path="/resources/building-async-outreach-sequences" element={<BuildingAsyncOutreachSequencesPage />} />
                <Route path="/resources/crm-setup-guide" element={<CRMSetupGuidePage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/consulting" element={<ConsultingPage />} />
                <Route path="/reviews" element={<ReviewsListPage />} />
                <Route path="/reviews/clay" element={<ClayReviewPage />} />
                <Route path="/reviews/reply-io" element={<ReplyIOReviewPage />} />
                <Route path="/reviews/mixmax" element={<MixmaxReviewPage />} />
                <Route path="/comparisons" element={<ComparisonsListPage />} />
                <Route path="/comparisons/clay-vs-apollo" element={<ClayVsApolloPage />} />
                <Route path="/comparisons/pipedrive-hubspot-salesforce" element={<CRMComparisonPage />} />
                <Route path="/comparisons/reply-vs-instantly" element={<ReplyVsInstantlyPage />} />
                <Route path="/comparisons/apollo-vs-zoominfo-vs-cognism-2026" element={<ApolloVsZoomInfoVsCognism2026Page />} />
                <Route path="/comparisons/instantly-vs-lemlist-vs-replyio" element={<InstantlyVsLemlistVsReplyioPage />} />
                <Route path="/resources/instantly-for-beginners-safe-scaling" element={<InstantlyForBeginnersPage />} />
                <Route path="/resources/founder-outbound-qualify-leads" element={<FounderOutboundQualifyLeadsPage />} />
              </Routes>
            </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
