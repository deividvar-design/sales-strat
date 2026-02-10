import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, TrendingUp, Target, Clock, CheckCircle, BarChart3, Zap } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';

const InstantlyForBeginnersPage = () => {
  const canonical = 'https://saleshousestack.com/pages/instantly-for-beginners-safe-scaling/';

  const metaTitle = 'Instantly for Beginners: Safe Scaling From 20 to 200 Emails/Day | Sales House';
  const metaDescription = 'Practical step-by-step guide to safely scale Instantly from 20 emails/day to 200/day without blowing your sender reputation. For founders and SDRs starting with email automation.';
  const metaKeywords = 'instantly.ai, email automation, safe email scaling, cold email strategy, email outreach, sender reputation, instantly guide';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Instantly for Beginners: Safe Scaling From 20 Emails/Day to 200/Day',
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
    datePublished: '2026-01-29',
    dateModified: '2026-02-02'
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="p-6 max-w-4xl mx-auto">
        <Breadcrumb />

        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-block px-3 py-1 bg-purple-100 border border-purple-300 rounded-full text-sm font-semibold text-purple-700">
              Guide
            </div>
            <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-sm font-semibold text-indigo-700">
              Email Automation
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Cold Outreach
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Instantly for Beginners: Safe Scaling From 20 Emails/Day to 200/Day
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            A practical 4-week framework to safely ramp your email volume without blowing your sender reputation. Based on 6+ years of sales ops experience and real data from founders who've scaled cleanly.
          </p>
        </div>

        {/* The Problem */}
        <div className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">The biggest mistake in week one</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                You sign up for Instantly, load 500 emails, and hit send tomorrow. Sounds efficient, right? Wrong. You tank your sender reputation in 48 hours. Gmail flags your domain. Outlook junks you. You spend the next 3 months trying to recover from a hole you dug yourself.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-red-200 text-sm text-slate-600">
            Your sender reputation is like a credit score. You don't build it by borrowing $10k your first day.
          </div>
        </div>

        {/* The Framework */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The 4-Week Safe Scaling Framework</h2>
          <p className="text-lg text-slate-600 mb-8">
            This is not a guess. This is what works. I've tested this with founders selling B2B SaaS, SDRs at agencies, and solo founders doing cold outbound.
          </p>

          <div className="space-y-6">
            {/* Week 1 */}
            <div className="border-l-4 border-purple-600 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-600">
                    1
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Week 1: Establish Baseline (20-30 emails/day)</h3>
                  <div className="space-y-3 text-slate-700">
                    <p className="font-semibold">Goal: Prove you're a real person sending legitimate mail.</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                      <li>Pick 3-5 super-targeted accounts you actually know about</li>
                      <li>Send personalized emails to warm contacts + researched prospects</li>
                      <li>Enable warmup mode in Instantly (critical for new domains)</li>
                      <li>Daily limit: 25 emails max (set manually, not auto-sequences)</li>
                      <li>Keep email copy short: 3-5 sentences showing you did homework</li>
                      <li>Track: Open rate, reply rate, any unsubscribes</li>
                    </ul>
                    <p className="text-sm italic text-slate-600 mt-4">This week is about reputation, not volume. If open rate is 0%, fix the email before ramping.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Week 2 */}
            <div className="border-l-4 border-indigo-600 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
                    2
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Week 2: Controlled Ramp (50-75 emails/day)</h3>
                  <div className="space-y-3 text-slate-700">
                    <p className="font-semibold">Goal: Add sequences and expand your prospect list while monitoring engagement.</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                      <li>Set up 2 sequences: cold outreach (2-3 touches) + warm follow-ups (1-2 touches)</li>
                      <li>Increase daily sends to 60 emails/day max</li>
                      <li>Use 3-4 day spacing between follow-ups (not 1-2 day gaps)</li>
                      <li>Add 150-200 new contacts this week (now working ~450 total prospects)</li>
                      <li>Enable reply detection to skip auto-replies</li>
                      <li>Spread sends across 9am-3pm in recipient timezone</li>
                      <li>Monitor: Open rate should stay 20%+ for Week 1 lists</li>
                    </ul>
                    <p className="text-sm italic text-slate-600 mt-4">If open rate drops below 15%, pause ramping and fix email copy before continuing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Week 3 */}
            <div className="border-l-4 border-blue-600 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                    3
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Week 3: Growth Phase (100-150 emails/day)</h3>
                  <div className="space-y-3 text-slate-700">
                    <p className="font-semibold">Goal: Scale sequences and start seeing meaningful engagement.</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                      <li>Run 3-4 sequences simultaneously (cold, warm, nurture, etc.)</li>
                      <li>Daily cap: 120 emails/day max</li>
                      <li>Per-sequence limit: 40-50 emails/day each</li>
                      <li>Add 300-400 new prospects (now working ~750 active targets)</li>
                      <li>Set up reply-based automation (e.g., auto-reply with calendar link)</li>
                      <li>Implement unsubscribe handling (auto-remove from sequences)</li>
                      <li>Key checkpoint: Open rate still above 18%? Reply rate 2-5%? Good, keep going.</li>
                    </ul>
                    <p className="text-sm italic text-slate-600 mt-4">Week 3 is where you'll spot problems early. Address them now before ramping to 200/day.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Week 4 */}
            <div className="border-l-4 border-green-600 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600">
                    4
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Week 4: Volume Phase (150-200 emails/day)</h3>
                  <div className="space-y-3 text-slate-700">
                    <p className="font-semibold">Goal: Hit sustainable 200/day with healthy engagement metrics.</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                      <li>Run 4-5 sequences at full capacity</li>
                      <li>Daily cap: 200 emails/day (your target)</li>
                      <li>Per-sequence caps: 40-50 emails/day each</li>
                      <li>Never send more than 20 emails/hour (prevents hourly spam spikes)</li>
                      <li>Add 400-500 new prospects (now working 1,200-1,500 total)</li>
                      <li>Heavy emphasis on timezone-aware sending</li>
                      <li>Final checkpoint: Open rate 18%+? Click rate 2-3%? Reply rate 2-5%? You're good.</li>
                    </ul>
                    <p className="text-sm italic text-slate-600 mt-4">If all metrics stay green, you're at sustainable 200/day. Congratulations-most teams don't get here safely.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Critical Instantly Settings */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Critical Instantly Settings (Don't Leave These on Default)</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" /> Email Sending
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Sending speed: 3-5 seconds minimum</li>
                <li>✓ Daily limit: Match your ramp phase</li>
                <li>✓ Per-hour cap: 20-30 max</li>
                <li>✓ Warmup mode: Enable for first 2 weeks</li>
                <li>✓ Bounce handling: Auto-remove hard bounces</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" /> Deliverability
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ SPF/DKIM: Properly configured</li>
                <li>✓ ISP monitoring: Track Gmail, Outlook separately</li>
                <li>✓ Bounce rate target: &lt;5%</li>
                <li>✓ Complaint rate: &lt;0.5%</li>
                <li>✓ Spam folder tracking: Monitor placement</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" /> Sequences
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Minimum spacing: 3-5 days between touches</li>
                <li>✓ Max touches per sequence: 3-4</li>
                <li>✓ Reply detection: Use AI skip if available</li>
                <li>✓ Do-not-contact list: Sync with CRM</li>
                <li>✓ Segment by engagement: Different follow-ups for opens vs non-opens</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" /> Personalization
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Add merge tags: {{firstName}}, {{company}}</li>
                <li>✓ Custom variables: Use your list fields</li>
                <li>✓ Subject line A/B: Rotate 2-3 versions</li>
                <li>✓ Body variations: Test 2-3 email versions</li>
                <li>✓ No spam words: Remove "URGENT," "limited time," etc.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Common Scaling Mistakes (and How to Avoid Them)</h2>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Too Much Volume, Too Fast
              </h3>
              <p className="text-sm text-slate-700">Sending 500 emails day 1 kills reputation instantly. One founder did this-domain blocked in 4 hours.</p>
              <p className="text-sm text-slate-600 mt-2"><strong>Fix:</strong> Follow the weekly ramp. 20→50→100→150→200.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Weak Targeting + Weak Copy
              </h3>
              <p className="text-sm text-slate-700">10k emails from a list + generic template = spam folder.</p>
              <p className="text-sm text-slate-600 mt-2"><strong>Fix:</strong> Start with 50-100 hand-picked accounts. Get copy working first, then scale list.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Ignoring Reply Rate
              </h3>
              <p className="text-sm text-slate-700">High opens + zero replies = better reputation than no data, but still a sign copy sucks.</p>
              <p className="text-sm text-slate-600 mt-2"><strong>Fix:</strong> Track open, click, and reply rates weekly. If reply rate is 0%, fix before ramping.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Manual Unsubscribe Management
              </h3>
              <p className="text-sm text-slate-700">Ignoring one unsubscribe = second complaint → reputation hit.</p>
              <p className="text-sm text-slate-600 mt-2"><strong>Fix:</strong> Enable auto-unsubscribe in Instantly (required).</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Sending at Odd Hours
              </h3>
              <p className="text-sm text-slate-700">Sending 200 emails at 3am looks like a bot to email providers.</p>
              <p className="text-sm text-slate-600 mt-2"><strong>Fix:</strong> Spread sends across 9am-5pm in recipient timezone. Instantly can automate this.</p>
            </div>
          </div>
        </div>

        {/* Metrics to Track */}
        <div className="mb-12 bg-indigo-50 border border-indigo-200 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <BarChart3 className="w-8 h-8 text-indigo-600" /> Weekly Metrics to Track
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Reputation Metrics</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li><strong>Open rate:</strong> Target 18%+</li>
                <li><strong>Click rate:</strong> Target 2-3%</li>
                <li><strong>Reply rate:</strong> Target 2-5%</li>
                <li><strong>Bounce rate:</strong> Should be &lt;5%</li>
                <li><strong>Complaint rate:</strong> Should be &lt;0.5%</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4">Health Metrics</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li><strong>ISP placement:</strong> Track spam folder %</li>
                <li><strong>Domain age:</strong> Older domains = better rep</li>
                <li><strong>Unsubscribe rate:</strong> Should be &lt;1%</li>
                <li><strong>List quality:</strong> Are prospects actually ICP?</li>
                <li><strong>Meeting rate:</strong> What % of replies set calls?</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-slate-600 mt-6 italic">
            Track these in a simple Google Sheet week-to-week. You'll see patterns in what works.
          </p>
        </div>

        {/* Email Template Framework */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The Email Template Framework That Works</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-600 bg-white rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">Email #1: Cold Reach</h3>
              <p className="text-sm text-slate-600 mb-4">Subject: Specific reference to their company/role (not spammy)</p>
              <div className="bg-slate-50 p-4 rounded font-mono text-sm space-y-2">
                <p><strong>Subject:</strong> 30% of your content spend is probably wasted [Clay integration]</p>
                <p className="mt-3"><strong>Body:</strong></p>
                <p>Hi [FirstName],</p>
                <p>I noticed you're using [their tool] for content distribution at [company].</p>
                <p>We just worked with [similar company] to cut distribution time in half using [your product].</p>
                <p>Happy to send over a 2-minute demo if worth your time.</p>
                <p>[Your name]</p>
              </div>
              <p className="text-xs text-slate-600 mt-4">Length: 75-150 words. Clear but soft CTA.</p>
            </div>

            <div className="border-l-4 border-indigo-600 bg-white rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">Email #2: Follow-up (Day 4)</h3>
              <p className="text-sm text-slate-600 mb-4">Different angle-acknowledge lack of reply, offer lower-barrier value</p>
              <div className="bg-slate-50 p-4 rounded font-mono text-sm space-y-2">
                <p><strong>Subject:</strong> One more thing on the [topic] side</p>
                <p className="mt-3"><strong>Body:</strong></p>
                <p>Hey [FirstName],</p>
                <p>I get it, your inbox is chaos. Quick question: are you all handling [specific problem] right now, or already solved it?</p>
                <p>No pressure either way-just curious.</p>
                <p>[Your name]</p>
              </div>
              <p className="text-xs text-slate-600 mt-4">Length: 50-100 words. Lower barrier to reply.</p>
            </div>

            <div className="border-l-4 border-green-600 bg-white rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">Email #3: Final Touch (Day 8)</h3>
              <p className="text-sm text-slate-600 mb-4">Urgency + last chance positioning</p>
              <div className="bg-slate-50 p-4 rounded font-mono text-sm space-y-2">
                <p><strong>Subject:</strong> One more attempt: [specific value prop]</p>
                <p className="mt-3"><strong>Body:</strong></p>
                <p>Hi [FirstName],</p>
                <p>Last attempt from me. We're running [limited program] through [date] for [benefit].</p>
                <p>Might be relevant, might not. If it is, here's my calendar. If not, no worries-I'll stop emailing.</p>
                <p>[Your name]</p>
              </div>
              <p className="text-xs text-slate-600 mt-4">Length: 50-100 words. Clear exit clause.</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 mt-6 italic">
            <strong>Pro tip:</strong> Test these 3-email sequences with 30-50 people in Week 2. If reply rate is under 1%, rewrite. If 2%+, scale.
          </p>
        </div>

        {/* When to Pause */}
        <div className="mb-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">When to Pause and Fix (Don't Ignore These Signals)</h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">🚫</div>
              <div>
                <h3 className="font-bold text-slate-900">Open rate drops below 12%</h3>
                <p className="text-sm text-slate-700">Domain/authentication issue or bad targeting. Check SPF/DKIM, audit list quality, rewrite subjects.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">🚫</div>
              <div>
                <h3 className="font-bold text-slate-900">Bounce rate exceeds 10%</h3>
                <p className="text-sm text-slate-700">List quality issue. Use email verification tool before sending, get better list source.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">🚫</div>
              <div>
                <h3 className="font-bold text-slate-900">Spam complaint rate &gt; 0.5%</h3>
                <p className="text-sm text-slate-700">Copy is perceived as spammy. Rewrite templates, reduce hype, ensure clear unsubscribe.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">🚫</div>
              <div>
                <h3 className="font-bold text-slate-900">Zero replies for 7 consecutive days</h3>
                <p className="text-sm text-slate-700">Targeting or copy issue. Switch to warm/referral outreach, redesign email structure.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl flex-shrink-0">🚫</div>
              <div>
                <h3 className="font-bold text-slate-900">ISP bulk rejections</h3>
                <p className="text-sm text-slate-700">Reputation hit. Pause all sends for 24-48 hours, restart at 50% of previous volume.</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Long Game */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The 6-Month View: What Happens After Week 4</h2>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8">
            <p className="text-slate-700 mb-6">
              If you stay consistent at 200/day for 3-6 months, here's the math:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="text-2xl font-bold text-indigo-600">10-15</div>
                <div className="text-sm text-slate-600">Meetings/week</div>
                <div className="text-xs text-slate-500 mt-2">Months 1-2 (ramp + stabilization)</div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="text-2xl font-bold text-purple-600">15-20</div>
                <div className="text-sm text-slate-600">Meetings/week</div>
                <div className="text-xs text-slate-500 mt-2">Months 3-4 (repeat engagement)</div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="text-2xl font-bold text-green-600">20-30</div>
                <div className="text-sm text-slate-600">Meetings/week</div>
                <div className="text-xs text-slate-500 mt-2">Months 5-6 (optimization kicking in)</div>
              </div>
            </div>

            <p className="text-sm text-slate-700 italic">
              It's not magic-it's math. 200 emails/day at 2-3% CTR and 5% of clicks setting meetings = 20-30 meetings/month compounding into deals.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mb-16 bg-slate-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-3">Your next steps</h2>
          <p className="text-slate-200 mb-6">
            Start at 20 emails/day. Get the fundamentals clean. Scale to 200. Then optimize the hell out of it. That's the playbook.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/library" className="px-5 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all">
              Browse the Stack Library
            </a>
            <a href="/comparisons/instantly-vs-lemlist-vs-replyio" className="px-5 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all">
              Compare Email Tools
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantlyForBeginnersPage;
