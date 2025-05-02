import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16" aria-label="Company introduction">
        <h1 className="text-4xl font-bold mb-4">DC Mechanical, LLC</h1>
        <p className="text-xl text-gray-600">Professional High Quality HVAC services</p>
      </section>

      {/* About Section */}
      <section className="mb-16" aria-label="About our company">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">20 Years experience</h3>
          <p className="text-gray-700">
            Although DC Mechanical was founded in 2021, we have over 20 years of experience in the HVAC trade. 
            We are fully licensed, bonded & insured. From new construction, furnace & AC replacements, ductwork, 
            & service, here at DC Mechanical we have the experience necessary for all your HVAC needs. For us 
            there is no job to big or to small, give us a call today for a free estimate!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16" aria-label="Our services">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
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
      <section className="mb-16" aria-label="Customer testimonials">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="space-y-6">
          <blockquote className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 italic mb-2">
              "At this writing, Dustin is just getting his business started. My recommendation: Get on his list if you need something done to your furnace. He's going to fill up fast! Great service, proactive, really cool guy. Highly recommended."
            </p>
            <footer className="font-semibold">— Tony C. - Eden Prairie, MN</footer>
          </blockquote>
          <blockquote className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 italic mb-2">
              "DC Mechanical repaired my furnace, installed zone heating, and helped troubleshoot a major issue with my return air ducts. He definitely knows HVAC. Our home is MUCH more comfortable after his work. To put it simply, Dustin is one of the best, most trustworthy contractors I've worked with."
            </p>
            <footer className="font-semibold">— Jordan M. - Shakopee, MN</footer>
          </blockquote>
          <blockquote className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 italic mb-2">
              "DC Mechanical replaced my old furnace with a high efficiency furnace and installed and AprilAire humidifier. I was really impressed with the quality of his work and he kept in close communication. My wife has noticed a big difference in comfort which makes life a little easier. 😃 Highly recommend!!!"
            </p>
            <footer className="font-semibold">— Nick C. - Edina, MN</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16" aria-label="Contact information">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
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
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          aria-label="Book a consultation via email"
        >
          Book a Consultation
        </a>
      </div>
    </main>
  )
}
