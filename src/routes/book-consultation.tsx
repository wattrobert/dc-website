import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/book-consultation')({
  component: BookConsultation,
})

function BookConsultation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Book a Consultation</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            Please contact us to schedule a consultation for your HVAC needs.
          </p>
          <p className="text-gray-700">
            Email: dcmechanicalmn@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
} 