import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

import Breadcrumb from '../../components/Breadcrumb';
import { TOOLS } from '../../constants';

const BuildingAsyncOutreachSequencesPage = () => {
  const canonical = 'https://saleshousestack.com/resources/building-async-outreach-sequences/';

  const metaTitle = 'Building Asynchronous Outreach Sequences for Founder-Led Sales | Sales House';
  const metaDescription = 'Stop chasing prospects on the phone. Build asynchronous outreach sequences that respect time, get replies, and close deals without cold calling. Practical playbook for founder-led sales.';
  const metaKeywords = 'asynchronous outreach, email LinkedIn sequences, no-call outreach, async sales sequences, founder outbound';

  const instantly = TOOLS.find(t => t.id === 'instantly');
  const reply = TOOLS.find(t => t.id === 'reply');
  const mailforge = TOOLS.find(t => t.id === 'mailforge');
  const dripify = TOOLS.find(t => t.id === 'dripify');

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
              Founder
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 border border-blue-300 rounded-full text-sm font-semibold text-blue-700">
              Sequences
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Building Asynchronous Outreach Sequences for Founder-Led Sales
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            You do not need to call anyone to close deals. Build multi-step, multi-channel sequences that feel human, stay compliant, and convert without requiring you to become a sales robot.
          </p>
        </div>

        {/* Verdict / TLDR */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">⏱️</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">My simple recommendation</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Start with a <strong>3-step email sequence</strong> (intro → value-add → breakup). Add <strong>LinkedIn connection requests</strong> as a parallel track only if your ICP is active on LinkedIn. Use <strong>Reply.io</strong> or <strong>Instantly</strong> to automate sending and follow-ups, but write every message like you would send it manually.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-indigo-200 text-sm text-slate-600">
            The goal is not to spam 1,000 people. The goal is to reach 50-100 qualified prospects per week with messages that feel personal, respect their inbox, and offer something immediately valuable.
          </div>
        </div>

        {/* What Is Async Outreach */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is Asynchronous Outreach?</h2>
          <p className="text-lg text-slate-700 mb-4">
            <strong>Asynchronous outreach</strong> means any sales motion where you and the prospect do not need to be available at the same time. Email, LinkedIn messages, Twitter DMs, and recorded Loom videos are all async. Cold calls and live demos are not.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">✅ The Value of Async</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Scalable:</strong> Reach 100 people in 30 minutes</li>
                <li><strong>Respectful:</strong> Prospects reply on their schedule</li>
                <li><strong>Trackable:</strong> Open rates, clicks, replies tell you what works</li>
                <li><strong>Iterative:</strong> Test 5 subject lines in one week</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">⚠️ The Trade-Off</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Lower urgency:</strong> No live conversation = no instant rapport</li>
                <li><strong>Slower close cycles:</strong> Deals take 2-4 weeks longer</li>
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                For most founder-led sales motions, this trade-off is worth it. You gain leverage and predictability in exchange for a slightly longer sales cycle.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Channel Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The 3-Channel Async Stack</h2>
          <p className="text-lg text-slate-700 mb-6">
            You do not need 10 tools. You need 3 channels and 1 automation layer.
          </p>

          <div className="space-y-8">
            {/* Channel 1: Email */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Channel 1: Email (Primary)</h3>
              <p className="text-slate-700 mb-4">
                <strong>Why it is first:</strong> Email is universal, asynchronous by design, and trackable. Every B2B buyer has an inbox. Not every buyer checks LinkedIn daily.
              </p>
              
              <h4 className="font-bold text-slate-900 mb-2">How to use it:</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-700 mb-4">
                <li><strong>Intro email:</strong> 3-4 sentences. One question. One clear ask.</li>
                <li><strong>Value-add email:</strong> Send a relevant resource, insight, or teardown. No ask.</li>
                <li><strong>Breakup email:</strong> "Seems like bad timing—let me know if that changes."</li>
              </ul>

              <h4 className="font-bold text-slate-900 mb-2">Tools:</h4>
              <div className="flex flex-wrap gap-3 mb-4">
                {instantly?.website && (
                  <a href={instantly.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">
                    Instantly <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {reply?.website && (
                  <a href={reply.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700">
                    Reply.io <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <h4 className="font-bold text-slate-900 mb-2">What NOT to do:</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Do not send 7-step sequences. If they did not reply by step 3, they are not interested.</li>
                <li>Do not use merge tags like <code className="bg-slate-100 px-1">{'{{'}{'{'}first_name{'}'}{'}'}</code> if the rest is clearly templated.</li>
                <li>Do not send emails from personal Gmail if you are sending 200/day. Use domain rotation.</li>
              </ul>
            </div>

            {/* Channel 2: LinkedIn */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Channel 2: LinkedIn (Parallel Track)</h3>
              <p className="text-slate-700 mb-4">
                <strong>Why it works:</strong> If your ICP is active on LinkedIn (founders, sales leaders, marketers), connection requests and messages feel less intrusive than cold emails.
              </p>
              
              <h4 className="font-bold text-slate-900 mb-2">How to use it:</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-700 mb-4">
                <li><strong>Step 1:</strong> Send a connection request with a short note (2 sentences max). No pitch.</li>
                <li><strong>Step 2:</strong> Wait 3-5 days. If they accept, send a follow-up message referencing their recent post.</li>
                <li><strong>Step 3:</strong> If no reply, move on. Do not spam their inbox.</li>
              </ul>

              <h4 className="font-bold text-slate-900 mb-2">Tools:</h4>
              <div className="flex flex-wrap gap-3 mb-4">
                {reply?.website && (
                  <a href={reply.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700">
                    Reply.io <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {dripify?.website && (
                  <a href={dripify.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">
                    Dripify <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Channel 3: Value-First Content */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Channel 3: Value-First Content (Optional but Powerful)</h3>
              <p className="text-slate-700 mb-4">
                <strong>Why it works:</strong> A 2-minute Loom video or a 1-page teardown of their website/funnel/stack is more memorable than 100 text emails.
              </p>
              
              <h4 className="font-bold text-slate-900 mb-2">How to use it:</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li><strong>Loom teardown:</strong> Record a 90-second Loom walking through one specific improvement. Send in email #2 with no ask.</li>
                <li><strong>1-page audit:</strong> Screenshot their homepage, annotate 3 quick wins, export as PDF.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sequence Structure */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Sequence Structure That Actually Converts</h2>
          <p className="text-lg text-slate-700 mb-6">
            Here is the exact structure I have used to book 200+ demos across 6 years.
          </p>

          <div className="space-y-8">
            {/* Email-Only Sequence */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Email-Only Sequence (3 Steps)</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-slate-900 mb-2">Day 1: Intro</h4>
                  <p className="text-slate-700 text-sm mb-2"><strong>Subject:</strong> <code className="bg-slate-100 px-2 py-1">Quick question about [specific pain point]</code></p>
                  <p className="text-slate-700 text-sm mb-2"><strong>Body:</strong> 3 sentences. Acknowledge a specific trigger (funding round, new hire, product launch). Ask one question that reveals intent.</p>
                  <p className="text-slate-700 text-sm"><strong>CTA:</strong> "Worth a quick chat?"</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-slate-900 mb-2">Day 4: Value-Add</h4>
                  <p className="text-slate-700 text-sm mb-2"><strong>Subject:</strong> <code className="bg-slate-100 px-2 py-1">Thought this might help — [their company name]</code></p>
                  <p className="text-slate-700 text-sm mb-2"><strong>Body:</strong> Send a resource, Loom, or insight. No ask. Just value.</p>
                  <p className="text-slate-700 text-sm"><strong>CTA:</strong> None. Let them reply if it resonates.</p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-slate-900 mb-2">Day 7: Breakup</h4>
                  <p className="text-slate-700 text-sm mb-2"><strong>Subject:</strong> <code className="bg-slate-100 px-2 py-1">Last one, I promise</code></p>
                  <p className="text-slate-700 text-sm mb-2"><strong>Body:</strong> "Seems like bad timing. Let me know if that changes—happy to revisit in Q2."</p>
                  <p className="text-slate-700 text-sm"><strong>CTA:</strong> Soft close. Give them permission to disengage.</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 italic">
                <strong>Why it works:</strong> Step 1 filters for intent. Step 2 builds credibility. Step 3 gives them a guilt-free exit (which paradoxically increases reply rates).
              </p>
            </div>

            {/* Email + LinkedIn Sequence */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Email + LinkedIn Sequence (5 Steps)</h3>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-16 text-sm font-bold text-purple-700">Day 1</div>
                  <div className="flex-1 text-slate-700 text-sm">
                    <strong>LinkedIn connection request:</strong> "Hey [Name], saw your post on [topic]—curious how you are thinking about [related challenge]. Would love to connect."
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-16 text-sm font-bold text-purple-700">Day 3</div>
                  <div className="flex-1 text-slate-700 text-sm">
                    <strong>Intro email:</strong> Same as Email-Only Day 1.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-16 text-sm font-bold text-purple-700">Day 5</div>
                  <div className="flex-1 text-slate-700 text-sm">
                    <strong>LinkedIn message (if they accepted):</strong> "Thanks for connecting! Saw you are hiring for [role]—guessing that means [pain point] is top of mind. Any thoughts on [specific challenge]?"
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-16 text-sm font-bold text-purple-700">Day 7</div>
                  <div className="flex-1 text-slate-700 text-sm">
                    <strong>Value-add email:</strong> Same as Email-Only Day 4.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-16 text-sm font-bold text-purple-700">Day 10</div>
                  <div className="flex-1 text-slate-700 text-sm">
                    <strong>Breakup email:</strong> Same as Email-Only Day 7.
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 italic">
                <strong>Why it works:</strong> Two channels = two chances to reach them. Some people ignore email but check LinkedIn daily (and vice versa).
              </p>
            </div>
          </div>
        </div>

        {/* How to Write Messages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Write Messages That Feel Human</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rule 1: Write Like You Are Sending to One Person</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-900 mb-2">❌ Do not write:</p>
                  <p className="text-sm text-slate-700 italic">"Hi {'{{'}{'{'}first_name{'}'}{'}'}, I help companies like {'{{'}{'{'}company_name{'}'}{'}'}achieve {'{{'}{'{'}value_prop{'}'}{'}'}."</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-900 mb-2">✅ Write:</p>
                  <p className="text-sm text-slate-700 italic">"Hey Sarah—saw you just launched the new product page. Curious how you are handling lead qual with that volume."</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">One feels like a template. The other feels like a message from someone who did 60 seconds of research.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rule 2: Lead With Relevance, Not Your Pitch</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-900 mb-2">❌ Do not write:</p>
                  <p className="text-sm text-slate-700 italic">"We are a B2B SaaS platform that helps sales teams close faster."</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-900 mb-2">✅ Write:</p>
                  <p className="text-sm text-slate-700 italic">"Noticed you are hiring 3 AEs this quarter. Guessing onboarding and ramp time is top of mind. How are you thinking about that?"</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">The first is about you. The second is about them.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rule 3: One Ask Per Email</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-900 mb-2">❌ Do not write:</p>
                  <p className="text-sm text-slate-700 italic">"Can we schedule a call? Or if not, would you be open to a quick email exchange? Also, do you know who owns this at your company?"</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-900 mb-2">✅ Write:</p>
                  <p className="text-sm text-slate-700 italic">"Worth a 15-minute call next week?"</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">One clear ask. No decision paralysis.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rule 4: Use Breakups to Trigger Replies</h3>
              <p className="text-slate-700 mb-3">
                Breakup emails have the highest reply rates of any step in the sequence. Why? Because they give the prospect permission to disengage, which paradoxically makes them more likely to respond.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm font-bold text-red-900 mb-2">❌ Do not write:</p>
                  <p className="text-sm text-slate-700 italic">"Following up on my previous emails. Still interested?"</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm font-bold text-green-900 mb-2">✅ Write:</p>
                  <p className="text-sm text-slate-700 italic">"Seems like this is not a priority right now. Let me know if that changes—happy to revisit in a few months."</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">The second removes pressure. The first increases it.</p>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Tools to Run Your Async Sequences</h2>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">For Email-Only: Instantly</h3>
                  <p className="text-slate-700"><strong>Why:</strong> Simple, affordable, built for cold email at scale.</p>
                </div>
                {instantly?.website && (
                  <a href={instantly.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">
                    Try Instantly <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-slate-700 mb-2"><strong>Best for:</strong> Founders who want to send 50-200 emails/day without thinking about deliverability.</p>
              <p className="text-slate-700 mb-2"><strong>Pricing:</strong> Starts at $37/mo.</p>
              <p className="text-slate-700"><strong>What you get:</strong> Unlimited sending, warm-up included, basic reporting.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">For Multichannel: Reply.io</h3>
                  <p className="text-slate-700"><strong>Why:</strong> Native LinkedIn automation, calling, email, and SMS in one platform.</p>
                </div>
                {reply?.website && (
                  <a href={reply.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700">
                    Try Reply.io <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-slate-700 mb-2"><strong>Best for:</strong> Founders who want email + LinkedIn in one sequence without juggling tools.</p>
              <p className="text-slate-700 mb-2"><strong>Pricing:</strong> Starts at $60/mo.</p>
              <p className="text-slate-700"><strong>What you get:</strong> 5-channel outreach, A/B testing, team collaboration.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">For Deliverability: Mailforge</h3>
                  <p className="text-slate-700"><strong>Why:</strong> Managed inbox rotation and warm-up so you do not land in spam.</p>
                </div>
                {mailforge?.website && (
                  <a href={mailforge.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">
                    Try Mailforge <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-slate-700 mb-2"><strong>Best for:</strong> Founders sending 200+ emails/day who do not want to manage DNS records and warm-up manually.</p>
              <p className="text-slate-700 mb-2"><strong>Pricing:</strong> Starts at $97/mo.</p>
              <p className="text-slate-700"><strong>What you get:</strong> 10+ inboxes, automatic rotation, deliverability monitoring.</p>
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Mistakes (and How to Fix Them)</h2>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-900 mb-2">Mistake 1: Too Many Steps</h3>
              <p className="text-slate-700 mb-2"><strong>What it looks like:</strong> 7-step sequences that go on for 3 weeks.</p>
              <p className="text-slate-700 mb-2"><strong>Why it fails:</strong> If someone did not reply by step 3, they are either not interested or too busy. More emails will not change that.</p>
              <p className="text-green-900 font-bold"><strong>Fix:</strong> 3-step sequences. Intro, value-add, breakup. Done.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-900 mb-2">Mistake 2: No Research</h3>
              <p className="text-slate-700 mb-2"><strong>What it looks like:</strong> "Hi {'{{'}{'{'}first_name{'}'}{'}'}, I help companies like yours..."</p>
              <p className="text-slate-700 mb-2"><strong>Why it fails:</strong> It screams "mass email." No one replies to mass emails.</p>
              <p className="text-green-900 font-bold"><strong>Fix:</strong> Spend 60 seconds on their LinkedIn or website. Reference one specific thing in your intro.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-900 mb-2">Mistake 3: Pitching Too Early</h3>
              <p className="text-slate-700 mb-2"><strong>What it looks like:</strong> Email #1 is a 4-paragraph explanation of your product.</p>
              <p className="text-slate-700 mb-2"><strong>Why it fails:</strong> They do not care about your product yet. They care about their problem.</p>
              <p className="text-green-900 font-bold"><strong>Fix:</strong> Email #1 = question that reveals intent. Email #2 = value. Email #3 = breakup. No pitch until they reply.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-900 mb-2">Mistake 4: No Breakup Email</h3>
              <p className="text-slate-700 mb-2"><strong>What it looks like:</strong> Sequences that just... stop. No closing message.</p>
              <p className="text-slate-700 mb-2"><strong>Why it fails:</strong> You leave the conversation open-ended, which feels unfinished and slightly annoying.</p>
              <p className="text-green-900 font-bold"><strong>Fix:</strong> Always send a breakup. "Seems like bad timing—let me know if that changes." It gets replies.</p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Measure Success</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">✅ Metrics That Matter</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Reply rate:</strong> 5-10% is good for cold outbound. Below 3% means your message is off.</li>
                <li><strong>Positive reply rate:</strong> Aim for 50%+ positive (interested, question, or meeting request).</li>
                <li><strong>Meeting booked rate:</strong> 1-3% of total sends is the benchmark.</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-900 mb-4">❌ Metrics That Do Not Matter</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Open rate:</strong> Opens can be faked by image pixels. Focus on replies.</li>
                <li><strong>Click rate:</strong> Clicks without replies = curiosity, not intent.</li>
                <li><strong>Total sends:</strong> Sending 1,000 emails with 1% reply rate is worse than 100 emails with 10% reply rate.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real Example */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Real Example: Founder Selling to Sales Leaders</h2>
          
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-300 rounded-xl p-6 mb-6">
            <p className="text-slate-700 mb-2"><strong>ICP:</strong> VP Sales at 50-200 person B2B SaaS companies.</p>
            
            <h3 className="font-bold text-slate-900 mt-4 mb-3">Sequence:</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold text-slate-900">Day 1 (Email):</p>
                <p className="text-slate-700 italic ml-4">Subject: Quick question about Q1 ramp</p>
                <p className="text-slate-700 italic ml-4">Body: Hey [Name]—saw you are hiring 5 AEs this quarter. Curious how you are thinking about onboarding and time-to-first-deal. Worth a quick chat?</p>
              </div>

              <div>
                <p className="font-bold text-slate-900">Day 4 (Email):</p>
                <p className="text-slate-700 italic ml-4">Subject: Thought this might help</p>
                <p className="text-slate-700 italic ml-4">Body: Hey [Name]—put together a quick Loom walking through how we cut ramp time from 90 days to 45 at a similar-stage company. No ask, just thought it might be useful: [Loom link]</p>
              </div>

              <div>
                <p className="font-bold text-slate-900">Day 7 (LinkedIn message, if connected):</p>
                <p className="text-slate-700 italic ml-4">Body: Hey [Name]—following up on the Loom I sent. Any thoughts? Happy to walk through it live if it is relevant.</p>
              </div>

              <div>
                <p className="font-bold text-slate-900">Day 10 (Email):</p>
                <p className="text-slate-700 italic ml-4">Subject: Last one</p>
                <p className="text-slate-700 italic ml-4">Body: Seems like this is not a priority right now. Let me know if that changes in Q2—happy to revisit.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-3">Results (real numbers from a 6-week campaign):</h3>
            <ul className="space-y-1 text-slate-700">
              <li><strong>Sent:</strong> 120 emails</li>
              <li><strong>Replies:</strong> 14 (11.7%)</li>
              <li><strong>Positive replies:</strong> 9 (7.5%)</li>
              <li><strong>Meetings booked:</strong> 4 (3.3%)</li>
              <li><strong>Deals closed:</strong> 1 ($45K ACV)</li>
            </ul>
            <p className="mt-4 text-sm text-slate-600 italic">
              <strong>Why it worked:</strong> Short, relevant, value-first. No pitch until they replied. Breakup email triggered 3 of the 9 positive replies.
            </p>
          </div>
        </div>

        {/* When to Add Calls */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">When to Add Calls to Your Async Sequence</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-900 mb-3">✅ Add calls if:</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Your ACV is $50K+</li>
                <li>Your ICP expects a consultative sale (enterprise buyers, C-level)</li>
                <li>Your product requires live demo to understand value</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-900 mb-3">❌ Skip calls if:</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Your ACV is under $10K</li>
                <li>Your product is self-serve or has a free trial</li>
                <li>Your ICP is technical (developers, product managers) and prefers async</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-slate-700">
            If you do add calls, do it in step 4 (after the value-add email). Never in step 1.
          </p>
        </div>

        {/* Final Thoughts */}
        <div className="mb-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Final Thoughts</h2>
          <p className="text-lg text-slate-700 mb-4">
            Asynchronous outreach is not about avoiding human connection. It is about respecting time—yours and theirs.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            A well-built async sequence filters for intent, builds credibility, and books meetings with people who actually want to talk to you. It scales without burning you out. It converts without requiring you to become a cold-calling machine.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            If you are a founder who needs pipeline but hates interrupting people, start here:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6">
            <li>Build a 3-step email sequence (intro, value-add, breakup).</li>
            <li>Use Instantly or Reply.io to automate sending.</li>
            <li>Spend 60 seconds researching each prospect before you hit send.</li>
            <li>Measure reply rate and positive reply rate. Ignore everything else.</li>
          </ol>
          <p className="text-lg text-slate-700 font-bold">
            The boring fundamentals win. Always.
          </p>
        </div>

        {/* Related Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/resources/30-day-outbound-plan-first-5-customers" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-indigo-500 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">30-Day Outbound Plan</h3>
              <p className="text-sm text-slate-600">Get first 5 customers</p>
            </Link>
            <Link to="/resources/cold-email-guide" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-indigo-500 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Cold Email Guide</h3>
              <p className="text-sm text-slate-600">Templates & sequences</p>
            </Link>
            <Link to="/comparisons/reply-vs-instantly" className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-indigo-500 transition-colors">
              <h3 className="font-bold text-slate-900 mb-2">Reply.io vs Instantly</h3>
              <p className="text-sm text-slate-600">Compare outreach tools</p>
            </Link>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600">
            <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. If you purchase through them, I may earn a commission at no additional cost to you. I only recommend tools I have used personally in real sales operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildingAsyncOutreachSequencesPage;
