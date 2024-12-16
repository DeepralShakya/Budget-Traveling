import React from "react";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="w-full bg-gray-100 p-6 border-l border-gray-300 rounded-lg">

      <div className="mb-14">
        <h3 className="text-xl font-bold mb-6">Popular Posts</h3>
        <ul>
          <li className="mb-4">
            <a
              href="https://www.nomadicmatt.com/travel-guides/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row md:flex-col lg:flex-row items-center gap-4"
            >
              <img
                src="/images/post1-thumbnail.png"
                alt="Post 1"
                className="w-16 h-16 object-cover rounded"
              />
              <span className="text-center md:text-center lg:text-left">
                10 Best Budget Destinations for 2024
              </span>
            </a>
          </li>

          <li className="mb-4">
            <a
              href="https://www.skyscanner.net/flights"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row md:flex-col lg:flex-row items-center gap-4"
            >
              <img
                src="/images/skyscanner-banner.png"
                alt="Post 2"
                className="w-16 h-16 object-cover rounded"
              />
              <span className="text-center md:text-center lg:text-left">How to Find Cheap Flights Like a Pro</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.thebrokebackpacker.com/travel-resources/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row md:flex-col lg:flex-row items-center gap-4"
            >
              <img
                src="/images/post3-thumbnail.jpeg"
                alt="Post 3"
                className="w-16 h-16 object-cover rounded"
              />
              <span className="text-center md:text-center lg:text-left">Top 5 Budget Travel Accessories</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-14">
        <h3 className="text-xl font-bold mb-4">Featured Resources</h3>
        <a
          href="https://www.skyscanner.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/skyscanner-banner.png"
            alt="Flight Deals"
            className="w-full mb-4 rounded"
          />
        </a>
        <a
          href="https://www.booking.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/booking-banner.jpg"
            alt="Hotel Deals"
            className="w-full mb-4 rounded"
          />
        </a>
        <a
          href="https://www.thebrokebackpacker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/banner3.png"
            alt="Hotel Deals"
            className="w-full mb-4 rounded"
          />
        </a>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul>
          <li className="mb-2">
            <a
              href="https://www.nomadicmatt.com/travel-guides/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-400"
            >
              Budget Destinations
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.thebrokebackpacker.com/the-best-gear/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-400"
            >
              Travel Gear
            </a>
          </li>
          <li>
            <a
              href="https://www.skyscanner.net/news"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-400"
            >
              Travel Tips
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
