import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const pathToLabel: Record<string, string> = {
  '/': 'Home',
  '/library': 'Tool Library',
  '/strategies': 'Playbook',
  '/consulting': 'Consulting',
  '/faq': 'FAQ'
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, ''); // Remove trailing slash

  // Don't show breadcrumbs on homepage
  if (currentPath === '' || currentPath === '/') {
    return null;
  }

  // Build breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' }
  ];

  // Add current page
  const currentLabel = pathToLabel[currentPath] || 'Page';
  breadcrumbItems.push({ label: currentLabel, path: currentPath });

  // Generate schema.org BreadcrumbList structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `https://saleshousestack.com${item.path === '/' ? '' : item.path}`
    }))
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-slate-600" aria-hidden="true" />
                )}
                {isLast ? (
                  <span className="text-slate-400" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
