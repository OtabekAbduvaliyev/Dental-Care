import React from 'react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      icon: "🦷"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with whitening, veneers, and other cosmetic procedures.",
      icon: "✨"
    },
    {
      title: "Orthodontics",
      description: "Straighten your teeth with braces and aligners for a perfect smile.",
      icon: "😁"
    },
    {
      title: "Oral Surgery",
      description: "Expert surgical procedures including wisdom teeth removal and dental implants.",
      icon: "🔧"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive dental care for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Schedule an Appointment?
          </h2>
          <Link
            href="/appointment"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
