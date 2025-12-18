import { TOOLS } from './constants';

// Generate all routes to be pre-rendered for SEO
export const routes = [
  // Static pages
  '/',
  '/library',
  '/strategies',
  '/reviews',
  '/comparisons',
  '/faq',
  '/consulting',
  '/privacy',
  '/terms',

  // Dynamic tool review pages
  '/reviews/clay',
  '/reviews/reply-io',

  // Dynamic comparison pages
  '/comparisons/pipedrive-hubspot-salesforce',

  // Future: Generate dynamic routes from TOOLS array
  // ...TOOLS.map(tool => `/tools/${tool.id}`)
];

export default routes;
