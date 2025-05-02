import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* About Section */}
      <section className="mb-16">
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
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">New Construction</h3>
            <p className="text-gray-600">Expert installation of HVAC systems for new buildings</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Furnace & AC Replacements</h3>
            <p className="text-gray-600">Professional replacement of heating and cooling systems</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Ductwork</h3>
            <p className="text-gray-600">Custom ductwork design and installation</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Service & Maintenance</h3>
            <p className="text-gray-600">Regular maintenance and repair services</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 italic mb-2">
              "At this writing, Dustin is just getting his business started. My recommendation: Get on his list if you need something done to your furnace. He's going to fill up fast! Great service, proactive, really cool guy. Highly recommended."
            </p>
            <p className="font-semibold">— Tony C. - Eden Prairie, MN</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 italic mb-2">
              "DC Mechanical repaired my furnace, installed zone heating, and helped troubleshoot a major issue with my return air ducts. He definitely knows HVAC. Our home is MUCH more comfortable after his work. To put it simply, Dustin is one of the best, most trustworthy contractors I've worked with."
            </p>
            <p className="font-semibold">— Jordan M. - Shakopee, MN</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 italic mb-2">
              "DC Mechanical replaced my old furnace with a high efficiency furnace and installed and AprilAire humidifier. I was really impressed with the quality of his work and he kept in close communication. My wife has noticed a big difference in comfort which makes life a little easier. 😃 Highly recommend!!!"
            </p>
            <p className="font-semibold">— Nick C. - Edina, MN</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            Licensed, bonded, & insured.
          </p>
          <p className="text-gray-700">
            Email: dcmechanicalmn@gmail.com
          </p>
        </div>
      </section>

      {/* Book Consultation Button */}
      <div className="text-center">
        <a
          href="mailto:dcmechanicalmn@gmail.com"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Book a Consultation
        </a>
      </div>
    </div>
  )
}
