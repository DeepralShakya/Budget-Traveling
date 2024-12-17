import React from 'react';

const Content = () => {
  return (
    <section id="content" className="px-4 md:px-12 py-8 md:py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
      Essential Tips to Travel the World on a Budget
      </h2>
      <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-8">
        <div className="mb-6">
          <h3 className="font-semibold text-xl text-indigo-600 mb-2">Budget Planning Tips</h3>
          <p>
            Learn how to create a travel budget by identifying major expenses like flights, accommodations, and food. Use tools like <a href="https://www.skyscanner.net" className="text-indigo-500 underline" target="_blank" rel="noopener noreferrer">Skyscanner</a> for cheap flights and apps like <a href="https://www.splitwise.com" className="text-indigo-500 underline" target="_blank" rel="noopener noreferrer">Splitwise</a> for tracking group expenses.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-xl text-indigo-600 mb-2">Affordable Accommodations</h3>
          <p>
            Discover budget-friendly stays using platforms like <a href="https://www.booking.com" className="text-indigo-500 underline" target="_blank" rel="noopener noreferrer">Booking.com</a> and <a href="https://www.hostelworld.com" className="text-indigo-500 underline" target="_blank" rel="noopener noreferrer">Hostelworld</a>. Opt for hostels, shared rentals, or homestays for a more authentic experience.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-xl text-indigo-600 mb-2">Cheap Transportation</h3>
          <p>
            Save money on transportation by booking buses and trains instead of flights. Use websites like <a href="https://www.rome2rio.com" className="text-indigo-500 underline" target="_blank" rel="noopener noreferrer">Rome2Rio</a> to find the cheapest travel options.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-xl text-indigo-600 mb-2">Packing Essentials</h3>
          <p>
            Pack light to avoid baggage fees. Bring multipurpose items like microfiber towels and reusable water bottles. Use checklists from apps like <a href="https://www.packpnt.com" className="text-indigo-500 underline" target="_blank" rel="noopener noreferrer">PackPoint</a> to ensure you don’t forget essentials.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-xl text-indigo-600 mb-2">Local Experiences</h3>
          <p>
            Enjoy local activities on a budget by visiting markets, attending free city tours, or exploring parks. Websites like <a href="https://www.guruwalk.com/" className="text-indigo-500 underline" target="_blank" rel="noopener noreferrer">GuruWalk</a> offer free walking tours in many destinations.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl text-indigo-600 mb-2">Destination Guides</h3>
          <p>
            Access detailed guides for budget-friendly destinations worldwide, including hidden gems, cheap dining spots, and free attractions. Stay informed with tips from travel blogs and forums like <a href="https://www.tripadvisor.com" className="text-indigo-500 underline" target="_blank" rel="noopener noreferrer">TripAdvisor</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
