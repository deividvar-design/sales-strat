import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, TrendingUp, Target, Clock, CheckCircle, BarChart3, Zap, Users, Filter, Phone, Mail, Sparkles, ArrowRight, Briefcase, LineChart, MapPin, Layers } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const FounderOutboundQualifyLeadsPage = () => {
  const canonical = 'https://saleshousestack.com/pages/founder-outbound-qualify-leads/';

  const metaTitle = 'Founder Outbound: How to Qualify Leads Without a Sales Team | Sales House';
  const metaDescription = 'Practical framework for solopreneurs and founders to qualify outbound leads without hiring a sales team. DIY lead qualification methodology for B2B SaaS founders doing their own sales.';
  const metaKeywords = 'founder sales, lead qualification, outbound sales, solopreneur sales, B2B SaaS, DIY sales, qualification framework, sales methodology';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Founder Outbound: How to Qualify Leads Without a Sales Team',
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
    datePublished: '2026-02-05',
    dateModified: '2026-02-05'
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
              Framework
            </div>
            <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-sm font-semibold text-indigo-700">
              Lead Qualification
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              DIY Sales
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Founder Outbound: How to Qualify Leads Without a Sales Team
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            The practical qualification framework I use to filter inbound and outbound leads as a solopreneur. No SDR required. No CRM complexity. Just a repeatable process that separates signal from noise.
          </p>
        </div>

        {/* The Problem */}
        <div className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">The founder's lead qualification problem</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                You're doing outbound. Great. You've sent 500 cold emails. You've got 50 replies. Now what?
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-3">
                You take every single one. They're all "qualified" by default because they responded. You spend 3 hours on discovery calls. 2 of them are actually interested. 48 were just being polite or curious about your product.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-3">
                You just burned 48 hours on tire-kickers while your actual sales-ready opportunities got buried in your calendar.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-red-200 text-sm text-slate-600">
            Most founders treat lead qualification like a yes/no gate. Either you talk to them or you don't. That's binary thinking. Qualification is a spectrum.
          </div>
        </div>

        {/* What This Is */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What this framework is</h2>
          <p className="text-lg text-slate-600 mb-6">
            This is a three-stage qualification model built specifically for founders doing their own sales. It's:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <div className="text-indigo-600 text-2xl mb-3">✓</div>
              <h3 className="font-bold text-slate-900 mb-2">Not a spreadsheet exercise</h3>
              <p className="text-slate-600 text-sm">No complex scoring models. No 10-field qualification form. Simple, binary yes/no decisions.</p>
            </div>

            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <div className="text-indigo-600 text-2xl mb-3">✓</div>
              <h3 className="font-bold text-slate-900 mb-2">Fast enough to use daily</h3>
              <p className="text-slate-600 text-sm">30-60 seconds per lead. You decide in one quick pass whether they're worth your time.</p>
            </div>

            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <div className="text-indigo-600 text-2xl mb-3">✓</div>
              <h3 className="font-bold text-slate-900 mb-2">Built on reality, not theory</h3>
              <p className="text-slate-600 text-sm">I've tested this with SaaS founders, agencies, and solo consultants. It works across verticals.</p>
            </div>
          </div>
        </div>

        {/* The Three-Stage Qualification Model */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The three-stage qualification model</h2>
          <p className="text-lg text-slate-600 mb-8">
            This is the exact framework I use. It has three gates. Most leads don't make it past gate one.
          </p>

          <div className="space-y-6">
            {/* Stage 1 */}
            <div className="border-l-4 border-indigo-600 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-indigo-600 text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Gate 1: Fit (Does this person match my ICP?)</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Before you spend a single minute on a discovery call, they need to fit your ideal customer profile. This is the 30-second filter.
                  </p>

                  <div className="bg-slate-50 border border-slate-300 rounded-lg p-4 mb-4">
                    <p className="text-sm font-bold text-slate-900 mb-3">Ask yourself:</p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">→</span> Is their company size in my range? (5-50 people, 50-500 people, etc.)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">→</span> Are they in a vertical I can help? (SaaS, agencies, e-commerce, B2B services)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">→</span> Can they afford me? (If I know budget, does it fit my ACV?)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">→</span> Is the person I'm talking to in the decision-making chain?
                      </li>
                    </ul>
                  </div>

                  <p className="text-slate-700 text-sm font-semibold mb-3">Why this matters:</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    You get a reply from a 2-person startup. You're targeting 20-100 person growth-stage companies. That's a <strong className="text-slate-900">fail at Gate 1</strong>. Close politely. Don't take the meeting. Time is your scarcest resource.
                  </p>

                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-xs font-bold text-green-900 mb-2">GATE 1 PASS:</p>
                    <p className="text-xs text-green-800">They fit your ICP and can reasonably buy from you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="border-l-4 border-amber-600 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-amber-600 text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Gate 2: Problem (Do they have a problem I can solve?)</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    They fit your ICP. Good. Now: do they actually care about what you sell? This is the discovery call filter.
                  </p>

                  <div className="bg-slate-50 border border-slate-300 rounded-lg p-4 mb-4">
                    <p className="text-sm font-bold text-slate-900 mb-3">Listen for:</p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">→</span> Unprompted mentions of a problem you solve (not just responding to your pitch)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">→</span> Evidence they've thought about this. They've already tried something, even if it failed.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">→</span> Budget language: "We're looking to invest" vs. "Yeah, that might be nice"
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">→</span> Urgency: Are they solving this now, or "someday"?
                      </li>
                    </ul>
                  </div>

                  <p className="text-slate-700 text-sm font-semibold mb-3">What kills a prospect at Gate 2:</p>
                  <ul className="space-y-2 text-slate-600 text-sm mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span> "I don't really have that problem" — They're being nice. Don't pursue.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span> "Maybe in a few quarters" — Indefinite timeline. Not now.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span> No budget discussion, and you can't determine ability to pay — Hard no.
                    </li>
                  </ul>

                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-xs font-bold text-green-900 mb-2">GATE 2 PASS:</p>
                    <p className="text-xs text-green-800">They have a real problem, they've thought about solving it, and there's a potential budget.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="border-l-4 border-green-600 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-green-600 text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Gate 3: Fit (Do they want to buy from me specifically?)</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    They have a real problem. They want to solve it. Final question: Do they see your solution as the right answer? This is the second call or proposal stage.
                  </p>

                  <div className="bg-slate-50 border border-slate-300 rounded-lg p-4 mb-4">
                    <p className="text-sm font-bold text-slate-900 mb-3">Look for:</p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">→</span> Do they see YOUR solution as the best option (vs. competitor or DIY)?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">→</span> Are they comparing you fairly, or are you overpriced in their eyes?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">→</span> Is the timeline still active? (Not "maybe next quarter")
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">→</span> What would close them? A discount? A feature they don't have? Proof points?
                      </li>
                    </ul>
                  </div>

                  <p className="text-slate-700 text-sm font-semibold mb-3">What kills a prospect at Gate 3:</p>
                  <ul className="space-y-2 text-slate-600 text-sm mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span> "I need to think about it" + no timeline → They're not serious.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span> They're comparing you to a cheap DIY alternative → Not your customer.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span> You discover you can't deliver on their needs → Better to know now.
                    </li>
                  </ul>

                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-xs font-bold text-green-900 mb-2">GATE 3 PASS:</p>
                    <p className="text-xs text-green-800">They want to buy from you, and the deal structure works. Move to closing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Example */}
        <div className="mb-12 bg-indigo-50 rounded-2xl border border-indigo-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            Real example: Why I passed on a "qualified" lead
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-indigo-200 p-5">
              <p className="text-sm font-bold text-indigo-700 mb-2">THE INBOUND</p>
              <p className="text-slate-700 leading-relaxed">
                Director of Sales at a 120-person Series A SaaS company replies to my cold email: "This is interesting. We've been looking at solutions like this. Let's hop on a call."
              </p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-indigo-600" />
            </div>

            <div className="bg-white rounded-lg border border-indigo-200 p-5">
              <p className="text-sm font-bold text-indigo-700 mb-2">GATE 1 CHECK: FIT</p>
              <p className="text-slate-700 mb-3">
                ✓ 120-person company = right size
                <br />
                ✓ SaaS company = right vertical
                <br />
                ✓ Director of Sales = decision-maker
              </p>
              <p className="text-xs font-bold text-green-700 bg-green-100 inline-block px-2 py-1 rounded">PASS</p>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-amber-600" />
            </div>

            <div className="bg-white rounded-lg border border-indigo-200 p-5">
              <p className="text-sm font-bold text-amber-700 mb-2">GATE 2 CHECK: PROBLEM</p>
              <p className="text-slate-700 mb-3">
                On the call, I ask "What's your biggest blocker right now?" She says: "Honestly, we don't have a blocker yet. We're exploring options for next year."
              </p>
              <p className="text-slate-700 mb-3">
                Translation: No urgency. No real problem. Just research.
              </p>
              <p className="text-xs font-bold text-red-700 bg-red-100 inline-block px-2 py-1 rounded">FAIL</p>
            </div>

            <div className="bg-slate-100 border border-slate-300 rounded-lg p-5 text-sm text-slate-700">
              <p className="font-bold text-slate-900 mb-2">MY DECISION</p>
              <p>
                I thank her for the conversation. I tell her I'd love to reconnect in Q2 when they're actively evaluating. I add her to a low-touch email sequence.
              </p>
              <p className="mt-2">
                <strong className="text-slate-900">I don't spend 3 hours trying to convince her.</strong> Her problem isn't real enough yet.
              </p>
            </div>
          </div>
        </div>

        {/* How to implement this */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How to implement this (literally, today)</h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Define your ICP explicitly</h3>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    You need to know your ideal customer profile before you can qualify anyone. This isn't optional.
                  </p>

                  <div className="bg-white border border-slate-300 rounded-lg p-4 mb-3">
                    <p className="text-sm font-bold text-slate-900 mb-3">Write down (in a document or Notion):</p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Company size (headcount range)</li>
                      <li>• Industries / verticals you target</li>
                      <li>• Job title of decision-maker</li>
                      <li>• Revenue or funding stage</li>
                      <li>• Pain points they experience</li>
                      <li>• Minimum viable contract value</li>
                    </ul>
                  </div>

                  <p className="text-xs text-slate-600 italic">
                    Spend 30 minutes on this. It'll save you 10 hours of bad meetings this quarter.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Create a 30-second Gate 1 checklist</h3>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    When you get an inbound lead or before you commit to a call, run them through this filter.
                  </p>

                  <div className="bg-white border border-slate-300 rounded-lg p-4 mb-3 font-mono text-sm">
                    <p className="font-bold text-slate-900 mb-3">☐ Company size matches ICP?</p>
                    <p className="font-bold text-slate-900 mb-3">☐ Industry is on my target list?</p>
                    <p className="font-bold text-slate-900 mb-3">☐ Person's role is in the decision chain?</p>
                    <p className="font-bold text-slate-900">☐ Can they likely afford me?</p>
                  </div>

                  <p className="text-xs text-slate-600">
                    If ANY of these are "no," you have permission to decline the meeting. Be polite, but don't take it.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">On Gate 2 discovery calls, ask about problem urgency</h3>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    Stop pitching. Start listening. Ask three specific questions.
                  </p>

                  <div className="bg-white border border-slate-300 rounded-lg p-4 space-y-3 mb-3">
                    <div>
                      <p className="font-bold text-slate-900 text-sm mb-1">"What's your biggest blocker right now?"</p>
                      <p className="text-xs text-slate-600">They either describe a real problem or dodge. Listen for the dodge.</p>
                    </div>
                    <div className="border-t border-slate-200 pt-3">
                      <p className="font-bold text-slate-900 text-sm mb-1">"When do you need to solve this?"</p>
                      <p className="text-xs text-slate-600">"Now" or "Q1" = real. "Someday" = pass.</p>
                    </div>
                    <div className="border-t border-slate-200 pt-3">
                      <p className="font-bold text-slate-900 text-sm mb-1">"What's your budget for a solution?"</p>
                      <p className="text-xs text-slate-600">They'll either name a number or say "not sure." Either way, you get signal.</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 italic">
                    Don't be shy about money. Broke prospects waste more time than any other lead type.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Track your decisions</h3>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    Keep a simple log: Name, Company, Gate 1/2/3, Decision, Notes. It takes 20 seconds per lead.
                  </p>

                  <div className="bg-white border border-slate-300 rounded-lg p-4 overflow-x-auto mb-3">
                    <table className="text-xs w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left font-bold text-slate-900 pb-2">Name</th>
                          <th className="text-left font-bold text-slate-900 pb-2">Company</th>
                          <th className="text-left font-bold text-slate-900 pb-2">Gate</th>
                          <th className="text-left font-bold text-slate-900 pb-2">Decision</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700">
                        <tr className="border-b border-slate-200">
                          <td className="py-2">Sarah</td>
                          <td>TechCorp Inc</td>
                          <td>Gate 1</td>
                          <td className="text-green-600">✓ Pass</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="py-2">Mike</td>
                          <td>Startup Ltd</td>
                          <td>Gate 1</td>
                          <td className="text-red-600">✗ Fail (too small)</td>
                        </tr>
                        <tr>
                          <td className="py-2">Lisa</td>
                          <td>Enterprise Co</td>
                          <td>Gate 2</td>
                          <td className="text-red-600">✗ Fail (no urgency)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-600">
                    Why? After 20 conversations, you'll see patterns. "Oh, I keep talking to people from small startups and they never close." Now you fix it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Mistake You're Probably Making */}
        <div className="mb-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600" />
            The mistake you're probably making
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-yellow-300 p-5">
              <p className="font-bold text-slate-900 mb-2">You're trying to close every lead.</p>
              <p className="text-slate-600">
                This is the founder's trap. You think every reply is potential revenue. So you pitch, and pitch, and pitch. Then you're amazed when people ghost.
              </p>
              <p className="text-slate-700 font-semibold mt-3">Better approach:</p>
              <p className="text-slate-600">
                Fail fast. If someone doesn't pass Gate 2, tell them so. "Hey, it sounds like you're exploring options for next year. I'm looking to work with people who need to solve this now. Let's reconnect in Q2." Then move on.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-yellow-300 p-5">
              <p className="font-bold text-slate-900 mb-2">You're qualifying based on politeness.</p>
              <p className="text-slate-600">
                Someone responded to your email, so they must be interested, right? No. Maybe they're just being nice. Or curious. Or the person who replied isn't even the decision-maker.
              </p>
              <p className="text-slate-700 font-semibold mt-3">Better approach:</p>
              <p className="text-slate-600">
                A response is just the start. Use that first conversation to confirm Gate 1. Is this person actually in a position to buy? Can they afford you?
              </p>
            </div>

            <div className="bg-white rounded-lg border border-yellow-300 p-5">
              <p className="font-bold text-slate-900 mb-2">You're not saying "no" enough.</p>
              <p className="text-slate-600">
                You take every meeting because you're worried about missing the one deal that could change your year. So you take 50 "maybes" to find one real opportunity.
              </p>
              <p className="text-slate-700 font-semibold mt-3">Better approach:</p>
              <p className="text-slate-600">
                Being selective makes you more effective. When you only pitch to people who pass Gate 1 AND Gate 2, your close rate goes UP. Because you're talking to people who actually have a problem.
              </p>
            </div>
          </div>
        </div>

        {/* Qualification vs. Disqualification */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">A perspective shift: Qualification is disqualification</h2>

          <div className="bg-slate-100 border border-slate-300 rounded-lg p-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Here's the mindset change that will save you the most time:
            </p>

            <div className="bg-white border border-slate-300 rounded-lg p-6 mb-6">
              <p className="text-slate-600 italic mb-3">
                "Qualification is the process of figuring out who you should NOT talk to."
              </p>
              <p className="text-slate-600">
                The three gates are really three rejection filters. Gate 1 rejects people outside your ICP. Gate 2 rejects people without real problems. Gate 3 rejects people who won't buy from you.
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Most founders think of qualification as "how do I keep this lead warm?" They should be thinking "how do I eliminate waste?"
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">
              If you're a solopreneur with 20 hours per week to sell, and you have 50 inbound leads, you can't talk to all 50. You MUST disqualify 40. Otherwise, you'll spend 40 hours on bad leads and zero hours on good ones.
            </p>

            <p className="text-slate-700 leading-relaxed font-semibold text-indigo-700">
              Disqualify ruthlessly. Your best opportunities will thank you for the focused attention.
            </p>
          </div>
        </div>

        {/* Speed Matters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why speed matters in qualification</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Slow qualification:</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <p>Week 1: Get inbound reply</p>
                <p>Week 2: Schedule a call</p>
                <p>Week 3: Take the call (1 hour)</p>
                <p>Week 4: Send a proposal</p>
                <p>Week 5: Realize they're not serious</p>
                <p className="font-bold text-red-700 pt-3">Total: 5 weeks per dead lead</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 text-lg">Fast qualification:</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <p>Day 1: Get inbound reply</p>
                <p>Day 1: 30-second Gate 1 check</p>
                <p>Day 1: Politely reject if fail</p>
                <p>Day 1: Move to next lead</p>
                <p className="font-bold text-green-700 pt-3">Total: 2 minutes per dead lead</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">The math:</strong> 50 inbound leads. Using slow qualification, 40 of them fail at week 5 (after you've spent 200 hours on calls). Using fast qualification, 40 of them fail by day 1 (after you've spent 80 minutes total). That's 120 hours recovered in ONE quarter.
            </p>
          </div>
        </div>

        {/* How to Say No */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How to say no without burning bridges</h2>

          <p className="text-lg text-slate-600 mb-8">
            You'll reject a lot of people. Do it well.
          </p>

          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <p className="font-bold text-slate-900 mb-3">Gate 1 rejection (not a fit):</p>
              <div className="bg-white border border-slate-300 rounded-lg p-4 font-mono text-sm mb-3">
                <p className="text-slate-700 leading-relaxed">
                  "Hey [Name], thanks so much for getting back to me. Based on our conversation, I think you might be better served by [alternative solution or competitor]. I don't want to position something that isn't the right fit. Best of luck!"
                </p>
              </div>
              <p className="text-sm text-slate-600">This is fast, kind, and removes them without guilt.</p>
            </div>

            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <p className="font-bold text-slate-900 mb-3">Gate 2 rejection (no urgency):</p>
              <div className="bg-white border border-slate-300 rounded-lg p-4 font-mono text-sm mb-3">
                <p className="text-slate-700 leading-relaxed">
                  "It sounds like you're exploring options for down the road. I'm specifically working with people who need to solve [problem] in the next 60 days. Let's stay connected—I'll reach out in Q2 when you're ready."
                </p>
              </div>
              <p className="text-sm text-slate-600">This buys you permission to follow up later without being pushy.</p>
            </div>

            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <p className="font-bold text-slate-900 mb-3">Gate 3 rejection (wrong solution):</p>
              <div className="bg-white border border-slate-300 rounded-lg p-4 font-mono text-sm mb-3">
                <p className="text-slate-700 leading-relaxed">
                  "I appreciate the conversation. It's clear you're looking for [feature/capability] that we don't offer. [Competitor] might be better positioned. I want to recommend the right solution, even if it's not us."
                </p>
              </div>
              <p className="text-sm text-slate-600">This builds trust. Ironically, people often ask you about it later because you were honest.</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
            <p className="text-slate-700">
              <strong className="text-slate-900">Key principle:</strong> You're not rejecting them as people. You're protecting both of your time by acknowledging fit. Do this well, and they'll respect you. Some will even refer you to people who ARE a fit.
            </p>
          </div>
        </div>

        {/* What You Should Track */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What you should track (and why)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <p className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                The math:
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-bold text-slate-900">Gate 1 pass rate</p>
                  <p className="text-slate-600">% of leads matching your ICP</p>
                </div>
                <div className="border-t border-slate-300 pt-3">
                  <p className="font-bold text-slate-900">Gate 2 pass rate</p>
                  <p className="text-slate-600">% of Gate 1 leads with real problems</p>
                </div>
                <div className="border-t border-slate-300 pt-3">
                  <p className="font-bold text-slate-900">Gate 3 close rate</p>
                  <p className="text-slate-600">% of Gate 2 leads that buy</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white border border-slate-300 rounded-lg">
                <p className="text-xs font-bold text-slate-700 mb-2">EXAMPLE:</p>
                <p className="text-xs text-slate-600">50 leads → 30 Gate 1 (60%) → 15 Gate 2 (50%) → 6 closed (40%) = 12% conversion</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-300 rounded-lg p-6">
              <p className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                Why it matters:
              </p>
              <div className="space-y-3 text-sm">
                <p className="text-slate-700">
                  <strong>Low Gate 1 pass rate?</strong> Your ICP is wrong or your outbound targeting is bad. Fix targeting.
                </p>
                <p className="text-slate-700">
                  <strong>Low Gate 2 pass rate?</strong> You're attracting people without real problems. Change your pitch or targeting.
                </p>
                <p className="text-slate-700">
                  <strong>Low Gate 3 close rate?</strong> Your solution doesn't actually deliver what people need. Fix your product or pricing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Four mistakes people make with this framework</h2>

          <div className="space-y-4">
            <div className="bg-white border border-slate-300 rounded-lg p-6">
              <p className="font-bold text-slate-900 mb-3">1. They make the gates too complicated</p>
              <p className="text-slate-600">
                The entire point is simplicity. You don't need a 10-field scoring model. Just: Do they fit? Do they have a problem? Can they buy from me?
              </p>
            </div>

            <div className="bg-white border border-slate-300 rounded-lg p-6">
              <p className="font-bold text-slate-900 mb-3">2. They skip Gate 1</p>
              <p className="text-slate-600">
                Someone replies to your email, so you assume they're interested. Wrong. They might be outside your ICP. Take 30 seconds to check the basics BEFORE booking a call.
              </p>
            </div>

            <div className="bg-white border border-slate-300 rounded-lg p-6">
              <p className="font-bold text-slate-900 mb-3">3. They soften the language at Gate 2</p>
              <p className="text-slate-600">
                Instead of asking "When do you need to solve this?" they ask "What does your timeline look like?" The vague language gets vague answers. Be direct.
              </p>
            </div>

            <div className="bg-white border border-slate-300 rounded-lg p-6">
              <p className="font-bold text-slate-900 mb-3">4. They pursue leads too far into Gate 3</p>
              <p className="text-slate-600">
                Someone fails the "right solution" test, but you keep pitching anyway. They don't want you. Accept it. Move to the next lead.
              </p>
            </div>
          </div>
        </div>

        {/* Wrapping Up */}
        <div className="mb-12 bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6">The bottom line</h2>

          <p className="text-lg leading-relaxed mb-6">
            Qualification is the lever that changes everything about your sales process. Most founders miss this because they're addicted to the metric of "inbound leads" instead of the metric that matters: "sales-ready deals."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            If you implement this framework properly, you'll:
          </p>

          <ul className="space-y-3 text-lg mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
              <span>Cut your sales cycle by 30-50% (because you're talking to better prospects)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
              <span>Increase your close rate by being selective</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
              <span>Recover 100+ hours per quarter that would've been wasted on tire-kickers</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
              <span>Actually enjoy selling because you're only talking to people who matter</span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed">
            The hardest part isn't the framework. It's saying no to people who reply to your email. But that's exactly what separates founders who build sustainable sales pipelines from founders who spend all their time chasing dust.
          </p>

          <p className="text-lg leading-relaxed mt-6 italic">
            Start with your ICP. Then filter ruthlessly. Then close the ones who actually want what you have.
          </p>
        </div>

        {/* David's Credibility Box */}
        <div className="mb-12 bg-slate-100 border border-slate-300 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-indigo-700 uppercase tracking-wider mb-2">About the author</p>
              <p className="text-slate-900 font-bold text-lg mb-2">David Varan</p>
              <p className="text-slate-700 leading-relaxed mb-4">
                I've built and scaled outbound sales processes for B2B SaaS companies from $0-5M ARR. I've personally qualified thousands of leads—and rejected thousands more. This framework is the result of 6+ years of doing this work, not theorizing about it.
              </p>
              <p className="text-slate-700 mb-4">
                I share this because the worst part of early-stage founder sales is spinning your wheels on bad leads. I want you to stop doing that.
              </p>
              <a
                href="https://www.linkedin.com/in/davidvaran/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-12 bg-indigo-50 border border-indigo-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Next step: Build your qualification framework</h3>
          <p className="text-slate-600 text-lg mb-6 max-w-2xl mx-auto">
            Spend 30 minutes defining your ICP and the three gates. It'll be the best 30 minutes you spend on sales this month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/davidvaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              Questions? Email me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderOutboundQualifyLeadsPage;
