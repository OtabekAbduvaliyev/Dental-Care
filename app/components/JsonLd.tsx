import Script from 'next/script';

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'DentCare',
    description: 'Expert dental care services including general dentistry, cosmetic dentistry, orthodontics, and emergency dental care.',
    image: '/images/logo.png', // Update with your actual logo path
    '@id': 'https://yourdomain.com', // Update with your actual domain
    url: 'https://yourdomain.com', // Update with your actual domain
    telephone: '+1234567890', // Update with your actual phone number
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Dental Street', // Update with actual address
      addressLocality: 'City',
      addressRegion: 'State',
      postalCode: '12345',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128', // Update with actual coordinates
      longitude: '-74.0060'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/dentcare', // Update with actual social links
      'https://twitter.com/dentcare',
      'https://www.instagram.com/dentcare'
    ],
    priceRange: '$$',
    servesCuisine: [
      'General Dentistry',
      'Cosmetic Dentistry',
      'Orthodontics',
      'Emergency Dental Care',
      'Teeth Cleaning',
      'Dental Implants'
    ]
  };

  return (
    <Script id="json-ld" type="application/ld+json" strategy="beforeInteractive">
      {JSON.stringify(structuredData)}
    </Script>
  );
}
