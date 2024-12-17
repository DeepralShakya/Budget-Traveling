import React from 'react';

const Header = () => {
  return (
    <header
      className="relative h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080?travel,landscape')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
          The Beginner's Guide to Budget Traveling
        </h1>
        <p className="text-lg md:text-2xl mb-6 font-medium drop-shadow-md">
          Explore the World on a Shoestring Budget
        </p>
        <a
          href="#introduction"
          title="Start your budget-friendly journey"
          className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-500 transition duration-300 shadow-lg"
        >
          Start Your Journey
        </a>
      </div>
    </header>
  );
};

export default Header;
