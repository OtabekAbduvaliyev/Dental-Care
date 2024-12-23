import React from 'react';

export default function About() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Dentist",
      description: "20+ years of experience in general and cosmetic dentistry",
      image: "/team/dentist1.jpg"
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      description: "Specialist in braces and Invisalign treatments",
      image: "/team/dentist2.jpg"
    },
    {
      name: "Dr. Emily Brown",
      role: "Pediatric Dentist",
      description: "Expert in children's dental care",
      image: "/team/dentist3.jpg"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About DentCare</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve been providing quality dental care to our community for over two decades. 
            Our mission is to deliver exceptional dental services with a gentle touch and 
            state-of-the-art technology.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">Over 20 years of dental excellence and patient care</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment and techniques</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-2">Patient-Focused</h3>
              <p className="text-gray-600">Comfortable and caring environment for all patients</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200">
                  {/* Add actual images later */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
