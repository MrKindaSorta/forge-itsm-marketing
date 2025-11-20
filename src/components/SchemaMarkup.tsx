import { Helmet } from 'react-helmet-async';

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Forge ITSM',
    url: 'https://forge-itsm.com',
    logo: 'https://forge-itsm.com/logo192.png',
    description: 'Modern ITSM and IT ticketing software built for small to medium businesses. Simple, affordable, and powerful help desk solution.',
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: 'IT Professional with 10+ years experience',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/forge-underground',
      'https://www.facebook.com/people/Forge-Underground/61583029971747/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@forge-itsm.com',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function SoftwareApplicationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Forge ITSM',
    applicationCategory: 'BusinessApplication, TicketingSystem',
    operatingSystem: 'Web Browser',
    keywords: 'free itsm software, it ticketing software, free help desk software, simple ITSM, ticket management software, help desk system, itsm platform, free it ticketing, cheap alternative to ServiceNow, ITSM for small business',
    offers: [
      {
        '@type': 'Offer',
        name: 'Free Plan',
        price: '0',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Forge ITSM',
        },
      },
      {
        '@type': 'Offer',
        name: 'Starter Plan',
        price: '59.99',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Forge ITSM',
        },
      },
      {
        '@type': 'Offer',
        name: 'Professional Plan',
        price: '79.99',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Forge ITSM',
        },
      },
      {
        '@type': 'Offer',
        name: 'Business Plan',
        price: '119.99',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'Forge ITSM',
        },
      },
    ],
    // Removed aggregateRating and reviews until real customer reviews are collected
    // Google may penalize sites with fake or unverifiable reviews
    description: 'Free ITSM software and IT ticketing system for small business. Simple help desk software with SLA management, knowledge base, and real-time notifications. Free plan available with no per-user fees.',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
