import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/warranty')({
  component: Warranty,
})

function Warranty() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16 rounded-xl p-8 bg-gradient-to-br from-orange-50 to-blue-50" aria-label="Warranty introduction">
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
          <h1 className="text-4xl font-bold mb-4 text-gray-800">DC Mechanical Warranty Policy</h1>
          <p className="text-xl text-gray-600">Your comfort and confidence are our top priorities</p>
        </section>

        {/* Warranty Content */}
        <section className="mb-16 rounded-xl p-8 bg-gradient-to-tr from-blue-50 to-orange-50">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6">
              At DC Mechanical, your comfort and confidence are our top priorities. That's why we're proud to offer an industry-leading warranty that goes above and beyond the standard.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Included with Every Installation:</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-green-500 mr-3 mt-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">3-Year Labor Warranty</h3>
                  <p className="text-gray-700">
                    In addition to the manufacturer's warranty on equipment, we provide a full 3-year labor warranty on all installations. That means if anything goes wrong with your installation at all, you're covered—no hidden fees, no surprises.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 text-green-500 mr-3 mt-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Lifetime Diagnostic Coverage</h3>
                  <p className="text-gray-700">
                    After the 3-year labor period ends, you'll continue to enjoy free trip charges and diagnostic fees for life. We stand behind our work and want to make sure you're never left out in the cold (or heat).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 text-green-500 mr-3 mt-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Ongoing Repair Discounts</h3>
                  <p className="text-gray-700">
                    As part of our commitment to long-term service, you'll also receive 10% off all repair costs for the lifetime of your equipment.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-700 mb-6">
                We believe in building relationships with our customers based on trust, quality, and peace of mind.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Offer:</h3>
                <p className="text-gray-700">
                  Request your free estimate today and take advantage of our limited-time 15% discount on equipment purchases, available through January 31st.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-700 mb-6">
              We believe in building relationships with our customers based on trust, quality, and peace of mind.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Special Offer:</h3>
              <p className="text-gray-700">
                Request your free estimate today and take advantage of our limited-time 15% discount on equipment purchases, available through Labor Day.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16 rounded-xl p-8 bg-gradient-to-br from-orange-50 to-blue-50">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Get Started?</h2>
            <a
              href="mailto:dcmechanicalmn@gmail.com"
              className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-blue-600 transition-colors"
            >
              Request Your Free Estimate
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 