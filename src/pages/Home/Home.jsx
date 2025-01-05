import React, { useState } from "react";
import { Link } from "react-router-dom";
import manali from "../../assets/manali.png";
import goa from "../../assets/goa.png";
import chardham from "../../assets/chardham.png";
import adventure from "../../assets/adventure.png";
import honeymoon from "../../assets/honeymoon.png";
import axios from "axios";
import ReviewSection from "../../components/Review/Review";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    selectedPackage: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneNumber || !formData.selectedPackage) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    try {
      const API_URL = "https://backsampl-3.onrender.com/api/form";
      const response = await axios.post(API_URL, formData);
      setFormStatus("Form submitted successfully!");
      setFormData({ name: "", phoneNumber: "", selectedPackage: "" });
    } catch (error) {
      setFormStatus("Error submitting form. Please try again.");
    }
  };

  const packageData = {
    mountain: [
      { id: 1, name: "Manali Adventure", details: "Explore the scenic beauty of Manali with adventure activities." },
      { id: 2, name: "Leh-Ladakh Expedition", details: "Experience the thrill of Leh and Ladakh with breathtaking views." },
    ],
    beach: [
      { id: 1, name: "Goa Beach Holiday", details: "Relax on serene beaches of Goa and enjoy vibrant nightlife." },
      { id: 2, name: "Andaman Getaway", details: "Explore exotic beaches and enjoy snorkeling or scuba diving." },
    ],
    heritage: [
      { id: 1, name: "Golden Triangle Tour", details: "Explore Delhi, Agra, and Jaipur's rich heritage and wonders." },
    ],
    honeymoon: [
      { id: 1, name: "Maldives Bliss", details: "Romantic getaway in the Maldives with overwater villas." },
    ],
    adventure: [
      { id: 1, name: "Bungee Jumping Rishikesh", details: "Feel the adrenaline rush with bungee jumping in Rishikesh." },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen lg:pt-[700px] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-indigo-600 py-4">
          Welcome to Our Tour Packages
        </h1>

        {/* Form */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:flex-row flex-col"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="mb-4 sm:mb-0 sm:mr-4 border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Your Phone Number"
            className="mb-4 sm:mb-0 sm:mr-4 border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          <select
            name="selectedPackage"
            value={formData.selectedPackage}
            onChange={handleInputChange}
            className="mb-4 sm:mb-0 sm:mr-4 border border-gray-300 rounded-lg px-4 py-2 w-full"
          >
            <option value="" disabled>Select a Package</option>
            {Object.entries(packageData).map(([category, packages]) =>
              packages.map((pkg) => (
                <option key={pkg.id} value={pkg.name}>
                  {pkg.name}
                </option>
              ))
            )}
          </select>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 w-full"
          >
            Submit
          </button>
        </form>
        {formStatus && <p className="text-center text-red-500">{formStatus}</p>}

        {/* Package Categories */}
        <div className="grid grid-cols-1 gap-6">
          {Object.entries(packageData).map(([category, packages]) => (
            <div key={category} className="bg-white rounded-lg shadow-lg">
              <h2 className="text-lg sm:text-xl font-bold text-indigo-600 p-4">
                {category.charAt(0).toUpperCase() + category.slice(1)} Packages
              </h2>
              <div className="p-4 space-y-4">
                {packages.map((pkg) => (
                  <Link 
                    to={`/package/${pkg.id}`} 
                    key={pkg.id} 
                    className="block hover:underline"
                  >
                    <h3 className="text-base font-semibold">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm">{pkg.details}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReviewSection />
    </div>
  );
}

export default Home;
