const Page = () => {
  return (
    <div className="container mx-auto p-6 md:p-12 max-w-2xl">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-4">
        We would love to hear from you! Feel free to reach out with any questions or feedback.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4">You can reach us at:</p>
        <p className="text-lg text-blue-500 hover:underline">
          <a href="mailto:budgettraveling8@gmail.com">budgettraveling8@gmail.com</a>
        </p>
        <p className="mt-6 text-lg text-gray-700">
          If you have any questions or need assistance, drop us a message, and we'll get back to you as soon as possible!
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">© 2024 budget-traveling. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Page;
