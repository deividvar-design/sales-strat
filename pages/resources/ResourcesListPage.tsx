import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { TOOLS } from '../../constants';
import Breadcrumb from '../../components/Breadcrumb';

const ResourcesListPage = () => {
  const metaTitle = 'Resources - Sales Playbooks & Guides | Sales House';
  const metaDescription = 'Playbooks and guides to help you build pipeline and pick the right outbound stack. Free resources for founders and sales teams.';

  // Get recommended tools
  const recommendedTools = TOOLS.filter(t => ['clay', 'reply', 'mailforge', 'lemlist', 'instantly'].includes(t.id));

  // Resource guides
  const guides = [
    {
      title: 'Cold Email Guide',
      slug: 'cold-email-guide',
      category: 'COLD EMAIL',
      excerpt: 'Templates, sequences, and rules for writing cold emails that convert at scale.'
    },
    {
      title: 'Best Cold Email Software (2026)',
      slug: 'best-cold-email-software',
      category: 'TOOLS',
      excerpt: 'Practical breakdown of Instantly, Lemlist, Reply.io and how to choose based on your stage.'
    },
    {
      title: 'How to Pick an ICP When You Have Zero Traction',
      slug: 'how-to-pick-an-icp-when-you-have-zero-traction',
      category: 'ICP',
      excerpt: 'A simple framework to pick a reachable, urgent, winnable ICP and shorten your feedback loop.'
    },
    {
      title: '30-Day Outbound Plan to Get Your First 5 Customers',
      slug: '30-day-outbound-plan-first-5-customers',
      category: 'OUTBOUND',
      excerpt: 'A week-by-week execution plan and daily checklist for founder-led outbound.'
    },
    {
      title: 'Solopreneur Outbound Stack Under $100/mo (2026)',
      slug: 'solopreneur-outbound-stack-under-100-mo-2026',
      category: 'STACK',
      excerpt: 'A minimal budget outbound stack and what to buy first to get meetings.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://saleshousestack.com/resources" />
      </Helmet>

      <div className="min-h-screen bg-[#FEFEFE]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <Breadcrumb />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-xs font-bold text-indigo-700 mb-4 uppercase tracking-wider">
              Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Resources
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              Playbooks and guides to help you build pipeline and pick the right outbound stack.
            </p>
          </div>

          {/* Recommended Tools Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">START HERE</div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Recommended outbound stack (fast picks)
                </h2>
                <p className="text-slate-600">
                  If you just want the stack without reading 5 guides, these are the tools we'd start with.
                </p>
              </div>
              <Link
                to="/library"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors text-sm"
              >
                Browse all tools
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {recommendedTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{tool.name}</h3>
                    <div className="flex gap-2">
                      {(tool.id === 'clay' || tool.id === 'reply' || tool.id === 'mailforge') && (
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded whitespace-nowrap">
                          Recommended
                        </span>
                      )}
                      {tool.id === 'instantly' && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded whitespace-nowrap">
                          Best Value
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{tool.description}</p>
                  <div className="flex gap-2">
                    <a
                      href={tool.affiliateLink || tool.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Visit {tool.name}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link
                      to="/library"
                      className="inline-flex items-center justify-center px-4 py-2 border-2 border-slate-300 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
                    >
                      See in library
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center md:hidden">
              <Link
                to="/library"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Browse all tools
              </Link>
            </div>
          </div>

          {/* Resource Guides Section */}
          <div className="mb-16 space-y-6">
            {guides.map((guide) => (
              <div
                key={guide.slug}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{guide.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{guide.title}</h3>
                    <p className="text-sm text-slate-600">{guide.excerpt}</p>
                  </div>
                  <Link
                    to={`/resources/${guide.slug}`}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Read
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want help implementing this?</h2>
            <p className="text-lg mb-8 text-indigo-100 max-w-2xl mx-auto">
              Book a free consultation and we will turn the playbook into a system.
            </p>
            <Link
              to="/consulting"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-slate-50 transition-all shadow-lg"
            >
              Book a Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesListPage;
