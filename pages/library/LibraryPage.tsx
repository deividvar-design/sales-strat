import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Search,
  Filter,
  X,
  ExternalLink,
  Star,
  Mail,
  Linkedin
} from 'lucide-react';
import { TOOLS } from '../../constants';
import { TeamSize, ToolCategory } from '../../types';
import { ToolCard } from '../../components/ToolCard';
import Breadcrumb from '../../components/Breadcrumb';

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
               <meta name="description" content="Compare 15+ vetted sales engagement, CRM, and contact tools. Pricing, pros, cons, and channels - find your perfect sales stack." />
               <link rel="canonical" href="https://saleshousestack.com/library/" />
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


export default LibraryPage;
