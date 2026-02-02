import React from 'react';
import Head from 'next/head'; // Assuming Next.js structure where Head is used for meta tags
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Check,
  X,
  ArrowRight,
  ExternalLink,
  Search,
  Info,
  HeartHandshake,
  BookOpen,
  PlayCircle,
  UserRound,
  ThumbsUp // Replaced with a generic star for consistency if not used as rating
} from 'lucide-react';
import { TOOLS } from '../constants';
import { formatDistanceToNow } from 'date-fns'; // For date formatting in cards

// Dummy data for tools section - replace with actual data logic
const recentTools = [
  {
    id: 'tool_1',
    name: 'Reply.io',
    description: 'Multichannel sales engagement platform.',
    website: 'https://reply.io'
  },
  {
    id: 'tool_2',
    name: 'Clay.com',
    description: 'AI-powered B2B data enrichment and sales intelligence.',
    website: 'https://clay.com'
  },
  {
    id: 'tool_3',
    name: 'Apollo.io',
    description: 'Sales intelligence and engagement platform.',
    website: 'https://www.apollo.io'
  }
];

// Dummy data for 'Start Here' section
const startHereTools = TOOLS.filter(t => ['mailforge', 'instantly', 'lemlist', 'reply', 'clay'].includes(t.id));

const HomePage = () => {
  const metaTitle = 'Sales House - Automate Your Outbound & Book 40+ Demos/Mo';
  const metaDescription = 'The exact curated tool stack to automate lead gen and book 40+ demos a month. Built for solopreneurs and small teams. Get free playbooks and guides.';
  const metaKeywords = 'outbound sales automation, lead generation, sales tools, CRM, cold email, sales stack, book demos';

  // FAQ data
  const faqs = [
    {
      question: 'How much does the complete outbound sales stack cost per month?',
      answer: 'Up to $500 per month. If you skip a CRM, you can squeeze in under $350. However, when building a sales funnel, you\'ll want to follow up, create reminders, and track potential deals. If you\'re thinking long-term, don\'t skip the CRM. Most sales aren\'t accomplished through the first outreach - you\'ll be following up with the same contacts multiple times throughout a year until you land them.'
    },
    {
      question: 'How long does it take to set up the full sales stack from scratch?',
      answer: 'With experience, it can be set up in under 5-6 hours. For most people who haven\'t worked with these platforms, a safe bet is under 2 working days. Take it easy, don\'t rush things, and do it properly so you won\'t have to redo everything.'
    },
    {
      question: 'Do I need technical skills to set up these tools?',
      answer: 'No, all the tools are fairly easy to use. It\'s pretty much like setting up your laptop or phone for the first time. It\'s really not rocket science.'
    },
    {
      question: 'Can I start with just a few tools and add more later?',
      answer: 'Yes, start with Reply.io + Clay OR Apollo. This gives you a tool to outreach with plus contacts to work with. You\'ll need to buy a domain for outbound, but you\'ll be limited by the volume of emails you can send initially.'
    },
    {
      question: 'What\'s a good reply rate for cold emails?',
      answer: '3-5% is a good benchmark for cold email reply rates.'
    },
    {
      question: 'Should I hire an SDR or build this myself?',
      answer: 'Always recommend starting yourself first. Calculate how much an SDR costs locally. A good rule of thumb is if an SDR costs $2,000/month, they need to bring enough opportunities to generate $6,000 of revenue monthly - essentially a 3:1 ratio.'
    },
    {
      question: 'What\'s the #1 mistake founders make with outbound sales?',
      answer: 'Writing emails that read like a marketing campaign. Your goal is to message like a friend and say \'Hey, I see you\'re having issues with this, I have a solution, worth a chat?\' Less is more.'
    },
    {
      question: 'Do I need a big email list to get started?',
      answer: 'It\'s subjective and depends on what verticals you\'re targeting. Generally, we\'re speaking about thousands of contacts you can get from Clay, Apollo, or Lusha, so practically this isn\'t an area of concern.'
    }
  ];

  // Dummy data for recent blog posts
  const recentPosts = [
    {
      title: 'How to Craft Compelling Cold Emails',
      slug: 'cold-email-guide',
      category: 'Cold Email',
      date: '2026-02-01',
      excerpt: 'Templates, sequences, and rules for writing cold emails that convert at scale.'
    },
    {
      title: 'Best Outbound Stack Under $100/mo (2026)',
      slug: 'solopreneur-outbound-stack-under-100-mo-2026',
      category: 'Stack',
      date: '2026-01-31',
      excerpt: 'A minimal budget outbound stack and what to buy first to get meetings.'
    },
    {
      title: '30-Day Outbound Plan: First 5 Customers',
      slug: '30-day-outbound-plan-first-5-customers',
      category: 'Outbound',
      date: '2026-01-30',
      excerpt: 'A week-by-week execution plan and daily checklist for founder-led outbound.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": metaTitle,
            "description": metaDescription,
            "publisher": {
              "@type": "Organization",
              "name": "Sales House",
              "logo": {
                "@type": "ImageObject",
                "url": "https://saleshousestack.com/logo.png"
              }
            },
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb />

          {/* Hero Section */}
          <div className="text-center my-16">
            <div className="inline-block px-3 py-1 bg-indigo-100 border border-indigo-300 rounded-full text-sm font-semibold text-indigo-700 mb-4">
              Outbound Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Your Outbound Sales Engine, Built for Founders
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              The exact stack, playbooks, and guides to automate lead generation and book 40+ demos a month.
            </p>
            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to="/consulting"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors text-lg"
              >
                Book a Free Call
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Popular Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/resources/${post.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{post.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="mt-4 text-sm font-medium text-indigo-600 flex items-center gap-1">
                    Read Guide
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <section className="bg-white border border-slate-200 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
              >
                View All FAQs
              </Link>
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Need help building your outbound engine?</h2>
            <p className="text-lg mb-6 text-indigo-100">
              Let's build a system that automates lead generation and books meetings while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/consulting"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-slate-50 transition-all"
              >
                Book a Free Call
              </a>
              <a
                href="mailto:david@saleshousestack.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-800 text-white font-bold rounded-lg border-2 border-white/20 hover:bg-indigo-900 transition-all"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesListPage;
