import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/$serviceId')({
  component: ServiceDetail,
})

function ServiceDetail() {
  const { serviceId } = Route.useParams()
  
  const services = {
    'furnace-ac-replacement': {
      title: 'Complete Furnace & Air Conditioner Replacements',
      description: 'Professional installation of high-efficiency furnaces and air conditioners for optimal home comfort.',
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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{service.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Service Details</h2>
          <ul className="space-y-2">
            {service.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {detail}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-12 text-center">
        <a
          href="mailto:dcmechanicalmn@gmail.com"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Request a Quote
        </a>
      </div>
    </main>
  )
} 