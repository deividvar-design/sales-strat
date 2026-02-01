import React from 'react';
import { Helmet } from 'react-helmet-async';

import Breadcrumb from '../../components/Breadcrumb';

const ThirtyDayOutboundPlanFirst5CustomersPage = () => {
  const canonical = 'https://saleshousestack.com/resources/30-day-outbound-plan-first-5-customers/';

  const metaTitle = '30-Day Outbound Plan to Get Your First 5 Customers (Founder Playbook) | Sales House';
  const metaDescription = 'A 30-day outbound plan for founders to get first customers: ICP selection, list building, messaging, weekly sprints, and a daily checklist you can execute.';
  const metaKeywords = '30 day outbound plan, get first customers outbound, founder led sales plan, outbound checklist, cold outreach plan';

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
            <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-sm font-semibold text-indigo-700">
              Outbound
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Founder
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            30-Day Outbound Plan to Get Your First 5 Customers
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            This is not a motivation post. It is a simple execution plan that forces learning and keeps your feedback loop short.
            If you do the work for 30 days, you will have signal.
          </p>
        </div>

        {/* TLDR */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">🗓️</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">TL;DR</h2>
              <ol className="list-decimal pl-6 text-slate-700 space-y-2">
                <li>Week 1: lock ICP + offer + first list</li>
                <li>Week 2: ship 2 message variants and start daily outreach</li>
                <li>Week 3: tighten targeting, improve reply quality, add a second channel</li>
                <li>Week 4: scale what works, cut what does not, turn wins into a repeatable system</li>
              </ol>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-indigo-200 text-sm text-slate-600">
            The point is not perfection. The point is to learn fast and ship consistently.
          </div>
        </div>

        {/* Setup */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Before you start: define 3 constraints</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-sm font-bold text-indigo-600 mb-2">Constraint 1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">ICP</h3>
              <p className="text-slate-700">A specific buyer you can reach this week. Narrow beats broad.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-sm font-bold text-indigo-600 mb-2">Constraint 2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Offer</h3>
              <p className="text-slate-700">One clear outcome you can deliver. Keep it simple and specific.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-sm font-bold text-indigo-600 mb-2">Constraint 3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cadence</h3>
              <p className="text-slate-700">A daily block (60 to 90 minutes) you can protect for 30 days.</p>
            </div>
          </div>
        </div>

        {/* Weekly plan */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The 30-day plan (week by week)</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Week 1: pick ICP, write offer, build a starter list</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Pick 1 ICP and 1 problem with urgency.</li>
                <li>Write a one-sentence offer.</li>
                <li>Build a list of 100 prospects (enough for learning).</li>
                <li>Write 2 message angles (problem-first and outcome-first).</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Week 2: start daily sending and book first calls</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Send daily to a small batch so you can iterate.</li>
                <li>Track replies by message angle.</li>
                <li>Run short discovery calls and write down objection patterns.</li>
                <li>Adjust targeting if replies are unqualified.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Week 3: improve quality and add a second channel</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Double down on the best-performing angle.</li>
                <li>Improve list quality instead of increasing volume.</li>
                <li>Add a second channel (LinkedIn or calls) only after message clarity improves.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Week 4: scale what works and productize your process</h3>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Increase volume carefully, keep deliverability stable.</li>
                <li>Create templates for the winning sequence.</li>
                <li>Turn learnings into a repeatable weekly cadence.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Daily checklist */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Daily checklist (60 to 90 minutes)</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <ol className="list-decimal pl-6 text-slate-700 space-y-2">
              <li>Pull 10 to 20 new leads and validate fit.</li>
              <li>Send today’s outreach batch.</li>
              <li>Reply to all responses within 24 hours.</li>
              <li>Log objections and update your message weekly.</li>
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-12 bg-gradient-to-br from-indigo-950/10 to-purple-950/5 rounded-2xl border border-indigo-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Want this implemented for your business?</h2>
          <p className="text-slate-600 mb-6">
            Book a free consultation and we will map your ICP, offer, and first 30 days of outbound into a simple weekly system.
          </p>
          <a
            href="/consulting"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThirtyDayOutboundPlanFirst5CustomersPage;
