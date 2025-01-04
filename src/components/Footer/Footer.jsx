import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkden from "../../assets/linkden.png";
import visa from '../../assets/visa.png';
import mastercard from "../../assets/mastercard.png";
import paytm from "../../assets/paytm.png";
import paypal from "../../assets/paypal.png";
import gpay from "../../assets/gpay.png";

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">Vinayak Tours</h1>
          <p className="text-sm mb-4">
            Turning Your Travel Dreams into Unforgettable Memories
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
            <img src={linkden} alt="LinkedIn" className="w-6 h-6" />
          </div>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">COMPANY</h2>
          <ul className="space-y-2">
            <Link to="/" className="hover:text-gray-400 cursor-pointer">Home</Link><br/>
            <Link to="/about" className="hover:text-gray-400 cursor-pointer">About</Link>
           
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">GET IN TOUCH</h2>
          <ul className="space-y-2">
            <li>Contact: 7895830315, 9319082652</li>
            <li>Email: vinayaktoursdevbhumi@gmail.com</li>
            <li>Office Address: SITAPUR BYPASS ROAD, Near Truck Union, Haridwar</li>
          </ul>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-8 text-center">
        <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
        <div className="flex justify-center space-x-4">
          <img src={visa} alt="Visa" className="w-10 h-10" />
          <img src={mastercard} alt="MasterCard" className="w-10 h-10" />
          <img src={paytm} alt="Paytm" className="w-10 h-10" />
          <img src={paypal} alt="PayPal" className="w-10 h-10" />
          <img src={gpay} alt="gpay" className="w-10 h-10" />
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="my-8 border-gray-700" />
      <p className="text-center text-sm">
        Copyright 2025 | Vinayak Tours - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
