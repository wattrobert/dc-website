import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/services/')({
  component: Services,
})

function Services() {
  const services = [
    {
      title: 'Complete Furnace & Air Conditioner Replacements',
      description: 'Professional installation of high-efficiency furnaces and air conditioners for optimal home comfort.',
      slug: 'furnace-ac-replacement',
    },
    {
      title: 'Garage Heater Installation',
      description: 'Expert installation of garage heating systems to keep your workspace comfortable year-round.',
      slug: 'garage-heater',
    },
    {
      title: 'Mini Split AC & Heat Pump Systems',
      description: 'Energy-efficient mini-split systems for targeted heating and cooling in any space.',
      slug: 'mini-split',
    },
    {
      title: 'Gas Fireplace Installation',
      description: 'Professional installation of gas fireplaces for cozy, efficient home heating.',
      slug: 'gas-fireplace',
    },
    {
      title: 'Humidifiers',
      description: 'Installation of whole-home humidification systems for improved indoor air quality.',
      slug: 'humidifiers',
    },
    {
      title: 'Vent Installation',
      description: 'Expert installation of bathroom exhaust fans and range vents for proper ventilation.',
      slug: 'vent-installation',
    },
    {
      title: 'ERV & HRV Air Handler Installations',
      description: 'Energy recovery and heat recovery ventilation systems for fresh, efficient air circulation.',
      slug: 'erv-hrv',
    },
    {
      title: 'Filter Systems & Air Purification',
      description: 'Advanced air filtration and purification systems for cleaner, healthier indoor air.',
      slug: 'air-purification',
    },
    {
      title: 'Ductwork Installation',
      description: 'Professional ductwork design and installation for new construction and remodels.',
      slug: 'ductwork',
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            to="/services/$serviceId"
            params={{ serviceId: service.slug }}
            className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
} 