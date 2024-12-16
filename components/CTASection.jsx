import Link from 'next/link';
import React from 'react';
import { FaBed, FaShieldAlt } from 'react-icons/fa'; // Importing icons

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center py-16 px-8 md:px-16 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-8">Ready to Plan Your Trip?</h2>
      <div className="md:flex md:justify-center md:gap-8">
       
        <div className="mb-8 md:mb-0 md:w-1/2">
          <Link href="https://www.booking.com/" target='_blank'>
            <button className="flex items-center justify-center bg-white text-indigo-600 py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-200 w-full">
              <FaBed className="mr-3 text-xl" /> Search Budget Accommodations
            </button>
          </Link>
        </div>
       
        <div className="md:w-1/2">
          <Link href="https://www.allianztravelinsurance.com/" target='_blank'>
            <button className="flex items-center justify-center bg-white text-indigo-600 py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-200 w-full">
              <FaShieldAlt className="mr-3 text-xl" /> Get Travel Insurance Deals
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
