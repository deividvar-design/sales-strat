import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mail, Check, X, ArrowRight, Clock } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';

const ColdEmailGuidePage = () => {
  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Cold Email Templates That Convert: 10K-100K Sends Guide 2026 | Sales House</title>
        <meta name="title" content="Cold Email Templates That Convert: 10K-100K Sends Guide 2026" />
        <meta name="description" content="Free cold email templates, subject lines & sequences tested at 10K-100K sends/month. Get 1-3% response rates with proven copywriting tactics + examples." />
        <meta name="keywords" content="cold email templates, email copywriting, cold outreach, sales email templates, email sequences, subject lines, cold email tips, email response rate, B2B cold email, sales prospecting emails" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://saleshousestack.com/resources/cold-email-guide" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://saleshousestack.com/resources/cold-email-guide" />
        <meta property="og:title" content="Cold Email Templates That Convert: 10K-100K Sends Guide 2026" />
        <meta property="og:description" content="Free cold email templates, subject lines & sequences tested at 10K-100K sends/month. Get 1-3% response rates with proven copywriting tactics + examples." />
        <meta property="og:image" content="https://saleshousestack.com/saleshouse-logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://saleshousestack.com/resources/cold-email-guide" />
        <meta name="twitter:title" content="Cold Email Templates That Convert: 10K-100K Sends Guide" />
        <meta name="twitter:description" content="Proven cold email templates, subject lines, and tactics that work at 10K-100K+ sends per month" />
        <meta name="twitter:image" content="https://saleshousestack.com/saleshouse-logo.png" />

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Write Cold Emails That Convert at Scale",
            "description": "Complete guide to writing cold emails that convert at 10K-100K+ sends per month with proven templates and tactics",
            "totalTime": "PT30M",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Read Email Out Loud",
                "text": "Before sending any email, read it out loud. If it sounds like a robot, scrap it. If you wouldn't say it in person, rewrite it."
              },
              {
                "@type": "HowToStep",
                "name": "Choose a Proven Template",
                "text": "Use one of 5 proven templates: Problem-Solution, Direct Question, Comparison, Stat-Lead, or Cost-Savings. Keep under 80 words."
              },
              {
                "@type": "HowToStep",
                "name": "Write Subject Lines",
                "text": "Create 5 subject line variants to rotate and avoid spam filters. Test questions, value props, ultra-short, and problem-focused formats."
              },
              {
                "@type": "HowToStep",
                "name": "Set Up 4-Email Sequence",
                "text": "Most responses come from emails 2-4. Include: Main Pitch (Day 0), Value Add (Day 4), Social Proof (Day 8), Breakup Email (Day 14)."
              },
              {
                "@type": "HowToStep",
                "name": "Test and Optimize",
                "text": "A/B test subject lines with 500+ sends per variant. Kill campaigns if bounce rate >5% or spam rate >0.3%."
              }
            ]
          })}
        </script>

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Cold Email Templates That Convert at Scale",
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
            "datePublished": "2026-01-25",
            "dateModified": "2026-01-25",
            "mainEntityOfPage": "https://saleshousestack.com/resources/cold-email-guide",
            "image": "https://saleshousestack.com/saleshouse-logo.png",
            "articleSection": "Email Marketing",
            "keywords": ["cold email templates", "email copywriting", "cold outreach", "sales emails", "email sequences", "subject lines"]
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
                "name": "What is a good cold email response rate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1-3% response rate is normal and profitable at scale. At 10,000 sends: 1% = 100 responses, 2% = 200 responses. That 1% difference doubles your pipeline."
                }
              },
              {
                "@type": "Question",
                "name": "How long should a cold email be?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Keep cold emails under 80 words total. Use short sentences (10-15 words max), one value prop only, and one CTA. Most converting templates are 30-40 words."
                }
              },
              {
                "@type": "Question",
                "name": "What words should I avoid in cold emails?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Avoid corporate jargon like 'utilize', 'leverage', 'facilitate', 'optimize', 'synergies'. Also avoid fluff phrases like 'I hope this finds you well', 'touching base', 'circle back'. If it sounds like LinkedIn, delete it."
                }
              },
              {
                "@type": "Question",
                "name": "How many emails should be in a cold email sequence?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use a 4-email sequence over 14 days: Main Pitch (Day 0), Value Add (Day 4), Social Proof (Day 8), Breakup Email (Day 14). Most responses come from emails 2-4, not email 1. Breakup emails get 15-20% of total responses."
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <Mail className="w-8 h-8 text-indigo-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Cold Email Templates That Convert at Scale
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            The no-BS guide to writing cold emails that convert at 10K-100K+ sends per month
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
            <div className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min read</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span>Last updated: January 25, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-6 border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            <a href="#reality-check" className="text-indigo-600 hover:text-indigo-700 hover:underline">The Reality Check</a>
            <a href="#golden-rule" className="text-indigo-600 hover:text-indigo-700 hover:underline">The Golden Rule</a>
            <a href="#templates" className="text-indigo-600 hover:text-indigo-700 hover:underline">Proven Templates</a>
            <a href="#subject-lines" className="text-indigo-600 hover:text-indigo-700 hover:underline">Subject Lines That Work</a>
            <a href="#sequence" className="text-indigo-600 hover:text-indigo-700 hover:underline">The 4-Email Sequence</a>
            <a href="#words-to-ban" className="text-indigo-600 hover:text-indigo-700 hover:underline">Words to Ban</a>
            <a href="#examples" className="text-indigo-600 hover:text-indigo-700 hover:underline">Before/After Examples</a>
            <a href="#industry-templates" className="text-indigo-600 hover:text-indigo-700 hover:underline">Industry Templates</a>
            <a href="#technical-setup" className="text-indigo-600 hover:text-indigo-700 hover:underline">Technical Setup</a>
            <a href="#testing-metrics" className="text-indigo-600 hover:text-indigo-700 hover:underline">Testing & Metrics</a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* The Reality Check */}
        <section id="reality-check">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Reality Check</h2>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">At true scale, you can't:</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Research each company</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Wait for perfect timing</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Pretend you know them</span>
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What you CAN do:</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Segment by industry/role/size</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Write templates that sound personal</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Test everything</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Send massive volume</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">The math:</h3>
            <div className="space-y-3 text-slate-200">
              <p>10,000 emails at 1% response = 100 replies</p>
              <p>10,000 emails at 2% response = 200 replies</p>
              <p className="text-lg font-bold text-indigo-400 mt-4">That 1% difference = 2x your pipeline</p>
            </div>
          </div>
        </section>

        {/* The Golden Rule */}
        <section id="golden-rule">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Golden Rule</h2>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold mb-6">Read It Out Loud</h3>
            <p className="text-lg mb-4">Before you send ANY email:</p>
            <ul className="space-y-3 text-indigo-100">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Read it out loud</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <span>If it sounds like a robot → scrap it</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <span>If you wouldn't say it in person → rewrite it</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                <span>If you stumble over words → simplify it</span>
              </li>
            </ul>
            <p className="text-lg font-bold mt-6 border-t border-indigo-500 pt-6">
              The test: Would you say this at a coffee shop? If no, delete it.
            </p>
          </div>
        </section>

        {/* Proven Templates */}
        <section id="templates">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Proven Templates</h2>

          {/* Template 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Template 1: Problem-Solution</h3>

            <div className="bg-slate-50 rounded-lg p-6 mb-4 font-mono text-sm">
              <p className="mb-3">Hi {'{{first_name}}'},</p>
              <p className="mb-3">Most {'{{industry}}'} companies lose {'{{metric}}'} because {'{{common_problem}}'}.</p>
              <p className="mb-3">We help {'{{role_plural}}'} {'{{specific_outcome}}'} without {'{{pain_point}}'}.</p>
              <p className="mb-3">{'{{segment}}'} companies usually see {'{{result}}'} in {'{{timeframe}}'}.</p>
              <p>Worth 15 minutes?</p>
            </div>

            <div className="border-l-4 border-indigo-600 bg-indigo-50 p-6 mb-4">
              <p className="font-semibold text-slate-900 mb-3">Example:</p>
              <p className="text-slate-700 mb-2">Hi Sarah,</p>
              <p className="text-slate-700 mb-2">Most logistics companies lose 30% of their fuel budget because route planning is still manual.</p>
              <p className="text-slate-700 mb-2">We help ops managers cut fuel costs without adding headcount.</p>
              <p className="text-slate-700 mb-2">Fleet companies usually see 20-35% cost reduction in 60 days.</p>
              <p className="text-slate-700">Worth 15 minutes?</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-600">
              <span>Word count: 36</span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                Read-out-loud test: Sounds human
              </span>
            </div>
          </div>

          {/* Template 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Template 2: Direct Question</h3>

            <div className="bg-slate-50 rounded-lg p-6 mb-4 font-mono text-sm">
              <p className="mb-3">Hi {'{{first_name}}'},</p>
              <p className="mb-3">Quick question: are you still {'{{doing_inefficient_thing}}'}?</p>
              <p className="mb-3">We built {'{{solution}}'} for {'{{segment}}'}.</p>
              <p className="mb-3">{'{{number}}'} companies switched in {'{{period}}'}.</p>
              <p>Want to see how it works?</p>
            </div>

            <div className="border-l-4 border-indigo-600 bg-indigo-50 p-6 mb-4">
              <p className="font-semibold text-slate-900 mb-3">Example:</p>
              <p className="text-slate-700 mb-2">Hi Mike,</p>
              <p className="text-slate-700 mb-2">Quick question: are you still managing sales comp in spreadsheets?</p>
              <p className="text-slate-700 mb-2">We built automated commission tracking for scaling sales teams.</p>
              <p className="text-slate-700 mb-2">47 SaaS companies switched last quarter.</p>
              <p className="text-slate-700">Want to see how it works?</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-600">
              <span>Word count: 31</span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                Read-out-loud test: Natural
              </span>
            </div>
          </div>

          {/* Template 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Template 3: The Comparison</h3>

            <div className="bg-slate-50 rounded-lg p-6 mb-4 font-mono text-sm">
              <p className="mb-3">Hi {'{{first_name}}'},</p>
              <p className="mb-3">Most {'{{segment}}'} use {'{{old_solution}}'} for {'{{process}}'}.</p>
              <p className="mb-3">The problem: {'{{specific_pain}}'}.</p>
              <p className="mb-3">We're the {'{{better_solution}}'} - {'{{key_difference}}'}.</p>
              <p>{'{{number}}'} companies switched. Worth comparing?</p>
            </div>

            <div className="border-l-4 border-indigo-600 bg-indigo-50 p-6 mb-4">
              <p className="font-semibold text-slate-900 mb-3">Example:</p>
              <p className="text-slate-700 mb-2">Hi David,</p>
              <p className="text-slate-700 mb-2">Most fleet managers use legacy GPS platforms for tracking.</p>
              <p className="text-slate-700 mb-2">The problem: you're locked into expensive monthly contracts with zero control.</p>
              <p className="text-slate-700 mb-2">We're the white-label alternative - own your platform, set your pricing.</p>
              <p className="text-slate-700">73 companies switched last year. Worth comparing?</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-600">
              <span>Word count: 39</span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                Read-out-loud test: Clear and direct
              </span>
            </div>
          </div>

          {/* Template 4 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Template 4: Stat-Lead</h3>

            <div className="bg-slate-50 rounded-lg p-6 mb-4 font-mono text-sm">
              <p className="mb-3">Hi {'{{first_name}}'},</p>
              <p className="mb-3">{'{{surprising_stat}}'} in {'{{industry}}'}.</p>
              <p className="mb-3">We help {'{{role_plural}}'} {'{{solve_problem}}'}.</p>
              <p className="mb-3">{'{{proof}}'}.</p>
              <p>Relevant?</p>
            </div>

            <div className="border-l-4 border-indigo-600 bg-indigo-50 p-6 mb-4">
              <p className="font-semibold text-slate-900 mb-3">Example:</p>
              <p className="text-slate-700 mb-2">Hi Jessica,</p>
              <p className="text-slate-700 mb-2">68% of cart abandonment happens at the shipping cost page.</p>
              <p className="text-slate-700 mb-2">We help store owners recover lost sales by fixing how shipping displays.</p>
              <p className="text-slate-700 mb-2">Our clients see 23% more completed checkouts on average.</p>
              <p className="text-slate-700">Relevant?</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-600">
              <span>Word count: 32</span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                Read-out-loud test: Punchy and human
              </span>
            </div>
          </div>

          {/* Template 5 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Template 5: Cost-Savings</h3>

            <div className="bg-slate-50 rounded-lg p-6 mb-4 font-mono text-sm">
              <p className="mb-3">Hi {'{{first_name}}'},</p>
              <p className="mb-3">{'{{segment}}'} companies usually overpay {'{{amount}}'} on {'{{expense}}'}.</p>
              <p className="mb-3">We audit {'{{process}}'} in under 5 minutes.</p>
              <p className="mb-3">Average savings: {'{{specific_amount}}'}.</p>
              <p>Want the audit?</p>
            </div>

            <div className="border-l-4 border-indigo-600 bg-indigo-50 p-6 mb-4">
              <p className="font-semibold text-slate-900 mb-3">Example:</p>
              <p className="text-slate-700 mb-2">Hi Tom,</p>
              <p className="text-slate-700 mb-2">B2B companies usually overpay $40K-$80K annually on unused SaaS licenses.</p>
              <p className="text-slate-700 mb-2">We audit your stack in under 5 minutes.</p>
              <p className="text-slate-700 mb-2">Average savings: $67K per year.</p>
              <p className="text-slate-700">Want the audit?</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-600">
              <span>Word count: 32</span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-600" />
                Read-out-loud test: Conversational
              </span>
            </div>
          </div>
        </section>

        {/* Subject Lines */}
        <section id="subject-lines">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Are The Best Cold Email Subject Lines?</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">5-Variant Rotation System</h3>
            <p className="text-slate-700">Why rotate? ESP spam filters detect identical emails. 5 variants break the pattern.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">Set 1: Questions</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>"Quick question"</li>
                <li>"Still using &#123;&#123;old_solution&#125;&#125;?"</li>
                <li>"How do you handle &#123;&#123;process&#125;&#125;?"</li>
                <li>"&#123;&#123;company&#125;&#125; - &#123;&#123;topic&#125;&#125;?"</li>
                <li>"5 minutes?"</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">Set 2: Value</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>"Save €&#123;&#123;amount&#125;&#125; on &#123;&#123;expense&#125;&#125;"</li>
                <li>"&#123;&#123;metric&#125;&#125;% improvement"</li>
                <li>"Alternative to &#123;&#123;competitor&#125;&#125;"</li>
                <li>"&#123;&#123;outcome&#125;&#125; without &#123;&#123;pain&#125;&#125;"</li>
                <li>"Cut &#123;&#123;expense&#125;&#125; by &#123;&#123;percentage&#125;&#125;%"</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">Set 3: Ultra-Short</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>"&#123;&#123;first_name&#125;&#125;"</li>
                <li>"Quick win"</li>
                <li>"Tomorrow?"</li>
                <li>"&#123;&#123;company&#125;&#125;"</li>
                <li>"Relevant?"</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-bold text-slate-900 mb-3">Set 4: Problem-Focused</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>"&#123;&#123;pain_point&#125;&#125; fix"</li>
                <li>"The &#123;&#123;problem&#125;&#125; solution"</li>
                <li>"&#123;&#123;expense&#125;&#125; waste"</li>
                <li>"&#123;&#123;process&#125;&#125; problem"</li>
                <li>"Losing €&#123;&#123;amount&#125;&#125;?"</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mt-6">
            <p className="text-slate-700"><strong>Pro tip:</strong> Test all 5 variants. The winner often surprises you.</p>
          </div>
        </section>

        {/* The 4-Email Sequence */}
        <section id="sequence">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How Many Emails Should Be in a Cold Email Sequence?</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <p className="text-slate-700 font-semibold">Most responses come from emails 2-4, not email 1.</p>
          </div>

          {/* Email 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Email 1 (Day 0): Main Pitch</h3>

            <div className="bg-slate-50 rounded-lg p-6 mb-4 font-mono text-sm">
              <p className="mb-3">Hi {'{{first_name}}'},</p>
              <p className="mb-3">Most {'{{industry}}'} companies {'{{common_problem}}'}.</p>
              <p className="mb-3">We help {'{{role_plural}}'} {'{{outcome}}'}.</p>
              <p className="mb-3">{'{{segment}}'} usually see {'{{result}}'}.</p>
              <p>Worth 15 minutes?</p>
            </div>

            <p className="text-sm text-slate-600">Target: 30-40 words</p>
          </div>

          {/* Email 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Email 2 (Day 4): Value Add</h3>

            <div className="bg-slate-50 rounded-lg p-6 mb-4 font-mono text-sm">
              <p className="mb-3">{'{{first_name}}'},</p>
              <p className="mb-3">Sending something useful - {'{{resource_name}}'}.</p>
              <p className="mb-3">Shows how {'{{industry}}'} companies {'{{achieve_outcome}}'}.</p>
              <p>No strings. Worth a look?</p>
            </div>

            <p className="text-sm text-slate-600">Target: 20-30 words</p>
          </div>

          {/* Email 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Email 3 (Day 8): Social Proof</h3>

            <div className="bg-slate-50 rounded-lg p-6 mb-4 font-mono text-sm">
              <p className="mb-3">Quick example:</p>
              <p className="mb-3">{'{{similar_company}}'} had {'{{pain_point}}'}.</p>
              <p className="mb-3">Switched to us → {'{{specific_result}}'}.</p>
              <p>Relevant for {'{{company}}'}?</p>
            </div>

            <p className="text-sm text-slate-600">Target: 15-25 words</p>
          </div>

          {/* Email 4 */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Email 4 (Day 14): Breakup Email</h3>

            <div className="bg-slate-50 rounded-lg p-6 mb-4 font-mono text-sm">
              <p className="mb-3">{'{{first_name}}'},</p>
              <p className="mb-3">Haven't heard back - assuming this isn't a priority.</p>
              <p className="mb-3">Should I close your file?</p>
              <p>(Happy to circle back in a few months if timing's off)</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-600">
              <span>Target: 25-35 words</span>
              <span className="font-semibold text-indigo-600">Data: Breakup emails get 15-20% of total responses</span>
            </div>
          </div>
        </section>

        {/* Words to Ban */}
        <section id="words-to-ban">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Words to Ban</h2>

          <div className="bg-slate-900 text-white rounded-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Corporate Zombie Words</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-red-400 font-bold">
                        <div className="flex items-center gap-2">
                          <X className="w-5 h-5" />
                          Never Use
                        </div>
                      </th>
                      <th className="text-left py-3 px-4 text-green-400 font-bold">
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5" />
                          Use Instead
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-200">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Utilize</td>
                      <td className="py-3 px-4">Use</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Leverage</td>
                      <td className="py-3 px-4">Use</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Solution</td>
                      <td className="py-3 px-4">Say what it does</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Implement</td>
                      <td className="py-3 px-4">Set up / Start</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Facilitate</td>
                      <td className="py-3 px-4">Help / Make easier</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Optimize</td>
                      <td className="py-3 px-4">Improve / Make better</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Enable</td>
                      <td className="py-3 px-4">Let you / Help you</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Methodology</td>
                      <td className="py-3 px-4">Method / Way</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Infrastructure</td>
                      <td className="py-3 px-4">System / Setup</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Capabilities</td>
                      <td className="py-3 px-4">Features</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Touch base</td>
                      <td className="py-3 px-4">Talk / Chat</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-4">Circle back</td>
                      <td className="py-3 px-4">Follow up</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Synergies</td>
                      <td className="py-3 px-4 text-red-400 font-bold">DELETE THIS</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg font-bold text-indigo-400 mt-6 border-t border-slate-700 pt-6">
                The rule: If it sounds like LinkedIn, delete it.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-6">
            <h4 className="font-bold text-slate-900 mb-3">Fluff Phrases to Delete</h4>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>"I hope this email finds you well"</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>"I wanted to reach out"</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>"Just touching base"</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>"As previously mentioned"</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>"At your earliest convenience"</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>"Please don't hesitate to"</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Before/After Examples */}
        <section id="examples">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Before/After Examples</h2>

          {/* Example 1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Example 1: SaaS Sales</h3>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <X className="w-6 h-6 text-red-600" />
                <h4 className="font-bold text-slate-900">BEFORE (Bad):</h4>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>Hi Jennifer,</p>
                <p>I wanted to reach out regarding your organization's current CRM utilization and customer relationship management methodology.</p>
                <p>We've developed a comprehensive platform that enables sales organizations to optimize their pipeline management infrastructure and facilitate enhanced revenue generation capabilities.</p>
                <p>Would you be amenable to scheduling a brief exploratory conversation?</p>
              </div>
              <div className="mt-6 pt-6 border-t border-red-200">
                <p className="font-bold text-red-700 mb-2">Problems:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• 78 words of corporate speak</li>
                  <li>• Sounds like a robot</li>
                  <li>• Zero personality</li>
                  <li><strong>Result: Delete button</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-6 h-6 text-green-600" />
                <h4 className="font-bold text-slate-900">AFTER (Good):</h4>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>Hi Jennifer,</p>
                <p>Quick question: are you still tracking deals in spreadsheets?</p>
                <p>We built CRM for sales teams that actually close faster.</p>
                <p>Teams usually cut their sales cycle by 30% in the first 60 days.</p>
                <p>Worth 15 minutes?</p>
              </div>
              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="font-bold text-green-700 mb-2">Why it works:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• 36 words</li>
                  <li>• Sounds human</li>
                  <li>• Clear value</li>
                  <li><strong>Result: Gets responses</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Example 2: Fleet Management</h3>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <X className="w-6 h-6 text-red-600" />
                <h4 className="font-bold text-slate-900">BEFORE (Bad):</h4>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>Dear Operations Director,</p>
                <p>I am reaching out to discuss how our innovative GPS tracking solution can revolutionize your fleet management operations and deliver unprecedented ROI through our cutting-edge technology platform.</p>
                <p>We have successfully partnered with numerous industry-leading organizations who have experienced transformative results.</p>
              </div>
              <div className="mt-6 pt-6 border-t border-red-200">
                <p className="font-bold text-red-700 mb-2">Problems:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Generic title greeting</li>
                  <li>• Buzzword overload</li>
                  <li>• No specific value</li>
                  <li><strong>Result: Spam folder</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-6 h-6 text-green-600" />
                <h4 className="font-bold text-slate-900">AFTER (Good):</h4>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>Hi Marcus,</p>
                <p>Most fleet managers overpay 40% on GPS tracking because they're locked into old contracts.</p>
                <p>We're white-label - you own the platform, set your pricing, no monthly fees.</p>
                <p>68 fleet companies switched last year.</p>
                <p>Worth comparing?</p>
              </div>
              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="font-bold text-green-700 mb-2">Why it works:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• 35 words</li>
                  <li>• Specific problem</li>
                  <li>• Clear differentiation</li>
                  <li><strong>Result: Gets meetings</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Example 3: E-commerce</h3>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <X className="w-6 h-6 text-red-600" />
                <h4 className="font-bold text-slate-900">BEFORE (Bad):</h4>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>Greetings,</p>
                <p>I hope this message finds you well. I wanted to introduce our innovative e-commerce optimization solution that has been specifically engineered to address cart abandonment challenges through strategic optimization of the customer purchase journey.</p>
              </div>
              <div className="mt-6 pt-6 border-t border-red-200">
                <p className="font-bold text-red-700 mb-2">Problems:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Formal greeting</li>
                  <li>• Vague value</li>
                  <li>• Corporate jargon</li>
                  <li><strong>Result: Ignored</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-6 h-6 text-green-600" />
                <h4 className="font-bold text-slate-900">AFTER (Good):</h4>
              </div>
              <div className="space-y-3 text-slate-700">
                <p>Hi Anna,</p>
                <p>You're losing about €X daily to cart abandonment - usually shipping page issues.</p>
                <p>We fix your checkout flow to recover more sales.</p>
                <p>E-commerce stores see 20-30% more completed purchases.</p>
                <p>Want the audit?</p>
              </div>
              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="font-bold text-green-700 mb-2">Why it works:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• 31 words</li>
                  <li>• Quantified problem</li>
                  <li>• Simple solution</li>
                  <li><strong>Result: Gets replies</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Templates */}
        <section id="industry-templates">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Industry Templates</h2>

          <div className="grid gap-6">
            {/* SaaS/Tech */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-indigo-600 mb-3">SaaS/Tech</h3>
              <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700 mb-3">
                <p className="mb-2">Hi {'{{first_name}}'},</p>
                <p className="mb-2">Most B2B SaaS companies lose 40% of trials because follow-up is manual.</p>
                <p className="mb-2">We automate trial-to-paid without feeling robotic.</p>
                <p className="mb-2">SaaS teams usually see 25-40% more conversions.</p>
                <p>Worth 15 minutes?</p>
              </div>
              <p className="text-sm text-slate-600">Word count: 32</p>
            </div>

            {/* E-commerce */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-indigo-600 mb-3">E-commerce</h3>
              <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700 mb-3">
                <p className="mb-2">Hi {'{{first_name}}'},</p>
                <p className="mb-2">Cart abandonment costs you about €X daily - usually shipping page problems.</p>
                <p className="mb-2">We fix checkout flows to recover sales.</p>
                <p className="mb-2">Stores see 20-30% more completed purchases.</p>
                <p>Want the audit?</p>
              </div>
              <p className="text-sm text-slate-600">Word count: 28</p>
            </div>

            {/* Logistics/Fleet */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-indigo-600 mb-3">Logistics/Fleet</h3>
              <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700 mb-3">
                <p className="mb-2">Hi {'{{first_name}}'},</p>
                <p className="mb-2">Fleet companies overpay 30-40% on GPS because legacy platforms lock you in.</p>
                <p className="mb-2">We're white-label - your brand, your pricing, no monthly fees.</p>
                <p className="mb-2">73 companies switched last year.</p>
                <p>Worth comparing?</p>
              </div>
              <p className="text-sm text-slate-600">Word count: 33</p>
            </div>

            {/* Professional Services */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-indigo-600 mb-3">Professional Services</h3>
              <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700 mb-3">
                <p className="mb-2">Hi {'{{first_name}}'},</p>
                <p className="mb-2">Law/accounting firms waste 20+ hours monthly on manual client intake.</p>
                <p className="mb-2">We automate everything from lead to signed contract.</p>
                <p className="mb-2">Firms save 25 hours monthly on average.</p>
                <p>Relevant?</p>
              </div>
              <p className="text-sm text-slate-600">Word count: 29</p>
            </div>

            {/* Manufacturing */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-indigo-600 mb-3">Manufacturing</h3>
              <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700 mb-3">
                <p className="mb-2">Hi {'{{first_name}}'},</p>
                <p className="mb-2">Most manufacturers track inventory in spreadsheets and lose 15-20% to stock errors.</p>
                <p className="mb-2">We automate inventory tracking without expensive ERP systems.</p>
                <p className="mb-2">Manufacturers cut stock errors by 80% in 90 days.</p>
                <p>Worth a look?</p>
              </div>
              <p className="text-sm text-slate-600">Word count: 33</p>
            </div>
          </div>
        </section>

        {/* Technical Setup */}
        <section id="technical-setup">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Setup</h2>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Domain Strategy</h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-300">
                    <th className="text-left py-3 px-4 font-bold text-slate-900">Volume</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-900">Setup Required</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 font-semibold">10K/month</td>
                    <td className="py-3 px-4">1 main domain + 2-3 subdomains</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 px-4 font-semibold">50K/month</td>
                    <td className="py-3 px-4">3-5 sending domains + 10-15 subdomains</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">100K+/month</td>
                    <td className="py-3 px-4">10+ domains + 30+ subdomains + multiple ESPs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6">
              <p className="text-slate-700"><strong>The rule:</strong> Max 50 emails per domain/day while warming. Max 500/day at scale.</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Deliverability Checklist</h3>

            <div className="mb-6">
              <h4 className="font-bold text-slate-900 mb-3">Before sending:</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>SPF record configured</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>DKIM configured</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>DMARC configured</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Domain age &gt;30 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Warmed inbox (real sends + replies)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Custom tracking domain</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Unsubscribe link in footer</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-slate-900 mb-3">While sending - Monitor:</h4>
              <ul className="space-y-2 text-slate-700">
                <li>• Bounce rate (&lt;5%)</li>
                <li>• Spam rate (&lt;0.1%)</li>
                <li>• Open rate (15%+)</li>
                <li>• Response rate (1-3%)</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-500 rounded-lg p-4">
              <p className="text-slate-900 font-bold">Kill switch: If bounce &gt;5% or spam &gt;0.3%, STOP immediately.</p>
            </div>
          </div>
        </section>

        {/* Testing & Metrics */}
        <section id="testing-metrics">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How Do You Test Cold Email Performance?</h2>

          <div className="bg-white border border-slate-200 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-6">What to A/B Test (Priority Order)</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">1. Subject Lines (Biggest impact)</h4>
                <ul className="space-y-1 text-slate-700 text-sm ml-4">
                  <li>• Test 5 variants</li>
                  <li>• Minimum 500 sends per variant</li>
                  <li>• Winner = highest open rate</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">2. Email Length</h4>
                <ul className="space-y-1 text-slate-700 text-sm ml-4">
                  <li>• Test 50 vs 80 vs 120 words</li>
                  <li>• Minimum 1,000 sends per variant</li>
                  <li>• Winner = highest response rate</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">3. CTA Format</h4>
                <ul className="space-y-1 text-slate-700 text-sm ml-4">
                  <li>• "Worth 15 min?" vs "Want to see how?" vs "Should I send details?"</li>
                  <li>• Minimum 1,000 sends per variant</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">4. Value Prop</h4>
                <ul className="space-y-1 text-slate-700 text-sm ml-4">
                  <li>• Problem-first vs Solution-first vs Stat-lead</li>
                  <li>• Minimum 2,000 sends per variant</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-500 rounded-lg p-4 mt-6">
              <p className="text-slate-900 font-bold">The rule: Test ONE variable at a time.</p>
            </div>
          </div>

          <div className="bg-red-900 text-white rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">When to Kill a Campaign</h3>
            <p className="mb-4">Stop immediately if:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                <span>Bounce rate &gt;5% (list quality problem)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                <span>Spam rate &gt;0.3% (copy or targeting issue)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                <span>Response rate &lt;0.5% after 2,000 sends (template problem)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                <span>Open rate &lt;10% (subject line or deliverability issue)</span>
              </li>
            </ul>
            <p className="mt-6 pt-6 border-t border-red-800 font-bold text-lg">
              Why: Bad campaigns destroy your domain reputation.
            </p>
          </div>
        </section>

        {/* The Copy Rules */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Copy Rules</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-green-600" />
                Always:
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Read every template out loud</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Keep under 80 words total</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>One value prop only</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>One CTA only</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Use specific numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Write at 8th grade level</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Short sentences (10-15 words max)</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <X className="w-6 h-6 text-red-600" />
                Never:
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Use attachments in first email</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Include more than one link</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Write in all caps</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Use excessive punctuation (!!!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Use corporate jargon</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Pretend you know them personally</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Say "I hope this finds you well"</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Harsh Math */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Harsh Math</h2>

          <div className="bg-slate-900 text-white rounded-xl p-8 mb-6">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">At 1% Response Rate:</h3>
              <ul className="space-y-2 text-slate-200">
                <li>10,000 sends = 100 responses</li>
                <li>100 responses = 20-30 qualified conversations</li>
                <li>20-30 conversations = 3-6 deals</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">At 2% Response Rate:</h3>
              <ul className="space-y-2 text-slate-200">
                <li>10,000 sends = 200 responses</li>
                <li>200 responses = 40-60 qualified conversations</li>
                <li>40-60 conversations = 6-12 deals</li>
              </ul>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">The Difference:</h3>
              <p className="text-xl">Going from 1% to 2% = 2x your pipeline</p>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">How to Get from 1% to 2%</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Tighter list segmentation (removes bad fits)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Better subject lines (more opens)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Clearer value props (more replies)</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Stronger CTAs (easier yes)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Bottom Line */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Bottom Line</h2>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold mb-4">At scale without personalization:</h3>
            <p className="text-2xl font-bold text-indigo-400 mb-6">
              Success = (List Quality × Template Clarity × Volume) - Spam Issues
            </p>

            <p className="text-lg mb-4">You can't personalize. You can't research. You can't time it perfectly.</p>

            <div className="border-t border-slate-700 pt-6 mt-6">
              <p className="text-lg font-bold mb-4">What you CAN do:</p>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Target ruthlessly (tight ICP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Write templates that sound personal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Test relentlessly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Send massive volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Optimize based on data</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-700 pt-6 mt-6">
              <p className="text-lg mb-4"><strong>The rule:</strong> 1-3% response rate is normal and profitable at scale.</p>
              <p className="text-xl font-bold text-indigo-400">
                Send 50,000 emails at 2% = 1,000 conversations = enough pipeline to hit quota.
              </p>
              <p className="text-lg mt-4">That's the game.</p>
            </div>
          </div>
        </section>

      </div>

      {/* Internal Linking Section */}
      <section className="py-12 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/library" className="p-6 bg-white rounded-lg border border-slate-200 hover:border-indigo-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-slate-900 mb-2">Sales Tool Library</h3>
              <p className="text-sm text-slate-600">Browse tools for cold email automation and outbound sales</p>
            </Link>
            <Link to="/comparisons/reply-vs-instantly" className="p-6 bg-white rounded-lg border border-slate-200 hover:border-indigo-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-slate-900 mb-2">Reply.io vs Instantly</h3>
              <p className="text-sm text-slate-600">Best cold email platforms compared side-by-side</p>
            </Link>
            <Link to="/strategies" className="p-6 bg-white rounded-lg border border-slate-200 hover:border-indigo-600 hover:shadow-lg transition-all">
              <h3 className="font-bold text-slate-900 mb-2">Outbound Playbook</h3>
              <p className="text-sm text-slate-600">Complete sales strategy and implementation guide</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need Help?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Want custom templates for your industry or done-for-you cold email setup?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consulting"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all shadow-lg"
            >
              Get Consulting Help
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg transition-all border-2 border-slate-300"
            >
              Browse More Tools
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColdEmailGuidePage;
