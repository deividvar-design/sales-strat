import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Check, X, ArrowRight, Zap, AlertTriangle, Database } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import { TOOLS } from '../../constants';

const BuildFirstOutboundPlaybookPage = () => {
  const replyTool = TOOLS.find(t => t.id === 'reply');
  const instantlyTool = TOOLS.find(t => t.id === 'instantly');
  const apolloTool = TOOLS.find(t => t.id === 'apollo');

  const replyLink = replyTool?.website || 'https://reply.io';
  const instantlyLink = instantlyTool?.website || 'https://instantly.ai';
  const apolloLink = apolloTool?.website || 'https://apollo.io';

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>How Vibecoders Sell: The "Build-First" Outbound Playbook | Sales House</title>
        <meta name="title" content="How Vibecoders Sell: The Build-First Outbound Playbook" />
        <meta name="description" content="Outbound for technical founders who'd rather build than schmooze. Start with 2 tools, no phone calls required. Systems-first approach to customer acquisition." />
        <meta name="keywords" content="technical founder sales, developer sales, build-first outbound, automated outbound, engineer sales, technical selling, founder-led sales, outbound automation" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://saleshousestack.com/resources/build-first-outbound-playbook" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://saleshousestack.com/resources/build-first-outbound-playbook" />
        <meta property="og:title" content="How Vibecoders Sell: The Build-First Outbound Playbook" />
        <meta property="og:description" content="Outbound for technical founders who'd rather build than schmooze. Start with 2 tools, no phone calls required." />
        <meta property="og:image" content="https://saleshousestack.com/saleshouse-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://saleshousestack.com/resources/build-first-outbound-playbook" />
        <meta name="twitter:title" content="How Vibecoders Sell: The Build-First Outbound Playbook" />
        <meta name="twitter:description" content="Outbound for technical founders who'd rather build than schmooze. Systems-first approach to customer acquisition." />
        <meta name="twitter:image" content="https://saleshousestack.com/saleshouse-logo.png" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Vibecoders Sell: The Build-First Outbound Playbook",
            "author": {
              "@type": "Person",
              "name": "David Varan",
              "url": "https://saleshousestack.com/consulting"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sales House",
              "logo": {
                "@type": "ImageObject",
                "url": "https://saleshousestack.com/saleshouse-logo.png"
              }
            },
            "datePublished": "2026-02-02",
            "dateModified": "2026-02-02",
            "mainEntityOfPage": "https://saleshousestack.com/resources/build-first-outbound-playbook",
            "image": "https://saleshousestack.com/saleshouse-logo.png",
            "articleSection": "Sales Strategy",
            "keywords": ["technical founder", "developer sales", "outbound automation", "build-first"]
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <Breadcrumb />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-xs font-bold text-indigo-700 mb-4 uppercase tracking-wider">
            For Technical Founders
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How Vibecoders Sell: The "Build-First" Outbound Playbook
          </h1>
          <div className="flex items-center gap-6 text-sm text-slate-600 mb-6">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Systems-first approach</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>2-3 hour setup</span>
            </div>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            Outbound for technical founders who'd rather build than schmooze. Start with 2 tools, no phone calls required. Systems-first approach to customer acquisition.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            You're a developer. You built something people need. Now you have to sell it.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Every sales guide tells you to "pick up the phone," "build rapport," and "leverage your network." Cool. But you don't have a network. You hate phone calls. And the phrase "circling back" makes you want to quit business entirely.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Here's the good news: modern outbound is just another system to build. You don't need to become a salesperson. You need to build a machine that finds people, sends them a message, and tells you who's interested.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed font-semibold">
            Then you only talk to the people who actually want to talk to you.
          </p>
        </section>

        {/* Why Traditional Sales Doesn't Work */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Traditional Sales Advice Doesn't Work for You</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Let's be honest about what makes you different.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Traditional sales feels like:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>Repetitive manual tasks (copying prospect info into spreadsheets)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>No clear metrics (what does "build rapport" even mean?)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>High touch, low scale (100 conversations to close 1 deal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>Subjective feedback ("they just weren't ready")</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">You're used to:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Writing something once, running it 1000 times</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Clear error messages and logs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Low touch, high scale (ship once, serve thousands)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Objective metrics (uptime, response time, conversion rate)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-6">
            <p className="text-lg mb-3">The gap is real. But here's what nobody tells you:</p>
            <p className="text-xl font-bold">
              Outbound in 2026 works exactly like building a product. You can build a system that does 90% of the work.
            </p>
          </div>
        </section>

        {/* Build-First Philosophy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Build-First Philosophy</h2>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <p className="text-slate-700 mb-4">
              <strong className="text-slate-900">Traditional sales:</strong> "Talk to 100 customers to find product-market fit."
            </p>
            <p className="text-slate-700">
              That's fine if you enjoy talking to strangers. But if you're reading this, you probably don't.
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">The build-first approach:</h3>
            <ol className="space-y-3 text-slate-700 ml-6">
              <li className="list-decimal">Build the outbound system (2-3 hours of focused work)</li>
              <li className="list-decimal">Let it run and send 200-500 messages</li>
              <li className="list-decimal">Only talk to the people who respond</li>
              <li className="list-decimal">Iterate on the system based on data</li>
              <li className="list-decimal">Scale when it works</li>
            </ol>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8">
            <p className="text-lg mb-4">This isn't laziness. It's efficiency.</p>
            <p className="text-xl font-bold">
              The people who reply to cold outreach have the pain point bad enough to respond to a stranger. Those are your best early customers anyway.
            </p>
          </div>
        </section>

        {/* Your Outbound Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Outbound Stack (2 Tools, That's It)</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Forget the 47-tool "modern sales stack." You literally need two things:
          </p>

          {/* Apollo.io */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <Database className="w-8 h-8 text-indigo-600 shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">1. Apollo.io - Find People ($0-$49/mo)</h3>
                <p className="text-slate-700 mb-4">
                  <strong>What it does:</strong> Database of 260M contacts. Search by job title, company size, industry, tech stack.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>Why you need it:</strong> You can't sell to people you don't know exist. Apollo is your <code className="bg-slate-100 px-2 py-1 rounded text-sm">SELECT * FROM prospects WHERE role = 'founder' AND company_size = '1-10'</code> query.
                </p>
                <p className="text-slate-700 mb-6">
                  The free plan gives you 50 contacts/month. That's enough to start.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-slate-900 mb-3">How to use it:</h4>
                  <ol className="space-y-2 text-slate-700 ml-6">
                    <li className="list-decimal">Define your ICP (Ideal Customer Profile) in their filters</li>
                    <li className="list-decimal">Export contacts</li>
                    <li className="list-decimal">Done</li>
                  </ol>
                </div>

                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-3">Example ICP for a dev tool:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• <strong>Job title:</strong> "CTO", "Engineering Manager", "Technical Founder"</li>
                    <li>• <strong>Company size:</strong> 11-50 employees</li>
                    <li>• <strong>Industry:</strong> SaaS, Computer Software</li>
                    <li>• <strong>Technologies:</strong> React, Node.js, AWS</li>
                  </ul>
                  <p className="text-slate-700 mt-4 font-semibold">
                    Run the search. Export. You have prospects in 5 minutes.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <a
                    href={apolloLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Try Apollo Free
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tool Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Instantly */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">2A. Instantly - Email Only ($37/mo)</h3>
              <p className="text-slate-700 mb-4">
                <strong>What it does:</strong> Sends automated email sequences. Tracks opens, replies, manages follow-ups.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>When to use it:</strong> You want the cheapest option that works. Email-only outreach.
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-slate-900 mb-3">Pros:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Cheap ($37/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Simple interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Good for high volume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>Includes email warmup</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-3">Cons:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Email only (no LinkedIn)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Basic features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Lower reply rates than multichannel</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <a
                  href={instantlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Try Instantly Free
                </a>
              </div>
            </div>

            {/* Reply.io */}
            <div className="bg-indigo-50 border-2 border-indigo-600 rounded-xl p-6">
              <div className="inline-block px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded mb-2">
                BEST RESULTS
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2B. Reply.io - Multichannel ($89/mo)</h3>
              <p className="text-slate-700 mb-4">
                <strong>What it does:</strong> Automated email + LinkedIn sequences in one flow. Sends emails, connection requests, LinkedIn messages, all coordinated.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>When to use it:</strong> You want the best results and you're targeting B2B (which you probably are).
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-slate-900 mb-3">Pros:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Email + LinkedIn = 2-3x better reply rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Conditional logic (if they connect on LinkedIn, send message)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Professional outreach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Better for technical/B2B audiences</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-3">Cons:</h4>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>More expensive ($89/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Slightly more complex setup</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-indigo-200">
                <a
                  href={replyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Try Reply.io Free
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">My honest take:</h3>
            <p className="text-lg mb-4">
              If you can afford $89/mo, use Reply.io. The LinkedIn component makes a huge difference. Your prospects are on LinkedIn. Most technical founders respond better to LinkedIn messages than cold emails.
            </p>
            <p className="text-xl font-bold">
              Email-only feels like spam. Email + LinkedIn feels like someone actually trying to connect.
            </p>
          </div>
        </section>

        {/* The Actual Workflow */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Actual Workflow (Dead Simple)</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Here's what you're building. Takes 2-3 hours total.
          </p>

          {/* Step 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 1: Build Your List in Apollo (30 minutes)</h3>
            <ol className="space-y-3 text-slate-700 ml-6 mb-6">
              <li className="list-decimal">Go to <a href={apolloLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">Apollo.io</a></li>
              <li className="list-decimal">Sign up (free plan is fine to start)</li>
              <li className="list-decimal">Click "Search" and set filters for your ICP</li>
              <li className="list-decimal">Click "Search People"</li>
              <li className="list-decimal">Export 50 contacts (CSV)</li>
            </ol>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Example filters:</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Person Title:</strong> "CTO", "VP Engineering", "Technical Founder"</li>
                <li>• <strong>Company Headcount:</strong> 11-50</li>
                <li>• <strong>Company Industry:</strong> "Computer Software", "SaaS"</li>
                <li>• <strong>Company Technologies:</strong> "React", "Node.js" (whatever your tool integrates with)</li>
                <li>• <strong>Location:</strong> United States (or wherever you want to sell)</li>
              </ul>
              <p className="text-slate-700 mt-4 font-semibold">
                That's it. You now have 50 potential customers with their names, emails, job titles, and LinkedIn profiles.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 2: Write Your Sequence (30 minutes)</h3>
            <p className="text-slate-700 mb-6">Open a doc and write 3 emails. Here's the template:</p>

            {/* Email 1 */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Email 1 (Day 1) - The Intro</h4>
              <div className="bg-slate-50 rounded-lg p-6 font-mono text-sm">
                <p className="mb-3"><strong>Subject:</strong> quick question</p>
                <p className="mb-3">[First name],</p>
                <p className="mb-3">Saw you're [their role] at [company]. Most engineering teams your size struggle with [specific problem your tool solves].</p>
                <p className="mb-3">We built [your tool] to help teams [outcome] without [common pain point].</p>
                <p className="mb-3">Worth a quick 15-min demo?</p>
                <p className="mb-3">[Your name]</p>
                <p className="mb-3">[Your title]</p>
                <p>[Link to product]</p>
              </div>
            </div>

            {/* Email 2 */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Email 2 (Day 4) - The Follow-Up</h4>
              <div className="bg-slate-50 rounded-lg p-6 font-mono text-sm">
                <p className="mb-3"><strong>Subject:</strong> re: quick question</p>
                <p className="mb-3">[First name],</p>
                <p className="mb-3">Following up on my email from Monday.</p>
                <p className="mb-3">If [problem] isn't a priority right now, no worries. But if it is, I can show you how [similar company or competitor] solved it in under 2 weeks.</p>
                <p className="mb-3">Interested?</p>
                <p>[Your name]</p>
              </div>
            </div>

            {/* Email 3 */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3">Email 3 (Day 7) - The Break-Up</h4>
              <div className="bg-slate-50 rounded-lg p-6 font-mono text-sm">
                <p className="mb-3"><strong>Subject:</strong> closing the loop</p>
                <p className="mb-3">[First name],</p>
                <p className="mb-3">Haven't heard back, so assuming this isn't relevant right now.</p>
                <p className="mb-3">If anything changes, feel free to reach out. Otherwise I'll stop bothering you.</p>
                <p className="mb-3">Cheers,</p>
                <p>[Your name]</p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Why this structure works:</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Email 1:</strong> Short, specific, low commitment</li>
                <li>• <strong>Email 2:</strong> Adds social proof, gives them an out</li>
                <li>• <strong>Email 3:</strong> Break-up emails get 30% of total replies (people respond when you say goodbye)</li>
              </ul>
              <p className="text-slate-700 mt-4 font-semibold">
                Keep it conversational. Write like you'd DM them on Twitter, not like you're pitching a VC.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 3: Set Up Your Tool (1 hour)</h3>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">If using Instantly:</h4>
              <ol className="space-y-3 text-slate-700 ml-6">
                <li className="list-decimal">Sign up at <a href={instantlyLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">Instantly.ai</a></li>
                <li className="list-decimal">Connect your email (use a secondary domain, NOT your main company email)</li>
                <li className="list-decimal">Import your Apollo CSV</li>
                <li className="list-decimal">Create a campaign with your 3 emails</li>
                <li className="list-decimal">Set daily limit to 30 emails/day</li>
                <li className="list-decimal">Turn on email warmup</li>
                <li className="list-decimal">Launch</li>
              </ol>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">If using Reply.io (recommended):</h4>
              <ol className="space-y-3 text-slate-700 ml-6 mb-6">
                <li className="list-decimal">Sign up at <a href={replyLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">Reply.io</a></li>
                <li className="list-decimal">Connect your email (again, secondary domain)</li>
                <li className="list-decimal">Install the Chrome extension (for LinkedIn automation)</li>
                <li className="list-decimal">Import your Apollo CSV</li>
                <li className="list-decimal">Create a new sequence:
                  <ul className="ml-6 mt-2 space-y-2 text-sm">
                    <li>• Step 1: Email (Day 1)</li>
                    <li>• Step 2: LinkedIn connection request (Day 2)</li>
                    <li>• Step 3: Email follow-up (Day 4) - only if no reply</li>
                    <li>• Step 4: LinkedIn message (Day 5) - only if they connected</li>
                    <li>• Step 5: Email break-up (Day 7) - only if no reply</li>
                  </ul>
                </li>
                <li className="list-decimal">Set limits: 30 emails/day, 20 LinkedIn connections/day</li>
                <li className="list-decimal">Turn on email warmup</li>
                <li className="list-decimal">Launch</li>
              </ol>

              <div className="bg-white border border-indigo-300 rounded p-4 mb-4">
                <p className="text-sm text-slate-700 mb-2"><strong>The LinkedIn connection request note:</strong></p>
                <p className="font-mono text-sm">Hi [First name], came across [company] and wanted to connect. Building tools for engineering teams like yours.</p>
              </div>

              <div className="bg-white border border-indigo-300 rounded p-4">
                <p className="text-sm text-slate-700 mb-2"><strong>The LinkedIn message (if they connect):</strong></p>
                <p className="font-mono text-sm">Thanks for connecting, [First name]. Did my email about [problem] land with you? Happy to show you a quick demo of how we solve this.</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-900 text-white rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold mb-4">Step 4: Let It Run (1 week)</h3>
            <p className="text-lg mb-4">Do literally nothing. The system is working:</p>
            <ul className="space-y-2 text-slate-200">
              <li>• Instantly/Reply.io is sending emails automatically</li>
              <li>• Reply.io is also sending LinkedIn requests and messages</li>
              <li>• Follow-ups happen automatically after 3-4 days</li>
            </ul>
            <p className="text-xl font-bold mt-6">
              You're building features. The outbound machine is running in the background.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 5: Reply to Interested People (ongoing)</h3>
            <p className="text-slate-700 mb-4">
              After a week, check your inbox. You'll probably have 5 responses from 50 people (10% reply rate is normal, higher with Reply.io's multichannel).
            </p>
            <p className="text-slate-700 mb-6 font-semibold">
              Now you only talk to these 5 people. Not all 50. Not random cold calls. Just the ones who are interested.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Reply to them like a human:</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• Answer their questions</li>
                <li>• Send a calendar link</li>
                <li>• Do a demo</li>
                <li>• Close the deal</li>
              </ul>
              <p className="text-slate-700 mt-4 font-semibold">
                This is the only part you can't automate.
              </p>
            </div>
          </div>
        </section>

        {/* Why Multichannel Gets Better Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Multichannel (Reply.io) Gets Better Results</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Here's the data from my experience setting this up for technical founders:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Email-only approach (Instantly):</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• 2-5% reply rate</li>
                <li>• Lower meeting conversion</li>
                <li>• Feels more like spam</li>
                <li>• Cheaper ($37/mo)</li>
              </ul>
            </div>

            <div className="bg-indigo-50 border-2 border-indigo-600 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Multichannel approach (Reply.io):</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>8-12% reply rate (2-3x better)</strong></li>
                <li>• Higher meeting conversion</li>
                <li>• Feels more personal</li>
                <li>• More expensive ($89/mo)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Why LinkedIn makes the difference:</h3>
            <p className="text-lg mb-4">
              When someone sees your email AND sees you viewed their LinkedIn profile AND gets a connection request AND then sees another email - you're no longer a random spammer. You're a real person making an effort to connect.
            </p>
            <p className="text-xl font-bold">
              Technical founders especially respond better on LinkedIn. It's where they network, where they hire, where they share their work. Email is where they get Salesforce demos.
            </p>
          </div>
        </section>

        {/* The Mental Model Shift */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Mental Model Shift</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Here's the key insight: You're not "doing sales." You're building a lead generation system.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Traditional sales:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Input:</strong> Your time and effort</li>
                <li>• <strong>Output:</strong> Maybe some leads</li>
                <li>• <strong>Scaling:</strong> Hire more salespeople</li>
              </ul>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Build-first outbound:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• <strong>Input:</strong> 2-3 hours of setup</li>
                <li>• <strong>Output:</strong> Qualified, interested leads</li>
                <li>• <strong>Scaling:</strong> Add more prospects to the system</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-8">
            <p className="text-lg mb-4">It's the same mental model as building software:</p>
            <ul className="space-y-3 text-slate-200">
              <li>• Write code once → runs 1000 times</li>
              <li>• Build outbound system once → generates leads continuously</li>
            </ul>
            <p className="text-xl font-bold mt-6">
              You're not "networking" or "hustling." You're engineering a scalable customer acquisition channel.
            </p>
          </div>
        </section>

        {/* What Success Looks Like */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Success Looks Like</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Week 1:</h3>
              <ul className="space-y-2 text-slate-700 ml-6">
                <li className="list-disc">System built and running</li>
                <li className="list-disc">First 50 prospects contacted</li>
                <li className="list-disc">5 replies in your inbox</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Week 2:</h3>
              <ul className="space-y-2 text-slate-700 ml-6">
                <li className="list-disc">Had 3-4 conversations</li>
                <li className="list-disc">Booked 1-2 demos</li>
                <li className="list-disc">Learned what messaging works</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Week 3:</h3>
              <ul className="space-y-2 text-slate-700 ml-6">
                <li className="list-disc">Refined your targeting based on who replied</li>
                <li className="list-disc">Adjusted email copy based on objections</li>
                <li className="list-disc">Added 50 more prospects from Apollo</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Month 2:</h3>
              <ul className="space-y-2 text-slate-700 ml-6">
                <li className="list-disc">System is running with minimal maintenance</li>
                <li className="list-disc">Consistent flow of qualified leads</li>
                <li className="list-disc">You only spend time on interested prospects</li>
              </ul>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Month 3:</h3>
              <ul className="space-y-2 text-slate-700 ml-6">
                <li className="list-disc">First customers from outbound</li>
                <li className="list-disc">ROI is obvious</li>
                <li className="list-disc">You scale up to 100+ prospects/week</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8 mt-6">
            <p className="text-xl font-bold">
              This is what "product-led outbound" actually means. You build the system once. It runs continuously. You only engage when someone shows interest.
            </p>
          </div>
        </section>

        {/* For the Hardcore */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">For the Hardcore: APIs Exist</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            If you want full control, both Apollo and Reply.io have solid APIs:
          </p>

          <div className="bg-slate-900 text-white rounded-xl p-8 mb-6">
            <ul className="space-y-3 text-slate-200">
              <li>• <strong>Apollo API:</strong> Search and export programmatically, integrate with your database</li>
              <li>• <strong>Reply.io API:</strong> Trigger sequences via webhooks, build custom logic</li>
            </ul>
            <p className="text-lg mt-6">
              You can build custom scoring, automatically add trial signups to nurture sequences, or integrate with your product analytics.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-300 rounded-xl p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="text-slate-700 mb-4">
                  But you don't need to touch APIs to make this work. The UIs are fine. Start there. Add custom code only when the UI becomes a bottleneck.
                </p>
                <p className="text-slate-700 font-semibold">
                  Most technical founders overcomplicate this because they're used to building systems. But sometimes the right answer is: just use the tool as designed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Questions from Technical Founders</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">"Isn't cold email spam?"</h3>
              <p className="text-slate-700">
                No. Spam is unsolicited bulk email with no targeting. You're sending personalized messages to a specific audience who might actually need your product. Big difference.
              </p>
              <p className="text-slate-700 mt-3">
                Plus, if you use Reply.io with LinkedIn, it's even more legitimate. You're not hiding behind email - you're making genuine connection attempts.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">"What if people ignore me?"</h3>
              <p className="text-slate-700">
                Most will. That's fine. You're looking for the 10-15% who have the problem right now. The other 85% aren't your customers yet.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">"Do I really need to spend $89/mo on Reply.io?"</h3>
              <p className="text-slate-700 mb-4">Compare it to:</p>
              <ul className="space-y-2 text-slate-700 ml-6">
                <li className="list-disc">Hiring an SDR: $4,500/mo</li>
                <li className="list-disc">Paid ads: $2,000/mo with no guarantees</li>
                <li className="list-disc">Conferences: $5,000/event</li>
              </ul>
              <p className="text-slate-700 mt-4 font-semibold">
                This is the cheapest customer acquisition channel that actually works. And with Reply.io's multichannel approach getting 2-3x better results than email-only, the extra $50/mo over Instantly pays for itself immediately.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">"Can I just use free tools?"</h3>
              <p className="text-slate-700">
                You could manually send emails and LinkedIn messages. But you'll spend 20 hours/week doing what Reply.io does automatically. Your time is worth more than $89/mo.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">"Should I start with Instantly or Reply.io?"</h3>
              <p className="text-slate-700 mb-3">
                <strong>Honest answer:</strong> If you can afford $89/mo, start with Reply.io. The multichannel approach just works better for B2B technical products.
              </p>
              <p className="text-slate-700">
                If you're bootstrapped and every dollar counts, start with Instantly. You can always upgrade to Reply.io later when you see results.
              </p>
            </div>
          </div>
        </section>

        {/* When to Start */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">When to Start</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">You should start outbound when:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>You have 5-10 users who are getting value (so you know the product works)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>You can describe your ideal customer in one sentence</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>You have 2-3 hours to set this up properly</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">You should NOT start outbound when:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>Your product is still half-broken</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>You don't know who you're building for</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>You're hoping outbound will tell you what to build</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-8 mt-6">
            <p className="text-xl font-bold">
              Outbound is for finding more people like your best existing customers. If you don't have any customers yet, fix that first.
            </p>
          </div>
        </section>

        {/* The Real Unlock */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Unlock</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Here's what nobody tells you about sales: it's not about being charismatic or "hustling" or "building relationships."
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">It's about:</h3>
            <ol className="space-y-3 text-slate-700 ml-6">
              <li className="list-decimal">Finding people with a problem</li>
              <li className="list-decimal">Showing them you can solve it</li>
              <li className="list-decimal">Making it easy for them to buy</li>
            </ol>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8 mb-6">
            <p className="text-xl font-bold mb-4">
              You're good at solving problems systematically. Outbound is just another problem to solve systematically.
            </p>
            <p className="text-lg">
              You don't need to become a salesperson. You just need to build one more system.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">The system is absurdly simple:</h3>
            <ul className="space-y-3 text-slate-200">
              <li>• Apollo finds the people</li>
              <li>• Reply.io reaches out to them automatically (email + LinkedIn)</li>
              <li>• You only talk to the ones who respond</li>
            </ul>
            <p className="text-xl font-bold mt-6">
              That's it. Two tools. Three hours of setup. Continuous stream of interested customers.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Next Steps</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Ready to build your outbound machine?
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">This week:</h3>
            <ol className="space-y-3 text-slate-700 ml-6">
              <li className="list-decimal">Sign up for <a href={apolloLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">Apollo</a> and export your first 50 prospects (free)</li>
              <li className="list-decimal">Sign up for <a href={replyLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">Reply.io</a> and build your multichannel sequence ($89/mo, 14-day trial)</li>
              <li className="list-decimal">Launch and let it run for a week</li>
            </ol>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Or if you want to start cheaper:</h3>
            <ol className="space-y-3 text-slate-700 ml-6">
              <li className="list-decimal">Sign up for <a href={apolloLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">Apollo</a> (free)</li>
              <li className="list-decimal">Sign up for <a href={instantlyLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">Instantly</a> for email-only ($37/mo)</li>
              <li className="list-decimal">Launch and upgrade to Reply.io when you want better results</li>
            </ol>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Start Building Your Outbound Machine</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={apolloLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Try Apollo Free <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={replyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-400 transition-colors border-2 border-white"
              >
                Try Reply.io Free <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/resources/replyio-setup-guide" className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Reply.io Setup Guide</h4>
              <p className="text-slate-600 text-sm">Complete 2-hour setup tutorial for multichannel outreach</p>
            </Link>
            <Link to="/resources/cold-email-guide" className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Cold Email Templates</h4>
              <p className="text-slate-600 text-sm">Proven templates and messaging tactics that work</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default BuildFirstOutboundPlaybookPage;
