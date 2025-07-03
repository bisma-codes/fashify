import React from 'react';

const TermsOfService: React.FC = () => (
  <div className="max-w-2xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
    <p className="mb-2">By using our website, you agree to the following terms and conditions:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>All content is for personal use only unless otherwise stated.</li>
      <li>Do not misuse our services or attempt to disrupt our website.</li>
      <li>We reserve the right to update these terms at any time.</li>
      <li>Contact us for any questions regarding these terms.</li>
    </ul>
    <p className="mt-4 text-gray-500">For more details, please contact our support team.</p>
  </div>
);

export default TermsOfService; 