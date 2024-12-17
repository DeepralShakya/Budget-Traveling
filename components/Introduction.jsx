import Content from './Content';

const Introduction = () => {
  return (
    <>
      <section
        id="introduction"
        className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-12 py-8 md:py-16 bg-gray-50"
      >
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/images/happy_traveler.jpg"
            alt="Happy traveler exploring new destinations"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="p-2 md:w-1/2">
          <p className="text-2xl leading-8 text-gray-800 text-justify">
            Budget traveling is all about planning ahead and being resourceful.
            Whether it's finding affordable accommodations or learning how to
            travel like a local, this guide has everything you need to get
            started!
          </p>
        </div>
      </section>

      {/* Valuable Content Section */}
      <Content />
    </>
  );
};

export default Introduction;
