import React, { useState } from "react";
import trekking from "../../assets/trekking.png";
import rafting from "../../assets/rafting.png";
import camping from "../../assets/camping.png";
import paragliding from "../../assets/paragliding.png";
import scubadiving from "../../assets/scubadiving.png";
import wildlifeSafari from "../../assets/wildlifeSafari.png";
import Footer from "../../components/Footer/Footer";
import Form from "../../pages/Dashbaord/Form"; // Import the Form component
import whatsapp from "../../assets/whatsapp.png";
import call from "../../assets/call.png";
function ActivityDisplay() {
  const activities = [
    { img: trekking, title: "Trekking", description: "Discover scenic trails and breathtaking landscapes on guided treks." },
    { img: rafting, title: "River Rafting", description: "Experience the thrill of white-water rafting on rushing rivers." },
    { img: camping, title: "Camping", description: "Enjoy starlit nights and serene surroundings with our camping adventures." },
    { img: paragliding, title: "Paragliding", description: "Soar through the skies and enjoy breathtaking aerial views." },
    { img: scubadiving, title: "Scuba Diving", description: "Dive into the deep blue and explore vibrant marine life." },
    { img: wildlifeSafari, title: "Wildlife Safari", description: "Encounter majestic wildlife in their natural habitats on a thrilling safari." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const nextActivity = () => {
    if (currentIndex < activities.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevActivity = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleEnquiryClick = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="bg-gray-100 lg:pt-[1000px] sm:pt-0  ">
      {/* Hero Section */}
      {/* Activities Slider Section */}
      <section className="py-8  sm:py-12 bg-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          Our Activities
        </h2>
        <div className="relative max-w-full md:max-w-5xl mx-auto">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-2 sm:px-4"
                  style={{ width: "100%" }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={activity.img}
                      alt={activity.title}
                      className="w-full h-40 sm:h-48 md:h-56 object-cover"
                    />
                    <div className="p-4 sm:p-6 text-center">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 text-indigo-600">
                        {activity.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2 sm:mb-4">
                        {activity.description}
                      </p>
                      <button
                        onClick={handleEnquiryClick}
                        className="px-4 sm:px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
                      >
                        Enquiry Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevActivity}
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-200"
            disabled={currentIndex === 0}
          >
            &#8249;
          </button>
          <button
            onClick={nextActivity}
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-200"
            disabled={currentIndex === activities.length - 1}
          >
            &#8250;
          </button>
        </div>
      </section>

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

      {/* Why Choose Us Section */}
      <section className="py-8 sm:py-12 bg-gray-100">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          Why Choose Our Activities?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-full md:max-w-6xl mx-auto px-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2 sm:mb-4">
              Expert Guides
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Our activities are led by experienced guides ensuring your safety and enjoyment.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2 sm:mb-4">
              Top-Notch Equipment
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              We provide high-quality equipment for all activities to ensure the best experience.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2 sm:mb-4">
              Unforgettable Experiences
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Create memories that will last a lifetime with our well-curated activities.
            </p>
          </div>
        </div>
      </section>
     <div className="fixed bottom-4 right-4">
      <a href="https://wa.me/917048992287?text=Hello How can I help you?" target="_blank">
      <img src={whatsapp} className="w-24 h-24 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 "/>
      </a>
      </div>
      <div className="fixed bottom-4 left-4 ">
      <a href="tel:+91-7048992287" target="_blank">
      <img src={call} className="w-24 h-24 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 "/>
      </a>

      </div>
    </div>
  );
}

export default ActivityDisplay;
