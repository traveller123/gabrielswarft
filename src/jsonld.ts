import { BOOKING_URL } from './site';
export const jsonLd = (lang: 'de' | 'en', description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'VacationRental',
  name: 'Gabrielswarft',
  description,
  url: lang === 'de' ? 'https://gabrielswarft.de/' : 'https://gabrielswarft.de/en/',
  image: ['https://gabrielswarft.de/img/og.jpg', 'https://gabrielswarft.de/img/exterior-1600.webp'],
  address: { '@type': 'PostalAddress', addressLocality: 'Dagebüll-Fahretoft', addressRegion: 'Schleswig-Holstein', addressCountry: 'DE' },
  containsPlace: {
    '@type': 'Accommodation',
    numberOfBedrooms: 2,
    numberOfBathroomsTotal: 2,
    occupancy: { '@type': 'QuantitativeValue', maxValue: 4 },
    floorSize: { '@type': 'QuantitativeValue', value: 105, unitCode: 'MTK' },
    petsAllowed: true,
    amenityFeature: ['Sauna', 'Fireplace', 'Wifi', 'Garden', 'Terrace', 'Washing machine', 'Dishwasher', 'Parking'].map((n) => ({ '@type': 'LocationFeatureSpecification', name: n, value: true })),
  },
  potentialAction: { '@type': 'ReserveAction', target: BOOKING_URL },
});
