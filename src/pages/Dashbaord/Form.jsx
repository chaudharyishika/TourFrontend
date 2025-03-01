import React, { useState } from "react";
import axios from "axios";

const Form = ({ destination, closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    enquiryText: "",
    selectedPackage: destination?.title || "Default Package", // Safely access title or use a default
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission status

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation to ensure all fields are filled
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.enquiryText || !formData.selectedPackage) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Submitting form data:", formData);

    setIsSubmitting(true); // Set submitting state to true

    try {
      const response = await axios.post("https://backsampl.onrender.com/api/form", formData);
      console.log("Form submitted successfully:", response.data);
      alert("Form submitted successfully!");

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        enquiryText: "",
        selectedPackage: destination?.title || "Default Package",
      });

      // Close the form popup after submission
      if (closeForm) closeForm();
    } catch (error) {
      console.error("Error submitting form:", error.response?.data?.message || error.message);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Enquiry Form</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border p-2 w-full mb-4"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          className="border p-2 w-full mb-4"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <textarea
          name="enquiryText"
          placeholder="Add your Enquiry Here"
          className="border p-2 w-full mb-4"
          value={formData.enquiryText}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2"
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
