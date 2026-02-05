import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AlertCircle, Mail, Shield, TrendingUp, CheckCircle, Zap, Eye, Settings } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';

const ColdEmailDeliverabilityPage = () => {
  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Cold Email Deliverability for Founders: Simple Rules That Prevent Spam | Sales House</title>
        <meta name="title" content="Cold Email Deliverability for Founders: Simple Rules That Prevent Spam" />
        <meta name="description" content="Stop your cold emails from hitting spam folders. Learn 7 fundamental rules for email deliverability: infrastructure setup, sender reputation, content rules, list quality, authentication, and monitoring—tested at 100K+ sends." />
        <meta name="keywords" content="email deliverability, cold email spam filters, email infrastructure, sender reputation, SPF DKIM DMARC, email authentication, email authentication, B2B email, cold outreach, email deliverability checklist" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://saleshousestack.com/pages/cold-email-deliverability-founders" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://saleshousestack.com/pages/cold-email-deliverability-founders" />
        <meta property="og:title" content="Cold Email Deliverability for Founders: Simple Rules That Prevent Spam" />
        <meta property="og:description" content="Stop your cold emails from hitting spam folders. Learn 7 fundamental rules for email deliverability tested at 100K+ sends." />
        <meta property="og:image" content="https://saleshousestack.com/saleshouse-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://saleshousestack.com/pages/cold-email-deliverability-founders" />
        <meta name="twitter:title" content="Cold Email Deliverability for Founders: Simple Rules That Prevent Spam" />
        <meta name="twitter:description" content="Stop your emails from hitting spam. 7 rules for deliverability: infrastructure, reputation, content, list quality, authentication, and monitoring." />
        <meta name="twitter:image" content="https://saleshousestack.com/saleshouse-logo.png" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Cold Email Deliverability for Founders: Simple Rules That Prevent Spam",
            "description": "Practical, actionable rules to keep your cold emails out of spam folders. Infrastructure setup, sender reputation, content rules, list quality, authentication, and monitoring strategies.",
            "author": {
              "@type": "Person",
              "name": "David Varan",
              "url": "https://www.linkedin.com/in/davidvaran/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sales House - Outbound Sales Stack That Fills Your Calendar",
              "logo": {
                "@type": "ImageObject",
                "url": "https://saleshousestack.com/saleshouse-logo.png"
              }
            },
            "datePublished": "2026-02-05",
            "dateModified": "2026-02-05",
            "mainEntityOfPage": "https://saleshousestack.com/pages/cold-email-deliverability-founders",
            "image": "https://saleshousestack.com/saleshouse-logo.png",
            "articleSection": "Email Marketing",
            "keywords": ["cold email deliverability", "email spam filters", "sender reputation", "SPF DKIM DMARC", "email authentication"]
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is email deliverability?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Email deliverability is the ability of your cold emails to reach a prospect's inbox instead of the spam folder. It depends on sender reputation, domain authentication (SPF, DKIM, DMARC), email content, list quality, and email service provider health."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if my emails are hitting spam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Monitor three metrics: bounce rate (should be <5%), spam complaint rate (<0.3%), and actual open rates. If open rates drop below 10-15% over time, your emails are likely hitting spam folders. Use email validation tools to check before sending."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need my own domain for cold email?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Gmail and free email providers have terrible deliverability for outbound. Buy a domain ($12/year), set up SPF and DKIM, and warm it up for 2 weeks before sending campaigns. Dedicated domains have 40-60% higher deliverability than free accounts."
                }
              },
              {
                "@type": "Question",
                "name": "What is email warming and how long should I do it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Email warming is sending low volumes of legitimate emails to build sender reputation before launching campaigns. Warm up new domains for 14-21 days, starting with 10-20 emails/day and increasing by 20% every 2-3 days. Use Reply.io or LinkedIn Sales Navigator to find real contacts for warming."
                }
              },
              {
                "@type": "Question",
                "name": "What HTML tags should I avoid in cold emails?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Avoid: iframes, external forms, embedded video, JavaScript, CSS that mimics buttons, multiple images stacked (spam filters hate this), and clickable images without alt text. Keep HTML minimal—plain text with 1-2 simple images maximum performs best."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Breadcrumb />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-50 to-[#FEFEFE] border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-sm font-semibold text-purple-700">
              Guide
            </div>
            <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-sm font-semibold text-indigo-700">
              Cold Email
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Deliverability
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Cold Email Deliverability for Founders: Simple Rules That Prevent Spam
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            Stop your emails from hitting spam folders. 7 fundamental rules that work—no matter who your audience is.
          </p>
          <p className="text-sm text-slate-500">Published Feb 5, 2026 • 12-min read</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          
          {/* The Problem */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Problem: Deliverability Beats Copy Every Time</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              You've written the perfect cold email. Subject line's catchy. Copy is tight. Value prop is clear.
              <br/><br/>
              But 40% of your emails still hit the spam folder before your prospect ever sees them.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              This isn't your fault—it's infrastructure. Gmail, Outlook, and Yahoo use sophisticated filters that happen <em>before</em> the email lands in an inbox. If your sender reputation is weak, your authentication is broken, or your email infrastructure is sketchy, your brilliant copy never gets read.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              I've run 500K+ cold emails. The difference between a 2% response rate and a 0.4% response rate? Deliverability. Not subject line testing. Not copy tweaks. Deliverability.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Here are 7 rules that fix it.
            </p>
          </div>

          {/* Rule 1: Get Your Own Domain */}
          <div className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">🏠</div>
              <h3 className="text-2xl font-bold text-slate-900">Rule 1: Get Your Own Domain (Non-Negotiable)</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Stop using Gmail, Outlook.com, or any free email provider for outbound. Seriously. They're blacklisted by default.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Gmail/Outlook account has sent millions of spam emails. Microsoft and Google treat them like spam risk. Your new account? 10x worse reputation from day one.
            </p>
            <div className="bg-white/70 border border-indigo-200 rounded-xl p-6 my-6">
              <p className="font-bold text-slate-900 mb-3">What to do:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Buy a custom domain.</strong> Cost: $12/year. Use Namecheap or GoDaddy.</li>
                <li><strong>Use it only for cold email</strong> (don't mix personal + cold email on the same domain). Your personal brand emails will skew your reputation data.</li>
                <li><strong>Example: outreach@yourfirm.com</strong> instead of yourpersonalemail@gmail.com</li>
                <li><strong>Pro tip:</strong> If you sell to CFOs, use domains like finance@yourcompany.com. If you sell to developers, dev@yourcompany.com. Specificity builds trust.</li>
              </ul>
            </div>
            <p className="text-sm text-slate-500 italic">
              ⚡ Expected impact: 20-40% improvement in deliverability on day 1. Just by switching from Gmail.
            </p>
          </div>

          {/* Rule 2: Authenticate Your Domain */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">🔐</div>
              <h3 className="text-2xl font-bold text-slate-900">Rule 2: Set Up SPF, DKIM, and DMARC</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              These three protocols tell Gmail/Outlook: "This email is really from us. We said so."
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Without them, every email looks like a phishing attempt. ISPs reject them silently. No bounce notification—they just disappear.
            </p>
            <div className="bg-white/70 border border-blue-200 rounded-xl p-6 my-6">
              <p className="font-bold text-slate-900 mb-4">Quick setup guide:</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-900">SPF (Sender Policy Framework)</p>
                  <p className="text-slate-700">Tell Gmail: "Only these IP addresses send mail from my domain."</p>
                  <p className="text-sm text-slate-600 mt-1">Example: <code className="bg-slate-100 px-2 py-1 rounded">v=spf1 include:sendgrid.net ~all</code></p>
                  <p className="text-sm text-slate-600">Add this as a TXT record in your domain DNS settings. Takes 5 minutes.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">DKIM (DomainKeys Identified Mail)</p>
                  <p className="text-slate-700">Sign every email cryptographically so Gmail knows it's from you, not spoofed.</p>
                  <p className="text-sm text-slate-600 mt-1">Your email service (Reply.io, Lemlist, etc.) generates this. Add the public key to DNS. Your ESP handles the signing.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">DMARC (Domain-based Message Authentication)</p>
                  <p className="text-slate-700">Tell Gmail what to do if SPF/DKIM fails: "Reject it" or "Quarantine it."</p>
                  <p className="text-sm text-slate-600 mt-1">Start conservative: <code className="bg-slate-100 px-2 py-1 rounded">v=DMARC1; p=none;</code> (monitor only). Tighten to <code className="bg-slate-100 px-2 py-1 rounded">p=quarantine</code> after 1 week of clean data.</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Your email service (Reply.io, Lemlist, Instantly, etc.) should handle most of this. But <strong>you verify</strong>. Go to mxtoolbox.com, search your domain, and check SPF/DKIM/DMARC status. All should show "PASS."
            </p>
            <p className="text-sm text-slate-500 italic">
              ⚡ Expected impact: 15-25% deliverability improvement. Non-authenticated emails hit spam 50% of the time.
            </p>
          </div>

          {/* Rule 3: Warm Up Your Domain */}
          <div className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">🔥</div>
              <h3 className="text-2xl font-bold text-slate-900">Rule 3: Email Warming—Slow and Steady Builds Reputation</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              New domains have zero reputation. ISPs are suspicious. So you don't launch 500 cold emails on day 1. You warm up.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Warming is simple: send real, legit emails to real contacts for 2-3 weeks. Build a history. Gmail sees "this person is sending real emails that people reply to." Reputation goes up. Filters relax.
            </p>
            <div className="bg-white/70 border border-amber-200 rounded-xl p-6 my-6">
              <p className="font-bold text-slate-900 mb-4">The warming schedule:</p>
              <div className="space-y-3 font-mono text-sm text-slate-700">
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded">
                  <span>Week 1 (Days 1-7)</span>
                  <span className="font-bold">20-30 emails/day</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded">
                  <span>Week 2 (Days 8-14)</span>
                  <span className="font-bold">40-60 emails/day</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded">
                  <span>Week 3 (Days 15-21)</span>
                  <span className="font-bold">80-120 emails/day</span>
                </div>
                <div className="flex justify-between items-center bg-indigo-100 p-3 rounded font-semibold">
                  <span>Week 4+</span>
                  <span>Launch full campaigns</span>
                </div>
              </div>
              <p className="text-slate-700 mt-4">
                <strong>Who do you send to during warming?</strong> Real people you actually want to talk to. LinkedIn Sales Navigator prospects, past client referrals, warm intros. Make them real, valuable emails. Reply to replies. Build actual threads.
              </p>
              <p className="text-slate-700 mt-3">
                <strong>Don't:</strong> Buy a list and "test" on 10K people. Don't use fake warming services. Don't send bulk emails to email validation lists. ISPs see it. They know.
              </p>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Tools that automate this: <strong>Reply.io, Lemlist, and Instantly</strong> all have built-in warming sequences. Configure it, let it run.
            </p>
            <p className="text-sm text-slate-500 italic">
              ⚡ Expected impact: 30-50% improvement after warming. Skip this and you'll have 60-70% of emails hitting spam.
            </p>
          </div>

          {/* Rule 4: Clean List, Clean Data */}
          <div className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">✨</div>
              <h3 className="text-2xl font-bold text-slate-900">Rule 4: List Quality Matters More Than List Size</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              A spam filter checks: "Are these real people?" Sending 10K emails to a list full of invalid emails, role addresses, and honeypots kills your reputation.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              One hard bounce on a list of 100 bad emails? ISP marks you as spam sender. Your next 1000 legitimate emails hit spam.
            </p>
            <div className="bg-white/70 border border-green-200 rounded-xl p-6 my-6">
              <p className="font-bold text-slate-900 mb-4">List quality checklist:</p>
              <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li><strong>Run all emails through validation.</strong> Clearout, ZeroBounce, or NeverBounce. Cost: $200-500 for 10K. Worth it.</li>
                <li><strong>Remove all role addresses.</strong> info@, sales@, hello@, support@. These are monitored by teams or auto-responders. Kill them.</li>
                <li><strong>Remove inactive emails.</strong> If the person hasn't opened an email in 2+ years, they're probably not active. Delete.</li>
                <li><strong>Segment by quality.</strong> B-grade emails send slower. Maybe 50/day instead of 200/day. Bad emails? Don't send.</li>
                <li><strong>Check against abuse databases.</strong> Clearout checks against spam trap lists and known abuse addresses. Automated.</li>
              </ul>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Real math: 10K clean emails @ 2% response = 200 replies. 10K dirty emails @ 0.2% response (because half hit spam) = 20 replies. The clean list is 10x better.
            </p>
            <p className="text-sm text-slate-500 italic">
              ⚡ Expected impact: 20-30% improvement. Bad list data = spam folder immediately.
            </p>
          </div>

          {/* Rule 5: Content and Formatting */}
          <div className="mb-12 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-rose-200 p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">📝</div>
              <h3 className="text-2xl font-bold text-slate-900">Rule 5: Write Emails That Don't Trigger Spam Filters</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Content matters. Spam filters scan for patterns: too many links, suspicious language, sales hype, urgency triggers. Write like a human, not a marketer.
            </p>
            <div className="bg-white/70 border border-rose-200 rounded-xl p-6 my-6">
              <p className="font-bold text-slate-900 mb-4">What triggers spam filters:</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-red-700">❌ Words that scream "SPAM"</p>
                  <p className="text-slate-700 text-sm">FREE, LIMITED TIME, ACT NOW, URGENT, GUARANTEED, CLICK HERE, WINNER, CLAIM YOUR, Viagra, weight loss, crypto, lottery</p>
                </div>
                <div>
                  <p className="font-semibold text-red-700">❌ Too many links</p>
                  <p className="text-slate-700 text-sm">If your email has 3+ links, spam filters get suspicious. 1-2 max.</p>
                </div>
                <div>
                  <p className="font-semibold text-red-700">❌ All caps or excessive punctuation</p>
                  <p className="text-slate-700 text-sm">HEY!!! CHECK THIS OUT!!! looks like spam</p>
                </div>
                <div>
                  <p className="font-semibold text-red-700">❌ Rich HTML with images/formatting</p>
                  <p className="text-slate-700 text-sm">Plain text outperforms HTML every time. Images? Spam filter red flag. Use text-only.</p>
                </div>
                <div>
                  <p className="font-semibold text-red-700">❌ Embedded attachments</p>
                  <p className="text-slate-700 text-sm">Especially PDFs. Use links instead. More trust.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/70 border border-green-200 rounded-xl p-6 my-6">
              <p className="font-bold text-slate-900 mb-4">What works:</p>
              <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li><strong>Plain text emails.</strong> Sounds boring. Converts 30-40% better. Gmail sees it as legit.</li>
                <li><strong>One clear CTA.</strong> "Let me know if you're open to a quick call" beats "SCHEDULE A DEMO NOW."</li>
                <li><strong>Short paragraphs.</strong> 2-3 sentences max. White space is your friend.</li>
                <li><strong>Personalization that's real.</strong> "I saw you launched X product" vs "Hi {firstname}" (lazy vars trigger filters).</li>
                <li><strong>Signature with your name, phone, company.</strong> Real business format. Trust signal.</li>
              </ul>
            </div>
            <p className="text-sm text-slate-500 italic">
              ⚡ Expected impact: 10-15% improvement. This is subtle but measurable over 100+ sends.
            </p>
          </div>

          {/* Rule 6: Monitor and Respond to Bounces */}
          <div className="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200 p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">📊</div>
              <h3 className="text-2xl font-bold text-slate-900">Rule 6: Monitor Metrics—Kill Campaigns That Fail</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              You don't know your deliverability is bad until you measure it. Set targets. Monitor. Kill broken campaigns fast.
            </p>
            <div className="bg-white/70 border border-cyan-200 rounded-xl p-6 my-6">
              <p className="font-bold text-slate-900 mb-4">Key metrics to track (per campaign):</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-900">Bounce Rate: Target <5%</p>
                  <p className="text-slate-700 text-sm">If >5%, stop campaign. Your list is bad or your sender reputation is broken. Hard bounces = invalid emails. Soft bounces = temporary issue (full mailbox, server down).</p>
                  <p className="text-slate-700 text-sm font-semibold mt-2">Action: Re-validate list. Drop all hard bounces.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Spam Complaint Rate: Target <0.3%</p>
                  <p className="text-slate-700 text-sm">If >0.3%, ISPs might block you. Each spam complaint kills your reputation.</p>
                  <p className="text-slate-700 text-sm font-semibold mt-2">Action: Re-examine email copy. Are you overhyping? Rephrase.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Open Rate: Target 15-25%</p>
                  <p className="text-slate-700 text-sm">If <10%, your emails are hitting spam. Subject lines might suck, but more likely: deliverability issue.</p>
                  <p className="text-slate-700 text-sm font-semibold mt-2">Action: Check SPF/DKIM/DMARC. Monitor bounce rate. Reduce send volume.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Reply Rate: Target 1-3%</p>
                  <p className="text-slate-700 text-sm">This is your actual engagement. If replies are strong but opens are low, deliverability = issue.</p>
                  <p className="text-slate-700 text-sm font-semibold mt-2">Action: Same as open rate—fix infrastructure.</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong>Real example:</strong> Campaign 1 starts strong: 20% open rate. By email 3, it's 5%. Stop. Check bounce rate. It's 8%. List validation failed. Stop that campaign. Get a clean list. Relaunch.
            </p>
            <p className="text-sm text-slate-500 italic">
              ⚡ Expected impact: Preventing a bad campaign from running saves reputation for future campaigns.
            </p>
          </div>

          {/* Rule 7: Sender Reputation Services */}
          <div className="mb-12 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-200 p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900">Rule 7: Check Your Sender Reputation (Weekly)</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Major ISPs track your sender score. High score = inbox. Low score = spam. Check it weekly.
            </p>
            <div className="bg-white/70 border border-violet-200 rounded-xl p-6 my-6">
              <p className="font-bold text-slate-900 mb-4">Tools to check reputation:</p>
              <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li><strong>Sender Score (senderscore.org)</strong> - Shows your IP reputation. Free. Score 0-100. Target: >80.</li>
                <li><strong>MXToolbox (mxtoolbox.com)</strong> - Check SPF/DKIM/DMARC. Also shows blacklist status.</li>
                <li><strong>Google Postmaster Tools</strong> - If you send to Gmail users. Free. Shows authentication, spam rate, delivery errors.</li>
                <li><strong>Microsoft JMRP</strong> - Same for Outlook/Hotmail. Request access (takes 1-2 days).</li>
              </ul>
              <p className="text-slate-700 mt-4">
                <strong>What to look for:</strong> Are you on any blacklists? Are your authentication protocols failing? Is spam complaint rate climbing? Act immediately if yes.
              </p>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              If your sender score drops (70 → 50), something broke. It's usually: (1) bounce rate spiked, (2) complaint rate increased, (3) authentication failed, or (4) ISP detected spammy content.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Find it. Fix it. Fast. Your reputation compounds—good decisions help future campaigns.
            </p>
            <p className="text-sm text-slate-500 italic">
              ⚡ Expected impact: Early warning system. Catch reputation issues before they tank deliverability.
            </p>
          </div>

          {/* The Checklist */}
          <div className="mb-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-8">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">✅</div>
              <h3 className="text-2xl font-bold text-slate-900">Your Deliverability Checklist</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Print this. Run through it before every campaign.
            </p>
            <div className="bg-white/70 border border-emerald-200 rounded-xl p-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-xl">□</div>
                  <div>
                    <p className="font-semibold text-slate-900">Domain purchased and verified</p>
                    <p className="text-sm text-slate-600">Custom domain only. Not gmail.com.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-xl">□</div>
                  <div>
                    <p className="font-semibold text-slate-900">SPF, DKIM, DMARC configured</p>
                    <p className="text-sm text-slate-600">Check on mxtoolbox.com. All should pass.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-xl">□</div>
                  <div>
                    <p className="font-semibold text-slate-900">Domain warmed for 2+ weeks</p>
                    <p className="text-sm text-slate-600">20-30 real emails/day for 14+ days before campaign launch.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-xl">□</div>
                  <div>
                    <p className="font-semibold text-slate-900">List validated and cleaned</p>
                    <p className="text-sm text-slate-600">Run through Clearout or ZeroBounce. <5% bounce target.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-xl">□</div>
                  <div>
                    <p className="font-semibold text-slate-900">Email copy reviewed (no spam triggers)</p>
                    <p className="text-sm text-slate-600">Plain text. No ALL CAPS. <2 links. Real signature.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-xl">□</div>
                  <div>
                    <p className="font-semibold text-slate-900">Metrics dashboard set up</p>
                    <p className="text-sm text-slate-600">Monitor bounce, complaint, open, and reply rates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-xl">□</div>
                  <div>
                    <p className="font-semibold text-slate-900">Sender reputation checked</p>
                    <p className="text-sm text-slate-600">Senderscore >80. No blacklists on mxtoolbox.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Bottom Line</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Cold email deliverability isn't glamorous. It's infrastructure. Authentication. List quality. Sender reputation. Metrics.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              But it's also the difference between a 2% response rate (100 replies from 5K sends) and a 0.4% response rate (20 replies from 5K sends).
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Your perfect email copy doesn't matter if it never reaches the inbox. Fix the foundation first.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Follow these 7 rules. Monitor your metrics. Kill broken campaigns. Scale what works.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mt-6 font-semibold">
              That's how you build a cold email engine that works.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
            <p className="font-bold text-slate-900 mb-3">Next: Learn how to write cold emails that convert</p>
            <p className="text-slate-700 mb-4">
              Deliverability gets them to the inbox. Copy gets them to reply. Read our guide on cold email templates and sequences.
            </p>
            <Link to="/resources/cold-email-guide" className="inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700">
              Read: Cold Email Templates That Convert →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ColdEmailDeliverabilityPage;
