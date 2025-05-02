import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="bg-white/30 backdrop-blur-md shadow-lg border-b border-white/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            DC Mechanical
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link to="/warranty" className="text-gray-600 hover:text-gray-800">
              Warranty
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
