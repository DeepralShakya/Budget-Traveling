import React from 'react';

const Header = () => {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <div className="px-2 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The Beginner's Guide to Budget Traveling</h1>
        <p className="text-xl mb-6">Explore the World on a Shoestring Budget</p>
        <button className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-500">
          <a href="#introduction">Start Your Journey</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
