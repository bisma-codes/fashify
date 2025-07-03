import React from 'react';

const HelpCenter: React.FC = () => (
  <div className="max-w-2xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-4">Help Center</h1>
    <p className="mb-2">Find answers to common questions and get support for your orders.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Order tracking and status updates</li>
      <li>Returns and exchanges process</li>
      <li>Payment and billing information</li>
      <li>Contact our support team for further assistance</li>
    </ul>
    <p className="mt-4 text-gray-500">Still need help? Email us at hello@fashify.com or call +1 (555) 123-4567.</p>
  </div>
);

export default HelpCenter; 