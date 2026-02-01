import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Breadcrumb from '../../components/Breadcrumb';

// Vite supports ?raw imports for plain text
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import articleMd from './apollo-vs-zoominfo-vs-cognism-2026.md?raw';

const ApolloVsZoomInfoVsCognism2026Page = () => {
  const metaTitle = 'Apollo vs ZoomInfo vs Cognism (2026): Pricing, Data, GDPR + Best Use Cases | Sales House';
  const metaDescription = 'Apollo, ZoomInfo, and Cognism look similar on paper. Here’s the practical 2026 breakdown: pricing reality, data quality (especially EMEA), GDPR, workflows, integrations, and who each tool is actually for.';
  const metaKeywords = 'apollo vs zoominfo, apollo vs cognism, zoominfo vs cognism, best b2b database, sales intelligence, b2b data';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Apollo vs ZoomInfo vs Cognism: The Real Differences in 2026',
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
    datePublished: '2026-02-03',
    dateModified: '2026-02-03'
  };

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <div className="p-6 max-w-4xl mx-auto">
        <Breadcrumb />

        <div className="prose prose-slate max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {articleMd}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ApolloVsZoomInfoVsCognism2026Page;
