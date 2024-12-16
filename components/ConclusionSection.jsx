'use client'

import React, { useState } from 'react';

const ConclusionSection = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  return (
    <section className="bg-gradient-to-r from-orange-200 to-yellow-200 text-center py-16">
      <h2 className="text-2xl font-bold mb-6">Subscribe for More Travel Tips!</h2>
      <p className="text-lg mb-6">Get the latest budget travel guides straight to your inbox.</p>
      {!subscribed ? (
        <button
          onClick={handleSubscribe}
          className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-500"
        >
          Subscribe for More Travel Tips!
        </button>
      ) : (
        <p className="text-green-600 mt-4">Thank you for subscribing!</p>
      )}
    </section>
  );
};

export default ConclusionSection;
