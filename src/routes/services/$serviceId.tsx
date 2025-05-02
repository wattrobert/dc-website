import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '../../components/Footer'

export const Route = createFileRoute('/services/$serviceId')({
  component: ServiceDetail,
  head: ({ params }) => {
    const service = services[params.serviceId as keyof typeof services]
    if (!service) return {}

    return {
      title: `${service.title} | DC Mechanical, LLC`,
      meta: [
        {
          name: 'description',
          content: `${service.description} Professional installation and service in the Twin Cities area. Contact DC Mechanical for a free estimate.`,
        },
        {
          name: 'keywords',
          content: `HVAC, ${service.title.toLowerCase()}, Twin Cities, Minnesota, ${service.title.split(' ').join(', ')}, HVAC services, HVAC installation`,
        },
        {
          property: 'og:title',
          content: `${service.title} | DC Mechanical, LLC`,
        },
        {
          property: 'og:description',
          content: `${service.description} Professional installation and service in the Twin Cities area.`,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: `https://www.dcmechanicalmn.com/services/${params.serviceId}`,
        },
        {
          property: 'og:image',
          content: `https://www.dcmechanicalmn.com${service.image}`,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:site_name',
          content: 'DC Mechanical, LLC',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: `${service.title} | DC Mechanical, LLC`,
        },
        {
          name: 'twitter:description',
          content: `${service.description} Professional installation and service in the Twin Cities area.`,
        },
        {
          name: 'twitter:image',
          content: `https://www.dcmechanicalmn.com${service.image}`,
        },
      ],
    }
  },
})

const services = {
  'furnace-ac-replacement': {
    title: 'Complete Furnace & Air Conditioner Replacements',
    description: 'Professional installation of high-efficiency furnaces and air conditioners for optimal home comfort.',
    image: '/images/services/furnace-hvac.jpg',
    details: [
      'Expert installation of new high-efficiency furnaces',
      'Professional AC unit replacement',
      'Complete system testing and optimization',
      'Energy efficiency consultation',
      'Warranty registration assistance',
    ],
    benefits: [
      'Improved home comfort',
      'Lower energy bills',
      'Better indoor air quality',
      'Increased system reliability',
      'Peace of mind with professional installation',
    ],
  },
  'garage-heater': {
    title: 'Garage Heater Installation',
    description: 'Expert installation of garage heating systems to keep your workspace comfortable year-round.',
    image: '/images/services/garage-header.jpg',
    details: [
      'Custom heating solutions for any garage size',
      'Professional installation of unit heaters',
      'Proper ventilation and safety measures',
      'Energy-efficient options available',
      'Maintenance and service plans',
    ],
    benefits: [
      'Year-round workspace comfort',
      'Protection for stored items',
      'Increased property value',
      'Energy-efficient operation',
      'Professional installation and support',
    ],
  },
  'mini-split': {
    title: 'Mini Split AC & Heat Pump Systems',
    description: 'Energy-efficient mini-split systems for targeted heating and cooling in any space.',
    image: '/images/services/ductless-minisplit.jpg',
    details: [
      'Single and multi-zone systems',
      'Professional installation and setup',
      'Energy-efficient heat pump technology',
      'Quiet operation',
      'Remote control and smart features',
    ],
    benefits: [
      'Zone-based temperature control',
      'Lower energy consumption',
      'No ductwork required',
      'Year-round comfort',
      'Easy installation in any space',
    ],
  },
  'gas-fireplace': {
    title: 'Gas Fireplace Installation',
    description: 'Professional installation of gas fireplaces for cozy, efficient home heating.',
    image: '/images/services/gas-fireplace.jpg',
    details: [
      'Expert gas line installation',
      'Professional venting solutions',
      'Safety inspection and testing',
      'Remote control setup',
      'Maintenance recommendations',
    ],
    benefits: [
      'Efficient supplemental heating',
      'Enhanced home ambiance',
      'Clean, convenient operation',
      'Increased home value',
      'Professional safety assurance',
    ],
  },
  'humidifiers': {
    title: 'Humidifiers',
    description: 'Installation of whole-home humidification systems for improved indoor air quality.',
    image: '/images/services/humidifier.jpg',
    details: [
      'Whole-home humidification systems',
      'Professional installation and setup',
      'Automatic humidity control',
      'Regular maintenance service',
      'Water quality solutions',
    ],
    benefits: [
      'Improved indoor air quality',
      'Reduced static electricity',
      'Better respiratory health',
      'Protection for wood furniture',
      'Enhanced home comfort',
    ],
  },
  'vent-installation': {
    title: 'Vent Installation',
    description: 'Expert installation of bathroom exhaust fans and range vents for proper ventilation.',
    image: '/images/services/vent.jpg',
    details: [
      'Bathroom exhaust fan installation',
      'Range hood venting solutions',
      'Proper ductwork installation',
      'Noise reduction options',
      'Energy-efficient models',
    ],
    benefits: [
      'Improved indoor air quality',
      'Reduced moisture and odors',
      'Better kitchen ventilation',
      'Energy efficiency',
      'Professional installation',
    ],
  },
  'erv-hrv': {
    title: 'ERV & HRV Air Handler Installations',
    description: 'Energy recovery and heat recovery ventilation systems for fresh, efficient air circulation.',
    image: '/images/services/hrv.jpg',
    details: [
      'Energy recovery ventilation systems',
      'Heat recovery ventilation systems',
      'Professional installation and setup',
      'Regular maintenance service',
      'Energy efficiency optimization',
    ],
    benefits: [
      'Fresh, filtered air',
      'Energy savings',
      'Improved indoor air quality',
      'Reduced humidity problems',
      'Year-round comfort',
    ],
  },
  'air-purification': {
    title: 'Filter Systems & Air Purification',
    description: 'Advanced air filtration and purification systems for cleaner, healthier indoor air.',
    image: '/images/services/air-purifier.jpg',
    details: [
      'Whole-home air purification',
      'UV light installation',
      'Advanced filtration systems',
      'Regular maintenance service',
      'Air quality monitoring',
    ],
    benefits: [
      'Cleaner indoor air',
      'Reduced allergens',
      'Better respiratory health',
      'Odor elimination',
      'Peace of mind',
    ],
  },
  'ductwork': {
    title: 'Ductwork Installation',
    description: 'Professional ductwork design and installation for new construction and remodels.',
    image: '/images/services/ductwork.jpg',
    details: [
      'Custom ductwork design',
      'Professional installation',
      'Energy-efficient solutions',
      'Airflow optimization',
      'Regular maintenance service',
    ],
    benefits: [
      'Improved system efficiency',
      'Better air distribution',
      'Reduced energy costs',
      'Enhanced comfort',
      'Professional installation',
    ],
  },
}

function ServiceDetail() {
  const { serviceId } = Route.useParams()
  const service = services[serviceId as keyof typeof services]

  if (!service) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-gray-600">The requested service could not be found.</p>
      </main>
    )
  }

  return (
    <>
      <main>
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url('${service.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Logo Container */}
          <div className="relative z-10 w-full max-w-xs mx-auto mb-8">
            <img 
              src="/images/brand/Logo_NoBg.png" 
              alt="DC Mechanical Logo" 
              className="w-full h-auto"
              style={{
                filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
                mixBlendMode: 'multiply',
                backgroundColor: 'transparent'
              }}
            />
          </div>

          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{service.description}</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Details</h2>
              <ul className="space-y-2">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:dcmechanicalmn@gmail.com"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 