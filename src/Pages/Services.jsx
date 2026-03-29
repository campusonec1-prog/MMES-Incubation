import React from 'react';

const Services = () => {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Services</h1>
      <div className="space-y-8">
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Management</h2>
          <p className="text-gray-600">Register, drop, and track your courses seamlessly.</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Grade Tracking</h2>
          <p className="text-gray-600">Real-time grade updates and GPA calculator.</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Campus Events</h2>
          <p className="text-gray-600">Stay updated with campus events and deadlines.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

