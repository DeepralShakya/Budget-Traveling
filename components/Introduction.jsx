import React from 'react';

const Introduction = () => {
  return (
    <section id="introduction" className="flex flex-col md:flex md:flex-row md:px-10 md:pb-12 pb-6 px-4 items-center justify-center md:gap-6">
      <div className="md:w-1/2">
        <img src="/images/happy_traveler.jpg" alt="Happy Traveler" className="w-full h-auto" />
      </div>
      <div className="p-2 md:w-1/2">
        <p className="text-2xl leading-8 text-justify">
          Budget traveling is all about planning ahead and being resourceful. Whether it's finding affordable accommodations or learning how to travel like a local, this guide has everything you need to get started!
        </p>
      </div>
      
    </section>
  );
};

export default Introduction;
