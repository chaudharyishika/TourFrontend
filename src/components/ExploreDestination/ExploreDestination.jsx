import React, { useState } from "react";
import { Link } from "react-router-dom";
import { destination_list } from "../../assets/assets";
import Footer from "../../components/Footer/Footer";
import Form from "../../pages/Dashbaord/Form";

function ExploreDestination() {
  const [showForm, setShowForm] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null); // Store selected destination

  const handleEnquiryClick = (destination) => {
    setSelectedDestination(destination); // Set the selected destination data
    setShowForm(true); // Show the form
  };

  const closeForm = () => {
    setShowForm(false); // Close the form
  };

  return (
    <div className="bg-gray-100 sm:px-0.5 lg:pt-[1000px] sm:pt-[400px] mt-[60rem]">
      {/* Header Section */}

      {/* Destination List Section */}
      <div className="py-8  sm:py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destination_list.map((destination) => (
            <div
              key={destination._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{destination.title}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {destination.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <button
                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
                    onClick={() => handleEnquiryClick(destination)} // Pass the destination object to the handler
                  >
                    Enquiry Now
                  </button>
                  <Link
                    to={`/package/${destination._id}`} // Pass the destination ID in the URL
                    className="flex-1 bg-gray-200 text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[500px] relative">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            {/* Pass the selected destination to the Form component */}
            <Form destination={selectedDestination} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ExploreDestination;




