import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Breadcrumb from '../../components/Breadcrumb';
import { TOOLS } from '../../constants';

const ResourcesListPage = () => {
  const startHereToolIds = ['mailforge', 'instantly', 'lemlist', 'reply', 'clay'];
  const startHereTools = TOOLS.filter((t) => startHereToolIds.includes(t.id));

  const resources = [
    {
      slug: 'cold-email-guide',
      name: 'Cold Email Guide',
      category: 'Cold Email',
      excerpt: 'Templates, sequences, and rules for writing cold emails that convert at scale.'
    },
    {
      slug: 'best-cold-email-software',
      name: 'Best Cold Email Software (2026)',
      category: 'Tools',
      excerpt: 'Practical breakdown of Instantly, Lemlist, Reply.io and how to choose based on your stage.'
    },
    {
      slug: 'how-to-pick-an-icp-when-you-have-zero-traction',
      name: 'How to Pick an ICP When You Have Zero Traction',
      category: 'ICP',
      excerpt: 'A simple framework to pick a reachable, urgent, winnable ICP and shorten your feedback loop.'
    },
    {
      slug: '30-day-outbound-plan-first-5-customers',
      name: '30-Day Outbound Plan to Get Your First 5 Customers',
      category: 'Outbound',
      excerpt: 'A week-by-week execution plan and daily checklist for founder-led outbound.'
    },
    {
      slug: 'solopreneur-outbound-stack-under-100-mo-2026',
      name: 'Solopreneur Outbound Stack Under $100/mo (2026)',
      category: 'Stack',
      excerpt: 'A minimal budget outbound stack and what to buy first to get meetings.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>Resources - Outbound Playbooks, Templates, and Guides | Sales House</title>
        <meta name="description" content="Outbound resources and playbooks: cold email templates, ICP frameworks, outreach plans, and stack guides. Practical, tested, and built to drive affiliate clicks." />
        <link rel="canonical" href="https://saleshousestack.com/resources/" />
      </Helmet>

      <div className="p-6 max-w-4xl mx-auto">
        <Breadcrumb />

        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-sm font-semibold text-purple-700 mb-4">
            Resources
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Resources</h1>
          <p className="text-lg text-slate-600">
            Playbooks and guides to help you build pipeline and pick the right outbound stack.
          </p>
        </div>

        <div className="mb-10 bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Start here</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Recommended outbound stack (fast picks)</h2>
              <p className="text-slate-600">
                If you just want the stack without reading 5 guides: these are the tools we’d start with.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Browse all tools
              </Link>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {startHereTools.map((t) => (
              <div key={t.id} className="border border-slate-200 rounded-xl p-5 hover:border-indigo-300 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{t.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{t.description}</p>
                  </div>
                  {t.badge && (
                    <div className="shrink-0 text-xs font-bold px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {t.badge}
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={t.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Visit {t.name}
                  </a>
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 font-bold rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    See in library
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {resources.map((r) => (
            <div key={r.slug} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-indigo-300 transition-colors">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{r.category}</div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{r.name}</h2>
                  <p className="text-slate-600">{r.excerpt}</p>
                </div>
                <div className="shrink-0">
                  <Link
                    to={`/resources/${r.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Read
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Want help implementing this?</h2>
          <p className="text-slate-600 mb-6">Book a free consultation and we will turn the playbook into a system.</p>
          <Link
            to="/consulting"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesListPage;
