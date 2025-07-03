import React from 'react';

const SizeGuide: React.FC = () => (
  <div className="max-w-2xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-4">Size Guide</h1>
    <p className="mb-2">Find your perfect fit with our comprehensive size guide:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Detailed size charts for men, women, and kids</li>
      <li>How to measure yourself for the best fit</li>
      <li>Tips for choosing the right size</li>
      <li>Contact us for personalized sizing advice</li>
    </ul>
    <p className="mt-4 text-gray-500">For more details, please contact our support team.</p>
  </div>
);

export default SizeGuide; 