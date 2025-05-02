import { createFileRoute, Link } from '@tanstack/react-router'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16 rounded-xl p-8 bg-gradient-to-br from-orange-50 to-blue-50" aria-label="Company introduction">
          <div className="max-w-xs mx-auto mb-8">
            <img 
              src="/images/brand/Logo.jpg" 
              alt="DC Mechanical Logo" 
              className="w-full h-auto filter brightness-110 contrast-110 saturate-110"
              style={{
                mixBlendMode: 'multiply',
                filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
                backgroundColor: 'transparent'
              }}
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">DC Mechanical, LLC</h1>
          <p className="text-xl text-gray-600">Professional High Quality HVAC services</p>
        </section>

        {/* About Section */}
        <section className="mb-16 rounded-xl p-8 bg-gradient-to-tr from-blue-50 to-orange-50" aria-label="About our company">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">20 Years experience</h3>
            <p className="text-gray-700">
              Although DC Mechanical was founded in 2021, we have over 20 years of experience in the HVAC trade. 
              We are fully licensed, bonded & insured. From new construction, furnace & AC replacements, ductwork, 
              & service, here at DC Mechanical we have the experience necessary for all your HVAC needs. For us 
              there is no job to big or to small, give us a call today for a free estimate!
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16 rounded-xl p-8 bg-gradient-to-br from-orange-50 to-blue-50" aria-label="Our services">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/services/$serviceId"
              params={{ serviceId: 'furnace-ac-replacement' }}
              className="group relative block h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-[url('/images/services/furnace-hvac.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Complete Furnace & Air Conditioner Replacements</h3>
                <p className="text-gray-200">Professional installation of high-efficiency furnaces and air conditioners for optimal home comfort.</p>
              </div>
            </Link>
            <Link
              to="/services/$serviceId"
              params={{ serviceId: 'garage-heater' }}
              className="group relative block h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-[url('/images/services/garage-header.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Garage Heater Installation</h3>
                <p className="text-gray-200">Expert installation of garage heating systems to keep your workspace comfortable year-round.</p>
              </div>
            </Link>
            <Link
              to="/services/$serviceId"
              params={{ serviceId: 'mini-split' }}
              className="group relative block h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-[url('/images/services/ductless-minisplit.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Mini Split AC & Heat Pump Systems</h3>
                <p className="text-gray-200">Energy-efficient mini-split systems for targeted heating and cooling in any space.</p>
              </div>
            </Link>
            <Link
              to="/services/$serviceId"
              params={{ serviceId: 'gas-fireplace' }}
              className="group relative block h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-[url('/images/services/gas-fireplace.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Gas Fireplace Installation</h3>
                <p className="text-gray-200">Professional installation of gas fireplaces for cozy, efficient home heating.</p>
              </div>
            </Link>
            <Link
              to="/services/$serviceId"
              params={{ serviceId: 'humidifiers' }}
              className="group relative block h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-[url('/images/services/humidifier.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Humidifiers</h3>
                <p className="text-gray-200">Installation of whole-home humidification systems for improved indoor air quality.</p>
              </div>
            </Link>
            <Link
              to="/services/$serviceId"
              params={{ serviceId: 'vent-installation' }}
              className="group relative block h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-[url('/images/services/vent.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Vent Installation</h3>
                <p className="text-gray-200">Expert installation of bathroom exhaust fans and range vents for proper ventilation.</p>
              </div>
            </Link>
            <Link
              to="/services/$serviceId"
              params={{ serviceId: 'erv-hrv' }}
              className="group relative block h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-[url('/images/services/hrv.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">ERV & HRV Air Handler Installations</h3>
                <p className="text-gray-200">Energy recovery and heat recovery ventilation systems for fresh, efficient air circulation.</p>
              </div>
            </Link>
            <Link
              to="/services/$serviceId"
              params={{ serviceId: 'air-purification' }}
              className="group relative block h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-[url('/images/services/air-purifier.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Filter Systems & Air Purification</h3>
                <p className="text-gray-200">Advanced air filtration and purification systems for cleaner, healthier indoor air.</p>
              </div>
            </Link>
            <Link
              to="/services/$serviceId"
              params={{ serviceId: 'ductwork' }}
              className="group relative block h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-[url('/images/services/ductwork.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Ductwork Installation</h3>
                <p className="text-gray-200">Professional ductwork design and installation for new construction and remodels.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16 rounded-xl p-8 bg-gradient-to-tr from-blue-50 to-orange-50" aria-label="Customer testimonials">
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
        <section className="mb-16 rounded-xl p-8 bg-gradient-to-br from-orange-50 to-blue-50" aria-label="Contact information">
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
            className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-blue-600 transition-colors"
            aria-label="Book a consultation via email"
          >
            Book a Consultation
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
