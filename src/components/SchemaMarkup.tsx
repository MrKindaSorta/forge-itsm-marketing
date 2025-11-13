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
      // Add your social media links here when available
      // 'https://twitter.com/forgeitsm',
      // 'https://linkedin.com/company/forgeitsm'
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
    keywords: 'easy ticketing system, simple ITSM, cheap ITSM, affordable help desk, simple help desk software, cheap alternative to ServiceNow, ITSM for small business',
    offers: [
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      ratingCount: '22',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah M., IT Manager',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        reviewBody: 'We switched from Zendesk and our agents were productive on day one. The interface is so intuitive that we barely needed training. What used to take 3 clicks now takes 1.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'James T., Support Team Lead',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        reviewBody: 'After struggling with Freshdesk\'s complexity, Forge ITSM feels like a breath of fresh air. Clean, simple, and actually enjoyable to use. Our team was fully onboarded in 2 days instead of 2 weeks.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Michael R., Operations Manager',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        reviewBody: 'Our average resolution time dropped from 14 hours to under 7 hours in the first month. That\'s real time back in our day.',
      },
    ],
    description: 'Simple and affordable easy ITSM ticketing system for small business. Professional help desk with SLA management, knowledge base, and real-time notifications. No per-user fees.',
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
