import React from 'react';

const TrackOrder: React.FC = () => (
  <div className="max-w-2xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-4">Track Your Order</h1>
    <p className="mb-2">Enter your order number below to track your shipment:</p>
    <form className="flex flex-col sm:flex-row gap-2 mt-4">
      <input type="text" placeholder="Order Number" className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600" />
      <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-pink-700 transition-colors">Track</button>
    </form>
    <p className="mt-4 text-gray-500">For help with your order, please contact our support team.</p>
  </div>
);

export default TrackOrder; 