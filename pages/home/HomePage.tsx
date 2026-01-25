import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  LayoutDashboard,
  Check,
  ArrowRight,
  Target,
  Database,
  Megaphone,
  ShieldCheck,
  AlertCircle,
  Phone,
  Trophy,
  Mail,
  Calendar,
  Linkedin,
  X,
  ChevronDown,
  ChevronUp,
  Heart,
  Download,
  FileText,
  Briefcase
} from 'lucide-react';
import { TOOLS } from '../../constants';
import { ToolCard } from '../../components/ToolCard';
import FAQItem from '../../components/FAQItem';

interface HomePageProps {
  openPlaybookForm: () => void;
}

const HomePage = ({ openPlaybookForm }: { openPlaybookForm: () => void }) => {
  const [showFullManifesto, setShowFullManifesto] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Promoted 3x during his tenure... a core asset to Whatagraph",
      author: "Frank Sondors",
      title: "CEO",
      company: "Forge"
    },
    {
      quote: "SDR to Client Partner in one year... incredibly good salesperson",
      author: "Vismantas",
      title: "Outbound Sales Lead",
      company: "Nord Security"
    },
    {
      quote: "My mentor for 3 years... strong foundations of SaaS sales process",
      author: "Janis",
      title: "Sr. Global Partnerships Manager",
      company: "Aviation Recruitment"
    }
  ];

  // Rotate testimonials every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
                Find the best sales tools for you
            </h1>

            {/* Testimonial Carousel */}
            <div className="mb-8 max-w-3xl mx-auto">
                <p className="text-sm font-semibold text-indigo-600 mb-4 uppercase tracking-wide">
                    Trusted by sales leaders who've scaled from SDR to VP
                </p>

                <div className="relative h-24 overflow-hidden">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ${
                                index === activeTestimonial
                                    ? 'opacity-100 transform translate-y-0'
                                    : 'opacity-0 transform -translate-y-4'
                            }`}
                        >
                            <blockquote className="text-center">
                                <p className="text-lg md:text-xl text-slate-700 italic mb-3">
                                    "{testimonial.quote}"
                                </p>
                                <footer className="text-sm text-slate-600">
                                    <span className="font-semibold text-slate-900">{testimonial.author}</span>
                                    , {testimonial.title} @ {testimonial.company}
                                </footer>
                            </blockquote>
                        </div>
                    ))}
                </div>

                {/* Carousel Dots */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === activeTestimonial
                                    ? 'bg-indigo-600 w-6'
                                    : 'bg-slate-300 hover:bg-slate-400'
                            }`}
                            aria-label={`View testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

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
                    <span>Updated for 2026</span>
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
                    <h2 className="text-3xl font-bold mb-2">My Recommended Stack (2026)</h2>
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
                        I've worked across SaaS, Fintech, and Traditional sales companies from early-stage to scale-up - spanning from <strong className="text-slate-900">5-figure ARR startups - 7-figure ARR companies</strong>. I've set up sales operations for:
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
                <div className="md:w-1/3 w-full hidden md:flex min-h-[600px]">
                    <div className="rounded-2xl border border-slate-300 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 w-full shadow-2xl">
                        {/* Background Image - Full Size */}
                        <div className="absolute inset-0">
                             <img
                                src="/david-profile.jpg"
                                alt="David Varan, Sales Operations Consultant and Founder of Sales House"
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                style={{ objectPosition: 'center 20%' }}
                                loading="lazy"
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

export default HomePage;
