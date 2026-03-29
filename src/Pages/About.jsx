import React from 'react';

const About = () => {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About CampusOne</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        CampusOne is a comprehensive campus management platform designed to simplify student life. 
        From course registration to grade tracking, we have you covered with a clean, modern interface.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">Empowering students with tools to succeed academically.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600">The leading platform for campus management worldwide.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

