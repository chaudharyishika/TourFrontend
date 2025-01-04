import React from "react";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div className="bg-gray-100 lg:pt-[1300px] ">
      {/* Header Section */}
      <section className="bg-cover bg-center h-[20vh] flex flex-col items-center justify-center text-black bg-[url('../../assets/about-banner.jpg')]">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl font-medium">Turning Your Travel Dreams into Unforgettable Memories</p>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-1">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Vinayak Tours</h2>
          <p className="text-gray-700 leading-relaxed">
            At <strong className="text-indigo-600">Vinayak Tours</strong>, we believe in turning your travel dreams into unforgettable memories. Based in the heart of Devbhumi, our mission is to offer personalized travel experiences that go beyond your expectations. Whether you're seeking serene escapes, thrilling adventures, or cultural discoveries, we are here to make your journey extraordinary.
          </p>
        </div>

        {/* What We Provide Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Provide</h2>
          <ul className="space-y-6">
            <li>
              <strong className="text-indigo-600">Comprehensive Travel Packages:</strong> From meticulously planned itineraries to bespoke travel experiences, we offer a range of holiday packages tailored to suit your preferences.
            </li>
            <li>
              <strong className="text-indigo-600">Premium Transportation Services:</strong> Your comfort is our priority. We provide well-maintained, air-conditioned vehicles driven by professional chauffeurs.
            </li>
            <li>
              <strong className="text-indigo-600">Memorable Activities:</strong> Vinayak Tours specializes in organizing activities like trekking, river rafting, camping, and more.
            </li>
            <li>
              <strong className="text-indigo-600">Hassle-Free Accommodations:</strong> We partner with top-notch hotels and resorts to provide luxurious stays.
            </li>
            <li>
              <strong className="text-indigo-600">Experienced Guides:</strong> Our local and knowledgeable guides ensure authentic and safe experiences.
            </li>
          </ul>
        </div>

        {/* Facilities Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Facilities</h2>
          <ul className="space-y-6">
            <li>
              <strong className="text-indigo-600">24/7 Customer Support:</strong> Always here to assist you before, during, and after your journey.
            </li>
            <li>
              <strong className="text-indigo-600">Customizable Tours:</strong> Tailored itineraries to match your interests and budget.
            </li>
            <li>
              <strong className="text-indigo-600">Safe and Secure Bookings:</strong> Transparent pricing with no hidden charges.
            </li>
            <li>
              <strong className="text-indigo-600">Exclusive Offers:</strong> Seasonal discounts to make your trips more affordable.
            </li>
          </ul>
        </div>

        {/* Gift Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">A Gift for You</h2>
          <p className="text-gray-700 leading-relaxed">
            At Vinayak Tours, we cherish our customers and the memories we create together. To express our gratitude, we provide a <strong className="text-indigo-600">special gift</strong> to all our customers as they leave. It’s our way of saying “Thank You” for choosing us to be a part of your journey.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <ul className="space-y-6">
            <li>Trusted by countless travelers for our reliable and professional services.</li>
            <li>A team that goes the extra mile to make your trips seamless and delightful.</li>
            <li>A legacy of creating lifelong memories for our customers.</li>
          </ul>
        </div>
      </section>
      
    </div>
  );
}

export default About;
