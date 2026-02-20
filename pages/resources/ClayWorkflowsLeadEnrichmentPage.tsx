import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, Zap, Database, Target, TrendingUp, RefreshCw } from 'lucide-react';

import Breadcrumb from '../../components/Breadcrumb';
import { TOOLS } from '../../constants';

const ClayWorkflowsLeadEnrichmentPage = () => {
  const canonical = 'https://saleshousestack.com/resources/clay-workflows-lead-enrichment/';

  const metaTitle = 'Clay Workflows for B2B Lead Enrichment: 5 Real Examples (2026)';
  const metaDescription = 'Tactical Clay workflow examples: LinkedIn → email enrichment, company qualification, data aggregation, intent triggers, and CRM integration. Copy these to save hours.';
  const metaKeywords = 'clay workflows, clay enrichment, clay examples, b2b lead enrichment, clay waterfall enrichment, clay AI research, clay tutorials';

  const clay = TOOLS.find(t => t.id === 'clay');

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
            <div className="inline-block px-3 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-sm font-semibold text-emerald-700">
              Resource Guide
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Clay Workflows
            </div>
            <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-sm font-semibold text-purple-700">
              AI Enrichment
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Clay Workflows for B2B Lead Enrichment: 5 Real Examples
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Most enrichment tools give you a database. Clay gives you a programmable research assistant.
            Here are 5 workflows you can copy right now to stop manually hunting for emails, company data, and buying signals.
          </p>
        </div>

        {/* TLDR */}
        <div className="mb-12 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">⚡</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Why Clay beats traditional enrichment</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                <strong>Traditional tools:</strong> Query one database, get whatever they have (often incomplete or outdated).
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                <strong>Clay:</strong> Query 50+ sources in sequence (waterfall enrichment), use AI to research what databases miss, 
                apply conditional logic, and output only qualified leads with complete data.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-emerald-200 text-sm text-slate-600">
            It is like having a junior analyst who never sleeps and only charges you per lookup.
          </div>
        </div>

        {/* What Makes Clay Powerful */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Makes Clay Workflows Powerful</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Waterfall Enrichment</h3>
              </div>
              <p className="text-slate-700">
                Query Apollo, then ZoomInfo, then Lusha, then scrape LinkedIn—all automatically. 
                Stop at the first verified result. Get 60-80% enrichment rates instead of 30-40%.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">AI-Powered Research</h3>
              </div>
              <p className="text-slate-700">
                Clay's AI agent can visit websites, read job postings, analyze tech stacks, 
                and answer custom questions like "Does this company use Salesforce?" or "What industry do they serve?"
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Conditional Logic</h3>
              </div>
              <p className="text-slate-700">
                Only find emails for companies with 50-200 employees. Only scrape LinkedIn if job title = VP of Sales. 
                Only score leads if website mentions "outbound." Skip enrichment steps you don't need.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <RefreshCw className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">CRM Integration</h3>
              </div>
              <p className="text-slate-700">
                Push enriched data directly into HubSpot, Salesforce, or Pipedrive. 
                Update existing records. Score leads before they hit your AE's inbox. Zero manual CSV uploads.
              </p>
            </div>
          </div>
        </div>

        {/* Workflow 1: LinkedIn → Email */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">1️⃣</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">LinkedIn → Email Enrichment</h2>
                <p className="text-slate-600 font-medium">Building cold email lists from LinkedIn profiles</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="font-bold text-slate-900 mb-1">Input:</p>
                <p className="text-slate-700">LinkedIn profile URL (from Sales Navigator export or manual scraping)</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="font-bold text-slate-900 mb-2">Steps:</p>
                <ol className="space-y-2 text-slate-700">
                  <li><strong>1)</strong> Extract profile data (name, title, company) using Clay's LinkedIn scraper</li>
                  <li><strong>2)</strong> Find email via waterfall: Apollo → Hunter.io → Snov.io</li>
                  <li><strong>3)</strong> Verify deliverability with ZeroBounce or NeverBounce</li>
                  <li><strong>4)</strong> Filter out generic emails (info@, contact@, hello@)</li>
                </ol>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="font-bold text-slate-900 mb-1">Output:</p>
                <p className="text-slate-700">Verified email + job title + company + LinkedIn URL (ready for cold email sequence)</p>
              </div>

              <div className="bg-blue-100 rounded-lg p-4 border border-blue-300">
                <p className="font-bold text-slate-900 mb-1">Use Case:</p>
                <p className="text-slate-700">
                  You scraped 500 Sales VPs from LinkedIn. Clay enriches 320 with verified emails in 10 minutes. 
                  Export to Instantly or Reply.io and launch your sequence same day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow 2: Company Research */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">2️⃣</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Company Research + Qualification</h2>
                <p className="text-slate-600 font-medium">Targeted ABM with AI-powered ICP scoring</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="font-bold text-slate-900 mb-1">Input:</p>
                <p className="text-slate-700">Company domain (from a purchased list, Crunchbase export, or Apollo search)</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="font-bold text-slate-900 mb-2">Steps:</p>
                <ol className="space-y-2 text-slate-700">
                  <li><strong>1)</strong> Scrape company website to extract value proposition and customer types</li>
                  <li><strong>2)</strong> Identify tech stack (Clearbit, BuiltWith, Wappalyzer integrations)</li>
                  <li><strong>3)</strong> Score ICP fit with AI prompt: "Does this company match: B2B SaaS, 20-200 employees, uses HubSpot?"</li>
                  <li><strong>4)</strong> Find decision makers (CEO, VP Sales, Head of Growth) via LinkedIn or Apollo</li>
                </ol>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="font-bold text-slate-900 mb-1">Output:</p>
                <p className="text-slate-700">Qualified company record + ICP score (0-100) + 2-3 decision maker contacts</p>
              </div>

              <div className="bg-purple-100 rounded-lg p-4 border border-purple-300">
                <p className="font-bold text-slate-900 mb-1">Use Case:</p>
                <p className="text-slate-700">
                  You have 1,000 companies but only 200 match your ICP. Clay qualifies them in 30 minutes, 
                  finds 3 contacts per qualified company, and outputs 600 leads—all ICP-fit and ready for outreach.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow 3: Multi-Source Data */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">3️⃣</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Multi-Source Data Aggregation</h2>
                <p className="text-slate-600 font-medium">Maximizing data quality by merging multiple providers</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-emerald-200">
                <p className="font-bold text-slate-900 mb-1">Input:</p>
                <p className="text-slate-700">Contact name + company name (from event attendee list, webinar signups, or referrals)</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-emerald-200">
                <p className="font-bold text-slate-900 mb-2">Steps:</p>
                <ol className="space-y-2 text-slate-700">
                  <li><strong>1)</strong> Query Apollo for basic contact data (email, title, phone)</li>
                  <li><strong>2)</strong> Query ZoomInfo for org chart position and reporting structure</li>
                  <li><strong>3)</strong> Query Lusha for mobile number and direct dial</li>
                  <li><strong>4)</strong> Merge results: pick most recent title, verified email, and best phone number</li>
                </ol>
              </div>

              <div className="bg-white rounded-lg p-4 border border-emerald-200">
                <p className="font-bold text-slate-900 mb-1">Output:</p>
                <p className="text-slate-700">Single enriched contact record with the most complete + accurate data from all sources</p>
              </div>

              <div className="bg-emerald-100 rounded-lg p-4 border border-emerald-300">
                <p className="font-bold text-slate-900 mb-1">Use Case:</p>
                <p className="text-slate-700">
                  Your webinar had 50 registrants but only names and company. Clay enriches each one across 3 databases, 
                  returning 45 complete records with verified emails and phone numbers in 5 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow 4: Intent Signals */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">4️⃣</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Intent Signal Triggers</h2>
                <p className="text-slate-600 font-medium">Timing-based outreach using buying signals</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <p className="font-bold text-slate-900 mb-1">Input:</p>
                <p className="text-slate-700">Target company list (your ICP or existing prospects)</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <p className="font-bold text-slate-900 mb-2">Steps:</p>
                <ol className="space-y-2 text-slate-700">
                  <li><strong>1)</strong> Monitor hiring posts on LinkedIn (Sales roles, SDR openings = growth signal)</li>
                  <li><strong>2)</strong> Track funding news via Crunchbase API or news scraping</li>
                  <li><strong>3)</strong> Identify recent tool adoption (G2 reviews, case studies, tech stack changes)</li>
                  <li><strong>4)</strong> Flag hot leads and push to priority sequence with tailored messaging</li>
                </ol>
              </div>

              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <p className="font-bold text-slate-900 mb-1">Output:</p>
                <p className="text-slate-700">Prioritized lead list with buying signals + trigger event notes for personalized outreach</p>
              </div>

              <div className="bg-orange-100 rounded-lg p-4 border border-orange-300">
                <p className="font-bold text-slate-900 mb-1">Use Case:</p>
                <p className="text-slate-700">
                  You track 500 target accounts. Clay monitors them weekly and flags 23 companies that just posted SDR job openings. 
                  You reach out within 48 hours with: "Saw you're hiring SDRs—we help teams like yours ramp faster."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow 5: CRM Integration */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">5️⃣</div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">CRM Integration Pipeline</h2>
                <p className="text-slate-600 font-medium">Database cleanup and continuous enrichment</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <p className="font-bold text-slate-900 mb-1">Input:</p>
                <p className="text-slate-700">CRM export (HubSpot, Pipedrive, Salesforce) with incomplete or outdated records</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <p className="font-bold text-slate-900 mb-2">Steps:</p>
                <ol className="space-y-2 text-slate-700">
                  <li><strong>1)</strong> Import contacts into Clay with existing data (name, company, email)</li>
                  <li><strong>2)</strong> Enrich missing fields: phone numbers, LinkedIn URLs, company size, industry</li>
                  <li><strong>3)</strong> Update outdated job titles by checking LinkedIn profiles</li>
                  <li><strong>4)</strong> Score leads based on ICP fit (company size, tech stack, job title)</li>
                  <li><strong>5)</strong> Sync enriched data back to CRM via native integration or webhook</li>
                </ol>
              </div>

              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <p className="font-bold text-slate-900 mb-1">Output:</p>
                <p className="text-slate-700">Clean, complete CRM records with ICP scores and up-to-date contact information</p>
              </div>

              <div className="bg-indigo-100 rounded-lg p-4 border border-indigo-300">
                <p className="font-bold text-slate-900 mb-1">Use Case:</p>
                <p className="text-slate-700">
                  Your HubSpot has 5,000 contacts but 60% are missing phone numbers and 40% have outdated titles. 
                  Clay enriches 4,200 records in one afternoon. Your AEs now have complete data without manual lookups.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started with Clay</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1) Sign up for Clay</h3>
              <p className="text-slate-700 mb-3">
                Free plan includes 100 credits to test workflows. Pro plan ($149/mo) unlocks unlimited tables and 2,000 credits/month. 
                You will burn credits on data lookups, not storage.
              </p>
              {clay?.website && (
                <a 
                  href={clay.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors"
                >
                  Try Clay Free <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">2) Start with one workflow</h3>
              <p className="text-slate-700">
                Do not build five workflows on day one. Pick <strong>Workflow 1 (LinkedIn → Email)</strong> if you need cold email lists, 
                or <strong>Workflow 2 (Company Qualification)</strong> if you are running ABM. Master one, then add complexity.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">3) Connect your data providers</h3>
              <p className="text-slate-700">
                Clay integrations: Apollo, ZoomInfo, Lusha, Hunter.io, Clearbit, LinkedIn, and 50+ others. 
                Most require API keys (free or paid plans). Set these up before building workflows.
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">4) Test on 50 records first</h3>
              <p className="text-slate-700">
                Do not blow your credits on 10,000 leads before you verify the workflow works. 
                Run 50, check output quality, adjust logic, then scale to thousands.
              </p>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Learn More About Clay</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/reviews/clay" className="bg-white border-2 border-emerald-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">⭐ Clay.com Review</h4>
              <p className="text-slate-600 text-sm">
                Full breakdown of Clay's features, pricing, and whether it's worth the learning curve.
              </p>
            </Link>

            <Link to="/comparisons/clay-vs-apollo" className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">🆚 Clay vs Apollo</h4>
              <p className="text-slate-600 text-sm">
                AI enrichment vs traditional database: which one wins for your use case?
              </p>
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mb-12 bg-gradient-to-br from-emerald-950/10 to-blue-950/5 rounded-2xl border border-emerald-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to automate your enrichment?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            {clay?.website ? (
              <>
                Start with Clay's free plan and test one workflow this week. 
                Or book a consultation and we will build your first workflow together.
              </>
            ) : (
              <>
                Book a free consultation and we will build your first Clay workflow together—from ICP filters to CRM sync.
              </>
            )}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {clay?.website && (
              <a
                href={clay.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors"
              >
                Try Clay Free <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href="/consulting"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-sm text-slate-500 border-t border-slate-200 pt-6">
          <p>
            Written by David Varan, founder of Sales House. These workflows are based on real implementations for B2B sales teams. 
            Clay affiliate link included—supports this site at no extra cost to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClayWorkflowsLeadEnrichmentPage;
