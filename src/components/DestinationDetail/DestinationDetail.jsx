import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { destination_list } from "../../assets/assets"; // Assuming destination_list is your local data
import Form from "../../pages/Dashbaord/Form"; // Import the Form component

function DestinationDetail() {
  const { id } = useParams(); // Get the id from the URL
  const [destination, setDestination] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  useEffect(() => {
    // Find the destination based on the id from the route
    const selectedDestination = destination_list.find((dest) => dest._id === id);
    setDestination(selectedDestination);
  }, [id]); // Rerun this effect when id changes

  const handleEnquiryClick = () => {
    setShowForm(true); // Show the form
  };

  const closeForm = () => {
    setShowForm(false); // Close the form
  };

  if (!destination) {
    return <p className="text-center text-gray-500 mt-12">Loading...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen lg:pt-[1500px] md:pt-[1000px] sm:pt-[1000px]">
      {/* Header Section */}
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 sm:h-60 md:h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 sm:px-8">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            {destination.name}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Overview */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4">Overview</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            {destination.about}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-4">Highlights</h3>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
            {destination.highlights?.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        {/* Things to Do */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-4">Things to Do</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            {destination.thingsToDo}
          </p>
        </div>

        {/* Best Time to Visit */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-4">Best Time to Visit</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            {destination.bestTimeToVisit}
          </p>
        </div>

        {/* Enquiry Button */}
        <div className="text-center mt-6">
          <button
            onClick={handleEnquiryClick}
            className="bg-indigo-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Enquiry Now
          </button>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[90%] sm:w-[500px] relative">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
}

export default DestinationDetail;
