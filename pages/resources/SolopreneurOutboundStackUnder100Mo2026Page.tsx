import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

import Breadcrumb from '../../components/Breadcrumb';
import { TOOLS } from '../../constants';

const SolopreneurOutboundStackUnder100Mo2026Page = () => {
  const canonical = 'https://saleshousestack.com/resources/solopreneur-outbound-stack-under-100-mo-2026/';

  const metaTitle = 'Solopreneur Outbound Stack Under $100/mo (2026) | Sales House';
  const metaDescription = 'A practical outbound stack for solopreneurs under $100/mo. What to buy first, what to skip, and how to keep the system simple while still booking meetings.';
  const metaKeywords = 'outbound stack under 100, solopreneur outbound stack, outbound tools budget, cold email stack, founder outbound stack';

  const apollo = TOOLS.find(t => t.id === 'apollo');
  const instantly = TOOLS.find(t => t.id === 'instantly');
  const reply = TOOLS.find(t => t.id === 'reply');
  const mailforge = TOOLS.find(t => t.id === 'mailforge');

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
              Solopreneur
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Outbound Stack
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Solopreneur Outbound Stack Under $100/mo (2026)
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Outbound does not need to be expensive. It needs to be consistent.
            Here is a simple stack under $100/mo that gets you from zero to meetings without building a Rube Goldberg machine.
          </p>
        </div>

        {/* Verdict / TLDR */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">💸</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">My simple recommendation</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Start with <strong>Apollo</strong> for list building and <strong>Instantly</strong> for sending.
                Add <strong>Mailforge</strong> when you are ready to scale mailboxes.
                Use <strong>Reply.io</strong> only if you need multichannel workflows.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-indigo-200 text-sm text-slate-600">
            The goal is to minimize tools and maximize reps. Your calendar does not care how pretty your tech stack is.
          </div>
        </div>

        {/* Stack table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The stack (budget version)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Layer</th>
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Tool</th>
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Why it is here</th>
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Leads</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Apollo</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Fast list building and filtering so you can start testing.</td>
                  <td className="p-4 border-b border-slate-100">
                    {apollo?.website ? (
                      <a href={apollo.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Sending</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Instantly</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Email-first sending with simple workflows and fast iteration.</td>
                  <td className="p-4 border-b border-slate-100">
                    {instantly?.website ? (
                      <a href={instantly.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Deliverability (optional)</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Mailforge</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Adds inbox scale and rotation without weekly deliverability panic.</td>
                  <td className="p-4 border-b border-slate-100">
                    {mailforge?.website ? (
                      <a href={mailforge.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Multichannel (optional)</td>
                  <td className="p-4 text-slate-700">Reply.io</td>
                  <td className="p-4 text-slate-700">Use if you need LinkedIn steps, calling, and reporting like a sales team.</td>
                  <td className="p-4">
                    {reply?.website ? (
                      <a href={reply.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700">
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-sm text-slate-600">
            If you are thinking "should I add five more tools", the answer is probably no. The boring fundamentals win.
          </div>
        </div>

        {/* What to do first */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What to do first (so this actually works)</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1) Pick one ICP and one offer</h3>
              <p className="text-slate-700">If you target everyone, you will convert no one. Start narrow and win a wedge.</p>
            </div>
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">2) Build a 200 lead list</h3>
              <p className="text-slate-700">Not 10,000. Two hundred. Enough to test messaging without drowning in noise.</p>
            </div>
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">3) Run a 2-week sprint</h3>
              <p className="text-slate-700">Send daily, reply fast, and fix the message weekly. Consistency beats intensity.</p>
            </div>
          </div>
        </div>

        {/* Related Comparisons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Compare Tools Before You Buy</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/comparisons/apollo-vs-zoominfo-vs-cognism-2026" className="bg-white border-2 border-indigo-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">🆚 Apollo vs ZoomInfo vs Cognism</h4>
              <p className="text-slate-600 text-sm">Which B2B database fits your budget and ICP?</p>
            </Link>
            <Link to="/comparisons/instantly-vs-lemlist-vs-replyio" className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-300 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">🆚 Instantly vs Lemlist vs Reply.io</h4>
              <p className="text-slate-600 text-sm">Cold email platforms compared: scale vs features</p>
            </Link>
            <Link to="/comparisons/clay-vs-apollo" className="bg-white border-2 border-emerald-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-300 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">🆚 Clay vs Apollo</h4>
              <p className="text-slate-600 text-sm">AI enrichment vs traditional B2B data: which wins?</p>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-12 bg-gradient-to-br from-indigo-950/10 to-purple-950/5 rounded-2xl border border-indigo-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Want a stack that fits your stage?</h2>
          <p className="text-slate-600 mb-6">
            Book a free consultation and we will pick a simple outbound stack and a 2-week plan you can execute.
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

export default SolopreneurOutboundStackUnder100Mo2026Page;
