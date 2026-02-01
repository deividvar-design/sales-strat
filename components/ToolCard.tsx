
import React from 'react';
import { Tool, ToolCategory } from '../types';
import { trackAffiliateClick } from '../utils/analytics';
import {
  ExternalLink,
  Database,
  Megaphone,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Mail,
  Target,
  Phone,
  Search,
  Globe,
  Calendar,
  Zap,
  LayoutDashboard,
  Star,
  ArrowRight
} from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  showChannels?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, showChannels = true }) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = React.useState(false);

  // Logo Mapping based on tool ID
  const getLogoPath = () => {
    const logoMap: Record<string, string> = {
      'clay': '/tool logos/clay.jpg',
      'reply': '/tool logos/reply.jpg',
      'hubspot': '/tool logos/hubspot.webp',
      'salesforce': '/tool logos/salesforce.png',
      'apollo': '/tool logos/apollo.png',
      'lusha': '/tool logos/lusha.jpeg',
      'zoominfo': '/tool logos/zoominfo.png',
      'cognism': '/tool logos/cognism.png',
      'mixmax': '/tool logos/mixmax.png',
      'lemlist': '/tool logos/lemlist.webp',
      'mailforge': '/tool logos/mailforge.jpeg',
      'infraforge': '/tool logos/infraforge.jpeg',
      'mailreef': '/tool logos/mailreef.jpeg',
      'salesforge': '/tool logos/salesforge.jpeg',
      'instantly': '/tool logos/instantly.jpg',
      'dripify': '/tool logos/dripify.png',
      'outreach': '/tool logos/outreach.png',
      'pipedrive': '/tool logos/pipedrive.png',
      'calendly': '/tool logos/calendly.png'
    };
    return logoMap[tool.id] || null;
  };

  const logoPath = getLogoPath();

  // Fallback icon for tools without logos
  const getFallbackIcon = () => {
    switch (tool.id) {
      case 'mailforge': return ShieldCheck;
      case 'infraforge': return ShieldCheck;
      case 'mailreef': return ShieldCheck;
      case 'salesforge': return Zap;
      case 'outreach': return Target;
      case 'pipedrive': return TrendingUp;
      case 'dripify': return Target;
      case 'calendly': return Calendar;
      default: return Briefcase;
    }
  };

  const FallbackIcon = getFallbackIcon();

  // Custom Category Label Mapping as requested
  const getCategoryLabel = () => {
    if (tool.id === 'mailforge') return 'Email structure';
    if (tool.category === ToolCategory.CRM) return 'CRM';
    if (tool.category === ToolCategory.CONTACTS) return 'Contacts';
    if (tool.category === ToolCategory.SALES_ENGAGEMENT) return 'Outreach';
    if (tool.category === ToolCategory.SCHEDULING) return 'Scheduling';
    if (tool.category === ToolCategory.INFRASTRUCTURE) return 'Infrastructure';
    return tool.category;
  };

  const isCoreStack = ['clay', 'reply', 'hubspot', 'mailforge'].includes(tool.id);

  return (
    <div className={`rounded-xl border shadow-lg hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 flex flex-col h-full overflow-hidden group relative bg-slate-100 ${isCoreStack ? 'border-indigo-400 shadow-indigo-200' : 'border-slate-300'}`}>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          {/* Logo/Icon Box */}
          <div className={`w-12 h-12 rounded-xl border shrink-0 overflow-hidden flex items-center justify-center ${isCoreStack ? 'bg-white border-indigo-200 text-indigo-600 shadow-sm' : 'bg-white border-slate-200 text-slate-600 shadow-sm'}`}>
             {logoPath ? (
               <img src={logoPath} alt={`${tool.name} logo`} className="w-full h-full object-cover" />
             ) : (
               <FallbackIcon className="w-6 h-6" />
             )}
          </div>

          <div className="flex-1 pr-6">
            {/* Recommended Badge with Star */}
            {isCoreStack && (
              <div className="flex items-center gap-1.5 mb-2">
                <Star className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Recommended</span>
              </div>
            )}
            <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{tool.name}</h3>
             {/* Custom Category Label */}
            <p className="text-sm font-medium text-slate-600 mt-1">{getCategoryLabel()}</p>
            {/* Learning Curve - Separate Line */}
            <span className={`inline-block text-xs font-semibold uppercase tracking-wide mt-1 ${
              tool.learningCurve === 'Beginner' ? 'text-green-600' :
              tool.learningCurve === 'Intermediate' ? 'text-yellow-600' :
              'text-orange-600'
            }`}>
              {tool.learningCurve}
            </span>
          </div>
        </div>
        
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-5">
          {tool.description}
        </p>

        {/* Use Case Tags - Bottom Aligned */}
        {tool.useCaseTags && tool.useCaseTags.length > 0 && (
          <div className="mt-auto pt-3">
            <div className="flex flex-wrap gap-1.5">
              {tool.useCaseTags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-indigo-50 border border-indigo-200 rounded-md text-xs text-indigo-700 font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Team Size Badges */}
        {tool.bestFor && tool.bestFor.length > 0 && (
          <div className={`pt-3 ${!tool.useCaseTags || tool.useCaseTags.length === 0 ? 'mt-auto' : ''}`}>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Best For</p>
            <div className="flex flex-wrap gap-1.5">
              {tool.bestFor.map((size, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-slate-200 border border-slate-200/50 rounded text-xs text-slate-600 font-medium">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Channels Display */}
        {showChannels && tool.channels && tool.channels.length > 0 && (
          <div className={`pt-3 border-t border-slate-300 ${!tool.useCaseTags || tool.useCaseTags.length === 0 ? 'mt-auto' : ''}`}>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Channels</p>
            <div className="flex flex-wrap gap-1.5">
              {tool.channels.map((channel, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-slate-200 border border-slate-200/50 rounded text-xs text-slate-600 font-medium">
                  {channel}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

      <div className="bg-slate-50/50 p-4 border-t border-slate-300 flex gap-2 mt-auto">
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackAffiliateClick({
            toolId: tool.id,
            toolName: tool.name,
            url: tool.website,
            placement: 'tool_card_cta'
          })}
          className={`flex-1 py-2.5 text-sm font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 ${
              isCoreStack
              ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200'
          }`}
        >
          {isCoreStack ? 'Try For Free' : 'Visit Website'} <ExternalLink className="w-3 h-3" />
        </a>

        {/* My Review Button */}
        {(tool.id === 'reply' || tool.id === 'clay' || tool.id === 'mixmax' || tool.id === 'instantly' || tool.id === 'lemlist') && (
          <button
            onClick={() => setIsReviewModalOpen(true)}
            className="px-4 py-2.5 text-xs font-bold rounded-lg bg-indigo-50 border border-indigo-300 text-indigo-700 hover:bg-indigo-700/20 hover:border-indigo-400 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <Star className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
            My Take
          </button>
        )}
      </div>

      {/* Review Modal */}
      {isReviewModalOpen && tool.id === 'reply' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsReviewModalOpen(false)}>
          <div className="bg-slate-100 border border-slate-300 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-slate-100 border-b border-slate-300 p-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-indigo-500 flex items-center justify-center text-2xl font-bold text-indigo-600">
                  DV
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{tool.name} Review</h2>
                </div>
              </div>
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Rating */}
            <div className="p-6 border-b border-slate-300">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-600" />
                ))}
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-600" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                <span className="text-xl font-bold text-slate-900 ml-2">4.5/5</span>
              </div>
              <p className="text-lg font-semibold text-indigo-600">Very versatile tool, highest level of multichannel capabilities</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Why I Recommend It */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-indigo-600" />
                  Why I Recommend It
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Reply.io covers all the channels you need and gives you complete control to personalize when necessary. The price-to-functionality ratio is top-notch, making it accessible for founders and small teams while still being powerful enough for established sales teams.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Their analytics and tracking capabilities really shine when it comes to extra nurturing steps. For example, I set up an automation that checks if a prospect opened an email more than 5 times after the last sequence step, then triggers a reminder email a day later (not the same day - that would be creepy). This simple workflow helped nudge reply rates and increased the number of opportunities created.
                </p>
              </div>

              {/* My Experience */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">My Experience Using It</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  I've used and set up Reply.io for 4 SaaS companies over the past year. The platform has been my go-to for automating LinkedIn, InMail, and email sequencing with variable steps across multiple campaigns.
                </p>
                <div className="bg-slate-200 border border-slate-200 rounded-lg p-4">
                  <p className="text-sm text-slate-600 mb-2">Results:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Open rates varied by industry: 30-40% on the lower end, peaked at 80% with 3-4 follow-up steps (excluding LinkedIn)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Successfully automated multichannel sequences across email, LinkedIn, and InMail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Advanced nurturing automation (5+ email opens trigger) increased reply rates and opportunities created</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Best Use Cases */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Where It Shines</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  The multichannel capabilities are unmatched. I've tested every channel except WhatsApp (though the sentiment about it seems positive). Reply.io is the best choice when:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>You need to run coordinated campaigns across email, LinkedIn, and InMail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>You want granular control over personalization without sacrificing automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>You need advanced analytics and tracking for nurturing workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>You're serious about outbound and understand that single-channel focus leaves money on the table</span>
                  </li>
                </ul>
              </div>

              {/* Who Should Avoid */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Who Should Skip This</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  <strong>If you're only focusing on one channel, don't buy Reply.io.</strong> There are specialized tools that will serve you better: Dripify for LinkedIn, Instantly for email, or Aircall for cold calls. But honestly, as a sales professional, single-channel focus is a bad strategy - you're leaving money on the table.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <strong>The one real dealbreaker:</strong> Limited Salesforce integration. The only reason this gets 4.5 instead of 5 stars. I wasn't happy with how the integration works initially. With some technical workarounds in Salesforce, we got it working well enough for a team of 9 sales executives, but it's not ideal. For most founder and small team use cases using HubSpot, this is a non-issue.
                </p>
              </div>

              {/* Bottom Line */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Bottom Line</h3>
                <p className="text-slate-700 leading-relaxed">
                  Great tool with a top-tier price-to-functionality ratio. Whether you're an established team or a founder just starting outbound, Reply.io will get the job done long-term and you can be confident with your commitment. It's my go-to recommendation for anyone serious about multichannel outreach who wants a tool they can grow with.
                </p>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="sticky bottom-0 bg-slate-100 border-t border-slate-300 p-6">
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-indigo-600 text-slate-900 font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all"
              >
                Try {tool.name} For Free <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Clay Review Modal */}
      {isReviewModalOpen && tool.id === 'clay' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsReviewModalOpen(false)}>
          <div className="bg-slate-100 border border-slate-300 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-slate-100 border-b border-slate-300 p-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-indigo-500 flex items-center justify-center text-2xl font-bold text-indigo-600">
                  DV
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{tool.name} Review</h2>
                </div>
              </div>
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Rating */}
            <div className="p-6 border-b border-slate-300">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-600" />
                ))}
                <span className="text-xl font-bold text-slate-900 ml-2">5.0/5</span>
              </div>
              <p className="text-lg font-semibold text-indigo-600">Not just a contact database - a whole AI research assistant</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Why I Recommend It */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-indigo-600" />
                  Why I Recommend It
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  I haven't used a tool I can call a direct competitor to Clay. It's not just a contact database - it's a whole AI research assistant doing extra qualification, sending you signals, and preparing personalization angles. The time saved from manual research is massive when you can qualify 500+ companies in under 10 minutes.
                </p>
              </div>

              {/* My Experience */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">My Experience Using It</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  8 months of use, 40,000+ contacts processed. You know perfectly well what a pain account qualification is - but qualifying 500+ companies in under 10 minutes? Hell yeah.
                </p>
                <div className="bg-slate-200 border border-slate-200 rounded-lg p-4">
                  <p className="text-sm text-slate-600 mb-2">Results:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>40,000+ contacts processed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Qualify 500+ companies in 10 minutes with AI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>5-10% bounce rate on high volume sequences</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Where It Shines */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Where It Shines</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  <strong>Signal building is the killer feature.</strong> Set up notifications for promotions, funding rounds, position changes, and acquisitions. Be first to send congratulations.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>AI qualification at scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Signal tracking for key events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>When you have ICP dialed in</span>
                  </li>
                </ul>
              </div>

              {/* Who Should Skip */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Who Should Skip This</h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>New founders without ICP dialed in.</strong> Stick to Apollo or Lusha to test markets first. Clay is for when you're narrowing down on perfect-fit accounts. The dealbreaker: credit-based AI usage burns through credits during testing.
                </p>
              </div>

              {/* Bottom Line */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-3">Bottom Line</h3>
                <p className="text-slate-700 leading-relaxed">
                  Clay is in a league of its own. If you have your ICP dialed in and need to operate at scale while staying personalized, Clay is unmatched. Just be prepared to invest time refining your prompts.
                </p>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="sticky bottom-0 bg-slate-100 border-t border-slate-300 p-6">
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-indigo-600 text-slate-900 font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all"
              >
                Try {tool.name} For Free <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mixmax Review Modal */}
      {isReviewModalOpen && tool.id === 'mixmax' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsReviewModalOpen(false)}>
          <div className="bg-slate-100 border border-slate-300 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="sticky top-0 bg-slate-100 border-b border-slate-300 p-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-indigo-500 flex items-center justify-center text-2xl font-bold text-indigo-600">
                  DV
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{tool.name} Review</h2>
                </div>
              </div>
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Rating */}
            <div className="p-6 border-b border-slate-300">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(2)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-600" />
                ))}
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-600" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                {[...Array(2)].map((_, i) => (
                  <Star key={`empty-${i}`} className="w-5 h-5 text-slate-300" />
                ))}
                <span className="text-xl font-bold text-slate-900 ml-2">2.5/5</span>
              </div>
              <p className="text-lg font-semibold text-amber-600">Overpriced, email-only, and significantly behind the competition in 2025</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* The Honest Take */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Honest Take</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Mixmax was a fantastic tool five years ago. Back in 2019-2020, it had top-tier email tracking, reliable analytics, and was genuinely ahead of the curve. Today? It's overpriced, email-only, and significantly behind tools like Reply.io, Lemlist, and Instantly.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Used 2019-2024, stopped using ~6 months ago. The only reason they still claim 60,000+ users is enterprise inertia—teams adopted it years ago when it was legitimately good, and now they're too deep in to migrate easily.
                </p>
              </div>

              {/* What It Does Well */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">What It Actually Does Well</h3>
                <div className="bg-slate-200 border border-slate-200 rounded-lg p-4">
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Best deliverability I've tested</strong> - Lowest bounce rates compared to other platforms, despite no native warm-up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Solid Gmail integration</strong> - Chrome extension works well if you live in your inbox</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Reliable Salesforce logging</strong> - Emails and tasks sync properly (though every tool does this now)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Why You Shouldn't Use It */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Why You Shouldn't Use It in 2025</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Email-only in a multichannel world</strong> - No LinkedIn, no SMS, no integrated calling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Clunky UI</strong> - Adding prospects to sequences is one of the worst experiences across all sales tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Behind on innovation</strong> - Recent AI features are just catch-up, no real vision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>No native warm-up</strong> - You need a separate tool (Reply, Lemlist, Instantly include this)</span>
                  </li>
                </ul>
              </div>

              {/* Pricing Problem */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Pricing Problem</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  To get Salesforce/HubSpot integration, you need Growth + CRM at <strong>$89/user/month</strong>. Compare that to:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span><strong>Reply.io ($60-70/mo)</strong> - Email + LinkedIn + calls + SMS in unified sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span><strong>Lemlist ($69-99/mo)</strong> - Multichannel + lemwarm + LinkedIn personalization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span><strong>Instantly (flat rate)</strong> - Unlimited inboxes for high-volume campaigns</span>
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-3">
                  You're paying <strong>30% more for 20% of the functionality</strong>.
                </p>
              </div>

              {/* Who Should Use It */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Who Should Actually Use Mixmax</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  <strong className="text-red-600">Nobody starting fresh.</strong> If you're building a new sales team or getting serious about outbound, do not choose Mixmax. The ROI doesn't make sense compared to what's available.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Only exception:</strong> You're already locked in and migration isn't worth the pain right now. But when your contract renews, seriously consider switching.
                </p>
              </div>

              {/* Bottom Line */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3">Bottom Line</h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Mixmax is a relic of the 2019 sales engagement landscape. It does email reliably with excellent deliverability, but so does everyone else—plus LinkedIn, SMS, and calls.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  If you're starting fresh: Choose Reply.io (multichannel), Lemlist (LinkedIn-heavy), or Instantly (email volume). If you're currently using Mixmax: Migrate when your contract renews.
                </p>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="sticky bottom-0 bg-slate-100 border-t border-slate-300 p-6">
              <a
                href="/reviews/mixmax"
                className="w-full py-3 px-6 bg-indigo-600 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all"
              >
                Read Full Review <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Instantly Review Modal */}
      {isReviewModalOpen && tool.id === 'instantly' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsReviewModalOpen(false)}>
          <div className="bg-slate-100 border border-slate-300 rounded-xl max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-indigo-500 flex items-center justify-center text-lg font-bold text-indigo-600">
                  DV
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{tool.name} Review</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                Best for high-volume cold email campaigns. Pure email focus with unlimited inboxes at a flat rate. Built for agencies and lead gen shops that need to scale fast without per-seat pricing killing margins.
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href="/comparisons/reply-vs-instantly"
                  className="w-full py-3 px-6 bg-indigo-600 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all"
                >
                  Compare Reply.io vs Instantly <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 bg-slate-200 text-slate-900 font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-slate-300 transition-all"
                >
                  Try Instantly <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="w-full py-2 px-6 text-slate-600 hover:text-slate-900 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lemlist Review Modal */}
      {isReviewModalOpen && tool.id === 'lemlist' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsReviewModalOpen(false)}>
          <div className="bg-slate-100 border border-slate-300 rounded-xl max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-indigo-500 flex items-center justify-center text-lg font-bold text-indigo-600">
                  DV
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{tool.name} Review</h2>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                Best for LinkedIn-heavy outbound with aggressive personalization. Includes lemwarm for native warm-up. If LinkedIn is your primary channel and you value creative, personalized outreach, Lemlist is the tool.
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href="/comparisons/reply-vs-instantly"
                  className="w-full py-3 px-6 bg-indigo-600 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all"
                >
                  Compare Tools <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={tool.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 bg-slate-200 text-slate-900 font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-slate-300 transition-all"
                >
                  Try Lemlist <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="w-full py-2 px-6 text-slate-600 hover:text-slate-900 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
