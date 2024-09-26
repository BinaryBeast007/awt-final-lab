import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Telemedicine Service</h1>
        <p className="text-lg mb-8">
          Healthcare Made Easy, With Telemedicine.
        </p>
        <a
          href="/register"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
        >
          Registration
        </a>
        <a
          href="/alladmins"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
        >
          Get All Admins
        </a>
        <a
          href="/getuser"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
        >
          Get Admin by ID
        </a>
        <a
          href="/updateadmin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
        >
          Update Admin
        </a>
        <a
          href="/getquery"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
        >
          Get Admin by ID & Name
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
