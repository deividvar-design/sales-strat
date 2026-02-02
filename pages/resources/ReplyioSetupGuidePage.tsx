import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mail, Check, X, ArrowRight, Clock, AlertTriangle, Linkedin } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import { TOOLS } from '../../constants';

const ReplyioSetupGuidePage = () => {
  const replyTool = TOOLS.find(t => t.id === 'reply');
  const replyAffiliateLink = replyTool?.website || '{replyAffiliateLink}';

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Reply.io for Founders: Set Up Multichannel Outreach (Email + LinkedIn) in 2 Hours | Sales House</title>
        <meta name="title" content="Reply.io for Founders: Set Up Multichannel Outreach (Email + LinkedIn) in 2 Hours" />
        <meta name="description" content="Complete Reply.io setup guide for founders. Build your first multichannel sequence (email + LinkedIn) in under 2 hours. Includes templates, screenshots, and common mistakes to avoid." />
        <meta name="keywords" content="reply.io setup, reply.io tutorial, multichannel outreach, email linkedin automation, cold email setup, reply.io guide, linkedin automation, email sequences, sales automation" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://saleshousestack.com/resources/replyio-setup-guide" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://saleshousestack.com/resources/replyio-setup-guide" />
        <meta property="og:title" content="Reply.io Setup Guide: Multichannel Outreach in 2 Hours" />
        <meta property="og:description" content="Complete Reply.io setup guide for founders. Build your first multichannel sequence (email + LinkedIn) in under 2 hours." />
        <meta property="og:image" content="https://saleshousestack.com/saleshouse-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://saleshousestack.com/resources/replyio-setup-guide" />
        <meta name="twitter:title" content="Reply.io Setup Guide: Multichannel Outreach in 2 Hours" />
        <meta name="twitter:description" content="Complete Reply.io setup guide for founders. Build multichannel sequences in under 2 hours." />
        <meta name="twitter:image" content="https://saleshousestack.com/saleshouse-logo.png" />

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Set Up Reply.io for Multichannel Outreach",
            "description": "Complete guide to setting up Reply.io with email and LinkedIn automation in under 2 hours",
            "totalTime": "PT2H",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Initial Setup",
                "text": "Create Reply.io account, connect mailbox with secondary domain, configure SPF/DKIM/DMARC, set sending limits to 30/day, and install Chrome extension."
              },
              {
                "@type": "HowToStep",
                "name": "Build Email Sequence",
                "text": "Import 50 prospects, create 3-email sequence (intro, follow-up, break-up), set proper timing (3-day intervals), and configure sending schedule."
              },
              {
                "@type": "HowToStep",
                "name": "Add LinkedIn Steps",
                "text": "Configure LinkedIn limits (20/day), add connection requests and messages between emails, set up conditional logic based on prospect actions."
              },
              {
                "@type": "HowToStep",
                "name": "Launch Campaign",
                "text": "Verify emails, check domain health, test sequence with personal email, confirm LinkedIn setup, and launch to 50 people."
              }
            ]
          })}
        </script>

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Reply.io for Founders: Set Up Multichannel Outreach in 2 Hours",
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
            "mainEntityOfPage": "https://saleshousestack.com/resources/replyio-setup-guide",
            "image": "https://saleshousestack.com/saleshouse-logo.png",
            "articleSection": "Sales Automation",
            "keywords": ["reply.io", "multichannel outreach", "email automation", "linkedin automation", "sales sequences"]
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
            Setup Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Reply.io for Founders: Set Up Multichannel Outreach (Email + LinkedIn) in 2 Hours
          </h1>
          <div className="flex items-center gap-6 text-sm text-slate-600 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>2 hour setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Email + LinkedIn</span>
            </div>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Complete Reply.io setup guide for founders. Build your first multichannel sequence (email + LinkedIn) in under 2 hours. Includes templates and common mistakes to avoid.
          </p>

          {/* Top CTA */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-6 text-center">
            <p className="text-white text-lg mb-4">
              Ready to get started? Pick up your free trial and follow this guide step-by-step.
            </p>
            <a
              href={replyAffiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Most founders waste weeks figuring out Reply.io. They sign up, get overwhelmed by the interface, build a broken sequence, and either abandon it or send emails that land in spam.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            This guide gets you live in 2 hours. You'll have a working multichannel sequence (email + LinkedIn) sending by the end of this tutorial.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            I've set this up for 15+ clients. Here's exactly how I do it, minus the trial and error.
          </p>
        </section>

        {/* Why Reply.io */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Founders Choose Reply.io for Multichannel</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Before we jump into setup, let's be clear about what Reply.io actually does and when it makes sense.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            Reply.io is for <strong>multichannel outreach</strong>. Email + LinkedIn in one sequence. If you only care about email, Instantly is cheaper and simpler. But if you want to send a LinkedIn connection request, follow up via email, then message them on LinkedIn if they connect - that's Reply.io territory.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Why multichannel works:</h3>
            <p className="text-slate-700 mb-4">From my experience running outbound at scale:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-indigo-600">•</span>
                <span><strong>Email-only campaigns:</strong> 2-5% reply rate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-indigo-600">•</span>
                <span><strong>Email + LinkedIn:</strong> 8-12% reply rate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-indigo-600">•</span>
                <span><strong>The difference?</strong> LinkedIn feels more personal, even when automated</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-300 rounded-xl p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The catch:</h3>
                <p className="text-slate-700 mb-4">
                  Reply.io costs more ($89/mo vs Instantly's $37/mo) and has a steeper learning curve. If you're sending under 500 emails/month, stick with Instantly. If you need LinkedIn or you're scaling past 1,000 emails/month, Reply.io is worth it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Build */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What You'll Build in This Tutorial</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            By the end of 2 hours, you'll have:
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Reply.io account configured (mailbox connected, daily limits set)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Your first prospect list imported (we'll keep it small - 50 people)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-2">A 7-step multichannel sequence live:</p>
                  <ol className="space-y-2 ml-4 text-sm">
                    <li>Step 1: Email intro</li>
                    <li>Step 2: LinkedIn connection request</li>
                    <li>Step 3: Email follow-up (if no reply)</li>
                    <li>Step 4: LinkedIn message (if they connect)</li>
                    <li>Step 5: Email follow-up #2</li>
                    <li>Step 6: Break-up email</li>
                    <li>Step 7: Final LinkedIn message</li>
                  </ol>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Sending limits configured (so you don't burn your domain)</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-700 leading-relaxed mt-6">
            We're keeping this simple. No A/B tests, no fancy AI features, no webhooks. Just a working sequence you can launch today.
          </p>
        </section>

        {/* Part 1: Initial Setup */}
        <section className="mb-12">
          <div className="bg-slate-900 text-white rounded-xl p-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Part 1: Initial Setup</h2>
            <p className="text-slate-300">30 minutes</p>
          </div>

          {/* Create Account */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Create Your Account</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Go to <a href="{replyAffiliateLink}" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">Reply.io</a> and sign up for the 14-day trial. Pick the "Multichannel" plan - it's the only one with LinkedIn automation.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-slate-700">
                <strong>Don't pick the email-only plan.</strong> You'd be paying $99/mo for something Instantly does for $37/mo. The only reason to use Reply.io is multichannel.
              </p>
            </div>
          </div>

          {/* Connect Mailbox */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Connect Your Mailbox</h3>

            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl p-6 mb-6">
              <p className="text-xl font-bold mb-2">Critical rule: Never use your main company email for cold outreach.</p>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              You need a <strong>secondary domain</strong>. If your company is yourcompany.com, buy getyourcompany.com or tryyourcompany.com.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <p className="font-semibold text-slate-900 mb-3">Why?</p>
              <p className="text-slate-700">
                If your cold email gets flagged as spam, it only affects the secondary domain. Your main domain (where customer support and sales emails live) stays clean.
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">Once you have your secondary domain:</p>
            <ol className="space-y-3 text-slate-700 ml-6 mb-6">
              <li className="list-decimal">In Reply.io, click "Settings" → "Email accounts" → "Connect mailbox"</li>
              <li className="list-decimal">Choose Google Workspace or Microsoft 365 (avoid free Gmail/Outlook)</li>
              <li className="list-decimal">Follow the OAuth flow to connect</li>
            </ol>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Important:</p>
                  <p className="text-slate-700">
                    Reply.io will ask you to authenticate with SPF, DKIM, and DMARC. If you haven't done this yet, follow <a href="{replyAffiliateLink}" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">this guide from Reply.io</a>. Takes 15 minutes. Non-negotiable - without these, your emails go to spam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Set Sending Limits */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Set Sending Limits</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              This is where most founders screw up. They connect their mailbox and immediately try to send 200 emails/day. Their domain gets flagged in 48 hours.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Here's what to do instead:</h4>
              <ol className="space-y-3 text-slate-700 ml-6">
                <li className="list-decimal">Go to "Settings" → "Email accounts" → Click your connected mailbox</li>
                <li className="list-decimal">Set daily sending limit to <strong>30 emails per day</strong></li>
                <li className="list-decimal">Set email warmup to <strong>ON</strong> (Reply.io includes this free)</li>
                <li className="list-decimal">Let warmup run for <strong>2 weeks</strong> before launching campaigns</li>
              </ol>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <p className="font-semibold text-slate-900 mb-3">Why 30/day?</p>
              <p className="text-slate-700 mb-4">
                New domains need to build reputation. Start low, ramp up slowly. After 2 weeks at 30/day, you can increase to 50/day. After another 2 weeks, 80/day. Max out at 100/day per mailbox.
              </p>
              <p className="text-slate-700 font-semibold">
                If you need more volume, add more mailboxes. Don't push limits on a single mailbox - that's how you get blacklisted.
              </p>
            </div>
          </div>

          {/* Install Chrome Extension */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Install the Chrome Extension</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Reply.io has a Chrome extension for LinkedIn automation. You'll need it.
            </p>

            <ol className="space-y-3 text-slate-700 ml-6 mb-6">
              <li className="list-decimal">Go to Chrome Web Store and search "Reply.io"</li>
              <li className="list-decimal">Install the extension</li>
              <li className="list-decimal">Log in with your Reply.io credentials</li>
            </ol>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 mb-3">
                The extension runs LinkedIn actions (connection requests, messages) from your browser.
              </p>
              <p className="text-slate-700 font-semibold">
                Pro tip: Set the extension to "pause" when you're using LinkedIn personally. Otherwise it'll try to run automation while you're scrolling your feed, which looks weird.
              </p>
            </div>
          </div>
        </section>

        {/* Part 2: Email Sequence */}
        <section className="mb-12">
          <div className="bg-slate-900 text-white rounded-xl p-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Part 2: Your First Email Sequence</h2>
            <p className="text-slate-300">45 minutes</p>
          </div>

          {/* Import Prospect List */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Import Your Prospect List</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Keep your first campaign small. <strong>50 people.</strong> You want to test, learn, and iterate - not blast 1,000 people with a broken sequence.
            </p>

            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
              <p className="font-semibold text-slate-900 mb-4">Create a CSV with these columns:</p>
              <ul className="space-y-2 text-slate-700 ml-6">
                <li className="list-disc">First Name</li>
                <li className="list-disc">Last Name</li>
                <li className="list-disc">Email</li>
                <li className="list-disc">Company</li>
                <li className="list-disc">LinkedIn URL (optional but recommended)</li>
              </ul>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Upload it: "Campaigns" → "New Campaign" → "Import from CSV"
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="font-semibold text-slate-900 mb-3">Where to get these 50 people?</p>
              <ul className="space-y-2 text-slate-700 ml-6">
                <li className="list-disc">Export from Apollo.io (free plan gives you 50 contacts/month)</li>
                <li className="list-disc">Use Clay for enrichment if you have a list of companies but need contact info</li>
                <li className="list-disc">Manually build the list from LinkedIn Sales Navigator</li>
              </ul>
            </div>
          </div>

          {/* Build Email Sequence */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Build Your Email Sequence</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              Click "New Campaign" → "Email" → "Create Sequence"
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Here's the 3-email sequence I start every client with:
            </p>

            {/* Email 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Email 1 (Day 1) - The Intro</h4>
              <div className="bg-slate-50 rounded-lg p-6 font-mono text-sm">
                <p className="mb-3"><strong>Subject:</strong> quick question about {'{{company}}'}</p>
                <p className="mb-3">{'{{firstName}}'},</p>
                <p className="mb-3">I noticed {'{{company}}'} is [specific observation about their business].</p>
                <p className="mb-3">We help [your ICP] [specific outcome] without [common pain point].</p>
                <p className="mb-3">Worth a quick chat?</p>
                <p>[Your name]</p>
              </div>
            </div>

            {/* Email 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Email 2 (Day 4) - The Follow-Up</h4>
              <div className="bg-slate-50 rounded-lg p-6 font-mono text-sm">
                <p className="mb-3"><strong>Subject:</strong> re: quick question about {'{{company}}'}</p>
                <p className="mb-3">{'{{firstName}}'},</p>
                <p className="mb-3">Following up on my email from Tuesday.</p>
                <p className="mb-3">Most [their role] we work with struggle with [pain point]. We typically help them [solution] in under [timeframe].</p>
                <p className="mb-3">If this is relevant, I can share a few examples. If not, no worries - I'll stop bothering you.</p>
                <p>[Your name]</p>
              </div>
            </div>

            {/* Email 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Email 3 (Day 7) - The Break-Up</h4>
              <div className="bg-slate-50 rounded-lg p-6 font-mono text-sm">
                <p className="mb-3"><strong>Subject:</strong> closing the loop</p>
                <p className="mb-3">{'{{firstName}}'},</p>
                <p className="mb-3">Haven't heard back, so I'm assuming this isn't a priority right now.</p>
                <p className="mb-3">If anything changes, feel free to reach out. Otherwise, I'll leave you alone.</p>
                <p>[Your name]</p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Why this structure works:</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600">•</span>
                  <span><strong>Email 1:</strong> Short, specific, low commitment ask</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600">•</span>
                  <span><strong>Email 2:</strong> Adds value, gives them an out</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600">•</span>
                  <span><strong>Email 3:</strong> Break-up emails get 30% of replies (people respond when you say goodbye)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Set Email Timing */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Set Email Timing</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              For each email, configure the wait time:
            </p>

            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600">•</span>
                  <span><strong>Email 1:</strong> Send immediately when prospect enters sequence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600">•</span>
                  <span><strong>Email 2:</strong> Wait 3 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-600">•</span>
                  <span><strong>Email 3:</strong> Wait 3 days</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 mb-4">
                <strong>Don't send on weekends.</strong> Reply.io lets you set this: "Settings" → "Sending schedule" → Uncheck Saturday/Sunday.
              </p>
              <p className="text-slate-700">
                <strong>Best sending times:</strong> 6-9 AM or 2-4 PM in your prospect's timezone. Reply.io can detect timezone from their domain - use it.
              </p>
            </div>
          </div>
        </section>

        {/* Part 3: LinkedIn Steps */}
        <section className="mb-12">
          <div className="bg-slate-900 text-white rounded-xl p-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Part 3: Adding LinkedIn Steps</h2>
            <p className="text-slate-300">30 minutes</p>
          </div>

          <p className="text-slate-700 leading-relaxed mb-6">
            Now for the part that makes Reply.io worth it.
          </p>

          {/* Configure LinkedIn Settings */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Configure LinkedIn Settings</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Before adding LinkedIn steps, set your limits:
            </p>

            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
              <ol className="space-y-3 text-slate-700 ml-6">
                <li className="list-decimal">Go to "Settings" → "LinkedIn"</li>
                <li className="list-decimal">Set daily connection requests to <strong>20</strong></li>
                <li className="list-decimal">Set daily messages to <strong>20</strong></li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-6">
              <p className="font-semibold text-slate-900 mb-3">Why 20?</p>
              <p className="text-slate-700">
                LinkedIn has soft limits around 100-150 actions per day. Stay well below that to avoid restrictions. 20/day is safe.
              </p>
            </div>
          </div>

          {/* Add LinkedIn Steps */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Add LinkedIn Steps to Your Sequence</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              Go back to your sequence and add LinkedIn steps between emails:
            </p>

            <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Updated 7-Step Sequence:</h4>
              <ol className="space-y-4 text-slate-700 ml-6">
                <li className="list-decimal">
                  <strong>Email 1</strong> (Day 1)
                </li>
                <li className="list-decimal">
                  <strong>LinkedIn Connection Request</strong> (Day 2)
                  <p className="text-sm mt-2 ml-6">Include a note: "Hi {'{{firstName}}'}, came across {'{{company}}'} and wanted to connect."</p>
                </li>
                <li className="list-decimal">
                  <strong>Email 2</strong> (Day 4) - only if no email reply
                </li>
                <li className="list-decimal">
                  <strong>Conditional: If they accept LinkedIn connection → LinkedIn Message</strong> (Day 5)
                  <p className="text-sm mt-2 ml-6">"Thanks for connecting, {'{{firstName}}'}. Did my email about [pain point] land with you?"</p>
                </li>
                <li className="list-decimal">
                  <strong>Email 3</strong> (Day 7) - only if no email reply
                </li>
                <li className="list-decimal">
                  <strong>LinkedIn Message #2</strong> (Day 10) - only if connected but no response
                  <p className="text-sm mt-2 ml-6">"{'{{firstName}}'}, I know you're busy. Is this worth exploring or should I stop reaching out?"</p>
                </li>
              </ol>
            </div>
          </div>

          {/* Set Up Conditional Logic */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Set Up Conditional Logic</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              This is where Reply.io shines. You can create branches based on actions.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-6">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Example:</h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>If prospect replies to ANY email → stop sequence</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>If prospect accepts LinkedIn connection → trigger LinkedIn message</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>If prospect doesn't reply after 7 days → move to break-up email</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">To set this up:</h4>
              <ol className="space-y-3 text-slate-700 ml-6">
                <li className="list-decimal">Click on any step in your sequence</li>
                <li className="list-decimal">Select "Add condition"</li>
                <li className="list-decimal">Choose: "If prospect replied to email" → "Stop sequence"</li>
                <li className="list-decimal">Or: "If prospect connected on LinkedIn" → "Send LinkedIn message"</li>
              </ol>
              <p className="text-slate-700 mt-6 font-semibold">
                This prevents you from spamming people who've already engaged.
              </p>
            </div>
          </div>
        </section>

        {/* Part 4: Launch Checklist */}
        <section className="mb-12">
          <div className="bg-slate-900 text-white rounded-xl p-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Part 4: Launch Checklist</h2>
            <p className="text-slate-300">15 minutes</p>
          </div>

          <p className="text-slate-700 leading-relaxed mb-6">
            Before you hit "Start Campaign", run through this checklist:
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Email Verification</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Run your prospect list through an email verifier (Hunter.io or ZeroBounce)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Remove any role-based emails (info@, support@, hello@)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Aim for &lt;3% bounce rate</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Domain Health</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>SPF, DKIM, DMARC configured</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Email warmup running for at least 2 weeks</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Sending limits set to 30/day max</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Sequence Review</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>All emails use variables ({'{{firstName}}'}, {'{{company}}'})</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>No spam trigger words (free, guarantee, click here, act now)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Clear unsubscribe link in footer</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Professional email signature</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h4 className="text-xl font-bold text-slate-900 mb-4">LinkedIn Setup</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Chrome extension installed and logged in</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>LinkedIn limits set to 20/day</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Connection note is personalized</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Test Run</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Add yourself to the sequence with a test email</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Verify emails arrive in primary inbox (not spam)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Check that variables populate correctly</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-slate-300 rounded shrink-0 mt-0.5"></div>
                <span>Confirm LinkedIn steps execute</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8">
            <p className="text-xl font-bold">
              Once everything checks out: Launch to 50 people, monitor for 1 week, then scale.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Mistakes (And How to Fix Them)</h2>

          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                Mistake 1: Starting too aggressive
              </h3>
              <ul className="space-y-2 text-slate-700 ml-9">
                <li>• Don't send 100 emails/day from a new domain</li>
                <li>• Don't connect 50 people/day on LinkedIn</li>
                <li>• Slow ramp is boring but it works</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                Mistake 2: Forgetting the Chrome extension
              </h3>
              <ul className="space-y-2 text-slate-700 ml-9">
                <li>• LinkedIn steps won't run without it</li>
                <li>• Set a reminder to check it daily</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                Mistake 3: No conditional logic
              </h3>
              <ul className="space-y-2 text-slate-700 ml-9">
                <li>• You'll message people who already replied</li>
                <li>• Set up "stop sequence if replied" conditions</li>
                <li>• Use LinkedIn connection status to branch sequences</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                Mistake 4: Generic messaging
              </h3>
              <ul className="space-y-2 text-slate-700 ml-9">
                <li>• Variables aren't personalization</li>
                <li>• Add specific observations about their company</li>
                <li>• Reference their LinkedIn activity, blog posts, or recent news</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                Mistake 5: Ignoring deliverability
              </h3>
              <ul className="space-y-2 text-slate-700 ml-9">
                <li>• Monitor your bounce rate weekly</li>
                <li>• Check spam folder placement (send test emails to Gmail, Outlook)</li>
                <li>• If open rate &lt;20%, your deliverability is broken</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Next Steps</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            You've got a working multichannel sequence. Here's how to scale it:
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Week 1-2:</h3>
            <ul className="space-y-2 text-slate-700 ml-6">
              <li className="list-disc">Monitor metrics (open rate, reply rate, connection accept rate)</li>
              <li className="list-disc">Respond to replies manually (don't automate this)</li>
              <li className="list-disc">Note which email gets most responses</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Week 3-4:</h3>
            <ul className="space-y-2 text-slate-700 ml-6">
              <li className="list-disc">Adjust messaging based on data</li>
              <li className="list-disc">Increase daily sending limit to 50/day</li>
              <li className="list-disc">Add 50-100 more prospects to test larger volume</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Month 2:</h3>
            <ul className="space-y-2 text-slate-700 ml-6">
              <li className="list-disc">Build 2-3 different sequences for different ICPs</li>
              <li className="list-disc">Add more mailboxes if hitting volume limits</li>
              <li className="list-disc">Consider enriching lists with Clay for better personalization</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-lg mb-6">Try Reply.io free for 14 days and build your first sequence today.</p>
            <a
              href={replyAffiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="bg-slate-100 border border-slate-300 rounded-xl p-8 text-center">
            <p className="text-slate-700 mb-4">
              Got questions? Email me at <a href="mailto:david@saleshousestack.com" className="text-indigo-600 hover:text-indigo-700 font-semibold">david@saleshousestack.com</a> or message me on <a href="https://www.linkedin.com/in/davidvaran/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">LinkedIn</a>.
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/resources/cold-email-guide" className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Cold Email Guide</h4>
              <p className="text-slate-600 text-sm">Templates and tactics for cold emails that convert at scale</p>
            </Link>
            <Link to="/resources/best-cold-email-software" className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Best Cold Email Software</h4>
              <p className="text-slate-600 text-sm">Compare Reply.io, Instantly, and Lemlist</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default ReplyioSetupGuidePage;
