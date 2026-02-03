import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Database, TrendingUp, DollarSign, BarChart3, Check, X, AlertTriangle, ArrowRight, Clock } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import { TOOLS } from '../../constants';

const CRMSetupGuidePage = () => {
  const hubspotTool = TOOLS.find(t => t.id === 'hubspot');
  const pipedriveTool = TOOLS.find(t => t.id === 'pipedrive');
  const salesforceTool = TOOLS.find(t => t.id === 'salesforce');

  const hubspotLink = hubspotTool?.website || 'https://www.hubspot.com';
  const pipedriveLink = pipedriveTool?.website || 'https://www.pipedrive.com';
  const salesforceLink = salesforceTool?.website || 'https://www.salesforce.com';

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>The CRM Setup That Helps You Sell More and Improve Your SaaS Exit Valuation | Sales House</title>
        <meta name="title" content="The CRM Setup That Helps You Sell More and Improve Your SaaS Exit Valuation" />
        <meta name="description" content="Clean CRM setup in HubSpot, Pipedrive, or Salesforce helps you close more deals today and increases your SaaS exit valuation. Here are the exact 9 fields that drive sales performance and satisfy buyer due diligence." />
        <meta name="keywords" content="CRM setup, HubSpot setup, Pipedrive setup, Salesforce setup, SaaS exit valuation, due diligence, CRM fields, sales performance, exit strategy" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://saleshousestack.com/resources/crm-setup-guide" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://saleshousestack.com/resources/crm-setup-guide" />
        <meta property="og:title" content="The CRM Setup That Helps You Sell More and Improve Your SaaS Exit Valuation" />
        <meta property="og:description" content="Clean CRM setup helps you close more deals today and increases your SaaS exit valuation. The exact 9 fields that drive performance." />
        <meta property="og:image" content="https://saleshousestack.com/saleshouse-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://saleshousestack.com/resources/crm-setup-guide" />
        <meta name="twitter:title" content="CRM Setup for Sales Performance and Exit Valuation" />
        <meta name="twitter:description" content="The exact 9 CRM fields that help you close more deals and command a premium valuation." />
        <meta name="twitter:image" content="https://saleshousestack.com/saleshouse-logo.png" />

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Set Up Your CRM for Sales Performance and Exit Valuation",
            "description": "Complete guide to configuring HubSpot, Pipedrive, or Salesforce with 9 core fields that improve sales performance and increase SaaS exit valuation",
            "totalTime": "PT1H",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Set Up Contact Status Field",
                "text": "Create dropdown field with 7 statuses from 'To Contact' to 'Churned' for pipeline visibility and deal tracking."
              },
              {
                "@type": "HowToStep",
                "name": "Add Source Attribution",
                "text": "Track where each lead came from (Apollo, website, referral) to calculate CAC by channel and optimize budget allocation."
              },
              {
                "@type": "HowToStep",
                "name": "Configure ICP and Industry Fields",
                "text": "Segment contacts by ideal customer profile and industry to personalize outreach and track conversion rates."
              },
              {
                "@type": "HowToStep",
                "name": "Add GDPR Compliance Field",
                "text": "Document how you legally obtained European user data to maintain compliance and satisfy buyer due diligence."
              },
              {
                "@type": "HowToStep",
                "name": "Set Up Client-Only Fields",
                "text": "Add Plan and Next Billing Date fields for customers to enable revenue forecasting and churn prevention."
              }
            ]
          })}
        </script>

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The CRM Setup That Helps You Sell More and Improve Your SaaS Exit Valuation",
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
            "datePublished": "2026-02-03",
            "dateModified": "2026-02-03",
            "mainEntityOfPage": "https://saleshousestack.com/resources/crm-setup-guide",
            "image": "https://saleshousestack.com/saleshouse-logo.png",
            "articleSection": "CRM & Sales Operations",
            "keywords": ["CRM setup", "HubSpot", "Pipedrive", "Salesforce", "exit valuation", "due diligence", "sales performance"]
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
          <div className="inline-block px-3 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-xs font-bold text-emerald-700 mb-4 uppercase tracking-wider">
            CRM & Exit Strategy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The CRM Setup That Helps You Sell More and Improve Your SaaS Exit Valuation
          </h1>
          <div className="flex items-center gap-6 text-sm text-slate-600 mb-6">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>9 core fields</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>1 hour setup</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Higher valuation</span>
            </div>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            Clean CRM setup in HubSpot, Pipedrive, or Salesforce helps you close more deals today and increases your SaaS exit valuation. Here are the exact 9 fields that drive sales performance and satisfy buyer due diligence.
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Most founders treat their CRM like a glorified address book. Names, emails, maybe a note or two.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Then two things happen:
          </p>

          <div className="space-y-6 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Problem 1: Deals fall through the cracks</h3>
              <p className="text-slate-700">
                You forget to follow up. You can't remember who's interested vs who ghosted you. Revenue suffers because your sales process lives in your head, not in your system.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Problem 2: Your CRM becomes a liability at exit</h3>
              <p className="text-slate-700">
                During due diligence, buyers ask for reports you can't generate. You spend weeks manually building spreadsheets. The data conflicts. Buyer confidence drops. Your valuation suffers.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-xl p-8">
            <p className="text-xl font-bold mb-4">
              Here's what nobody tells you: The right CRM setup helps you close more deals today AND increases your exit valuation tomorrow.
            </p>
            <p className="text-lg">
              Not 47 custom fields. Not a complicated Salesforce implementation. Just 9-11 core fields that help you sell better now and command a premium valuation later.
            </p>
          </div>
        </section>

        {/* Why CRM Affects Both */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why CRM Setup Affects Both Your Sales Performance and Exit Value</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            A properly configured CRM does two things simultaneously:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                Operational benefit (right now):
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Never lose track of opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Follow up at the right time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Know which channels bring you customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Focus on high-value prospects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>Close deals faster and more predictably</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-emerald-600" />
                Strategic benefit (at exit):
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Prove your sales process is repeatable</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Show predictable revenue growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Demonstrate scalable customer acquisition</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Command a premium multiple</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Close due diligence faster</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-8">
            <p className="text-xl font-bold">
              Your CRM is both your daily operating system AND your exit insurance policy.
            </p>
          </div>
        </section>

        {/* What This Looks Like */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What This Looks Like in Practice</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <X className="w-6 h-6 text-red-600" />
                Founder A: Messy CRM
              </h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Daily:</p>
                  <p className="text-sm">"Did I follow up with that prospect from last week? Let me search my email..."</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Monthly:</p>
                  <p className="text-sm">"Which leads came from Apollo vs our website? No idea, I didn't track it."</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Quarterly:</p>
                  <p className="text-sm">"Why did we close 8 deals last quarter but only 5 this quarter? Not sure."</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">At Exit:</p>
                  <p className="text-sm">Buyer asks "Can you show me your pipeline velocity?" Answer: "Uh..."</p>
                </div>
                <div className="pt-4 border-t border-red-300">
                  <p className="font-bold text-red-900">Result: Lower close rates, longer sales cycles, reduced exit valuation</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-emerald-600" />
                Founder B: Clean CRM
              </h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Daily:</p>
                  <p className="text-sm">Filter for "No Reply &gt; 7 days" - send follow-ups in 10 minutes</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Monthly:</p>
                  <p className="text-sm">"Apollo drove 12 customers at $280 CAC, referrals drove 5 at $40 CAC - let's double down on referrals"</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Quarterly:</p>
                  <p className="text-sm">"Average time-to-close dropped from 45 days to 31 days - our process is improving"</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">At Exit:</p>
                  <p className="text-sm">Buyer asks "Can you show me your pipeline velocity?" Answer: "Here's the report, generated in real-time"</p>
                </div>
                <div className="pt-4 border-t border-emerald-300">
                  <p className="font-bold text-emerald-900">Result: Higher close rates, faster sales cycles, premium exit valuation</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-700 mt-6 font-semibold text-center">
            Same product. Different outcomes. The CRM is both the daily workflow and the exit proof.
          </p>
        </section>

        {/* What Buyers Care About */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Buyers Actually Care About During Due Diligence</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            When someone acquires your SaaS, they request:
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Customer list with status, MRR, contract dates</span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Pipeline report showing deal stages and velocity</span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Source attribution - which channels drive growth</span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Cohort analysis - retention by signup period</span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Account health metrics - which customers are engaged vs at-risk</span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Growth trajectory proof - pipeline data showing future revenue</span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>GDPR compliance documentation - how you collected European user data</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">If you can generate these reports instantly:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Buyer confidence increases</li>
                <li>• Due diligence goes faster</li>
                <li>• You command a premium multiple</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">If you scramble for two weeks building these manually:</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Buyer thinks "what else don't they have together?"</li>
                <li>• Data inconsistencies kill trust</li>
                <li>• Your valuation suffers (or they walk away)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8">
            <p className="text-xl font-bold">
              But here's the key: These same reports help you sell better RIGHT NOW. You're not setting up fields "just for exit." You're setting up fields that make you more effective today and more valuable tomorrow.
            </p>
          </div>
        </section>

        {/* The 9 Core Fields */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The 9 Core Fields That Work in HubSpot, Pipedrive & Salesforce</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Here's the exact field structure that helps you sell better and exit for more. These fields work identically across all three CRMs - just different UI for setup.
          </p>

          {/* Field 1: Contact Status */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Contact Status (Dropdown)</h3>
            <p className="text-slate-700 mb-4">Your entire sales funnel in one field:</p>

            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-slate-700 font-mono text-sm">
                <li>0. To Contact</li>
                <li>1. No Reply</li>
                <li>2. Connected</li>
                <li>3. Meeting Booked</li>
                <li>4. Opportunity Open</li>
                <li>5. Client</li>
                <li>6. Churned / Not Interested</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">How this helps you sell more (daily use):</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Quick filter: "Show me everyone at '1. No Reply' for &gt;7 days" = instant follow-up list</li>
                  <li>• Pipeline visibility: Know exactly how many opportunities you have at each stage</li>
                  <li>• Never lose track: Every contact has a clear status, nothing falls through cracks</li>
                  <li>• Focus time: Filter for "3. Meeting Booked" this week, prep for those conversations</li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">How this helps at exit (valuation):</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Proves your sales process is documented and repeatable</li>
                  <li>• Shows conversion rates at each stage</li>
                  <li>• Demonstrates pipeline velocity</li>
                  <li>• Answers: "Is this sales process scalable or founder-dependent?"</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-100 border border-slate-300 rounded-lg p-4">
              <p className="text-slate-700 text-sm">
                <strong>Why numeric prefix:</strong> Automatic sorting. Status "5" always comes after "4". Works perfectly in HubSpot, Pipedrive, and Salesforce filters.
              </p>
            </div>
          </div>

          {/* Field 2: ICP Type */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. ICP Type (Dropdown)</h3>
            <p className="text-slate-700 mb-4">Who you're selling to:</p>

            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-slate-700">
                <li>• Technical Founders</li>
                <li>• Sales Leaders</li>
                <li>• Marketing Agencies</li>
                <li>• E-commerce Brands</li>
                <li>• [Your specific ICPs]</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">How this helps you sell more:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Personalized messaging: Filter "Technical Founders" and send vibecoder-specific emails</li>
                  <li>• Better qualification: "This lead is a 'Marketing Agency' but we close best with 'Technical Founders' - deprioritize"</li>
                  <li>• Faster learning: "Sales Leaders convert at 18%, Marketing Agencies at 4% - stop targeting agencies"</li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">How this helps at exit:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Proves you have focused go-to-market strategy</li>
                  <li>• Shows which segments convert best</li>
                  <li>• Tells buyer where to focus post-acquisition</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Field 3: Industry */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Industry (Dropdown)</h3>
            <p className="text-slate-700 mb-4">Vertical segmentation:</p>

            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-slate-700">
                <li>• SaaS</li>
                <li>• E-commerce</li>
                <li>• Financial Services</li>
                <li>• Healthcare</li>
                <li>• [Your industries]</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">How this helps you sell more:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Industry-specific case studies: "You're in e-commerce, here's how another e-commerce brand uses us"</li>
                  <li>• Better targeting: "We close 3x faster with SaaS companies - prioritize those leads"</li>
                  <li>• Personalized pain points: Different industries have different problems</li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">How this helps at exit:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Shows market diversification (not dependent on one dying industry)</li>
                  <li>• Proves which verticals have highest LTV</li>
                  <li>• Identifies expansion opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Field 4: Contact Source - MOST IMPORTANT */}
          <div className="bg-indigo-50 border-2 border-indigo-600 rounded-xl p-8 mb-6">
            <div className="inline-block px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded mb-2">
              CRITICAL FOR CAC
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Contact Source (Dropdown)</h3>
            <p className="text-slate-700 mb-4">Channel attribution - where they came from:</p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-slate-700">
                <li>• Outbound - Apollo</li>
                <li>• Outbound - Clay</li>
                <li>• Outbound - Scrapped</li>
                <li>• Outbound - Cognism</li>
                <li>• Outbound - ZoomInfo</li>
                <li>• Outbound - Lusha</li>
                <li>• Inbound - Website</li>
                <li>• Inbound - Referral</li>
                <li>• Inbound - LinkedIn</li>
                <li>• Inbound - Content</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-indigo-300 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">How this helps you sell more:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• ROI tracking: "Apollo leads close at 12%, website at 8% - spend more on Apollo"</li>
                  <li>• Budget optimization: "We're paying $500/mo for ZoomInfo but only closed 1 customer from it in 6 months - cut it"</li>
                  <li>• Double down on winners: "Referrals convert at 38% - build a referral program"</li>
                  <li>• Channel-specific follow-up: "Inbound-Website leads need faster response than Outbound-Apollo"</li>
                </ul>
              </div>

              <div className="bg-white border border-indigo-300 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">How this helps at exit:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Proves CAC by channel (critical for buyer growth modeling)</li>
                  <li>• Shows which channels are scalable</li>
                  <li>• Demonstrates ROI on each tool</li>
                  <li>• Answers: "Can we keep growing this post-acquisition?"</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-lg p-6">
              <p className="font-bold text-lg">
                This is HUGE for both selling and valuation. Knowing your CAC by channel helps you allocate budget better today AND proves to buyers that growth is predictable tomorrow.
              </p>
            </div>
          </div>

          {/* Field 5: GDPR Source */}
          <div className="bg-amber-50 border-2 border-amber-600 rounded-xl p-8 mb-6">
            <div className="inline-block px-2 py-1 bg-amber-600 text-white text-xs font-bold rounded mb-2">
              CRITICAL FOR EU MARKETS
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">5. GDPR Source (Dropdown)</h3>
            <p className="text-slate-700 mb-4">How you legally obtained European user data:</p>

            <div className="bg-white rounded-lg p-6 mb-6">
              <ul className="space-y-2 text-slate-700">
                <li>• Consent - Website Form</li>
                <li>• Consent - Email Opt-in</li>
                <li>• Consent - Trial Signup</li>
                <li>• Legitimate Interest - B2B Contact</li>
                <li>• Public Information - LinkedIn</li>
                <li>• Public Information - Company Website</li>
                <li>• Existing Customer - Contract</li>
                <li>• Event - Conference/Webinar</li>
                <li>• Partner - Referred by [Partner Name]</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-amber-300 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">How this helps you sell more:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Legal protection: Avoid €20M GDPR fines</li>
                  <li>• EU market access: Can confidently target European customers</li>
                  <li>• Professional compliance: Shows you're a serious business, not a fly-by-night operation</li>
                </ul>
              </div>

              <div className="bg-white border border-amber-300 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">How this helps at exit:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>• Proves GDPR compliance (required for EU customers)</li>
                  <li>• Mitigates legal risk (no consent = buyer liability)</li>
                  <li>• Answers: "Will we inherit regulatory problems?"</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-amber-300 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">When to use each option:</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• <strong>Consent - Website Form:</strong> They filled out form, checked consent box</li>
                <li>• <strong>Legitimate Interest - B2B Contact:</strong> Cold outreach to business contacts (legal under GDPR for B2B)</li>
                <li>• <strong>Public Information:</strong> Data from LinkedIn, company websites</li>
                <li>• <strong>Existing Customer:</strong> Relationship via contract</li>
                <li>• <strong>Event:</strong> Met at conference with permission</li>
              </ul>
              <p className="text-slate-700 mt-4 font-semibold">
                Buyers acquiring companies with EU customers demand this. Without it, they either walk away or lower the offer significantly.
              </p>
            </div>
          </div>

          {/* Fields 6-9: Shorter format */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">6. Pain Point (Text Field)</h3>
              <p className="text-slate-700 mb-3">Brief note on their specific problem:</p>
              <div className="bg-slate-50 rounded p-4 mb-3">
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li>• "API rate limiting issues"</li>
                  <li>• "Scaling sales team from 5 to 20"</li>
                  <li>• "Manual data enrichment process"</li>
                </ul>
              </div>
              <p className="text-slate-700 text-sm">
                <strong>Selling benefit:</strong> Personalized demos, targeted follow-ups, pattern recognition<br/>
                <strong>Exit benefit:</strong> Proves product-market fit, documents customer understanding
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">7. Contact LinkedIn URL (URL Field)</h3>
              <p className="text-slate-700 mb-3">Direct link to person's profile: <code className="bg-slate-100 px-2 py-1 rounded text-sm">https://www.linkedin.com/in/johndoe/</code></p>
              <p className="text-slate-700 text-sm">
                <strong>Selling benefit:</strong> One-click pre-call research, personalization, warm intros<br/>
                <strong>Exit benefit:</strong> Proves data quality (real people, not scraped junk emails)
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">8. Account LinkedIn URL (URL Field)</h3>
              <p className="text-slate-700 mb-3">Company's LinkedIn page: <code className="bg-slate-100 px-2 py-1 rounded text-sm">https://www.linkedin.com/company/acme-corp/</code></p>
              <p className="text-slate-700 text-sm">
                <strong>Selling benefit:</strong> Company research, timing signals, better pitches<br/>
                <strong>Exit benefit:</strong> Account data completeness, quick verification for buyers
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">9. Last Activity Date (Date Field - Auto-Updated)</h3>
              <p className="text-slate-700 mb-3">When you last interacted with this contact: <code className="bg-slate-100 px-2 py-1 rounded text-sm">2026-01-28</code></p>
              <p className="text-slate-700 text-sm mb-3">
                <strong>Selling benefit:</strong> Never drop the ball, prioritize hot leads, re-engagement campaigns, pipeline hygiene<br/>
                <strong>Exit benefit:</strong> Shows customer engagement levels, proves active management
              </p>
              <p className="text-slate-600 text-sm italic">
                Auto-updates in HubSpot, Pipedrive, Salesforce when you send emails, log calls, add notes.
              </p>
            </div>
          </div>

          {/* Client-Only Fields */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Client-Only Fields (Status = 5)</h3>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">10. Plan (Dropdown)</h4>
                <p className="text-slate-700 mb-3">Their subscription tier: Starter, Pro, Enterprise</p>
                <p className="text-slate-700 text-sm">
                  <strong>Selling benefit:</strong> Upsell targeting, segment support, pricing experiments<br/>
                  <strong>Exit benefit:</strong> Revenue distribution by tier, expansion revenue opportunity
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">11. Next Billing Date (Date Field)</h4>
                <p className="text-slate-700 mb-3">When their subscription renews: <code className="bg-slate-100 px-2 py-1 rounded text-sm">2026-03-15</code></p>
                <p className="text-slate-700 text-sm">
                  <strong>Selling benefit:</strong> Churn prevention, upsell timing, renewal preparation<br/>
                  <strong>Exit benefit:</strong> Revenue predictability (forward revenue = most valuable metric to buyers)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Which CRM Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Which CRM Should You Use?</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            All three major CRMs (HubSpot, Pipedrive, Salesforce) support these fields. Here's how to choose:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* HubSpot */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">HubSpot</h3>
              <p className="text-slate-700 text-sm mb-3"><strong>Best for:</strong> Startups, bootstrapped SaaS, teams 1-20 people</p>
              <p className="text-slate-700 text-sm mb-3"><strong>Why:</strong> Free tier works well, easy setup, buyers recognize it</p>
              <p className="text-slate-700 text-sm mb-4"><strong>Pricing:</strong> Free (sufficient for most), paid plans start at $45/mo</p>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <a
                  href={hubspotLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Get Started with HubSpot Free
                </a>
              </div>
            </div>

            {/* Pipedrive */}
            <div className="bg-indigo-50 border-2 border-indigo-600 rounded-xl p-6">
              <div className="inline-block px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded mb-2">
                BEST FOR SOLO FOUNDERS
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pipedrive</h3>
              <p className="text-slate-700 text-sm mb-3"><strong>Best for:</strong> Solo founders, simple sales cycles, visual thinkers</p>
              <p className="text-slate-700 text-sm mb-3"><strong>Why:</strong> Cleanest interface, fast setup, great visual pipeline</p>
              <p className="text-slate-700 text-sm mb-4"><strong>Pricing:</strong> $14/user/mo</p>

              <div className="pt-6 mt-6 border-t border-indigo-200">
                <a
                  href={pipedriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Try Pipedrive Free for 14 Days
                </a>
              </div>
            </div>

            {/* Salesforce */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Salesforce</h3>
              <p className="text-slate-700 text-sm mb-3"><strong>Best for:</strong> Enterprise SaaS, $1M+ ARR, complex sales</p>
              <p className="text-slate-700 text-sm mb-3"><strong>Why:</strong> Most powerful reporting, required by enterprise buyers</p>
              <p className="text-slate-700 text-sm mb-4"><strong>Pricing:</strong> $25-300/user/mo depending on edition</p>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <a
                  href={salesforceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Start with Salesforce Essentials
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 border border-slate-300 rounded-xl p-6">
            <p className="text-slate-700 mb-3">
              <strong>Most common path:</strong> Start with HubSpot Free → upgrade to paid HubSpot at $250k ARR → migrate to Salesforce at $1-2M ARR
            </p>
            <p className="text-slate-700">
              <strong>Setup time across all three:</strong> 30-60 minutes to add these custom fields
            </p>
          </div>
        </section>

        {/* The Reports That Help You Sell More */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Reports That Help You Sell More AND Satisfy Buyers</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Here's why these specific fields matter for both daily sales operations and due diligence. Each field serves double duty.
          </p>

          {/* Report 1: Pipeline Velocity */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Report 1: Pipeline Velocity</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-indigo-50 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">For Daily Sales:</h4>
                <p className="text-slate-700 text-sm mb-3">
                  <strong>Shows you:</strong> "Deals are stuck at 'Meeting Booked' stage for 12 days on average - we need better discovery"
                </p>
                <p className="text-slate-700 text-sm mb-3">
                  <strong>Action:</strong> Train team on discovery calls, reduce time-to-opportunity
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Result:</strong> Close deals 30% faster
                </p>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">For Exit DD:</h4>
                <p className="text-slate-700 text-sm mb-3">
                  <strong>Buyer asks:</strong> "How long does it take to close a deal?"
                </p>
                <p className="text-slate-700 text-sm mb-3">
                  <strong>You show:</strong> "31 days average, here's the breakdown by stage"
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Proves:</strong> Predictable sales cycle, scalable process
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-3">Your CRM Generates:</h4>
              <div className="font-mono text-sm text-slate-700">
                <p className="mb-2">Average days in each Contact Status:</p>
                <ul className="space-y-1 ml-4">
                  <li>- 0 → 1 (To Contact → No Reply): 7 days</li>
                  <li>- 1 → 2 (No Reply → Connected): 5 days</li>
                  <li>- 2 → 3 (Connected → Meeting): 3 days</li>
                  <li>- 3 → 4 (Meeting → Opportunity): 2 days</li>
                  <li>- 4 → 5 (Opportunity → Client): 14 days</li>
                </ul>
                <p className="mt-3 font-bold">Total time-to-close: 31 days</p>
              </div>
              <p className="text-slate-600 text-sm mt-4">
                <strong>Uses:</strong> Contact Status + timestamps (auto-tracked)
              </p>
            </div>
          </div>

          {/* Report 2: Source Attribution & CAC */}
          <div className="bg-indigo-50 border-2 border-indigo-600 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Report 2: Source Attribution & CAC</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">For Daily Sales:</h4>
                <p className="text-slate-700 text-sm mb-3">
                  <strong>Shows you:</strong> "Apollo costs $280 CAC, referrals cost $40 CAC - ask customers for more referrals"
                </p>
                <p className="text-slate-700 text-sm mb-3">
                  <strong>Action:</strong> Build referral program, reduce spend on expensive channels
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Result:</strong> Lower CAC, higher profitability
                </p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-3">For Exit DD:</h4>
                <p className="text-slate-700 text-sm mb-3">
                  <strong>Buyer asks:</strong> "Which channels work and what do they cost?"
                </p>
                <p className="text-slate-700 text-sm mb-3">
                  <strong>You show:</strong> "Here's CAC by channel with 18 months of data"
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Proves:</strong> Growth is predictable, we know what levers to pull
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-4">
              <h4 className="font-bold text-slate-900 mb-3">Your CRM Generates:</h4>
              <div className="font-mono text-sm text-slate-700">
                <p className="mb-2">Contact Source → Customers → CAC:</p>
                <ul className="space-y-1">
                  <li>Outbound - Apollo: 124 customers, $280 CAC</li>
                  <li>Inbound - Website: 67 customers, $119 CAC</li>
                  <li>Inbound - Referral: 34 customers, $0 CAC</li>
                  <li>Outbound - LinkedIn: 22 customers, $340 CAC</li>
                </ul>
              </div>
              <p className="text-slate-600 text-sm mt-4">
                <strong>Uses:</strong> Contact Source + Contact Status (filter Status = 5)
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-lg p-6">
              <p className="font-bold">
                Action: Cut LinkedIn (expensive), double down on referrals (free), maintain Apollo (proven winner).
              </p>
              <p className="mt-3 text-indigo-100">
                Double benefit: Optimize spend every month, prove scalability to buyer at exit.
              </p>
            </div>
          </div>

          {/* Reports 3-5: Shorter format */}
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Report 3: ICP Conversion Analysis</h3>
              <p className="text-slate-700 text-sm mb-3">
                <strong>Daily use:</strong> "Technical Founders convert at 18%, Marketing Agencies at 4%" → Stop targeting Marketing Agencies<br/>
                <strong>Exit value:</strong> Validates GTM strategy with conversion data by ICP over 2 years
              </p>
              <p className="text-slate-600 text-sm"><strong>Uses:</strong> ICP Type + Contact Status</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Report 4: Account Health & Churn Risk</h3>
              <p className="text-slate-700 text-sm mb-3">
                <strong>Daily use:</strong> "17 customers haven't been contacted in 60+ days" → Proactive outreach to prevent churn<br/>
                <strong>Exit value:</strong> Shows 80% healthy, 13% at-risk, 7% critical - proves active account management
              </p>
              <p className="text-slate-600 text-sm"><strong>Uses:</strong> Last Activity Date + Contact Status (filter Status = 5)</p>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-600 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Report 5: Revenue Predictability</h3>
              <p className="text-slate-700 text-sm mb-3">
                <strong>Daily use:</strong> "47 customers renew next month" → Schedule check-in calls 2 weeks before renewal<br/>
                <strong>Exit value:</strong> Forward revenue projection for next 12 months (most valuable metric to buyers)
              </p>
              <p className="text-slate-600 text-sm mb-4"><strong>Uses:</strong> Next Billing Date + Plan</p>
              <p className="text-emerald-900 font-bold text-sm">
                Double benefit: Proactive renewal management now, forward revenue proof for buyers later.
              </p>
            </div>
          </div>
        </section>

        {/* Weekly/Monthly Review */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Maintenance: Weekly & Monthly Reviews</h2>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Weekly Review (15 minutes/week)</h3>
            <p className="text-slate-700 mb-6">Friday Afternoon:</p>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-2">1. Stalled Opportunities</h4>
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Filter:</strong> Contact Status = "4. Opportunity Open" + Last Activity &gt; 7 days
                </p>
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Action:</strong> Send follow-up or move to "6. Not Interested"
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Benefit:</strong> Keep pipeline accurate, focus only on real opportunities
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-2">2. Cold Outbound Follow-Up</h4>
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Filter:</strong> Contact Status = "1. No Reply" + Last Activity &gt; 14 days
                </p>
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Action:</strong> Archive or try different messaging
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Benefit:</strong> Clean pipeline, avoid wasting time on dead leads
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-bold text-slate-900 mb-2">3. Duplicate Cleanup</h4>
                <p className="text-slate-700 text-sm mb-2">
                  <strong>HubSpot:</strong> Tools → Duplicates<br/>
                  <strong>Pipedrive:</strong> Contacts → Find duplicates<br/>
                  <strong>Salesforce:</strong> Data.com Clean → Find duplicates
                </p>
                <p className="text-slate-700 text-sm mb-2">
                  <strong>Action:</strong> Merge duplicates
                </p>
                <p className="text-slate-700 text-sm">
                  <strong>Benefit:</strong> Accurate reporting, no double-counting
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Monthly Analysis (30 minutes/month)</h3>
            <p className="text-slate-700 mb-6">First Monday of Month:</p>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-bold text-slate-900 mb-2">1. Source Attribution Report</h4>
                <p className="text-slate-700 text-sm">
                  Group by Contact Source → Calculate conversion rate → Adjust budget allocation based on ROI
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-bold text-slate-900 mb-2">2. ICP Validation</h4>
                <p className="text-slate-700 text-sm">
                  Group by ICP Type → Calculate conversion rates → Update outbound targeting based on data
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-bold text-slate-900 mb-2">3. Pipeline Health Check</h4>
                <p className="text-slate-700 text-sm">
                  How many deals in each stage? Average time? Bottlenecks? → Address process issues
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-bold text-slate-900 mb-2">4. Data Quality Audit</h4>
                <p className="text-slate-700 text-sm">
                  Fill in missing "Contact Source" → Add "Next Billing Date" for customers → Engage at-risk accounts (Last Activity &gt; 90 days)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exit-Readiness Checklist */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Exit-Readiness Checklist (That Also Makes You Sell Better)</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Before you think about selling, audit your CRM. But remember: these same criteria make you more effective at selling today.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">✓ Data Completeness</h3>
              <ul className="space-y-2 text-slate-700">
                <li>□ Every customer (Status = 5) has: Plan, Next Billing Date, Contact Source</li>
                <li>□ Every contact has: Industry, ICP Type, Contact Source</li>
                <li>□ 90%+ of contacts have: LinkedIn URLs (both contact and account)</li>
                <li>□ Zero contacts missing "Contact Source" (if unknown, note "Legacy - Pre-System")</li>
              </ul>
              <p className="text-slate-700 text-sm mt-4">
                <strong>Why this helps you sell:</strong> Complete data = better personalization = higher close rates<br/>
                <strong>Why this helps at exit:</strong> Complete data = buyer confidence = smoother due diligence
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">✓ Data Accuracy</h3>
              <ul className="space-y-2 text-slate-700">
                <li>□ "Contact Status" reflects current reality (no deals stuck from 6 months ago)</li>
                <li>□ "Last Activity Date" is recent for all Status = 5 customers (&lt;30 days)</li>
                <li>□ "Next Billing Date" matches Stripe (cross-check monthly)</li>
                <li>□ No duplicate contacts (run deduplication monthly)</li>
              </ul>
              <p className="text-slate-700 text-sm mt-4">
                <strong>Why this helps you sell:</strong> Accurate data = you follow up at the right time = fewer lost deals<br/>
                <strong>Why this helps at exit:</strong> Accurate data = no discrepancies during DD = buyer trust
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">✓ Reportability</h3>
              <ul className="space-y-2 text-slate-700">
                <li>□ Can generate pipeline velocity report in &lt;10 minutes</li>
                <li>□ Can show CAC by channel with real data (not guesses)</li>
                <li>□ Can prove conversion rates by ICP with numbers</li>
                <li>□ Can demonstrate account health distribution</li>
                <li>□ Can produce forward revenue projection</li>
              </ul>
              <p className="text-slate-700 text-sm mt-4">
                <strong>Why this helps you sell:</strong> These reports tell you where to focus effort = higher productivity<br/>
                <strong>Why this helps at exit:</strong> Instant reports = buyer confidence = premium valuation
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">✓ Integration</h3>
              <ul className="space-y-2 text-slate-700">
                <li>□ CRM integrated with email tool (Reply.io, Instantly)</li>
                <li>□ "Last Activity Date" auto-updates (not manual)</li>
                <li>□ New leads auto-populate "Contact Source" from outbound tools</li>
              </ul>
              <p className="text-slate-700 text-sm mt-4">
                <strong>Why this helps you sell:</strong> Automation = less manual work = more time selling<br/>
                <strong>Why this helps at exit:</strong> Integrated systems = scalable process = higher valuation
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">✓ Cleanliness</h3>
              <ul className="space-y-2 text-slate-700">
                <li>□ No junk contacts (test@test.com, old employees, competitors)</li>
                <li>□ Notes are professional (buyers will read them during DD)</li>
                <li>□ Custom fields are documented (README for what each field means)</li>
              </ul>
              <p className="text-slate-700 text-sm mt-4">
                <strong>Why this helps you sell:</strong> Clean data = faster filtering = better prioritization<br/>
                <strong>Why this helps at exit:</strong> Clean data = professional operation = buyer confidence
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-xl p-8 mt-6">
            <p className="text-lg mb-4">
              <strong>If you check every box:</strong> Your CRM helps you close more deals now AND commands a premium valuation later.
            </p>
            <p className="text-lg">
              <strong>If you're missing 5+ boxes:</strong> Fix this over the next month. Set up properly once, benefit forever.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Your CRM Is Not a Rolodex</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Stop thinking of your CRM as a contact list.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            It's a daily operating system that helps you sell better AND a strategic asset that increases your valuation.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <p className="text-slate-700 mb-4">Every field you track answers a question both you and future buyers will ask:</p>
            <ul className="space-y-2 text-slate-700">
              <li>• Which deals need follow-up today?</li>
              <li>• Which channels drive customers cost-effectively?</li>
              <li>• Which customers are at risk of churning?</li>
              <li>• Is our sales process predictable and scalable?</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-8">
            <p className="text-xl font-bold mb-4">
              Set up your CRM properly once. Maintain it daily. Benefit twice - better sales performance now, premium valuation later.
            </p>
            <p className="text-slate-300">
              Questions about CRM setup or exit prep? Email me at <a href="mailto:david@saleshousestack.com" className="text-white underline">david@saleshousestack.com</a> or <a href="https://www.linkedin.com/in/davidvaran" target="_blank" rel="noopener noreferrer" className="text-white underline">connect on LinkedIn</a>.
            </p>
          </div>
        </section>

        {/* Final CTAs */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Start Building Your Sales & Exit-Ready CRM</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href={hubspotLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Try HubSpot Free
              </a>
              <a
                href={pipedriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-400 transition-colors border-2 border-white"
              >
                Try Pipedrive Free
              </a>
              <a
                href={salesforceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-slate-50 transition-colors"
              >
                Start with Salesforce
              </a>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-16 pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/resources/build-first-outbound-playbook" className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-200 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Build-First Outbound Playbook</h4>
              <p className="text-slate-600 text-sm">Systems-first outbound for technical founders</p>
            </Link>
            <Link to="/resources/cold-email-guide" className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-200 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Cold Email Templates</h4>
              <p className="text-slate-600 text-sm">Proven templates and messaging tactics</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default CRMSetupGuidePage;
