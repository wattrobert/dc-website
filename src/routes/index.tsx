import { createFileRoute, Link } from '@tanstack/react-router'
import { Footer } from '../components/Footer'

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
  },
}

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-100 to-blue-200">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16 rounded-2xl p-8 bg-white/30 backdrop-blur-md shadow-lg border border-white/20" aria-label="Company introduction">
          <div className="max-w-xs mx-auto mb-8">
            <img 
              src="/images/brand/Logo_NoBg.png" 
              alt="DC Mechanical Logo" 
              className="w-full h-auto"
              style={{
                filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
                backgroundColor: 'transparent'
              }}
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">DC Mechanical, LLC</h1>
          <p className="text-xl text-gray-600">Professional High Quality HVAC services</p>
        </section>

        {/* About Section */}
        <section className="mb-16 rounded-2xl p-8 bg-white/30 backdrop-blur-md shadow-lg border border-white/20" aria-label="About our company">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">22 Years of Experience</h3>
            <p className="text-gray-700 mb-4">
              Founded in 2021, DC Mechanical brings over 20 years of hands-on experience in the HVAC industry to every project. 
              We are a fully licensed, bonded, and insured HVAC company proudly serving residential and commercial clients across 
              the Twin Cities metro area.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you need new construction HVAC installation, high-efficiency furnace or AC replacement, custom ductwork, 
              or fast, reliable HVAC repair services, our skilled technicians have the training and expertise to get the job done right.
            </p>
            <p className="text-gray-700 mb-6">
              No job is too big or too small. From start to finish, we're committed to providing dependable, honest service and 
              long-lasting results.
            </p>
            <div className="text-center">
              <a
                href="mailto:dcmechanicalmn@gmail.com"
                className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-blue-600 transition-colors"
                aria-label="Request a free estimate"
              >
                Request a Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-to-b from-orange-200 via-orange-100 to-blue-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(services).map(([id, service]) => (
                <Link
                  key={id}
                  to="/services/$serviceId"
                  params={{ serviceId: id }}
                  className="block group"
                >
                  <div
                    className="relative h-64 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-end"
                  >
                    <div 
                      className="absolute inset-0 transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                      style={{ 
                        backgroundImage: `url(${service.image})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center'
                      }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity group-hover:from-black/80 group-hover:via-black/50" />
                    <div className="relative z-10 p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-lg group-hover:text-blue-200 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/90 drop-shadow-md">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": Object.entries(services).map(([id, service], index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.details.join(" "),
                  "url": `https://www.dcmechanicalmn.com/services/${id}`,
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "DC Mechanical, LLC",
                    "description": "Professional HVAC services in the Twin Cities area",
                    "areaServed": "Twin Cities, Minnesota",
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "HVAC Services",
                      "itemListElement": Object.entries(services).map(([id, service]) => ({
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": service.title,
                          "description": service.description
                        }
                      }))
                    }
                  }
                }
              }))
            })}
          </script>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16 rounded-2xl p-8 bg-white/30 backdrop-blur-md shadow-lg border border-white/20" aria-label="Customer testimonials">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">a week ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "I wanted to improve ventilation in my garage and house but wasn't sure exactly what to go with. DC Mechanical provided me with a recommendation and an expert installation. 10/10 would recommend!"
              </blockquote>
              <div className="flex items-center">
                <div className="font-semibold text-gray-900">Marsha Jensen</div>
                <div className="text-gray-500 text-sm ml-2">5 reviews</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">a week ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "I had DC Mechanical do some work at my cabin in Minnesota. He was very professional, very polite and his communication was great throughout the whole process. He walked me through some things at my house in Florida also. Would do business with them again!"
              </blockquote>
              <div className="flex items-center">
                <div className="font-semibold text-gray-900">Matt S.</div>
                <div className="text-gray-500 text-sm ml-2">1 review</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">a week ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "DC mechanical was fast and reliable when our unit broke down during the height of summer. His rates are excellent and the work is solid. Definitely recommend."
              </blockquote>
              <div className="flex items-center">
                <div className="font-semibold text-gray-900">Chris Blackburn</div>
                <div className="text-gray-500 text-sm ml-2">Local Guide · 149 reviews</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">6 months ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "Great overall experience with DC Mechanical. After contacting Dustin about our dated AC that needed more R-22 refrigerant, he came by the next day to inspect the entire HVAC system and review our options of either refilling or upgrading to a new system."
              </blockquote>
              <div className="flex items-center">
                <div className="font-semibold text-gray-900">Matt Holloway</div>
                <div className="text-gray-500 text-sm ml-2">Local Guide · 2 reviews</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">9 months ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "My AC unit finally went out after 25 year of abuse. Dustin was very responsive and knowledgeable. After looking at my house and asking some questions he ran me through some options. We picked the best solution for me and he had pricing to match."
              </blockquote>
              <div className="flex items-center">
                <div className="font-semibold text-gray-900">Ryan Swanson</div>
                <div className="text-gray-500 text-sm ml-2">4 reviews</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">9 months ago</span>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "Dustin and DC Mechanical came highly recommended from a friend and did not disappoint. My AC stopped working and Dustin was professional and offered reasonable options to fix/replace my unit. Good, affordable help is hard to find, and I'm happy I have a trusted HVAC contact."
              </blockquote>
              <div className="flex items-center">
                <div className="font-semibold text-gray-900">Ben Torborg</div>
                <div className="text-gray-500 text-sm ml-2">Local Guide · 140 reviews</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://g.page/r/Cb4QJ6QZQhQHEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <span>Read all 40+ reviews on Google</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16 rounded-2xl p-8 bg-white/30 backdrop-blur-md shadow-lg border border-white/20" aria-label="Contact information">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              Licensed, bonded, & insured.
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:dcmechanicalmn@gmail.com" className="text-blue-600 hover:underline">dcmechanicalmn@gmail.com</a>
            </p>
          </div>
        </section>

        {/* Book Consultation Button */}
        <div className="text-center">
          <a
            href="mailto:dcmechanicalmn@gmail.com"
            className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-blue-600 transition-colors shadow-lg hover:shadow-xl"
            aria-label="Book a consultation via email"
          >
            Book a Consultation
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
