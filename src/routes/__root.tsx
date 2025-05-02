import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'description',
        content: 'DC Mechanical, LLC - Professional HVAC services in the Greater Twin Cities area. Expert installation, maintenance, and repair of heating and cooling systems with 10 years of experience. 24/7 emergency service available.',
      },
      {
        name: 'keywords',
        content: 'HVAC, heating, cooling, furnace, AC, ductwork, Twin Cities, Minnesota, HVAC services, HVAC repair, HVAC installation, garage heater, mini split, heat pump, gas fireplace, humidifier, ERV, HRV, air purification, emergency HVAC service',
      },
      {
        name: 'author',
        content: 'DC Mechanical, LLC',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:title',
        content: 'DC Mechanical, LLC - Professional HVAC Services in Twin Cities',
      },
      {
        property: 'og:description',
        content: 'Expert HVAC services in the Greater Twin Cities area. 10 years of experience in furnace & AC replacements, garage heaters, mini splits, and more. 24/7 emergency service available.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://www.dcmechanicalmn.com',
      },
      {
        property: 'og:site_name',
        content: 'DC Mechanical, LLC',
      },
      {
        property: 'og:image',
        content: 'https://www.dcmechanicalmn.com/logo.png',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: 'DC Mechanical, LLC - Professional HVAC Services in Twin Cities',
      },
      {
        name: 'twitter:description',
        content: 'Expert HVAC services in the Greater Twin Cities area. 10 years of experience in furnace & AC replacements, garage heaters, mini splits, and more. 24/7 emergency service available.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'canonical',
        href: 'https://www.dcmechanicalmn.com',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HVACBusiness',
          name: 'DC Mechanical, LLC',
          description: 'Professional HVAC services in the Greater Twin Cities area with 10 years of experience in heating and cooling systems.',
          url: 'https://www.dcmechanicalmn.com',
          logo: 'https://www.dcmechanicalmn.com/logo.png',
          telephone: '763-300-0180',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '18315 31st Ave N',
            addressLocality: 'Minneapolis',
            addressRegion: 'MN',
            postalCode: '55447',
            addressCountry: 'US'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 45.1234,
            longitude: -93.1234
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
          },
          sameAs: [
            'https://www.facebook.com/dcmechmn',
            'https://maps.app.goo.gl/oJqBT2ekpZAHdkLR8'
          ],
          areaServed: {
            '@type': 'City',
            name: 'Greater Twin Cities',
            containedIn: {
              '@type': 'State',
              name: 'Minnesota'
            }
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'HVAC Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Complete Furnace & Air Conditioner Replacements',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Garage Heater Installation',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Mini Split AC & Heat Pump Systems',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Gas Fireplace Installation',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Humidifiers',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Vent Installation',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'ERV & HRV Air Handler Installations',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Filter Systems & Air Purification',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Ductwork Installation',
                },
              },
            ],
          },
          foundingDate: '2020',
          knowsAbout: [
            'HVAC Systems',
            'Furnace Installation',
            'Air Conditioner Installation',
            'Heat Pump Systems',
            'Ductwork',
            'Air Purification',
            'Ventilation Systems'
          ],
          priceRange: '$$',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '5',
            bestRating: '5',
            worstRating: '1'
          },
          review: [
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              },
              author: {
                '@type': 'Person',
                name: 'Tony C.'
              },
              reviewBody: 'At this writing, Dustin is just getting his business started. My recommendation: Get on his list if you need something done to your furnace. He\'s going to fill up fast! Great service, proactive, really cool guy. Highly recommended.',
              datePublished: '2024-03-19'
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              },
              author: {
                '@type': 'Person',
                name: 'Jordan M.'
              },
              reviewBody: 'DC Mechanical repaired my furnace, installed zone heating, and helped troubleshoot a major issue with my return air ducts. He definitely knows HVAC. Our home is MUCH more comfortable after his work. To put it simply, Dustin is one of the best, most trustworthy contractors I\'ve worked with.',
              datePublished: '2024-03-19'
            },
            {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '5',
                bestRating: '5'
              },
              author: {
                '@type': 'Person',
                name: 'Nick C.'
              },
              reviewBody: 'DC Mechanical replaced my old furnace with a high efficiency furnace and installed and AprilAire humidifier. I was really impressed with the quality of his work and he kept in close communication. My wife has noticed a big difference in comfort which makes life a little easier. 😃 Highly recommend!!!',
              datePublished: '2024-03-19'
            }
          ]
        }),
      },
    ],
  }),

  component: () => (
    <RootDocument>
      {/* <Header /> */}
      <Outlet />
      <TanStackRouterDevtools />
    </RootDocument>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
