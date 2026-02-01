export type AffiliateClickParams = {
  toolId: string;
  toolName?: string;
  url: string;
  placement?: string;
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackAffiliateClick(params: AffiliateClickParams) {
  try {
    if (typeof window === 'undefined') return;
    if (typeof window.gtag !== 'function') return;

    const pagePath = window.location?.pathname || '';

    window.gtag('event', 'affiliate_click', {
      tool_id: params.toolId,
      tool_name: params.toolName,
      link_url: params.url,
      placement: params.placement,
      page_path: pagePath
    });
  } catch {
    // no-op
  }
}
