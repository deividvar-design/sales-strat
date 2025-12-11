
import { TeamSize, Tool, ToolCategory, StrategyGuide } from './types';

export const TOOLS: Tool[] = [
  // --- TOP SETUP (Core Stack) ---
  {
    id: 'clay',
    name: 'Clay.com',
    category: ToolCategory.CONTACTS,
    description: 'The ultimate enrichment tool. Finds and qualifies leads dynamically, acting as a programmable data expert.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: 'Medium',
    website: 'https://clay.com?via=c74a80',
    pros: ['Replaces manual scraping', 'Waterfall enrichment', 'AI research agent', 'Deep personalized signals'],
    cons: ['Steep learning curve'],
    badge: 'Recommended',
    useCaseTags: ['Data-Driven', 'AI-Powered'],
    learningCurve: 'Expert'
  },
  {
    id: 'reply',
    name: 'Reply.io',
    category: ToolCategory.SALES_ENGAGEMENT,
    description: 'Multichannel engagement platform handling email and LinkedIn steps in one flow. The engine for sending.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: 'Medium',
    website: 'https://get.reply.io/scaleoutbound',
    pros: ['Native LinkedIn automation', 'Easy A/B testing', 'Robust reporting', 'Cloud calling included'],
    cons: ['UI can be dense'],
    channels: ['Calls', 'Emails', 'LinkedIn', 'InMail', 'WhatsApp'],
    badge: 'Recommended',
    useCaseTags: ['Multichannel', 'AI-Powered'],
    learningCurve: 'Intermediate'
  },
  {
    id: 'mailforge',
    name: 'Mailforge.ai',
    category: ToolCategory.INFRASTRUCTURE,
    description: 'Infrastructure for cold email. Warms up inboxes and auto-rotates domains to maintain deliverability.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: 'Low',
    website: 'https://www.mailforge.ai/?via=outboundsales',
    pros: ['Auto-rotates domains', 'Prevents spam landing', 'Scalable infrastructure', 'Low maintenance'],
    cons: ['DNS setup required'],
    badge: 'Recommended',
    useCaseTags: ['Budget'],
    learningCurve: 'Beginner'
  },
  {
    id: 'salesforge',
    name: 'Salesforge.ai',
    category: ToolCategory.SALES_ENGAGEMENT,
    description: 'AI-personalized email sequences with multi-language support and inbox rotation.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: 'Low',
    website: 'https://salesforge.ai/?via=outboundsales',
    pros: ['AI personalization', 'Built-in warm-up', 'Multi-language support', 'Inbox rotation'],
    cons: ['Email only (no native LinkedIn)'],
    channels: ['Emails', 'LinkedIn'],
    badge: 'Best Value',
    useCaseTags: ['AI-Powered', 'Budget'],
    learningCurve: 'Beginner'
  },

  // --- CRM ---
  {
    id: 'hubspot',
    name: 'HubSpot Sales Hub',
    category: ToolCategory.CRM,
    description: 'All-in-one CRM platform. Great entry point that scales well up to mid-market.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM, TeamSize.MID_SCALE, TeamSize.ENTERPRISE],
    pricingTier: 'Medium',
    website: 'https://www.hubspot.com',
    pros: ['Free tier available', 'Excellent UI/UX', 'Marketing integration', 'Huge ecosystem'],
    cons: ['Enterprise tiers are expensive'],
    badge: 'Recommended',
    useCaseTags: ['All-in-One', 'Beginner-Friendly'],
    learningCurve: 'Intermediate'
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    category: ToolCategory.CRM,
    description: 'Visual, deal-focused CRM. Built by salespeople, for salespeople. Extremely intuitive.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: 'Low',
    website: 'https://www.pipedrive.com',
    pros: ['Visual pipeline view', 'Very easy to use', 'Affordable', 'Strong mobile app'],
    cons: ['Limited marketing features', 'Reporting is basic'],
    badge: 'Best Value',
    useCaseTags: ['Beginner-Friendly', 'Budget'],
    learningCurve: 'Beginner'
  },
  {
    id: 'salesforce',
    name: 'Salesforce Sales Cloud',
    category: ToolCategory.CRM,
    description: 'The industry standard CRM. Highly customizable but requires admin overhead. Only buy if you\'re thinking of Sales Ops in the future, or sales team is above 20',
    bestFor: [TeamSize.MID_SCALE, TeamSize.ENTERPRISE],
    pricingTier: 'High',
    website: 'https://www.salesforce.com',
    pros: ['Infinite customization', 'Standard for enterprise', 'Advanced reporting'],
    cons: ['Steep learning curve', 'Expensive', 'Requires dedicated admin'],
    badge: 'Enterprise',
    useCaseTags: ['Industry Standard'],
    learningCurve: 'Expert'
  },

  // --- SALES ENGAGEMENT ---
  {
    id: 'outreach',
    name: 'Outreach.io',
    category: ToolCategory.SALES_ENGAGEMENT,
    description: 'Enterprise sales engagement platform. Powerful workflows, analytics, and integrations for large teams. Wants to be Salesforce, but isn\'t.',
    bestFor: [TeamSize.MID_SCALE, TeamSize.ENTERPRISE],
    pricingTier: 'High',
    website: 'https://www.outreach.io',
    pros: ['Enterprise-grade features', 'Advanced analytics', 'Robust workflows', 'Deep CRM integration', 'Team collaboration'],
    cons: ['Very expensive', 'Complex setup', 'Steep learning curve', 'Overkill for small teams'],
    channels: ['Emails', 'Calls', 'LinkedIn', 'SMS'],
    useCaseTags: ['Outreach', 'Multichannel', 'Enterprise', 'AI-Powered'],
    learningCurve: 'Expert'
  },
  {
    id: 'mixmax',
    name: 'Mixmax',
    category: ToolCategory.SALES_ENGAGEMENT,
    description: 'Gmail-based sales engagement. Perfect for AEs or founders who want powerful features directly in Inbox.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: 'Low',
    website: 'https://www.mixmax.com',
    pros: ['Lives in Gmail', 'One-click scheduling', 'Email polls/surveys', 'Simple sequences'],
    cons: ['Gmail only', 'Limited reporting'],
    channels: ['Emails'],
    useCaseTags: ['Beginner-Friendly'],
    learningCurve: 'Beginner'
  },
  {
    id: 'lemlist',
    name: 'Lemlist',
    category: ToolCategory.SALES_ENGAGEMENT,
    description: 'Personalized cold email outreach at scale. Known for dynamic images and video personalization.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: 'Medium',
    website: 'https://www.lemlist.com',
    pros: ['Dynamic image personalization', 'Video prospecting', 'Built-in email warm-up', 'LinkedIn automation'],
    cons: ['Limited multichannel features', 'Reporting could be more robust'],
    channels: ['Calls', 'Emails', 'LinkedIn', 'WhatsApp'],
    useCaseTags: ['Creative', 'Multichannel', 'AI-Powered'],
    learningCurve: 'Intermediate'
  },
  {
    id: 'instantly',
    name: 'Instantly',
    category: ToolCategory.SALES_ENGAGEMENT,
    description: 'Cold email platform built for unlimited scale. Warm-up included, simple UI, extensive mailbox management.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: 'Low',
    website: 'https://instantly.ai/?via=outboundsales',
    pros: ['Unlimited email accounts', 'Built-in warm-up', 'Simple interface', 'Affordable pricing', 'Fast campaign setup'],
    cons: ['Email only (no multichannel)', 'Basic reporting', 'Limited personalization features'],
    channels: ['Emails'],
    badge: 'Best Value',
    useCaseTags: ['Budget', 'AI-Powered'],
    learningCurve: 'Beginner'
  },
  {
    id: 'dripify',
    name: 'Dripify',
    category: ToolCategory.SALES_ENGAGEMENT,
    description: 'LinkedIn automation platform for lead generation. Automates connection requests, messaging, and engagement.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: 'Low',
    website: 'https://www.dripify.io',
    pros: ['Affordable LinkedIn automation', 'Advanced drip campaigns', 'Team collaboration', 'Safety features to avoid bans'],
    cons: ['LinkedIn only', 'Requires LinkedIn Premium', 'No email integration'],
    channels: ['Emails', 'LinkedIn'],
    badge: 'Best Value',
    useCaseTags: ['Specialized', 'Budget'],
    learningCurve: 'Beginner'
  },

  // --- CONTACTS ---
  {
    id: 'apollo',
    name: 'Apollo.io',
    category: ToolCategory.CONTACTS,
    description: 'A powerhouse for B2B contact data. The best bang-for-buck database for broad targeting.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM, TeamSize.MID_SCALE],
    pricingTier: 'Low',
    website: 'https://get.apollo.io/scaleoutbound',
    pros: ['Massive database', 'Very affordable', 'Chrome extension is great', 'Includes sequencing'],
    cons: ['Data accuracy varies', 'Support can be slow'],
    badge: 'Best Value',
    useCaseTags: ['Budget'],
    learningCurve: 'Beginner'
  },
  {
    id: 'lusha',
    name: 'Lusha',
    category: ToolCategory.CONTACTS,
    description: 'Premium contact data overlay. Known for high-accuracy mobile numbers and direct dials.',
    bestFor: [TeamSize.SMALL_TEAM, TeamSize.MID_SCALE],
    pricingTier: 'Medium',
    website: 'https://www.lusha.com',
    pros: ['High mobile accuracy', 'Easy to use extension', 'CCPA/GDPR compliant'],
    cons: ['Credit limits can be tight', 'Less comprehensive than ZoomInfo'],
    badge: 'Specialized',
    useCaseTags: ['Data Quality'],
    learningCurve: 'Beginner'
  },
  {
    id: 'zoominfo',
    name: 'ZoomInfo',
    category: ToolCategory.CONTACTS,
    description: 'The market leader in B2B intelligence. Deepest data, org charts, and intent signals.',
    bestFor: [TeamSize.MID_SCALE, TeamSize.ENTERPRISE],
    pricingTier: 'High',
    website: 'https://try.zoominfo.com/outboundsales',
    pros: ['Unmatched data depth', 'Intent data', 'Org charts', 'Integrations'],
    cons: ['Very expensive', 'Annual contracts', 'Aggressive sales team'],
    badge: 'Enterprise',
    useCaseTags: ['Data-Driven'],
    learningCurve: 'Intermediate'
  },
  {
    id: 'cognism',
    name: 'Cognism',
    category: ToolCategory.CONTACTS,
    description: 'Global data leader with a focus on EMEA and mobile number compliance.',
    bestFor: [TeamSize.SMALL_TEAM, TeamSize.MID_SCALE, TeamSize.ENTERPRISE],
    pricingTier: 'High',
    website: 'https://www.cognism.com',
    pros: ['Best for EMEA data', 'Phone-verified mobiles', 'GDPR compliant', 'Intent data'],
    cons: ['Premium pricing', 'Platform UI can be slow'],
    badge: 'Specialized',
    useCaseTags: ['Data Quality'],
    learningCurve: 'Intermediate'
  },

  // --- SCHEDULING ---
  {
    id: 'calendly',
    name: 'Calendly',
    category: ToolCategory.SCHEDULING,
    description: 'Essential scheduling automation. Removes the back-and-forth of booking meetings.',
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: 'Low',
    website: 'https://www.calendly.com',
    pros: ['Ubiquitous and trusted', 'Simple to set up', 'Workflows for reminders'],
    cons: ['Basic routing features', 'Customization limits'],
    useCaseTags: ['Beginner-Friendly'],
    learningCurve: 'Beginner'
  }
];

export const STRATEGIES: StrategyGuide[] = [
  {
    id: 'automated-outbound',
    title: 'The Automated Outbound Engine',
    teamSize: TeamSize.SOLOPRENEUR,
    summary: 'A lean, proven system to send 30k+ emails/month. Replicates the output of 4-6 SDRs using modular tools.',
    recommendedStack: ['clay', 'reply', 'mailforge', 'calendly'],
    focusArea: 'High-Volume Lead Gen & Deliverability',
    steps: [
      'Sign up to Mailforge.ai (2 min)',
      'Buy 3 domains, create 3 mailboxes for each domain (10 min)',
      'Pick up a free trial for Reply.io, sign up for Multichannel plan (5 min)',
      'Download mailboxes from Mailforge.io, upload them to Reply.io, connect to email warm-up immediately (10 min)',
      'Sign up for Clay.com and set up workspace (10 min)',
      'Build ICP filters (industry, headcounts, roles) (30-45 min)',
      'Create enrichment + email verification workflows (45-60 min)',
      'Use Clay to collect 1,000-5,000 ICP leads (2-4 hrs)',
      'Clean, dedupe, exclude bad domains (30-60 min)',
      'Tag leads by campaign/use case (20-30 min)',
      'Export or sync lead list to Reply.io (15-30 min)',
      'Start your first sequence: 4 emails + 2 LinkedIn actions (Connection request + Message) (20-30 min)',
      'Draft 10 subject lines (curiosity/value/short) (30-45 min)',
      'Draft 10 plain-text cold-email variants (60-90 min)',
      'Write 2-3 gentle follow-ups (30-45 min)',
      'Write reply templates (Yes / Maybe / Later) (20-30 min)',
      'Launch Campaign: Start at 20 emails/day/inbox and ramp by 15% daily (10-15 min)'
    ]
  }
];
