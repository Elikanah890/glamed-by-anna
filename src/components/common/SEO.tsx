import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  schema?: Record<string, any>;
}

export function SEO({
  title,
  description,
  keywords = 'makeup artist, bridal makeup, luxury makeup, beauty, Tanzania, Mbeya, Glamed by Anna',
  ogImage = '/images/og-image.webp',
  ogType = 'website',
  canonicalUrl,
  schema,
}: SEOProps) {
  const siteName = 'Glamed by Anna';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const canonical = useMemo(() => {
    if (canonicalUrl) return canonicalUrl;
    if (typeof window !== 'undefined') return window.location.href;
    return 'https://glamedbyanna.com';
  }, [canonicalUrl]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Glamed by Anna',
  description: 'Tanzania\'s premier luxury makeup artistry studio. Professional bridal, party, and beauty makeup services.',
  url: 'https://glamedbyanna.com',
  telephone: '+255655737871',
  email: 'anniey5555@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mahakama Avenue',
    addressLocality: 'Mbeya',
    addressCountry: 'TZ',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '18:00' },
  ],
  sameAs: [
    'https://instagram.com/glamed_by_anna',
    'https://facebook.com/glamed_by_anna',
    'https://tiktok.com/@glamed_by_anna',
  ],
  priceRange: 'TZS 30,000 - TZS 250,000',
};
