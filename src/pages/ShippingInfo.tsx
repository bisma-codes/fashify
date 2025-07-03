import React from 'react';

const ShippingInfo: React.FC = () => (
  <div className="max-w-2xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-4">Shipping Info</h1>
    <p className="mb-2">Learn more about our shipping options and delivery times:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Standard and express shipping available</li>
      <li>Free shipping on orders over $50</li>
      <li>Order tracking and delivery updates</li>
      <li>International shipping options</li>
    </ul>
    <p className="mt-4 text-gray-500">For more details, please contact our support team.</p>
  </div>
);

export default ShippingInfo; 