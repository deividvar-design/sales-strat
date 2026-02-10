import React from 'react';
import { Helmet } from 'react-helmet-async';

import Breadcrumb from '../../components/Breadcrumb';

const ColdEmailDeliverabilityPage = () => {
  const canonical = 'https://saleshousestack.com/pages/cold-email-deliverability-founders/';
  
  const metaTitle = 'Cold Email Deliverability for Founders: Simple Rules That Prevent Spam | Sales House';
  const metaDescription = 'Stop losing emails to spam. Learn the practical rules for domain warmup, list quality, authentication, and sending patterns that actually improve deliverability. For founders doing outbound sales.';
  const metaKeywords = 'cold email deliverability, email spam folder, domain warmup, cold email list quality, email authentication, spf dkim dmarc';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cold Email Deliverability for Founders: Simple Rules That Prevent Spam',
    description: metaDescription,
    image: 'https://saleshousestack.com/og-image.png',
    author: {
      '@type': 'Person',
      name: 'David Varan',
      url: 'https://www.linkedin.com/in/davidvaran/'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sales House - Outbound Sales Stack That Fills Your Calendar',
      logo: {
        '@type': 'ImageObject',
        url: 'https://saleshousestack.com/logo.png'
      }
    },
    datePublished: '2026-02-04',
    dateModified: '2026-02-05'
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className="p-6 max-w-4xl mx-auto">
        <Breadcrumb />

        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Guide
            </div>
            <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-sm font-semibold text-purple-700">
              Cold Email
            </div>
            <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-sm font-semibold text-indigo-700">
              Deliverability
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Cold Email Deliverability for Founders: Simple Rules That Prevent Spam
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            You've optimized your copy. Your timing is right. But 40% of your emails disappear into spam. Here are the non-negotiable rules that actually land you in inboxes.
          </p>
        </div>

        {/* Verdict Box */}
        <div className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">📧</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">The three rules that matter</h2>
              <div className="space-y-3 text-lg text-slate-700 leading-relaxed">
                <p>
                  <strong>1. Build domain reputation slowly.</strong> Warm up from 20 emails on day one to full scale over 3-4 weeks. Jumping to 500 emails on day one gets you blocked immediately.
                </p>
                <p>
                  <strong>2. Your list quality determines everything.</strong> One bad data source with 30% invalid addresses will burn a domain in weeks. Start with quality over quantity every single time.
                </p>
                <p>
                  <strong>3. Your sending patterns must look human.</strong> Sending 200 identical emails at 10:00 AM looks like a bot. Vary timing, vary volume, vary content. Mailbox providers watch this.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-blue-200 text-sm text-slate-600">
            Everything else—SPF, DKIM, DMARC, SMTP setup—is table stakes. You need them all. But these three principles separate success from failure.
          </div>
        </div>

        {/* Core Sections */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What you'll learn</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-2xl mb-3">🔄</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Domain Warmup</h3>
              <p className="text-slate-700">Exact playbook: Day 1-3 (10-20 emails), Week 2 (100-150), Week 3 (200-300), Week 4+ (full scale). And why skipping this burns domains fast.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">List Quality</h3>
              <p className="text-slate-700">How to identify spam traps, dead addresses, and recycled data. Plus which sources to use and how to validate before sending.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-2xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Content & Structure</h3>
              <p className="text-slate-700">What mailbox providers scan for. Red flags: suspicious links, spammy language, fake personalization. Examples of clean emails.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-2xl mb-3">🔐</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Setup</h3>
              <p className="text-slate-700">SPF, DKIM, DMARC explained plainly. How to set them up. How to test them. Why they matter for sender reputation.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Monitoring</h3>
              <p className="text-slate-700">Metrics to watch weekly: bounce rate, reply rate, complaint rate, blocklist status. Tools for each. Early warning signs of problems.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-2xl mb-3">🚨</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Recovery</h3>
              <p className="text-slate-700">Your domain's already burnt. Step-by-step recovery: diagnosis, list cleaning, new domain setup, restart warmup. Timeline: 1 month.</p>
            </div>
          </div>
        </div>

        {/* Key Metrics Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Target metrics (for a healthy domain)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Metric</th>
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Target Range</th>
                  <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Red Flag</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Hard Bounces</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Under 2%</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Above 5% means your list source is bad</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Soft Bounces</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Under 1.5%</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Temporary, but watch for patterns</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Reply Rate</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">1.5-3%</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Below 0.5% = no engagement or spam folder</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Open Rate</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">25-35%</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Below 15% suggests spam folder placement</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">Complaint Rate</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Under 0.1%</td>
                  <td className="p-4 text-slate-700 border-b border-slate-100">Above 0.3% = blocklist risk</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Blocklist Status</td>
                  <td className="p-4 text-slate-700">Not listed</td>
                  <td className="p-4 text-slate-700">Any listing = stop sending, request removal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The shortcuts that fail</h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Buying a pre-warmed domain</h3>
              <p className="text-red-800">You have no idea what reputation it actually has or what list it was warmed on. Start fresh instead. It's only 3 weeks.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Sending from @gmail.com for business</h3>
              <p className="text-red-800">Looks unprofessional and tanks deliverability. Get your own domain for $15/year. Worth thousands in delivered emails.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Sending 500 emails on day one from a new domain</h3>
              <p className="text-red-800">Mailbox providers watch for sudden volume spikes. You'll be throttled or blocklisted immediately.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Not monitoring your metrics</h3>
              <p className="text-red-800">Most founders discover they're blocklisted weeks later. Check metrics weekly—it takes 10 minutes and saves weeks of recovery.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">❌ Switching tools constantly</h3>
              <p className="text-red-800">Every switch resets your SMTP reputation and authentication. Pick a platform, stick with it for 2-3 months, then evaluate.</p>
            </div>
          </div>
        </div>

        {/* Tools Recommendation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Tools that actually help</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">For Sending & Warmup</h3>
              <ul className="space-y-3 text-slate-700">
                <li><strong>Instantly:</strong> Great balance. Built-in warmup. $35-100/mo.</li>
                <li><strong>Reply.io:</strong> Excellent sequences. Good metrics. $58-100/mo.</li>
                <li><strong>Apollo:</strong> Underrated. Built-in validation. $49-150/mo.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">For List Validation</h3>
              <ul className="space-y-3 text-slate-700">
                <li><strong>ZeroBounce:</strong> Industry standard. $0.01 per email.</li>
                <li><strong>Hunter:</strong> Email verification. $50-500/mo.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">For Infrastructure</h3>
              <ul className="space-y-3 text-slate-700">
                <li><strong>SendGrid:</strong> Best for starters. Free tier available.</li>
                <li><strong>Mailgun:</strong> Similar to SendGrid. Slightly cheaper.</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">For Monitoring</h3>
              <ul className="space-y-3 text-slate-700">
                <li><strong>Google Postmaster Tools:</strong> Free. Gmail-specific insights.</li>
                <li><strong>MXToolbox:</strong> Free. Blocklist checks.</li>
                <li><strong>250ok:</strong> Paid. Best comprehensive monitoring.</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700"><strong>For founders starting out:</strong> Begin with <strong>Apollo</strong> (list building + sending) or <strong>Instantly</strong> (sending + warmup). When you're ready to scale beyond their limits, graduate to your own domain + SendGrid/Mailgun SMTP.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Common questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">How long does warmup really take?</h3>
              <p className="text-slate-700">3-4 weeks if you follow the rules. Yes, that feels slow when you want to send 1,000 emails today. But warming up fast is how you burn domains. The 4-week timeline forces you to think about list quality and reply rate instead of just volume.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">My bounce rate is 8%. Am I in trouble?</h3>
              <p className="text-slate-700">Yes. Your list is bad or your addresses are invalid. Validate with ZeroBounce first. Remove all hard bounces from your sending list. If the bounce rate was caused by a specific list source, stop using that source. Then restart with a cleaner list.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">I got blocklisted. How long until I'm removed?</h3>
              <p className="text-slate-700">Some blocklists auto-remove after 30 days of no complaints. Others require manual petition. Most responsive operators will review your case within 48 hours if you ask. Submit a formal delisting request immediately—don't wait.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Is a subdomain better than a main domain?</h3>
              <p className="text-slate-700">Subdomains inherit some reputation from the parent domain, but they're effectively treated as separate senders. Only use a subdomain if you're specifically trying to isolate cold email reputation from transactional email. Otherwise, stick with the main domain.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Gmail shows 0% open rate. Should I worry?</h3>
              <p className="text-slate-700">No. Gmail, Yahoo, and Outlook don't report opens to third-party tools. You're only seeing opens from older email clients (Outlook desktop, Apple Mail, etc.). If your reply rate is healthy, people are opening your emails.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Can I speed up the warmup process?</h3>
              <p className="text-slate-700">Not safely. Starting with 100 emails on day one triggers automatic throttling. Warmup is a forcing function that makes you think about list quality before volume. Respect the timeline.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mb-16 bg-slate-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-3">This is step one.</h2>
          <p className="text-slate-200 mb-6">Deliverability is the foundation. Once that's dialed, everything else—copy, timing, targeting—gets easier. But skip this, and nothing else matters.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/library" className="px-5 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all">
              View the Library
            </a>
            <a href="/resources/cold-email-guide" className="px-5 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all">
              Cold Email Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColdEmailDeliverabilityPage;
