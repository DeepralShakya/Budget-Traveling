
const ContentSection = ({ heading, icon, description, link, buttonText }) => {
  return (
    <section className="flex flex-col items-center justify-center md:flex-row p-10 bg-white border shadow-lg rounded-lg mb-6 px-4">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
        <div
          alt={heading}
          className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full text-blue-600 text-3xl"
        >
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 text-center">{heading}</h3>
      </div>

      <div className="w-full md:w-3/4 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
        <p className="text-gray-600 leading-7 text-2xl">{description}</p>
        <a href={link} target="_blank">
          <button className="bg-blue-600 text-white py-2 px-6 rounded mt-6 hover:bg-blue-500 transition-all duration-200">
            {buttonText}
          </button>
        </a>
      </div>
    </section>
  );
};

export default ContentSection;
