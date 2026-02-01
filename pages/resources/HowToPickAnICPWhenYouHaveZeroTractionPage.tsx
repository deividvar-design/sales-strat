import React from 'react';
import { Helmet } from 'react-helmet-async';

import Breadcrumb from '../../components/Breadcrumb';

const HowToPickAnICPWhenYouHaveZeroTractionPage = () => {
  const canonical = 'https://saleshousestack.com/resources/how-to-pick-an-icp-when-you-have-zero-traction/';

  const metaTitle = 'How to Pick an ICP When You Have Zero Traction (Practical Guide) | Sales House';
  const metaDescription = 'A practical ICP selection framework for founders with zero traction. How to pick a market you can reach, a buyer you can win, and a message you can test fast.';
  const metaKeywords = 'how to pick an icp, pick icp with no traction, ideal customer profile framework, early stage outbound, founder led sales';

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
              ICP
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Founder
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How to Pick an ICP When You Have Zero Traction
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            If you have zero traction, your ICP is not a guess. It is a set of testable constraints.
            This guide helps you pick an ICP you can actually reach, message, and close.
          </p>
        </div>

        {/* TLDR */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">⚡</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">TL;DR (the fastest path)</h2>
              <ol className="list-decimal pl-6 text-slate-700 space-y-2">
                <li><strong>Pick a buyer you can access</strong> (warm network, communities, list sources).</li>
                <li><strong>Pick a painful problem with urgency</strong> (not a nice-to-have).</li>
                <li><strong>Pick a simple offer</strong> you can explain in one sentence.</li>
                <li><strong>Run 20 conversations</strong> before you write any long content.</li>
              </ol>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-indigo-200 text-sm text-slate-600">
            The best ICP is the one that shortens your feedback loop.
          </div>
        </div>

        {/* Core framework */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The 3 ICP constraints that matter (early stage)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-sm font-bold text-indigo-600 mb-2">Constraint 1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Reachability</h3>
              <p className="text-slate-700">
                Can you reliably get in front of this buyer within 7 days? If the answer is no, it is not your ICP yet.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-sm font-bold text-indigo-600 mb-2">Constraint 2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Urgency</h3>
              <p className="text-slate-700">
                Is the problem expensive today? Not in theory. If the buyer can delay for 6 months, your outbound will feel impossible.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-sm font-bold text-indigo-600 mb-2">Constraint 3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Winnability</h3>
              <p className="text-slate-700">
                Can you beat alternatives with a clear reason? If you cannot answer "why you" in one sentence, pick a narrower ICP.
              </p>
            </div>
          </div>
        </div>

        {/* Step by step */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Step-by-step: pick an ICP in 60 minutes</h2>

          <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-7">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 1: list 3 reachable segments</h3>
              <p className="text-slate-700 mb-3">
                Ignore the "best market" question. Start with reachability. Write down 3 segments you can access now.
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>People you already know (previous coworkers, clients, peers)</li>
                <li>One community where your buyer hangs out</li>
                <li>One list source you can pull quickly (LinkedIn search, job boards, directories)</li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-7">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 2: pick one painful problem</h3>
              <p className="text-slate-700 mb-3">
                Early traction is mostly problem selection. Choose a problem that has a clear "this week" trigger.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-slate-700">
                Examples of triggers: new hire, new funding, churn spike, pipeline gap, tool migration, upcoming launch.
              </div>
            </div>

            <div className="border-t border-slate-200 pt-7">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 3: write a one-sentence offer</h3>
              <p className="text-slate-700 mb-3">
                The offer should be concrete and low-friction. If you need 5 minutes to explain it, it is too broad.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <div className="font-bold text-slate-900 mb-2">Template</div>
                <div className="text-slate-700">
                  I help <strong>[segment]</strong> achieve <strong>[outcome]</strong> by fixing <strong>[problem]</strong> in <strong>[timeframe]</strong>.
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-7">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 4: run 20 conversations</h3>
              <p className="text-slate-700">
                Do not build in a vacuum. Run 20 short conversations (calls or DMs) and track 3 signals: urgency, budget, and clarity.
              </p>
            </div>
          </div>
        </div>

        {/* What to track */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What to track (the only ICP scorecard you need)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Signal</th>
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">What good looks like</th>
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">What bad looks like</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Reach</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">You can contact 50 prospects in 1 hour</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">You spend days just finding names</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Urgency</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">They have an active project or deadline</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">They say "maybe later"</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Winnability</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">They agree your approach is different</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">They compare you to a generic alternative</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Message clarity</td>
                  <td className="p-4 text-slate-700">They repeat your value back to you</td>
                  <td className="p-4 text-slate-700">You keep changing the pitch every call</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">What if I have multiple ideas?</h3>
              <p className="text-slate-700">
                Run short tests in parallel, but keep the work small. One segment, one problem, one offer, 20 conversations.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is content a good ICP test?</h3>
              <p className="text-slate-700">
                Content is a slower test. Use it after you confirm the problem is urgent and the message is clear.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-12 bg-gradient-to-br from-indigo-950/10 to-purple-950/5 rounded-2xl border border-indigo-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Want help picking your ICP?</h2>
          <p className="text-slate-600 mb-6">
            Book a free consultation and we will pick an ICP and message you can test in the next 7 days.
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

export default HowToPickAnICPWhenYouHaveZeroTractionPage;
