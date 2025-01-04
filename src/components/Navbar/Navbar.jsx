import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    
    const name = localStorage.getItem("name");
    if (token) {
      setIsLoggedIn(true);
      setUserName(name || "User");
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Handle Scroll to Show/Hide Navbar
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsVisible(false); // Hide navbar
      } else {
        setIsVisible(true); // Show navbar
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex space-x-3">
        <img src={logo} className=" w-20 h-20" />
        <div className="text-2xl flex font-bold pt-5 text-indigo-600">
        <Link to="/">Vinayak Tours</Link>
        </div>
         </div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
          <li><Link to="/activity" className="hover:text-indigo-600">Activity</Link></li>
          <li><Link to="/destination" className="hover:text-indigo-600">Destination</Link></li>
          
          <li><Link to="/blog" className="hover:text-indigo-600">Blog</Link></li>
          <li><Link to="/about" className="hover:text-indigo-600">About</Link></li>
          {!isLoggedIn ? (
            <li><Link to="/login" className="hover:text-indigo-600">Login</Link></li>
          ) : (
            <li className="relative group">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              <ul className="absolute right-0 w-48 bg-white shadow-lg rounded-lg hidden group-hover:block">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <span className="text-gray-700">{userName}</span>
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </li>
          )}
        </ul>

        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
