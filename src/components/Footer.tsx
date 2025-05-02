import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-50 to-blue-50 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-600 hover:text-gray-800">
                  Warranty Information
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:dcmechanicalmn@gmail.com" className="text-gray-600 hover:text-gray-800">
                  dcmechanicalmn@gmail.com
                </a>
              </li>
              <li className="text-gray-600">
                Licensed, bonded, & insured
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Warranty</h3>
            <p className="text-gray-600 mb-2">
              Industry-leading 3-year labor warranty and lifetime diagnostic coverage.
            </p>
            <Link 
              to="/warranty" 
              className="inline-block bg-gradient-to-r from-orange-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} DC Mechanical, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 