import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink } from 'lucide-react';

import Breadcrumb from '../../components/Breadcrumb';
import { TOOLS } from '../../constants';

const BestColdEmailSoftwarePage = () => {
  const instantly = TOOLS.find(t => t.id === 'instantly');
  const lemlist = TOOLS.find(t => t.id === 'lemlist');
  const reply = TOOLS.find(t => t.id === 'reply');
  const outreach = TOOLS.find(t => t.id === 'outreach');
  const mixmax = TOOLS.find(t => t.id === 'mixmax');
  const dripify = TOOLS.find(t => t.id === 'dripify');
  const mailforge = TOOLS.find(t => t.id === 'mailforge');

  const canonical = 'https://saleshousestack.com/resources/best-cold-email-software/';

  const metaTitle = 'Best Cold Email Software (2026): Instantly vs Lemlist vs Reply.io | Sales House';
  const metaDescription = 'The best cold email software in 2026 depends on your stage. Honest breakdown of Instantly, Lemlist, Reply.io, Outreach, Mixmax - plus the infrastructure stack to keep deliverability stable.';
  const metaKeywords = 'best cold email software, best cold email tool, cold email platform, instantly vs lemlist vs reply.io, cold email deliverability';

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
              Cold Email
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Outreach
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Best Cold Email Software (2026)
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Not a listicle. A practical ranking based on what actually matters: deliverability control, workflow fit, and speed to launch.
            Only tools already listed in the SalesHouseStack library.
          </p>
        </div>

        {/* TL;DR */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">⚡</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Quick picks (TL;DR)</h2>
              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                <div className="bg-white/70 border border-indigo-200 rounded-xl p-4">
                  <div className="font-bold text-slate-900">Best for pure cold email scale (budget)</div>
                  <div>Instantly</div>
                </div>
                <div className="bg-white/70 border border-indigo-200 rounded-xl p-4">
                  <div className="font-bold text-slate-900">Best for creative personalization</div>
                  <div>Lemlist</div>
                </div>
                <div className="bg-white/70 border border-indigo-200 rounded-xl p-4">
                  <div className="font-bold text-slate-900">Best for workflow + multichannel (SMB/MM)</div>
                  <div>Reply.io</div>
                </div>
                <div className="bg-white/70 border border-indigo-200 rounded-xl p-4">
                  <div className="font-bold text-slate-900">Best for enterprise programs</div>
                  <div>Outreach.io</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-indigo-200 text-sm text-slate-600">
            Rule: the best cold email tool is the one that matches your stage. If your deliverability is broken, switching tools wont save you.
          </div>
        </div>

        {/* Comparison table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Comparison table (tools we list)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Tool</th>
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Best for</th>
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Watch-outs</th>
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Instantly</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">High-volume cold email, fast iteration</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Easy to misuse if you dont control targeting + volume</td>
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
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Lemlist</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Personalization and creative outbound</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Personalization doesnt fix bad ICP/offer</td>
                  <td className="p-4 border-b border-slate-100">
                    {lemlist?.website ? (
                      <a href={lemlist.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Reply.io</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Workflow + multichannel (email + LinkedIn + calls)</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">UI can feel dense - you need templates and rules</td>
                  <td className="p-4 border-b border-slate-100">
                    {reply?.website ? (
                      <a href={reply.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700">
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Outreach.io</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Enterprise governance and sales engagement</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Overkill if you just need to send cold emails</td>
                  <td className="p-4 border-b border-slate-100">
                    {outreach?.website ? (
                      <a href={outreach.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Mixmax</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Gmail-native outbound for founders/AEs</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Not designed for heavy rotation + scale</td>
                  <td className="p-4 border-b border-slate-100">
                    {mixmax?.website ? (
                      <a href={mixmax.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">
                        Visit <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-slate-500">-</span>
                    )}
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Mailforge.ai</td>
                  <td className="p-4 text-slate-700">Infrastructure for deliverability + inbox rotation</td>
                  <td className="p-4 text-slate-700">Still need list hygiene and volume discipline</td>
                  <td className="p-4">
                    {mailforge?.website ? (
                      <a href={mailforge.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">
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
            Note: Dripify is great for LinkedIn automation, but its not a cold email platform by itself. Use it as an add-on channel.
            {dripify?.website ? (
              <span>
                {' '}<a className="text-indigo-600 font-semibold" href={dripify.website} target="_blank" rel="noopener noreferrer">Dripify link</a>.
              </span>
            ) : null}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-16 bg-slate-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-3">Want the full outbound stack by team size?</h2>
          <p className="text-slate-200 mb-6">Start with the library so you dont buy random tools and hope for the best.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/library" className="px-5 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all">
              View the Library
            </a>
            <a href="/consulting" className="px-5 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all">
              Book Consulting
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestColdEmailSoftwarePage;
