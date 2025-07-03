import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <div className="max-w-2xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
    <p className="mb-2">Your privacy is important to us. This page outlines how we collect, use, and protect your information.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>We only collect necessary information to provide our services.</li>
      <li>Your data is never sold to third parties.</li>
      <li>We use secure technologies to protect your information.</li>
      <li>You can contact us at any time for data inquiries or removal.</li>
    </ul>
    <p className="mt-4 text-gray-500">For more details, please contact our support team.</p>
  </div>
);

export default PrivacyPolicy; 