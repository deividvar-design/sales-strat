import { Head, ViteReactSSG } from "vite-react-ssg";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import { useLocation, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { Star, ExternalLink, Briefcase, Calendar, Target, TrendingUp, Zap, ShieldCheck, ChevronRight, LayoutDashboard, Library, Layers, Download, X, Menu, ArrowRight, Check, Database, Megaphone, AlertCircle, Phone, Trophy, Mail, Linkedin, ChevronDown, Heart, ChevronUp, FileText, Filter, Search, ListTodo, BarChart3 } from "lucide-react";
var TeamSize = /* @__PURE__ */ ((TeamSize2) => {
  TeamSize2["SOLOPRENEUR"] = "Founders";
  TeamSize2["SMALL_TEAM"] = "Small Team (2-10)";
  TeamSize2["MID_SCALE"] = "Mid-Scale (10-20)";
  TeamSize2["ENTERPRISE"] = "Enterprise (20+)";
  return TeamSize2;
})(TeamSize || {});
var ToolCategory = /* @__PURE__ */ ((ToolCategory2) => {
  ToolCategory2["CRM"] = "CRM";
  ToolCategory2["SALES_ENGAGEMENT"] = "Sales Engagement";
  ToolCategory2["CONTACTS"] = "Contacts & Intelligence";
  ToolCategory2["SCHEDULING"] = "Scheduling";
  ToolCategory2["INFRASTRUCTURE"] = "Infrastructure (Mailbox)";
  return ToolCategory2;
})(ToolCategory || {});
const TOOLS = [
  // --- TOP SETUP (Core Stack) ---
  {
    id: "clay",
    name: "Clay.com",
    category: ToolCategory.CONTACTS,
    description: "The ultimate enrichment tool. Finds and qualifies leads dynamically, acting as a programmable data expert.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: "Medium",
    website: "https://clay.com?via=c74a80",
    pros: ["Replaces manual scraping", "Waterfall enrichment", "AI research agent", "Deep personalized signals"],
    cons: ["Steep learning curve"],
    badge: "Recommended",
    useCaseTags: ["Data-Driven", "AI-Powered"],
    learningCurve: "Expert"
  },
  {
    id: "reply",
    name: "Reply.io",
    category: ToolCategory.SALES_ENGAGEMENT,
    description: "Multichannel engagement platform handling email and LinkedIn steps in one flow. The engine for sending.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: "Medium",
    website: "https://get.reply.io/scaleoutbound",
    pros: ["Native LinkedIn automation", "Easy A/B testing", "Robust reporting", "Cloud calling included"],
    cons: ["UI can be dense"],
    channels: ["Calls", "Emails", "LinkedIn", "InMail", "WhatsApp"],
    badge: "Recommended",
    useCaseTags: ["Multichannel", "AI-Powered"],
    learningCurve: "Intermediate"
  },
  {
    id: "mailforge",
    name: "Mailforge.ai",
    category: ToolCategory.INFRASTRUCTURE,
    description: "Infrastructure for cold email. Warms up inboxes and auto-rotates domains to maintain deliverability. $29/mo",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: "Low",
    website: "https://www.mailforge.ai/?via=outboundsales",
    pros: ["Auto-rotates domains", "Prevents spam landing", "Scalable infrastructure", "Low maintenance"],
    cons: ["DNS setup required"],
    badge: "Recommended",
    useCaseTags: ["Budget"],
    learningCurve: "Beginner"
  },
  {
    id: "infraforge",
    name: "Infraforge",
    category: ToolCategory.INFRASTRUCTURE,
    description: "Email infrastructure platform for deliverability and domain management.",
    bestFor: [TeamSize.SMALL_TEAM, TeamSize.MID_SCALE],
    pricingTier: "Low",
    website: "https://infraforge.ai/?via=outboundsales",
    pros: ["Domain management", "Deliverability monitoring", "Easy setup", "Reliable infrastructure"],
    cons: ["Limited advanced features", "Newer platform"],
    useCaseTags: ["Infrastructure"],
    learningCurve: "Intermediate"
  },
  {
    id: "mailreef",
    name: "Mailreef",
    category: ToolCategory.INFRASTRUCTURE,
    description: "Simple email infrastructure for cold outreach. Easy domain setup and warm-up.",
    bestFor: [TeamSize.SMALL_TEAM, TeamSize.MID_SCALE],
    pricingTier: "Low",
    website: "https://www.mailreef.com",
    pros: ["Beginner-friendly", "Quick setup", "Affordable", "Good support"],
    cons: ["Basic features only", "Limited scalability"],
    useCaseTags: ["Infrastructure", "Beginner-Friendly"],
    learningCurve: "Beginner"
  },
  {
    id: "salesforge",
    name: "Salesforge.ai",
    category: ToolCategory.SALES_ENGAGEMENT,
    description: "AI-personalized email sequences with multi-language support and inbox rotation.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: "Low",
    website: "https://salesforge.ai/?via=outboundsales",
    pros: ["AI personalization", "Built-in warm-up", "Multi-language support", "Inbox rotation"],
    cons: ["Email only (no native LinkedIn)"],
    channels: ["Emails", "LinkedIn"],
    badge: "Best Value",
    useCaseTags: ["AI-Powered", "Budget"],
    learningCurve: "Beginner"
  },
  // --- CRM ---
  {
    id: "hubspot",
    name: "HubSpot Sales Hub",
    category: ToolCategory.CRM,
    description: "All-in-one CRM platform. Great entry point that scales well up to mid-market.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM, TeamSize.MID_SCALE, TeamSize.ENTERPRISE],
    pricingTier: "Medium",
    website: "https://www.hubspot.com",
    pros: ["Free tier available", "Excellent UI/UX", "Marketing integration", "Huge ecosystem"],
    cons: ["Enterprise tiers are expensive"],
    badge: "Recommended",
    useCaseTags: ["All-in-One", "Beginner-Friendly"],
    learningCurve: "Intermediate"
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    category: ToolCategory.CRM,
    description: "Visual, deal-focused CRM. Built by salespeople, for salespeople. Extremely intuitive.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: "Low",
    website: "https://www.pipedrive.com",
    pros: ["Visual pipeline view", "Very easy to use", "Affordable", "Strong mobile app"],
    cons: ["Limited marketing features", "Reporting is basic"],
    badge: "Best Value",
    useCaseTags: ["Beginner-Friendly", "Budget"],
    learningCurve: "Beginner"
  },
  {
    id: "salesforce",
    name: "Salesforce Sales Cloud",
    category: ToolCategory.CRM,
    description: "The industry standard CRM. Highly customizable but requires admin overhead. Only buy if you're thinking of Sales Ops in the future, or sales team is above 20",
    bestFor: [TeamSize.MID_SCALE, TeamSize.ENTERPRISE],
    pricingTier: "High",
    website: "https://www.salesforce.com",
    pros: ["Infinite customization", "Standard for enterprise", "Advanced reporting"],
    cons: ["Steep learning curve", "Expensive", "Requires dedicated admin"],
    badge: "Enterprise",
    useCaseTags: ["Industry Standard"],
    learningCurve: "Expert"
  },
  // --- SALES ENGAGEMENT ---
  {
    id: "outreach",
    name: "Outreach.io",
    category: ToolCategory.SALES_ENGAGEMENT,
    description: "Enterprise sales engagement platform. Powerful workflows, analytics, and integrations for large teams. Wants to be Salesforce, but isn't.",
    bestFor: [TeamSize.MID_SCALE, TeamSize.ENTERPRISE],
    pricingTier: "High",
    website: "https://www.outreach.io",
    pros: ["Enterprise-grade features", "Advanced analytics", "Robust workflows", "Deep CRM integration", "Team collaboration"],
    cons: ["Very expensive", "Complex setup", "Steep learning curve", "Overkill for small teams"],
    channels: ["Emails", "Calls", "LinkedIn", "SMS"],
    useCaseTags: ["Outreach", "Multichannel", "Enterprise", "AI-Powered"],
    learningCurve: "Expert"
  },
  {
    id: "mixmax",
    name: "Mixmax",
    category: ToolCategory.SALES_ENGAGEMENT,
    description: "Gmail-based sales engagement. Perfect for AEs or founders who want powerful features directly in Inbox.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: "Low",
    website: "https://www.mixmax.com",
    pros: ["Lives in Gmail", "One-click scheduling", "Email polls/surveys", "Simple sequences"],
    cons: ["Gmail only", "Limited reporting"],
    channels: ["Emails"],
    useCaseTags: ["Beginner-Friendly"],
    learningCurve: "Beginner"
  },
  {
    id: "lemlist",
    name: "Lemlist",
    category: ToolCategory.SALES_ENGAGEMENT,
    description: "Personalized cold email outreach at scale. Known for dynamic images and video personalization.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: "Medium",
    website: "https://get.lemlist.com/outboundsales",
    pros: ["Dynamic image personalization", "Video prospecting", "Built-in email warm-up", "LinkedIn automation"],
    cons: ["Limited multichannel features", "Reporting could be more robust"],
    channels: ["Calls", "Emails", "LinkedIn", "WhatsApp"],
    useCaseTags: ["Creative", "Multichannel", "AI-Powered"],
    learningCurve: "Intermediate"
  },
  {
    id: "instantly",
    name: "Instantly",
    category: ToolCategory.SALES_ENGAGEMENT,
    description: "Cold email platform built for unlimited scale. Warm-up included, simple UI, extensive mailbox management.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: "Low",
    website: "https://instantly.ai/?via=outboundsales",
    pros: ["Unlimited email accounts", "Built-in warm-up", "Simple interface", "Affordable pricing", "Fast campaign setup"],
    cons: ["Email only (no multichannel)", "Basic reporting", "Limited personalization features"],
    channels: ["Emails"],
    badge: "Best Value",
    useCaseTags: ["Budget", "AI-Powered"],
    learningCurve: "Beginner"
  },
  {
    id: "dripify",
    name: "Dripify",
    category: ToolCategory.SALES_ENGAGEMENT,
    description: "LinkedIn automation platform for lead generation. Automates connection requests, messaging, and engagement.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: "Low",
    website: "https://www.dripify.io",
    pros: ["Affordable LinkedIn automation", "Advanced drip campaigns", "Team collaboration", "Safety features to avoid bans"],
    cons: ["LinkedIn only", "Requires LinkedIn Premium", "No email integration"],
    channels: ["Emails", "LinkedIn"],
    badge: "Best Value",
    useCaseTags: ["Specialized", "Budget"],
    learningCurve: "Beginner"
  },
  // --- CONTACTS ---
  {
    id: "apollo",
    name: "Apollo.io",
    category: ToolCategory.CONTACTS,
    description: "A powerhouse for B2B contact data. The best bang-for-buck database for broad targeting.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM, TeamSize.MID_SCALE],
    pricingTier: "Low",
    website: "https://get.apollo.io/scaleoutbound",
    pros: ["Massive database", "Very affordable", "Chrome extension is great", "Includes sequencing"],
    cons: ["Data accuracy varies", "Support can be slow"],
    badge: "Best Value",
    useCaseTags: ["Budget"],
    learningCurve: "Beginner"
  },
  {
    id: "lusha",
    name: "Lusha",
    category: ToolCategory.CONTACTS,
    description: "Premium contact data overlay. Known for high-accuracy mobile numbers and direct dials.",
    bestFor: [TeamSize.SMALL_TEAM, TeamSize.MID_SCALE],
    pricingTier: "Medium",
    website: "https://partnerstack.lusha.com/xe6xomefsipz",
    pros: ["High mobile accuracy", "Easy to use extension", "CCPA/GDPR compliant"],
    cons: ["Credit limits can be tight", "Less comprehensive than ZoomInfo"],
    badge: "Specialized",
    useCaseTags: ["Data Quality"],
    learningCurve: "Beginner"
  },
  {
    id: "zoominfo",
    name: "ZoomInfo",
    category: ToolCategory.CONTACTS,
    description: "The market leader in B2B intelligence. Deepest data, org charts, and intent signals.",
    bestFor: [TeamSize.MID_SCALE, TeamSize.ENTERPRISE],
    pricingTier: "High",
    website: "https://try.zoominfo.com/outboundsales",
    pros: ["Unmatched data depth", "Intent data", "Org charts", "Integrations"],
    cons: ["Very expensive", "Annual contracts", "Aggressive sales team"],
    badge: "Enterprise",
    useCaseTags: ["Data-Driven"],
    learningCurve: "Intermediate"
  },
  {
    id: "cognism",
    name: "Cognism",
    category: ToolCategory.CONTACTS,
    description: "Global data leader with a focus on EMEA and mobile number compliance.",
    bestFor: [TeamSize.SMALL_TEAM, TeamSize.MID_SCALE, TeamSize.ENTERPRISE],
    pricingTier: "High",
    website: "https://www.cognism.com",
    pros: ["Best for EMEA data", "Phone-verified mobiles", "GDPR compliant", "Intent data"],
    cons: ["Premium pricing", "Platform UI can be slow"],
    badge: "Specialized",
    useCaseTags: ["Data Quality"],
    learningCurve: "Intermediate"
  },
  // --- SCHEDULING ---
  {
    id: "calendly",
    name: "Calendly",
    category: ToolCategory.SCHEDULING,
    description: "Essential scheduling automation. Removes the back-and-forth of booking meetings.",
    bestFor: [TeamSize.SOLOPRENEUR, TeamSize.SMALL_TEAM],
    pricingTier: "Low",
    website: "https://www.calendly.com",
    pros: ["Ubiquitous and trusted", "Simple to set up", "Workflows for reminders"],
    cons: ["Basic routing features", "Customization limits"],
    useCaseTags: ["Beginner-Friendly"],
    learningCurve: "Beginner"
  }
];
const STRATEGIES = [
  {
    id: "automated-outbound",
    title: "The Automated Outbound Engine",
    teamSize: TeamSize.SOLOPRENEUR,
    summary: "A lean, proven system to send 30k+ emails/month. Replicates the output of 4-6 SDRs using modular tools.",
    recommendedStack: ["clay", "reply", "mailforge", "calendly"],
    focusArea: "High-Volume Lead Gen & Deliverability",
    steps: [
      "Sign up to Mailforge.ai (2 min)",
      "Buy 3 domains, create 3 mailboxes for each domain (10 min)",
      "Pick up a free trial for Reply.io, sign up for Multichannel plan (5 min)",
      "Download mailboxes from Mailforge.io, upload them to Reply.io, connect to email warm-up immediately (10 min)",
      "Sign up for Clay.com and set up workspace (10 min)",
      "Build ICP filters (industry, headcounts, roles) (30-45 min)",
      "Create enrichment + email verification workflows (45-60 min)",
      "Use Clay to collect 1,000-5,000 ICP leads (2-4 hrs)",
      "Clean, dedupe, exclude bad domains (30-60 min)",
      "Tag leads by campaign/use case (20-30 min)",
      "Export or sync lead list to Reply.io (15-30 min)",
      "Start your first sequence: 4 emails + 2 LinkedIn actions (Connection request + Message) (20-30 min)",
      "Draft 10 subject lines (curiosity/value/short) (30-45 min)",
      "Draft 10 plain-text cold-email variants (60-90 min)",
      "Write 2-3 gentle follow-ups (30-45 min)",
      "Write reply templates (Yes / Maybe / Later) (20-30 min)",
      "Launch Campaign: Start at 20 emails/day/inbox and ramp by 15% daily (10-15 min)"
    ]
  }
];
const ToolCard = ({ tool, showChannels = true }) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = React.useState(false);
  const getLogoPath = () => {
    const logoMap = {
      "clay": "/tool logos/clay.jpg",
      "reply": "/tool logos/reply.jpg",
      "hubspot": "/tool logos/hubspot.webp",
      "salesforce": "/tool logos/salesforce.png",
      "apollo": "/tool logos/apollo.png",
      "lusha": "/tool logos/lusha.jpeg",
      "zoominfo": "/tool logos/zoominfo.png",
      "cognism": "/tool logos/cognism.png",
      "mixmax": "/tool logos/mixmax.png",
      "lemlist": "/tool logos/lemlist.webp",
      "mailforge": "/tool logos/mailforge.jpeg",
      "infraforge": "/tool logos/infraforge.jpeg",
      "mailreef": "/tool logos/mailreef.jpeg",
      "salesforge": "/tool logos/salesforge.jpeg",
      "instantly": "/tool logos/instantly.jpg",
      "dripify": "/tool logos/dripify.png",
      "outreach": "/tool logos/outreach.png",
      "pipedrive": "/tool logos/pipedrive.png",
      "calendly": "/tool logos/calendly.png"
    };
    return logoMap[tool.id] || null;
  };
  const logoPath = getLogoPath();
  const getFallbackIcon = () => {
    switch (tool.id) {
      case "mailforge":
        return ShieldCheck;
      case "infraforge":
        return ShieldCheck;
      case "mailreef":
        return ShieldCheck;
      case "salesforge":
        return Zap;
      case "outreach":
        return Target;
      case "pipedrive":
        return TrendingUp;
      case "dripify":
        return Target;
      case "calendly":
        return Calendar;
      default:
        return Briefcase;
    }
  };
  const FallbackIcon = getFallbackIcon();
  const getCategoryLabel = () => {
    if (tool.id === "mailforge") return "Email structure";
    if (tool.category === ToolCategory.CRM) return "CRM";
    if (tool.category === ToolCategory.CONTACTS) return "Contacts";
    if (tool.category === ToolCategory.SALES_ENGAGEMENT) return "Outreach";
    if (tool.category === ToolCategory.SCHEDULING) return "Scheduling";
    if (tool.category === ToolCategory.INFRASTRUCTURE) return "Infrastructure";
    return tool.category;
  };
  const isCoreStack = ["clay", "reply", "hubspot", "mailforge"].includes(tool.id);
  return /* @__PURE__ */ jsxs("div", { className: `rounded-xl border shadow-lg hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 flex flex-col h-full overflow-hidden group relative bg-slate-100 ${isCoreStack ? "border-indigo-400 shadow-indigo-200" : "border-slate-300"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl border shrink-0 overflow-hidden flex items-center justify-center ${isCoreStack ? "bg-white border-indigo-200 text-indigo-600 shadow-sm" : "bg-white border-slate-200 text-slate-600 shadow-sm"}`, children: logoPath ? /* @__PURE__ */ jsx("img", { src: logoPath, alt: `${tool.name} logo`, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsx(FallbackIcon, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-6", children: [
          isCoreStack && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 mb-2", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-indigo-600 text-indigo-600" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-indigo-600 uppercase tracking-wider", children: "Recommended" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors", children: tool.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-slate-600 mt-1", children: getCategoryLabel() }),
          /* @__PURE__ */ jsx("span", { className: `inline-block text-xs font-semibold uppercase tracking-wide mt-1 ${tool.learningCurve === "Beginner" ? "text-green-600" : tool.learningCurve === "Intermediate" ? "text-yellow-600" : "text-orange-600"}`, children: tool.learningCurve })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm leading-relaxed line-clamp-5", children: tool.description }),
      tool.useCaseTags && tool.useCaseTags.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-auto pt-3", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: tool.useCaseTags.map((tag, idx) => /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 bg-indigo-50 border border-indigo-200 rounded-md text-xs text-indigo-700 font-semibold", children: tag }, idx)) }) }),
      tool.bestFor && tool.bestFor.length > 0 && /* @__PURE__ */ jsxs("div", { className: `pt-3 ${!tool.useCaseTags || tool.useCaseTags.length === 0 ? "mt-auto" : ""}`, children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider mb-2", children: "Best For" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: tool.bestFor.map((size, idx) => /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 bg-slate-200 border border-slate-200/50 rounded text-xs text-slate-600 font-medium", children: size }, idx)) })
      ] }),
      showChannels && tool.channels && tool.channels.length > 0 && /* @__PURE__ */ jsxs("div", { className: `pt-3 border-t border-slate-300 ${!tool.useCaseTags || tool.useCaseTags.length === 0 ? "mt-auto" : ""}`, children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider mb-2", children: "Channels" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: tool.channels.map((channel, idx) => /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 bg-slate-200 border border-slate-200/50 rounded text-xs text-slate-600 font-medium", children: channel }, idx)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-50/50 p-4 border-t border-slate-300 flex gap-2 mt-auto", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: tool.website,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `flex-1 py-2.5 text-sm font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 ${isCoreStack ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200" : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200"}`,
          children: [
            isCoreStack ? "Try For Free" : "Visit Website",
            " ",
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3" })
          ]
        }
      ),
      (tool.id === "reply" || tool.id === "clay") && /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsReviewModalOpen(true),
          className: "px-4 py-2.5 text-xs font-bold rounded-lg bg-indigo-50 border border-indigo-300 text-indigo-700 hover:bg-indigo-700/20 hover:border-indigo-400 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-indigo-600 text-indigo-600" }),
            "My Take"
          ]
        }
      )
    ] }),
    isReviewModalOpen && tool.id === "reply" && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm", onClick: () => setIsReviewModalOpen(false), children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-slate-100 border-b border-slate-300 p-6 flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-slate-200 border-2 border-indigo-500 flex items-center justify-center text-2xl font-bold text-indigo-600", children: "DV" }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900", children: [
            tool.name,
            " Review"
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsReviewModalOpen(false),
            className: "text-slate-600 hover:text-slate-900 transition-colors",
            children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-slate-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          [...Array(4)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-yellow-400 text-yellow-600" }, i)),
          /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-yellow-400 text-yellow-600", style: { clipPath: "inset(0 50% 0 0)" } }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-slate-900 ml-2", children: "4.5/5" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-indigo-600", children: "Very versatile tool, highest level of multichannel capabilities" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-slate-900 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-indigo-600" }),
            "Why I Recommend It"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "Reply.io covers all the channels you need and gives you complete control to personalize when necessary. The price-to-functionality ratio is top-notch, making it accessible for founders and small teams while still being powerful enough for established sales teams." }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Their analytics and tracking capabilities really shine when it comes to extra nurturing steps. For example, I set up an automation that checks if a prospect opened an email more than 5 times after the last sequence step, then triggers a reminder email a day later (not the same day - that would be creepy). This simple workflow helped nudge reply rates and increased the number of opportunities created." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-3", children: "My Experience Using It" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "I've used and set up Reply.io for 4 SaaS companies over the past year. The platform has been my go-to for automating LinkedIn, InMail, and email sequencing with variable steps across multiple campaigns." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-200 border border-slate-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 mb-2", children: "Results:" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-700", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Open rates varied by industry: 30-40% on the lower end, peaked at 80% with 3-4 follow-up steps (excluding LinkedIn)" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Successfully automated multichannel sequences across email, LinkedIn, and InMail" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Advanced nurturing automation (5+ email opens trigger) increased reply rates and opportunities created" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-3", children: "Where It Shines" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "The multichannel capabilities are unmatched. I've tested every channel except WhatsApp (though the sentiment about it seems positive). Reply.io is the best choice when:" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "You need to run coordinated campaigns across email, LinkedIn, and InMail" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "You want granular control over personalization without sacrificing automation" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "You need advanced analytics and tracking for nurturing workflows" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "You're serious about outbound and understand that single-channel focus leaves money on the table" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-3", children: "Who Should Skip This" }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed mb-3", children: [
            /* @__PURE__ */ jsx("strong", { children: "If you're only focusing on one channel, don't buy Reply.io." }),
            " There are specialized tools that will serve you better: Dripify for LinkedIn, Instantly for email, or Aircall for cold calls. But honestly, as a sales professional, single-channel focus is a bad strategy - you're leaving money on the table."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { children: "The one real dealbreaker:" }),
            " Limited Salesforce integration. The only reason this gets 4.5 instead of 5 stars. I wasn't happy with how the integration works initially. With some technical workarounds in Salesforce, we got it working well enough for a team of 9 sales executives, but it's not ideal. For most founder and small team use cases using HubSpot, this is a non-issue."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 border border-indigo-200 rounded-lg p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-indigo-600 mb-3", children: "Bottom Line" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Great tool with a top-tier price-to-functionality ratio. Whether you're an established team or a founder just starting outbound, Reply.io will get the job done long-term and you can be confident with your commitment. It's my go-to recommendation for anyone serious about multichannel outreach who wants a tool they can grow with." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sticky bottom-0 bg-slate-100 border-t border-slate-300 p-6", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: tool.website,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "w-full py-3 px-6 bg-indigo-600 text-slate-900 font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all",
          children: [
            "Try ",
            tool.name,
            " For Free ",
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
          ]
        }
      ) })
    ] }) }),
    isReviewModalOpen && tool.id === "clay" && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm", onClick: () => setIsReviewModalOpen(false), children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxs("div", { className: "sticky top-0 bg-slate-100 border-b border-slate-300 p-6 flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-slate-200 border-2 border-indigo-500 flex items-center justify-center text-2xl font-bold text-indigo-600", children: "DV" }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900", children: [
            tool.name,
            " Review"
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsReviewModalOpen(false),
            className: "text-slate-600 hover:text-slate-900 transition-colors",
            children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-slate-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-yellow-400 text-yellow-600" }, i)),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-slate-900 ml-2", children: "5.0/5" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-indigo-600", children: "Not just a contact database - a whole AI research assistant" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-slate-900 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-indigo-600" }),
            "Why I Recommend It"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "I haven't used a tool I can call a direct competitor to Clay. It's not just a contact database - it's a whole AI research assistant doing extra qualification, sending you signals, and preparing personalization angles. The time saved from manual research is massive when you can qualify 500+ companies in under 10 minutes." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-3", children: "My Experience Using It" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "8 months of use, 40,000+ contacts processed. You know perfectly well what a pain account qualification is - but qualifying 500+ companies in under 10 minutes? Hell yeah." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-200 border border-slate-200 rounded-lg p-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 mb-2", children: "Results:" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-700", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "40,000+ contacts processed" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Qualify 500+ companies in 10 minutes with AI" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "5-10% bounce rate on high volume sequences" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-3", children: "Where It Shines" }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed mb-3", children: [
            /* @__PURE__ */ jsx("strong", { children: "Signal building is the killer feature." }),
            " Set up notifications for promotions, funding rounds, position changes, and acquisitions. Be first to send congratulations."
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "AI qualification at scale" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "Signal tracking for key events" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "When you have ICP dialed in" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-3", children: "Who Should Skip This" }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { children: "New founders without ICP dialed in." }),
            " Stick to Apollo or Lusha to test markets first. Clay is for when you're narrowing down on perfect-fit accounts. The dealbreaker: credit-based AI usage burns through credits during testing."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 border border-indigo-200 rounded-lg p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-indigo-600 mb-3", children: "Bottom Line" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Clay is in a league of its own. If you have your ICP dialed in and need to operate at scale while staying personalized, Clay is unmatched. Just be prepared to invest time refining your prompts." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sticky bottom-0 bg-slate-100 border-t border-slate-300 p-6", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: tool.website,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "w-full py-3 px-6 bg-indigo-600 text-slate-900 font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all",
          children: [
            "Try ",
            tool.name,
            " For Free ",
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
          ]
        }
      ) })
    ] }) })
  ] });
};
const pathToLabel = {
  "/": "Home",
  "/library": "Tool Library",
  "/strategies": "Playbook",
  "/consulting": "Consulting",
  "/faq": "FAQ",
  "/reviews": "Tool Reviews",
  "/reviews/reply-io": "Reply.io Review",
  "/reviews/clay": "Clay Review",
  "/comparisons": "Tool Comparisons"
};
const Breadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, "");
  if (currentPath === "" || currentPath === "/") {
    return null;
  }
  const breadcrumbItems = [
    { label: "Home", path: "/" }
  ];
  const pathSegments = currentPath.split("/").filter(Boolean);
  let accumulatedPath = "";
  pathSegments.forEach((segment, index) => {
    var _a;
    accumulatedPath += `/${segment}`;
    const label = pathToLabel[accumulatedPath] || segment;
    if (((_a = breadcrumbItems[breadcrumbItems.length - 1]) == null ? void 0 : _a.path) !== accumulatedPath) {
      breadcrumbItems.push({ label, path: accumulatedPath });
    }
  });
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://saleshousestack.com${item.path === "/" ? "" : item.path}`
    }))
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(breadcrumbSchema) }
      }
    ),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "mb-8", children: /* @__PURE__ */ jsx("ol", { className: "flex items-center gap-2 text-sm", children: breadcrumbItems.map((item, index) => {
      const isLast = index === breadcrumbItems.length - 1;
      return /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
        index > 0 && /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 text-slate-400", "aria-hidden": "true" }),
        isLast ? /* @__PURE__ */ jsx("span", { className: "text-slate-600", "aria-current": "page", children: item.label }) : /* @__PURE__ */ jsx(
          Link,
          {
            to: item.path,
            className: "text-slate-600 hover:text-indigo-600 transition-colors",
            children: item.label
          }
        )
      ] }, item.path);
    }) }) })
  ] });
};
const NavLink = ({ to, icon: Icon, label, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to,
      onClick,
      className: `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${isActive ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" : "text-slate-600 hover:bg-slate-300 hover:text-slate-900"}`,
      children: [
        /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { children: label })
      ]
    }
  );
};
const CalendlyEmbed = () => {
  const embedRef = React.useRef(null);
  const [scriptsLoaded, setScriptsLoaded] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (scriptsLoaded) return;
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setScriptsLoaded(true);
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (link.parentNode) link.parentNode.removeChild(link);
    };
  }, [scriptsLoaded]);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!scriptsLoaded || initialized || !embedRef.current) return;
    if (window.Calendly) {
      embedRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/david-saleshouse/30min?hide_gdpr_banner=1&primary_color=4f46e5",
        parentElement: embedRef.current,
        prefill: {},
        utm: {},
        styles: {
          height: "950px"
        }
      });
      setInitialized(true);
    }
  }, [scriptsLoaded, initialized]);
  return /* @__PURE__ */ jsx("div", { ref: embedRef, style: { minWidth: "320px", height: "950px" }, children: !scriptsLoaded && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsx("div", { className: "text-slate-600", children: "Loading calendar..." }) }) });
};
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl overflow-hidden transition-colors hover:border-slate-200", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full p-6 text-left flex items-start justify-between gap-4 group",
        children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-slate-900 flex items-start gap-2 flex-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600 shrink-0", children: "Q:" }),
            /* @__PURE__ */ jsx("span", { className: "group-hover:text-indigo-600 transition-colors", children: question })
          ] }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: `w-5 h-5 text-slate-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed px-6 pb-6 ml-6", children: answer })
      }
    )
  ] });
};
const Footer = () => /* @__PURE__ */ jsx("footer", { className: "bg-slate-50 text-slate-600 py-12 border-t border-slate-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-12", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 group mb-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(79,70,229,0.5)]", children: "S" }),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-bold tracking-tight text-slate-900", children: "Sales House" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 max-w-xs mb-3", children: "Build your outbound engine. Simpler than you think. No agencies needed." }),
      /* @__PURE__ */ jsxs("a", { href: "mailto:david@saleshousestack.com", className: "text-sm text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
        "david@saleshousestack.com"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/in/davidvaran/", target: "_blank", rel: "noreferrer", className: "text-slate-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: "LinkedIn" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h4", { className: "text-slate-900 font-bold mb-4 uppercase text-xs tracking-wider", children: "Platform" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/library", className: "hover:text-indigo-600 transition-colors", children: "Tool Library" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/strategies", className: "hover:text-indigo-600 transition-colors", children: "Playbook" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/reviews", className: "hover:text-indigo-600 transition-colors", children: "Tool Reviews" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/comparisons", className: "hover:text-indigo-600 transition-colors", children: "Tool Comparisons" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h4", { className: "text-slate-900 font-bold mb-4 uppercase text-xs tracking-wider", children: "Resources" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/consulting", className: "hover:text-indigo-600 transition-colors", children: "Consulting" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/faq", className: "hover:text-indigo-600 transition-colors", children: "FAQ" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "hover:text-indigo-600 transition-colors", children: "Privacy Policy" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/terms", className: "hover:text-indigo-600 transition-colors", children: "Terms of Service" }) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs", children: /* @__PURE__ */ jsx("p", { children: "© 2025 Sales House by David Varan. All rights reserved." }) })
] }) });
const HomePage = ({ openPlaybookForm }) => {
  const [showFullManifesto, setShowFullManifesto] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sales House - Tools, Reviews, Playbooks for Sales Pros" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Unbiased sales tool reviews and comparisons from 6+ years of hands-on experience. Get consulting to build the right stack for your stage." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative bg-[#FEFEFE] text-slate-900 pt-32 pb-24 px-6 overflow-hidden border-b border-slate-200", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto relative z-10 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05] text-slate-900", children: "Reach the clients you need with the right outbound tools" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light", children: "Unbiased reviews, comparisons, and consulting from someone who's implemented these tools. From solo founder to 20-person teams." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/library", className: "px-10 py-5 bg-indigo-600 hover:bg-indigo-600 text-white text-xl font-bold rounded-xl shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all transform hover:-translate-y-1 flex items-center gap-3 border border-indigo-500", children: [
            "Show Me The Best Tools ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/strategies", className: "px-10 py-5 bg-transparent hover:bg-slate-100 text-slate-700 text-xl font-semibold rounded-xl border-2 border-slate-300 transition-all flex items-center gap-3", children: "View Playbook" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-indigo-600" }),
            /* @__PURE__ */ jsx("span", { children: "No sponsored reviews" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-indigo-600" }),
            /* @__PURE__ */ jsx("span", { children: "6+ years experience" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-indigo-600" }),
            /* @__PURE__ */ jsx("span", { children: "Updated December 2025" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "featured-stack", className: "py-24 bg-slate-50 text-slate-900 px-6 border-b border-slate-200 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-indigo-950/10" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center mb-12 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-2", children: "My Recommended Stack (December 2025)" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm", children: "Tested, trusted, and currently in use" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/library", className: "flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors", children: [
            "View All Tools ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-6", children: TOOLS.filter((t) => ["clay", "reply", "hubspot", "mailforge"].includes(t.id)).map((tool) => /* @__PURE__ */ jsx(ToolCard, { tool, showChannels: false }, tool.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#FEFEFE] border-b border-slate-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900", children: "A Realistic Cost of Scaling for Founders" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 mt-2 max-w-2xl mx-auto", children: "If you have more than a few functional braincells, this setup can be done in less than a few days. It is significantly cheaper than hiring a dedicated person, and more reliable than hoping for a viral TikTok post or blasting ads on Facebook." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-2xl overflow-hidden shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-800", children: [
          { name: "HubSpot", cost: "$0 - $119", period: "/mo", icon: LayoutDashboard, link: "https://www.hubspot.com" },
          { name: "Clay", cost: "$149", period: "/mo", icon: Database, link: "https://clay.com?via=c74a80" },
          { name: "Reply.io", cost: "$99", period: "/mo", icon: Megaphone, link: "https://get.reply.io/scaleoutbound" },
          { name: "Mailforge", cost: "$39", period: "/mo", icon: ShieldCheck, link: "https://www.mailforge.ai/?via=outboundsales" },
          { name: "Apollo", cost: "$0 - $119", period: "/mo", icon: Target, link: "https://get.apollo.io/scaleoutbound" }
        ].map((item, idx) => /* @__PURE__ */ jsxs("a", { href: item.link, target: "_blank", rel: "noopener noreferrer", className: "p-6 flex flex-col items-center text-center hover:bg-slate-300/70 transition-all duration-300 group cursor-pointer", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 p-3 bg-slate-200 rounded-full text-slate-600 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all duration-300", "aria-hidden": "true", children: /* @__PURE__ */ jsx(item.icon, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-slate-900 font-bold mb-1", children: item.name }),
          /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold text-indigo-600 mb-2", children: [
            item.cost,
            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-600 font-medium ml-1", children: item.period })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity", children: "Try for Free →" })
        ] }, idx)) }),
        /* @__PURE__ */ jsx("div", { className: "bg-slate-50/50 p-6 border-t border-slate-300 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-sm", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 inline-block mr-2 text-indigo-500" }),
          "Total Stack Cost: ",
          /* @__PURE__ */ jsx("strong", { children: "~$350 - $500/mo" }),
          " vs. ",
          /* @__PURE__ */ jsx("strong", { children: "$4,500/mo" }),
          " for a single SDR."
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-300 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05),transparent_70%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-slate-900 mb-6", children: "Experience Across SaaS Companies & Team Sizes" }),
          /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-lg text-slate-600 mb-6 leading-relaxed", children: [
              "I've worked across SaaS, Fintech, and Traditional sales companies from early-stage to scale-up—spanning from ",
              /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "5-figure ARR startups - 7-figure ARR companies" }),
              ". I've set up sales operations for:"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white border-2 border-indigo-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx("div", { className: "text-indigo-600 font-bold mb-2", children: "Solo founders" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-600", children: "Just you + a few freelancers" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white border-2 border-indigo-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx("div", { className: "text-indigo-600 font-bold mb-2", children: "Small teams" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-600", children: "1-10 SDRs/AEs" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white border-2 border-indigo-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx("div", { className: "text-indigo-600 font-bold mb-2", children: "Growing teams" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-600", children: "10-20 people, multiple roles" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm uppercase tracking-wider", children: "Companies I've Worked With" }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: [
          { name: "SORSEO", logo: "/client logos/sor_seo_logo.jpeg" },
          { name: "Whatagraph", logo: "/client logos/whatagraph_logo.jpeg" },
          { name: "RoyaltyRange", logo: "/client logos/royaltyrange_logo.jpeg" },
          { name: "GPSWOX", logo: "/client logos/gpswox_logo.jpeg" },
          { name: "Walk15", logo: "/client logos/walk15_logo.jpeg" },
          { name: "CTO2B", logo: "/client logos/cto2b_logo.jpeg" },
          { name: "HEMES", logo: "/client logos/hemes1_logo.jpeg" },
          { name: "Glassique Cadeau", logo: "/client logos/glassique_logo.png" },
          { name: "Finfra", logo: "/client logos/finfra_logo.jpeg" },
          { name: "+ 10 other", logo: null }
        ].map((company) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `group relative bg-white border border-slate-300 rounded-xl p-4 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 flex items-center shadow-sm hover:shadow-md ${company.logo ? "gap-3" : "justify-center"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300" }),
              company.logo && /* @__PURE__ */ jsx(
                "img",
                {
                  src: company.logo,
                  alt: `${company.name} logo`,
                  className: "w-8 h-8 object-contain shrink-0 relative z-10"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-slate-900 font-semibold text-sm md:text-base transition-colors duration-300 relative z-10", children: company.name })
            ]
          },
          company.name
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-slate-50 relative border-b border-slate-200", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-stretch", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-2/3 w-full flex flex-col gap-6 h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden flex-shrink-0", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-600" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-700 leading-relaxed text-lg", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "I'm a Head of Sales + RevOps consultant" }),
              " with under 5 years of Marketing experience and 6+ years of Sales experience. I've built B2B teams and outbound systems targeting North America, LATAM, and EMEA."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "First, the volume of questions I kept getting about tool stacks and outbound setups was getting more frequent. It made sense to put everything in one place so people can find answers fast in this library." }),
            /* @__PURE__ */ jsx("p", { children: "Second, founders waste too much time and money on modular, gimmicky tools. Outbound is simpler than you think. With the right setup, anyone can run it themselves and feel confident doing it." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 flex-1", children: [
          { icon: Phone, val: "100k+", label: "Cold Calls" },
          { icon: Trophy, val: "$1.5m+", label: "ARR Closed Won" },
          { icon: Mail, val: "500k+", label: "Emails Sent" },
          { icon: Calendar, val: "200+", label: "Demos Booked" }
        ].map((stat, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-6 rounded-2xl border border-slate-300 flex flex-col items-center justify-center text-center hover:bg-slate-300/80 transition-all hover:border-slate-200 group h-full", children: [
          /* @__PURE__ */ jsx(stat.icon, { className: "w-6 h-6 text-indigo-600 mb-3 group-hover:scale-110 transition-transform opacity-80" }),
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-slate-900 mb-1", children: stat.val }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider", children: stat.label })
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:w-1/3 w-full flex min-h-[600px]", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-slate-300 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 w-full shadow-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/david-profile.jpg",
              alt: "David Varan, Sales Operations Consultant and Founder of Sales House",
              className: "w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105",
              style: { objectPosition: "center 20%" }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/60 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-start", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-1", children: "David" }),
          /* @__PURE__ */ jsx("p", { className: "text-indigo-300 font-medium mb-6", children: "Head of Sales & Creator" }),
          /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2", children: [
            /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/in/davidvaran/", target: "_blank", rel: "noreferrer", className: "flex items-center justify-center gap-2 w-full py-2.5 bg-[#0077b5] hover:bg-[#006399] text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-900/20", children: [
              /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4" }),
              " Connect on LinkedIn"
            ] }),
            /* @__PURE__ */ jsxs("a", { href: "mailto:david@saleshousestack.com", className: "flex items-center justify-center gap-2 w-full py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-lg font-bold text-sm transition-all border border-white/10", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
              " Email Me"
            ] })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 bg-[#FEFEFE] border-b border-slate-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900 mb-4", children: "Why Outbound?" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-2xl border border-red-300 relative overflow-hidden h-full shadow-md", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-red-500/50" }),
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-slate-900 mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-red-500" }),
            " Paid Advertising"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider mb-3", children: "The Bad" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-600 text-sm", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-red-500 shrink-0 mt-0.5" }),
                " Pay to learn"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-red-500 shrink-0 mt-0.5" }),
                " Bot traffic"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-red-500 shrink-0 mt-0.5" }),
                " At scale: diminishing returns"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider mb-3", children: "The Good" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-600 text-sm", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-slate-600 shrink-0 mt-0.5" }),
                " Fast top-of-funnel scale (if budget is big)"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-slate-600 shrink-0 mt-0.5" }),
                " Easy to test multiple ICPs (if you enjoy burning money)"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-2xl border border-orange-300 relative overflow-hidden h-full shadow-md", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-orange-500/50" }),
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-slate-900 mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-orange-500" }),
            " Organic Marketing"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider mb-3", children: "The Bad" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-600 text-sm", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-orange-500 shrink-0 mt-0.5" }),
                " 6-18 months delayed ROI"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-orange-500 shrink-0 mt-0.5" }),
                " Google controls your fate"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-orange-500 shrink-0 mt-0.5" }),
                " Requires heavy consistency"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(X, { className: "w-4 h-4 text-orange-500 shrink-0 mt-0.5" }),
                " Hard to track real attribution"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider mb-3", children: "The Good" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-600 text-sm", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-slate-600 shrink-0 mt-0.5" }),
                " Long-term compounding ROI (if it hits)"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-slate-600 shrink-0 mt-0.5" }),
                " Lower maintenance (after years of effort)"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-2xl border-2 border-indigo-400 relative overflow-hidden shadow-lg shadow-indigo-200 h-full", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-indigo-600" }),
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-slate-900 mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-indigo-600" }),
            " Outbound (My Way)"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-indigo-600 uppercase tracking-wider mb-3", children: "The Great" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-700 text-sm", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-indigo-600 shrink-0 mt-0.5" }),
                " Full control over volume and targeting"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-indigo-600 shrink-0 mt-0.5" }),
                " Works with zero brand awareness"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-indigo-600 shrink-0 mt-0.5" }),
                " Direct line to decision-makers"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-indigo-600 shrink-0 mt-0.5" }),
                " Instant validation & low upfront cost"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-indigo-600 shrink-0 mt-0.5" }),
                " Highest ROI channel in B2B"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-indigo-600 shrink-0 mt-0.5" }),
                " Re-usable engine"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider mb-3", children: "The Reality" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-600 text-sm", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-slate-600 shrink-0 mt-0.5" }),
                " Requires experience (which I'm sharing)"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-slate-600 shrink-0 mt-0.5" }),
                " Can burn lists if done badly"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-slate-600 shrink-0 mt-0.5" }),
                " Needs regular optimization"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-slate-600 shrink-0 mt-0.5" }),
                " Requires thick skin (You'll get told off)"
              ] })
            ] })
          ] })
        ] })
      ] }),
      !showFullManifesto && /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setShowFullManifesto(true),
          className: "inline-flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-lg transition-colors font-medium border border-slate-200",
          children: [
            "Read Full Manifesto ",
            /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" })
          ]
        }
      ) }),
      showFullManifesto && /* @__PURE__ */ jsxs("div", { className: "animate-fadeIn", children: [
        /* @__PURE__ */ jsxs("div", { className: "prose prose-lg prose-invert text-slate-600 leading-relaxed space-y-6 mx-auto", children: [
          /* @__PURE__ */ jsx("p", { children: "Fundamentally, I've been working in sales for 6+ years and have consulted small and mid-size sales teams on developing their strategies as well as tool stacks." }),
          /* @__PURE__ */ jsx("p", { children: "What I see very often is too much focus on a higher headcount instead of utilizing the SDR or AE time to the fullest. What opens doors for companies to improve their pipeline and keep the AEs happy is to have a healthy influx of top-funnel leads." }),
          /* @__PURE__ */ jsx("p", { children: "There are basically 2 methods of how you can generate leads: marketing and outbound. Marketing works well if you have a budget, have room for A/B testing, and are not yet sure about your target audience. For marketing to be effective, you need to be good at landing pages, website design, funnel creation, and retargeting. If we're looking at a social media platform like LinkedIn for B2B lead gen - it's crazy expensive. 9 out of 10 companies up to 10 employees do not have the headroom for those kind of budgets." }),
          /* @__PURE__ */ jsx("p", { children: "Whereas with Outbound, your strategies are simpler and you have significantly more control. You can generate a laser-focused list of contacts and prepare a sequence of emails + LinkedIn messages for them on the same day. By Day 2, you'll already be outreaching and can experiment and iterate on what works and doesn't. The cost-to-results ratio is significantly in outbound's favor. And I have done both." }),
          /* @__PURE__ */ jsx("p", { children: "All popular modern channels where you can run marketing, you can safely run outbound via messaging as well: Instagram, Facebook, Twitter, TikTok, LinkedIn, X (Twitter)." }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-900 mt-8", children: "The Vibecoder Advantage" }),
          /* @__PURE__ */ jsx("p", { children: "Also, if you're a serial entrepreneur, vibecoder, or running affiliate programs - the whole tool stack is reusable. You probably won't want to re-use the CRM, as different products = different markets, but the whole outbound strategy can be re-used." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 bg-slate-100 rounded-2xl p-8 border border-slate-300", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-6 h-6 text-rose-500 shrink-0 mt-1 fill-rose-500/10" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-slate-900 mb-2", children: "Full Transparency: What's in it for me?" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm leading-relaxed", children: "Generally, as I've been getting more and more questions on these topics, writing the same messages and sharing the same insights, I decided it just makes sense to put together a form of a library where I can share what tools I've used and what are my thoughts about them. All I'm getting in return from this is a small kickback from some of the affiliate programs if you do decide to trust my judgement and use the tools I recommend." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "text-center pt-8", children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setShowFullManifesto(false),
            className: "inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium",
            children: [
              "Show Less ",
              /* @__PURE__ */ jsx(ChevronUp, { className: "w-4 h-4" })
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-slate-50 text-slate-900 px-6 border-b border-slate-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Common Questions" }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            question: "Will this work for my industry?",
            answer: "Honestly, you'll only know when you test. Your goal is to provide a solution to businesses. I generally do not recommend fixing a problem for industries you do not understand."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            question: "What if I get marked as spam?",
            answer: "With this setup you have 9 mailboxes, 3 domains, and you're using warm-ups to make sure the risk of being flagged as spam is less likely. The lists you generate from Clay.com or Apollo are fully GDPR and Data Privacy laws compliant. Even if you do get marked as spam - you're okay, it will happen. You'll also be told to F off multiple times as you are outreaching cold. It comes with the territory."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            question: "How long before I see results?",
            answer: "Under 2 weeks you'll have a very good understanding if there is a product market fit (demos booked or trial requests), and if the messaging is good (open rate, reply rate)."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            question: "Can I do this with a smaller budget?",
            answer: "This setup costs under $500 a month. An SDR will cost you 30-50k annually. You do the math."
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsx(
        Link,
        {
          to: "/faq",
          className: "inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-600 transition-colors",
          children: "See All FAQs"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-6 border-t border-slate-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 relative z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block px-3 py-1 bg-indigo-100 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200 text-indigo-900", children: "Free Resource" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4 text-slate-900", children: "Get The Full Playbook" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 text-lg mb-6 leading-relaxed", children: "It's a full Notion setup for getting started with outbound, including message templates, Clay setup, checklist." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: openPlaybookForm,
            className: "inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
              " Get The Playbook"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/3 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "bg-slate-100 p-1 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-300 rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center text-slate-600", children: [
        /* @__PURE__ */ jsx(FileText, { className: "w-12 h-12 mb-2 text-indigo-600", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-slate-600", children: "Notion" })
      ] }) }) })
    ] }) })
  ] });
};
const LibraryPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedTeamSize, setSelectedTeamSize] = React.useState("");
  const [selectedLearningCurve, setSelectedLearningCurve] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const filteredTools = React.useMemo(() => {
    return TOOLS.filter((tool) => {
      if (searchQuery && !tool.name.toLowerCase().includes(searchQuery.toLowerCase()) && !tool.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (selectedTeamSize && !tool.bestFor.some((size) => size === selectedTeamSize)) {
        return false;
      }
      if (selectedLearningCurve && tool.learningCurve !== selectedLearningCurve) {
        return false;
      }
      if (selectedCategory && tool.category !== selectedCategory) {
        return false;
      }
      return true;
    });
  }, [searchQuery, selectedTeamSize, selectedLearningCurve, selectedCategory]);
  const sections = [
    { id: ToolCategory.CRM, title: "CRM" },
    { id: ToolCategory.SALES_ENGAGEMENT, title: "Sales Engagement" },
    { id: ToolCategory.CONTACTS, title: "Contacts & Intelligence" },
    { id: ToolCategory.SCHEDULING, title: "Scheduling" },
    { id: ToolCategory.INFRASTRUCTURE, title: "Infrastructure (Mailbox)" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "p-6 max-w-7xl mx-auto min-h-screen bg-[#FEFEFE]", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sales Tool Library - Compare 15+ Vetted Sales Engagement & CRM Tools | Sales House" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Compare 15+ vetted sales engagement, CRM, and contact tools. Pricing, pros, cons, and channels—find your perfect sales stack." })
    ] }),
    /* @__PURE__ */ jsx(Breadcrumb, {}),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-slate-900 mb-2", children: "Tool Library" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Curated stack for modern sales teams." })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsFilterOpen(true),
        className: "fixed right-6 top-24 z-40 w-14 h-14 bg-indigo-600 hover:bg-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group",
        "aria-label": "Open filters",
        children: [
          /* @__PURE__ */ jsx(Filter, { className: "w-6 h-6" }),
          (searchQuery || selectedTeamSize || selectedLearningCurve || selectedCategory) && /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full text-xs flex items-center justify-center font-bold", children: [searchQuery, selectedTeamSize, selectedLearningCurve, selectedCategory].filter(Boolean).length })
        ]
      }
    ),
    isFilterOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 z-40 transition-opacity",
        onClick: () => setIsFilterOpen(false)
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `fixed right-0 top-0 h-full w-full max-w-md bg-slate-100 border-l border-slate-300 z-50 transform transition-transform duration-300 overflow-y-auto ${isFilterOpen ? "translate-x-0" : "translate-x-full"}`, children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Filter, { className: "w-5 h-5 text-indigo-600" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-slate-900", children: "Search & Filter" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsFilterOpen(false),
            className: "p-2 hover:bg-slate-300 rounded-lg transition-colors",
            children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-slate-600" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mb-6", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-600" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search tools...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "w-full pl-10 pr-4 py-3 bg-slate-200 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2", children: "Team Size" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: selectedTeamSize,
              onChange: (e) => setSelectedTeamSize(e.target.value),
              className: "w-full px-3 py-2 bg-slate-200 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "All Sizes" }),
                /* @__PURE__ */ jsx("option", { value: "Founders", children: "Founders" }),
                /* @__PURE__ */ jsx("option", { value: "Small Team (2-10)", children: "Small Team (2-10)" }),
                /* @__PURE__ */ jsx("option", { value: "Mid-Scale (10-20)", children: "Mid-Scale (10-20)" }),
                /* @__PURE__ */ jsx("option", { value: "Enterprise (20+)", children: "Enterprise (20+)" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2", children: "Learning Curve" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: selectedLearningCurve,
              onChange: (e) => setSelectedLearningCurve(e.target.value),
              className: "w-full px-3 py-2 bg-slate-200 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "All Levels" }),
                /* @__PURE__ */ jsx("option", { value: "Beginner", children: "Beginner" }),
                /* @__PURE__ */ jsx("option", { value: "Intermediate", children: "Intermediate" }),
                /* @__PURE__ */ jsx("option", { value: "Expert", children: "Expert" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2", children: "Category" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: selectedCategory,
              onChange: (e) => setSelectedCategory(e.target.value),
              className: "w-full px-3 py-2 bg-slate-200 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "All Categories" }),
                /* @__PURE__ */ jsx("option", { value: "CRM", children: "CRM" }),
                /* @__PURE__ */ jsx("option", { value: "Sales Engagement", children: "Sales Engagement" }),
                /* @__PURE__ */ jsx("option", { value: "Contacts & Intelligence", children: "Contacts & Intelligence" }),
                /* @__PURE__ */ jsx("option", { value: "Scheduling", children: "Scheduling" }),
                /* @__PURE__ */ jsx("option", { value: "Infrastructure (Mailbox)", children: "Infrastructure" })
              ]
            }
          )
        ] })
      ] }),
      (searchQuery || selectedTeamSize || selectedLearningCurve || selectedCategory) && /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-slate-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-slate-600", children: "Active Filters" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setSearchQuery("");
                setSelectedTeamSize("");
                setSelectedLearningCurve("");
                setSelectedCategory("");
              },
              className: "text-xs text-indigo-600 hover:text-indigo-700 transition-colors",
              children: "Clear All"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          searchQuery && /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setSearchQuery(""),
              className: "px-2 py-1 bg-indigo-100 border border-indigo-500/30 rounded text-xs text-indigo-700 hover:bg-indigo-600/30 transition-colors flex items-center gap-1",
              children: [
                '"',
                searchQuery,
                '" ',
                /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
              ]
            }
          ),
          selectedTeamSize && /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setSelectedTeamSize(""),
              className: "px-2 py-1 bg-indigo-100 border border-indigo-500/30 rounded text-xs text-indigo-700 hover:bg-indigo-600/30 transition-colors flex items-center gap-1",
              children: [
                selectedTeamSize,
                " ",
                /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
              ]
            }
          ),
          selectedLearningCurve && /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setSelectedLearningCurve(""),
              className: "px-2 py-1 bg-indigo-100 border border-indigo-500/30 rounded text-xs text-indigo-700 hover:bg-indigo-600/30 transition-colors flex items-center gap-1",
              children: [
                selectedLearningCurve,
                " ",
                /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
              ]
            }
          ),
          selectedCategory && /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setSelectedCategory(""),
              className: "px-2 py-1 bg-indigo-100 border border-indigo-500/30 rounded text-xs text-indigo-700 hover:bg-indigo-600/30 transition-colors flex items-center gap-1",
              children: [
                selectedCategory,
                " ",
                /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-slate-300 text-sm text-slate-600", children: [
        "Showing ",
        /* @__PURE__ */ jsx("span", { className: "text-slate-900 font-semibold", children: filteredTools.length }),
        " of ",
        TOOLS.length,
        " tools"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-12 bg-gradient-to-br from-indigo-950/30 to-purple-950/20 rounded-2xl border border-indigo-500/20 p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-indigo-600" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "My Current Favourite Sales Stack" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: TOOLS.filter((t) => ["clay", "reply", "hubspot", "mailforge"].includes(t.id)).map((tool) => /* @__PURE__ */ jsx(ToolCard, { tool, showChannels: false }, tool.id)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-12", children: sections.map((section) => {
      const sectionTools = filteredTools.filter((t) => t.category === section.id);
      if (sectionTools.length === 0) return null;
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-800", children: section.title }),
          /* @__PURE__ */ jsx("div", { className: "h-px bg-slate-200 flex-1" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: sectionTools.map((tool) => /* @__PURE__ */ jsx(ToolCard, { tool }, tool.id)) })
      ] }, section.id);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 mb-8 text-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl p-8", children: [
      /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-indigo-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-900 mb-2", children: "Want Your Tool Featured?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 mb-4", children: "Do you want your tool to be tested and listed here? Drop me an email." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:david@saleshousestack.com",
            className: "inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-600 text-white font-bold rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
              "Contact Me"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/davidvaran/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold rounded-lg transition-colors border border-slate-200",
            children: [
              /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4" }),
              "LinkedIn"
            ]
          }
        )
      ] })
    ] }) })
  ] });
};
const MetricsCalculator = () => {
  const [emailsPerDay, setEmailsPerDay] = useState(50);
  const [numDomains, setNumDomains] = useState(3);
  const [acv, setAcv] = useState(1500);
  const [closeRate, setCloseRate] = useState(15);
  const emailsPerMonth = emailsPerDay * 22;
  const totalEmailsPerMonth = emailsPerMonth * numDomains;
  const opens = Math.round(totalEmailsPerMonth * 0.35);
  const replies = Math.round(totalEmailsPerMonth * 0.03);
  const meetings = Math.round(totalEmailsPerMonth * 0.015);
  const deals = Math.round(meetings * (closeRate / 100));
  const revenue = deals * acv;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 mb-2", children: "Emails per day (per inbox)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "20",
              max: "100",
              value: emailsPerDay,
              onChange: (e) => setEmailsPerDay(Number(e.target.value)),
              className: "w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-600", children: "20" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-indigo-600", children: emailsPerDay }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-600", children: "100" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 mb-2", children: "Number of domains (inboxes)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "1",
              max: "9",
              value: numDomains,
              onChange: (e) => setNumDomains(Number(e.target.value)),
              className: "w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-600", children: "1" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-indigo-600", children: numDomains }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-600", children: "9" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 mb-2", children: "Average Deal Value (ACV)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "500",
              max: "10000",
              step: "500",
              value: acv,
              onChange: (e) => setAcv(Number(e.target.value)),
              className: "w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-600", children: "$500" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-indigo-600", children: [
              "$",
              acv.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-600", children: "$10k" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 mb-2", children: "Close Rate (%)" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              min: "1",
              max: "20",
              value: closeRate,
              onChange: (e) => setCloseRate(Number(e.target.value)),
              className: "w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-600", children: "1%" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-indigo-600", children: [
              closeRate,
              "%"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-600", children: "20%" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-5 gap-4 pt-6 border-t border-slate-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-50/50 p-4 rounded-lg border border-slate-300 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-slate-700 mb-1", children: totalEmailsPerMonth.toLocaleString() }),
        /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider", children: "Total Emails/Mo" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-50/50 p-4 rounded-lg border border-slate-300 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-slate-700 mb-1", children: opens.toLocaleString() }),
        /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider", children: "Opens (35%)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-50/50 p-4 rounded-lg border border-slate-300 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-slate-700 mb-1", children: replies.toLocaleString() }),
        /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider", children: "Replies (3%)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-50/50 p-4 rounded-lg border border-slate-300 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-slate-700 mb-1", children: meetings }),
        /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider", children: "Meetings (1.5%)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-50/50 p-4 rounded-lg border border-slate-300 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-green-600 mb-1", children: [
          "$",
          revenue.toLocaleString()
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider", children: "Revenue/Mo" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-4 bg-slate-50/30 rounded-lg border border-slate-300", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 leading-relaxed", children: [
      /* @__PURE__ */ jsx("strong", { className: "text-slate-700", children: "How this works:" }),
      " ",
      emailsPerDay,
      " emails/day × ",
      numDomains,
      " inboxes × 22 working days = ",
      totalEmailsPerMonth.toLocaleString(),
      " emails/month. At standard rates (35% open, 3% reply, 1.5% meeting) you get ",
      meetings,
      " demos. With ",
      closeRate,
      "% close rate at $",
      acv.toLocaleString(),
      " ACV = ",
      /* @__PURE__ */ jsxs("strong", { className: "text-indigo-600", children: [
        "$",
        revenue.toLocaleString(),
        "/month potential revenue"
      ] }),
      "."
    ] }) })
  ] });
};
const StrategiesPage = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("saleshouse-checklist-progress");
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("saleshouse-checklist-progress", JSON.stringify(checkedItems));
    }
  }, [checkedItems]);
  const toggleStep = (stepId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#FEFEFE] min-h-screen", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Free Outbound Playbook - Complete Cold Email Setup Guide | Sales House" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Free Notion template with proven cold email sequences, Clay workflows, and deliverability checklists. Built by sales operators." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 pt-6", children: /* @__PURE__ */ jsx(Breadcrumb, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-10 text-center md:text-left px-6 max-w-7xl mx-auto pt-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-slate-900 mb-4", children: "From Zero to Booked Calendar" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-3xl", children: "The playbook that generates 50 qualified leads per month for B2B SaaS companies - without cold calling or manual prospecting." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 px-6 max-w-7xl mx-auto", children: STRATEGIES.map((strategy) => {
      var _a, _b;
      const totalSteps = ((_a = strategy.steps) == null ? void 0 : _a.length) || 0;
      const completedSteps = ((_b = strategy.steps) == null ? void 0 : _b.filter((_, idx) => checkedItems[`${strategy.id}-${idx}`]).length) || 0;
      const progress = totalSteps > 0 ? completedSteps / totalSteps * 100 : 0;
      return /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 rounded-xl border border-indigo-500 shadow-xl shadow-indigo-500/10 overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-2", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-900", children: strategy.title }) }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm", children: strategy.summary })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6 w-full md:w-auto justify-between md:justify-end", children: totalSteps > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-1", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold text-indigo-600", children: [
              Math.round(progress),
              "% Complete"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-indigo-600 transition-all duration-500", style: { width: `${progress}%` } }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-slate-300 bg-slate-50/30 p-6 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(ListTodo, { className: "w-4 h-4 text-indigo-500" }),
              " Execution Checklist"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: strategy.steps && strategy.steps.length > 0 ? strategy.steps.map((step, idx) => {
              const stepId = `${strategy.id}-${idx}`;
              const isChecked = checkedItems[stepId];
              const match = step.match(/^(.+?)\s*\(([^)]+)\)$/);
              const stepText = match ? match[1] : step;
              const timeEstimate = match ? match[2] : null;
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  onClick: () => toggleStep(stepId),
                  className: `flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${isChecked ? "bg-indigo-900/10 border-indigo-500/30" : "bg-slate-100 border-slate-300 hover:border-slate-200"}`,
                  children: [
                    /* @__PURE__ */ jsx("div", { className: `w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isChecked ? "bg-indigo-600 border-indigo-500" : "border-slate-600"}`, children: isChecked && /* @__PURE__ */ jsx(Check, { className: "w-3 h-3 text-slate-900" }) }),
                    /* @__PURE__ */ jsx("span", { className: `flex-1 text-sm ${isChecked ? "text-slate-600 line-through" : "text-slate-800"}`, children: stepText }),
                    timeEstimate && /* @__PURE__ */ jsx("span", { className: `text-xs shrink-0 ${isChecked ? "text-slate-600" : "text-slate-600"}`, children: timeEstimate })
                  ]
                },
                idx
              );
            }) : /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm italic", children: "No specific steps defined for this strategy." }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-slate-900 uppercase tracking-wider mb-3", children: "Recommended Stack" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: strategy.recommendedStack.map((toolId) => {
                const tool = TOOLS.find((t) => t.id === toolId);
                return tool ? /* @__PURE__ */ jsxs("a", { href: tool.website, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 p-2 rounded bg-slate-100 border border-slate-300 hover:border-indigo-500/30 transition-colors group", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1 h-8 bg-indigo-600 rounded-full" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-slate-700 group-hover:text-slate-900", children: tool.name }),
                  /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3 text-slate-600 ml-auto group-hover:text-indigo-600" })
                ] }, toolId) : null;
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-4 rounded-lg border border-slate-300", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2 text-indigo-600", children: [
                /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase", children: "Focus Area" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-700 leading-relaxed", children: strategy.focusArea })
            ] })
          ] })
        ] }) })
      ] }, strategy.id);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "mt-6 bg-slate-100 rounded-xl border border-indigo-500 shadow-xl shadow-indigo-500/10 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "p-6 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 border border-slate-300 rounded-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-6", children: [
        /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5 text-indigo-600 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-slate-900 mb-1", children: "What Can I Expect?" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm", children: "Interactive calculator - adjust inputs to see your potential results" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(MetricsCalculator, {})
    ] }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "mt-6 bg-slate-100 rounded-xl border border-indigo-500 shadow-xl shadow-indigo-500/10 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "p-6 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-100 border border-slate-300 rounded-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-indigo-600 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-slate-900", children: "What Happens Next?" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-700 text-sm leading-relaxed", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Once you complete this setup, you have the ",
          /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "fundamentals for an outbound top-of-funnel engine" }),
          ". The only remaining decision is your conversion path based on ticket size."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-50/50 rounded-lg border border-slate-300", children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-bold text-slate-900 mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
              " Self-Service Path"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "For lower ACV products (<$1.5k). Direct leads to sign-up or trial pages." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-50/50 rounded-lg border border-slate-300", children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-bold text-slate-900 mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
              " Demo/Discovery Path"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "For higher ACV ($1.5k+). Book demos to understand needs and qualify prospects." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Why demos matter at $1.5k+ ACV:" }),
          " Beyond the revenue, discovery calls give you critical insights into your audience's pain points, buying process, and objections. This intelligence loop refines your messaging over time."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-600 italic", children: [
          "If you're a senior sales professional, you already know this. You're using this playbook to ",
          /* @__PURE__ */ jsx("strong", { className: "text-slate-700", children: "scale top-funnel volume" }),
          " while maintaining quality conversations."
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxs("section", { id: "featured-stack", className: "mt-6 py-16 bg-slate-50 text-slate-900 px-6 border-b border-slate-200 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-indigo-950/10" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center mb-12 gap-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "My Current Favourite Sales Stack" }),
          /* @__PURE__ */ jsxs(Link, { to: "/library", className: "flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors", children: [
            "View All Tools ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-6", children: TOOLS.filter((t) => ["clay", "reply", "hubspot", "mailforge"].includes(t.id)).map((tool) => /* @__PURE__ */ jsx(ToolCard, { tool, showChannels: false }, tool.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto bg-slate-100 rounded-xl border border-slate-300 p-8 md:p-12 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-slate-900 mb-4", children: "Need Help or Have Questions?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-lg mb-8 max-w-2xl mx-auto", children: "Feel free to drop me an email or a message on LinkedIn if you need some ideas or suggestions." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:david@saleshousestack.com",
            className: "flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
              "Send Email"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/davidvaran/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded-lg border border-slate-200 transition-colors",
            children: [
              /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" }),
              "Connect on LinkedIn"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-white px-6 border-t border-slate-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 relative z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block px-3 py-1 bg-indigo-100 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200 text-indigo-900", children: "Free Resource" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4 text-slate-900", children: "Get The Full Playbook" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 text-lg mb-6 leading-relaxed", children: "It's a full Notion setup for getting started with outbound, including message templates, Clay setup, checklist." }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://tally.so/r/mDOGeq",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
              " Get The Playbook"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/3 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "bg-slate-100 p-1 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-300 rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center text-slate-600", children: [
        /* @__PURE__ */ jsx(FileText, { className: "w-12 h-12 mb-2 text-indigo-600" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-slate-600", children: "Notion" })
      ] }) }) })
    ] }) })
  ] });
};
const PrivacyPolicyPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "p-6 max-w-4xl mx-auto bg-[#FEFEFE] min-h-screen", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-slate-900 mb-3", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm", children: "Last Updated: January 2, 2025" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-invert prose-slate max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: 'Sales House ("we," "us," or "our") operates saleshousestack.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.' }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mt-4", children: "By using Sales House, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use our services." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "1." }),
          " Information We Collect"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Personal Information" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "We may collect personal information that you voluntarily provide to us when you:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-slate-700 mt-2 space-y-1 ml-4", children: [
              /* @__PURE__ */ jsx("li", { children: "Subscribe to our newsletter or email list" }),
              /* @__PURE__ */ jsx("li", { children: "Schedule a consultation or meeting through Calendly" }),
              /* @__PURE__ */ jsx("li", { children: "Contact us via email or contact forms" }),
              /* @__PURE__ */ jsx("li", { children: "Participate in surveys or promotions" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mt-3", children: "This information may include: email address, name, company name, and any other information you choose to provide." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Automatically Collected Information" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "When you visit our website, we automatically collect certain information about your device and browsing actions, including:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-slate-700 mt-2 space-y-1 ml-4", children: [
              /* @__PURE__ */ jsx("li", { children: "IP address and general location data" }),
              /* @__PURE__ */ jsx("li", { children: "Browser type and version" }),
              /* @__PURE__ */ jsx("li", { children: "Pages visited and time spent on pages" }),
              /* @__PURE__ */ jsx("li", { children: "Referring website addresses" }),
              /* @__PURE__ */ jsx("li", { children: "Device information (operating system, screen resolution)" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "2." }),
          " How We Use Your Information"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "We use the information we collect to:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-slate-700 space-y-2 ml-4", children: [
          /* @__PURE__ */ jsx("li", { children: "Send you our newsletter, sales tactics, and product recommendations" }),
          /* @__PURE__ */ jsx("li", { children: "Respond to your inquiries and provide customer support" }),
          /* @__PURE__ */ jsx("li", { children: "Schedule and manage consultations or meetings" }),
          /* @__PURE__ */ jsx("li", { children: "Improve our website content, layout, and services" }),
          /* @__PURE__ */ jsx("li", { children: "Analyze website usage and trends" }),
          /* @__PURE__ */ jsx("li", { children: "Send promotional communications (you can opt-out at any time)" }),
          /* @__PURE__ */ jsx("li", { children: "Comply with legal obligations" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "3." }),
          " Third-Party Services"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "We use the following third-party services that may collect, use, and process your data:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-50/50 rounded-lg border border-slate-300", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: "Klaviyo (Email Marketing)" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 text-sm leading-relaxed", children: "We use Klaviyo to manage our email marketing and newsletter subscriptions. When you subscribe to our newsletter, your email address and any provided information is stored and processed by Klaviyo." }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-xs mt-2", children: [
              "Privacy Policy: ",
              /* @__PURE__ */ jsx("a", { href: "https://www.klaviyo.com/legal/privacy", target: "_blank", rel: "noopener noreferrer", className: "text-indigo-600 hover:underline", children: "https://www.klaviyo.com/legal/privacy" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-50/50 rounded-lg border border-slate-300", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: "Calendly (Scheduling)" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 text-sm leading-relaxed", children: "We use Calendly to manage meeting and consultation scheduling. When you book a meeting, Calendly collects your name, email address, and any other information you provide in the booking form." }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-xs mt-2", children: [
              "Privacy Policy: ",
              /* @__PURE__ */ jsx("a", { href: "https://calendly.com/privacy", target: "_blank", rel: "noopener noreferrer", className: "text-indigo-600 hover:underline", children: "https://calendly.com/privacy" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-50/50 rounded-lg border border-slate-300", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: "Analytics Services" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 text-sm leading-relaxed", children: "We may use analytics services to understand how visitors interact with our website. These services use cookies and similar tracking technologies to collect usage data." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "4." }),
          " Cookies and Tracking Technologies"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are stored on your device." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "We use cookies to: remember your preferences, understand website usage patterns, and provide personalized content." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "5." }),
          " Affiliate Links and Commissions"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Sales House is reader-supported. Our website contains affiliate links to third-party products and services. When you click on these links and make a purchase, we may earn a commission at no extra cost to you." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mt-3", children: "We only recommend tools and services that we personally use, test, and verify. Our affiliate relationships do not influence our editorial content or recommendations." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "6." }),
          " Data Retention"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mt-3", children: "When you unsubscribe from our email list, we will remove your information from our active databases within a reasonable timeframe, though some information may remain in backup archives." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "7." }),
          " Your Privacy Rights"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "Depending on your location, you may have the following rights regarding your personal information:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-slate-700 space-y-2 ml-4", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Access:" }),
            " Request a copy of the personal data we hold about you"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Correction:" }),
            " Request correction of inaccurate or incomplete data"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Deletion:" }),
            " Request deletion of your personal data"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Opt-Out:" }),
            " Unsubscribe from marketing emails at any time"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Data Portability:" }),
            " Request a copy of your data in a portable format"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Objection:" }),
            " Object to processing of your personal data"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed mt-4", children: [
          "To exercise any of these rights, please contact us at ",
          /* @__PURE__ */ jsx("a", { href: "mailto:david@saleshousestack.com", className: "text-indigo-600 hover:underline", children: "david@saleshousestack.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "8." }),
          " Data Security"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "9." }),
          " Children's Privacy"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "10." }),
          " International Data Transfers"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from your country's laws." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mt-3", children: "By using our services, you consent to the transfer of your information to the United States and other countries where our service providers operate." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "11." }),
          " Changes to This Privacy Policy"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.' }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mt-3", children: "You are advised to review this Privacy Policy periodically for any changes. Changes are effective when posted on this page." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "12." }),
          " Contact Us"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "If you have any questions about this Privacy Policy or our data practices, please contact us:" }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-50/50 rounded-lg border border-slate-300", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Email:" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: "mailto:david@saleshousestack.com", className: "text-indigo-600 hover:underline", children: "david@saleshousestack.com" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed mt-2", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Website:" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://saleshousestack.com", className: "text-indigo-600 hover:underline", children: "https://saleshousestack.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors", children: "← Back to Home" }) })
  ] });
};
const TermsOfServicePage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "p-6 max-w-4xl mx-auto bg-[#FEFEFE] min-h-screen", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-slate-900 mb-3", children: "Terms of Service" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm", children: "Last Updated: January 2, 2025" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-invert prose-slate max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: 'Welcome to Sales House ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of saleshousestack.com (the "Website") and all related services, content, and materials provided by us.' }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mt-4", children: "By accessing or using our Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "1." }),
          " Acceptance of Terms"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "By accessing and using Sales House, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the Website." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "If you are using our services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "2." }),
          " Use of Service"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Permitted Use" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "You may use our Website for lawful purposes only. You agree to use the Website in compliance with all applicable laws and regulations." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Prohibited Activities" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "You agree not to:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-slate-700 space-y-2 ml-4", children: [
              /* @__PURE__ */ jsx("li", { children: "Use the Website for any illegal purpose or in violation of any laws" }),
              /* @__PURE__ */ jsx("li", { children: "Attempt to gain unauthorized access to our systems or networks" }),
              /* @__PURE__ */ jsx("li", { children: "Interfere with or disrupt the Website or servers" }),
              /* @__PURE__ */ jsx("li", { children: "Transmit any viruses, malware, or harmful code" }),
              /* @__PURE__ */ jsx("li", { children: "Scrape, copy, or harvest content without permission" }),
              /* @__PURE__ */ jsx("li", { children: "Impersonate any person or entity" }),
              /* @__PURE__ */ jsx("li", { children: "Use automated systems to access the Website without consent" }),
              /* @__PURE__ */ jsx("li", { children: "Engage in any activity that could harm our reputation" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "3." }),
          " Intellectual Property Rights"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "All content on Sales House, including but not limited to text, graphics, logos, images, software, and other materials, is the property of Sales House or its licensors and is protected by copyright, trademark, and other intellectual property laws." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our Website without our prior written permission." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "The Sales House name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Sales House. You may not use these marks without our prior written permission." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "4." }),
          " User Content and Feedback"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: 'If you provide feedback, suggestions, comments, or other input to us ("Feedback"), you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, and incorporate such Feedback into our services without any obligation to you.' }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Any testimonials, reviews, or endorsements you provide may be used by us for marketing purposes without compensation to you." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "5." }),
          " Third-Party Links and Services"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "Our Website contains links to third-party websites and services, including tools we recommend. These links are provided for your convenience only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites or services." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Your interactions with third-party websites and services are solely between you and the third party. We encourage you to review the terms and privacy policies of any third-party services you access through our Website." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "6." }),
          " Affiliate Relationships"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "Sales House participates in affiliate marketing programs. We may earn commissions from purchases made through affiliate links on our Website. These affiliate relationships do not influence our editorial content or recommendations." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "We only recommend products and services that we have personally tested and believe will provide value to our users. However, we cannot guarantee specific results from using any recommended tools or services." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "7." }),
          " Disclaimer of Warranties"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: 'THE WEBSITE AND ALL CONTENT, SERVICES, AND MATERIALS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.' }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-slate-700 space-y-2 ml-4", children: [
          /* @__PURE__ */ jsx("li", { children: "Warranties of merchantability, fitness for a particular purpose, and non-infringement" }),
          /* @__PURE__ */ jsx("li", { children: "Warranties regarding the accuracy, reliability, or completeness of content" }),
          /* @__PURE__ */ jsx("li", { children: "Warranties that the Website will be uninterrupted, secure, or error-free" }),
          /* @__PURE__ */ jsx("li", { children: "Warranties regarding results obtained from using the Website or recommended tools" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "8." }),
          " Limitation of Liability"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, SALES HOUSE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-slate-700 space-y-2 ml-4 mb-4", children: [
          /* @__PURE__ */ jsx("li", { children: "Your use or inability to use the Website" }),
          /* @__PURE__ */ jsx("li", { children: "Any unauthorized access to or use of our servers" }),
          /* @__PURE__ */ jsx("li", { children: "Any bugs, viruses, or malicious code transmitted through the Website" }),
          /* @__PURE__ */ jsx("li", { children: "Any errors or omissions in any content" }),
          /* @__PURE__ */ jsx("li", { children: "Your purchase or use of any third-party products or services" }),
          /* @__PURE__ */ jsx("li", { children: "Any results or outcomes from following our recommendations" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID US IN THE PAST TWELVE MONTHS, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "9." }),
          " Indemnification"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "You agree to indemnify, defend, and hold harmless Sales House and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-slate-700 space-y-2 ml-4 mt-3", children: [
          /* @__PURE__ */ jsx("li", { children: "Your use of the Website" }),
          /* @__PURE__ */ jsx("li", { children: "Your violation of these Terms" }),
          /* @__PURE__ */ jsx("li", { children: "Your violation of any rights of another party" }),
          /* @__PURE__ */ jsx("li", { children: "Any content you submit or transmit through the Website" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "10." }),
          " Email Communications and Newsletter"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "By subscribing to our newsletter or providing your email address, you consent to receive marketing communications from us. You may unsubscribe at any time by clicking the unsubscribe link in our emails or contacting us directly." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "We reserve the right to send you transactional or administrative emails regarding your account or our services, even if you have unsubscribed from marketing communications." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "11." }),
          " Changes to Terms of Service"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: 'We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last Updated" date.' }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Your continued use of the Website after any changes constitutes acceptance of the new Terms. It is your responsibility to review these Terms periodically." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "12." }),
          " Termination"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "We reserve the right to terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Upon termination, your right to use the Website will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "13." }),
          " Governing Law and Dispute Resolution"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Any disputes arising from or relating to these Terms or your use of the Website shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court for intellectual property violations." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "14." }),
          " Severability and Waiver"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-3", children: "If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "15." }),
          " Entire Agreement"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "These Terms, together with our Privacy Policy, constitute the entire agreement between you and Sales House regarding your use of the Website and supersede all prior agreements and understandings." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "16." }),
          " Contact Information"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "If you have any questions about these Terms of Service, please contact us:" }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-50/50 rounded-lg border border-slate-300", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Email:" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: "mailto:david@saleshousestack.com", className: "text-indigo-600 hover:underline", children: "david@saleshousestack.com" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed mt-2", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Website:" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: "https://saleshousestack.com", className: "text-indigo-600 hover:underline", children: "https://saleshousestack.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors", children: "← Back to Home" }) })
  ] });
};
const ConsultingPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "p-6 max-w-6xl mx-auto bg-[#FEFEFE] min-h-screen", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sales Operations Consulting - Expert Outbound Strategy & Setup | Sales House" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Expert sales operations consulting. Set up your outbound engine, optimize deliverability, and scale to 40+ demos/month." })
    ] }),
    /* @__PURE__ */ jsx(Breadcrumb, {}),
    /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-bold text-slate-900 mb-4", children: "Fractional Sales Leadership" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed", children: "Get enterprise-grade sales strategy and execution without the enterprise price tag. I help solopreneurs and small teams build scalable outbound systems that actually fill calendars." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/30 transition-all", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Target, { className: "w-6 h-6 text-indigo-600" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-900 mb-3", children: "Stack Setup & Advisory" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed mb-4", children: "Complete sales stack implementation with ongoing optimization. From initial setup to continuous campaign refinement and scaling support." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-600", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " Stack audit & tool setup"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " Campaign sequence design"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " Weekly performance reviews"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " Copywriting & A/B testing"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/30 transition-all", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-indigo-600" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-900 mb-3", children: "RevOps Strategy" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed mb-4", children: "End-to-end revenue operations design: from lead routing and pipeline stages to reporting dashboards and forecasting models." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-600", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " CRM architecture & automation"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " Sales process documentation"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " Pipeline & forecast reporting"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " Team onboarding & training"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/30 transition-all", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(BarChart3, { className: "w-6 h-6 text-indigo-600" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-900 mb-3", children: "Sales Strategy" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed mb-4", children: "Comprehensive go-to-market strategy and sales motion design tailored to your ICP, deal size, and growth stage." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-600", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " GTM strategy & positioning"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " Sales playbook development"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " ICP refinement & segmentation"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "→" }),
            " Competitive positioning"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16 bg-gradient-to-br from-indigo-950/30 to-purple-950/20 rounded-2xl border border-indigo-500/20 p-8 md:p-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900 mb-6 text-center", children: "Who This Is For" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-indigo-600 font-bold", children: "✓" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Founders" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm", children: "You know your product solves a real problem, but you don't have time to become a sales ops expert. You need a system that runs while you focus on delivery." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-indigo-600 font-bold", children: "✓" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Small Sales Teams (2-10)" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm", children: "Your team is spending too much time on manual prospecting. You need automation, but you don't know which tools to pick or how to integrate them." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-indigo-600 font-bold", children: "✓" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "B2B SaaS Companies" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm", children: "You're targeting North America, LATAM, or EMEA markets with high-volume outbound. You need proven playbooks, not guesswork." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-indigo-600 font-bold", children: "✓" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Agencies & Service Providers" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm", children: "You sell retained services but struggle with consistent lead flow. You need a predictable outbound engine that books qualified calls on autopilot." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900 mb-8 text-center", children: "About Me" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-stretch", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:w-2/3 w-full flex flex-col gap-6 h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden flex-shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-600" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-700 leading-relaxed text-lg", children: [
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "I'm a Head of Sales + RevOps consultant" }),
                " with 5 years of Marketing experience and 6 years of Sales experience. I've built B2B teams and outbound systems targeting North America, LATAM, and EMEA."
              ] }),
              /* @__PURE__ */ jsx("p", { children: `I built Sales House because I got tired of seeing founders burn cash on bloated teams and "all-in-one" tools that don't work. I share exactly what I use to book meetings.` })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 flex-1", children: [
            { icon: Phone, val: "100k+", label: "Cold Calls" },
            { icon: Trophy, val: "$1.5m+", label: "ARR Closed Won" },
            { icon: Mail, val: "500k+", label: "Emails Sent" },
            { icon: Calendar, val: "200+", label: "Demos Booked" }
          ].map((stat, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-6 rounded-2xl border border-slate-300 flex flex-col items-center justify-center text-center hover:bg-slate-300/80 transition-all hover:border-slate-200 group h-full", children: [
            /* @__PURE__ */ jsx(stat.icon, { className: "w-6 h-6 text-indigo-600 mb-3 group-hover:scale-110 transition-transform opacity-80" }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-slate-900 mb-1", children: stat.val }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-600 uppercase tracking-wider", children: stat.label })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:w-1/3 w-full flex min-h-[600px]", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-slate-300 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 w-full shadow-2xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/david-profile.jpg",
                alt: "David Varan, Sales Operations Consultant and Founder of Sales House",
                className: "w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105",
                style: { objectPosition: "center 20%" }
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/60 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-start", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-1", children: "David" }),
            /* @__PURE__ */ jsx("p", { className: "text-indigo-300 font-medium mb-6", children: "Head of Sales & Creator" }),
            /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2", children: [
              /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/in/davidvaran/", target: "_blank", rel: "noreferrer", className: "flex items-center justify-center gap-2 w-full py-2.5 bg-[#0077b5] hover:bg-[#006399] text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-900/20", children: [
                /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4" }),
                " Connect on LinkedIn"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "mailto:david@saleshousestack.com", className: "flex items-center justify-center gap-2 w-full py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-lg font-bold text-sm transition-all border border-white/10", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
                " Email Me"
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900 mb-8 text-center", children: "How We Work Together" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6 flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-600", children: "1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Discovery Call" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "We review your current setup, ICP, messaging, and goals. I'll identify immediate wins and long-term opportunities." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6 flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-600", children: "2" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Proposal & Scope" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "I'll send a detailed proposal with timeline, deliverables, and investment. You'll know exactly what to expect before we start." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6 flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-600", children: "3" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Execution" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "I build, configure, and test your entire stack. You'll get documentation, training videos, and live walkthroughs." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6 flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 font-bold text-indigo-600", children: "4" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Launch & Optimization" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Your first campaigns go live. I monitor performance, iterate on messaging, and train your team on daily operations." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-indigo-950/50 to-purple-950/30 rounded-2xl border border-indigo-500/30 p-12 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900 mb-4", children: "Ready to Scale Your Outbound?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-lg mb-8 max-w-2xl mx-auto", children: "Book a 30-minute discovery call to see if we're a good fit. No sales pitch - just a real conversation about your challenges and goals." }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto min-h-[950px]", children: /* @__PURE__ */ jsx(CalendlyEmbed, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors", children: "← Back to Home" }) })
  ] });
};
const FAQPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "FAQ - Cold Email & Sales Stack Questions Answered | Sales House" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Answers to cold email, tool selection, and outbound strategy questions. Learn how to build your sales stack for under $500/mo." })
    ] }),
    /* @__PURE__ */ jsx(Breadcrumb, {}),
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-slate-900 mb-4", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-lg", children: "Everything you need to know about building your outbound sales stack" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-16", children: [
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "How much does the complete outbound sales stack cost per month?",
          answer: "Up to $500 per month. If you skip a CRM, you can squeeze in under $350. However, when building a sales funnel, you'll want to follow up, create reminders, and track potential deals. If you're thinking long-term, don't skip the CRM. Most sales aren't accomplished through the first outreach - you'll be following up with the same contacts multiple times throughout a year until you land them."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "How long does it take to set up the full sales stack from scratch?",
          answer: "With my experience, I could get it up and running in under 5-6 hours. For most people who haven't worked with these platforms, I'd say a safe bet is under 2 working days. Take it easy, don't rush things, and do it properly so you won't have to redo everything."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "Do I need technical skills to set up these tools?",
          answer: "No, all the tools are fairly easy to use. It's pretty much like setting up your laptop or phone for the first time. It's really not rocket science."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "Can I start with just a few tools and add more later?",
          answer: "Yes, I recommend starting with Reply.io + Clay OR Apollo. This gives you a tool to outreach with plus contacts to work with. You'll need to buy a domain for outbound, but you'll be limited by the volume of emails you can send initially."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "How many demos per month can I realistically expect to book?",
          answer: "I won't make empty promises - this really depends on market, messaging, and targeting. It can be as low as 5, it can be as high as hundreds a month. From my experience in a market where you have some competition and you add 40-50 new contacts monthly, 15 to 20 demos is a healthy target."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "How long before I see results from outbound?",
          answer: "You'll see open rates the same day, reply rates within a few days. Realistically, within the first week, if you haven't gotten answers and your open rate is lower than 40%, work on the messaging - you probably have issues there."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "What's a good reply rate for cold emails?",
          answer: "3-5% is a good benchmark for cold email reply rates."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "What's included in your fractional sales leadership?",
          answer: "Audit, review, insights, recommendations, my hands-on work, and strategies. Every consultation I do is very case-by-case. We might be building just an outbound system, or in other cases, I might be helping you improve conversion rates, win rates, or recycle previous contacts. No company is identical, and I don't do cookie-cutter strategies."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "Do you set up the tools for me or just advise?",
          answer: "Either or both. I can consult, I can set everything up for you, or we can work together on implementation. It's flexible based on your needs."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "Should I hire an SDR or build this myself?",
          answer: "I would always recommend starting yourself first. Calculate how much an SDR costs locally. A good rule of thumb is if an SDR costs $2,000/month, they need to bring enough opportunities to generate $6,000 of revenue monthly - essentially a 3:1 ratio."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "What's the #1 mistake founders make with outbound sales?",
          answer: "Writing emails that read like a marketing campaign. Your goal is to message like a friend and say 'Hey, I see you're having issues with this, I have a solution, worth a chat?' Less is more."
        }
      ),
      /* @__PURE__ */ jsx(
        FAQItem,
        {
          question: "Do I need a big email list to get started?",
          answer: "It's subjective and depends on what verticals you're targeting. You might not have the privilege of a lot of contacts, so you need to be a bit more reserved on the scale of outreach and focus more on quality and follow-ups. But generally, we're speaking about thousands of contacts you can get from Clay, Apollo, or Lusha, so practically this isn't an area of concern."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-indigo-950/50 to-purple-950/30 rounded-2xl border border-indigo-500/30 p-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-3", children: "Still Have Questions?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 mb-6", children: "Book a free consultation call to discuss your specific situation" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/consulting",
          className: "inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-600 text-white font-bold rounded-lg transition-colors",
          children: "Book a Call"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors", children: "← Back to Home" }) })
  ] });
};
const ComparisonsListPage = () => {
  const availableComparisons = [
    {
      slug: "pipedrive-hubspot-salesforce",
      name: "Best Sales CRM 2026: Pipedrive vs HubSpot vs Salesforce",
      category: "CRM",
      excerpt: "Find the best sales CRM for your team. Expert comparison of features, pricing, and which fits your growth stage."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FEFEFE]", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Sales Tool Comparisons - Side-by-Side Reviews | Sales House" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Compare sales tools side-by-side. Clay vs Apollo, Reply vs Instantly, HubSpot vs Salesforce and more. Expert comparisons based on real experience." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsx(Breadcrumb, {}),
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-slate-900 mb-4", children: "Tool Comparisons" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto", children: "Side-by-side comparisons to help you choose the right tool for your stack" })
      ] }),
      availableComparisons.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-16", children: availableComparisons.map((comparison) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/comparisons/${comparison.slug}`,
          className: "bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/50 transition-all group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors", children: comparison.name }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600", children: comparison.category })
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-6", children: comparison.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-indigo-600 font-semibold", children: [
              "Read Comparison",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ] })
          ]
        },
        comparison.slug
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Which comparison would help you most?" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 mb-6 max-w-2xl mx-auto", children: "Let me know which tools you're trying to decide between and I'll prioritize that comparison." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "mailto:david@saleshousestack.com",
              className: "inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
                "Email Me"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.linkedin.com/in/davidvaran/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-slate-300 transition-all",
              children: [
                /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" }),
                "Message on LinkedIn"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const CRMComparisonPage = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Sales CRM 2026: Pipedrive vs HubSpot vs Salesforce",
    "description": "Find the best sales CRM for your team. Expert comparison of Pipedrive, HubSpot, and Salesforce - features, pricing, setup time, and which fits your growth stage.",
    "image": "https://saleshousestack.com/og-image.png",
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saleshousestack.com/logo.png"
      }
    },
    "datePublished": "2025-12-13",
    "dateModified": "2025-12-13"
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FEFEFE]", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Best Sales CRM 2026: Pipedrive vs HubSpot vs Salesforce | Sales House" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Find the best sales CRM for your team. Expert comparison of Pipedrive, HubSpot, and Salesforce - features, pricing, setup time, and which fits your growth stage." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "best sales CRM, best CRM 2026, Pipedrive vs HubSpot, HubSpot vs Salesforce, CRM comparison, best CRM for startups, CRM for sales teams, sales CRM software" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(articleSchema) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsx(Breadcrumb, {}),
      /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-slate-900 mb-2", children: "Best Sales CRM 2026: Pipedrive vs HubSpot vs Salesforce" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 mb-3", children: "Find the best sales CRM for your team" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600", children: "Last updated December 2025" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6 mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-indigo-600", children: "⚡" }),
          "TL;DR - Quick Recommendation"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-700", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1", children: "✓" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Solo founder or small team?" }),
              " Go with Pipedrive - simple, affordable, gets the job done."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1", children: "✓" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Hired sales reps & thinking long-term?" }),
              " Choose HubSpot - scales well, solid automation."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-yellow-600 mt-1", children: "⚠" }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Enterprise with dedicated RevOps?" }),
              " Salesforce works - but skip it otherwise."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-slate-100/30 border border-slate-300 rounded-xl p-6 mb-12", children: /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-700 leading-relaxed", children: "All three are good CRMs - you've probably already heard of all of them. Each has different use cases and which CRM you go with depends on your position in the growth journey. If you're a founder, solopreneur, or vibecoder, your most logical choice is Pipedrive. If you've already hired sales people and are thinking long-term, go with HubSpot." }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxs("section", { className: "space-y-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900 mb-6", children: "The Breakdown" }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100/30 border-l-4 border-l-green-500/50 border-t border-r border-b border-slate-300 rounded-xl p-8", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-green-600", children: "●" }),
              "Pipedrive"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Pipedrive in itself is a very basic CRM, but it covers 100% of your needs. It's literally made by sales people for sales people. No fluff, no unnecessary features - just what you need to manage your pipeline and close deals." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100/30 border-l-4 border-l-orange-500/50 border-t border-r border-b border-slate-300 rounded-xl p-8", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-orange-600", children: "●" }),
              "HubSpot"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "HubSpot originally is a marketing tool, however it really picked up all the best features needed in the market and grabbed what was required by users from Salesforce. It has great customization and probably has the best user experience out of the three." }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "Reason not to start with it: the price grows very quickly just like Salesforce when considering add-ons and toys you'll need. HubSpot is fairly easy to customize and has automations and triggers you can build out to make it serve you more." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-100/30 border-l-4 border-l-blue-500/50 border-t border-r border-b border-slate-300 rounded-xl p-8", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "●" }),
              "Salesforce"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "The king in customization and versatility is Salesforce, no questions - the status quo CRM. Honestly, I would not recommend anyone to go with Salesforce CRM. It looks like it's made in the 90s, it's complex, and without Sales or Revenue Operations you won't even scratch the surface of what it's capable of - plus you'll be paying premium." }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Most likely why you'll end up with Salesforce long-term is when you need extensive reporting to investors after funding rounds. I believe if you're reading this, you still have a lot of bridges to cross before that should be a thought in your head." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900 mb-6", children: "Best Use Cases (Who Should Pick What)" }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse bg-slate-100 border border-slate-300 rounded-xl overflow-hidden", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-slate-900 font-bold border-b border-slate-200", children: "Scenario" }),
              /* @__PURE__ */ jsx("th", { className: "text-center p-4 text-slate-900 font-bold border-b border-slate-200", children: "Salesforce" }),
              /* @__PURE__ */ jsx("th", { className: "text-center p-4 text-slate-900 font-bold border-b border-slate-200", children: "HubSpot" }),
              /* @__PURE__ */ jsx("th", { className: "text-center p-4 text-slate-900 font-bold border-b border-slate-200", children: "Pipedrive" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { className: "text-slate-700", children: [
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-300 hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: "Solo founder" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "❌" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "⚠️" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "✅" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-300 hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: "Small sales team (1-10)" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "❌" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "✅" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "✅" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-300 hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: "Growing SMB (10-50 reps)" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "⚠️" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "✅" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "⚠️" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-300 hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: "Enterprise / multi-region" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "✅" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "⚠️" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "❌" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: "Dedicated RevOps/Admin" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-sm", children: "Required" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-sm", children: "Helpful" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-sm", children: "Not needed" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900 mb-6", children: "Time to Value & Adoption" }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse bg-slate-100 border border-slate-300 rounded-xl overflow-hidden", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-slate-900 font-bold border-b border-slate-200", children: "Dimension" }),
              /* @__PURE__ */ jsx("th", { className: "text-center p-4 text-slate-900 font-bold border-b border-slate-200", children: "Salesforce" }),
              /* @__PURE__ */ jsx("th", { className: "text-center p-4 text-slate-900 font-bold border-b border-slate-200", children: "HubSpot" }),
              /* @__PURE__ */ jsx("th", { className: "text-center p-4 text-slate-900 font-bold border-b border-slate-200", children: "Pipedrive" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { className: "text-slate-700", children: [
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-300 hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: "Setup speed" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: "Slow" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: "Fast" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: "Very fast" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-300 hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: "Onboarding effort" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: "High" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: "Medium" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: "Low" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-300 hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: "Rep adoption" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: "Medium" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: "High" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: "Very high" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-medium", children: '"Feels usable on day 1"' }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "❌" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "✅" }),
                /* @__PURE__ */ jsx("td", { className: "p-4 text-center text-3xl", children: "✅" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900 mb-6", children: "Pricing Reality" }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse bg-slate-100 border border-slate-300 rounded-xl overflow-hidden", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-200", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-slate-900 font-bold border-b border-slate-200", children: "CRM" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-slate-900 font-bold border-b border-slate-200", children: "Entry price reality" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-slate-900 font-bold border-b border-slate-200", children: "What founders underestimate" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { className: "text-slate-700", children: [
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-300 hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-slate-900", children: "Salesforce" }),
                /* @__PURE__ */ jsx("td", { className: "p-4", children: 'Starts "reasonable", scales brutally' }),
                /* @__PURE__ */ jsx("td", { className: "p-4", children: "Admin cost, consultants, add-ons" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-300 hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-slate-900", children: "HubSpot" }),
                /* @__PURE__ */ jsx("td", { className: "p-4", children: "Free/cheap early" }),
                /* @__PURE__ */ jsx("td", { className: "p-4", children: "Cost grows as you add hubs & seats" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-300/30 transition-colors", children: [
                /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-slate-900", children: "Pipedrive" }),
                /* @__PURE__ */ jsx("td", { className: "p-4", children: "Affordable" }),
                /* @__PURE__ */ jsx("td", { className: "p-4", children: "Add-ons stack over time" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-slate-900 mb-6", children: "My Recommendation" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-lg", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-2xl", children: "→" }),
              /* @__PURE__ */ jsxs("span", { className: "text-slate-700", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Early stage / lean teams:" }),
                " Start with Pipedrive"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-2xl", children: "→" }),
              /* @__PURE__ */ jsxs("span", { className: "text-slate-700", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Growing SMBs:" }),
                " Default to HubSpot"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-2xl", children: "→" }),
              /* @__PURE__ */ jsxs("span", { className: "text-slate-700", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Complex, scaled orgs:" }),
                " Choose Salesforce only if you're ready"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "bg-slate-100/30 border border-slate-300 rounded-xl p-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-slate-900 mb-2", children: "About This Comparison" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 text-sm leading-normal mb-3", children: "I'm David, and I've spent years working with different CRMs across multiple SaaS companies. I've set up Pipedrive for early-stage startups, migrated teams to HubSpot during scale-up phases, and dealt with Salesforce's complexity at enterprise level from teams as small as a solo person, to 20 people mix of SDRs and AEs." }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 text-sm leading-normal mb-3", children: "This comparison comes from real experience - not theory. I've felt the pain of choosing the wrong CRM too early, overpaying for features you don't need, and dealing with adoption issues when the tool is too complex. My goal here is to save you from making those same mistakes." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://www.linkedin.com/in/davidvaran/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-slate-900 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) }),
                  "LinkedIn"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:david@saleshousestack.com",
                className: "px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-900 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 border border-slate-200",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }),
                  "Email"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "border-t border-slate-300 pt-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-600 uppercase tracking-wider mb-4", children: "Tagged:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["CRM Comparison", "Pipedrive", "HubSpot", "Salesforce", "Sales CRM", "CRM for Startups", "B2B Sales Tools", "Revenue Operations"].map((tag) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 bg-slate-200 border border-slate-200/50 rounded-md text-sm text-slate-700 hover:border-indigo-500/50 transition-colors", children: tag }, tag)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 pt-8", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.pipedrive.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-6 py-3 bg-slate-200 border border-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-all text-center",
              children: "Try Pipedrive"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.hubspot.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-6 py-3 bg-slate-200 border border-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-all text-center",
              children: "Try HubSpot"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.salesforce.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-6 py-3 bg-slate-200 border border-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-all text-center",
              children: "Try Salesforce"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const ReviewsListPage = () => {
  const reviewedTools = [
    {
      id: "clay",
      name: "Clay",
      slug: "clay",
      rating: 5,
      excerpt: "Not just a contact database - a whole AI research assistant that qualifies, signals, and personalizes at scale",
      category: "Data & Enrichment",
      lastUpdated: "December 2025"
    },
    {
      id: "reply",
      name: "Reply.io",
      slug: "reply-io",
      rating: 4.5,
      excerpt: "Very versatile tool, highest level of multichannel capabilities",
      category: "Sales Engagement",
      lastUpdated: "December 2025"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FEFEFE]", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Tool Reviews - Expert Sales Software Reviews | Sales House" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Honest, in-depth reviews of sales tools based on real experience. Get expert insights on Reply.io, Clay, HubSpot and more sales engagement platforms." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsx(Breadcrumb, {}),
      /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-slate-900 mb-4", children: "Tool Reviews" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: reviewedTools.map((tool) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/reviews/${tool.slug}`,
          className: "bg-slate-100 border border-slate-300 rounded-xl p-8 hover:border-indigo-500/50 transition-all group",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors", children: [
                  tool.name,
                  " Review"
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-600", children: [
                  tool.category,
                  " • Updated ",
                  tool.lastUpdated
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 bg-slate-200 px-3 py-1.5 rounded-lg", children: [
                /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-900 font-bold", children: tool.rating })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-6", children: tool.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-indigo-600 font-semibold", children: [
              "Read Full Review",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ] })
          ]
        },
        tool.id
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-6", children: "Reviews In Progress" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-4", children: ["HubSpot", "Instantly", "Lemlist"].map((toolName) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-slate-100/30 border border-slate-300 rounded-xl p-6 text-center",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-indigo-600 rounded-full animate-pulse" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-600 mb-2", children: toolName }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600", children: "Review coming soon" })
            ]
          },
          toolName
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "What tool should I review next?" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700 mb-6 max-w-2xl mx-auto", children: "Got a sales tool you want me to put through its paces? Let me know what you'd like to see reviewed." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "mailto:david@saleshousestack.com",
              className: "inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-all",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
                "Email Me"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.linkedin.com/in/davidvaran/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-900 font-semibold rounded-lg border border-slate-200 hover:bg-slate-300 transition-all",
              children: [
                /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" }),
                "Message on LinkedIn"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const ReplyIOReviewPage = () => {
  const replyTool = TOOLS.find((tool) => tool.id === "reply");
  if (!replyTool) return null;
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "Reply.io",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "jobTitle": "Sales Operations Consultant",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "datePublished": "2025-12-13",
    "reviewBody": "Reply.io covers all the channels you need and gives you complete control to personalize when necessary. The price-to-functionality ratio is top-notch. I've used and set up Reply.io for 4 SaaS companies over the past year.",
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros"
    }
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Reply.io Review 2025: My Experience After 4 SaaS Companies",
    "description": "Honest Reply.io review based on real experience with 4 SaaS companies. Open rates up to 80%, multichannel capabilities, pricing analysis, and who should (and shouldn't) use it.",
    "image": "https://saleshousestack.com/og-image.png",
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saleshousestack.com/logo.png"
      }
    },
    "datePublished": "2025-12-13",
    "dateModified": "2025-12-13",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://saleshousestack.com/#/reviews/reply-io"
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FEFEFE]", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Reply.io Review 2025: My Experience After 4 SaaS Companies | Sales House" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Honest Reply.io review based on real experience with 4 SaaS companies. Open rates up to 80%, multichannel capabilities, pricing analysis, and who should (and shouldn't) use it." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "Reply.io review, Reply.io pricing, sales engagement platform, multichannel outreach, email automation, LinkedIn automation" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(reviewSchema) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(articleSchema) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsx(Breadcrumb, {}),
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-slate-900 mb-2", children: "Reply.io Review" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Last updated December 2025" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            [...Array(4)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 fill-yellow-400 text-yellow-600" }, i)),
            /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 fill-yellow-400 text-yellow-600", style: { clipPath: "inset(0 50% 0 0)" } }),
            /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 ml-2", children: "4.5/5" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-indigo-600", children: "Very versatile tool, highest level of multichannel capabilities" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("section", { className: "bg-slate-100/30 border border-slate-300 rounded-xl p-8", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-indigo-600" }),
            "Why I Recommend It"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "Reply.io covers all the channels you need and gives you complete control to personalize when necessary. The price-to-functionality ratio is top-notch, making it accessible for founders and small teams while still being powerful enough for established sales teams." }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "Their analytics and tracking capabilities really shine when it comes to extra nurturing steps. For example, I set up an automation that checks if a prospect opened an email more than 5 times after the last sequence step, then triggers a reminder email a day later (not the same day - that would be creepy). This simple workflow helped nudge reply rates and increased the number of opportunities created." })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "bg-slate-100/30 border border-slate-300 rounded-xl p-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "My Experience Using It" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "I've used and set up Reply.io for 4 SaaS companies over the past year. The platform has been my go-to for automating LinkedIn, InMail, and email sequencing with variable steps across multiple campaigns." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-200 border border-slate-200 rounded-lg p-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-600 uppercase tracking-wider mb-4", children: "Results:" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-slate-700", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1 text-xl", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Open rates varied by industry: 30-40% on the lower end, peaked at 80% with 3-4 follow-up steps (excluding LinkedIn)" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1 text-xl", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Successfully automated multichannel sequences across email, LinkedIn, and InMail" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1 text-xl", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Advanced nurturing automation (5+ email opens trigger) increased reply rates and opportunities created" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "bg-slate-100/30 border border-slate-300 rounded-xl p-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Where It Shines" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "The multichannel capabilities are unmatched. I've tested every channel except WhatsApp (though the sentiment about it seems positive). Reply.io is the best choice when:" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-slate-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-xl", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "You need to run coordinated campaigns across email, LinkedIn, and InMail" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-xl", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "You want granular control over personalization without sacrificing automation" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-xl", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "You need advanced analytics and tracking for nurturing workflows" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-xl", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "You're serious about outbound and understand that single-channel focus leaves money on the table" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "bg-slate-100/30 border border-slate-300 rounded-xl p-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Who Should Skip This" }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "If you're only focusing on one channel, don't buy Reply.io." }),
            " There are specialized tools that will serve you better: Dripify for LinkedIn, Instantly for email, or Aircall for cold calls. But honestly, as a sales professional, single-channel focus is a bad strategy - you're leaving money on the table."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "The one real dealbreaker:" }),
            " Limited Salesforce integration. The only reason this gets 4.5 instead of 5 stars. I wasn't happy with how the integration works initially. With some technical workarounds in Salesforce, we got it working well enough for a team of 9 sales executives, but it's not ideal. For most founder and small team use cases using HubSpot, this is a non-issue."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-indigo-600 mb-4", children: "Bottom Line" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed text-lg", children: "Great tool with a top-tier price-to-functionality ratio. Whether you're an established team or a founder just starting outbound, Reply.io will get the job done long-term and you can be confident with your commitment. It's my go-to recommendation for anyone serious about multichannel outreach who wants a tool they can grow with." })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "border-t border-slate-300 pt-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-600 uppercase tracking-wider mb-4", children: "Tagged:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["Sales Engagement", "Email Automation", "LinkedIn Automation", "Multichannel Outreach", "Cold Email", "B2B Sales Tools", "Sales Sequences"].map((tag) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 bg-slate-200 border border-slate-200/50 rounded-md text-sm text-slate-700 hover:border-indigo-500/50 transition-colors", children: tag }, tag)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center pt-8", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: replyTool.website,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-600 transition-all text-lg",
            children: [
              "Try Reply.io For Free ",
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5" })
            ]
          }
        ) })
      ] })
    ] })
  ] });
};
const ClayReviewPage = () => {
  const clayTool = TOOLS.find((tool) => tool.id === "clay");
  if (!clayTool) return null;
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": "Clay",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "jobTitle": "Sales Operations Consultant",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "datePublished": "2025-12-13",
    "reviewBody": "Clay is not just a contact database - it's a whole AI research assistant doing extra qualification, sending you signals, and preparing personalization angles. Qualifying 500+ companies in under 10 minutes to figure out if they're a good fit is a massive time saver.",
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros"
    }
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Clay Review 2025: AI-Powered Research Assistant for Sales Teams",
    "description": "Honest Clay review after 8 months and 40k+ contacts processed. Signal building, AI qualification, data coverage analysis, and who should (and shouldn't) use it.",
    "image": "https://saleshousestack.com/og-image.png",
    "author": {
      "@type": "Person",
      "name": "David Varan",
      "url": "https://www.linkedin.com/in/davidvaran/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sales House - Tools, Reviews, Playbooks for Sales Pros",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saleshousestack.com/logo.png"
      }
    },
    "datePublished": "2025-12-13",
    "dateModified": "2025-12-13",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://saleshousestack.com/#/reviews/clay"
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FEFEFE]", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Clay Review 2025: AI-Powered Research Assistant for Sales Teams | Sales House" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Honest Clay review after 8 months and 40k+ contacts processed. Signal building, AI qualification, and who should use it vs Apollo or Lusha." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "Clay review, Clay.com review, sales intelligence, data enrichment, AI qualification, signal building, contact database" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(reviewSchema) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(articleSchema) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsx(Breadcrumb, {}),
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-slate-900 mb-2", children: "Clay Review" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Last updated December 2025" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-300 rounded-xl p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 fill-yellow-400 text-yellow-600" }, i)),
            /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 ml-2", children: "5.0/5" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-indigo-600", children: "Not just a contact database - a whole AI research assistant that qualifies, signals, and personalizes at scale" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("section", { className: "bg-slate-100/30 border border-slate-300 rounded-xl p-8", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-indigo-600" }),
            "Why I Recommend It"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "I haven't used a tool I can call a direct competitor to Clay. What makes it stand out is the extensiveness of how far you can go with the qualification steps." }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed", children: "It's not just a contact database - it's a whole AI research assistant doing extra qualification, sending you signals, and preparing personalization angles. It can be used as a database, but it can also identify key people in the company, research company LinkedIn and DMs information, and prepare an angle for a personalized pitch. The time saved from manual research is massive when you can launch an AI to qualify companies based on your criteria." })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "bg-slate-100/30 border border-slate-300 rounded-xl p-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "My Experience Using It" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-4", children: "I've been using Clay for about 8 months and have processed north of 40,000 contacts. You know perfectly well what a pain account qualification is - but qualifying 500+ companies in under 10 minutes to figure out if they're a good fit for my product offering? Hell yeah. That extra time can be spent on sequence prep, old inbound, and closed-lost nurturing." }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-200 border border-slate-200 rounded-lg p-6 mb-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-600 uppercase tracking-wider mb-4", children: "Results:" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-slate-700", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1 text-xl", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Processed 40,000+ contacts across multiple campaigns" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1 text-xl", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Qualify 500+ companies in under 10 minutes with AI - massive time savings on manual research" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600 mt-1 text-xl", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "5-10% bounce rate on high volume sequences (recommend extra email verification if using fewer than 5 domains)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-amber-500/10 border border-amber-500/20 rounded-lg p-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-amber-400 uppercase tracking-wider mb-3", children: "Data Coverage Notes:" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-700 text-sm", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600", children: "✓" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Excellent:" }),
                  " North America, EMEA for fintech, tax firms, logistics, e-commerce"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-yellow-600", children: "⚠" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Outdated contacts:" }),
                  " LATAM coverage"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-yellow-600", children: "⚠" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Limited:" }),
                  " Eastern Europe coverage"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "bg-slate-100/30 border border-slate-300 rounded-xl p-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Where It Shines" }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "Signal building is the killer feature." }),
            " You can set up notifications to be the first in line to learn about promotions, investment round announcements, position changes, and acquisitions. You always want to be first to send congratulations and ask if there's room for a chat about your offering."
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-slate-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-xl", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "AI-powered company qualification at scale (500+ companies in 10 minutes)" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-xl", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "Signal tracking for promotions, funding rounds, job changes, M&A activity" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-xl", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "Identifying key decision-makers and preparing personalized pitch angles" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-indigo-600 text-xl", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "When you have your ICP dialed in and need to narrow down on perfect-fit accounts" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "bg-slate-100/30 border border-slate-300 rounded-xl p-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Who Should Skip This" }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "New founders who don't have their ICP dialed in perfectly should skip Clay." }),
            " Stick to Apollo.io or Lusha to test markets, verticals, and titles on high volume first. Clay is used when you're narrowing down on who's the perfect fit - not when you're still figuring that out."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-700 leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-slate-900", children: "The dealbreaker:" }),
            " Credit-based AI usage means prompts need to be adjusted multiple times. There's a lot of testing required to refine the enrichment prompt, which burns through credits. If you're not willing to iterate and optimize your workflows, Clay will get expensive fast."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-indigo-600 mb-4", children: "Bottom Line" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed text-lg", children: "Clay is in a league of its own - it's not just a database, it's an AI research assistant that does the grunt work of qualification, signal tracking, and personalization prep. If you have your ICP dialed in and need to operate at scale while staying personalized, Clay is unmatched. Just be prepared to invest time upfront refining your prompts and workflows." })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "border-t border-slate-300 pt-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-600 uppercase tracking-wider mb-4", children: "Tagged:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["Data Enrichment", "Sales Intelligence", "AI Qualification", "Signal Building", "Contact Database", "Lead Research", "B2B Sales Tools", "Sales Automation"].map((tag) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 bg-slate-200 border border-slate-200/50 rounded-md text-sm text-slate-700 hover:border-indigo-500/50 transition-colors", children: tag }, tag)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center pt-8", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: clayTool.website,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-600 transition-all text-lg",
            children: [
              "Try Clay For Free ",
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5" })
            ]
          }
        ) })
      ] })
    ] })
  ] });
};
const ScrollToTop = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return null;
};
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openPlaybookForm = () => {
    if (typeof window !== "undefined") {
      window._klOnsite = window._klOnsite || [];
      window._klOnsite.push(["openForm", "SDqh4i"]);
    }
  };
  return /* @__PURE__ */ jsxs(BrowserRouter, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FEFEFE] font-sans text-slate-900", children: [
      /* @__PURE__ */ jsxs("nav", { className: "sticky top-0 z-50 bg-slate-50/80 backdrop-blur-lg border-b border-slate-300", children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center shrink-0", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(79,70,229,0.5)] group-hover:bg-indigo-600 transition-colors", children: "S" }),
            /* @__PURE__ */ jsx("span", { className: "text-xl font-bold tracking-tight text-slate-900", children: "Sales House" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(NavLink, { to: "/", icon: LayoutDashboard, label: "Home" }),
            /* @__PURE__ */ jsx(NavLink, { to: "/library", icon: Library, label: "Library" }),
            /* @__PURE__ */ jsx(NavLink, { to: "/strategies", icon: Layers, label: "Playbook" }),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-slate-200 mx-2" }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: openPlaybookForm,
                className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-600 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.3)]",
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                  " Get Playbook"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "md:hidden flex", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              className: "text-slate-600 hover:text-slate-900 p-2",
              children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
            }
          ) })
        ] }) }),
        isMobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden bg-slate-100 border-t border-slate-300 px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-2xl", children: [
          /* @__PURE__ */ jsx(NavLink, { to: "/", icon: LayoutDashboard, label: "Home", onClick: () => setIsMobileMenuOpen(false) }),
          /* @__PURE__ */ jsx(NavLink, { to: "/library", icon: Library, label: "Library", onClick: () => setIsMobileMenuOpen(false) }),
          /* @__PURE__ */ jsx(NavLink, { to: "/strategies", icon: Layers, label: "Playbook", onClick: () => setIsMobileMenuOpen(false) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://tally.so/r/mDOGeq",
              target: "_blank",
              rel: "noreferrer",
              className: "block w-full text-left px-3 py-2 text-indigo-600 font-bold hover:bg-slate-300 rounded-lg",
              children: "Get Free Playbook"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("main", { className: "w-full", children: /* @__PURE__ */ jsxs(Routes, { children: [
        /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, { openPlaybookForm }) }),
        /* @__PURE__ */ jsx(Route, { path: "/library", element: /* @__PURE__ */ jsx(LibraryPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/strategies", element: /* @__PURE__ */ jsx(StrategiesPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/faq", element: /* @__PURE__ */ jsx(FAQPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsx(PrivacyPolicyPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsx(TermsOfServicePage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/consulting", element: /* @__PURE__ */ jsx(ConsultingPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/reviews", element: /* @__PURE__ */ jsx(ReviewsListPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/reviews/clay", element: /* @__PURE__ */ jsx(ClayReviewPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/reviews/reply-io", element: /* @__PURE__ */ jsx(ReplyIOReviewPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/comparisons", element: /* @__PURE__ */ jsx(ComparisonsListPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/comparisons/pipedrive-hubspot-salesforce", element: /* @__PURE__ */ jsx(CRMComparisonPage, {}) })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const routes = [
  // Static pages
  "/",
  "/library",
  "/strategies",
  "/reviews",
  "/comparisons",
  "/faq",
  "/consulting",
  "/privacy",
  "/terms",
  // Dynamic tool review pages
  "/reviews/clay",
  "/reviews/reply-io",
  // Dynamic comparison pages
  "/comparisons/pipedrive-hubspot-salesforce"
  // Future: Generate dynamic routes from TOOLS array
  // ...TOOLS.map(tool => `/tools/${tool.id}`)
];
const createRoot = ViteReactSSG(
  // Pass App component directly
  { routes: [{ path: "/", Component: App }] },
  ({ router, isClient }) => {
    console.log("SSG initialized", { isClient });
  },
  {
    // Include all routes for pre-rendering
    includedRoutes: () => routes
  }
);
export {
  createRoot
};
