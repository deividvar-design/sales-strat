import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, CheckCircle, Target, TrendingUp, AlertCircle } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';

const SolopreneurOutboundDailyPipelineRoutinePage = () => {
  const canonical = 'https://saleshousestack.com/pages/solopreneur-outbound-pipeline-routine/';

  const metaTitle = 'Solopreneur Outbound: The Daily 45-Minute Pipeline Routine | Sales House';
  const metaDescription = 'A simple 45-minute daily routine for solopreneurs to run consistent outbound without burning out. Build your pipeline with intent, not chaos.';
  const metaKeywords = 'solopreneur outbound, daily routine outbound, sales pipeline routine, cold outreach routine, founder sales routine, solo selling';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Solopreneur Outbound: The Daily 45-Minute Pipeline Routine",
    "description": "A simple 45-minute daily routine for solopreneurs to run consistent outbound without burning out. Build your pipeline with intent, not chaos.",
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
    "datePublished": "2026-02-05",
    "dateModified": "2026-02-05"
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonical} />
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
              Resource
            </div>
            <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-sm font-semibold text-indigo-700">
              Solopreneur
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Sales Routine
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Solopreneur Outbound: The Daily 45-Minute Pipeline Routine
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Outbound done right takes less time than you think. Here's the exact 45-minute daily routine I use to maintain a healthy pipeline as a solopreneur - no chaos, no overwhelm.
          </p>
        </div>

        {/* The Problem */}
        <div className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">The problem with "most solopreneurs"</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                You have no outbound system, so when you need revenue, you panic-email your list or post on LinkedIn asking for help. Your pipeline is a ghost town. You bounce between tactics because nothing feels consistent.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-red-200 text-sm text-slate-600">
            The fix isn't spending more time. It's spending the right 45 minutes every day.
          </div>
        </div>

        {/* The Routine */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Daily 45-Minute Routine</h2>
          <p className="text-lg text-slate-600 mb-8">
            This routine assumes you have a CRM, an email tool, and a list of targets. If you don't, start with the <strong>Solopreneur Outbound Stack</strong> article.
          </p>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="border-l-4 border-indigo-600 bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Phase 1: Prospect & Qualify (15 minutes)</h3>
                  <div className="space-y-3 text-slate-700">
                    <p><strong>Goal:</strong> Build and segment a list of 10-15 qualified targets for the day.</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                      <li>Open your lead database (Apollo, Lusha, or whatever you use)</li>
                      <li>Filter for your ICP: right company size, industry, role</li>
                      <li>Look for recent signals: funding, new hires, job changes (use LinkedIn, Crunchbase, or built-in filters)</li>
                      <li>Add 10-15 names to your CRM for the day's outreach</li>
                      <li>Spend 1-2 minutes per prospect: company context, recent news, personalization angle</li>
                    </ul>
                    <p className="mt-3 text-sm italic text-slate-600">Time discipline: Set a timer. 15 minutes goes fast. Stop when time is up.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="border-l-4 border-purple-600 bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Phase 2: Personalize & Send (20 minutes)</h3>
                  <div className="space-y-3 text-slate-700">
                    <p><strong>Goal:</strong> Send 10-15 personalized cold emails with a clear ask.</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                      <li>Write a short template: 3-4 sentences, one clear ask (usually a 15-minute call)</li>
                      <li>Open your email tool (Instantly, Reply.io, etc.)</li>
                      <li>For each prospect, add 1-2 lines of context: what you noticed, why they're a fit</li>
                      <li>Aim for 1 minute per email once you hit flow</li>
                      <li>Send all 10-15 before you second-guess yourself</li>
                    </ul>
                    <p className="mt-3 text-sm italic text-slate-600">Pro tip: Templating is your friend. Use the 80/20 rule - same template for 80% of prospects, 20% real personalization.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="border-l-4 border-green-600 bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Phase 3: Follow-up & Pipeline Review (10 minutes)</h3>
                  <div className="space-y-3 text-slate-700">
                    <p><strong>Goal:</strong> Keep conversations alive and track what's working.</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                      <li>Check your CRM for leads from 2-3 days ago with no replies</li>
                      <li>Send 2-3 short follow-ups (no pressure, just a reminder)</li>
                      <li>Flag any replies from the past week - move them to next steps immediately</li>
                      <li>Log what you sent and basic metrics (# sent, # opens if tracking, # replies)</li>
                    </ul>
                    <p className="mt-3 text-sm italic text-slate-600">Keep it lightweight. You're not building a sales operations empire; you're staying organized.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why this works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why this routine works</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">It's predictable</h3>
              <p className="text-slate-700">
                You do the same thing every day at the same time. Your brain knows what to expect. No more "should I do outreach today?" You just do it.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">It's sustainable</h3>
              <p className="text-slate-700">
                45 minutes is short enough to fit in your day without destroying your productivity. You're not spending 4 hours on emails; you're being efficient with your time.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">It compounds</h3>
              <p className="text-slate-700">
                15 prospects per day × 20 working days = 300 outreaches per month. At a 1-2% reply rate, that's 3-6 meetings. Do this for 3 months and you have a pipeline.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">It's repeatable across products</h3>
              <p className="text-slate-700">
                Whether you're selling SaaS, services, or consulting, this routine stays the same. Find targets → personalize → send → follow up.
              </p>
            </div>
          </div>
        </div>

        {/* What you need */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What you need to make this work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">1. Lead Database</h3>
              <p className="text-slate-700 text-sm mb-4">
                Apollo, ZoomInfo, or Lusha. You need a way to filter and build lists fast.
              </p>
              <div className="text-xs text-slate-600">
                Budget: $50-200/mo
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">2. Email Tool</h3>
              <p className="text-slate-700 text-sm mb-4">
                Instantly, Reply.io, or Lemlist. You need reliable sending and tracking.
              </p>
              <div className="text-xs text-slate-600">
                Budget: $30-100/mo
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">3. CRM</h3>
              <p className="text-slate-700 text-sm mb-4">
                HubSpot free, Pipedrive, or Salesforce. Track who you've reached and where they are.
              </p>
              <div className="text-xs text-slate-600">
                Budget: Free-50/mo
              </div>
            </div>
          </div>
        </div>

        {/* Common mistakes */}
        <div className="mb-12 bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Common mistakes to avoid</h2>
              <ul className="space-y-3 text-slate-700">
                <li><strong>No personalization:</strong> "Hi [First Name]" gets ignored. Spend 30 seconds on real context.</li>
                <li><strong>Too many tools:</strong> You don't need 5 things. Lead database + email tool + CRM is enough.</li>
                <li><strong>Skipping follow-ups:</strong> Most replies come on day 3-5. If you don't follow up, you leave meetings on the table.</li>
                <li><strong>Changing tactics too early:</strong> Give a template 30 days and 300 sends before you swap it out.</li>
                <li><strong>Getting fancy with sequences:</strong> Simple is better. Email 1 → follow-up 2 → follow-up 3. Done.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Daily template */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Your daily checklist</h2>
          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 accent-indigo-600" disabled />
              <span className="text-slate-700">[ ] Open lead database. Filter for today's ICP. (5 min)</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 accent-indigo-600" disabled />
              <span className="text-slate-700">[ ] Research 10-15 prospects. Note context in CRM. (10 min)</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 accent-indigo-600" disabled />
              <span className="text-slate-700">[ ] Write base template for today. (2 min)</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 accent-indigo-600" disabled />
              <span className="text-slate-700">[ ] Personalize and send 10-15 cold emails. (15 min)</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 accent-indigo-600" disabled />
              <span className="text-slate-700">[ ] Review CRM for warm leads. Send 2-3 follow-ups. (5 min)</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 accent-indigo-600" disabled />
              <span className="text-slate-700">[ ] Log metrics: # sent, # replies, # meetings scheduled. (3 min)</span>
            </div>
          </div>
        </div>

        {/* Final thought */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The bottom line</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Outbound is not glamorous. It's not exciting. It's just showing up every day, respecting the 45-minute window, and being consistent.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you do this routine for 90 days, you'll have a pipeline. If you do it for 6 months, you'll have options. That's all you're really looking for.
          </p>
        </div>

        {/* Related resources */}
        <div className="mb-12 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-6 hover:border-indigo-300 hover:bg-indigo-50 transition">
              <h3 className="font-bold text-slate-900 mb-2">Solopreneur Outbound Stack Under $100/mo</h3>
              <p className="text-sm text-slate-600 mb-4">The exact tools I use to run outbound without breaking the bank.</p>
              <a href="/resources/solopreneur-outbound-stack-under-100-mo-2026/" className="text-indigo-600 font-semibold hover:text-indigo-700">
                Read → 
              </a>
            </div>
            <div className="border border-slate-200 rounded-lg p-6 hover:border-purple-300 hover:bg-purple-50 transition">
              <h3 className="font-bold text-slate-900 mb-2">Cold Email Guide for SaaS Founders</h3>
              <p className="text-sm text-slate-600 mb-4">From template to reply: how to write cold emails that actually work.</p>
              <a href="/resources/cold-email-guide/" className="text-purple-600 font-semibold hover:text-purple-700">
                Read →
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Keep your outbound simple. Keep showing up.</h2>
          <p className="text-slate-300 mb-6">
            Get more resources on founder sales and solopreneur growth delivered to your inbox.
          </p>
          <a href="#" className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold transition">
            Join the Sales House newsletter
          </a>
        </div>
      </div>
    </div>
  );
};

export default SolopreneurOutboundDailyPipelineRoutinePage;
