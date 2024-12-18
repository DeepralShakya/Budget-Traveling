import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <div>
        <a href="/" className="mr-6">Home</a>
        <a href="#tips" className="mr-6">Budget Travel Tips</a>
        <a href="/terms-of-service" className="mr-6">Terms of Service</a>
        <a href="/privacy-policy" className="mr-6">Privacy Policy</a>
        <a href="/contact" className="mr-6">Contact Us</a>
      </div>
      <p className="mt-4">© 2024 budget-traveling. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
