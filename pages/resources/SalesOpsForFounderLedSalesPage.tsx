import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

import Breadcrumb from '../../components/Breadcrumb';
import { TOOLS } from '../../constants';

const SalesOpsForFounderLedSalesPage = () => {
  const canonical = 'https://saleshousestack.com/resources/sales-ops-for-founder-led-sales/';

  const metaTitle = 'Sales Ops for Founder-Led Sales: Data, Workflows, and Tech Stack | Sales House';
  const metaDescription = 'Sales ops for solo founders—track the right data, build follow-up workflows, and choose a minimal tech stack without enterprise overhead.';
  const metaKeywords = 'founder sales ops, solo founder outbound, one-person sales team, founder-led sales, sales operations for startups';

  const apollo = TOOLS.find(t => t.id === 'apollo');
  const instantly = TOOLS.find(t => t.id === 'instantly');
  const pipedrive = TOOLS.find(t => t.id === 'pipedrive');
  const calendly = TOOLS.find(t => t.id === 'calendly');
  const lemlist = TOOLS.find(t => t.id === 'lemlist');

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="p-6 max-w-5xl mx-auto">
        <Breadcrumb />

        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-sm font-semibold text-purple-700">
              Resource
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Founder
            </div>
            <div className="inline-block px-3 py-1 bg-green-100 border border-green-300 rounded-full text-sm font-semibold text-green-700">
              Sales Ops
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Sales Ops for Founder-Led Sales: Data, Workflows, and Tech Stack
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            When you're the founder AND the sales team, "sales ops" sounds like corporate overhead you can't afford. But here's the truth: without basic sales operations, you're flying blind—burning time on dead leads, forgetting follow-ups, and wondering why your outbound isn't converting.
          </p>
        </div>

        {/* Verdict / TLDR */}
        <div className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">📊</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">TLDR: Sales Ops for Solo Founders</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-3">
                Track <strong>4 core metrics</strong>: lead source, status, follow-up dates, deal value. Build <strong>lightweight workflows</strong> in Notion, Airtable, or Pipedrive. Use <strong>Apollo + Instantly + Calendly</strong> for under $100/mo.
              </p>
              <p className="text-slate-700">
                Skip enterprise tools. Focus on consistent follow-ups and data that tells you what's working. Sales ops isn't bureaucracy—it's your competitive edge.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-200 text-sm text-slate-600">
            30-day setup: Pick tools (Week 1) → Set up CRM (Week 2) → Build sequences (Week 3) → Launch + track (Week 4).
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          
          <h2>Why Founder-Led Sales Needs Sales Ops</h2>
          <p>
            Most founders treat sales ops as "something to think about later." They build a lead list in Apollo, send 100 cold emails, get 5 replies, book 1 demo... and then forget who they talked to last month.
          </p>
          <p>
            Three months later, they're starting from scratch because:
          </p>
          <ul>
            <li>No record of who replied "not now" vs. "never"</li>
            <li>No system to resurface warm leads when timing improves</li>
            <li>No data on what messaging actually worked</li>
            <li>No way to measure if outbound ROI justifies the time spent</li>
          </ul>
          <p>
            <strong>Sales ops solves this.</strong> Even minimal sales ops—a simple CRM, basic tracking, and follow-up reminders—turns your outbound from guesswork into a repeatable system.
          </p>
          <p>
            Here's what changes:
          </p>
          <ul>
            <li>You stop wasting time on leads that will never close</li>
            <li>You follow up consistently (most deals need 3-7 touches)</li>
            <li>You know which channels and messages convert</li>
            <li>You build pipeline instead of starting fresh every month</li>
          </ul>
          <p>
            The best part? You don't need Salesforce, a data team, or a full-time ops hire. You need a lightweight system that fits how solo founders actually work.
          </p>

          <h2>Part 1: Data — What to Track (and What to Ignore)</h2>
          <p>
            Enterprise sales ops tracks dozens of metrics: MQLs, SQLs, lead velocity, win rates by industry, average deal cycle... it's exhausting.
          </p>
          <p>
            For founder-led sales, you need four core metrics and nothing else:
          </p>

          <h3>1. Lead Source (Where Did They Come From?)</h3>
          <p>Track every lead's origin:</p>
          <ul>
            <li>Cold email (Apollo, ZoomInfo, manual research)</li>
            <li>Inbound (website, blog, social)</li>
            <li>Referral (who referred them)</li>
            <li>Warm outreach (LinkedIn, Twitter DMs)</li>
          </ul>
          <p>
            <strong>Why it matters:</strong> Some channels convert at 10x others. If cold email books 1 demo per 200 sends but LinkedIn DMs book 1 per 20, you should shift time accordingly.
          </p>
          <p>
            Most founders guess at this. Track it, and you'll know where to focus.
          </p>

          <h3>2. Lead Status (Where Are They in Your Process?)</h3>
          <p>Minimal statuses for solo founders:</p>
          <ul>
            <li><strong>New</strong>: Just added, haven't reached out yet</li>
            <li><strong>Contacted</strong>: Sent first message</li>
            <li><strong>Replied</strong>: They responded (interested or objection)</li>
            <li><strong>Qualified</strong>: Had a conversation, confirmed fit</li>
            <li><strong>Negotiating</strong>: Discussing pricing/terms</li>
            <li><strong>Closed-Won</strong>: They signed</li>
            <li><strong>Closed-Lost</strong>: Dead deal</li>
            <li><strong>Nurture</strong>: Not now, follow up in 3-6 months</li>
          </ul>
          <p>
            That's it. Eight statuses. If you add more, you'll spend time updating fields instead of selling.
          </p>

          <h3>3. Last Contact Date + Next Follow-Up</h3>
          <p>
            This is the most underrated sales ops metric for solo founders.
          </p>
          <p>Every lead should have:</p>
          <ul>
            <li><strong>Last Contact Date</strong>: When you last touched base</li>
            <li><strong>Next Follow-Up Date</strong>: When to reach out again</li>
          </ul>
          <p>
            Without this, you'll forget warm leads. Someone who said "check back in Q2" becomes a ghost by March because you have no reminder system.
          </p>
          <p>
            A simple CRM (Notion, Airtable, or even a spreadsheet) can automate this with filters:
          </p>
          <ul>
            <li>"Follow-ups due this week"</li>
            <li>"Leads contacted >30 days ago with no follow-up"</li>
          </ul>
          <p>
            This alone will 2-3x your close rate because most deals die from neglect, not objections.
          </p>

          <h3>4. Deal Value (How Much Is This Worth?)</h3>
          <p>
            Track expected revenue for every qualified lead. Even a rough estimate ($5K, $20K, $50K) helps prioritize.
          </p>
          <p>
            Why? Because a founder's time is finite. If you're juggling five leads—three worth $2K each and two worth $25K—you should spend 80% of your time on the two big ones.
          </p>
          <p>
            Most solo founders treat all leads equally. Sales ops data tells you which deals deserve your attention.
          </p>

          <h3>What NOT to Track (Corporate Metrics You Don't Need)</h3>
          <p>Skip these until you have a full sales team:</p>
          <ul>
            <li>Lead scoring (too manual for solo founders)</li>
            <li>Activity metrics (calls per day, emails per day—vanity numbers)</li>
            <li>Conversion rates by stage (too early to be meaningful)</li>
            <li>Sales cycle length (small sample sizes = noisy data)</li>
          </ul>
          <p>
            Track them later. For now, focus on the four core metrics above.
          </p>

          <h2>Part 2: Workflows — The Minimal CRM Approach</h2>
          <p>
            Most founders either:
          </p>
          <ol>
            <li>Use no CRM (chaos)</li>
            <li>Adopt Salesforce/HubSpot and get overwhelmed (analysis paralysis)</li>
          </ol>
          <p>
            The right answer is in between: a lightweight CRM with just enough structure to keep deals moving.
          </p>
          <p>
            Here's the minimal workflow that works for founder-led sales:
          </p>

          <h3>Step 1: Centralize All Leads in One Place</h3>
          <p>
            Every lead—cold, warm, inbound, referral—goes into your CRM. No exceptions.
          </p>
          <p>Use whatever tool you already like:</p>
          <ul>
            <li><strong>Notion</strong>: Great for custom workflows, easy to tweak</li>
            <li><strong>Airtable</strong>: Spreadsheet-CRM hybrid, powerful filters</li>
            <li><strong>Pipedrive</strong>: Built for simple sales processes</li>
            <li><strong>Google Sheets</strong>: Bare minimum (better than nothing)</li>
          </ul>
          <p>
            The tool matters less than consistency. Pick one, use it religiously.
          </p>

          <h3>Step 2: Assign a Follow-Up Date to Every Lead</h3>
          <p>When you add a lead, immediately set a follow-up date:</p>
          <ul>
            <li>Cold outreach: 3-5 days after first send</li>
            <li>Warm leads: 1-2 weeks</li>
            <li>Nurture: 3-6 months</li>
          </ul>
          <p>
            This is your insurance against forgetting people. Your CRM should surface "due today" leads every morning.
          </p>

          <h3>Step 3: Update Status After Every Interaction</h3>
          <p>
            After every email, call, or DM, update the lead's status and last contact date.
          </p>
          <p>
            This feels like busywork at first. It's not. It's the difference between:
          </p>
          <ul>
            <li>"I think I emailed them... maybe?"</li>
            <li>"I emailed them Feb 3, they replied 'check back in April,' follow-up is due April 1"</li>
          </ul>
          <p>
            30 seconds of updating saves 10 minutes of searching later.
          </p>

          <h3>Step 4: Use Follow-Up Templates (Don't Reinvent Every Email)</h3>
          <p>
            Founders waste hours writing custom follow-ups. Build a library of 5-10 templates instead:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg my-4">
            <p className="font-semibold mb-2">Template 1: First Follow-Up (No Reply)</p>
            <p className="text-slate-700 italic">
              "Hey [Name], following up on my email from last week about [pain point]. Still relevant?"
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg my-4">
            <p className="font-semibold mb-2">Template 2: Second Follow-Up (Still No Reply)</p>
            <p className="text-slate-700 italic">
              "[Name], looping back one more time. If it's not a priority now, happy to check back in a few months."
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg my-4">
            <p className="font-semibold mb-2">Template 3: "Not Now" Reply</p>
            <p className="text-slate-700 italic">
              "Got it—I'll check back in [timeframe]. Anything specific I should keep in mind for then?"
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg my-4">
            <p className="font-semibold mb-2">Template 4: Breakup Email (Final Follow-Up)</p>
            <p className="text-slate-700 italic">
              "[Name], I'll assume this isn't a priority right now. If timing changes, feel free to reach out."
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg my-4">
            <p className="font-semibold mb-2">Template 5: Nurture Reactivation (3-6 Months Later)</p>
            <p className="text-slate-700 italic">
              "Hey [Name], checking back in—still thinking about [solution]?"
            </p>
          </div>
          <p>
            Save these in your CRM or a doc. Customize names/details, but don't write from scratch every time.
          </p>

          <h3>Step 5: Weekly Pipeline Review (15 Minutes)</h3>
          <p>Every Monday (or Friday), spend 15 minutes reviewing:</p>
          <ul>
            <li>Leads with follow-ups due this week</li>
            <li>Leads in "Contacted" status for >14 days (nudge or move to nurture)</li>
            <li>Deals in "Qualified" or "Negotiating" (what's blocking them?)</li>
          </ul>
          <p>
            This keeps deals moving and prevents ghosting.
          </p>

          <h2>Part 3: Tech Stack — Tools for One-Person Sales Teams</h2>
          <p>
            The right tools save time. The wrong tools create busywork.
          </p>
          <p>
            Here's the minimal tech stack for founder-led sales:
          </p>

          <h3>Core Tools (Non-Negotiable)</h3>
          
          <div className="bg-white rounded-xl border border-slate-200 p-6 my-6">
            <h4 className="text-xl font-bold text-slate-900 mb-3">1. Lead Database: Apollo or ZoomInfo</h4>
            <p className="mb-3">You need a way to find leads at scale.</p>
            <ul className="mb-4">
              <li><strong>Apollo</strong>: Best for startups ($49/mo gets you 1,200 credits/month + email sequences)</li>
              <li><strong>ZoomInfo</strong>: Better data quality, but expensive ($15K+/year—only worth it if you're targeting enterprise)</li>
            </ul>
            <p className="mb-4">
              For most founders, Apollo wins. It's affordable, has good filters, and integrates with email.
            </p>
            {apollo?.website && (
              <a href={apollo.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">
                Try Apollo <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 my-6">
            <h4 className="text-xl font-bold text-slate-900 mb-3">2. Email Tool: Gmail + Instantly.ai (or Lemlist)</h4>
            <p className="mb-3">You need a way to send cold emails without wrecking your domain.</p>
            <p className="mb-3">
              Don't send cold outbound from your main company email. Use a secondary domain:
            </p>
            <ul className="mb-4">
              <li>Main domain: <code>yourcompany.com</code> (for inbound, customers, warm emails)</li>
              <li>Cold email domain: <code>getyourcompany.com</code> or <code>yourcompany.co</code> (for outbound)</li>
            </ul>
            <p className="mb-3">Send via:</p>
            <ul className="mb-4">
              <li><strong>Instantly.ai</strong>: Best for volume (unlimited sending, built-in warm-up, $37/mo)</li>
              <li><strong>Lemlist</strong>: Better for personalization (images, videos, LinkedIn automation, $59/mo)</li>
            </ul>
            <p className="mb-4">
              Both work. Instantly is simpler; Lemlist has more features.
            </p>
            <div className="flex flex-wrap gap-3">
              {instantly?.website && (
                <a href={instantly.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">
                  Try Instantly <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {lemlist?.website && (
                <a href={lemlist.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700">
                  Try Lemlist <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 my-6">
            <h4 className="text-xl font-bold text-slate-900 mb-3">3. CRM: Notion, Airtable, or Pipedrive</h4>
            <p className="mb-3">Pick based on complexity needs:</p>
            <ul className="mb-4">
              <li><strong>Notion</strong>: Flexible, easy to customize, great for workflows beyond sales (free for solo founders)</li>
              <li><strong>Airtable</strong>: Spreadsheet-CRM hybrid, powerful automation (free tier works)</li>
              <li><strong>Pipedrive</strong>: Built for sales, simple pipeline view ($14/mo)</li>
            </ul>
            <p className="mb-4">
              All three work. Use what you're already comfortable with.
            </p>
            {pipedrive?.website && (
              <a href={pipedrive.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">
                Try Pipedrive <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 my-6">
            <h4 className="text-xl font-bold text-slate-900 mb-3">4. Calendar Tool: Calendly</h4>
            <p className="mb-3">
              Don't play email ping-pong to book demos. Send a Calendly link.
            </p>
            <p className="mb-4">
              Free tier works fine. Pro tier ($10/mo) adds custom branding and multiple event types (15-min call vs. 45-min demo).
            </p>
            {calendly?.website && (
              <a href={calendly.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
                Try Calendly <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <h3>Nice-to-Have Tools (Add Later)</h3>
          <p>These aren't essential on day one, but useful as you scale:</p>
          <ul>
            <li><strong>LinkedIn Automation</strong>: Phantombuster or Expandi (automate connection requests + follow-ups)</li>
            <li><strong>Call Recording</strong>: Fireflies.ai ($10/mo for AI notes) or Gong ($1,200+/year for enterprise)</li>
            <li><strong>Enrichment</strong>: Apollo Email Finder (built-in) or Clearbit ($99/mo for more accuracy)</li>
          </ul>

          <h3>What You DON'T Need (Yet)</h3>
          <p>Skip these until you're doing $500K+ ARR:</p>
          <ul>
            <li>Salesforce (too complex, too expensive)</li>
            <li>HubSpot Sales Hub (bloated, hard to configure)</li>
            <li>Outreach.io or Salesloft (enterprise sales engagement platforms, $100+/user/month)</li>
            <li>ZoomInfo (unless selling to enterprise accounts)</li>
          </ul>
          <p>
            These tools are built for teams. As a solo founder, they'll slow you down.
          </p>

          <h2>Real-World Example: A Founder's Sales Ops Stack</h2>
          <p>
            Here's what a typical founder-led sales setup looks like in practice:
          </p>
          
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 p-6 my-6">
            <p className="font-semibold text-slate-900 mb-3">Scenario: SaaS founder selling a $10K/year product to mid-market companies (50-500 employees).</p>
            
            <p className="font-semibold text-slate-900 mt-4 mb-2">Tech Stack:</p>
            <ul className="mb-4">
              <li>Apollo ($49/mo) → Lead generation</li>
              <li>Instantly.ai ($37/mo) → Cold email sequences</li>
              <li>Notion (free) → CRM + deal tracking</li>
              <li>Calendly (free) → Demo booking</li>
              <li>Google Meet (free) → Video calls</li>
              <li>Fireflies.ai ($10/mo) → Call recording + notes</li>
            </ul>
            <p className="font-bold text-slate-900">Total cost: $96/month</p>

            <p className="font-semibold text-slate-900 mt-4 mb-2">Data Tracked:</p>
            <ul className="mb-4">
              <li>Lead source (Apollo cold email vs. LinkedIn vs. referral)</li>
              <li>Lead status (New → Contacted → Replied → Qualified → Negotiating → Closed)</li>
              <li>Last contact date + next follow-up date</li>
              <li>Deal value (estimated)</li>
            </ul>

            <p className="font-semibold text-slate-900 mt-4 mb-2">Workflows:</p>
            <ol className="mb-4">
              <li><strong>Monday</strong>: Build lead list in Apollo (100 leads), export to CSV</li>
              <li><strong>Monday-Tuesday</strong>: Upload to Instantly, launch email sequence (3 emails over 7 days)</li>
              <li><strong>Wednesday-Friday</strong>: Check replies, update CRM, book demos via Calendly</li>
              <li><strong>Weekly</strong>: Review pipeline, identify follow-ups due, send nurture emails</li>
            </ol>

            <p className="font-semibold text-slate-900 mt-4 mb-2">Results After 3 Months:</p>
            <ul>
              <li>600 cold emails sent</li>
              <li>42 replies (7% reply rate)</li>
              <li>12 demos booked</li>
              <li>3 deals closed ($30K ARR)</li>
              <li>Cost: $288 (3 months × $96/mo)</li>
              <li><strong>ROI: 100x</strong> (tools paid for themselves in first deal)</li>
            </ul>
          </div>

          <p>
            This is lightweight sales ops. No enterprise tools, no full-time ops hire—just enough structure to turn outbound into a repeatable system.
          </p>

          <h2>Common Sales Ops Mistakes (and How to Avoid Them)</h2>

          <h3>Mistake #1: Over-Engineering the CRM</h3>
          <p>
            Founders add 20 custom fields, complex automations, and multi-stage pipelines. Then they never update anything because it's too much work.
          </p>
          <p>
            <strong>Fix:</strong> Start simple. Use 4-5 core fields (name, company, status, last contact, follow-up date). Add more only when you feel friction.
          </p>

          <h3>Mistake #2: Tracking Vanity Metrics</h3>
          <p>
            "I sent 500 emails this week!" Cool. How many replies? How many demos? How many deals?
          </p>
          <p>
            Activity metrics (emails sent, calls made) don't matter if they don't drive revenue.
          </p>
          <p>
            <strong>Fix:</strong> Track outcomes (replies, demos, deals), not inputs (emails sent).
          </p>

          <h3>Mistake #3: No Follow-Up System</h3>
          <p>
            Most deals need 3-7 touches to close. Founders send one email, get no reply, and move on.
          </p>
          <p>
            <strong>Fix:</strong> Build follow-up into your workflow. If someone doesn't reply in 3 days, send follow-up #1. If still no reply after 5 days, send follow-up #2. Use templates to make this fast.
          </p>

          <h3>Mistake #4: Mixing Cold and Warm Email on One Domain</h3>
          <p>
            You send 1,000 cold emails from <code>you@yourcompany.com</code>. Half bounce, some mark you as spam. Now your domain reputation is trashed, and even warm emails land in spam.
          </p>
          <p>
            <strong>Fix:</strong> Use separate domains for cold (outbound) vs. warm (customer) emails. Always.
          </p>

          <h3>Mistake #5: No Pipeline Visibility</h3>
          <p>
            You have 20 leads in your CRM. How many are "close to closing"? How much revenue is in your pipeline?
          </p>
          <p>
            If you can't answer in 10 seconds, your sales ops data is useless.
          </p>
          <p>
            <strong>Fix:</strong> Add a simple pipeline view (Notion board, Airtable kanban, Pipedrive stages). Glance at it daily.
          </p>

          <h2>When to Hire Your First Sales Ops Person</h2>
          <p>
            You don't need a full-time ops hire until you're at $500K-$1M ARR with a 3+ person sales team.
          </p>
          <p>
            Before that, handle sales ops yourself with lightweight tools.
          </p>
          <p>
            <strong>Signs you're ready to hire ops help:</strong>
          </p>
          <ul>
            <li>You have 3+ reps and spend >10 hours/week on ops tasks (data cleanup, reporting, tool setup)</li>
            <li>Your CRM is a mess and deals are falling through cracks</li>
            <li>You need custom reporting (conversion rates by rep, funnel analysis)</li>
            <li>You're integrating multiple tools (CRM + email + calendar + analytics) and need someone to manage the tech stack</li>
          </ul>
          <p>
            Until then, keep it simple. Founder-led sales ops works because you're close to the customer—don't add layers until you need them.
          </p>

          <h2>Putting It All Together: Your 30-Day Sales Ops Setup</h2>
          <p>
            Here's how to go from "no sales ops" to "functional system" in one month:
          </p>

          <div className="bg-slate-50 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Week 1: Choose Your Tools</h3>
            <ul>
              <li>Pick a CRM (Notion, Airtable, or Pipedrive)</li>
              <li>Sign up for Apollo (lead gen)</li>
              <li>Set up Instantly or Lemlist (cold email)</li>
              <li>Buy a secondary domain for cold outreach</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Week 2: Set Up Your CRM</h3>
            <ul>
              <li>Create fields: Name, Company, Status, Lead Source, Last Contact, Next Follow-Up, Deal Value</li>
              <li>Build 8 status stages (New → Contacted → Replied → Qualified → Negotiating → Closed-Won/Lost → Nurture)</li>
              <li>Create a pipeline view (board or kanban)</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Week 3: Build Your First Outreach Sequence</h3>
            <ul>
              <li>Write 5 follow-up email templates</li>
              <li>Set up a 3-email sequence in Instantly/Lemlist (Day 1, Day 4, Day 8)</li>
              <li>Build your first lead list (100 leads in Apollo)</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Week 4: Run Outbound + Track Data</h3>
            <ul>
              <li>Launch your first campaign (100 cold emails)</li>
              <li>Track every reply in your CRM (update status + follow-up date)</li>
              <li>Book demos via Calendly</li>
              <li>Run your first weekly pipeline review</li>
            </ul>
          </div>

          <p>
            After 30 days, you'll have:
          </p>
          <ul>
            <li>A working CRM with live deals</li>
            <li>An outbound engine (cold email sequences)</li>
            <li>Data on what's working (reply rates, demo booking rates)</li>
          </ul>
          <p>
            From there, iterate. Tweak your messaging, refine your targeting, optimize follow-ups.
          </p>

          <h2>Final Thoughts: Sales Ops Is Your Competitive Edge</h2>
          <p>
            Most solo founders skip sales ops because it "feels like overhead." Then they burn out, forget follow-ups, and wonder why outbound isn't working.
          </p>
          <p>
            Sales ops isn't bureaucracy—it's leverage. A simple CRM, basic data tracking, and consistent follow-ups turn your outbound from chaos into a repeatable system.
          </p>
          <p>
            You don't need Salesforce. You don't need a RevOps team. You need:
          </p>
          <ol>
            <li>A lightweight CRM (Notion, Airtable, Pipedrive)</li>
            <li>Four core metrics (lead source, status, follow-up dates, deal value)</li>
            <li>Follow-up workflows (templates + reminders)</li>
            <li>A minimal tech stack (Apollo, Instantly, Calendly)</li>
          </ol>
          <p>
            That's it. Set it up once, maintain it for 30 minutes/week, and you'll close more deals without working harder.
          </p>
          <p>
            Because the best sales ops system isn't the most sophisticated one—it's the one you actually use.
          </p>

        </div>

        {/* Related Resources */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/resources/apollo-for-beginners/" className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 mb-2">Apollo for Beginners →</h3>
              <p className="text-sm text-slate-600">How to build your first outbound lead list</p>
            </Link>
            <Link to="/resources/cold-email-deliverability/" className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 mb-2">Cold Email Deliverability →</h3>
              <p className="text-sm text-slate-600">How to avoid spam filters</p>
            </Link>
            <Link to="/resources/instantly-for-beginners/" className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 mb-2">Instantly.ai for Beginners →</h3>
              <p className="text-sm text-slate-600">Complete setup guide for cold email</p>
            </Link>
            <Link to="/resources/founder-outbound-sales/" className="block p-6 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all">
              <h3 className="font-bold text-slate-900 mb-2">Founder Outbound Sales →</h3>
              <p className="text-sm text-slate-600">How to do cold outreach without a sales team</p>
            </Link>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-600">
          <p>
            <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. 
            If you sign up through them, we may earn a commission at no extra cost to you. 
            We only recommend tools we've personally used and believe in.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SalesOpsForFounderLedSalesPage;
