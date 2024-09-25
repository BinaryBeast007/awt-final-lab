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
          href="#"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
