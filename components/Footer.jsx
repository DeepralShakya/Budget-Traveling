import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <div>
        <a href="/" className="mr-6">Home</a>
        <a href="#sidebar" className="mr-6">Popular Posts</a>
        <a href="/privacy-policy" className="mr-6">Privacy Policy</a> {/* Added Privacy Policy link */}
      </div>
      <p className="mt-4">© 2024 budget-traveling. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
