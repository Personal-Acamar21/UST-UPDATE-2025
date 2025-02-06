import React from 'react';

export default function OurStaff() {
  const staff = [
    {
      name: "Kozy Ikwazom",
      role: "Head Coach – Academy General Manager",
      credentials: "United Soccer Coach License",
      experience: "5+ years"
    },
    {
      name: "Zack Ogoo",
      role: "Head Coach – Academy Technical Director",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    {
      name: "Alec Adeclat",
      role: "Head Coach – Girls Development Director",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    {
      name: "Joshua Allen",
      role: "Coach",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    {
      name: "Jason Alvarez",
      role: "Coach",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    {
      name: "Chris Leidner",
      role: "Coach",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    {
      name: "Jorge Rodriguez",
      role: "Coach",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    {
      name: "Kristina Gambino",
      role: "Coach",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    {
      name: "Joe Ogoo",
      role: "Coach",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    },
    {
      name: "Phil Iacono",
      role: "Goalkeeper Coach",
      credentials: "United Soccer Coach License",
      experience: "4+ years"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Staff</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {staff.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-[#8ED204] font-semibold mb-2">{member.role}</p>
              <div className="text-gray-600">
                <p>{member.credentials}</p>
                <p>{member.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
