import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Check,
  X,
  ArrowRight,
  ExternalLink,
  Linkedin,
  Mail,
  Star
} from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';

const CRMComparisonPage = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best CRM for 2026: Pipedrive vs HubSpot vs Salesforce",
    "description": "Which CRM should you actually use in 2026? Real comparison of Pipedrive, HubSpot, and Salesforce based on team size, budget, and growth stage.",
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
    "dateModified": "2026-01-02"
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Best CRM for 2026: Pipedrive vs HubSpot vs Salesforce | Sales House</title>
        <meta name="description" content="Which CRM should you actually use in 2026? Real comparison of Pipedrive, HubSpot, and Salesforce based on team size, budget, and growth stage. Pricing, features, and honest recommendations." />
        <meta name="keywords" content="best CRM 2026, Pipedrive vs HubSpot, HubSpot vs Salesforce, Pipedrive vs Salesforce, CRM comparison, best CRM for startups, CRM for sales teams, best sales CRM" />
        <link rel="canonical" href="https://saleshousestack.com/comparisons/pipedrive-hubspot-salesforce/" />
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
            Best CRM for 2026: Pipedrive vs HubSpot vs Salesforce
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
              {['CRM Comparison', 'Pipedrive', 'HubSpot', 'Salesforce', 'Sales CRM', 'CRM for Startups', 'B2B Sales Tools', 'SaaS CRM'].map((tag) => (
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

export default CRMComparisonPage;
